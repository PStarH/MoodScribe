import React from 'react';
import { Language } from '../types/mood';

type LanguageSwitchProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  language,
  onLanguageChange,
}) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-3 py-1 rounded-md ${
          language === 'en'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        English
      </button>
      <button
        onClick={() => onLanguageChange('zh')}
        className={`px-3 py-1 rounded-md ${
          language === 'zh'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        中文
      </button>
    </div>
  );
};