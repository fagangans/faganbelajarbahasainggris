import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { to: '/', icon: '🏠', label: 'Home', withState: false },
  { to: '/lessons', icon: '📚', label: 'Lessons', withState: true },
  { to: '/leaderboard', icon: '🏆', label: 'Leaders', withState: true },
  { to: '/profile', icon: '👤', label: 'Profile', withState: true },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 safe-area-inset-bottom">
      <div className="flex items-center justify-around max-w-lg mx-auto h-16">
        {navItems.map(({ to, icon, label, withState }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            state={withState ? { from: '/' } : undefined}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 py-2 px-4 rounded-xl transition-all ${
                isActive
                  ? 'text-green-500 dark:text-green-400'
                  : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <motion.span
                  className="text-2xl leading-none"
                  animate={isActive ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {icon}
                </motion.span>
                <span className="text-xs font-bold">{label}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-1 w-6 h-1 bg-green-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
