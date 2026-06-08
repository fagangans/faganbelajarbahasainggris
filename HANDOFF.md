# HANDOFF.md

## GrammarQuest — Handoff Notes

### What Was Done This Session

Upgraded three unit data files from a simplified schema to the full production schema:

| File | Units | Questions Upgraded |
|------|-------|--------------------|
| `src/data/units/articlesAndNouns.js` | 13 (IDs 69–81) | 130 |
| `src/data/units/adjectivesAndAdverbs.js` | 15 (IDs 98–112) | 150 |
| `src/data/units/prepositions.js` | 16 (IDs 121–136) | 160 |

**Changes per file:**
- `prompt:` → `question:`
- `items:` → `options:` (drag_order)
- Added `id: N` on every question
- Added `hint:` on every question
- Added `explanation:` where missing
- Study cards upgraded: `{ front, back }` → `{ title, content, examples: [...] }`

All 145 units now use the identical full schema. Build passes. 0 audit vulnerabilities.

### What Is Left To Do

**Nothing required** — the app is feature-complete and all data is production-quality.

Optional future improvements:
1. **Code splitting** — dynamically import unit data files to reduce the initial bundle below 500 kB. Vite lazy-loading via `import()` in `getAllUnits()`.
2. **Leaderboard backend** — currently mocked with fake players. Could connect to a real API.
3. **Offline PWA** — add a service worker and web app manifest for offline support.
4. **More question variety** — current types: multiple_choice, fill_blank, true_false, drag_order, error_correction. Could add listening comprehension or image-based questions.

### Key Files Reference

```
src/
├── data/
│   ├── index.js              ← normalizer + getAllUnits() / getUnitById()
│   └── units/                ← 16 unit files, IDs 1–145
├── components/
│   ├── LessonMap.jsx         ← zigzag map (DO NOT MODIFY)
│   ├── ExerciseCard.jsx      ← question renderer (DO NOT MODIFY)
│   └── ...
├── pages/
│   ├── Lesson.jsx            ← study/listen/practice/challenge/review flow
│   └── Exercise.jsx          ← 10-question scored session
├── store/
│   └── useGameStore.js       ← Zustand persist store
└── utils/
    └── progress.js           ← SECTION_DEFS, achievement helpers
```

### Schema Normalizer (index.js)

The normalizer in `src/data/index.js` transparently converts any remaining shorthand:
- `prompt` → `question`
- `items` → `options` (drag_order)
- `front/back` → `title/content/examples` (study cards)
- Adds `id` if missing
- Sets `options: ['True', 'False']` for true_false if not provided

All three upgraded files now use the full schema directly and no longer depend on the normalizer for field renaming.

### Branch & PR
- Branch: `claude/lanjut-r3fDJ`
- PR: https://github.com/fagangans/faganbelajarbahasainggris/pull/1
