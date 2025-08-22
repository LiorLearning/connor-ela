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
    word: 'path',
    imageUrl: '🛤️✨',
    isSpelling: true,
    correctAnswer: 'path',
    explanation: 'Great job! The letters TH make the sound at the end of path! Let\'s follow the dragon trail!',
    aiHook: {
      targetWord: 'path',
      intent: 'spelling',
      baseLine: 'Reese and Oli follow the dragon trail to find shiny rocks!',
      questionLine: 'Listen and spell the word for the trail the dragons made.',
      validationWord: 'path',
      imagePrompt: 'Dragon footprints and a winding PATH through Yellowstone leading to crystal pools.'
    }
  },
  {
    id: 2,
    word: 'splash',
    imageUrl: '🌋💦',
    isSpelling: true,
    correctAnswer: 'splash',
    explanation: 'Awesome! The letters SH make the sound at the end of splash! The geyser is so fun!',
    aiHook: {
      targetWord: 'splash',
      intent: 'spelling',
      baseLine: 'The hot water makes a big splash when it goes WHOOSH!',
      questionLine: 'Listen and spell the word for what the geyser water does.',
      validationWord: 'splash',
      imagePrompt: 'Geyser erupting with water SPLASHING everywhere in Yellowstone.'
    }
  },
];

export const questions: Question[] = [
  {
    id: 1,
    word: 'catch',
    imageUrl: '🤲💎',
    isSpelling: true,
    correctAnswer: 'catch',
    explanation: 'Perfect! The letters CH make the sound at the end of catch! Reese caught the shiny rocks!',
    aiHook: {
      targetWord: 'catch',
      intent: 'spelling',
      baseLine: 'Can you catch the falling shiny rocks from the dragon\'s cave?',
      questionLine: 'Listen and spell the word for grabbing something that falls.',
      validationWord: 'catch',
      imagePrompt: 'Reese with hands out, trying to CATCH sparkling crystals falling from dragon cave.'
    }
  },
  {
    id: 2,
    word: 'whisper',
    imageUrl: '🤫🐉',
    correctAnswer: 3, // wh option (index 3 in ['ch', 'th', 'sh', 'wh', 'ph'])
    explanation: 'Yay! WH makes the sound at the start of whisper! The dragons love secrets!',
    aiHook: {
      targetWord: 'whisper',
      intent: 'sound',
      baseLine: 'Oli likes to whisper secrets to the friendly dragons!',
      questionLine: 'Listen and pick the letters that make the sound at the start of ___isper.',
      validationWord: 'whisper',
      imagePrompt: 'Oli leaning close to fluffy dragon\'s ear, WHISPERING a secret.'
    }
  },
  {
    id: 3,
    word: 'rush',
    imageUrl: '🏃🐉',
    correctAnswer: 2, // sh option (index 2 in ['ch', 'th', 'sh', 'wh', 'ph'])
    explanation: 'Great job! SH makes the sound at the end of rush! The dragons are fast helpers!',
    aiHook: {
      targetWord: 'rush',
      intent: 'sound',
      baseLine: 'The fluffy dragons rush to help when Reese calls them!',
      questionLine: 'Listen and pick the letters that make the sound at the end of ru___.',
      validationWord: 'rush',
      imagePrompt: 'Cute dragons hurrying and RUSHING toward Reese with big smiles.'
    }
  },
  {
    id: 4,
    word: 'touch',
    imageUrl: '✋🥚',
    isSpelling: true,
    correctAnswer: 'touch',
    explanation: 'Awesome! The letters CH make the sound at the end of touch! The magic egg feels warm!',
    aiHook: {
      targetWord: 'touch',
      intent: 'spelling',
      baseLine: 'The magic egg is safe to touch when it glows blue!',
      questionLine: 'Listen and spell the word for using your hands to feel something.',
      validationWord: 'touch',
      imagePrompt: 'Glowing Geyser Egg with Reese\'s hand gently TOUCHING it.'
    }
  },
];

export const options: string[] = ['ch', 'th', 'sh', 'wh', 'ph'];