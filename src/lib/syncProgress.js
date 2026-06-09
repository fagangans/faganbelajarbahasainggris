import { supabase } from './supabase';
import { upsertLeaderboardEntry } from './leaderboard';

function storeToRow(state, userId) {
  const ownedAvatars = Array.isArray(state.ownedAvatars) && state.ownedAvatars.length > 0
    ? state.ownedAvatars
    : ['owl'];
  return {
    user_id: userId,
    username: state.username,
    avatar: state.avatar,
    dark_mode: state.darkMode,
    unlocked_units: state.unlockedUnits,
    completed_units: state.completedUnits,
    unit_stars: state.unitStars,
    current_unit_id: state.currentUnitId,
    hearts: state.hearts,
    max_hearts: state.maxHearts,
    last_heart_reset: state.lastHeartReset,
    xp: state.xp,
    gems: state.gems,
    streak: state.streak,
    last_active_date: state.lastActiveDate,
    achievements: state.achievements,
    owned_avatars: ownedAvatars,
    equipped_avatar: state.equippedAvatar || 'owl',
    updated_at: new Date().toISOString(),
  };
}

function rowToStore(row) {
  const ownedAvatars = Array.isArray(row.owned_avatars) && row.owned_avatars.length > 0
    ? row.owned_avatars
    : ['owl'];
  const equippedAvatar = ownedAvatars.includes(row.equipped_avatar) ? row.equipped_avatar : 'owl';
  return {
    username: row.username,
    avatar: row.avatar,
    darkMode: row.dark_mode,
    unlockedUnits: row.unlocked_units,
    completedUnits: row.completed_units,
    unitStars: row.unit_stars,
    currentUnitId: row.current_unit_id,
    hearts: row.hearts,
    maxHearts: row.max_hearts,
    lastHeartReset: row.last_heart_reset,
    xp: row.xp,
    gems: row.gems,
    streak: row.streak,
    lastActiveDate: row.last_active_date,
    achievements: row.achievements,
    ownedAvatars,
    equippedAvatar,
  };
}

export async function loadCloudProgress(userId) {
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error || !data) return null;
  return rowToStore(data);
}

export async function saveCloudProgress(state, userId) {
  const row = storeToRow(state, userId);
  const { error } = await supabase
    .from('user_progress')
    .upsert(row, { onConflict: 'user_id' });

  if (error) {
    console.error('Cloud sync error:', error);
    return;
  }

  // Update public leaderboard — failure must never break progress sync
  upsertLeaderboardEntry({
    userId,
    username: state.username,
    avatar: state.avatar,
    xp: state.xp,
    streak: state.streak,
  }).catch((e) => console.warn('Leaderboard sync warning:', e));
}

// Merge strategy: cloud wins on XP; ownedAvatars is always a union of both
export function mergeProgress(local, cloud) {
  if (!cloud) return local;
  if (!local) return cloud;
  const base = cloud.xp >= local.xp ? cloud : local;
  const localOwned = Array.isArray(local.ownedAvatars) ? local.ownedAvatars : ['owl'];
  const cloudOwned = Array.isArray(cloud.ownedAvatars) ? cloud.ownedAvatars : ['owl'];
  const ownedAvatars = [...new Set([...localOwned, ...cloudOwned])];
  const equippedAvatar = ownedAvatars.includes(base.equippedAvatar) ? base.equippedAvatar : 'owl';
  return { ...base, ownedAvatars, equippedAvatar };
}
