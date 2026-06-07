const future = [
  {
    id: 19,
    title: "Present tenses for the future",
    category: "Tenses",
    section: "Future",
    key_rule:
      "Use present continuous for fixed future arrangements. Present simple for timetables.",
    examples: [
      "I'm meeting John tomorrow.",
      "The train leaves at 8.30.",
      "What are you doing tonight?",
    ],
    common_mistakes: [
      "The train is leaving at 8.30 (❌ for timetable)",
    ],
    study_cards: [
      {
        title: "Present Continuous for Arrangements",
        content:
          "Use present continuous for future events that have been ARRANGED — a plan made with another person or with a fixed slot in time. There is usually a time expression.",
        examples: [
          "I'm meeting John tomorrow. (arranged)",
          "We're flying to Rome on Friday. (booked)",
          "What are you doing this weekend? (asking about plans)",
        ],
      },
      {
        title: "Present Simple for Timetables",
        content:
          "Use present simple for timetables, schedules, and programmes — things that happen according to a fixed timetable, not personal arrangements.",
        examples: [
          "The train leaves at 8.30.",
          "The film starts at 7 o'clock.",
          "School finishes at 4 p.m.",
        ],
      },
    ],
    listen_sentences: [
      "I'm having dinner with my parents tomorrow.",
      "The conference starts at nine on Monday.",
      "Are you doing anything special this weekend?",
      "The last bus leaves at midnight.",
      "We're visiting the museum on Saturday morning.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question:
          "Choose the correct sentence for a fixed personal arrangement:",
        options: [
          "I meet the dentist tomorrow.",
          "I'm meeting the dentist tomorrow.",
          "I'll meet the dentist tomorrow.",
          "I meet the dentist at tomorrow.",
        ],
        answer: "I'm meeting the dentist tomorrow.",
        hint: "Personal arrangement = present continuous.",
        explanation:
          "'I'm meeting the dentist tomorrow' — present continuous is used for personal future arrangements that have already been organised.",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "The next train ______ (leave) at 10:15. (timetable)",
        options: [],
        answer: "leaves",
        hint: "Timetable information uses present simple.",
        explanation:
          "'The next train leaves at 10:15' — present simple is used for timetables and fixed schedules.",
      },
      {
        id: 3,
        type: "true_false",
        question:
          "'The train is leaving at 8.30' is correct when referring to a timetable.",
        options: ["True", "False"],
        answer: "False",
        hint: "Timetables use present simple, not present continuous.",
        explanation:
          "False. For timetables, use present simple: 'The train leaves at 8.30.' Present continuous would imply a personal arrangement, which is odd for a timetable.",
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "What are you ______ tonight?",
        options: ["do", "doing", "going to do", "will do"],
        answer: "doing",
        hint: "Asking about personal plans uses present continuous.",
        explanation:
          "'What are you doing tonight?' — present continuous to ask about future personal plans or arrangements.",
      },
      {
        id: 5,
        type: "drag_order",
        question: "Arrange to describe a fixed future arrangement:",
        options: ["we", "are", "flying", "to", "paris", "next", "week"],
        answer: "we are flying to paris next week",
        hint: "Fixed travel arrangement = present continuous.",
        explanation:
          "'We are flying to Paris next week' — present continuous for a future arrangement that has already been organised (tickets booked).",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence is correct for a class timetable?",
        options: [
          "The English class is starting at two o'clock.",
          "The English class starts at two o'clock.",
          "The English class will start at two o'clock.",
          "The English class starting at two o'clock.",
        ],
        answer: "The English class starts at two o'clock.",
        hint: "Timetable = present simple.",
        explanation:
          "'The English class starts at two o'clock' — timetable information uses present simple.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "I ______ (see) the doctor this afternoon. (appointment arranged)",
        options: [],
        answer: "am seeing",
        hint: "Personal appointment = present continuous.",
        explanation:
          "'I am seeing the doctor this afternoon' — present continuous for a personal future arrangement/appointment that has already been organised.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "Both 'I'm going to the party' and 'I go to the party tomorrow' can be used for a future personal arrangement.",
        options: ["True", "False"],
        answer: "False",
        hint: "Which is the natural form for personal arrangements?",
        explanation:
          "False. 'I'm going to the party' (present continuous) is correct for arrangements. 'I go to the party tomorrow' sounds unnatural; present simple is reserved for timetables.",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "The shop ______ at nine and ______ at six. (daily timetable)",
        options: [
          "is opening / is closing",
          "opens / closes",
          "will open / will close",
          "opened / closed",
        ],
        answer: "opens / closes",
        hint: "Regular timetable = present simple.",
        explanation:
          "'The shop opens at nine and closes at six' — present simple for regular timetable facts.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a question about someone's future plans:",
        options: ["what", "are", "you", "doing", "this", "evening"],
        answer: "what are you doing this evening",
        hint: "Asking about personal plans = present continuous.",
        explanation:
          "'What are you doing this evening?' — present continuous question to ask about personal future plans or arrangements.",
      },
    ],
  },
  {
    id: 20,
    title: "I'm going to (do)",
    category: "Tenses",
    section: "Future",
    key_rule:
      "'Going to' = intention/plan OR prediction based on evidence.",
    examples: [
      "I'm going to study medicine.",
      "Look at those clouds — it's going to rain.",
      "She's going to have a baby.",
    ],
    common_mistakes: [
      "I am going to went (❌) → going to go (✓)",
    ],
    study_cards: [
      {
        title: "'Going to' for Intentions and Plans",
        content:
          "Use 'going to' when you have ALREADY DECIDED to do something — the plan existed before the moment of speaking. This is different from 'will', which is used for a decision made at the moment of speaking.",
        examples: [
          "I'm going to buy a new laptop. (already decided)",
          "She's going to study in Australia next year. (plan formed)",
          "We're going to redecorate the kitchen. (intention)",
        ],
      },
      {
        title: "'Going to' for Evidence-Based Predictions",
        content:
          "Use 'going to' when you can SEE or FEEL evidence that something is about to happen.",
        examples: [
          "Look at those clouds — it's going to rain! (visible evidence)",
          "He's not wearing a seatbelt — he's going to get hurt!",
          "She looks pale — I think she's going to faint.",
        ],
      },
    ],
    listen_sentences: [
      "I'm going to apply for that job.",
      "Look out! He's going to fall!",
      "They're going to move to a new city next year.",
      "She's going to be an excellent doctor one day.",
      "Are you going to watch the match tonight?",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question:
          "You've already decided to change jobs. You say: 'I ______ change my job.'",
        options: [
          "will",
          "am going to",
          "might",
          "used to",
        ],
        answer: "am going to",
        hint: "Already-made decision = 'going to'.",
        explanation:
          "'I am going to change my job' — 'going to' for a decision that was already made before this conversation.",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "Watch out! He ______ (go to / fall) — he's leaning too far!",
        options: [],
        answer: "is going to fall",
        hint: "Visible evidence of something about to happen.",
        explanation:
          "'He is going to fall' — 'going to' for a prediction based on visible evidence (leaning too far).",
      },
      {
        id: 3,
        type: "true_false",
        question:
          "'I am going to went to the supermarket' is grammatically correct.",
        options: ["True", "False"],
        answer: "False",
        hint: "'Going to' must be followed by a BASE verb.",
        explanation:
          "False. 'Going to' is always followed by the BASE form of the verb. The correct sentence is 'I am going to go to the supermarket.'",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange to express an already-formed plan:",
        options: ["she", "is", "going", "to", "study", "architecture"],
        answer: "she is going to study architecture",
        hint: "'Is going to' + base verb.",
        explanation:
          "'She is going to study architecture' — 'going to' expresses a plan or decision already made.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "The sky is very dark. I think it ______ soon.",
        options: [
          "will rain",
          "is going to rain",
          "rains",
          "rained",
        ],
        answer: "is going to rain",
        hint: "There is visible evidence — dark sky.",
        explanation:
          "'It is going to rain' — 'going to' for evidence-based prediction. The dark sky is the evidence.",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence is correct?",
        options: [
          "We going to leave early tomorrow.",
          "We're going to leave early tomorrow.",
          "We are going to leaving early tomorrow.",
          "We are go to leave early tomorrow.",
        ],
        answer: "We're going to leave early tomorrow.",
        hint: "Form: am/is/are + going to + base verb.",
        explanation:
          "'We're going to leave early tomorrow' — correct form: am/is/are + going to + base verb (leave).",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "______ you going to tell him the truth?",
        options: [],
        answer: "Are",
        hint: "Question: Are + subject + going to + base verb?",
        explanation:
          "'Are you going to tell him the truth?' — question form: Are + subject + going to + base verb.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'Going to' can express a prediction based on visible evidence.",
        options: ["True", "False"],
        answer: "True",
        hint: "Dark clouds, someone leaning over a ledge, etc.",
        explanation:
          "True. 'Going to' is used for predictions based on current evidence or signs: 'Look at those clouds — it's going to rain!'",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "A: 'The phone is ringing.' B: 'OK, ______.'",
        options: [
          "I'm going to answer it.",
          "I'll answer it.",
          "I answer it.",
          "I'm answering it.",
        ],
        answer: "I'll answer it.",
        hint: "Decision made at THIS moment = 'will'.",
        explanation:
          "'I'll answer it' — this is a decision made at the moment of speaking, so 'will' is correct here, NOT 'going to'.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a 'going to' prediction based on evidence:",
        options: ["look", "out", "the", "vase", "is", "going", "to", "fall"],
        answer: "look out the vase is going to fall",
        hint: "Evidence-based prediction with 'going to'.",
        explanation:
          "'Look out the vase is going to fall' — 'going to' for an imminent prediction based on visible signs.",
      },
    ],
  },
  {
    id: 21,
    title: "will and shall 1",
    category: "Tenses",
    section: "Future",
    key_rule:
      "Use 'will' for predictions, decisions made now, offers, and promises.",
    examples: [
      "I'll have the soup.",
      "I think it will rain tomorrow.",
      "I'll help you.",
    ],
    common_mistakes: [
      "Using 'will' for pre-planned arrangements",
    ],
    study_cards: [
      {
        title: "Main Uses of 'Will'",
        content:
          "'Will' is used for: 1) Predictions about the future. 2) Decisions made AT THE MOMENT of speaking. 3) Offers and promises. 4) Requests. It is NOT used for pre-arranged plans.",
        examples: [
          "I think it will rain tomorrow. (prediction)",
          "I'll have the pasta. (decision now)",
          "Don't worry — I'll help you. (offer/promise)",
        ],
      },
      {
        title: "'Will' vs Pre-arranged Plans",
        content:
          "Don't use 'will' to talk about arrangements already made. Use present continuous or 'going to' instead.",
        examples: [
          "I'm meeting Tom at 6. (NOT I'll meet Tom at 6 — it's arranged)",
          "I'll call you later. (decision now = 'will' ✓)",
          "She's going to have a party. (planned = 'going to' ✓)",
        ],
      },
    ],
    listen_sentences: [
      "I think the project will take about a week.",
      "Don't worry — I'll carry that for you.",
      "It'll be cold tonight, so bring a coat.",
      "I'll call you as soon as I know.",
      "I promise I'll be there on time.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question:
          "You're in a restaurant and you suddenly decide what to order. You say:",
        options: [
          "I'm going to have the steak.",
          "I'll have the steak.",
          "I'm having the steak.",
          "I have the steak.",
        ],
        answer: "I'll have the steak.",
        hint: "Decision made at the moment of speaking = 'will'.",
        explanation:
          "'I'll have the steak' — 'will' for a decision made at the moment of speaking, not planned in advance.",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "Don't worry about the bags. I ______ help you carry them. (offer made now)",
        options: [],
        answer: "will / 'll",
        hint: "Spontaneous offer = 'will'.",
        explanation:
          "'I'll help you carry them' — 'will' for a spontaneous offer made at the moment of speaking.",
      },
      {
        id: 3,
        type: "true_false",
        question:
          "'I think she'll do well in her exams' is a correct use of 'will'.",
        options: ["True", "False"],
        answer: "True",
        hint: "'I think' signals a prediction.",
        explanation:
          "True. 'I think she'll do well' — 'will' for a prediction about the future, especially with 'I think/believe/expect'.",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange a spontaneous offer:",
        options: ["i", "will", "open", "the", "door", "for", "you"],
        answer: "i will open the door for you",
        hint: "Spontaneous offer = 'will'.",
        explanation:
          "'I will open the door for you' — 'will' for a spontaneous offer made at the moment of decision.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "Which sentence uses 'will' incorrectly?",
        options: [
          "I'll call you tomorrow.",
          "I think it'll be a great film.",
          "I'll see the dentist at 3 — I made an appointment.",
          "I'll help if you need me.",
        ],
        answer: "I'll see the dentist at 3 — I made an appointment.",
        hint: "Pre-arranged appointments don't use 'will'.",
        explanation:
          "'I'm seeing the dentist at 3' is correct (pre-arranged). 'I'll see' implies a decision made now, which contradicts 'I made an appointment'.",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence is correct for a promise?",
        options: [
          "I'm going to not tell anyone.",
          "I promise I will not tell anyone.",
          "I promise I am not telling anyone.",
          "I promise I not going to tell anyone.",
        ],
        answer: "I promise I will not tell anyone.",
        hint: "Promises use 'will'.",
        explanation:
          "'I promise I will not tell anyone' — 'will' is the natural tense for promises.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "Look at those dark clouds! I think it ______ rain later.",
        options: [],
        answer: "will",
        hint: "Prediction with 'I think' = 'will'.",
        explanation:
          "'I think it will rain later' — 'will' for a prediction. Note: 'going to' also works here, but 'will' is natural with 'I think'.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'Will' can be used for predictions, spontaneous decisions, and promises.",
        options: ["True", "False"],
        answer: "True",
        hint: "Think of the main uses of 'will'.",
        explanation:
          "True. 'Will' is used for: predictions ('It'll be cold'), spontaneous decisions ('I'll have coffee'), offers ('I'll help you'), and promises ('I'll never forget you').",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "A: 'The printer has broken down.' B: 'Don't worry, ______.'",
        options: [
          "I'm going to fix it.",
          "I'll fix it.",
          "I'm fixing it.",
          "I fix it.",
        ],
        answer: "I'll fix it.",
        hint: "Responding to new information with a spontaneous decision.",
        explanation:
          "'I'll fix it' — spontaneous decision/offer made in response to hearing new information. Use 'will', not 'going to'.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a prediction using 'will':",
        options: ["i", "think", "she", "will", "be", "a", "great", "leader"],
        answer: "i think she will be a great leader",
        hint: "Prediction with 'I think' = 'will'.",
        explanation:
          "'I think she will be a great leader' — 'will' for a prediction, commonly paired with 'I think/believe/expect'.",
      },
    ],
  },
  {
    id: 22,
    title: "will and shall 2",
    category: "Tenses",
    section: "Future",
    key_rule:
      "'Shall I/we' for offers and suggestions (mainly British).",
    examples: [
      "Shall I open the window?",
      "Shall we go now?",
      "What shall we do tonight?",
    ],
    common_mistakes: [
      "Shall he go? (❌) — only with I/we",
    ],
    study_cards: [
      {
        title: "'Shall I/we' for Offers and Suggestions",
        content:
          "'Shall I' is used to offer to do something. 'Shall we' is used to suggest doing something together. 'Shall' is mainly British English and only used with I and we.",
        examples: [
          "Shall I carry that for you? (offer)",
          "Shall we have lunch together? (suggestion)",
          "What time shall we meet? (asking for a decision)",
        ],
      },
      {
        title: "When to Use 'Will' vs 'Shall'",
        content:
          "'Will' is more universal and used for predictions, decisions, and promises. 'Shall' (with I/we) is mainly for offers and suggestions. In modern English, 'will' has largely replaced 'shall' except in these specific cases.",
        examples: [
          "I will do my best. (NOT I shall — sounds old-fashioned)",
          "Shall I help you? (offer — natural)",
          "We shall return. (formal/literary)",
        ],
      },
    ],
    listen_sentences: [
      "Shall I make you a cup of tea?",
      "Shall we take a taxi or walk?",
      "What shall I wear to the party?",
      "Shall I call you when I arrive?",
      "Shall we start the meeting now?",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question:
          "You want to offer to close the window. Which is most natural?",
        options: [
          "Will I close the window?",
          "Shall I close the window?",
          "Am I closing the window?",
          "Do I close the window?",
        ],
        answer: "Shall I close the window?",
        hint: "'Shall I' for an offer.",
        explanation:
          "'Shall I close the window?' — 'shall I' is the natural way to offer to do something for someone.",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "______ we have a meeting tomorrow afternoon? (suggestion)",
        options: [],
        answer: "Shall",
        hint: "'Shall we' for suggestions.",
        explanation:
          "'Shall we have a meeting tomorrow afternoon?' — 'shall we' for a suggestion to do something together.",
      },
      {
        id: 3,
        type: "true_false",
        question:
          "'Shall he come with us?' is correct British English.",
        options: ["True", "False"],
        answer: "False",
        hint: "'Shall' for offers/suggestions is only used with I and we.",
        explanation:
          "False. 'Shall' (for offers and suggestions) is only used with I and we — not he, she, they. Say 'Should he come?' or 'Will he come?'",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange an offer using 'shall':",
        options: ["shall", "i", "help", "you", "with", "that"],
        answer: "shall i help you with that",
        hint: "'Shall I' + base verb = offer.",
        explanation:
          "'Shall I help you with that?' — 'shall I' for making an offer, common in British English.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "You and your friend are wondering what to do this evening. You say:",
        options: [
          "Will we go to the cinema?",
          "Shall we go to the cinema?",
          "Are we going to the cinema?",
          "Should we going to the cinema?",
        ],
        answer: "Shall we go to the cinema?",
        hint: "'Shall we' for a joint suggestion.",
        explanation:
          "'Shall we go to the cinema?' — 'shall we' is used to make a suggestion about what to do together.",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence is correct?",
        options: [
          "Shall they meet us at the restaurant?",
          "Shall we meet at the restaurant?",
          "Shall he comes at the restaurant?",
          "Shall I to call a taxi?",
        ],
        answer: "Shall we meet at the restaurant?",
        hint: "'Shall' for suggestions = only with I/we, + base verb.",
        explanation:
          "'Shall we meet at the restaurant?' — correct. 'Shall' + base verb, only with I/we, for suggestions.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "What ______ we do if it rains? (asking for a suggestion/decision)",
        options: [],
        answer: "shall",
        hint: "'What shall we do?' = asking for a suggestion.",
        explanation:
          "'What shall we do if it rains?' — 'shall we' for asking for a suggestion or decision about what to do.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'Shall I' can be used to make an offer to do something for someone.",
        options: ["True", "False"],
        answer: "True",
        hint: "Offers to help someone.",
        explanation:
          "True. 'Shall I carry your bag?' 'Shall I make tea?' — 'shall I' is a natural and polite way to offer to do something for someone.",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "What ______ time shall we meet?",
        options: [
          "time will we meet?",
          "time shall we meet?",
          "time are we meeting?",
          "Both B and C",
        ],
        answer: "Both B and C",
        hint: "More than one option may be acceptable.",
        explanation:
          "'What time shall we meet?' (suggestion/decision) and 'What time are we meeting?' (arrangement already being discussed) are both natural. 'Shall we' asks for input; 'are we meeting' confirms.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a suggestion using 'shall we':",
        options: ["shall", "we", "take", "a", "break", "now"],
        answer: "shall we take a break now",
        hint: "'Shall we' + base verb for a group suggestion.",
        explanation:
          "'Shall we take a break now?' — 'shall we' for a suggestion to do something together.",
      },
    ],
  },
  {
    id: 23,
    title: "I will and I'm going to",
    category: "Tenses",
    section: "Future",
    key_rule:
      "'Will' = decision at moment of speaking. 'Going to' = already decided.",
    examples: [
      "A: We have no milk. B: I'll get some.",
      "I'm going to get some milk (already decided).",
      "I think it'll be fine. / It's going to rain (evidence).",
    ],
    common_mistakes: ["Using them interchangeably"],
    study_cards: [
      {
        title: "'Will' vs 'Going to' — Decisions",
        content:
          "Use 'WILL' when you decide to do something AT THE MOMENT of speaking (you didn't plan it before). Use 'GOING TO' when you have ALREADY DECIDED before the moment of speaking.",
        examples: [
          "A: The window's open. B: I'll close it. (decided now)",
          "A: Why are you in gym clothes? B: I'm going to exercise. (decided earlier)",
          "A: The phone's ringing. B: I'll get it. (decided at that moment)",
        ],
      },
      {
        title: "Predictions: Will vs Going to",
        content:
          "Use 'will' for a general prediction (based on opinion/belief). Use 'going to' for a prediction based on PRESENT EVIDENCE you can see or sense right now.",
        examples: [
          "I think it will rain tomorrow. (opinion/prediction)",
          "Look at those clouds — it's going to rain! (visible evidence)",
          "I think she'll be fine. vs She's going to faint — she looks so pale!",
        ],
      },
    ],
    listen_sentences: [
      "A: The bag looks heavy. B: I'll carry it.",
      "I've already bought the tickets — I'm going to see the show on Friday.",
      "I think he'll be a good teacher.",
      "Look at that car — it's going to crash!",
      "A: We need someone to help. B: OK, I'll do it.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question:
          "A: 'There's no one to water the plants while I'm away.' B: 'Don't worry, ______.'",
        options: [
          "I'm going to water them.",
          "I'll water them.",
          "I water them.",
          "I'm watering them.",
        ],
        answer: "I'll water them.",
        hint: "B just heard the problem and is deciding now.",
        explanation:
          "'I'll water them' — spontaneous decision made at the moment of speaking (hearing the problem). Use 'will'.",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "I've already decided — I ______ (going to) apply for that university. (pre-decided)",
        options: [],
        answer: "am going to",
        hint: "The decision was made BEFORE this conversation.",
        explanation:
          "'I am going to apply for that university' — 'going to' because the decision was already made before speaking.",
      },
      {
        id: 3,
        type: "true_false",
        question:
          "'Will' and 'going to' can always be used interchangeably.",
        options: ["True", "False"],
        answer: "False",
        hint: "Think about the key difference in timing of the decision.",
        explanation:
          "False. The key difference is: 'will' for decisions made NOW; 'going to' for decisions made BEFORE speaking. For predictions, 'going to' requires visible evidence.",
      },
      {
        id: 4,
        type: "multiple_choice",
        question:
          "You see a glass about to fall off the table. You say:",
        options: [
          "The glass will fall!",
          "The glass is going to fall!",
          "The glass falls!",
          "The glass would fall!",
        ],
        answer: "The glass is going to fall!",
        hint: "You can see the evidence — the glass is already tipping.",
        explanation:
          "'The glass is going to fall!' — 'going to' for a prediction based on visible, immediate evidence.",
      },
      {
        id: 5,
        type: "drag_order",
        question: "Arrange a sentence showing a decision made now:",
        options: ["that", "looks", "delicious", "i'll", "try", "some"],
        answer: "that looks delicious i'll try some",
        hint: "Seeing the food prompts an instant decision → 'will'.",
        explanation:
          "'That looks delicious — I'll try some' — 'will' (contraction: I'll) for a decision made at the moment of seeing/speaking.",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence correctly describes a pre-made plan?",
        options: [
          "I'll paint the bedroom this weekend — I bought paint yesterday.",
          "I'm going to paint the bedroom this weekend — I bought paint yesterday.",
          "I paint the bedroom this weekend — I bought paint yesterday.",
          "I'll have painted the bedroom this weekend.",
        ],
        answer: "I'm going to paint the bedroom this weekend — I bought paint yesterday.",
        hint: "Buying paint = evidence of a pre-made plan.",
        explanation:
          "'I'm going to paint' — the purchase of paint shows the plan was already made. 'Going to' is correct for pre-planned intentions.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "A: 'Someone needs to collect the kids.' B: 'OK, I ______ go.' (deciding right now)",
        options: [],
        answer: "will / 'll",
        hint: "B is making the decision at this very moment.",
        explanation:
          "'I'll go' — 'will' for a spontaneous decision made in response to new information.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "Both 'I think it will snow' and 'It's going to snow (I can see black clouds)' are correct, but for different reasons.",
        options: ["True", "False"],
        answer: "True",
        hint: "Think: opinion vs visible evidence.",
        explanation:
          "True. 'I think it will snow' = prediction based on opinion. 'It's going to snow' (with visible evidence like dark clouds) = evidence-based prediction. Both correct, different contexts.",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "She told me yesterday that she ______ leave her job.",
        options: [
          "will",
          "is going to",
          "shall",
          "would",
        ],
        answer: "is going to",
        hint: "A decision made before this conversation = 'going to'.",
        explanation:
          "'She is going to leave her job' — 'going to' for a decision already made. She told you yesterday, so it was decided before.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange showing a pre-made intention:",
        options: ["i", "am", "going", "to", "learn", "to", "drive", "this", "year"],
        answer: "i am going to learn to drive this year",
        hint: "Pre-made intention = 'going to'.",
        explanation:
          "'I am going to learn to drive this year' — 'going to' for an intention decided before the moment of speaking.",
      },
    ],
  },
  {
    id: 24,
    title: "will be doing and will have done",
    category: "Tenses",
    section: "Future",
    key_rule:
      "'Will be doing' = in progress at a future time. 'Will have done' = completed before a future point.",
    examples: [
      "This time tomorrow I'll be lying on the beach.",
      "By Friday, I'll have finished the report.",
      "Don't call at 8 — I'll be eating.",
    ],
    common_mistakes: ["Unnecessarily complex forms"],
    study_cards: [
      {
        title: "Future Continuous: Will be doing",
        content:
          "Use 'will be + verb-ing' to say that an action will be IN PROGRESS at a specific future time. Often used with 'this time tomorrow/next week'.",
        examples: [
          "This time tomorrow I'll be sitting on the plane.",
          "At 6 o'clock I'll be cooking dinner.",
          "Don't call at nine — I'll be having a meeting.",
        ],
      },
      {
        title: "Future Perfect: Will have done",
        content:
          "Use 'will have + past participle' to say that an action will be COMPLETED by a specific future point. Often used with 'by + time' or 'by the time'.",
        examples: [
          "By Friday I'll have finished the project.",
          "She'll have graduated by the time you get back.",
          "I'll have read the book by tonight.",
        ],
      },
    ],
    listen_sentences: [
      "This time next week we'll be swimming in the sea.",
      "By the time you read this, I'll have left.",
      "Don't call at eight — I'll be watching the match.",
      "She'll have finished her degree by next summer.",
      "At midnight tonight, the party will still be going.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question:
          "This time next year, she ______ at university.",
        options: [
          "will study",
          "will be studying",
          "will have studied",
          "studies",
        ],
        answer: "will be studying",
        hint: "'This time next year' = an activity in progress at a future point.",
        explanation:
          "'She will be studying at university' — future continuous for an action in progress at a specific future time (this time next year).",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "By Monday, I ______ (finish) the report. (completed before Monday)",
        options: [],
        answer: "will have finished",
        hint: "'By' + deadline → future perfect.",
        explanation:
          "'I will have finished the report by Monday' — future perfect: the action will be complete BEFORE Monday.",
      },
      {
        id: 3,
        type: "true_false",
        question:
          "'Don't phone at 7 — I'll be eating' correctly uses future continuous.",
        options: ["True", "False"],
        answer: "True",
        hint: "An activity that will be in progress at 7.",
        explanation:
          "True. 'I'll be eating' = future continuous showing an activity that will be in progress at 7 o'clock.",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange a future perfect sentence with 'by':",
        options: ["by", "next", "week", "we", "will", "have", "moved", "in"],
        answer: "by next week we will have moved in",
        hint: "'By' + time = future perfect.",
        explanation:
          "'By next week we will have moved in' — future perfect shows the action (moving in) will be complete before next week.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "When you arrive at the party, most people ______ already ______.",
        options: [
          "will arrive",
          "will be arriving",
          "will have arrived",
          "arrive",
        ],
        answer: "will have arrived",
        hint: "The arrival will be complete BEFORE you get there.",
        explanation:
          "'Will have arrived' — future perfect: most people will complete their arrival before you get there.",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence is correct for 'in progress at a future time'?",
        options: [
          "At 10 tomorrow I'll have worked.",
          "At 10 tomorrow I'll be working.",
          "At 10 tomorrow I'll work.",
          "At 10 tomorrow I work.",
        ],
        answer: "At 10 tomorrow I'll be working.",
        hint: "In progress at a specific future time = future continuous.",
        explanation:
          "'At 10 tomorrow I'll be working' — future continuous for an action that will be in progress at 10 tomorrow.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "By the time she arrives, we ______ (eat) already.",
        options: [],
        answer: "will have eaten",
        hint: "Future perfect: completed before her arrival.",
        explanation:
          "'We will have eaten' — future perfect: the eating will be complete before she arrives.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'By next year she'll have been working here for a decade' is correct.",
        options: ["True", "False"],
        answer: "True",
        hint: "Future perfect continuous for duration up to a future point.",
        explanation:
          "True. 'Will have been working for a decade' — future perfect continuous for a continuing action whose duration reaches a future point.",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "At midnight, the event ______ still ______.",
        options: [
          "will / be happening",
          "will / be going on",
          "will / have happened",
          "Both A and B",
        ],
        answer: "Both A and B",
        hint: "Both 'will be happening' and 'will be going on' describe a continuous state.",
        explanation:
          "Both 'will be happening' and 'will be going on' are correct future continuous forms describing the event still in progress at midnight.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a future continuous sentence:",
        options: ["this", "time", "tomorrow", "i'll", "be", "relaxing", "on", "the", "beach"],
        answer: "this time tomorrow i'll be relaxing on the beach",
        hint: "'This time tomorrow' + future continuous.",
        explanation:
          "'This time tomorrow I'll be relaxing on the beach' — future continuous for an activity in progress at a specific future moment.",
      },
    ],
  },
  {
    id: 25,
    title: "when I do and when I've done / if and when",
    category: "Tenses",
    section: "Future",
    key_rule:
      "After 'when/if/as soon as/until/before', use present (not will) for future meaning.",
    examples: [
      "I'll call you when I arrive.",
      "As soon as she gets home, tell her.",
      "If it rains, we'll stay inside.",
    ],
    common_mistakes: [
      "When I will finish (❌) → When I finish (✓)",
    ],
    study_cards: [
      {
        title: "No 'Will' After Time Conjunctions",
        content:
          "After when, if, as soon as, until, before, after, by the time — use present tense (simple or perfect) for future meaning. Do NOT use 'will' in the time/condition clause.",
        examples: [
          "I'll call you when I ARRIVE. (NOT when I will arrive)",
          "Wait here until I COME BACK. (NOT until I will come back)",
          "As soon as she FINISHES, she'll call. (NOT will finish)",
        ],
      },
      {
        title: "Present Perfect After 'When/After/Once'",
        content:
          "Use present perfect (have + past participle) after when, after, once, as soon as — to show that the first action is complete before the second begins.",
        examples: [
          "I'll go out when I've finished. (after completing)",
          "Once you've read it, pass it on.",
          "After she has eaten, she'll go.",
        ],
      },
    ],
    listen_sentences: [
      "I'll let you know as soon as I hear anything.",
      "When you finish the test, leave quietly.",
      "If you need help, just ask.",
      "I won't leave until she arrives.",
      "Once I've saved enough, I'll book the holiday.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question:
          "I'll call you when I ______ home.",
        options: [
          "will get",
          "get",
          "am getting",
          "got",
        ],
        answer: "get",
        hint: "After 'when', use present simple for future meaning.",
        explanation:
          "'I'll call you when I get home' — present simple after 'when' to express future meaning. Never use 'will' in the 'when' clause.",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "If it ______ (rain) tomorrow, we'll cancel the picnic.",
        options: [],
        answer: "rains",
        hint: "After 'if', use present simple (not will).",
        explanation:
          "'If it rains tomorrow' — present simple after 'if' for a future condition. 'If it will rain' is incorrect.",
      },
      {
        id: 3,
        type: "true_false",
        question:
          "'I'll tell her when I will see her' is correct.",
        options: ["True", "False"],
        answer: "False",
        hint: "No 'will' in the 'when' clause for future meaning.",
        explanation:
          "False. The correct sentence is 'I'll tell her when I see her.' Present simple (not 'will') follows 'when' for future meaning.",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange a sentence with 'as soon as':",
        options: ["i'll", "email", "you", "as", "soon", "as", "i", "know"],
        answer: "i'll email you as soon as i know",
        hint: "Present simple after 'as soon as' for future.",
        explanation:
          "'I'll email you as soon as I know' — present simple after 'as soon as' for future meaning.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "Wait here until she ______.",
        options: [
          "will arrive",
          "arrives",
          "is arriving",
          "arrived",
        ],
        answer: "arrives",
        hint: "After 'until', use present simple for future.",
        explanation:
          "'Wait here until she arrives' — present simple after 'until' for future meaning.",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence is grammatically correct?",
        options: [
          "I'll start when he will be ready.",
          "I'll start when he is ready.",
          "I'll start when he will ready.",
          "I start when he is ready.",
        ],
        answer: "I'll start when he is ready.",
        hint: "Present simple after 'when' for future.",
        explanation:
          "'I'll start when he is ready' — present simple after 'when' for a future condition.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "Once I ______ (finish) the report, I'll take a break.",
        options: [],
        answer: "have finished",
        hint: "After 'once' = present perfect to show completion first.",
        explanation:
          "'Once I have finished the report, I'll take a break' — present perfect after 'once' shows the report will be complete before the break.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'Before you leave, make sure you've locked the door' is correct.",
        options: ["True", "False"],
        answer: "True",
        hint: "Present perfect after 'before' is possible.",
        explanation:
          "True. 'Before you leave' uses present simple. 'You've locked' uses present perfect correctly after a condition clause.",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "I'll give it back to you after I ______ it.",
        options: [
          "will finish",
          "finish",
          "have finished",
          "Both B and C",
        ],
        answer: "Both B and C",
        hint: "Both present simple and present perfect work after 'after'.",
        explanation:
          "Both 'after I finish' and 'after I have finished' are correct. The present perfect slightly emphasises the completion before returning it.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a sentence with 'if' for a future condition:",
        options: ["if", "she", "calls", "tell", "her", "i'm", "busy"],
        answer: "if she calls tell her i'm busy",
        hint: "Present simple after 'if' for a future condition.",
        explanation:
          "'If she calls, tell her I'm busy' — present simple after 'if' for a future conditional.",
      },
    ],
  },
];

export default future;
