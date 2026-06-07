import { useEffect, useRef, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LessonNode from './LessonNode';
import SectionBanner from './SectionBanner';
import { SECTION_DEFS } from '../utils/progress';
import useGameStore from '../store/useGameStore';
import { getAllUnits } from '../data/index';

const ZIGZAG = ['left', 'center', 'right', 'center'];

function getZigzagX(index, containerWidth = 340) {
  const pos = ZIGZAG[index % ZIGZAG.length];
  if (pos === 'left') return containerWidth * 0.18;
  if (pos === 'right') return containerWidth * 0.62;
  return containerWidth * 0.4;
}

const VERTICAL_SPACING = 140;

const ConnectorLine = memo(({ from, to, color = '#e5e7eb', animated }) => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const mx = from.x + dx * 0.4;
  const my = from.y + dy * 0.5;
  const d = `M ${from.x + 36} ${from.y + 36} Q ${mx + 36} ${my} ${to.x + 36} ${to.y + 36}`;

  return (
    <svg
      className="absolute top-0 left-0 pointer-events-none"
      style={{ overflow: 'visible', zIndex: 0 }}
      width="100%"
      height="100%"
    >
      <path
        d={d}
        fill="none"
        stroke={animated ? color : '#e5e7eb'}
        strokeWidth={animated ? 3 : 2}
        strokeDasharray={animated ? '8 4' : 'none'}
        opacity={animated ? 0.7 : 0.4}
      />
    </svg>
  );
});

export default function LessonMap() {
  const navigate = useNavigate();
  const { currentUnitId, completedUnits, unlockedUnits } = useGameStore();
  const containerRef = useRef(null);
  const currentRef = useRef(null);
  const allUnits = getAllUnits();

  useEffect(() => {
    if (currentRef.current) {
      currentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentUnitId]);

  const handleNodeClick = useCallback((unit) => {
    navigate(`/lesson/${unit.id}`);
  }, [navigate]);

  const containerWidth = 340;

  // Pre-compute node positions
  const nodePositions = allUnits.map((unit, i) => ({
    unit,
    x: getZigzagX(i, containerWidth),
    y: i * VERTICAL_SPACING,
  }));

  const totalHeight = allUnits.length * VERTICAL_SPACING + 160;

  // Build section boundaries
  const sectionMap = {};
  SECTION_DEFS.forEach(s => {
    s.units.forEach(uid => { sectionMap[uid] = s; });
  });

  // Track which sections have been rendered
  const renderedSections = new Set();

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-y-auto overflow-x-hidden pb-24"
      style={{ maxWidth: containerWidth + 80, margin: '0 auto' }}
    >
      <div className="relative" style={{ height: totalHeight, width: '100%' }}>
        {/* Connector lines */}
        {nodePositions.map((pos, i) => {
          if (i === 0) return null;
          const prev = nodePositions[i - 1];
          const isUnlocked = unlockedUnits.includes(pos.unit.id);
          const prevCompleted = completedUnits.includes(prev.unit.id);
          return (
            <ConnectorLine
              key={`line-${i}`}
              from={prev}
              to={pos}
              color={prevCompleted ? '#58CC02' : '#3b82f6'}
              animated={prevCompleted}
            />
          );
        })}

        {/* Section banners and nodes */}
        {nodePositions.map((pos, i) => {
          const section = sectionMap[pos.unit.id];
          const isFirstInSection = section && !renderedSections.has(section.id);
          if (isFirstInSection) renderedSections.add(section.id);

          const isCurrent = pos.unit.id === currentUnitId;

          return (
            <div key={pos.unit.id}>
              {isFirstInSection && (
                <div
                  className="absolute w-full"
                  style={{ top: pos.y - 80, left: 0, zIndex: 2 }}
                >
                  <SectionBanner
                    section={section}
                    isActive={unlockedUnits.some(id => section.units.includes(id))}
                    isLocked={!unlockedUnits.some(id => section.units.includes(id))}
                  />
                </div>
              )}

              <div
                ref={isCurrent ? currentRef : null}
                className="absolute"
                style={{
                  left: pos.x,
                  top: pos.y,
                  zIndex: 3,
                }}
              >
                <LessonNode
                  unit={pos.unit}
                  onClick={handleNodeClick}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
