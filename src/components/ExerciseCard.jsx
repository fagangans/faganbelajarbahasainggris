import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DragDropQuestion from './DragDropQuestion';
import { playCorrect, playWrong } from '../utils/audio';
import useGameStore from '../store/useGameStore';

function normalizeAnswer(str) {
  return str.toLowerCase().replace(/[.,!?;:'"]/g, '').trim().replace(/\s+/g, ' ');
}

export default function ExerciseCard({ question, onNext, onCorrect, onWrong, showHint, onHintUsed, questionNumber, totalQuestions }) {
  const [selected, setSelected] = useState(null);
  const [inputVal, setInputVal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const inputRef = useRef(null);
  const { spendGem } = useGameStore();

  useEffect(() => {
    setSelected(null);
    setInputVal('');
    setSubmitted(false);
    setIsCorrect(false);
    setHintVisible(false);
    if (question.type === 'fill_blank') inputRef.current?.focus();
  }, [question]);

  useEffect(() => {
    function handleKey(e) {
      if (submitted) {
        if (e.key === 'Enter') onNext();
        return;
      }
      if (question.type === 'multiple_choice' || question.type === 'error_correction') {
        const n = parseInt(e.key);
        if (n >= 1 && n <= question.options.length) {
          handleSelect(question.options[n - 1]);
        }
      }
      if (e.key === 'Enter') {
        if (question.type === 'fill_blank' && inputVal.trim()) handleSubmit();
        if (selected && !submitted) handleSubmit();
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [question, selected, submitted, inputVal, onNext]);

  function handleSelect(option) {
    if (submitted) return;
    setSelected(option);
  }

  function handleSubmit(forcedAnswer) {
    if (submitted) return;
    const answer = forcedAnswer ?? (question.type === 'fill_blank' ? inputVal : selected);
    if (!answer) return;

    const correct = normalizeAnswer(String(answer)) === normalizeAnswer(String(question.answer));
    setIsCorrect(correct);
    setSubmitted(true);
    setSelected(answer);

    if (correct) {
      playCorrect();
      onCorrect?.();
    } else {
      playWrong();
      onWrong?.();
    }
  }

  function handleRevealHint() {
    if (hintVisible) return;
    if (spendGem()) {
      setHintVisible(true);
      onHintUsed?.();
    }
  }

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
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
          {question.type.replace('_', ' ')}
        </span>
        <span className="text-xs font-bold text-gray-400">{questionNumber}/{totalQuestions}</span>
      </div>

      {/* Question */}
      <p className="text-lg font-bold text-gray-800 dark:text-white mb-5 leading-relaxed">
        {question.question}
      </p>

      {/* Hint */}
      {!submitted && (
        <div className="mb-4">
          {hintVisible ? (
            <div className="flex items-start gap-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
              <span className="text-yellow-500">💡</span>
              <span className="text-sm text-yellow-700 dark:text-yellow-300">{question.hint}</span>
            </div>
          ) : (
            <button
              onClick={handleRevealHint}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-yellow-500 transition-colors font-semibold"
            >
              <span>💡</span> Hint (1 💎)
            </button>
          )}
        </div>
      )}

      {/* Answer input */}
      {question.type === 'fill_blank' && !submitted && (
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
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
                onClick={() => !submitted && handleSelect(opt)}
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

      {question.type === 'drag_order' && (
        <DragDropQuestion
          question={question}
          onAnswer={(answer) => handleSubmit(answer)}
          disabled={submitted}
        />
      )}

      {/* Result feedback */}
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
