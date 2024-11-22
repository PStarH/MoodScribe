import React, { useState } from 'react';
import { GeneratedContent, Language } from '../types/mood';
import { format } from 'date-fns';
import zhCN from 'date-fns/locale/zh-CN';

type MoodJournalProps = {
  entries: GeneratedContent[];
  language: Language;
};

export const MoodJournal: React.FC<MoodJournalProps> = ({ entries, language }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedEntries = showAll ? entries : entries.slice(0, 10);

  if (entries.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">
        {language === 'en' ? 'Your Mood Journal' : '你的心情日记'}
      </h2>
      <div className="space-y-4">
        {displayedEntries.map((entry) => (
          <div
            key={entry.id}
            className={`${entry.mood.color} p-4 rounded-lg shadow-md transition-shadow hover:shadow-lg`}
          >
            <div className="bg-white bg-opacity-90 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{entry.mood.emoji}</span>
                  <span className="font-medium text-gray-800">
                    {language === 'en' ? 'Feeling ' : '感受'}
                    {language === 'en' ? entry.mood.name.toLowerCase() : entry.mood.nameZh}
                  </span>
                </div>
                <span className="text-sm text-gray-600">
                  {format(new Date(entry.timestamp), 'MMM d, yyyy h:mm a', {
                    locale: language === 'zh' ? zhCN : undefined,
                  })}
                </span>
              </div>
              <p className="text-gray-800">{entry.quote}</p>
            </div>
          </div>
        ))}
      </div>
      {entries.length > 10 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            {showAll 
              ? (language === 'en' ? 'Show Less' : '显示较少') 
              : (language === 'en' ? 'View More' : '查看更多')}
          </button>
        </div>
      )}
    </div>
  );
};