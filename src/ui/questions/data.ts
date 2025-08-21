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
      "Epic! Reese and Oli just discovered the unstable Geyser Egg in magical Yellowstone! Buffalo-dragons with shaggy fur and wings graze near the steaming geysers. The misty ground trembles under Reese's boots as they approach the crystal pools. A buffalo-dragon stretches its giant tail, ready to help, while another emerges from the enchanted forest. 'We need to get those geyser crystals!' Reese declares bravely. Suddenly, tiny midgets with sneaky grins creep toward the sparkling gems...",
    imageUrl: '🌋⚡🐉💎🌲',
    expectedWords: ['red', 'net', 'get'],
    explanation: 'Fantastic reading! You captured all the exciting silent e words in the magical Yellowstone adventure.',
  },
];

export const longAQuestions: Question[] = [
  {
    id: 1,
    word: 'rain',
    imageUrl: '🌧️✨',
    isSpelling: true,
    correctAnswer: 'rain',
    explanation: 'Magical "rain" falls in Yellowstone during Reese\'s quest - the long a sound with ai!',
    aiHook: {
      targetWord: 'rain',
      intent: 'spelling',
      baseLine: 'Sparkling droplets fall from the misty sky as Reese and Oli approach the geyser crystal pools.',
      questionLine: 'Listen and type the long a word for what falls from the sky.',
      validationWord: 'rain',
      imagePrompt: 'Magical RAIN falling in Yellowstone with green fields, Reese and Oli walking toward the crystal pools in the distance; clearly shows rain droplets falling from misty sky.'
    }
  },
  {
    id: 2,
    word: 'eight',
    imageUrl: '8️⃣🤖',
    isSpelling: true,
    correctAnswer: 'eight',
    explanation: '"Eight" buffalo-dragons guard the crystal pools - the long a sound with eigh!',
    aiHook: {
      targetWord: 'eight',
      intent: 'spelling',
      baseLine: 'Buffalo-dragons with shaggy fur and wings stand in formation protecting the geyser crystal pools.',
      questionLine: 'Listen and type the long a word for how many dragons there are.',
      validationWord: 'eight',
      imagePrompt: 'EIGHT buffalo-dragons with fur and wings standing in formation around crystal pools, clearly showing 8 dragons protecting the area; composition highlights the number of guardians.'
    }
  },
];

export const questions: Question[] = [
  {
    id: 1,
    word: 'train',
    imageUrl: '🚂🤖',
    isSpelling: true,
    correctAnswer: 'train',
    explanation: 'The buffalo-dragons "train" together to protect the crystals - the long a sound with ai!',
    aiHook: {
      targetWord: 'train',
      intent: 'spelling',
      baseLine: 'A line of buffalo-dragons practice their flying formations through the misty forest toward the crystal pools.',
      questionLine: 'Listen and type the long a word for practicing together.',
      validationWord: 'train',
      imagePrompt: 'Buffalo-dragons in TRAIN formation flying through misty Yellowstone forest with green fields, heading toward crystal pools; clearly shows dragons practicing flight patterns.'
    }
  },
  {
    id: 2,
    word: 'weigh',
    imageUrl: '⚖️✨',
    isSpelling: true,
    correctAnswer: 'weigh',
    explanation: 'The geyser crystals "weigh" too much for Oli to carry alone - the long a sound with eigh!',
    aiHook: {
      targetWord: 'weigh',
      intent: 'spelling',
      baseLine: 'Oli tries to lift the heavy sparkling geyser crystals from the enchanted crystal pools.',
      questionLine: 'Listen and type the long a word for how heavy something is.',
      validationWord: 'weigh',
      imagePrompt: 'Oli trying to lift heavy sparkling geyser crystals, showing the weight with glowing scales nearby; clearly depicts the concept of weight measurement with magical crystals.'
    }
  },
  {
    id: 3,
    word: 'break',
    imageUrl: '💥⚡',
    isSpelling: true,
    correctAnswer: 'break',
    explanation: 'Reese must "break" through the crystal barrier to reach the Geyser Egg - the long a sound with ea!',
    aiHook: {
      targetWord: 'break',
      intent: 'spelling',
      baseLine: 'Reese charges forward to shatter the glowing crystal barrier protecting the unstable Geyser Egg.',
      questionLine: 'Listen and type the long a word for smashing through something.',
      validationWord: 'break',
      imagePrompt: 'Reese charging toward a glowing crystal barrier with magical sparks flying as they try to BREAK through it, Geyser Egg visible behind; action shows breaking/shattering motion.'
    }
  },
  {
    id: 4,
    word: 'great',
    imageUrl: '⭐🏆',
    isSpelling: true,
    correctAnswer: 'great',
    explanation: '"Great" work collecting all the geyser crystals with your team - the long a sound with ea!',
    aiHook: {
      targetWord: 'great',
      intent: 'spelling',
      baseLine: 'Reese and Oli celebrate their victory after collecting all the geyser crystals and saving Yellowstone.',
      questionLine: 'Listen and type the long a word for excellent or wonderful.',
      validationWord: 'great',
      imagePrompt: 'Reese and Oli celebrating victory with sparkling geyser crystals in background, stars and trophy visible showing GREAT success; composition emphasizes celebration and excellence.'
    }
  },
];

export const options: string[] = ['th', 'ch', 'fr'];


