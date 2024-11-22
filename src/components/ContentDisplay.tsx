import React from 'react';
import { GeneratedContent, Language } from '../types/mood';
import { format } from 'date-fns';
import zhCN from 'date-fns/locale/zh-CN';

type ContentDisplayProps = {
  content: GeneratedContent;
  language: Language;
};

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ content, language }) => {
  return (
    <div className={`${content.mood.color} p-6 rounded-lg shadow-lg max-w-md mx-auto`}>
      <div className="bg-white bg-opacity-90 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl">{content.mood.emoji}</span>
          <span className="text-sm text-gray-600">
            {format(content.timestamp, 'MMM d, yyyy h:mm a', {
              locale: language === 'zh' ? zhCN : undefined,
            })}
          </span>
        </div>
        <p className="text-lg font-medium text-gray-800">{content.quote}</p>
        <p className="text-sm text-gray-600 mt-2">
          {language === 'en' ? 'Feeling ' : '感受'} 
          {language === 'en' ? content.mood.name.toLowerCase() : content.mood.nameZh}
        </p>
      </div>
    </div>
  );
};