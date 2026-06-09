import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useGameStore, { AVATAR_CATALOG } from '../store/useGameStore';
import { getXpTheme, XP_TIERS } from '../lib/xpTheme';

function Toast({ msg, ok }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl text-white text-sm font-bold shadow-xl whitespace-nowrap ${
        ok ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      {msg}
    </motion.div>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 mt-6 first:mt-0 px-1">
      {children}
    </h2>
  );
}

export default function Shop() {
  const {
    gems, hearts, maxHearts, xp, ownedAvatars, equippedAvatar,
    buyHeart, refillHeartsWithGems, buyAvatar, equipAvatar,
  } = useGameStore();

  const [toast, setToast] = useState(null);

  function showToast(result) {
    setToast(result);
    setTimeout(() => setToast(null), 2200);
  }

  function handle(result) {
    showToast(result);
  }

  const xpTheme = getXpTheme(xp);
  const nextTier = xpTheme.nextTier;
  const progressToNext = nextTier
    ? Math.min(100, Math.round(((xp - xpTheme.minXp) / (nextTier.minXp - xpTheme.minXp)) * 100))
    : 100;

  return (
    <div className="min-h-screen pb-24 pt-2">
      <AnimatePresence>
        {toast && <Toast msg={toast.message} ok={toast.ok} key={toast.message} />}
      </AnimatePresence>

      <div className="max-w-lg mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-3 py-4">
          <span className="text-3xl">🛍️</span>
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white leading-tight">Shop</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Spend your gems wisely</p>
          </div>
          <div className="ml-auto flex gap-3">
            <div className="flex items-center gap-1.5 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <span className="text-lg">💎</span>
              <span className="font-extrabold text-blue-500">{gems}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <span className="text-lg">❤️</span>
              <span className="font-extrabold text-red-500">{hearts}/{maxHearts}</span>
            </div>
          </div>
        </div>

        {/* XP Prestige Banner */}
        <div className="rounded-2xl overflow-hidden mb-2 border border-white/10 shadow-lg">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Prestige Theme</span>
                <p className="text-white font-extrabold text-base leading-tight">{xpTheme.label} — {xpTheme.name}</p>
              </div>
              <span className="text-3xl">{xpTheme.label.split(' ')[0]}</span>
            </div>
            {nextTier ? (
              <>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>{xp.toLocaleString()} XP</span>
                  <span>Next: {nextTier.name} at {nextTier.minXp.toLocaleString()} XP</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressToNext}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1 text-right">{progressToNext}% to next tier</p>
              </>
            ) : (
              <p className="text-xs text-amber-400 font-bold mt-1">✨ Max prestige reached!</p>
            )}
          </div>
          <div className="bg-gray-900/60 px-4 py-2 flex gap-2 overflow-x-auto">
            {XP_TIERS.map((tier) => (
              <span
                key={tier.id}
                className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap font-semibold ${
                  xp >= tier.minXp
                    ? 'bg-yellow-500/20 text-yellow-300'
                    : 'bg-gray-700/50 text-gray-600'
                }`}
              >
                {tier.label}
              </span>
            ))}
          </div>
        </div>

        {/* Hearts Section */}
        <SectionHeading>❤️ Hearts</SectionHeading>
        <div className="grid grid-cols-2 gap-3">
          <ShopCard
            icon="💗"
            title="+1 Heart"
            desc="Add one heart"
            cost={20}
            gems={gems}
            disabled={hearts >= maxHearts}
            disabledReason={hearts >= maxHearts ? 'Hearts full' : null}
            onBuy={() => handle(buyHeart())}
          />
          <ShopCard
            icon="❤️‍🔥"
            title="Refill All"
            desc="Restore all hearts"
            cost={80}
            gems={gems}
            disabled={hearts >= maxHearts}
            disabledReason={hearts >= maxHearts ? 'Hearts full' : null}
            onBuy={() => handle(refillHeartsWithGems())}
          />
        </div>

        {/* Avatars Section */}
        <SectionHeading>🎭 Avatars</SectionHeading>
        <div className="grid grid-cols-2 gap-3">
          {AVATAR_CATALOG.map((av) => {
            const owned = ownedAvatars.includes(av.id);
            const equipped = equippedAvatar === av.id;
            return (
              <AvatarCard
                key={av.id}
                avatar={av}
                owned={owned}
                equipped={equipped}
                gems={gems}
                onBuy={() => handle(buyAvatar(av.id))}
                onEquip={() => handle(equipAvatar(av.id))}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ShopCard({ icon, title, desc, cost, gems, disabled, disabledReason, onBuy }) {
  const canAfford = gems >= cost;
  const isDisabled = disabled || !canAfford;

  return (
    <motion.div
      whileTap={isDisabled ? {} : { scale: 0.97 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-4 flex flex-col gap-2 shadow-sm border border-gray-100 dark:border-gray-700"
    >
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="font-extrabold text-gray-900 dark:text-white text-sm">{title}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
      </div>
      <button
        onClick={onBuy}
        disabled={isDisabled}
        className={`mt-auto flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-sm font-bold transition-all ${
          isDisabled
            ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white shadow-sm'
        }`}
      >
        {disabledReason ?? (
          <>
            <span className="text-base">💎</span>
            {cost}
          </>
        )}
      </button>
    </motion.div>
  );
}

function AvatarCard({ avatar, owned, equipped, gems, onBuy, onEquip }) {
  const canAfford = gems >= avatar.cost;

  let btnLabel, btnClass, btnDisabled;
  if (equipped) {
    btnLabel = '✓ Equipped';
    btnClass = 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 cursor-default';
    btnDisabled = true;
  } else if (owned) {
    btnLabel = 'Equip';
    btnClass = 'bg-indigo-500 hover:bg-indigo-600 text-white';
    btnDisabled = false;
  } else if (!canAfford) {
    btnLabel = `💎 ${avatar.cost}`;
    btnClass = 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed';
    btnDisabled = true;
  } else {
    btnLabel = `💎 ${avatar.cost}`;
    btnClass = 'bg-blue-500 hover:bg-blue-600 text-white';
    btnDisabled = false;
  }

  return (
    <motion.div
      whileTap={btnDisabled ? {} : { scale: 0.97 }}
      className={`bg-white dark:bg-gray-800 rounded-2xl p-4 flex flex-col items-center gap-2 shadow-sm border transition-all ${
        equipped
          ? 'border-green-400 dark:border-green-500 ring-2 ring-green-400/30'
          : 'border-gray-100 dark:border-gray-700'
      }`}
    >
      <span className="text-4xl leading-none">{avatar.emoji}</span>
      <p className="font-extrabold text-gray-900 dark:text-white text-sm">{avatar.label}</p>
      {avatar.cost === 0 && !owned && (
        <span className="text-xs text-green-500 font-semibold">Free</span>
      )}
      <button
        onClick={owned ? onEquip : onBuy}
        disabled={btnDisabled}
        className={`w-full py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${btnClass}`}
      >
        {btnLabel}
      </button>
    </motion.div>
  );
}
