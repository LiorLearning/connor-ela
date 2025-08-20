import { BlendingQuestion, SpeechQuestion, Question } from './types';

export const blendingQuestions: BlendingQuestion[] = [
  {
    id: 1,
    word: 'Connor',
    imageUrl: '🚀⚡',
    phonemes: ['C', 'o', 'nn', 'or'],
    explanation: "Blend the sounds C-o-nn-or to make 'Connor'!",
  },
];

export const speechQuestions: SpeechQuestion[] = [
  {
    id: 1,
    text:
      "Epic! Connor and his team just spotted Ronark's lair on Planet Austin! Skeletron floats beside him while the Eye of Cthulhu scans for robot guards. The brown grass crunches under Connor's futuristic boots as they approach the fortress. Brain of Cthulhu stretches its red tentacles, ready for battle, while Eater of Worlds emerges from underground tunnels. 'We need to rescue that stolen person!' Connor declares bravely. Suddenly, robot guards with glowing green eyes march toward them...",
    imageUrl: '🤖⚡👽🌍🔬',
    expectedWords: ['red', 'net', 'get'],
    explanation: 'Fantastic reading! You captured all the exciting silent e words in the robot battle adventure.',
  },
];

export const longAQuestions: Question[] = [
  {
    id: 1,
    word: 'rain',
    imageUrl: '🌧️✨',
    isSpelling: true,
    correctAnswer: 'rain',
    explanation: 'Purple "rain" falls on Planet Austin during Connor\'s mission - the long a sound with ai!',
    aiHook: {
      targetWord: 'rain',
      intent: 'spelling',
      baseLine: 'Purple droplets fall from the alien sky as Connor and Skeletron approach the robot fortress.',
      questionLine: 'Listen and type the long a word for what falls from the sky.',
      validationWord: 'rain',
      imagePrompt: 'Purple RAIN falling on Planet Austin with brown grass, Connor and Skeletron walking toward the black fortress in the distance; clearly shows rain droplets falling from alien sky.'
    }
  },
  {
    id: 2,
    word: 'eight',
    imageUrl: '8️⃣🤖',
    isSpelling: true,
    correctAnswer: 'eight',
    explanation: '"Eight" robot guards block the entrance to the secret laboratory - the long a sound with eigh!',
    aiHook: {
      targetWord: 'eight',
      intent: 'spelling',
      baseLine: 'Robot guards with glowing green eyes stand in formation blocking the fortress entrance.',
      questionLine: 'Listen and type the long a word for how many guards there are.',
      validationWord: 'eight',
      imagePrompt: 'EIGHT robot guards with glowing green eyes standing in formation at the fortress entrance, clearly showing 8 robots blocking the doorway; composition highlights the number of guards.'
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
    explanation: 'The robot "train" carries captured prisoners to the fortress - the long a sound with ai!',
    aiHook: {
      targetWord: 'train',
      intent: 'spelling',
      baseLine: 'A mechanical transport vehicle carries prisoners through the brown grass toward the robot fortress.',
      questionLine: 'Listen and type the long a word for the prison transport.',
      validationWord: 'train',
      imagePrompt: 'Robot TRAIN with metallic cars carrying prisoners across Planet Austin with brown grass, heading toward the black fortress; clearly shows a futuristic mechanical train.'
    }
  },
  {
    id: 2,
    word: 'weigh',
    imageUrl: '⚖️✨',
    isSpelling: true,
    correctAnswer: 'weigh',
    explanation: 'The stolen treasure will "weigh" too much for Skeletron to carry - the long a sound with eigh!',
    aiHook: {
      targetWord: 'weigh',
      intent: 'spelling',
      baseLine: 'Skeletron tries to lift the heavy golden treasure chest from the robot fortress vault.',
      questionLine: 'Listen and type the long a word for how heavy something is.',
      validationWord: 'weigh',
      imagePrompt: 'Skeletron floating skeleton trying to lift a heavy golden treasure chest, showing the weight with glowing scales nearby; clearly depicts the concept of weight measurement.'
    }
  },
  {
    id: 3,
    word: 'break',
    imageUrl: '💥⚡',
    isSpelling: true,
    correctAnswer: 'break',
    explanation: 'Connor must "break" through the energy shield to rescue the prisoner - the long a sound with ea!',
    aiHook: {
      targetWord: 'break',
      intent: 'spelling',
      baseLine: 'Connor charges forward to shatter the glowing energy barrier protecting the prison cell.',
      questionLine: 'Listen and type the long a word for smashing through something.',
      validationWord: 'break',
      imagePrompt: 'Connor charging toward a glowing energy shield barrier with sparks flying as he tries to BREAK through it, prison cell visible behind; action shows breaking/shattering motion.'
    }
  },
  {
    id: 4,
    word: 'great',
    imageUrl: '⭐🏆',
    isSpelling: true,
    correctAnswer: 'great',
    explanation: '"Great" work destroying the robot army with your team - the long a sound with ea!',
    aiHook: {
      targetWord: 'great',
      intent: 'spelling',
      baseLine: 'Connor and Skeletron celebrate their victory after defeating all the robot guards.',
      questionLine: 'Listen and type the long a word for excellent or wonderful.',
      validationWord: 'great',
      imagePrompt: 'Connor and Skeletron celebrating victory with destroyed robots in background, stars and trophy visible showing GREAT success; composition emphasizes celebration and excellence.'
    }
  },
];

export const options: string[] = ['th', 'ch', 'fr'];


