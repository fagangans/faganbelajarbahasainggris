import { motion } from 'framer-motion';

export default function Mascot({ size = 80, mood = 'happy', className = '' }) {
  const expressions = {
    happy: { eyes: '◕', mouth: '‿' },
    excited: { eyes: '★', mouth: '‿' },
    thinking: { eyes: '◔', mouth: '‿' },
    sad: { eyes: '◕', mouth: '⌒' },
    star: { eyes: '★', mouth: '‿' },
  };
  const expr = expressions[mood] || expressions.happy;

  return (
    <motion.div
      className={`inline-flex flex-col items-center select-none ${className}`}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      style={{ fontSize: size }}
    >
      <div
        className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-b from-yellow-300 to-yellow-400 shadow-xl border-4 border-yellow-500"
        style={{ width: size, height: size }}
      >
        {/* Ears */}
        <div
          className="absolute -top-3 -left-1 bg-yellow-400 rounded-full border-2 border-yellow-500"
          style={{ width: size * 0.22, height: size * 0.28 }}
        />
        <div
          className="absolute -top-3 -right-1 bg-yellow-400 rounded-full border-2 border-yellow-500"
          style={{ width: size * 0.22, height: size * 0.28 }}
        />
        {/* Face */}
        <div className="flex flex-col items-center gap-0.5">
          <div
            className="flex gap-2 items-center"
            style={{ fontSize: size * 0.25 }}
          >
            <span>{expr.eyes}</span>
            <span>{expr.eyes}</span>
          </div>
          {/* Beak */}
          <div
            className="bg-orange-400 rounded-b-full border border-orange-500"
            style={{ width: size * 0.2, height: size * 0.14 }}
          />
        </div>
      </div>
      {/* Wings */}
      <div className="flex gap-1 -mt-2">
        <motion.div
          className="bg-yellow-400 rounded-full border-2 border-yellow-500"
          style={{ width: size * 0.25, height: size * 0.35 }}
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="bg-yellow-400 rounded-full border-2 border-yellow-500"
          style={{ width: size * 0.25, height: size * 0.35 }}
          animate={{ rotate: [5, -5, 5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
        />
      </div>
    </motion.div>
  );
}
