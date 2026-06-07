import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COLORS = ['#FF6B6B', '#FFE66D', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98FB98', '#FF9600', '#58CC02'];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function Confetti({ active, count = 60 }) {
  const particles = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: randomBetween(5, 95),
      color: COLORS[i % COLORS.length],
      size: randomBetween(6, 14),
      delay: randomBetween(0, 0.8),
      duration: randomBetween(2, 4),
      rotate: randomBetween(0, 360),
    }))
  ).current;

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-sm"
          style={{
            left: `${p.x}%`,
            top: -20,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          animate={{
            y: ['0vh', '110vh'],
            rotate: [0, p.rotate + 720],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: 'easeIn',
          }}
        />
      ))}
    </div>
  );
}
