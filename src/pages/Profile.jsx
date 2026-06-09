import { useState } from 'react';
import { motion } from 'framer-motion';
import useGameStore from '../store/useGameStore';
import { ACHIEVEMENTS, SECTION_DEFS } from '../utils/progress';
import { useAuth } from '../hooks/useAuth';
import BackButton from '../components/BackButton';

const AVATARS = ['🦉', '🐯', '🦁', '🐻', '🐼', '🦊', '🐺', '🦝', '🐸', '🐧', '🦄', '🐉'];

function AchievementBadge({ id, earned }) {
  const ach = ACHIEVEMENTS[id];
  if (!ach) return null;
  return (
    <motion.div
      className={`flex flex-col items-center gap-1 p-3 rounded-2xl border-2 transition-all
        ${earned ? `${ach.color} border-transparent text-white` : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 opacity-40'}`}
      whileHover={earned ? { scale: 1.05 } : {}}
    >
      <span className="text-2xl">{ach.icon}</span>
      <span className="text-xs font-bold text-center leading-tight">{ach.title}</span>
    </motion.div>
  );
}

export default function Profile() {
  const { username, avatar, xp, gems, streak, completedUnits, achievements, darkMode, setUsername, setAvatar, toggleDarkMode, resetProgress, getLevel, getLevelProgress } = useGameStore();
  const { user, signOut } = useAuth();
  const [editing, setEditing] = useState(false);
  const [nameInput, setNameInput] = useState(username);
  const [showReset, setShowReset] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const level = getLevel();
  const levelPct = getLevelProgress();
  const totalUnits = 145;
  const completionPct = Math.round((completedUnits.length / totalUnits) * 100);

  function saveProfile() {
    if (nameInput.trim()) setUsername(nameInput.trim());
    setEditing(false);
  }

  return (
    <div className={`min-h-screen pb-24 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
        <div className="max-w-lg mx-auto px-4 pt-4 space-y-5">
          <BackButton />
          {/* Header card */}
          <motion.div
            className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-6 text-white shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Avatar */}
            <div className="text-center mb-4">
              <div className="text-7xl mb-2">{avatar}</div>
              {editing ? (
                <div>
                  <input
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    className="bg-white/20 border border-white/30 rounded-xl px-3 py-2 text-white placeholder-white/60 text-center font-bold w-full mb-2"
                    placeholder="Your name"
                  />
                  <button onClick={saveProfile} className="bg-white text-purple-600 font-bold px-4 py-1.5 rounded-xl text-sm">Save</button>
                </div>
              ) : (
                <div>
                  <div className="text-2xl font-extrabold">{username}</div>
                  <button onClick={() => setEditing(true)} className="text-white/70 text-sm mt-1 hover:text-white transition-colors">Edit profile ✏️</button>
                </div>
              )}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-white/10 rounded-2xl p-2">
                <div className="text-xl font-extrabold">{level}</div>
                <div className="text-xs text-white/70">Level</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-2">
                <div className="text-xl font-extrabold">{xp}</div>
                <div className="text-xs text-white/70">XP</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-2">
                <div className="text-xl font-extrabold">{streak}</div>
                <div className="text-xs text-white/70">Streak 🔥</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-2">
                <div className="text-xl font-extrabold">{completedUnits.length}</div>
                <div className="text-xs text-white/70">Done</div>
              </div>
            </div>

            {/* Level bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-white/70 mb-1">
                <span>Level {level}</span>
                <span>{levelPct}% to Level {level + 1}</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white/80 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${levelPct}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Choose avatar */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="font-extrabold text-gray-700 dark:text-gray-200 mb-3">Choose Avatar</h3>
            <div className="flex flex-wrap gap-2">
              {AVATARS.map((em) => (
                <button
                  key={em}
                  onClick={() => setAvatar(em)}
                  className={`text-3xl p-2 rounded-xl transition-all ${em === avatar ? 'bg-purple-100 dark:bg-purple-900/30 ring-2 ring-purple-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  {em}
                </button>
              ))}
            </div>
          </div>

          {/* Progress overview */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-extrabold text-gray-700 dark:text-gray-200">Overall Progress</h3>
              <span className="text-sm font-bold text-gray-400">{completedUnits.length}/{totalUnits}</span>
            </div>
            <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                initial={{ width: 0 }}
                animate={{ width: `${completionPct}%` }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{completionPct}% of English Grammar in Use completed</p>
          </div>

          {/* Achievements */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="font-extrabold text-gray-700 dark:text-gray-200 mb-3">Achievements ({achievements.length}/{Object.keys(ACHIEVEMENTS).length})</h3>
            <div className="grid grid-cols-3 gap-2">
              {Object.keys(ACHIEVEMENTS).map((id) => (
                <AchievementBadge key={id} id={id} earned={achievements.includes(id)} />
              ))}
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 space-y-3">
            <h3 className="font-extrabold text-gray-700 dark:text-gray-200">Settings</h3>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-600 dark:text-gray-300">Dark Mode</span>
              <button
                onClick={toggleDarkMode}
                className={`relative w-14 h-7 rounded-full transition-colors ${darkMode ? 'bg-purple-500' : 'bg-gray-200 dark:bg-gray-600'}`}
              >
                <motion.div
                  className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-sm"
                  animate={{ x: darkMode ? 28 : 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-600 dark:text-gray-300">Gems</span>
              <span className="font-bold text-blue-500">{gems} 💎</span>
            </div>
            {user && (
              <div className="flex items-center justify-between pt-1 border-t border-gray-100 dark:border-gray-700">
                <span className="font-semibold text-gray-600 dark:text-gray-300 text-sm">{user.email}</span>
                {showLogout ? (
                  <div className="flex gap-2">
                    <button onClick={() => setShowLogout(false)} className="text-xs px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-500">Batal</button>
                    <button onClick={signOut} className="text-xs px-3 py-1 rounded-lg bg-red-500 text-white font-bold">Logout</button>
                  </div>
                ) : (
                  <button onClick={() => setShowLogout(true)} className="text-sm text-red-400 font-semibold hover:text-red-500">Logout</button>
                )}
              </div>
            )}
          </div>

          {/* Danger zone */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
            {showReset ? (
              <div className="space-y-3">
                <p className="text-sm font-bold text-red-500 text-center">Are you sure? This will reset ALL progress!</p>
                <div className="flex gap-3">
                  <button onClick={() => setShowReset(false)} className="flex-1 py-2.5 rounded-xl border-2 border-gray-200 dark:border-gray-600 font-bold text-gray-500">Cancel</button>
                  <button onClick={() => { resetProgress(); setShowReset(false); }} className="flex-1 py-2.5 rounded-xl bg-red-500 text-white font-bold">Reset</button>
                </div>
              </div>
            ) : (
              <button onClick={() => setShowReset(true)} className="w-full py-2.5 rounded-xl text-red-500 font-bold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-sm">
                Reset Progress
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
