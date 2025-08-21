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
    word: 'rain',
    imageUrl: '🌧️✨',
    isSpelling: true,
    correctAnswer: 'rain',
    explanation: 'Pretty "rain" falls in Yellowstone during Reese\'s fun trip - the long a sound with ai!',
    aiHook: {
      targetWord: 'rain',
      intent: 'spelling',
      baseLine: 'Pretty water drops fall from the sky as Reese and Oli walk to the shiny pools.',
      questionLine: 'Listen and spell the word for water that falls from the sky.',
      validationWord: 'rain',
      imagePrompt: 'Pretty RAIN falling in Yellowstone with green grass, Reese and Oli walking toward shiny pools; shows rain drops falling from sky.'
    }
  },
  {
    id: 2,
    word: 'eight',
    imageUrl: '8️⃣🤖',
    isSpelling: true,
    correctAnswer: 'eight',
    explanation: '"Eight" fluffy dragons watch over the shiny pools - the long a sound with eigh!',
    aiHook: {
      targetWord: 'eight',
      intent: 'spelling',
      baseLine: 'Fluffy dragons with wings stand around the shiny pools to keep them safe.',
      questionLine: 'Listen and spell the number word for how many dragons there are.',
      validationWord: 'eight',
      imagePrompt: 'EIGHT cute fluffy dragons with wings standing around shiny pools, clearly showing 8 dragons keeping the area safe.'
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
    explanation: 'The fluffy dragons "train" together to keep the shiny rocks safe - the long a sound with ai!',
    aiHook: {
      targetWord: 'train',
      intent: 'spelling',
      baseLine: 'A line of fluffy dragons practice flying together through the misty trees toward the shiny pools.',
      questionLine: 'Listen and spell the word for practicing together.',
      validationWord: 'train',
      imagePrompt: 'Cute dragons in TRAIN line flying through misty trees with green grass, going toward shiny pools; shows dragons practicing flying together.'
    }
  },
  {
    id: 2,
    word: 'weigh',
    imageUrl: '⚖️✨',
    isSpelling: true,
    correctAnswer: 'weigh',
    explanation: 'The shiny rocks "weigh" too much for Oli to carry alone - the long a sound with eigh!',
    aiHook: {
      targetWord: 'weigh',
      intent: 'spelling',
      baseLine: 'Oli tries to pick up the heavy shiny rocks from the pretty pools.',
      questionLine: 'Listen and spell the word for how heavy something is.',
      validationWord: 'weigh',
      imagePrompt: 'Oli trying to lift heavy shiny rocks, with a scale nearby showing how heavy they are.'
    }
  },
  {
    id: 3,
    word: 'break',
    imageUrl: '💥⚡',
    isSpelling: true,
    correctAnswer: 'break',
    explanation: 'Reese must "break" through the shiny wall to reach the magic egg - the long a sound with ea!',
    aiHook: {
      targetWord: 'break',
      intent: 'spelling',
      baseLine: 'Reese runs fast to break the shiny wall that is keeping the magic egg safe.',
      questionLine: 'Listen and spell the word for smashing through something.',
      validationWord: 'break',
      imagePrompt: 'Reese running toward a shiny wall with sparkles flying as they try to BREAK through it, magic egg behind the wall.'
    }
  },
  {
    id: 4,
    word: 'great',
    imageUrl: '⭐🏆',
    isSpelling: true,
    correctAnswer: 'great',
    explanation: '"Great" job finding all the shiny rocks with your friend - the long a sound with ea!',
    aiHook: {
      targetWord: 'great',
      intent: 'spelling',
      baseLine: 'Reese and Oli are happy after finding all the shiny rocks and saving Yellowstone.',
      questionLine: 'Listen and spell the word for really good or wonderful.',
      validationWord: 'great',
      imagePrompt: 'Reese and Oli happy and celebrating with shiny rocks behind them, stars and trophy showing GREAT job.'
    }
  },
];

export const options: string[] = ['th', 'ch', 'fr'];


