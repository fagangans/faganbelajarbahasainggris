import { motion } from 'framer-motion';
import { getSectionProgress } from '../utils/progress';
import useGameStore from '../store/useGameStore';

export default function SectionBanner({ section, isActive, isLocked }) {
  const { completedUnits } = useGameStore();
  const progress = getSectionProgress(section.id, completedUnits);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl p-5 mx-4 my-6 shadow-lg select-none
        ${isLocked ? 'opacity-50 grayscale' : ''}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${section.bg} opacity-${isLocked ? '30' : '100'} rounded-3xl`} />

      {/* Shine effect */}
      {!isLocked && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl" />
      )}

      <div className="relative flex items-center gap-3">
        <div className="text-4xl">{section.icon}</div>
        <div className="flex-1">
          <div className="text-xs font-bold text-white/70 uppercase tracking-widest">
            Section {section.id}
          </div>
          <div className="text-xl font-extrabold text-white">{section.title}</div>
          <div className="text-sm text-white/80">{section.units.length} units</div>
        </div>
        {isLocked ? (
          <div className="text-3xl">🔒</div>
        ) : (
          <div className="text-right">
            <div className="text-2xl font-extrabold text-white">{progress}%</div>
            <div className="text-xs text-white/70">complete</div>
          </div>
        )}
      </div>

      {/* Progress bar */}
      {!isLocked && (
        <div className="relative mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white/70 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          />
        </div>
      )}
    </motion.div>
  );
}
