import { useState, useEffect } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableWord({ id, word, disabled }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id, disabled });
  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      {...attributes}
      {...listeners}
      className={`px-3 py-2 rounded-xl font-bold text-sm cursor-grab active:cursor-grabbing select-none transition-all
        ${isDragging
          ? 'opacity-30 bg-gray-200 dark:bg-gray-700'
          : 'bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-400 text-gray-800 dark:text-white'
        }
        ${disabled ? 'cursor-default' : ''}
      `}
    >
      {word}
    </div>
  );
}

export default function DragDropQuestion({ question, onAnswer, disabled }) {
  const [items, setItems] = useState(() =>
    question.options.map((w, i) => ({ id: `word-${i}-${w}`, word: w }))
  );
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    setItems(question.options.map((w, i) => ({ id: `word-${i}-${w}`, word: w })));
  }, [question]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  function handleDragStart({ active }) {
    setActiveId(active.id);
  }

  function handleDragEnd({ active, over }) {
    setActiveId(null);
    if (!over || active.id === over.id) return;
    setItems((prev) => {
      const oldIndex = prev.findIndex((i) => i.id === active.id);
      const newIndex = prev.findIndex((i) => i.id === over.id);
      return arrayMove(prev, oldIndex, newIndex);
    });
  }

  const activeItem = items.find((i) => i.id === activeId);
  const currentSentence = items.map((i) => i.word).join(' ');

  return (
    <div className="space-y-4">
      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border-2 border-blue-100 dark:border-blue-800 min-h-[52px] flex flex-wrap gap-2 items-center">
        <span className="text-xs text-blue-500 dark:text-blue-400 font-semibold uppercase tracking-wide w-full mb-1">
          Your sentence:
        </span>
        <span className="text-gray-700 dark:text-gray-200 font-bold text-sm leading-relaxed">
          {currentSentence || <span className="text-gray-400 italic">Drag words to arrange...</span>}
        </span>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items.map((i) => i.id)} strategy={horizontalListSortingStrategy}>
          <div className="flex flex-wrap gap-2 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 min-h-[52px]">
            {items.map((item) => (
              <SortableWord key={item.id} id={item.id} word={item.word} disabled={disabled} />
            ))}
          </div>
        </SortableContext>
        <DragOverlay>
          {activeItem && (
            <div className="px-3 py-2 rounded-xl font-bold text-sm bg-blue-500 text-white shadow-lg scale-105">
              {activeItem.word}
            </div>
          )}
        </DragOverlay>
      </DndContext>

      {!disabled && (
        <button
          onClick={() => onAnswer(currentSentence.toLowerCase())}
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold hover:opacity-90 transition-opacity"
        >
          Check Answer
        </button>
      )}
    </div>
  );
}
