import { motion, AnimatePresence } from 'framer-motion';
import { ACHIEVEMENTS } from '../utils/progress';

export default function AchievementModal({ achievementId, onClose }) {
  const ach = ACHIEVEMENTS[achievementId];
  if (!ach) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl text-center max-w-sm w-full mx-4"
          initial={{ scale: 0.5, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.5, y: 50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            className="text-7xl mb-4"
            animate={{ rotate: [0, -10, 10, -10, 10, 0], scale: [1, 1.2, 1.2, 1.2, 1.2, 1] }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {ach.icon}
          </motion.div>
          <div className={`inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3 ${ach.color}`}>
            ACHIEVEMENT UNLOCKED!
          </div>
          <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white mb-2">{ach.title}</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">{ach.desc}</p>
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold px-8 py-3 rounded-2xl hover:opacity-90 transition-opacity"
          >
            Awesome! 🎉
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
