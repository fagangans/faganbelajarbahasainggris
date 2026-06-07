import { motion } from 'framer-motion';
import { getNodeType } from '../utils/progress';
import useGameStore from '../store/useGameStore';

const NODE_COLORS = [
  { bg: 'bg-green-500', border: 'border-green-600', glow: '#22c55e' },
  { bg: 'bg-blue-500', border: 'border-blue-600', glow: '#3b82f6' },
  { bg: 'bg-purple-500', border: 'border-purple-600', glow: '#a855f7' },
  { bg: 'bg-orange-500', border: 'border-orange-600', glow: '#f97316' },
  { bg: 'bg-pink-500', border: 'border-pink-600', glow: '#ec4899' },
  { bg: 'bg-teal-500', border: 'border-teal-600', glow: '#14b8a6' },
];

function StarRow({ count }) {
  return (
    <div className="flex gap-0.5 mt-0.5">
      {[1, 2, 3].map((i) => (
        <span key={i} className={`text-xs ${i <= count ? 'text-yellow-300' : 'text-white/30'}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function LessonNode({ unit, onClick, style }) {
  const { completedUnits, unlockedUnits, unitStars, currentUnitId } = useGameStore();
  const isCompleted = completedUnits.includes(unit.id);
  const isUnlocked = unlockedUnits.includes(unit.id);
  const isCurrent = unit.id === currentUnitId;
  const isLocked = !isUnlocked;
  const stars = unitStars[unit.id] ?? 0;
  const nodeType = getNodeType(unit.id);

  const colorIdx = (unit.id - 1) % NODE_COLORS.length;
  const color = NODE_COLORS[colorIdx];

  const nodeSize = 72;

  let bgClass = 'bg-gray-300 dark:bg-gray-700';
  let borderClass = 'border-gray-400 dark:border-gray-600';
  let icon = '🔒';

  if (nodeType === 'boss') {
    icon = '👑';
    bgClass = 'bg-gradient-to-br from-yellow-400 to-orange-500';
    borderClass = 'border-yellow-600';
  } else if (nodeType === 'checkpoint') {
    icon = '⭐';
    bgClass = 'bg-gradient-to-br from-purple-400 to-indigo-500';
    borderClass = 'border-purple-600';
  }

  if (!isLocked) {
    if (isCompleted) {
      bgClass = `${color.bg} brightness-110`;
      borderClass = color.border;
      icon = stars === 3 ? '🏆' : nodeType === 'boss' ? '👑' : '✓';
    } else {
      bgClass = color.bg;
      borderClass = color.border;
      icon = nodeType === 'boss' ? '👑' : nodeType === 'checkpoint' ? '⭐' : `${unit.id}`;
    }
  }

  return (
    <motion.div
      style={style}
      className="flex flex-col items-center cursor-pointer select-none"
      onClick={() => !isLocked && onClick(unit)}
      whileTap={!isLocked ? { scale: 0.92 } : {}}
    >
      <motion.div
        className={`relative rounded-full border-4 flex items-center justify-center font-extrabold text-white shadow-lg
          ${bgClass} ${borderClass}
          ${isLocked ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
        `}
        style={{
          width: nodeSize,
          height: nodeSize,
          boxShadow: isCompleted && !isLocked
            ? `0 0 20px 6px ${color.glow}66, 0 4px 15px rgba(0,0,0,0.2)`
            : isCurrent
            ? `0 0 30px 10px ${color.glow}88, 0 4px 15px rgba(0,0,0,0.2)`
            : '0 4px 15px rgba(0,0,0,0.15)',
        }}
        animate={
          isCurrent && !isCompleted
            ? { y: [0, -8, 0] }
            : isCompleted
            ? {}
            : {}
        }
        transition={isCurrent ? { duration: 2, repeat: Infinity, ease: 'easeInOut' } : {}}
      >
        {/* Glow ring for current */}
        {isCurrent && !isCompleted && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: `3px solid ${color.glow}` }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}

        <span className={typeof icon === 'string' && icon.length <= 2 ? 'text-2xl' : 'text-lg font-extrabold'}>
          {icon}
        </span>

        {/* Stars overlay for completed */}
        {isCompleted && (
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
            {[1, 2, 3].map((i) => (
              <span key={i} className={`text-xs ${i <= stars ? 'text-yellow-300' : 'text-white/30'}`}>★</span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Label */}
      <div className="mt-3 text-center max-w-[88px]">
        <div className={`text-xs font-bold leading-tight ${isLocked ? 'text-gray-400' : 'text-gray-700 dark:text-gray-200'}`}>
          {unit.title.length > 22 ? unit.title.slice(0, 20) + '…' : unit.title}
        </div>
        <div className="text-xs text-gray-400">{unit.category}</div>
      </div>
    </motion.div>
  );
}
