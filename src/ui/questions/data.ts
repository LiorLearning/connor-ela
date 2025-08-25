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
    imagePrompt: 'Reese throwing a bright red fishing net into a crystal-clear geyser pool to catch sparkling magical gems underwater in Yellowstone, photorealistic adventure scene',
    correctAnswer: 0,
    options: [
      'The red net (CVC - short vowel)',
      'The neat cave (CVCe - long vowel)', 
      'The team needs (vowel team - long vowel)'
    ],
    targetWord: 'net',
    followUpPrompt: 'Awesome! Now write a sentence using another CVC word (short vowel)!',
    explanation: 'Perfect! "Net" follows the CVC pattern (consonant-vowel-consonant) which makes the "e" short!',
    incorrectFeedback: 'Look for the CVC pattern! Net = n-e-t (consonant-vowel-consonant) = short vowel sound.'
  },
  {
    id: 2,
    word: 'cape',
    questionType: 'shortE',
    imageUrl: '🧥✨',
    imagePrompt: 'Oli wearing a magical red cape that glows with crystal energy, standing proudly next to a geyser in Yellowstone, photorealistic adventure scene',
    correctAnswer: 1,
    options: [
      'Oli wears a red cap (CVC - short vowel)',
      'Oli wears a magic cape (CVCe - long vowel)',
      'The team helps Oli (vowel team - long vowel)'
    ],
    targetWord: 'cape',
    followUpPrompt: 'Excellent! Now write a sentence using another CVCe word (long vowel)!',
    explanation: 'Yes! "Cape" follows the CVCe pattern (consonant-vowel-consonant-e) which makes the "a" long!',
    incorrectFeedback: 'Look for the CVCe pattern! Cape = c-a-p-e (the silent e makes the a say its name).'
  },
];

export const questions: Question[] = [
  {
    id: 1,
    word: 'bat',
    imageUrl: '🦇🌙',
    isSpelling: true,
    correctAnswer: 'bat',
    explanation: 'Perfect! "Bat" follows the CVC pattern (b-a-t) which makes the "a" short!',
    aiHook: {
      targetWord: 'bat',
      intent: 'spelling',
      baseLine: 'A bat flies over the crystal cave.',
      questionLine: 'Listen and spell this CVC word with a short vowel sound.',
      validationWord: 'bat',
      imagePrompt: 'A BAT flying over crystal caves at night in Yellowstone, moonlight illuminating the scene.'
    }
  },
  {
    id: 2,
    word: 'bake',
    imageUrl: '🔥🍞',
    isSpelling: true,
    correctAnswer: 'bake',
    explanation: 'Great job! "Bake" follows the CVCe pattern (b-a-k-e) - the silent e makes the "a" long!',
    aiHook: {
      targetWord: 'bake',
      intent: 'spelling',
      baseLine: 'They bake bread over the geyser fire.',
      questionLine: 'Listen and spell this CVCe word with a long vowel sound.',
      validationWord: 'bake',
      imagePrompt: 'Reese and Oli BAKING bread over glowing geyser heat in Yellowstone wilderness.'
    }
  },
  {
    id: 3,
    word: 'team',
    imageUrl: '👥✨',
    isSpelling: true,
    correctAnswer: 'team',
    explanation: 'Awesome! "Team" has the vowel team "ea" which makes a long "e" sound!',
    aiHook: {
      targetWord: 'team',
      intent: 'spelling',
      baseLine: 'Reese and Oli work as a team.',
      questionLine: 'Listen and spell this word with a vowel team that makes a long sound.',
      validationWord: 'team',
      imagePrompt: 'Reese and Oli working together as a TEAM, gathering crystals near geysers.'
    }
  },
  {
    id: 4,
    word: 'sit',
    imageUrl: '🪑💎',
    isSpelling: true,
    correctAnswer: 'sit',
    explanation: 'Excellent! "Sit" follows the CVC pattern (s-i-t) which makes the "i" short!',
    aiHook: {
      targetWord: 'sit',
      intent: 'spelling',
      baseLine: 'Reese sits by the crystal pool.',
      questionLine: 'Listen and spell this CVC word with a short vowel sound.',
      validationWord: 'sit',
      imagePrompt: 'Reese SITTING peacefully beside a sparkling crystal pool in Yellowstone.'
    }
  },
  {
    id: 5,
    word: 'kite',
    imageUrl: '🪁💨',
    isSpelling: true,
    correctAnswer: 'kite',
    explanation: 'Perfect! "Kite" follows the CVCe pattern (k-i-t-e) - the silent e makes the "i" long!',
    aiHook: {
      targetWord: 'kite',
      intent: 'spelling',
      baseLine: 'Oli flies a kite over the geysers.',
      questionLine: 'Listen and spell this CVCe word with a long vowel sound.',
      validationWord: 'kite',
      imagePrompt: 'Oli flying a colorful KITE high above Yellowstone geysers on a windy day.'
    }
  },
  {
    id: 6,
    word: 'boat',
    imageUrl: '⛵🌊',
    isSpelling: true,
    correctAnswer: 'boat',
    explanation: 'Amazing! "Boat" has the vowel team "oa" which makes a long "o" sound!',
    aiHook: {
      targetWord: 'boat',
      intent: 'spelling',
      baseLine: 'They sail a boat on the crystal lake.',
      questionLine: 'Listen and spell this word with a vowel team that makes a long sound.',
      validationWord: 'boat',
      imagePrompt: 'Reese and Oli sailing a magical BOAT across a crystal-clear lake near geysers.'
    }
  },
  {
    id: 7,
    word: 'cut',
    imageUrl: '✂️🌿',
    correctAnswer: 0, // CVC option (index 0 in pattern sorting)
    explanation: 'Yes! "Cut" follows the CVC pattern (c-u-t) which makes the "u" short!',
    aiHook: {
      targetWord: 'cut',
      intent: 'sound',
      baseLine: 'Oli cuts some plants for the dragons.',
      questionLine: 'Which pattern does this word follow? Listen: cut.',
      validationWord: 'cut',
      imagePrompt: 'Oli carefully CUTTING green plants to feed friendly dragons.'
    }
  },
  {
    id: 8,
    word: 'cute',
    imageUrl: '🐉😍',
    correctAnswer: 1, // CVCe option (index 1 in pattern sorting)
    explanation: 'Great! "Cute" follows the CVCe pattern (c-u-t-e) - the silent e makes the "u" long!',
    aiHook: {
      targetWord: 'cute',
      intent: 'sound',
      baseLine: 'The baby dragons are very cute.',
      questionLine: 'Which pattern does this word follow? Listen: cute.',
      validationWord: 'cute',
      imagePrompt: 'Adorable baby dragons being very CUTE, playing around crystal pools.'
    }
  },
];

export const options: string[] = ['CVC (short vowel)', 'CVCe (long vowel)', 'Vowel Team (long vowel)'];