# NEXT_STEPS.md — FaganBelajarBahasaInggris

Generated: 2026-06-08  
Based on: Full technical audit of repository

---

## Subsystem Completion Estimates

| Subsystem | Completion | Notes |
|-----------|-----------|-------|
| UI completeness | 95% | All 6 pages + 11 components built; gem shop page missing |
| Lesson map | 100% | 145 nodes, zigzag layout, section banners, auto-scroll |
| Unlock progression | 100% | Linear unlock, boss/checkpoint nodes, lock icons |
| Zustand persistence | 90% | localStorage via persist middleware; no cloud backup |
| Hearts system | 100% | Daily reset, lose on wrong answer, challenge timeout |
| XP system | 100% | 11 levels, star ratings, gem rewards, progress bar |
| Achievement system | 85% | 7 badges with logic + UI; no XP/gem-unlock achievements |
| Mobile responsiveness | 95% | Tailwind max-w-lg, safe area, dark mode; no tablet breakpoint |
| Performance | 75% | No code splitting, all 145 nodes rendered at once, ~500kb data payload |
| Missing integrations | 10% | No backend, no auth, no analytics, no push notifications |

**Overall app completeness: ~82%** — fully playable offline; not production-scalable.

---

## Priority-Ordered Next Steps

### P0 — Critical / Ship-Blockers

**1. Code splitting & lazy routes**  
All JS ships in one bundle. Split each page (`Home`, `Lesson`, `Exercise`, `Profile`, `Leaderboard`) into lazy chunks via `React.lazy` + `Suspense`. Estimated bundle reduction: ~40%.  
Files: `src/App.jsx`

**2. Virtualize LessonMap**  
145 `LessonNode` components mount simultaneously, each with Framer Motion animations. Use `@tanstack/react-virtual` or a simple windowing approach — only render nodes within ~2 screens of scroll position.  
Files: `src/components/LessonMap.jsx`

**3. Fix missing HANDOFF.md / PROJECT_STATUS.md**  
These files were referenced but do not exist. Create them for future contributors and CI/CD pipelines.  
Files: create `HANDOFF.md`, `PROJECT_STATUS.md`

---

### P1 — High Value / Near-Term

**4. Real leaderboard data**  
`Leaderboard.jsx` uses 10 hardcoded mock players. At minimum, persist top scores locally and merge with the current user. For multi-device, requires a backend (see P2).  
Files: `src/pages/Leaderboard.jsx`, `src/store/useGameStore.js`

**5. Gem shop page**  
Gems are earned but never spent (except hints). Build a shop screen: hints, heart refills, streak freezes. Unlocks the gem economy loop and gives users a reason to grind.  
Files: create `src/pages/Shop.jsx`, update `src/components/BottomNav.jsx`, `src/store/useGameStore.js`

**6. Expand achievements (10 → 20+)**  
Only 7 achievements defined. Add: first drag-drop correct, perfect challenge (no hearts lost), complete a full section, 14/60/100-day streaks, reach level 5/10, use 0 hints in a unit, etc.  
Files: `src/utils/progress.js`, `src/store/useGameStore.js`

**7. Tablet / desktop layout**  
All containers are capped at `max-w-lg` (448px). On tablets/desktops the app shows a narrow centered column with wasted whitespace. Add a `md:` breakpoint layout: two-column with sidebar nav instead of bottom nav.  
Files: `src/components/BottomNav.jsx`, `src/index.css`, global layout wrapper

**8. TypeScript migration**  
No prop validation. Store shape, question types, and unit schema are all untyped. Migrate to `.tsx`/`.ts` starting with the store and data types; this prevents runtime bugs as data grows.  
Files: entire `src/`

---

### P2 — Medium Priority / Growth Features

**9. Backend + authentication (Firebase or Supabase)**  
Progress is localStorage-only — lost if user clears browser data or switches devices. Add:
- Anonymous auth (no signup friction)
- Cloud sync of `useGameStore` state
- Serverless functions for leaderboard writes  
Stack recommendation: Firebase (free tier covers 10k MAU).

**10. Push / local notifications for streaks**  
No reminder when a user hasn't played. Use the Web Push API (requires service worker) or, on mobile PWA, `Notification` API. Fire a reminder at 8pm if `lastActiveDate !== today`.  
Files: create `public/service-worker.js`, `src/utils/notifications.js`

**11. PWA manifest + install prompt**  
Add `manifest.json` with app name, icons, theme color, `display: standalone`. Show "Add to Home Screen" prompt after first completed lesson. Makes the app feel native on iOS/Android.  
Files: `public/manifest.json`, `index.html`, create `src/components/InstallPrompt.jsx`

**12. Analytics (privacy-first)**  
No visibility into which lessons are abandoned, which question types cause most failures, or where users drop off. Add Plausible or Umami (self-hosted, GDPR-safe). Track: lesson start, lesson complete, wrong answer (by question type), heart loss.  
Files: `src/main.jsx` (init), thin event wrapper utility

**13. Answer normalization hardening**  
`fill_blank` answer checking uses `toLowerCase + remove punctuation`. Edge cases: extra spaces, contracted vs. expanded forms ("don't" vs "do not"), British vs. American spelling. Improve the normalizer and add a small test suite.  
Files: `src/components/ExerciseCard.jsx`, `src/utils/` (new `normalize.js`)

---

### P3 — Polish / Nice-to-Have

**14. Hint system improvements**  
Currently hints reveal the full answer for 1 gem. Add tiered hints: first hint shows a partial clue (1 gem), second hint reveals answer (2 gems). Prevents trivial bypass.  
Files: `src/components/ExerciseCard.jsx`, data files (add `hint_clue` field)

**15. Onboarding flow**  
No first-run experience. New users land directly on the lesson map with no context. Add a 3-screen onboarding: set name/avatar, explain hearts, explain XP. Gate behind `hasCompletedOnboarding` store flag.  
Files: create `src/pages/Onboarding.jsx`, `src/store/useGameStore.js`

**16. Section completion celebration**  
Completing all units in a section (e.g., all 16 Preposition units) has no special reward. Add a section-complete modal with confetti, bonus XP, and a section badge.  
Files: `src/store/useGameStore.js` (detect section complete), `src/utils/progress.js`

**17. Retry / spaced repetition queue**  
Questions answered incorrectly are shown once in the mistake review but never revisited. Build a "Review" queue that resurfaces weak questions after 1/3/7 days (SM-2 algorithm or simple bucket system).  
Files: `src/store/useGameStore.js` (add `reviewQueue`), create `src/pages/Review.jsx`

**18. Keyboard navigation (desktop)**  
Exercise.jsx already supports 1-4 keys for multiple choice. Extend to: `Space` = play TTS, `←/→` = navigate study cards, `Escape` = back. Improves desktop UX significantly.  
Files: `src/pages/Lesson.jsx`, `src/components/ExerciseCard.jsx`

**19. Unit test suite**  
Zero tests exist. Start with: store actions (completeUnit, loseHeart, streak logic), answer normalization, XP/level calculations, and achievement trigger conditions.  
Stack: Vitest (already has Vite, zero config needed) + React Testing Library.  
Files: create `src/__tests__/`

**20. Error boundary + offline fallback UI**  
No `ErrorBoundary` component. A runtime error in a lesson crashes the whole app with a white screen. Wrap routes in an ErrorBoundary that shows a friendly "Something went wrong — return home" screen.  
Files: create `src/components/ErrorBoundary.jsx`, `src/App.jsx`

---

## Recommended Sprint Order

| Sprint | Items | Goal |
|--------|-------|------|
| Sprint 1 (now) | #1, #2, #3, #20 | Performance + stability foundation |
| Sprint 2 | #4, #5, #6, #15 | Close gameplay loop gaps |
| Sprint 3 | #7, #8, #11 | Platform & distribution polish |
| Sprint 4 | #9, #10, #12 | Backend + growth infrastructure |
| Sprint 5+ | #13–#19 | Depth features & quality |
