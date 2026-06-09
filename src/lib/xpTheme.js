const XP_TIERS = [
  {
    id: 'midnight',
    name: 'Midnight Academy',
    label: '🌙 Midnight',
    className: 'xp-theme-midnight',
    minXp: 0,
    maxXp: 500,
  },
  {
    id: 'emerald',
    name: 'Emerald Forest',
    label: '🌿 Emerald',
    className: 'xp-theme-emerald',
    minXp: 501,
    maxXp: 1500,
  },
  {
    id: 'abyss',
    name: 'Abyss Ocean',
    label: '🌊 Abyss',
    className: 'xp-theme-abyss',
    minXp: 1501,
    maxXp: 3000,
  },
  {
    id: 'galaxy',
    name: 'Royal Galaxy',
    label: '👑 Galaxy',
    className: 'xp-theme-galaxy',
    minXp: 3001,
    maxXp: 6000,
  },
  {
    id: 'celestial',
    name: 'Celestial Gold',
    label: '✨ Celestial',
    className: 'xp-theme-celestial',
    minXp: 6001,
    maxXp: Infinity,
  },
];

export function getXpTheme(totalXp) {
  const xp = totalXp ?? 0;
  for (let i = XP_TIERS.length - 1; i >= 0; i--) {
    if (xp >= XP_TIERS[i].minXp) {
      const tier = XP_TIERS[i];
      const next = XP_TIERS[i + 1] ?? null;
      return { ...tier, nextTier: next };
    }
  }
  return { ...XP_TIERS[0], nextTier: XP_TIERS[1] };
}

export { XP_TIERS };
