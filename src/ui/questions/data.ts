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
      "Wow! Reese and Oli found a big magic egg in fun Yellowstone! Cute fluffy dragons with wings play near the hot water that goes whoosh. The ground shakes under Reese's feet as they walk to the shiny pools. A dragon wags its big tail, ready to help, while another comes out of the misty trees. 'We need to get those shiny rocks!' says Reese. Oh no! Tiny sneaky people creep toward the pretty gems...",
    imageUrl: '🌋⚡🐉💎🌲',
    expectedWords: ['red', 'net', 'get'],
    explanation: 'Great job reading! You found all the words with silent e in our fun Yellowstone story.',
  },
];

export const longAQuestions: Question[] = [
  {
    id: 1,
    word: 'net',
    questionType: 'shortE',
    imageUrl: '🌊🕸️',
    imagePrompt: 'A red fishing net being used to catch something in water, simple and clear, photorealistic',
    correctAnswer: 0,
    options: [
      'The red net (CVC - short vowel)',
      'The neat cave (CVCe - long vowel)', 
      'The team needs (vowel team - long vowel)'
    ],
    targetWord: 'net',
    followUpPrompt: 'Great job! Can you write a longer sentence using another CVC word with a short vowel sound? (Try words like: cat, dog, run, big, etc.)',
    explanation: 'Perfect! "Net" follows the CVC pattern (consonant-vowel-consonant) which makes the "e" short!',
    incorrectFeedback: 'Look for the CVC pattern! CVC words have short vowel sounds.'
  },
  {
    id: 2,
    word: 'cape',
    questionType: 'shortE',
    imageUrl: '🧥✨',
    imagePrompt: 'A person wearing a bright red cape, simple and clear, photorealistic',
    correctAnswer: 1,
    options: [
      'Oli wears a red cap (CVC - short vowel)',
      'Oli wears a magic cape (CVCe - long vowel)',
      'The team helps Oli (vowel team - long vowel)'
    ],
    targetWord: 'cape',
    followUpPrompt: 'Awesome! Can you write a longer sentence using another CVCe word with a long vowel sound? (Try words like: cake, bike, home, cute, etc.)',
    explanation: 'Excellent! "Cape" follows the CVCe pattern (consonant-vowel-consonant-e) which makes the "a" long!',
    incorrectFeedback: 'Look for the CVCe pattern! The silent "e" makes the vowel say its name.'
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
      imagePrompt: 'A bat flying at night, simple and clear, photorealistic'
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
      imagePrompt: 'Someone baking bread in an oven, simple and clear, photorealistic'
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
      imagePrompt: 'Two friends working together as a team, simple and clear, photorealistic'
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
      imagePrompt: 'A person sitting on a chair, simple and clear, photorealistic'
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
      imagePrompt: 'A colorful kite flying in the sky, simple and clear, photorealistic'
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
      imagePrompt: 'A boat sailing on water, simple and clear, photorealistic'
    }
  },
  {
    id: 7,
    word: 'cut',
    imageUrl: '✂️🌿',
    correctAnswer: 0, // CVC option (index 0 in pattern sorting)
    explanation: 'Good job! "Cut" has a short "u" sound!',
    aiHook: {
      targetWord: 'cut',
      intent: 'sound',
      baseLine: 'Oli cuts some plants for the dragons.',
      questionLine: 'What kind of word is this? Listen: cut.',
      validationWord: 'cut',
      imagePrompt: 'Scissors cutting paper, simple and clear, photorealistic'
    }
  },
  {
    id: 8,
    word: 'cute',
    imageUrl: '🐉😍',
    correctAnswer: 1, // CVCe option (index 1 in pattern sorting)
    explanation: 'Perfect! "Cute" has a long "u" sound!',
    aiHook: {
      targetWord: 'cute',
      intent: 'sound',
      baseLine: 'The baby dragons are very cute.',
      questionLine: 'What kind of word is this? Listen: cute.',
      validationWord: 'cute',
      imagePrompt: 'A cute puppy or kitten, simple and clear, photorealistic'
    }
  },
];

export const options: string[] = ['CVC (short vowel)', 'CVCe (long vowel)', 'Vowel Team (long vowel)'];