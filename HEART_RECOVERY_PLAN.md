# HEART_RECOVERY_PLAN.md

Plan for adding three heart-recovery mechanisms to GrammarQuest.
No application code is changed by this document.

---

## 1. Current System Inventory

### Where hearts are stored

**File:** `src/store/useGameStore.js`

```
hearts: 5          // current count (line 55)
maxHearts: 5       // cap (line 56)
lastHeartReset: '' // date string used for daily reset (line 57)
```

The persist middleware (line 41–209) writes all state to **localStorage** under key
`'grammarquest-store'`. Hearts survive page refresh and are available on every page.

### Where gems are stored

Same file, same store object:

```
gems: 0   // line 58
```

Two existing actions manage gems:

| Action | Location | Behaviour |
|--------|----------|-----------|
| `addGems(amount)` | line 110 | Increments gems, no cap |
| `spendGem()` | lines 112–119 | Decrements by 1 only if gems ≥ 1; returns `true/false` |

`spendGem` currently handles only single-gem transactions. A bulk spend
(e.g., "refill all 5 hearts at once") needs a new `spendGems(n)` action.

### Where wrong answers decrement hearts

**Primary location — `src/pages/Exercise.jsx`:**

| Function | Line | Trigger |
|----------|------|---------|
| `handleWrong()` | 83–88 | Called by `ExerciseCard` via `onWrong` prop when answer is incorrect |
| `handleTimeOut()` | 65–71 | Called by the challenge-mode countdown when `timeLeft` reaches 0 |

Both call `loseHeart()` from the store (imported at line 47).

**`loseHeart()` in store — line 91–94:**
```js
loseHeart: () => {
  const { hearts } = get();
  if (hearts > 0) set({ hearts: hearts - 1 });
},
```
There is no callback or event emitted; the component reacts via Zustand's reactive
subscription.

### Where "Out of Hearts" screen is rendered

**`src/pages/Exercise.jsx`, lines 125–143:**

```jsx
if (hearts <= 0 && !done) {
  return (
    <div …>
      <div>💔</div>
      <h2>Out of Hearts!</h2>
      <p>Come back tomorrow for more hearts.</p>
      <button onClick={() => navigate('/')}>Go Home</button>
      <button onClick={() => { /* reset local state */ }}>Try Again</button>
    </div>
  );
}
```

This is an **early return** that short-circuits the rest of the component.
The "Try Again" button resets only local React state (`qIndex`, `correct`, `wrong`,
`mistakes`) — it does NOT restore hearts. If the user presses Try Again with 0 hearts,
the Out-of-Hearts screen will render again immediately on the first wrong answer
(or on the very next render if hearts are still 0).

### How the challenge / question flow works

```
Exercise.jsx mounts
  → reads questions from unit data
  → sets up 30-second countdown if mode === 'challenge'

Per question:
  ExerciseCard renders the question
    → user submits answer
    → ExerciseCard calls onCorrect() or onWrong()
      → Exercise.jsx calls handleCorrect() or handleWrong()
        → handleCorrect: +10 XP, +2 gems, reset timer
        → handleWrong: +1 wrong, loseHeart(), record mistake
    → ExerciseCard calls onNext() after user taps Continue
      → Exercise.jsx next(): checks if done (all questions OR hearts ≤ 0)
        → if done → finish() → completeUnit() → result screen
        → else → advance qIndex

Challenge mode additionally:
  → countdown runs per question via setInterval
  → handleTimeOut(): +1 wrong, loseHeart(), calls next()
```

Key observation: `hearts <= 0` is checked inside `next()` (line 92) **and** as a
render guard (line 125). If a purchase restores `hearts` to ≥ 1 **before** `next()`
is called, the exercise will continue normally — no structural change to the flow is
needed.

---

## 2. Three Recovery Mechanisms

### Mechanism A — Review Practice to earn 1 heart

User answers 3 review questions correctly (drawn from mistakes in completed units or
from a fixed pool) to earn 1 heart. No gems spent.

### Mechanism B — Buy 1 heart with gems

Costs a fixed number of gems (recommended: **10 gems**). Adds 1 heart immediately.

### Mechanism C — Refill all hearts with gems

Costs a larger number of gems (recommended: **max_hearts × 10 = 50 gems** at
`maxHearts = 5`). Sets `hearts = maxHearts`.

---

## 3. Safest Implementation Approach

### Principle: Add, don't rewrite

The Out-of-Hearts block (Exercise.jsx lines 125–143) is an early return. The safest
pattern is to **extend that block with additional buttons/modals** rather than
restructuring the component or the store.

The store already exposes `gainHeart()` (line 96–99). New actions only need to be
added for bulk operations and review logic.

### Store changes (minimal, additive)

Add two new actions to `useGameStore.js`:

```js
// Spend exactly n gems atomically; returns true if successful
spendGems: (n) => {
  const { gems } = get();
  if (gems >= n) { set({ gems: gems - n }); return true; }
  return false;
},

// Restore all hearts to maxHearts; return true if not already full
refillHearts: () => {
  const { hearts, maxHearts } = get();
  if (hearts < maxHearts) { set({ hearts: maxHearts }); return true; }
  return false;
},
```

`gainHeart()` already exists and handles the +1 case correctly (respects `maxHearts`).

No changes to state shape — no migration needed.

### Exercise.jsx changes (Out-of-Hearts block only)

Replace the static two-button block with a version that offers:
1. **Buy 1 heart** button (if gems ≥ 10)
2. **Refill hearts** button (if gems ≥ 50)
3. **Practice to earn** button (opens a mini review modal)
4. Existing **Go Home** and **Try Again** (Try Again should be grayed out and
   disabled until at least 1 heart is available, or removed)

The exercise continues automatically after any heart is restored because the
`hearts <= 0 && !done` guard will no longer be true.

### Review Practice modal (new component)

A self-contained modal (`HeartRecoveryModal.jsx`) that:
- Pulls 3 questions from `mistakes` (the Exercise local state array) or falls back
  to a fixed set of 3 questions from already-completed units.
- Runs them as mini ExerciseCards with no heart penalty (read-only practice mode).
- On 3 correct answers: calls `gainHeart()`, closes modal.
- On failure: shows encouragement, lets user retry the 3 questions.

Keeping this as a **modal within Exercise.jsx** means no new route, no router
change, and no interference with the active exercise session state.

---

## 4. Exact Files That Would Need Modification

| File | Change type | What changes |
|------|------------|--------------|
| `src/store/useGameStore.js` | Additive | Add `spendGems(n)` and `refillHearts()` actions |
| `src/pages/Exercise.jsx` | Additive | Extend the `hearts <= 0 && !done` block with recovery buttons/modal |
| `src/components/Hearts.jsx` | None required | No change needed |
| `src/components/AchievementModal.jsx` | Reference only | New modal can follow the same pattern |

**New file to create:**
- `src/components/HeartRecoveryModal.jsx` — the review practice mini-game

No other files need to change.

---

## 5. Does This Require Changing the Lesson Data Schema?

**No.** The review practice questions are drawn from:
1. `mistakes` — already tracked as `{ question, userAnswer }` objects in Exercise
   local state (built up during the exercise session), OR
2. Any unit's `questions` array via `getAllUnits()` — same data shape already used
   by Exercise.jsx.

The existing `question` schema (`id`, `type`, `question`, `options`, `answer`,
`hint`, `explanation`) is sufficient. No new fields are needed.

---

## 6. Does This Affect Unlock Progression?

**No.** Unlock progression lives entirely in `completeUnit()`, which writes to
`completedUnits`, `unlockedUnits`, and `unitStars`. Heart recovery actions
(`gainHeart`, `refillHearts`) only touch `hearts`. The two systems are fully
independent.

Completing the review practice questions in the modal must **not** call
`completeUnit()` — it is a standalone exercise and should only call `gainHeart()`.

---

## 7. Risks and Edge Cases

| Risk | Severity | Mitigation |
|------|----------|-----------|
| User buys heart then loses it again on the next question → infinite gem drain | Medium | Cap purchases per session at 3; or show a "hearts restored" banner with a 2-second lock before re-entering the question |
| `spendGems` called concurrently (double-tap) | Low | Zustand `set` is synchronous within a single render cycle; add a local `purchasing` boolean state flag in the component to disable buttons during state update |
| Review practice uses mistake questions that have drag_order type — DragDropQuestion has dnd-kit listeners that may behave oddly inside a modal overlay | Medium | Filter `mistakes` to exclude `drag_order` type questions; use only `multiple_choice`, `fill_blank`, `true_false` for review practice |
| User has 0 mistakes (got everything right but ran out of time) | Low | Fall back to 3 random questions from `getAllUnits()` filtered to completed units |
| `Try Again` button in Out-of-Hearts screen resets local state but not hearts | Existing bug | After adding recovery buttons, remove or clearly disable the `Try Again` button when hearts === 0 to prevent confusion |
| `hearts <= 0` check in `next()` (line 92) fires before the render guard | Low | After restoring a heart the component re-renders with `hearts === 1`; `next()` won't be called again until the user taps Continue; no race condition |
| Refill while already at maxHearts (e.g., user restored 1 heart, then tries to refill) | Low | `refillHearts()` checks `hearts < maxHearts` before spending gems; UI should disable the Refill button when `hearts === maxHearts` |
| Challenge mode timer continues ticking while the Out-of-Hearts screen is shown | Existing | Timer already stops because `done` is not yet `true` and `hearts <= 0` prevents `next()` from running — but the `useEffect` that starts the timer runs again on re-render. Audit the timer cleanup in the `useEffect` dependency array (line 63) when adding recovery to ensure the timer doesn't resume until the modal is dismissed |
| Gem costs may feel too high or too low over time | Design | Make gem costs constants (`HEART_COST_GEM = 10`, `REFILL_COST_GEM = 50`) defined at the top of Exercise.jsx or in a shared `src/config.js` so they can be tuned without hunting through JSX |

---

## 8. Recommended UX

### Out-of-Hearts screen layout (revised)

```
💔  Out of Hearts!

[Hearts display: 🖤🖤🖤🖤🖤]

──────────────────────────────
  📝  Practice 3 questions
      Earn 1 ❤️ for free
      [Practice Now]
──────────────────────────────
  ❤️  +1 Heart
      10 💎  (you have: 34 💎)
      [Buy 1 Heart]
──────────────────────────────
  ❤️❤️❤️❤️❤️  Refill All Hearts
      50 💎  (you have: 34 💎)
      [Refill — Disabled, greyed]
──────────────────────────────

[Go Home]           [Come back tomorrow]
```

- Buttons with insufficient gems are visually disabled (greyed, non-interactive).
- Show current gem count next to each cost so user can decide.
- "Come back tomorrow" replaces the current passive text as a button that navigates home — makes the no-cost path explicit.
- After any heart is restored, the modal/screen closes automatically and the
  question resumes (no extra tap needed).

### Review Practice modal flow

```
HeartRecoveryModal opens (full-screen overlay)

  "Answer 3 correctly to earn a ❤️"
  Progress: ● ○ ○  (dots, like the lesson phase indicator)

  [ExerciseCard — no heart penalty, no timer]

  On 3rd correct answer:
    ✅ "You earned a heart! ❤️"
    [animation: heart fills in]
    Modal auto-closes after 1.5s → exercise resumes

  If user gets a wrong answer:
    ❌  Standard ExerciseCard feedback shown
    Question does NOT count toward the 3 — must still get 3 correct total
    (Wrong answers are ignored for scoring but the question is replaced from pool)
```

---

## 9. Testing Checklist

### Store actions
- [ ] `spendGems(10)` with 9 gems → returns `false`, gems unchanged
- [ ] `spendGems(10)` with 10 gems → returns `true`, gems = 0
- [ ] `spendGems(50)` with 50 gems → returns `true`, gems = 0
- [ ] `refillHearts()` with 3 hearts → sets hearts = 5, returns `true`
- [ ] `refillHearts()` with 5 hearts → returns `false`, hearts unchanged, no gems spent
- [ ] `gainHeart()` at maxHearts → hearts stays at 5 (existing behaviour, regression)
- [ ] `gainHeart()` at 0 hearts → hearts = 1

### Out-of-Hearts screen
- [ ] Screen renders when hearts reach 0 mid-exercise
- [ ] Screen renders when hearts reach 0 via challenge timeout
- [ ] "Buy 1 Heart" button disabled when gems < 10
- [ ] "Buy 1 Heart" button enabled when gems ≥ 10; on click: gems -= 10, hearts = 1, exercise resumes from the SAME question
- [ ] "Refill All Hearts" disabled when gems < 50
- [ ] "Refill All Hearts" enabled when gems ≥ 50; on click: gems -= 50, hearts = 5, exercise resumes
- [ ] "Refill All Hearts" disabled when already at maxHearts (even with enough gems)
- [ ] "Practice Now" opens HeartRecoveryModal
- [ ] "Go Home" navigates to `/`
- [ ] Double-tapping any buy button does not double-spend gems

### Review Practice modal
- [ ] Modal opens with 3 questions (none of type `drag_order`)
- [ ] Questions drawn from `mistakes` array first; falls back to completed units
- [ ] Wrong answer: question does not count; another question is shown
- [ ] 3rd correct answer: `gainHeart()` is called, hearts = 1, modal closes
- [ ] After modal closes: exercise screen re-renders with hearts = 1, exercise continues
- [ ] Closing modal without earning heart leaves hearts at 0, Out-of-Hearts screen returns
- [ ] Timer (challenge mode) does NOT tick while modal is open

### Persistence
- [ ] Gems spent on heart purchase persisted across page reload (localStorage)
- [ ] Heart count restored via purchase persisted across page reload
- [ ] Daily reset still resets hearts to 5 regardless of mid-session purchases

### Regression tests (existing behaviour must be unchanged)
- [ ] Normal exercise (no heart loss): completes and shows result screen
- [ ] Challenge timeout: decrements heart
- [ ] Wrong answer: decrements heart
- [ ] `Try Again` after result screen resets question state
- [ ] Unlock progression after completing unit: next unit unlocked

---

## 10. Implementation Difficulty Estimate

| Task | Effort | Difficulty |
|------|--------|-----------|
| Add `spendGems(n)` and `refillHearts()` to store | ~15 min | Easy |
| Extend Out-of-Hearts screen with buy buttons | ~30 min | Easy |
| Create `HeartRecoveryModal.jsx` (mini exercise loop) | ~90 min | Medium |
| Timer pause/resume during modal | ~20 min | Easy–Medium |
| Integration testing & edge-case hardening | ~60 min | Medium |
| **Total** | **~3.5 hours** | **Low–Medium** |

No complex refactoring is needed. The most delicate part is ensuring the challenge
timer does not run while the modal is open, and that the question index is preserved
correctly when the exercise resumes.

---

## 11. Summary

- **No lesson data schema changes required.**
- **No unlock progression logic changes required.**
- **Store changes are purely additive** (2 new actions, no state shape change).
- **UI changes are confined to Exercise.jsx** (extend existing early-return block)
  plus one new component (`HeartRecoveryModal.jsx`).
- The existing `gainHeart()`, `spendGem()`, and persist middleware are all reusable
  with minimal addition.
- Biggest risk is the challenge-mode timer interaction during the review modal —
  addressed by pausing the interval while the modal is visible.
