import { Mood, GeneratedContent, Language } from '../types/mood';

const quotes = {
  en: {
    Happy: [
      "Happiness is not something ready made. It comes from your own actions.",
      "The most wasted of all days is one without laughter.",
      "Happiness is when what you think, what you say, and what you do are in harmony.",
      "The purpose of our lives is to be happy.",
      "Happiness is the art of never holding in your mind the memory of any unpleasant thing that has passed.",
      "For every minute you are angry you lose sixty seconds of happiness.",
      "Happiness is not in the mere possession of money; it lies in the joy of achievement.",
      "The secret of happiness is freedom, the secret of freedom is courage.",
      "Count your age by friends, not years. Count your life by smiles, not tears.",
      "The best way to cheer yourself is to try to cheer someone else up."
    ],
    Calm: [
      "Peace comes from within. Do not seek it without.",
      "Calm mind brings inner strength and self-confidence.",
      "The quieter you become, the more you can hear.",
      "In the midst of movement and chaos, keep stillness inside of you.",
      "Calmness is the cradle of power.",
      "Don't let people pull you into their storm. Pull them into your peace.",
      "Within you, there is a stillness and a sanctuary to which you can retreat at any time.",
      "Breath is the power behind all things. Peace and calm are just a breath away.",
      "The nearer a man comes to a calm mind, the closer he is to strength.",
      "Still waters run deep."
    ],
    Energetic: [
      "Energy and persistence conquer all things.",
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      "The only way to do great work is to love what you do.",
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      "Your energy introduces you before you even speak.",
      "Push yourself, because no one else is going to do it for you.",
      "The future depends on what you do today.",
      "The harder you work for something, the greater you'll feel when you achieve it.",
      "Wake up with determination, go to bed with satisfaction.",
      "Your attitude determines your direction."
    ],
    Stressed: [
      "Take a deep breath. It's just a bad day, not a bad life.",
      "You are stronger than you think.",
      "This too shall pass.",
      "Stress is caused by being 'here' but wanting to be 'there'.",
      "The greatest weapon against stress is our ability to choose one thought over another.",
      "It's not the load that breaks you down, it's the way you carry it.",
      "Difficult roads often lead to beautiful destinations.",
      "Don't let yesterday take up too much of today.",
      "Sometimes the best thing you can do is not think, not wonder, not imagine, not obsess. Just breathe and have faith that everything will work out for the best.",
      "When you feel overwhelmed, remember: one step at a time."
    ],
    Nostalgic: [
      "Memories warm you up from the inside.",
      "Sometimes you will never know the value of a moment until it becomes a memory.",
      "Life is not measured by the breaths we take, but by the moments that take our breath away.",
      "The best thing about memories is making them.",
      "Yesterday is but today's memory, tomorrow is today's dream.",
      "Some memories are unforgettable, remaining ever vivid and heartwarming.",
      "A moment lasts all of a second, but the memory lives on forever.",
      "The past beats inside me like a second heart.",
      "Memory is the diary that we all carry about with us.",
      "Good times become good memories and bad times become good lessons."
    ],
    Creative: [
      "Creativity is intelligence having fun.",
      "Every artist was first an amateur.",
      "The creative adult is the child who survived.",
      "To practice any art, no matter how well or badly, is a way to make your soul grow.",
      "Creativity takes courage.",
      "Art enables us to find ourselves and lose ourselves at the same time.",
      "The worst enemy to creativity is self-doubt.",
      "You can't use up creativity. The more you use, the more you have.",
      "Creativity is contagious, pass it on.",
      "Everything you can imagine is real."
    ]
  },
  zh: {
    Happy: [
      "幸福不是现成的，它来自于你自己的行动。",
      "最浪费的日子是没有笑声的日子。",
      "当你的思想、言语和行为和谐一致时，就是幸福。",
      "我们生命的目的就是要快乐。",
      "幸福就是永远不在心中保留任何不愉快的记忆。",
      "生气一分钟，就失去六十秒的幸福。",
      "幸福不在于拥有金钱，而在于获得成就的喜悦。",
      "幸福的秘诀是自由，自由的秘诀是勇气。",
      "用朋友而不是年龄来计算岁月，用微笑而不是眼泪来衡量人生。",
      "让自己开心的最好方法就是努力去让别人开心。"
    ],
    Calm: [
      "内心的平静来自于内在，不要向外寻求。",
      "平静的心灵带来内在的力量和自信。",
      "你越安静，听到的就越多。",
      "在动荡和混乱中，保持内心的平静。",
      "平静是力量的摇篮。",
      "不要让别人把你拉进他们的风暴，要把他们拉进你的平静。",
      "在你内心有一片宁静和避难所，你随时都可以退居其中。",
      "呼吸是一切力量的源泉。平和与安宁只在呼吸之间。",
      "人越接近平静的心境，就越接近力量。",
      "静水流深。"
    ],
    Energetic: [
      "能量和毅力可以征服一切。",
      "生活就像骑自行车，要保持平衡就必须不断前进。",
      "做伟大的工作的唯一方法就是热爱你所做的事。",
      "成功不是终点，失败也不是致命的：重要的是继续前进的勇气。",
      "你的能量在你开口之前就已经介绍了你。",
      "推动自己，因为没有其他人会帮你做这件事。",
      "未来取决于你今天做什么。",
      "为某事越努力，达成时就会感觉越美好。",
      "带着决心醒来，带着满足入睡。",
      "你的态度决定你的方向。"
    ],
    Stressed: [
      "深呼吸，这只是糟糕的一天，而不是糟糕的人生。",
      "你比你想象的更强大。",
      "这也将过去。",
      "压力来自于身在此处，却想在彼处。",
      "对抗压力最大的武器是我们选择一个想法而不是另一个的能力。",
      "压垮你的不是负担本身，而是你承担的方式。",
      "艰难的道路往往通向美丽的目的地。",
      "不要让昨天占据了太多的今天。",
      "有时候最好的办法就是不思考，不怀疑，不想象，不执着。只要呼吸，相信一切都会变好。",
      "当你感到不知所措时，请记住：一步一步来。"
    ],
    Nostalgic: [
      "回忆让你从内心感到温暖。",
      "有时候你永远不会知道一个时刻的价值，直到它成为回忆。",
      "生命不是用我们呼吸的次数来衡量，而是那些让我们屏住呼吸的时刻。",
      "关于回忆最好的事情就是创造回忆。",
      "昨天不过是今天的记忆，明天是今天的梦想。",
      "有些回忆难以忘怀，永远鲜活而温暖。",
      "一个瞬间只持续一秒钟，但记忆永远长存。",
      "过去在我内心跳动，如同第二颗心脏。",
      "记忆是我们随身携带的日记。",
      "美好的时光成为美好的回忆，糟糕的时光成为宝贵的教训。"
    ],
    Creative: [
      "创造力是智慧在玩耍。",
      "每个艺术家最初都是业余的。",
      "有创造力的成年人是幸存下来的孩子。",
      "练习任何艺术，无论好坏，都是让灵魂成长的方式。",
      "创造力需要勇气。",
      "艺术使我们既能找到自己，又能迷失自己。",
      "创造力最大的敌人是自我怀疑。",
      "创造力用不完。越用越多。",
      "创造力是会传染的，把它传递下去。",
      "你能想象的一切都是真实的。"
    ]
  }
};

export const generateContent = (mood: Mood, language: Language): GeneratedContent => {
  const moodQuotes = quotes[language][mood.name as keyof typeof quotes.en] || quotes[language].Happy;
  const randomQuote = moodQuotes[Math.floor(Math.random() * moodQuotes.length)];

  return {
    id: Date.now().toString(),
    mood,
    quote: randomQuote,
    timestamp: new Date(),
    language
  };
};