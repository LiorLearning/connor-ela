import { BlendingQuestion, SpeechQuestion, Question } from './types';

export const blendingQuestions: BlendingQuestion[] = [
  {
    id: 1,
    word: 'Reese',
    imageUrl: '🌋⚡',
    phonemes: ['R', 'ee', 's', 'e'],
    explanation: "Blend the sounds R-ee-s-e to make 'Reese'!",
  },
];

export const speechQuestions: SpeechQuestion[] = [
  {
    id: 1,
    text:
      "Reese and Oli had to sit by the crystal pool in Yellowstone. They wanted to bake some bread for their team of dragon friends. A big bat flew over their heads as they started their quest. 'Let's sail our boat across the lake!' said Oli. Reese flew his kite high above the geysers while Oli watched. Together, this brave team found all the magical crystals they needed for their adventure.",
    imageUrl: '🌋⚡🐉💎🌲',
    expectedWords: ['sit', 'bake', 'team', 'bat', 'boat', 'kite'],
    explanation: 'Amazing job reading! You found all the phonics words from our adventure - CVC, CVCe, and vowel team patterns!',
  },
];

export const longAQuestions: Question[] = [
  {
    id: 1,
    word: 'net',
    questionType: 'shortE',
    imageUrl: '🌊🕸️',
    imagePrompt: 'Reese throwing his bright RED fishing net (the net must be clearly red in color) into a geyser pool to catch magical crystals underwater, with Oli watching nearby in Yellowstone, photorealistic adventure scene',
    correctAnswer: 0,
    options: [
      'Reese throws his red net into the water',
      'Oli finds a neat cave behind the waterfall', 
      'The team needs to work together quickly'
    ],
    targetWord: 'net',
    followUpPrompt: 'Great job! Can you write a longer sentence about Reese and Oli\'s adventure? (Use words like: cat, dog, run, big, etc.)',
    explanation: 'Perfect! You picked the right sentence about Reese throwing his net!',
    incorrectFeedback: 'Look at what Reese is doing in the picture. Which sentence matches best?'
  },
  {
    id: 2,
    word: 'cape',
    questionType: 'shortE',
    imageUrl: '🧥✨',
    imagePrompt: 'Oli wearing his magical bright GLOWING cape (cape must be clearly glowing with magical light) while standing next to Reese near geysers in Yellowstone, with dragon friends in the background, photorealistic adventure scene',
    correctAnswer: 1,
    options: [
      'Oli puts on his red cap for the adventure',
      'Oli wears a magic cape that glows bright',
      'The team helps Oli climb up the rocks'
    ],
    targetWord: 'cape',
    followUpPrompt: 'Awesome! Can you write a longer sentence about Reese and Oli\'s adventure? (Use words like: cake, bike, home, cute, etc.)',
    explanation: 'Excellent! You picked the right sentence about Oli wearing his magic cape!',
    incorrectFeedback: 'Look at what Oli is wearing in the picture. Which sentence tells his story?'
  },
];

export const questions: Question[] = [
  {
    id: 1,
    word: 'bat',
    imageUrl: '🦇🌙',
    isSpelling: true,
    correctAnswer: 'bat',
    explanation: 'Great job! "Bat" has a short "a" sound!',
    aiHook: {
      targetWord: 'bat',
      intent: 'spelling',
      baseLine: 'A bat flies over the crystal cave.',
      questionLine: 'Listen and spell this word.',
      validationWord: 'bat',
      imagePrompt: 'A bat flying over Reese and Oli near the crystal caves at night in Yellowstone, moonlight shining on their adventure, photorealistic'
    }
  },
  {
    id: 2,
    word: 'bake',
    imageUrl: '🔥🍞',
    isSpelling: true,
    correctAnswer: 'bake',
    explanation: 'Awesome! "Bake" has a long "a" sound!',
    aiHook: {
      targetWord: 'bake',
      intent: 'spelling',
      baseLine: 'They bake bread over the geyser fire.',
      questionLine: 'Listen and spell this word.',
      validationWord: 'bake',
      imagePrompt: 'Reese and Oli baking bread over a warm geyser in their Yellowstone camp, with dragon friends watching curiously, photorealistic adventure scene'
    }
  },
  {
    id: 3,
    word: 'team',
    imageUrl: '👥✨',
    isSpelling: true,
    correctAnswer: 'team',
    explanation: 'Perfect! "Team" has a long "e" sound!',
    aiHook: {
      targetWord: 'team',
      intent: 'spelling',
      baseLine: 'Reese and Oli work as a team.',
      questionLine: 'Listen and spell this word.',
      validationWord: 'team',
      imagePrompt: 'Reese and Oli working together as a team gathering magical crystals near geysers, with their dragon allies helping them, photorealistic Yellowstone adventure'
    }
  },
  {
    id: 4,
    word: 'sit',
    imageUrl: '🪑💎',
    isSpelling: true,
    correctAnswer: 'sit',
    explanation: 'Great! "Sit" has a short "i" sound!',
    aiHook: {
      targetWord: 'sit',
      intent: 'spelling',
      baseLine: 'Reese sits by the crystal pool.',
      questionLine: 'Listen and spell this word.',
      validationWord: 'sit',
      imagePrompt: 'Reese sitting peacefully by a crystal pool in Yellowstone while Oli and dragon friends rest nearby after their adventure, photorealistic scene'
    }
  },
  {
    id: 5,
    word: 'kite',
    imageUrl: '🪁💨',
    isSpelling: true,
    correctAnswer: 'kite',
    explanation: 'Super! "Kite" has a long "i" sound!',
    aiHook: {
      targetWord: 'kite',
      intent: 'spelling',
      baseLine: 'Oli flies a kite over the geysers.',
      questionLine: 'Listen and spell this word.',
      validationWord: 'kite',
      imagePrompt: 'Oli flying a magical colorful kite high above Yellowstone geysers while Reese and dragon friends watch from below, windy adventure day, photorealistic'
    }
  },
  {
    id: 6,
    word: 'boat',
    imageUrl: '⛵🌊',
    isSpelling: true,
    correctAnswer: 'boat',
    explanation: 'Awesome! "Boat" has a long "o" sound!',
    aiHook: {
      targetWord: 'boat',
      intent: 'spelling',
      baseLine: 'They sail a boat on the crystal lake.',
      questionLine: 'Listen and spell this word.',
      validationWord: 'boat',
      imagePrompt: 'Reese and Oli sailing a magical wooden boat across a crystal-clear lake in Yellowstone, with friendly dragons flying overhead, photorealistic adventure'
    }
  },

];

export const options: string[] = ['CVC (short vowel)', 'CVCe (long vowel)', 'Vowel Team (long vowel)'];