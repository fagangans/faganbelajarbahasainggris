import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import Exercise from './pages/Exercise';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard';
import Lessons from './pages/Lessons';
import BottomNav from './components/BottomNav';
import useGameStore from './store/useGameStore';

function AppContent() {
  const location = useLocation();
  const { darkMode, init } = useGameStore();

  useEffect(() => {
    init();
  }, []);

  const hideNav = location.pathname.startsWith('/exercise') || location.pathname.startsWith('/lesson');

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lesson/:id" element={<Lesson />} />
            <Route path="/exercise/:id/:mode" element={<Exercise />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
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
      <AppContent />
    </BrowserRouter>
  );
}
