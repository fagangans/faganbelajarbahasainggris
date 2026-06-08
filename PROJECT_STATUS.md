# PROJECT_STATUS.md

## GrammarQuest — Current Status

### Overview
A Duolingo-style English grammar learning app built with React 18 + Vite + Tailwind CSS v4. 145 grammar units across 16 sections, each with study cards, a listen phase, and 10 mixed-type questions.

### Tech Stack
- React 18 + React Router v6
- Vite 8 + Tailwind CSS v4
- Zustand (persist) for game state
- Framer Motion for animations
- Web Speech API (TTS) for the listen phase

### Data: 145 Units / 16 Sections — COMPLETE

| Section | Title | Units | Status |
|---------|-------|-------|--------|
| 1 | Present & Past | 1–6 | ✅ Full schema |
| 2 | Present Perfect | 7–18 | ✅ Full schema |
| 3 | Future | 19–25 | ✅ Full schema |
| 4 | Modals | 26–37 | ✅ Full schema |
| 5 | If & Wish | 38–41 | ✅ Full schema |
| 6 | Passive | 42–46 | ✅ Full schema |
| 7 | Reported Speech | 47–48 | ✅ Full schema |
| 8 | Questions | 49–52 | ✅ Full schema |
| 9 | -ing & To | 53–68 | ✅ Full schema |
| 10 | Articles & Nouns | 69–81 | ✅ Full schema (upgraded) |
| 11 | Pronouns | 82–91 | ✅ Full schema |
| 12 | Relative Clauses | 92–97 | ✅ Full schema |
| 13 | Adjectives & Adverbs | 98–112 | ✅ Full schema (upgraded) |
| 14 | Conjunctions | 113–120 | ✅ Full schema |
| 15 | Prepositions | 121–136 | ✅ Full schema (upgraded) |
| 16 | Phrasal Verbs | 137–145 | ✅ Full schema |

**Total: 145 units × 10 questions = 1,450 questions, all with `hint` + `explanation`.**

### Question Schema (per question)
```js
{
  id: 1,                    // 1–10
  type: "multiple_choice",  // multiple_choice | fill_blank | true_false | drag_order | error_correction
  question: "...",
  options: [...],
  answer: "...",
  hint: "...",              // shown on gem spend
  explanation: "...",       // shown after answer
}
```

### Study Card Schema (per card)
```js
{
  title: "...",
  content: "...",
  examples: ["...", "..."],
}
```

### Components — COMPLETE, DO NOT MODIFY
- `LessonMap.jsx` — zigzag map with section banners, connector lines
- `LessonNode.jsx` — node states: locked / unlocked / current / completed
- `SectionBanner.jsx` — section header banners
- `ExerciseCard.jsx` — renders all 5 question types
- `DragDropQuestion.jsx` — drag-and-drop word ordering
- `ProgressBar.jsx`, `Hearts.jsx`, `Mascot.jsx`, `Confetti.jsx`, `AchievementModal.jsx`, `BottomNav.jsx`

### Pages — COMPLETE
- `/` → `Home.jsx` (lesson map)
- `/lessons` → `Lessons.jsx` (section list)
- `/lesson/:id` → `Lesson.jsx` (study → listen → practice → challenge → review)
- `/exercise/:id/:mode` → `Exercise.jsx` (10-question session with scoring)
- `/profile` → `Profile.jsx`
- `/leaderboard` → `Leaderboard.jsx`

### Store (`useGameStore.js`) — COMPLETE
Zustand + persist. Tracks: unlockedUnits, completedUnits, unitStars, currentUnitId, hearts, xp, gems, streak, achievements, darkMode.

### Build
- `npm run build` — passes, no errors (chunk size warning only, expected for this bundle size)
- `npm audit` — 0 vulnerabilities

### Known Non-Issues
- Bundle size warning (>500 kB): expected for a 145-unit data-heavy SPA. Can be addressed with dynamic imports if needed.
- TTS gracefully degrades on browsers without Web Speech API support.
