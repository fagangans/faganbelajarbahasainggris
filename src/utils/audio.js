let audioCtx = null;

function getCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playTone(frequency, duration, type = 'sine', gain = 0.3) {
  try {
    const ctx = getCtx();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
    gainNode.gain.setValueAtTime(gain, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  } catch (e) {
    // Audio not available
  }
}

export function playCorrect() {
  playTone(523, 0.1);
  setTimeout(() => playTone(659, 0.1), 100);
  setTimeout(() => playTone(784, 0.2), 200);
}

export function playWrong() {
  playTone(300, 0.15, 'sawtooth', 0.2);
  setTimeout(() => playTone(250, 0.2, 'sawtooth', 0.2), 150);
}

export function playCompletion() {
  const notes = [523, 659, 784, 1047];
  notes.forEach((freq, i) => {
    setTimeout(() => playTone(freq, 0.15, 'sine', 0.3), i * 120);
  });
}

export function playUnlock() {
  playTone(440, 0.08);
  setTimeout(() => playTone(554, 0.08), 80);
  setTimeout(() => playTone(659, 0.08), 160);
  setTimeout(() => playTone(880, 0.25), 240);
}

export function playClick() {
  playTone(800, 0.05, 'sine', 0.15);
}

export function playStreak() {
  const notes = [392, 494, 587, 740];
  notes.forEach((freq, i) => {
    setTimeout(() => playTone(freq, 0.12, 'sine', 0.25), i * 100);
  });
}
