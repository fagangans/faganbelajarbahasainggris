import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { saveCloudProgress } from '../lib/syncProgress';

let syncTimer = null;
function scheduleSyncCloud(state, userId) {
  if (!userId) return;
  clearTimeout(syncTimer);
  syncTimer = setTimeout(() => saveCloudProgress(state, userId), 2000);
}

const DEFAULT_GAME_STATE = {
  username: 'Learner',
  avatar: '🦉',
  ownedAvatars: ['owl'],
  equippedAvatar: 'owl',
  unlockedUnits: [1],
  completedUnits: [],
  unitStars: {},
  currentUnitId: 1,
  hearts: 5,
  maxHearts: 5,
  lastHeartReset: '',
  xp: 0,
  gems: 0,
  streak: 0,
  lastActiveDate: '',
  achievements: [],
  darkMode: false,
};

export const AVATAR_CATALOG = [
  { id: 'owl',     emoji: '🦉', label: 'Owl',     cost: 0 },
  { id: 'fox',     emoji: '🦊', label: 'Fox',     cost: 100 },
  { id: 'cat',     emoji: '🐱', label: 'Cat',     cost: 100 },
  { id: 'dragon',  emoji: '🐲', label: 'Dragon',  cost: 250 },
  { id: 'phoenix', emoji: '🦅', label: 'Phoenix', cost: 400 },
];

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
      ownedAvatars: ['owl'],
      equippedAvatar: 'owl',

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

      // Cloud sync
      _userId: null,

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
      setUserId: (userId) => set({ _userId: userId }),

      hydrate: (data) => set(data),

      // Wipe local game state on logout — does NOT touch Supabase or sync anything
      clearLocalSession: () => {
        clearTimeout(syncTimer);
        syncTimer = null;
        set({ ...DEFAULT_GAME_STATE, _userId: null });
      },

      init: () => {
        const state = get();
        const heartReset = checkHeartReset(state);
        const streakReset = checkStreakReset(state);
        if (Object.keys(heartReset).length || Object.keys(streakReset).length) {
          set({ ...heartReset, ...streakReset });
        }
      },

      setUsername: (name) => { set({ username: name }); scheduleSyncCloud(get(), get()._userId); },
      setAvatar: (emoji) => { set({ avatar: emoji }); scheduleSyncCloud(get(), get()._userId); },
      toggleDarkMode: () => { set((s) => ({ darkMode: !s.darkMode })); scheduleSyncCloud(get(), get()._userId); },

      loseHeart: () => {
        const { hearts } = get();
        if (hearts > 0) { set({ hearts: hearts - 1 }); scheduleSyncCloud(get(), get()._userId); }
      },

      gainHeart: () => {
        const { hearts, maxHearts } = get();
        if (hearts < maxHearts) { set({ hearts: hearts + 1 }); scheduleSyncCloud(get(), get()._userId); }
      },

      addXP: (amount) => {
        const prevXP = get().xp;
        const prevLevel = getLevel(prevXP);
        const newXP = prevXP + amount;
        const newLevel = getLevel(newXP);
        set({ xp: newXP });
        scheduleSyncCloud(get(), get()._userId);
        return newLevel > prevLevel ? newLevel : null;
      },

      addGems: (amount) => { set((s) => ({ gems: s.gems + amount })); scheduleSyncCloud(get(), get()._userId); },

      spendGem: () => {
        const { gems } = get();
        if (gems >= 1) {
          set({ gems: gems - 1 });
          scheduleSyncCloud(get(), get()._userId);
          return true;
        }
        return false;
      },

      spendGems: (amount) => {
        const { gems } = get();
        if (gems >= amount) {
          set({ gems: gems - amount });
          scheduleSyncCloud(get(), get()._userId);
          return true;
        }
        return false;
      },

      refillAllHearts: () => {
        const { maxHearts } = get();
        set({ hearts: maxHearts });
        scheduleSyncCloud(get(), get()._userId);
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
        scheduleSyncCloud(get(), get()._userId);
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
        scheduleSyncCloud(get(), get()._userId);

        return { stars: newStars, xpEarned, gemsEarned };
      },

      checkStreakAchievements: () => {
        const { streak, achievements } = get();
        const newAch = [...achievements];
        if (streak >= 7 && !newAch.includes('streak_7')) newAch.push('streak_7');
        if (streak >= 30 && !newAch.includes('streak_30')) newAch.push('streak_30');
        if (newAch.length !== achievements.length) { set({ achievements: newAch }); scheduleSyncCloud(get(), get()._userId); }
      },

      buyHeart: () => {
        const { gems, hearts, maxHearts } = get();
        if (hearts >= maxHearts) return { ok: false, message: 'Hearts already full!' };
        if (gems < 20) return { ok: false, message: 'Not enough gems (need 20 💎)' };
        set({ gems: gems - 20, hearts: hearts + 1 });
        scheduleSyncCloud(get(), get()._userId);
        return { ok: true, message: '+1 ❤️ added!' };
      },

      refillHeartsWithGems: () => {
        const { gems, hearts, maxHearts } = get();
        if (hearts >= maxHearts) return { ok: false, message: 'Hearts already full!' };
        if (gems < 80) return { ok: false, message: 'Not enough gems (need 80 💎)' };
        set({ gems: gems - 80, hearts: maxHearts });
        scheduleSyncCloud(get(), get()._userId);
        return { ok: true, message: 'Hearts fully refilled! ❤️' };
      },

      buyAvatar: (avatarId) => {
        const { gems, ownedAvatars } = get();
        const entry = AVATAR_CATALOG.find((a) => a.id === avatarId);
        if (!entry) return { ok: false, message: 'Unknown avatar.' };
        if (ownedAvatars.includes(avatarId)) return { ok: false, message: 'Already owned!' };
        if (gems < entry.cost) return { ok: false, message: `Not enough gems (need ${entry.cost} 💎)` };
        set({ gems: gems - entry.cost, ownedAvatars: [...ownedAvatars, avatarId] });
        scheduleSyncCloud(get(), get()._userId);
        return { ok: true, message: `${entry.label} ${entry.emoji} unlocked!` };
      },

      equipAvatar: (avatarId) => {
        const { ownedAvatars } = get();
        const entry = AVATAR_CATALOG.find((a) => a.id === avatarId);
        if (!entry) return { ok: false, message: 'Unknown avatar.' };
        if (!ownedAvatars.includes(avatarId)) return { ok: false, message: 'You do not own this avatar.' };
        set({ equippedAvatar: avatarId, avatar: entry.emoji });
        scheduleSyncCloud(get(), get()._userId);
        return { ok: true, message: `${entry.label} ${entry.emoji} equipped!` };
      },

      resetProgress: () => {
        const reset = {
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
        };
        set(reset);
        scheduleSyncCloud(get(), get()._userId);
      },
    }),
    {
      name: 'grammarquest-store',
      version: 1,
      partialize: (state) => {
        // eslint-disable-next-line no-unused-vars
        const { _userId, ...rest } = state;
        return rest;
      },
    }
  )
);

export default useGameStore;
