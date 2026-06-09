import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ExerciseCard from './ExerciseCard';
import { getAllUnits } from '../data/index';
import useGameStore from '../store/useGameStore';

const TOTAL_QUESTIONS = 3;

function pickQuestions(completedUnits, unlockedUnits) {
  const allUnits = getAllUnits();

  let pool = allUnits.filter(
    u => completedUnits.includes(u.id) && u.questions?.length > 0
  );

  if (pool.length === 0) {
    pool = allUnits.filter(
      u => unlockedUnits.includes(u.id) && u.questions?.length > 0
    );
  }

  if (pool.length === 0) {
    pool = allUnits.filter(u => u.id === 1 && u.questions?.length > 0);
  }

  if (pool.length === 0) return [];

  const candidates = pool
    .flatMap(u => u.questions)
    .filter(q => q.type !== 'drag_order');

  // Fisher-Yates shuffle then take TOTAL_QUESTIONS
  const arr = [...candidates];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, TOTAL_QUESTIONS);
}

export default function HeartRecoveryModal({ onClose }) {
  const { gainHeart, hearts, maxHearts, completedUnits, unlockedUnits } = useGameStore();

  const questions = useMemo(
    () => pickQuestions(completedUnits, unlockedUnits),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const [qIndex, setQIndex] = useState(0);
  const [earned, setEarned] = useState(false);

  function handleNext() {
    const next = qIndex + 1;
    if (next >= TOTAL_QUESTIONS) {
      if (hearts < maxHearts) gainHeart();
      setEarned(true);
    } else {
      setQIndex(next);
    }
  }

  if (questions.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 w-full max-w-sm text-center space-y-4">
          <p className="text-gray-600 dark:text-gray-300">No review questions available yet. Complete some lessons first!</p>
          <button
            onClick={() => onClose(false)}
            className="w-full py-3 rounded-2xl bg-gray-100 dark:bg-gray-800 font-bold text-gray-600 dark:text-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-4">
      <motion.div
        className="bg-white dark:bg-gray-900 rounded-3xl w-full max-w-lg overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <div>
            <h2 className="text-base font-extrabold text-gray-800 dark:text-white">
              Review Practice
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Answer all 3 questions to earn 1 ❤️
            </p>
          </div>
          <button
            onClick={() => onClose(false)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xl font-bold w-8 h-8 flex items-center justify-center"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Progress indicator */}
        {!earned && (
          <div className="flex items-center gap-2 px-5 pb-3">
            {Array.from({ length: TOTAL_QUESTIONS }).map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full transition-colors ${
                  i < qIndex
                    ? 'bg-green-500'
                    : i === qIndex
                    ? 'bg-blue-500'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
              />
            ))}
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 whitespace-nowrap">
              {qIndex + 1}/{TOTAL_QUESTIONS}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="px-5 pb-5">
          <AnimatePresence mode="wait">
            {earned ? (
              <motion.div
                key="earned"
                className="py-8 text-center space-y-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="text-6xl">❤️</div>
                <h3 className="text-xl font-extrabold text-gray-800 dark:text-white">
                  You earned a heart!
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Keep going — you've got this!
                </p>
                <button
                  onClick={() => onClose(true)}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold hover:opacity-90 transition-opacity"
                >
                  Continue
                </button>
              </motion.div>
            ) : (
              <ExerciseCard
                key={questions[qIndex].id + '-' + qIndex}
                question={questions[qIndex]}
                onNext={handleNext}
                onCorrect={() => {}}
                onWrong={() => {}}
                questionNumber={qIndex + 1}
                totalQuestions={TOTAL_QUESTIONS}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
