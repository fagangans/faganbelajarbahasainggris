import { motion, AnimatePresence } from 'framer-motion';
import useGameStore from '../store/useGameStore';

export default function Hearts({ showCount = true, size = 'md' }) {
  const { hearts, maxHearts } = useGameStore();

  const sizeMap = { sm: 'text-lg', md: 'text-2xl', lg: 'text-3xl' };
  const textSize = sizeMap[size] || sizeMap.md;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxHearts }).map((_, i) => (
        <AnimatePresence key={i} mode="wait">
          <motion.span
            key={`heart-${i}-${i < hearts}`}
            className={textSize}
            initial={{ scale: 1.4 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {i < hearts ? '❤️' : '🖤'}
          </motion.span>
        </AnimatePresence>
      ))}
      {showCount && (
        <span className="ml-1 text-sm font-bold text-red-500">{hearts}</span>
      )}
    </div>
  );
}
