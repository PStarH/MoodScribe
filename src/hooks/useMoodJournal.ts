import { useState, useEffect } from 'react';
import { GeneratedContent } from '../types/mood';

const STORAGE_KEY = 'moodscribe-journal';

export const useMoodJournal = () => {
  const [entries, setEntries] = useState<GeneratedContent[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed.map((entry: any) => ({
        ...entry,
        timestamp: new Date(entry.timestamp)
      }));
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry: GeneratedContent) => {
    setEntries((prev) => [entry, ...prev]);
  };

  return { entries, addEntry };
};