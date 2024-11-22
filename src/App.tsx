import React, { useState } from 'react';
import { MoodSelector } from './components/MoodSelector';
import { ContentDisplay } from './components/ContentDisplay';
import { MoodJournal } from './components/MoodJournal';
import { LanguageSwitch } from './components/LanguageSwitch';
import { moods } from './data/moods';
import { generateContent } from './utils/contentGenerator';
import { useMoodJournal } from './hooks/useMoodJournal';
import { Language } from './types/mood';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const { entries, addEntry } = useMoodJournal();
  const [currentContent, setCurrentContent] = React.useState(entries[0] || null);

  const handleMoodSelect = (mood: typeof moods[0]) => {
    const content = generateContent(mood, language);
    setCurrentContent(content);
    addEntry(content);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <LanguageSwitch language={language} onLanguageChange={setLanguage} />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {language === 'en' ? 'MoodScribe' : '心情笔记'}
          </h1>
          <p className="text-lg text-gray-600">
            {language === 'en' ? 'How are you feeling today?' : '今天感觉如何？'}
          </p>
        </div>

        <MoodSelector moods={moods} onMoodSelect={handleMoodSelect} language={language} />

        {currentContent && (
          <div className="mt-8">
            <ContentDisplay content={currentContent} language={language} />
          </div>
        )}

        <MoodJournal entries={entries} language={language} />
      </div>
    </div>
  );
}

export default App;