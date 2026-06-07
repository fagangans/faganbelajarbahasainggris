import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const LEVEL_THRESHOLDS = [0, 100, 250, 500, 900, 1400, 2100, 3000, 4200, 5800, 8000];

function getLevel(xp) {
  let level = 1;
  for (let i = 1; i < LEVEL_THRESHOLDS.length; i++) {
    if (xp >= LEVEL_THRESHOLDS[i]) level = i + 1;
    else break;
  }
  return level;
}

function getXpForNextLevel(xp) {
  const level = getLevel(xp);
  return LEVEL_THRESHOLDS[level] ?? LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
}

function checkHeartReset(state) {
  const today = new Date().toDateString();
  if (state.lastHeartReset !== today) {
    return { hearts: 5, lastHeartReset: today };
  }
  return {};
}

function checkStreakReset(state) {
  if (!state.lastActiveDate) return {};
  const today = new Date().toDateString();
  const last = new Date(state.lastActiveDate);
  const now = new Date();
  const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));
  if (diffDays > 1) {
    return { streak: 0 };
  }
  return {};
}

const useGameStore = create(
  persist(
    (set, get) => ({
      // User info
      username: 'Learner',
      avatar: '🦉',

      // Progress
      unlockedUnits: [1],
      completedUnits: [],
      unitStars: {},
      currentUnitId: 1,

      // Gamification
      hearts: 5,
      maxHearts: 5,
      lastHeartReset: '',
      xp: 0,
      gems: 0,
      streak: 0,
      lastActiveDate: '',
      achievements: [],

      // Dark mode
      darkMode: false,

      // Derived
      getLevel: () => getLevel(get().xp),
      getXpForNextLevel: () => getXpForNextLevel(get().xp),
      getLevelProgress: () => {
        const xp = get().xp;
        const level = getLevel(xp);
        const current = LEVEL_THRESHOLDS[level - 1] ?? 0;
        const next = LEVEL_THRESHOLDS[level] ?? LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
        return Math.round(((xp - current) / (next - current)) * 100);
      },

      // Actions
      init: () => {
        const state = get();
        const heartReset = checkHeartReset(state);
        const streakReset = checkStreakReset(state);
        if (Object.keys(heartReset).length || Object.keys(streakReset).length) {
          set({ ...heartReset, ...streakReset });
        }
      },

      setUsername: (name) => set({ username: name }),
      setAvatar: (emoji) => set({ avatar: emoji }),
      toggleDarkMode: () => set((s) => ({ darkMode: !s.darkMode })),

      loseHeart: () => {
        const { hearts } = get();
        if (hearts > 0) set({ hearts: hearts - 1 });
      },

      gainHeart: () => {
        const { hearts, maxHearts } = get();
        if (hearts < maxHearts) set({ hearts: hearts + 1 });
      },

      addXP: (amount) => {
        const prevXP = get().xp;
        const prevLevel = getLevel(prevXP);
        const newXP = prevXP + amount;
        const newLevel = getLevel(newXP);
        set({ xp: newXP });
        return newLevel > prevLevel ? newLevel : null;
      },

      addGems: (amount) => set((s) => ({ gems: s.gems + amount })),

      spendGem: () => {
        const { gems } = get();
        if (gems >= 1) {
          set({ gems: gems - 1 });
          return true;
        }
        return false;
      },

      updateStreak: () => {
        const { lastActiveDate } = get();
        const today = new Date().toDateString();
        if (lastActiveDate === today) return;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toDateString();

        if (lastActiveDate === yesterdayStr) {
          set((s) => ({ streak: s.streak + 1, lastActiveDate: today }));
        } else {
          set({ streak: 1, lastActiveDate: today });
        }
      },

      completeUnit: (unitId, score, totalQuestions) => {
        const { unlockedUnits, completedUnits, unitStars, xp, gems } = get();

        const pct = score / totalQuestions;
        const stars = pct >= 0.9 ? 3 : pct >= 0.7 ? 2 : pct >= 0.5 ? 1 : 0;

        const prevStars = unitStars[unitId] ?? 0;
        const newStars = Math.max(prevStars, stars);

        const xpEarned = score * 10 + (stars === 3 ? 50 : stars === 2 ? 20 : 0);
        const gemsEarned = score * 2 + (stars === 3 ? 10 : 0);

        const newCompleted = completedUnits.includes(unitId)
          ? completedUnits
          : [...completedUnits, unitId];

        const nextId = unitId + 1;
        const newUnlocked = unlockedUnits.includes(nextId)
          ? unlockedUnits
          : [...unlockedUnits, nextId];

        const newAchievements = [...get().achievements];
        if (newCompleted.length === 1 && !newAchievements.includes('first_lesson')) {
          newAchievements.push('first_lesson');
        }
        if (stars === 3 && !newAchievements.includes('first_perfect')) {
          newAchievements.push('first_perfect');
        }
        if (newCompleted.length >= 10 && !newAchievements.includes('unit_10')) {
          newAchievements.push('unit_10');
        }
        if (newCompleted.length >= 50 && !newAchievements.includes('unit_50')) {
          newAchievements.push('unit_50');
        }

        set({
          completedUnits: newCompleted,
          unlockedUnits: newUnlocked,
          unitStars: { ...unitStars, [unitId]: newStars },
          xp: xp + xpEarned,
          gems: gems + gemsEarned,
          currentUnitId: nextId,
        });

        return { stars: newStars, xpEarned, gemsEarned };
      },

      checkStreakAchievements: () => {
        const { streak, achievements } = get();
        const newAch = [...achievements];
        if (streak >= 7 && !newAch.includes('streak_7')) newAch.push('streak_7');
        if (streak >= 30 && !newAch.includes('streak_30')) newAch.push('streak_30');
        if (newAch.length !== achievements.length) set({ achievements: newAch });
      },

      resetProgress: () => set({
        unlockedUnits: [1],
        completedUnits: [],
        unitStars: {},
        currentUnitId: 1,
        hearts: 5,
        xp: 0,
        gems: 0,
        streak: 0,
        lastActiveDate: '',
        achievements: [],
      }),
    }),
    {
      name: 'grammarquest-store',
      version: 1,
    }
  )
);

export default useGameStore;
