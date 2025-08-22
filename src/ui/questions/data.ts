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
    imageUrl: '🛤️🐉',
    correctAnswer: 1, // th option
    explanation: 'Great job! TH makes the sound in path! Let\'s follow the dragon trail!',
    aiHook: {
      targetWord: 'path',
      intent: 'sound',
      baseLine: 'Reese and Oli follow the dragon trail to find shiny rocks!',
      questionLine: 'Listen and pick the letters that make the sound at the end of pa___.',
      validationWord: 'path',
      imagePrompt: 'Dragon footprints and a winding PATH through Yellowstone leading to crystal pools.'
    }
  },
  {
    id: 2,
    word: 'splash',
    imageUrl: '🌋💦',
    correctAnswer: 2, // sh option
    explanation: 'Awesome! SH makes the sound in splash! The geyser is so fun!',
    aiHook: {
      targetWord: 'splash',
      intent: 'sound',
      baseLine: 'The hot water makes a big splash when it goes WHOOSH!',
      questionLine: 'Listen and pick the letters that make the sound at the end of spla___.',
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
    correctAnswer: 0, // ch option
    explanation: 'Perfect! CH makes the sound in catch! Reese caught the shiny rocks!',
    aiHook: {
      targetWord: 'catch',
      intent: 'sound',
      baseLine: 'Can you catch the falling shiny rocks from the dragon\'s cave?',
      questionLine: 'Listen and pick the letters that make the sound at the end of ca___.',
      validationWord: 'catch',
      imagePrompt: 'Reese with hands out, trying to CATCH sparkling crystals falling from dragon cave.'
    }
  },
  {
    id: 2,
    word: 'whisper',
    imageUrl: '🤫🐉',
    correctAnswer: 3, // wh option
    explanation: 'Yay! WH makes the sound in whisper! The dragons love secrets!',
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
    correctAnswer: 2, // sh option
    explanation: 'Great job! SH makes the sound in rush! The dragons are fast helpers!',
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
    correctAnswer: 0, // ch option
    explanation: 'Awesome! CH makes the sound in touch! The magic egg feels warm!',
    aiHook: {
      targetWord: 'touch',
      intent: 'sound',
      baseLine: 'The magic egg is safe to touch when it glows blue!',
      questionLine: 'Listen and pick the letters that make the sound at the end of tou___.',
      validationWord: 'touch',
      imagePrompt: 'Glowing Geyser Egg with Reese\'s hand gently TOUCHING it.'
    }
  },
  {
    id: 5,
    word: 'with',
    imageUrl: '🤝🐉',
    correctAnswer: 1, // th option
    explanation: 'Perfect! TH makes the sound in with! Friends have more fun together!',
    aiHook: {
      targetWord: 'with',
      intent: 'sound',
      baseLine: 'Reese loves to play with the fluffy dragon friends!',
      questionLine: 'Listen and pick the letters that make the sound at the end of wi___.',
      validationWord: 'with',
      imagePrompt: 'Reese playing and laughing WITH cute dragons in a meadow.'
    }
  },
  {
    id: 6,
    word: 'white',
    imageUrl: '☁️🌋',
    correctAnswer: 3, // wh option
    explanation: 'Yay! WH makes the sound in white! The steam looks like fluffy clouds!',
    aiHook: {
      targetWord: 'white',
      intent: 'sound',
      baseLine: 'The steam from the hot water is white and fluffy like clouds!',
      questionLine: 'Listen and pick the letters that make the sound at the start of ___ite.',
      validationWord: 'white',
      imagePrompt: 'WHITE steam rising from geysers, looking like puffy white clouds.'
    }
  },
  {
    id: 7,
    word: 'wish',
    imageUrl: '⭐💎',
    correctAnswer: 2, // sh option
    explanation: 'Great job! SH makes the sound in wish! What did Oli wish for?',
    aiHook: {
      targetWord: 'wish',
      intent: 'sound',
      baseLine: 'Make a wish on the sparkly crystal and it might come true!',
      questionLine: 'Listen and pick the letters that make the sound at the end of wi___.',
      validationWord: 'wish',
      imagePrompt: 'Oli holding glowing crystal up to starry sky, making a WISH.'
    }
  },
  {
    id: 8,
    word: 'watch',
    imageUrl: '👀👺',
    correctAnswer: 0, // ch option
    explanation: 'Perfect! CH makes the sound in watch! We caught the sneaky guys!',
    aiHook: {
      targetWord: 'watch',
      intent: 'sound',
      baseLine: 'Let\'s watch the tiny sneaky guys try to steal our shiny rocks!',
      questionLine: 'Listen and pick the letters that make the sound at the end of wa___.',
      validationWord: 'watch',
      imagePrompt: 'Reese and Oli hiding behind rocks, WATCHING small figures creeping toward crystals.'
    }
  },
];

export const options: string[] = ['ch', 'th', 'sh', 'wh', 'ph'];
