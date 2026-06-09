import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import Exercise from './pages/Exercise';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard';
import Lessons from './pages/Lessons';
import Auth from './pages/Auth';
import Shop from './pages/Shop';
import BottomNav from './components/BottomNav';
import useGameStore from './store/useGameStore';
import { AuthProvider, useAuth } from './hooks/useAuth';
import { loadCloudProgress, mergeProgress } from './lib/syncProgress';
import { upsertLeaderboardEntry } from './lib/leaderboard';
import { getXpTheme } from './lib/xpTheme';

function AppContent() {
  const location = useLocation();
  const { darkMode, xp, init, hydrate, setUserId, clearLocalSession } = useGameStore();
  const { user, loading } = useAuth();
  const prevUserIdRef = useRef(null);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (!user) {
      // User logged out — wipe local state so next user starts clean
      if (prevUserIdRef.current !== null) {
        clearLocalSession();
      }
      prevUserIdRef.current = null;
      return;
    }

    const isNewUser = prevUserIdRef.current !== user.id;
    prevUserIdRef.current = user.id;

    if (!isNewUser) return;

    // New user logged in — clear any leftover state from previous user first
    clearLocalSession();
    setUserId(user.id);

    // Load cloud state and merge with clean local defaults
    loadCloudProgress(user.id).then((cloud) => {
      const local = useGameStore.getState();
      const merged = mergeProgress(local, cloud);
      if (merged !== local) {
        hydrate(merged);
      }
      // Re-set userId since hydrate may have cleared it
      setUserId(user.id);

      // Backfill leaderboard with current public stats (non-blocking)
      const s = useGameStore.getState();
      upsertLeaderboardEntry({
        userId: user.id,
        username: s.username,
        avatar: s.avatar,
        xp: s.xp,
        streak: s.streak,
      }).catch((e) => console.warn('Leaderboard backfill warning:', e));
    });
  }, [user]);

  if (loading) {
    return (
      <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center`}>
        <div className="text-4xl animate-bounce">🦉</div>
      </div>
    );
  }

  if (!user) {
    return <Auth />;
  }

  const hideNav = location.pathname.startsWith('/exercise') || location.pathname.startsWith('/lesson');
  const xpTheme = getXpTheme(xp);

  return (
    <div className={`${darkMode ? 'dark' : ''} ${xpTheme.className}`}>
      {/* Prestige background layer */}
      <div className="xp-bg" aria-hidden="true">
        <div className="xp-shimmer" />
      </div>
      <div className="xp-content-layer bg-gray-50/80 dark:bg-gray-950/85 min-h-screen">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lesson/:id" element={<Lesson />} />
            <Route path="/exercise/:id/:mode" element={<Exercise />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
        {!hideNav && <BottomNav />}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}
