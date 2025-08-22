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
      baseLine: 'Reese follows the dragon path.',
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
      baseLine: 'The geyser makes a big splash.',
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
      baseLine: 'Reese tries to catch the falling crystals.',
      questionLine: 'Listen and spell the word for grabbing something that falls.',
      validationWord: 'catch',
      imagePrompt: 'Reese with hands out, trying to CATCH sparkling crystals falling from dragon cave.'
    }
  },
  {
    id: 2,
    word: 'wish',
    imageUrl: '⭐💎',
    correctAnswer: 2, // sh option (index 2 in ['ch', 'th', 'sh', 'wh', 'ph'])
    explanation: 'Great job! SH makes the sound at the end of wish! What did Oli wish for?',
    aiHook: {
      targetWord: 'wish',
      intent: 'sound',
      baseLine: 'Oli makes a wish on the crystal.',
      questionLine: 'Listen and pick the letters that make the sound at the end of wi___.',
      validationWord: 'wish',
      imagePrompt: 'Oli holding glowing crystal up to starry sky, making a WISH.'
    }
  },
  {
    id: 3,
    word: 'white',
    imageUrl: '☁️🌋',
    correctAnswer: 3, // wh option (index 3 in ['ch', 'th', 'sh', 'wh', 'ph'])
    explanation: 'Yay! WH makes the sound at the start of white! The steam looks like fluffy clouds!',
    aiHook: {
      targetWord: 'white',
      intent: 'sound',
      baseLine: 'White steam rises from the geyser.',
      questionLine: 'Listen and pick the letters that make the sound at the start of ___ite.',
      validationWord: 'white',
      imagePrompt: 'WHITE steam rising from geysers, looking like puffy white clouds.'
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
      baseLine: 'Reese gently touches the magic egg.',
      questionLine: 'Listen and spell the word for using your hands to feel something.',
      validationWord: 'touch',
      imagePrompt: 'Glowing Geyser Egg with Reese\'s hand gently TOUCHING it.'
    }
  },
  {
    id: 5,
    word: 'with',
    imageUrl: '🤝🐉',
    correctAnswer: 1, // th option (index 1 in ['ch', 'th', 'sh', 'wh', 'ph'])
    explanation: 'Perfect! TH makes the sound at the end of with! Friends have more fun together!',
    aiHook: {
      targetWord: 'with',
      intent: 'sound',
      baseLine: 'Reese plays with the dragons.',
      questionLine: 'Listen and pick the letters that make the sound at the end of wi___.',
      validationWord: 'with',
      imagePrompt: 'Reese playing and laughing WITH cute dragons in a meadow.'
    }
  },
  {
    id: 6,
    word: 'watch',
    imageUrl: '👀👺',
    correctAnswer: 0, // ch option (index 0 in ['ch', 'th', 'sh', 'wh', 'ph'])
    explanation: 'Perfect! CH makes the sound at the end of watch! We caught the sneaky guys!',
    aiHook: {
      targetWord: 'watch',
      intent: 'sound',
      baseLine: 'Oli and Reese watch the sneaky guys.',
      questionLine: 'Listen and pick the letters that make the sound at the end of wa___.',
      validationWord: 'watch',
      imagePrompt: 'Reese and Oli hiding behind rocks, WATCHING small figures creeping toward crystals.'
    }
  },
  {
    id: 7,
    word: 'whisper',
    imageUrl: '🤫🐉',
    correctAnswer: 3, // wh option (index 3 in ['ch', 'th', 'sh', 'wh', 'ph'])
    explanation: 'Yay! WH makes the sound at the start of whisper! The dragons love secrets!',
    aiHook: {
      targetWord: 'whisper',
      intent: 'sound',
      baseLine: 'Oli whispers secrets to the dragon.',
      questionLine: 'Listen and pick the letters that make the sound at the start of ___isper.',
      validationWord: 'whisper',
      imagePrompt: 'Oli leaning close to fluffy dragon\'s ear, WHISPERING a secret.'
    }
  },
  {
    id: 8,
    word: 'rush',
    imageUrl: '🏃🐉',
    correctAnswer: 2, // sh option (index 2 in ['ch', 'th', 'sh', 'wh', 'ph'])
    explanation: 'Great job! SH makes the sound at the end of rush! The dragons are fast helpers!',
    aiHook: {
      targetWord: 'rush',
      intent: 'sound',
      baseLine: 'The dragons rush to help Reese.',
      questionLine: 'Listen and pick the letters that make the sound at the end of ru___.',
      validationWord: 'rush',
      imagePrompt: 'Cute dragons hurrying and RUSHING toward Reese with big smiles.'
    }
  },
];

export const options: string[] = ['ch', 'th', 'sh', 'wh', 'ph'];