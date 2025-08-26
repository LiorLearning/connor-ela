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
      "Connor and his alien friends wanted to check the thick walls of Ronark's robot fortress. They whispered quietly as they approached the ship. The brave team searched through the shadows near the brown grass. When they reached the fortress, Connor said 'Shh!' as they heard a phone ringing inside the thick metal walls.",
    imageUrl: '🚀⚡🤖💎🌍',
    expectedWords: ['check', 'thick', 'whispered', 'ship', 'through', 'shh', 'phone'],
    explanation: 'Amazing job reading! You found all the consonant digraph words from our adventure - ch, th, sh, wh, and ph sounds!',
  },
];

export const consonantDigraphQuestions: Question[] = [
  {
    id: 1,
    word: 'catch',
    questionType: 'digraph',
    imageUrl: '🎯⚡',
    imagePrompt: 'Connor (young adventurer in futuristic gear) actively trying to CATCH a small glowing alien creature that is escaping, with Skeletron (floating skeleton friend) watching nearby on Planet Austin with brown grass and green dirt, dynamic action scene showing Connor reaching out to catch the creature, photorealistic sci-fi adventure',
    correctAnswer: 0, // "ch" is at index 0 in ['ch', 'th', 'sh', 'wh', 'ph']
    options: ['ch', 'th', 'sh', 'wh', 'ph'],
    targetWord: 'catch',
    followUpPrompt: 'Great job! You found "ch" at the END of "catch". Can you think of other words ending in "ch"?',
    explanation: 'Perfect! You heard the "ch" sound at the end of "catch"!',
    incorrectFeedback: 'Listen to the whole word "catch". What sound do you hear at the end?'
  },
  {
    id: 2,
    word: 'math',
    questionType: 'digraph',
    imageUrl: '🔢📊',
    imagePrompt: 'Connor (young adventurer in futuristic gear) and Skeletron (floating skeleton friend) studying alien MATH equations and geometric formulas floating as holograms in the air on Planet Austin, with brown grass and green dirt landscape, Connor pointing at mathematical symbols and calculations, photorealistic sci-fi educational scene',
    correctAnswer: 1, // "th" is at index 1 in ['ch', 'th', 'sh', 'wh', 'ph']
    options: ['ch', 'th', 'sh', 'wh', 'ph'],
    targetWord: 'math',
    followUpPrompt: 'Excellent! You found "th" at the END of "math". Can you think of other words ending in "th"?',
    explanation: 'Excellent! You heard the "th" sound at the end of "math"!',
    incorrectFeedback: 'Listen to the whole word "math". What sound do you hear at the end?'
  },
  {
    id: 3,
    word: 'fish',
    questionType: 'digraph',
    imageUrl: '🐠⚡',
    imagePrompt: 'Connor (young adventurer in futuristic gear) and Skeletron (floating skeleton friend) discovering beautiful alien FISH swimming in a crystal clear pool on Planet Austin, with brown grass and green dirt around the water, colorful bioluminescent fish with unique alien features, Connor kneeling by the water edge observing the fish, photorealistic sci-fi nature scene',
    correctAnswer: 2, // "sh" is at index 2 in ['ch', 'th', 'sh', 'wh', 'ph']
    options: ['ch', 'th', 'sh', 'wh', 'ph'],
    targetWord: 'fish',
    followUpPrompt: 'Amazing! You found "sh" at the END of "fish". Can you think of other words ending in "sh"?',
    explanation: 'Amazing! You heard the "sh" sound at the end of "fish"!',
    incorrectFeedback: 'Listen to the whole word "fish". What sound do you hear at the end?'
  }
];

export const questions: Question[] = [
  {
    id: 1,
    word: 'check',
    imageUrl: '✅🔍',
    isSpelling: true,
    correctAnswer: 'check',
    explanation: 'Great job! "Check" has the "ch" consonant digraph!',
    aiHook: {
      targetWord: 'check',
      intent: 'spelling',
      baseLine: 'Connor needs to check the robot fortress.',
      questionLine: 'Listen and spell this word with the "ch" sound.',
      validationWord: 'check',
      imagePrompt: 'Connor (young adventurer with futuristic gear) carefully CHECK-ing and examining thick robot fortress walls with Skeletron (floating skeleton friend) beside him on Planet Austin with brown grass and green dirt, Connor using futuristic scanning device to check the walls, photorealistic sci-fi adventure scene'
    }
  },
  {
    id: 2,
    word: 'whisper',
    imageUrl: '🤫👂',
    isSpelling: true,
    correctAnswer: 'whisper',
    explanation: 'Awesome! "Whisper" has the "wh" consonant digraph!',
    aiHook: {
      targetWord: 'whisper',
      intent: 'spelling',
      baseLine: 'They whisper quietly near the robot guards.',
      questionLine: 'Listen and spell this word with the "wh" sound.',
      validationWord: 'whisper',
      imagePrompt: 'Connor (young adventurer with futuristic gear) and Skeletron (floating skeleton friend) WHISPER-ing quietly to each other while hiding behind alien rocks near robot fortress on Planet Austin with brown grass and green dirt, Connor with finger to lips in whispering gesture, stealth mission scene, photorealistic sci-fi adventure'
    }
  },
  {
    id: 3,
    word: 'phone',
    imageUrl: '📱⚡',
    isSpelling: true,
    correctAnswer: 'phone',
    explanation: 'Perfect! "Phone" has the "ph" consonant digraph!',
    aiHook: {
      targetWord: 'phone',
      intent: 'spelling',
      baseLine: 'A phone rings inside the robot fortress.',
      questionLine: 'Listen and spell this word with the "ph" sound.',
      validationWord: 'phone',
      imagePrompt: 'Connor (young adventurer with futuristic gear) and Skeletron (floating skeleton friend) discovering a glowing alien PHONE device ringing inside robot fortress while they listen from outside on Planet Austin with brown grass and green dirt, futuristic communication device with holographic display, Connor pointing at the phone, photorealistic sci-fi adventure scene'
    }
  },


];

export const options: string[] = ['ch', 'th', 'sh', 'wh', 'ph'];