import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ExerciseCard from '../components/ExerciseCard';
import Confetti from '../components/Confetti';
import { getAllUnits } from '../data/index';
import useGameStore from '../store/useGameStore';
import { getStarCount, getMotivationalMessage } from '../utils/progress';
import { playCompletion, playUnlock } from '../utils/audio';

function StarDisplay({ stars, animated }) {
  return (
    <div className="flex gap-2 justify-center">
      {[1, 2, 3].map((i) => (
        <motion.span
          key={i}
          className={`text-5xl`}
          initial={animated ? { scale: 0, rotate: -30, opacity: 0 } : {}}
          animate={animated ? { scale: 1, rotate: 0, opacity: 1 } : {}}
          transition={{ delay: i * 0.2, type: 'spring', stiffness: 300, damping: 20 }}
        >
          {i <= stars ? '⭐' : '☆'}
        </motion.span>
      ))}
    </div>
  );
}

export default function Exercise() {
  const { id, mode } = useParams();
  const navigate = useNavigate();
  const unitId = parseInt(id);
  const allUnits = getAllUnits();
  const unit = allUnits.find(u => u.id === unitId);
  const questions = unit?.questions || [];

  const [qIndex, setQIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [mistakes, setMistakes] = useState([]);
  const [done, setDone] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [result, setResult] = useState(null);
  const [timeLeft, setTimeLeft] = useState(mode === 'challenge' ? 30 : null);
  const timerRef = useRef(null);

  const { loseHeart, hearts, completeUnit, updateStreak, addXP, addGems, gems } = useGameStore();

  useEffect(() => {
    if (mode === 'challenge' && !done) {
      timerRef.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            clearInterval(timerRef.current);
            handleTimeOut();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [qIndex, done, mode]);

  function handleTimeOut() {
    setWrong(w => w + 1);
    loseHeart();
    const q = questions[qIndex];
    setMistakes(m => [...m, { question: q, userAnswer: 'Time out!' }]);
    next();
  }

  function handleCorrect() {
    setCorrect(c => c + 1);
    addXP(10);
    addGems(2);
    if (mode === 'challenge') {
      clearInterval(timerRef.current);
      setTimeLeft(30);
    }
  }

  function handleWrong() {
    setWrong(w => w + 1);
    loseHeart();
    const q = questions[qIndex];
    setMistakes(m => [...m, { question: q, userAnswer: '' }]);
  }

  function next() {
    const nextIdx = qIndex + 1;
    if (nextIdx >= questions.length || hearts <= 0) {
      finish(correct + (qIndex === questions.length - 1 ? (correct < questions.length ? 0 : 1) : 0));
    } else {
      setQIndex(nextIdx);
      if (mode === 'challenge') setTimeLeft(30);
    }
  }

  function finish(finalCorrect) {
    const score = finalCorrect ?? correct;
    const stars = getStarCount(score, questions.length);
    const res = completeUnit(unitId, score, questions.length);
    const motivation = getMotivationalMessage(score, questions.length);

    setResult({ stars, ...res, motivation, score });
    setDone(true);
    updateStreak();

    if (stars >= 2) {
      playCompletion();
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    }
    if (stars === 3) {
      playUnlock();
    }
  }

  if (!unit) return <div className="p-8 text-center text-gray-500">Unit not found</div>;
  if (questions.length === 0) return <div className="p-8 text-center text-gray-500">No questions for this unit yet.</div>;

  const progress = ((qIndex) / questions.length) * 100;

  if (hearts <= 0 && !done) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-4">
        <div className="text-center space-y-5">
          <div className="text-6xl">💔</div>
          <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white">Out of Hearts!</h2>
          <p className="text-gray-500">Come back tomorrow for more hearts.</p>
          <div className="flex gap-3">
            <button onClick={() => navigate('/')} className="flex-1 py-3 rounded-2xl border-2 border-gray-200 dark:border-gray-700 font-bold text-gray-600 dark:text-gray-300">
              Go Home
            </button>
            <button onClick={() => { setDone(false); setQIndex(0); setCorrect(0); setWrong(0); setMistakes([]); }} className="flex-1 py-3 rounded-2xl bg-green-500 text-white font-bold">
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (done && result) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-4">
        <Confetti active={showConfetti} />
        <div className="max-w-lg mx-auto pt-8 pb-24 space-y-6">
          {/* Result header */}
          <motion.div
            className="text-center space-y-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-5xl">{result.stars === 3 ? '🏆' : result.stars === 2 ? '🎉' : '💪'}</div>
            <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white">
              {result.motivation.text}
            </h2>
            <StarDisplay stars={result.stars} animated />
          </motion.div>

          {/* Score card */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-3xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-3">
                <div className="text-2xl font-extrabold text-green-600">{result.score}</div>
                <div className="text-xs text-gray-500">Correct</div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-3">
                <div className="text-2xl font-extrabold text-red-500">{wrong}</div>
                <div className="text-xs text-gray-500">Wrong</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-3">
                <div className="text-2xl font-extrabold text-purple-600">+{result.xpEarned}</div>
                <div className="text-xs text-gray-500">XP</div>
              </div>
            </div>
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              +{result.gemsEarned} 💎 earned
            </div>
          </motion.div>

          {/* Review mistakes */}
          {mistakes.length > 0 && (
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-3xl p-5 shadow-sm border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="font-extrabold text-gray-800 dark:text-white mb-3">📝 Review Mistakes</h3>
              <div className="space-y-3">
                {mistakes.map((m, i) => (
                  <div key={i} className="bg-red-50 dark:bg-red-900/20 rounded-xl p-3 space-y-1">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{m.question.question}</p>
                    <p className="text-xs text-green-600 dark:text-green-400">
                      <span className="font-bold">Correct: </span>{m.question.answer}
                    </p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 leading-relaxed">{m.question.explanation}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/')}
              className="flex-1 py-3 rounded-2xl border-2 border-gray-200 dark:border-gray-700 font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Home
            </button>
            {result.stars < 3 && (
              <button
                onClick={() => { setDone(false); setQIndex(0); setCorrect(0); setWrong(0); setMistakes([]); }}
                className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:opacity-90"
              >
                Try Again 🔄
              </button>
            )}
            <button
              onClick={() => navigate(`/lesson/${unitId + 1}`)}
              className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold hover:opacity-90"
            >
              Next Unit →
            </button>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[qIndex];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`text-base ${i < hearts ? '' : 'grayscale opacity-30'}`}>❤️</span>
              ))}
            </div>
            {mode === 'challenge' && timeLeft !== null && (
              <div className={`text-sm font-extrabold px-3 py-1 rounded-full ${timeLeft <= 10 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-orange-100 text-orange-600'}`}>
                ⏱ {timeLeft}s
              </div>
            )}
          </div>
          {/* Progress bar */}
          <div className="h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <div className="px-4 py-4 pb-24">
          <AnimatePresence mode="wait">
            <ExerciseCard
              key={q.id}
              question={q}
              onNext={next}
              onCorrect={handleCorrect}
              onWrong={handleWrong}
              questionNumber={qIndex + 1}
              totalQuestions={questions.length}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
