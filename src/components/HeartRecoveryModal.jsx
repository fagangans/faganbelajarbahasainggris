import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllUnits } from '../data/index';
import useGameStore from '../store/useGameStore';
import { playCorrect, playWrong } from '../utils/audio';

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

  const arr = [...candidates];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, TOTAL_QUESTIONS);
}

function normalizeAnswer(str) {
  return str.toLowerCase().replace(/[.,!?;:'"]/g, '').trim().replace(/\s+/g, ' ');
}

function ReviewQuestion({ question, onNext }) {
  const [selected, setSelected] = useState(null);
  const [inputVal, setInputVal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const inputRef = useRef(null);

  // Focus fill_blank input on mount (remount handles reset via key prop)
  useEffect(() => {
    if (question.type === 'fill_blank') inputRef.current?.focus();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = useCallback((forced) => {
    if (submitted) return;
    const answer = forced ?? (question.type === 'fill_blank' ? inputVal : selected);
    if (!answer) return;
    const correct = normalizeAnswer(String(answer)) === normalizeAnswer(String(question.answer));
    setIsCorrect(correct);
    setSubmitted(true);
    setSelected(answer);
    if (correct) playCorrect(); else playWrong();
  }, [question, inputVal, selected, submitted]);

  useEffect(() => {
    function handleKey(e) {
      if (submitted) { if (e.key === 'Enter') onNext(); return; }
      if (e.key === 'Enter') {
        if (question.type === 'fill_blank' && inputVal.trim()) handleSubmit();
        if (selected && !submitted) handleSubmit();
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [question, selected, submitted, inputVal, onNext, handleSubmit]);

  const bg = submitted
    ? isCorrect
      ? 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700'
      : 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700'
    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700';

  return (
    <motion.div
      key={question.id}
      className={`rounded-3xl border-2 p-6 shadow-sm transition-colors ${bg}`}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
          {question.type.replace('_', ' ')}
        </span>
        <span className="text-xs font-bold text-gray-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-full">
          Practice mode
        </span>
      </div>

      <p className="text-lg font-bold text-gray-800 dark:text-white mb-5 leading-relaxed">
        {question.question}
      </p>

      {question.type === 'fill_blank' && !submitted && (
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            placeholder="Type your answer…"
            className="flex-1 px-4 py-3 rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-semibold focus:outline-none focus:border-blue-400 transition-colors"
          />
          <button
            onClick={() => handleSubmit()}
            disabled={!inputVal.trim()}
            className="px-6 py-3 rounded-2xl bg-blue-500 text-white font-bold disabled:opacity-40 hover:bg-blue-600 transition-colors"
          >
            Check
          </button>
        </div>
      )}

      {question.type === 'fill_blank' && submitted && (
        <div className={`px-4 py-3 rounded-2xl font-bold ${isCorrect ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300'}`}>
          Your answer: {inputVal || '—'}
        </div>
      )}

      {(question.type === 'multiple_choice' || question.type === 'true_false' || question.type === 'error_correction') && (
        <div className="grid gap-2.5">
          {question.options.map((opt, i) => {
            let cls = 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 hover:border-blue-400 dark:hover:border-blue-500';
            if (submitted) {
              if (normalizeAnswer(opt) === normalizeAnswer(question.answer)) {
                cls = 'border-green-500 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-bold';
              } else if (normalizeAnswer(opt) === normalizeAnswer(selected) && !isCorrect) {
                cls = 'border-red-400 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300';
              } else {
                cls = 'border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 text-gray-400 dark:text-gray-500 opacity-50';
              }
            } else if (normalizeAnswer(opt) === normalizeAnswer(selected ?? '')) {
              cls = 'border-blue-400 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300';
            }
            return (
              <motion.button
                key={opt}
                onClick={() => !submitted && setSelected(opt)}
                className={`w-full text-left px-4 py-3 rounded-2xl border-2 font-semibold transition-all text-sm ${cls} flex items-center gap-3`}
                whileTap={!submitted ? { scale: 0.98 } : {}}
              >
                <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold shrink-0 opacity-70">
                  {i + 1}
                </span>
                {opt}
              </motion.button>
            );
          })}
          {!submitted && selected && (
            <button
              onClick={() => handleSubmit()}
              className="mt-1 w-full py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold hover:opacity-90 transition-opacity shadow-md"
            >
              Check Answer
            </button>
          )}
        </div>
      )}

      <AnimatePresence>
        {submitted && (
          <motion.div
            className="mt-5 space-y-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className={`flex items-center gap-2 font-extrabold text-lg ${isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
              <span>{isCorrect ? '✅' : '❌'}</span>
              <span>{isCorrect ? 'Correct!' : 'Incorrect'}</span>
            </div>
            {!isCorrect && (
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-bold">Correct answer: </span>
                <span className="text-green-600 dark:text-green-400 font-bold">{question.answer}</span>
              </div>
            )}
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
              <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">{question.explanation}</p>
            </div>
            <button
              onClick={onNext}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold hover:opacity-90 transition-opacity"
            >
              Continue →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
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
              <ReviewQuestion
                key={questions[qIndex].id + '-' + qIndex}
                question={questions[qIndex]}
                onNext={handleNext}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
