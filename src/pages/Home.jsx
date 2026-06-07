import { useEffect } from 'react';
import { motion } from 'framer-motion';
import LessonMap from '../components/LessonMap';
import Hearts from '../components/Hearts';
import useGameStore from '../store/useGameStore';

export default function Home() {
  const { xp, gems, streak, hearts, darkMode, init, getLevel, getLevelProgress } = useGameStore();

  useEffect(() => {
    init();
  }, []);

  const level = getLevel();
  const levelPct = getLevelProgress();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
        {/* Top Bar */}
        <motion.header
          className="sticky top-0 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm"
          initial={{ y: -60 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
          <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between gap-3">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">🦉</span>
              <span className="text-lg font-extrabold text-green-500 dark:text-green-400 tracking-tight">
                GrammarQuest
              </span>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-3">
              {/* Streak */}
              <div className="flex items-center gap-1 bg-orange-50 dark:bg-orange-900/20 px-2.5 py-1 rounded-full">
                <span className="animate-flicker text-lg">🔥</span>
                <span className="text-sm font-extrabold text-orange-500">{streak}</span>
              </div>

              {/* Gems */}
              <div className="flex items-center gap-1 bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 rounded-full">
                <span className="text-base">💎</span>
                <span className="text-sm font-extrabold text-blue-500">{gems}</span>
              </div>

              {/* Hearts */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-sm ${i < hearts ? '' : 'grayscale opacity-30'}`}>
                    ❤️
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* XP Level bar */}
          <div className="max-w-lg mx-auto px-4 pb-2 flex items-center gap-2">
            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 shrink-0">Lv.{level}</span>
            <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${levelPct}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
            <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0">{xp} XP</span>
          </div>
        </motion.header>

        {/* Lesson Map */}
        <main className="max-w-lg mx-auto pt-4 px-2">
          <LessonMap />
        </main>
      </div>
    </div>
  );
}
