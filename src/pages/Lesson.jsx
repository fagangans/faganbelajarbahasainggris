import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { speak, stopSpeaking, isTTSSupported } from '../utils/tts';
import { getAllUnits } from '../data/index';
import useGameStore from '../store/useGameStore';

const ACTIVITY_TYPES = [
  { key: 'study', label: 'Study', icon: '📖' },
  { key: 'listen', label: 'Listen', icon: '🎧' },
  { key: 'practice', label: 'Practice', icon: '🔁' },
  { key: 'challenge', label: 'Challenge', icon: '💪' },
  { key: 'review', label: 'Review', icon: '🎥' },
];

// Study Phase
function StudyPhase({ unit, onComplete }) {
  const [cardIndex, setCardIndex] = useState(0);
  const cards = unit.study_cards || [];
  const total = cards.length;
  const card = cards[cardIndex];

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-gray-400">{cardIndex + 1} / {total}</span>
        <div className="flex gap-1.5">
          {cards.map((_, i) => (
            <div key={i} className={`h-2 w-8 rounded-full transition-colors ${i <= cardIndex ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'}`} />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={cardIndex}
          className="flex-1 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.25 }}
        >
          <h3 className="text-xl font-extrabold text-gray-800 dark:text-white mb-3">{card?.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed mb-4">{card?.content}</p>
          {card?.examples?.length > 0 && (
            <div className="space-y-2">
              {card.examples.map((ex, i) => (
                <div key={i} className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-xl">
                  <span className="text-green-500 mt-0.5 shrink-0">→</span>
                  <span className="text-green-700 dark:text-green-300 font-medium text-sm">{ex}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-3">
        {cardIndex > 0 && (
          <button
            onClick={() => setCardIndex(i => i - 1)}
            className="flex-1 py-3 rounded-2xl border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            ← Back
          </button>
        )}
        {cardIndex < total - 1 ? (
          <button
            onClick={() => setCardIndex(i => i + 1)}
            className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold hover:opacity-90 transition-opacity"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={onComplete}
            className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold hover:opacity-90 transition-opacity"
          >
            Start Practice! 🚀
          </button>
        )}
      </div>
    </div>
  );
}

// Listen Phase
function ListenPhase({ unit, onComplete }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const ttsOk = isTTSSupported();
  const sentences = unit.listen_sentences || unit.examples || [];
  const sentence = sentences[index];

  useEffect(() => {
    return () => stopSpeaking();
  }, []);

  function handlePlay() {
    if (!ttsOk) return;
    setPlaying(true);
    speak(sentence, () => setPlaying(false));
  }

  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-gray-400">{index + 1} / {sentences.length}</span>
      </div>

      <div className="flex-1 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center gap-5">
        <div className="text-5xl">{ttsOk ? '🔊' : '📝'}</div>
        <p className="text-xl font-bold text-gray-800 dark:text-white text-center leading-relaxed">
          "{sentence}"
        </p>
        {ttsOk ? (
          <button
            onClick={handlePlay}
            disabled={playing}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-500 text-white font-bold disabled:opacity-60 hover:bg-blue-600 transition-colors"
          >
            {playing ? '⏸ Playing…' : '▶ Listen'}
          </button>
        ) : (
          <div className="text-sm text-gray-500 dark:text-gray-400 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-2 rounded-xl">
            💬 Read the sentence aloud for practice!
          </div>
        )}
      </div>

      <div className="flex gap-3">
        {index > 0 && (
          <button onClick={() => setIndex(i => i - 1)} className="flex-1 py-3 rounded-2xl border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-bold">
            ←
          </button>
        )}
        {index < sentences.length - 1 ? (
          <button onClick={() => setIndex(i => i + 1)} className="flex-1 py-3 rounded-2xl bg-green-500 text-white font-bold hover:bg-green-600">
            Next →
          </button>
        ) : (
          <button onClick={onComplete} className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold hover:opacity-90">
            Continue! 🚀
          </button>
        )}
      </div>
    </div>
  );
}

// Review Phase
function ReviewPhase({ unit, onComplete }) {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 overflow-y-auto">
        <h3 className="text-xl font-extrabold text-gray-800 dark:text-white mb-2">📋 Key Rules</h3>
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl mb-4 border border-blue-100 dark:border-blue-800">
          <p className="text-blue-700 dark:text-blue-300 font-semibold">{unit.key_rule}</p>
        </div>
        <h4 className="font-bold text-gray-600 dark:text-gray-300 mb-2">Examples</h4>
        <div className="space-y-2 mb-4">
          {unit.examples.map((ex, i) => (
            <div key={i} className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-xl">
              <span className="text-green-500 shrink-0">✓</span>
              <span className="text-green-700 dark:text-green-300 font-medium text-sm">{ex}</span>
            </div>
          ))}
        </div>
        <h4 className="font-bold text-gray-600 dark:text-gray-300 mb-2">⚠️ Common Mistakes</h4>
        <div className="space-y-2">
          {unit.common_mistakes.map((m, i) => (
            <div key={i} className="flex items-start gap-2 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-xl">
              <span className="text-red-500 shrink-0">✗</span>
              <span className="text-red-700 dark:text-red-300 text-sm">{m}</span>
            </div>
          ))}
        </div>
      </div>
      <button onClick={onComplete} className="py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold hover:opacity-90">
        Finish Review ✓
      </button>
    </div>
  );
}

export default function Lesson() {
  const { id } = useParams();
  const navigate = useNavigate();
  const unitId = parseInt(id);
  const allUnits = getAllUnits();
  const unit = allUnits.find(u => u.id === unitId);
  const [phase, setPhase] = useState(0); // 0=study, 1=listen, 2=practice, 3=challenge, 4=review

  if (!unit) return <div className="p-8 text-center text-gray-500">Unit not found</div>;

  const phases = ACTIVITY_TYPES;
  const current = phases[phase];

  function handlePhaseComplete() {
    if (phase < phases.length - 1) {
      setPhase(p => p + 1);
    } else {
      navigate(`/`);
    }
  }

  function goToExercise() {
    navigate(`/exercise/${unitId}/${phase === 2 ? 'practice' : 'challenge'}`);
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xl">←</button>
          <div className="flex-1">
            <div className="text-xs text-gray-400 font-semibold">Unit {unit.id}</div>
            <div className="text-sm font-extrabold text-gray-800 dark:text-white truncate">{unit.title}</div>
          </div>
          {/* Phase dots */}
          <div className="flex gap-1.5">
            {phases.map((p, i) => (
              <div
                key={p.key}
                className={`h-2 rounded-full transition-all ${i < phase ? 'w-4 bg-green-500' : i === phase ? 'w-4 bg-blue-500' : 'w-2 bg-gray-200 dark:bg-gray-700'}`}
              />
            ))}
          </div>
        </div>

        {/* Phase label */}
        <div className="px-4 py-3 flex items-center gap-2">
          <span className="text-2xl">{current.icon}</span>
          <span className="text-base font-extrabold text-gray-700 dark:text-gray-200">{current.label}</span>
        </div>

        {/* Content */}
        <div className="px-4 pb-24">
          <AnimatePresence mode="wait">
            {phase === 0 && <StudyPhase unit={unit} onComplete={() => setPhase(1)} />}
            {phase === 1 && <ListenPhase unit={unit} onComplete={() => setPhase(2)} />}
            {phase === 2 && (
              <div className="text-center py-8 space-y-4">
                <div className="text-5xl">🔁</div>
                <h3 className="text-xl font-extrabold text-gray-800 dark:text-white">Ready to Practice?</h3>
                <p className="text-gray-500 dark:text-gray-400">Test your knowledge with 10 questions!</p>
                <button onClick={goToExercise} className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-extrabold text-lg hover:opacity-90 transition-opacity">
                  Start Practice! 🚀
                </button>
              </div>
            )}
            {phase === 3 && (
              <div className="text-center py-8 space-y-4">
                <div className="text-5xl">💪</div>
                <h3 className="text-xl font-extrabold text-gray-800 dark:text-white">Challenge Mode!</h3>
                <p className="text-gray-500 dark:text-gray-400">Harder questions. You've got this!</p>
                <button onClick={goToExercise} className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-extrabold text-lg hover:opacity-90 transition-opacity">
                  Accept Challenge! ⚡
                </button>
              </div>
            )}
            {phase === 4 && <ReviewPhase unit={unit} onComplete={handlePhaseComplete} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
