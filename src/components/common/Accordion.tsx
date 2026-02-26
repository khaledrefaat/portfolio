'use client';

import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import PlusMinusIcon from '../icons/PlusMinusIcon';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  // SSR: Only set initial state after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleItem = (id: string) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(id);
      }

      return newSet;
    });
  };

  return (
    <div className="w-full space-y-4">
      {items.map((item) => (
        <AccordionItemComponent
          key={item.id}
          item={item}
          isExpanded={expandedIds.has(item.id)}
          onToggle={toggleItem}
          isHydrated={mounted}
        />
      ))}
    </div>
  );
};

interface AccordionItemComponentProps {
  item: AccordionItem;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  isHydrated: boolean;
}

const AccordionItemComponent: React.FC<AccordionItemComponentProps> = ({
  item,
  isExpanded,
  onToggle,
  isHydrated,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  // Measure content height for smooth animations
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  // Handle window resize to recalculate height
  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition-colors hover:border-gray-300">
      <button
        onClick={() => onToggle(item.id)}
        aria-expanded={isExpanded}
        aria-controls={`content-${item.id}`}
        className="w-full px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-between group dark:text-white dark:hover:text-black"
        type="button"
      >
        <span>{item.question}</span>
        <PlusMinusIcon isPlus={!isExpanded} />
      </button>

      <div
        id={`content-${item.id}`}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isHydrated && isExpanded ? `${contentHeight}px` : '0px',
        }}
      >
        <div
          ref={contentRef}
          className="px-6 py-4 text-gray-700 bg-gray-50 border-t border-gray-200"
        >
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
