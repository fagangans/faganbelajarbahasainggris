export function getStarCount(score, total) {
  const pct = total > 0 ? score / total : 0;
  if (pct >= 0.9) return 3;
  if (pct >= 0.7) return 2;
  if (pct >= 0.5) return 1;
  return 0;
}

export function getMotivationalMessage(correct, total) {
  const pct = total > 0 ? correct / total : 0;
  if (pct === 1) return { text: 'Perfect Score! 🏆', color: 'text-yellow-500' };
  if (pct >= 0.8) return { text: 'Amazing work! 🎉', color: 'text-green-500' };
  if (pct >= 0.6) return { text: 'Great job! 🚀', color: 'text-blue-500' };
  if (pct >= 0.4) return { text: 'Keep going! 💪', color: 'text-orange-500' };
  return { text: 'You can do better! 📚', color: 'text-purple-500' };
}

export function getRandomMotivation() {
  const messages = [
    "Amazing! 🎉",
    "Great Job! 🚀",
    "Keep Going! 💪",
    "Excellent Work! ⭐",
    "You're Improving! 🔥",
    "Brilliant! 🌟",
    "Fantastic! 🎯",
    "Super! 👏",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

export const ACHIEVEMENTS = {
  first_lesson: { id: 'first_lesson', title: 'First Step', desc: 'Complete your first lesson', icon: '🎓', color: 'bg-blue-500' },
  first_perfect: { id: 'first_perfect', title: 'Perfectionist', desc: 'Get a perfect score', icon: '🏆', color: 'bg-yellow-500' },
  streak_7: { id: 'streak_7', title: '7-Day Streak', desc: 'Learn 7 days in a row', icon: '🔥', color: 'bg-orange-500' },
  streak_30: { id: 'streak_30', title: '30-Day Streak', desc: 'Learn 30 days in a row', icon: '💎', color: 'bg-purple-500' },
  unit_10: { id: 'unit_10', title: 'Getting Serious', desc: 'Complete 10 units', icon: '⚡', color: 'bg-green-500' },
  unit_50: { id: 'unit_50', title: 'Halfway There', desc: 'Complete 50 units', icon: '🌟', color: 'bg-pink-500' },
  unit_145: { id: 'unit_145', title: 'Grammar Master', desc: 'Complete all 145 units', icon: '👑', color: 'bg-red-500' },
};

export function isCheckpoint(unitId) {
  return unitId % 5 === 0 && unitId % 10 !== 0;
}

export function isBoss(unitId) {
  return unitId % 10 === 0;
}

export function getNodeType(unitId) {
  if (isBoss(unitId)) return 'boss';
  if (isCheckpoint(unitId)) return 'checkpoint';
  return 'lesson';
}

export const SECTION_DEFS = [
  { id: 1, title: 'Present & Past', units: [1,2,3,4,5,6], icon: '📝', color: '#58CC02', bg: 'from-green-500 to-emerald-400' },
  { id: 2, title: 'Present Perfect', units: [7,8,9,10,11,12,13,14,15,16,17,18], icon: '⏰', color: '#1CB0F6', bg: 'from-blue-500 to-cyan-400' },
  { id: 3, title: 'Future', units: [19,20,21,22,23,24,25], icon: '🚀', color: '#FF9600', bg: 'from-orange-500 to-yellow-400' },
  { id: 4, title: 'Modals', units: [26,27,28,29,30,31,32,33,34,35,36,37], icon: '🎭', color: '#FF4B4B', bg: 'from-red-500 to-pink-400' },
  { id: 5, title: 'If & Wish', units: [38,39,40,41], icon: '✨', color: '#CE82FF', bg: 'from-purple-500 to-violet-400' },
  { id: 6, title: 'Passive', units: [42,43,44,45,46], icon: '🔄', color: '#FF86D0', bg: 'from-pink-500 to-rose-400' },
  { id: 7, title: 'Reported Speech', units: [47,48], icon: '💬', color: '#2DB0C1', bg: 'from-teal-500 to-cyan-400' },
  { id: 8, title: 'Questions', units: [49,50,51,52], icon: '❓', color: '#FFC800', bg: 'from-yellow-500 to-amber-400' },
  { id: 9, title: '-ing & To', units: [53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68], icon: '🔀', color: '#58CC02', bg: 'from-lime-500 to-green-400' },
  { id: 10, title: 'Articles & Nouns', units: [69,70,71,72,73,74,75,76,77,78,79,80,81], icon: '📚', color: '#1CB0F6', bg: 'from-sky-500 to-blue-400' },
  { id: 11, title: 'Pronouns', units: [82,83,84,85,86,87,88,89,90,91], icon: '👤', color: '#FF9600', bg: 'from-amber-500 to-orange-400' },
  { id: 12, title: 'Relative Clauses', units: [92,93,94,95,96,97], icon: '🔗', color: '#CE82FF', bg: 'from-violet-500 to-purple-400' },
  { id: 13, title: 'Adjectives & Adverbs', units: [98,99,100,101,102,103,104,105,106,107,108,109,110,111,112], icon: '🎨', color: '#FF4B4B', bg: 'from-rose-500 to-red-400' },
  { id: 14, title: 'Conjunctions', units: [113,114,115,116,117,118,119,120], icon: '🔧', color: '#2DB0C1', bg: 'from-cyan-500 to-teal-400' },
  { id: 15, title: 'Prepositions', units: [121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136], icon: '📍', color: '#FFC800', bg: 'from-yellow-500 to-lime-400' },
  { id: 16, title: 'Phrasal Verbs', units: [137,138,139,140,141,142,143,144,145], icon: '⚡', color: '#58CC02', bg: 'from-green-500 to-teal-400' },
];

export function getSectionForUnit(unitId) {
  return SECTION_DEFS.find(s => s.units.includes(unitId));
}

export function getSectionProgress(sectionId, completedUnits) {
  const section = SECTION_DEFS.find(s => s.id === sectionId);
  if (!section) return 0;
  const done = section.units.filter(u => completedUnits.includes(u)).length;
  return Math.round((done / section.units.length) * 100);
}
