export type Mood = {
  id: string;
  name: string;
  nameZh: string;
  emoji: string;
  color: string;
};

export type GeneratedContent = {
  id: string;
  mood: Mood;
  quote: string;
  timestamp: Date;
  language: 'en' | 'zh';
};

export type Language = 'en' | 'zh';