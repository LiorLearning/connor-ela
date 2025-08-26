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
      "Reese and Oli wanted to bake some bread for their team of dragon friends in Yellowstone. A big bat flew over their heads as they started their magical quest. Together, this brave team searched for crystals near the geysers and hot springs. The bat guided them to a special cave where magical crystals sparkled in the darkness.",
    imageUrl: '🌋⚡🐉💎🌲',
    expectedWords: ['bake', 'team', 'bat'],
    explanation: 'Amazing job reading! You found all the phonics words from our adventure - CVC, CVCe, and vowel team patterns!',
  },
];

export const longAQuestions: Question[] = [
  {
    id: 1,
    word: 'net',
    questionType: 'shortE',
    imageUrl: '🌊🕸️',
    imagePrompt: 'Reese (10-year-old Caucasian boy with black hair, red cloak, green-brown armor) throwing his bright RED fishing net (the net must be clearly red in color) into a geyser pool to catch magical crystals underwater, with Oli (his companion) watching nearby in Yellowstone, photorealistic adventure scene',
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
    imagePrompt: 'Oli (Reese\'s companion) wearing his magical bright GLOWING cape (cape must be clearly glowing with magical light) while standing next to Reese (10-year-old Caucasian boy with black hair, red cloak, green-brown armor) near geysers in Yellowstone, with dragon friends in the background, photorealistic adventure scene',
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
      imagePrompt: 'A bat flying over Reese (10-year-old Caucasian boy with black hair, red cloak) and Oli (his companion) near the crystal caves at night in Yellowstone, moonlight shining on their adventure, photorealistic'
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
      imagePrompt: 'Reese (10-year-old Caucasian boy with black hair, red cloak) and Oli (his companion) baking bread over a warm geyser in their Yellowstone camp, with dragon friends watching curiously, photorealistic adventure scene'
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


];

export const options: string[] = ['CVC (short vowel)', 'CVCe (long vowel)', 'Vowel Team (long vowel)'];