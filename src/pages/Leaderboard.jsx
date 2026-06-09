import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import useGameStore from '../store/useGameStore';
import { useAuth } from '../hooks/useAuth';
import { fetchLeaderboard, subscribeToLeaderboard } from '../lib/leaderboard';
import BackButton from '../components/BackButton';

const RANK_COLORS = ['#FFD700', '#C0C0C0', '#CD7F32'];
const RANK_ICONS = ['🥇', '🥈', '🥉'];

export default function Leaderboard() {
  const { darkMode } = useGameStore();
  const { user } = useAuth();
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    try {
      setError(null);
      const data = await fetchLeaderboard(50);
      setPlayers(data);
    } catch (e) {
      console.error('Leaderboard fetch error:', e);
      setError('Could not load leaderboard. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    load();
  }, [load]);

  // Realtime subscription
  useEffect(() => {
    const unsubscribe = subscribeToLeaderboard(() => load());
    return unsubscribe;
  }, [load]);

  // Refetch when tab becomes visible again
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') load();
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [load]);

  const myRow = user ? players.find((p) => p.user_id === user.id) : null;
  const myRank = myRow ? players.indexOf(myRow) + 1 : null;

  return (
    <div className={`min-h-screen pb-24 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
            <BackButton />
            <div className="flex items-center justify-between mt-1">
              <div>
                <h1 className="text-xl font-extrabold text-gray-800 dark:text-white">🏆 Leaderboard</h1>
                <p className="text-sm text-gray-400 dark:text-gray-500">Top learners by total XP</p>
              </div>
              <button
                onClick={load}
                className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors"
              >
                ↻ Refresh
              </button>
            </div>
          </div>

          <div className="px-4 pt-4 space-y-3">
            {/* Loading */}
            {loading && (
              <div className="flex flex-col items-center py-16 gap-3">
                <div className="text-4xl animate-bounce">🦉</div>
                <p className="text-sm text-gray-400">Loading leaderboard...</p>
              </div>
            )}

            {/* Error */}
            {!loading && error && (
              <div className="text-center py-16">
                <div className="text-4xl mb-3">😕</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{error}</p>
                <button
                  onClick={load}
                  className="mt-4 px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-xl hover:bg-green-600 transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Empty */}
            {!loading && !error && players.length === 0 && (
              <div className="text-center py-16">
                <div className="text-4xl mb-3">📭</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No learners yet. Complete a lesson to appear on the leaderboard.
                </p>
              </div>
            )}

            {/* Content */}
            {!loading && !error && players.length > 0 && (
              <>
                {/* Current user card — show even if not in top 50 display */}
                {myRow ? (
                  <motion.div
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-4 text-white flex items-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="text-2xl font-extrabold opacity-80">
                      {myRank ? `#${myRank}` : '—'}
                    </div>
                    <div className="text-3xl">{myRow.avatar}</div>
                    <div className="flex-1">
                      <div className="font-extrabold">{myRow.username} <span className="text-white/70 text-sm font-normal">(You)</span></div>
                      <div className="text-sm text-white/70">Level {myRow.level} · {myRow.xp} XP</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold">🔥 {myRow.streak}</div>
                      <div className="text-xs text-white/60">streak</div>
                    </div>
                  </motion.div>
                ) : user && (
                  <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-2xl p-4 text-center">
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                      Complete a lesson to appear on the leaderboard!
                    </p>
                  </div>
                )}

                {/* Top 3 podium */}
                {players.length >= 2 && (
                  <div className="grid grid-cols-3 gap-2 py-2">
                    {[1, 0, 2].map((rankIdx) => {
                      const p = players[rankIdx];
                      if (!p) return <div key={rankIdx} />;
                      const isMe = user && p.user_id === user.id;
                      return (
                        <motion.div
                          key={rankIdx}
                          className={`flex flex-col items-center p-3 rounded-2xl bg-white dark:bg-gray-800 border-2 shadow-sm`}
                          style={{ borderColor: isMe ? '#a855f7' : RANK_COLORS[rankIdx] }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: rankIdx * 0.1 }}
                        >
                          <div className="text-2xl">{RANK_ICONS[rankIdx]}</div>
                          <div className="text-3xl mt-1">{p.avatar}</div>
                          <div className="text-xs font-extrabold text-gray-700 dark:text-gray-200 mt-1 text-center truncate w-full">
                            {p.username}{isMe && ' ★'}
                          </div>
                          <div className="text-xs text-gray-400">{p.xp} XP</div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}

                {/* Full list */}
                <div className="space-y-2">
                  {players.map((p, i) => {
                    const isMe = user && p.user_id === user.id;
                    return (
                      <motion.div
                        key={p.user_id}
                        className={`flex items-center gap-3 p-3 rounded-2xl border-2 bg-white dark:bg-gray-800
                          ${isMe ? 'border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20' : 'border-gray-100 dark:border-gray-700'}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 }}
                      >
                        <div className="w-7 text-center">
                          {i < 3 ? (
                            <span className="text-lg">{RANK_ICONS[i]}</span>
                          ) : (
                            <span className="text-sm font-bold text-gray-400">#{i + 1}</span>
                          )}
                        </div>
                        <div className="text-2xl">{p.avatar}</div>
                        <div className="flex-1">
                          <div className={`text-sm font-extrabold ${isMe ? 'text-purple-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-200'}`}>
                            {p.username}{isMe && ' (You)'}
                          </div>
                          <div className="text-xs text-gray-400">Level {p.level} · 🔥 {p.streak}</div>
                        </div>
                        <div className="text-sm font-extrabold text-gray-500 dark:text-gray-400">{p.xp} XP</div>
                      </motion.div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
