import React from 'react';
import { Mood, Language } from '../types/mood';

type MoodSelectorProps = {
  moods: Mood[];
  onMoodSelect: (mood: Mood) => void;
  language: Language;
};

export const MoodSelector: React.FC<MoodSelectorProps> = ({ moods, onMoodSelect, language }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {moods.map((mood) => (
        <button
          key={mood.id}
          onClick={() => onMoodSelect(mood)}
          className={`${mood.color} p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow
            flex flex-col items-center justify-center space-y-2`}
        >
          <span className="text-4xl">{mood.emoji}</span>
          <span className="text-white font-medium">
            {language === 'en' ? mood.name : mood.nameZh}
          </span>
        </button>
      ))}
    </div>
  );
};