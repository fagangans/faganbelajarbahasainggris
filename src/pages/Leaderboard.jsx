import { useMemo } from 'react';
import { motion } from 'framer-motion';
import useGameStore from '../store/useGameStore';

const MOCK_PLAYERS = [
  { name: 'Alex', avatar: '🐯', xp: 8420, streak: 45, level: 8 },
  { name: 'Maria', avatar: '🦁', xp: 7100, streak: 32, level: 7 },
  { name: 'James', avatar: '🐻', xp: 5850, streak: 21, level: 6 },
  { name: 'Priya', avatar: '🦊', xp: 4200, streak: 18, level: 5 },
  { name: 'Carlos', avatar: '🐼', xp: 3100, streak: 12, level: 4 },
  { name: 'Yuki', avatar: '🦄', xp: 2400, streak: 9, level: 3 },
  { name: 'Fatima', avatar: '🐸', xp: 1800, streak: 7, level: 3 },
  { name: 'Tom', avatar: '🐧', xp: 1200, streak: 5, level: 2 },
  { name: 'Amara', avatar: '🐉', xp: 900, streak: 3, level: 2 },
  { name: 'Leo', avatar: '🦝', xp: 500, streak: 2, level: 1 },
];

function getLevel(xp) {
  const thresholds = [0, 100, 250, 500, 900, 1400, 2100, 3000, 4200, 5800, 8000];
  let level = 1;
  for (let i = 1; i < thresholds.length; i++) {
    if (xp >= thresholds[i]) level = i + 1;
    else break;
  }
  return level;
}

const RANK_COLORS = ['#FFD700', '#C0C0C0', '#CD7F32'];
const RANK_ICONS = ['🥇', '🥈', '🥉'];

export default function Leaderboard() {
  const { username, avatar, xp, streak } = useGameStore();

  const players = useMemo(() => {
    const all = [
      { name: username, avatar, xp, streak, level: getLevel(xp), isMe: true },
      ...MOCK_PLAYERS,
    ].sort((a, b) => b.xp - a.xp);
    return all;
  }, [username, avatar, xp, streak]);

  const myRank = players.findIndex(p => p.isMe) + 1;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-24">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-4">
          <h1 className="text-xl font-extrabold text-gray-800 dark:text-white">🏆 Leaderboard</h1>
          <p className="text-sm text-gray-400 dark:text-gray-500">Weekly rankings by XP</p>
        </div>

        <div className="px-4 pt-4 space-y-3">
          {/* My rank card */}
          <motion.div
            className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-4 text-white flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-2xl font-extrabold opacity-80">#{myRank}</div>
            <div className="text-3xl">{avatar}</div>
            <div className="flex-1">
              <div className="font-extrabold">{username} (You)</div>
              <div className="text-sm text-white/70">Level {getLevel(xp)} · {xp} XP</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold">🔥 {streak}</div>
              <div className="text-xs text-white/60">streak</div>
            </div>
          </motion.div>

          {/* Top 3 */}
          <div className="grid grid-cols-3 gap-2 py-2">
            {[1, 0, 2].map((rankIdx) => {
              const p = players[rankIdx];
              if (!p) return null;
              const rank = rankIdx + 1;
              return (
                <motion.div
                  key={rankIdx}
                  className={`flex flex-col items-center p-3 rounded-2xl bg-white dark:bg-gray-800 border-2 shadow-sm ${p.isMe ? 'border-purple-400' : 'border-gray-100 dark:border-gray-700'}`}
                  style={{ borderColor: RANK_COLORS[rankIdx] }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: rankIdx * 0.1 }}
                >
                  <div className="text-2xl">{RANK_ICONS[rankIdx]}</div>
                  <div className="text-3xl mt-1">{p.avatar}</div>
                  <div className="text-xs font-extrabold text-gray-700 dark:text-gray-200 mt-1 text-center truncate w-full">{p.name}</div>
                  <div className="text-xs text-gray-400">{p.xp} XP</div>
                </motion.div>
              );
            })}
          </div>

          {/* Full list */}
          <div className="space-y-2">
            {players.map((p, i) => (
              <motion.div
                key={i}
                className={`flex items-center gap-3 p-3 rounded-2xl border-2 bg-white dark:bg-gray-800
                  ${p.isMe ? 'border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20' : 'border-gray-100 dark:border-gray-700'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
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
                  <div className={`text-sm font-extrabold ${p.isMe ? 'text-purple-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-200'}`}>
                    {p.name}{p.isMe && ' (You)'}
                  </div>
                  <div className="text-xs text-gray-400">Level {p.level} · 🔥 {p.streak}</div>
                </div>
                <div className="text-sm font-extrabold text-gray-500 dark:text-gray-400">{p.xp} XP</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
