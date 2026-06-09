import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getAllUnits } from '../data/index';
import { SECTION_DEFS, getSectionProgress } from '../utils/progress';
import useGameStore from '../store/useGameStore';
import BackButton from '../components/BackButton';

export default function Lessons() {
  const navigate = useNavigate();
  const { completedUnits, unlockedUnits, unitStars, darkMode } = useGameStore();
  const allUnits = getAllUnits();

  return (
    <div className={`min-h-screen pb-24 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
        <div className="max-w-lg mx-auto">
          <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
            <BackButton />
            <h1 className="text-xl font-extrabold text-gray-800 dark:text-white mt-1">📚 All Lessons</h1>
            <p className="text-sm text-gray-400">{completedUnits.length}/145 units completed</p>
          </div>

          <div className="px-4 pt-4 space-y-6">
            {SECTION_DEFS.map((section) => {
              const sectionUnits = allUnits.filter(u => section.units.includes(u.id));
              const progress = getSectionProgress(section.id, completedUnits);
              const isLocked = !unlockedUnits.some(id => section.units.includes(id));

              return (
                <div key={section.id}>
                  {/* Section header */}
                  <div className={`relative overflow-hidden rounded-2xl p-4 mb-3 bg-gradient-to-r ${section.bg} ${isLocked ? 'opacity-50' : ''}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{section.icon}</span>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-white/70 uppercase tracking-wide">Section {section.id}</div>
                        <div className="text-lg font-extrabold text-white">{section.title}</div>
                      </div>
                      <div className="text-xl font-extrabold text-white">{progress}%</div>
                    </div>
                    <div className="mt-2 h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white/70 rounded-full" style={{ width: `${progress}%` }} />
                    </div>
                  </div>

                  {/* Unit list */}
                  <div className="grid gap-2">
                    {sectionUnits.map((unit) => {
                      const isCompleted = completedUnits.includes(unit.id);
                      const isUnlocked = unlockedUnits.includes(unit.id);
                      const stars = unitStars[unit.id] ?? 0;

                      return (
                        <motion.button
                          key={unit.id}
                          onClick={() => isUnlocked && navigate(`/lesson/${unit.id}`)}
                          disabled={!isUnlocked}
                          className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all
                            ${isCompleted ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800' :
                              isUnlocked ? 'bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-300' :
                              'bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-100 dark:border-gray-700 opacity-50 cursor-not-allowed'
                            }`}
                          whileTap={isUnlocked ? { scale: 0.98 } : {}}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-extrabold shrink-0
                            ${isCompleted ? 'bg-green-500 text-white' : isUnlocked ? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300' : 'bg-gray-100 dark:bg-gray-700 text-gray-400'}`}>
                            {isCompleted ? '✓' : isUnlocked ? unit.id : '🔒'}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`text-sm font-bold truncate ${isCompleted ? 'text-green-700 dark:text-green-300' : isUnlocked ? 'text-gray-800 dark:text-white' : 'text-gray-400'}`}>
                              {unit.title}
                            </div>
                            <div className="text-xs text-gray-400 truncate">{unit.section}</div>
                          </div>
                          {isCompleted && (
                            <div className="flex gap-0.5 shrink-0">
                              {[1,2,3].map(i => <span key={i} className={`text-sm ${i <= stars ? 'text-yellow-400' : 'text-gray-200 dark:text-gray-700'}`}>★</span>)}
                            </div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
