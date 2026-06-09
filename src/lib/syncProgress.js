import { supabase } from './supabase';

function storeToRow(state, userId) {
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
    updated_at: new Date().toISOString(),
  };
}

function rowToStore(row) {
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

  if (error) console.error('Cloud sync error:', error);
}

// Merge strategy: cloud wins if it has more XP (more recent progress)
export function mergeProgress(local, cloud) {
  if (!cloud) return local;
  if (!local) return cloud;
  return cloud.xp >= local.xp ? cloud : local;
}
