import { supabase } from './supabase';

const LEVEL_THRESHOLDS = [0, 100, 250, 500, 900, 1400, 2100, 3000, 4200, 5800, 8000];

export function calcLevel(xp) {
  let level = 1;
  for (let i = 1; i < LEVEL_THRESHOLDS.length; i++) {
    if (xp >= LEVEL_THRESHOLDS[i]) level = i + 1;
    else break;
  }
  return level;
}

export async function fetchLeaderboard(limit = 50) {
  const { data, error } = await supabase
    .from('leaderboard_public')
    .select('user_id, username, avatar, xp, level, streak')
    .order('xp', { ascending: false })
    .order('streak', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data ?? [];
}

export function subscribeToLeaderboard(onChange) {
  const channel = supabase
    .channel('leaderboard_changes')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'leaderboard_public' }, onChange)
    .subscribe();

  return () => supabase.removeChannel(channel);
}

export async function upsertLeaderboardEntry({ userId, username, avatar, xp, streak }) {
  const { error } = await supabase
    .from('leaderboard_public')
    .upsert(
      {
        user_id: userId,
        username: username || 'Learner',
        avatar: avatar || '🦉',
        xp: xp ?? 0,
        level: calcLevel(xp ?? 0),
        streak: streak ?? 0,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' }
    );

  if (error) console.warn('Leaderboard upsert warning:', error);
}
