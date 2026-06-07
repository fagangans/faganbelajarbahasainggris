const presentPerfectAndPast = [
  {
    id: 7,
    title: "Present perfect 1 (I have done)",
    category: "Tenses",
    section: "Present Perfect & Past",
    key_rule: "Use present perfect for past actions with a connection to the present.",
    examples: [
      "I've lost my key.",
      "She has lived here for 5 years.",
      "Have you ever been to Japan?",
    ],
    common_mistakes: [
      "I have seen him yesterday (❌) → I saw him yesterday (✓)",
    ],
    study_cards: [
      {
        title: "Forming the Present Perfect",
        content:
          "Use have/has + past participle. The action happened in the past but has relevance NOW — the result or experience connects to the present moment.",
        examples: [
          "I've lost my keys. (I still don't have them now)",
          "She has lived here for five years. (she still lives here)",
          "Have you ever eaten sushi? (in your life up to now)",
        ],
      },
      {
        title: "When NOT to Use Present Perfect",
        content:
          "If the sentence has a finished time expression (yesterday, last week, in 2010, ago), use PAST SIMPLE instead. Present perfect only works when the time is unfinished or unspecified.",
        examples: [
          "I saw him yesterday. (finished time → past simple)",
          "I have seen him recently. (unfinished/vague time → present perfect)",
          "She graduated in 2015. (specific finished year → past simple)",
        ],
      },
    ],
    listen_sentences: [
      "I've just finished my homework.",
      "Have you ever visited London?",
      "She has worked here for ten years.",
      "They haven't eaten anything today.",
      "He has broken the world record.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Which sentence uses the present perfect correctly?",
        options: [
          "I have seen him yesterday.",
          "I saw him yesterday.",
          "I have see him yesterday.",
          "I did see him yesterday.",
        ],
        answer: "I saw him yesterday.",
        hint: "Yesterday is a finished time expression.",
        explanation:
          "'Yesterday' is a finished time expression, so we must use past simple: 'I saw him yesterday.' The present perfect cannot be used with specific finished times.",
      },
      {
        id: 2,
        type: "fill_blank",
        question: "She ______ (live) here for five years. (Use present perfect)",
        options: [],
        answer: "has lived",
        hint: "Use has + past participle for he/she/it.",
        explanation:
          "'She has lived here for five years' — present perfect because the action started in the past and continues to now. Use 'has' with third-person singular.",
      },
      {
        id: 3,
        type: "true_false",
        question:
          "The sentence 'Have you ever been to Paris?' is grammatically correct.",
        options: ["True", "False"],
        answer: "True",
        hint: "Think about life experience with 'ever'.",
        explanation:
          "Correct! 'Have you ever been to Paris?' uses present perfect correctly to ask about a life experience — a past event with relevance to the present.",
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Choose the correct sentence:",
        options: [
          "I have lost my wallet. I can't find it anywhere.",
          "I lost my wallet. I can't find it anywhere.",
          "I did lose my wallet. I can't find it anywhere.",
          "I was losing my wallet. I can't find it anywhere.",
        ],
        answer: "I have lost my wallet. I can't find it anywhere.",
        hint: "The second sentence shows a present connection.",
        explanation:
          "'I have lost my wallet' — present perfect is correct here because the result (I don't have it now) is connected to the present moment.",
      },
      {
        id: 5,
        type: "fill_blank",
        question: "______ you ever ______ (eat) Thai food? (present perfect question)",
        options: [],
        answer: "Have / eaten",
        hint: "Form: Have + subject + past participle.",
        explanation:
          "'Have you ever eaten Thai food?' — present perfect with 'ever' for life experience. The question asks about any time up to now.",
      },
      {
        id: 6,
        type: "drag_order",
        question: "Arrange the words to form a correct present perfect sentence:",
        options: ["she", "has", "never", "flown", "before"],
        answer: "she has never flown before",
        hint: "Place 'never' between has and the past participle.",
        explanation:
          "'She has never flown before' — present perfect with 'never' for a life experience. Never goes between the auxiliary and the main verb.",
      },
      {
        id: 7,
        type: "error_correction",
        question: "Which sentence is correct?",
        options: [
          "I have visited Rome last summer.",
          "I visited Rome last summer.",
          "I have visit Rome last summer.",
          "I was visited Rome last summer.",
        ],
        answer: "I visited Rome last summer.",
        hint: "'Last summer' is a finished time.",
        explanation:
          "'Last summer' is a specific finished time, so we must use past simple: 'I visited Rome last summer.' Present perfect cannot be combined with such expressions.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "You can use the present perfect to describe a past action that has no connection to the present.",
        options: ["True", "False"],
        answer: "False",
        hint: "Think about what present perfect emphasises.",
        explanation:
          "False. The present perfect specifically signals a connection between a past action and the present. For completely finished past actions with no present connection, use past simple.",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "Tom can't find his passport. What is the correct way to say this?",
        options: [
          "Tom lost his passport.",
          "Tom has lost his passport.",
          "Tom did lose his passport.",
          "Tom was losing his passport.",
        ],
        answer: "Tom has lost his passport.",
        hint: "The situation affects the present moment.",
        explanation:
          "'Tom has lost his passport' — present perfect because the result (he doesn't have it now) is relevant to the present situation.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange the words to form a correct present perfect question:",
        options: ["have", "you", "finished", "your", "homework"],
        answer: "have you finished your homework",
        hint: "Question form: Have + subject + past participle.",
        explanation:
          "'Have you finished your homework?' — present perfect question. The auxiliary 'have' comes before the subject in questions.",
      },
    ],
  },
  {
    id: 8,
    title: "Present perfect 2 (I have done)",
    category: "Tenses",
    section: "Present Perfect & Past",
    key_rule:
      "Use with just, already, yet, recently, so far, ever, never.",
    examples: [
      "I've just eaten.",
      "Have you finished yet?",
      "We've already seen that movie.",
    ],
    common_mistakes: [
      "Did you eat yet? (❌) → Have you eaten yet? (✓)",
    ],
    study_cards: [
      {
        title: "Key Time Words with Present Perfect",
        content:
          "Certain adverbs signal present perfect: JUST (very recently), ALREADY (sooner than expected), YET (by now — in questions/negatives), EVER (at any time), NEVER (at no time), RECENTLY, SO FAR, STILL (with negative).",
        examples: [
          "I've just arrived. (a moment ago)",
          "Have you eaten yet? (by now?)",
          "She's already left. (sooner than expected)",
        ],
      },
      {
        title: "Position of These Adverbs",
        content:
          "JUST, ALREADY, EVER, NEVER go between have/has and the past participle. YET goes at the end of the sentence in questions and negatives.",
        examples: [
          "I've already eaten. / Have you already eaten?",
          "I haven't finished yet. / Have you finished yet?",
          "I've never been to Australia.",
        ],
      },
    ],
    listen_sentences: [
      "I've just got home from work.",
      "Have you packed your bags yet?",
      "She's already handed in her essay.",
      "We've never seen anything like this.",
      "So far, everything has gone smoothly.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Which word correctly completes: 'I've ______ finished. You can start now.'",
        options: ["yet", "already", "still", "since"],
        answer: "already",
        hint: "This means 'sooner than expected'.",
        explanation:
          "'Already' means something has happened sooner than expected. 'I've already finished' — perfect here. 'Yet' is used at the end of negatives/questions.",
      },
      {
        id: 2,
        type: "fill_blank",
        question: "Have you eaten ______? (expecting something to have happened by now)",
        options: [],
        answer: "yet",
        hint: "This word goes at the end of present perfect questions.",
        explanation:
          "'Yet' is used in questions and negatives to mean 'by now'. 'Have you eaten yet?' — correct. Note: 'Did you eat yet?' is incorrect.",
      },
      {
        id: 3,
        type: "true_false",
        question:
          "The sentence 'Did you eat yet?' is correct English.",
        options: ["True", "False"],
        answer: "False",
        hint: "Which tense pairs with 'yet' in questions?",
        explanation:
          "False. 'Yet' in questions requires present perfect: 'Have you eaten yet?' The past simple form 'Did you eat yet?' is incorrect.",
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Choose the correct sentence:",
        options: [
          "She never has been to China.",
          "She has never been to China.",
          "She has been never to China.",
          "Never she has been to China.",
        ],
        answer: "She has never been to China.",
        hint: "'Never' goes between the auxiliary and past participle.",
        explanation:
          "'Never' is placed between the auxiliary 'has' and the past participle 'been': 'She has never been to China.'",
      },
      {
        id: 5,
        type: "drag_order",
        question: "Arrange to form a correct sentence with 'just':",
        options: ["the", "train", "has", "just", "left"],
        answer: "the train has just left",
        hint: "'Just' goes between has and the past participle.",
        explanation:
          "'The train has just left' — 'just' between the auxiliary 'has' and past participle 'left' means a very recent action.",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence is correct?",
        options: [
          "I haven't yet finished.",
          "I haven't finished yet.",
          "I yet haven't finished.",
          "I finished not yet.",
        ],
        answer: "I haven't finished yet.",
        hint: "'Yet' in negatives goes at the end.",
        explanation:
          "'I haven't finished yet' — 'yet' goes at the END of the sentence in negative present perfect sentences.",
      },
      {
        id: 7,
        type: "fill_blank",
        question: "Have you ______ (ever) been to Africa? — No, I've ______ (never) been there.",
        options: [],
        answer: "ever / never",
        hint: "'Ever' in questions, 'never' in negative statements.",
        explanation:
          "'Have you ever been to Africa?' — 'ever' in questions. 'I've never been there' — 'never' in negative statements. Both go before the past participle.",
      },
      {
        id: 8,
        type: "multiple_choice",
        question: "So far, we ______ three chapters.",
        options: [
          "finished",
          "have finished",
          "are finishing",
          "finish",
        ],
        answer: "have finished",
        hint: "'So far' signals present perfect.",
        explanation:
          "'So far' means 'up to now' and always takes present perfect: 'So far, we have finished three chapters.'",
      },
      {
        id: 9,
        type: "true_false",
        question:
          "In the sentence 'I've already told you', 'already' is placed correctly.",
        options: ["True", "False"],
        answer: "True",
        hint: "Where does 'already' go in present perfect?",
        explanation:
          "True. 'Already' is correctly placed between the auxiliary 've (have)' and the past participle 'told'.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange to form a present perfect question with 'ever':",
        options: ["have", "you", "ever", "met", "a", "celebrity"],
        answer: "have you ever met a celebrity",
        hint: "'Ever' goes between have and the past participle.",
        explanation:
          "'Have you ever met a celebrity?' — 'ever' sits between the auxiliary 'have' and past participle 'met' in present perfect questions.",
      },
    ],
  },
  {
    id: 9,
    title: "Present perfect continuous (I have been doing)",
    category: "Tenses",
    section: "Present Perfect & Past",
    key_rule:
      "For activity started in past, still continuing or just stopped.",
    examples: [
      "I've been waiting for an hour.",
      "She's been studying all day.",
      "You look tired. Have you been running?",
    ],
    common_mistakes: [
      "I have been knowing (❌) → I have known (✓)",
    ],
    study_cards: [
      {
        title: "Forming Present Perfect Continuous",
        content:
          "Use have/has + been + verb-ing. This tense emphasises the DURATION or the ongoing nature of an activity that started in the past and is still happening (or just stopped).",
        examples: [
          "I've been waiting here for two hours. (still waiting)",
          "She's been studying since morning. (activity is ongoing)",
          "You look wet. Has it been raining? (just stopped)",
        ],
      },
      {
        title: "State Verbs Cannot Use Continuous",
        content:
          "State verbs (know, like, believe, own, understand) cannot be used in continuous forms. Use present perfect simple instead.",
        examples: [
          "I have known her for years. (NOT I've been knowing)",
          "She has owned this house since 2010. (NOT has been owning)",
          "I've been working here for a year. (action verb ✓)",
        ],
      },
    ],
    listen_sentences: [
      "He's been working in the garden all morning.",
      "I've been learning Spanish for six months.",
      "Why are your hands dirty? Have you been painting?",
      "She's been waiting for the bus for half an hour.",
      "They've been arguing since breakfast.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question:
          "I ______ for the bus for 30 minutes. (emphasising duration)",
        options: [
          "have waited",
          "have been waiting",
          "am waiting",
          "was waiting",
        ],
        answer: "have been waiting",
        hint: "For duration of an ongoing activity, use present perfect continuous.",
        explanation:
          "'I have been waiting for the bus for 30 minutes' — present perfect continuous emphasises the duration of an activity that started in the past and is still ongoing.",
      },
      {
        id: 2,
        type: "true_false",
        question:
          "'I have been knowing her for ten years' is grammatically correct.",
        options: ["True", "False"],
        answer: "False",
        hint: "'Know' is a state verb.",
        explanation:
          "False. 'Know' is a state verb and cannot be used in continuous forms. The correct form is: 'I have known her for ten years.'",
      },
      {
        id: 3,
        type: "fill_blank",
        question:
          "Your eyes are red. ______ you ______ (cry)? (present perfect continuous question)",
        options: [],
        answer: "Have / been crying",
        hint: "Form: Have + subject + been + verb-ing.",
        explanation:
          "'Have you been crying?' — present perfect continuous question. The red eyes are evidence that the activity has just stopped.",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange to form a present perfect continuous sentence:",
        options: ["she", "has", "been", "reading", "all", "afternoon"],
        answer: "she has been reading all afternoon",
        hint: "Form: has + been + verb-ing.",
        explanation:
          "'She has been reading all afternoon' — present perfect continuous showing an activity in progress throughout a period up to now.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "Which sentence is NOT possible because of a state verb?",
        options: [
          "I've been cooking for an hour.",
          "She's been believing in miracles. ",
          "They've been playing tennis.",
          "We've been waiting outside.",
        ],
        answer: "She's been believing in miracles. ",
        hint: "One of these uses a state verb incorrectly.",
        explanation:
          "'Believe' is a state verb and cannot be used in continuous forms. The correct form would be 'She has believed in miracles.'",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence is correct?",
        options: [
          "He has been working since three hours.",
          "He has been working for three hours.",
          "He is working since three hours.",
          "He worked for three hours already.",
        ],
        answer: "He has been working for three hours.",
        hint: "Use 'for' with duration, 'since' with a point in time.",
        explanation:
          "'He has been working for three hours' — 'for' is used with duration (three hours). 'Since' would need a point in time (since 3 o'clock).",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "How long ______ you ______ (study) English? — Since 2020.",
        options: [],
        answer: "have / been studying",
        hint: "How long + present perfect continuous.",
        explanation:
          "'How long have you been studying English?' — 'how long' question with present perfect continuous to ask about duration of an ongoing activity.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "Present perfect continuous can be used to explain a present situation, e.g. 'I'm tired because I've been running.'",
        options: ["True", "False"],
        answer: "True",
        hint: "Think about cause and effect.",
        explanation:
          "True. The present perfect continuous is often used to explain a present result: 'I'm tired (now) because I've been running (recently stopped).'",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "She looks exhausted. She ______ all night.",
        options: [
          "was studying",
          "has been studying",
          "is studying",
          "studied",
        ],
        answer: "has been studying",
        hint: "Her current state (exhausted) is the result.",
        explanation:
          "'She has been studying all night' — the present perfect continuous explains the present result (exhaustion) by describing a recent extended activity.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange the words to form a question:",
        options: ["how", "long", "have", "you", "been", "waiting"],
        answer: "how long have you been waiting",
        hint: "Question starts with 'how long'.",
        explanation:
          "'How long have you been waiting?' — present perfect continuous question about duration, formed with: how long + have + subject + been + verb-ing.",
      },
    ],
  },
  {
    id: 10,
    title: "Present perfect continuous and simple",
    category: "Tenses",
    section: "Present Perfect & Past",
    key_rule:
      "Continuous = focus on activity/duration. Simple = focus on result/completion.",
    examples: [
      "I've been reading (still reading)",
      "I've read that book (finished)",
      "She's been cooking / She's cooked dinner.",
    ],
    common_mistakes: [
      "Both can be used with 'how long', but NOT for short events",
    ],
    study_cards: [
      {
        title: "Continuous vs Simple — Focus",
        content:
          "Present perfect CONTINUOUS focuses on the activity itself and how long it has been going on. Present perfect SIMPLE focuses on the result, completion, or number of times.",
        examples: [
          "I've been writing emails all morning. (activity, duration)",
          "I've written ten emails. (result, number completed)",
          "She's been cooking. vs She's cooked dinner. (activity vs result)",
        ],
      },
      {
        title: "When Only Simple Works",
        content:
          "For short, instantaneous actions, use simple (not continuous). Also for state verbs. With 'how many times' use simple.",
        examples: [
          "I've lost my keys. (NOT I've been losing — instant action)",
          "How many times have you seen that film? (count = simple)",
          "I've known him since school. (state verb = simple)",
        ],
      },
    ],
    listen_sentences: [
      "I've been trying to call you all evening.",
      "She's finished her project at last.",
      "We've been living here since 2015.",
      "I've read three books this month.",
      "He's been working too hard lately.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question:
          "Which sentence focuses on the RESULT rather than the activity?",
        options: [
          "I've been painting the walls.",
          "I've painted the walls.",
          "I was painting the walls.",
          "I paint the walls.",
        ],
        answer: "I've painted the walls.",
        hint: "Which one tells you it's DONE?",
        explanation:
          "'I've painted the walls' (simple) = result: the walls are now painted. 'I've been painting' = activity in progress, focuses on the process.",
      },
      {
        id: 2,
        type: "true_false",
        question:
          "Both 'I've been living here for years' and 'I've lived here for years' are possible.",
        options: ["True", "False"],
        answer: "True",
        hint: "'Live' with 'how long' can use either form.",
        explanation:
          "True. With verbs like 'live, work, teach', both forms are possible with 'for/how long'. The continuous slightly emphasises the ongoing nature.",
      },
      {
        id: 3,
        type: "fill_blank",
        question:
          "I ______ (read) that book already — you can borrow it. (completed action, result)",
        options: [],
        answer: "have read",
        hint: "The result is: you can borrow it.",
        explanation:
          "'I have read that book' — present perfect simple focuses on the completed result. You finished it (result), so the other person can borrow it.",
      },
      {
        id: 4,
        type: "error_correction",
        question: "Which sentence is correct?",
        options: [
          "She's been losing her keys.",
          "She's lost her keys.",
          "She loses her keys.",
          "She's being losing her keys.",
        ],
        answer: "She's lost her keys.",
        hint: "Losing keys is a short, instant action.",
        explanation:
          "'She's lost her keys' — 'lose' is an instantaneous action, so we use present perfect simple, not continuous.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "I'm exhausted! I ______ all day. (emphasising the long activity)",
        options: [
          "have cleaned",
          "have been cleaning",
          "cleaned",
          "was cleaning",
        ],
        answer: "have been cleaning",
        hint: "Emphasising duration of activity → continuous.",
        explanation:
          "'I have been cleaning all day' — present perfect continuous emphasises the tiring duration of the activity that caused the current exhaustion.",
      },
      {
        id: 6,
        type: "drag_order",
        question: "Arrange to show a completed result (use simple):",
        options: ["she", "has", "cooked", "a", "delicious", "meal"],
        answer: "she has cooked a delicious meal",
        hint: "Simple = focus on completion/result.",
        explanation:
          "'She has cooked a delicious meal' — present perfect simple focuses on the completed result: the meal is done and ready.",
      },
      {
        id: 7,
        type: "true_false",
        question:
          "You can say 'I've been knowing him for years' to emphasise the long duration.",
        options: ["True", "False"],
        answer: "False",
        hint: "'Know' is a state verb.",
        explanation:
          "False. 'Know' is a state verb and cannot be used in any continuous form. The correct sentence is 'I've known him for years.'",
      },
      {
        id: 8,
        type: "fill_blank",
        question:
          "How many times ______ you ______ (visit) that museum? (number of completions)",
        options: [],
        answer: "have / visited",
        hint: "Count of completed actions → present perfect simple.",
        explanation:
          "'How many times have you visited that museum?' — when asking about the NUMBER of times, use present perfect simple (completion/count).",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "Why is 'I've been breaking my leg' incorrect?",
        options: [
          "Because break is a state verb.",
          "Because it should be past simple.",
          "Because breaking a leg is instantaneous, not an extended activity.",
          "Because it needs 'since'.",
        ],
        answer: "Because breaking a leg is instantaneous, not an extended activity.",
        hint: "Continuous implies an ongoing process.",
        explanation:
          "Breaking a leg is an instantaneous event, not an extended activity. The correct form is 'I've broken my leg' (present perfect simple).",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange to show duration (use continuous):",
        options: ["i", "have", "been", "studying", "for", "two", "hours"],
        answer: "i have been studying for two hours",
        hint: "'For' + duration → continuous is typical.",
        explanation:
          "'I have been studying for two hours' — present perfect continuous with 'for' to show the duration of an ongoing activity.",
      },
    ],
  },
  {
    id: 11,
    title: "how long have you (been) … ?",
    category: "Tenses",
    section: "Present Perfect & Past",
    key_rule:
      "Use 'how long' + present perfect for duration to the present.",
    examples: [
      "How long have you lived here?",
      "How long have you been waiting?",
      "I've known her for ten years.",
    ],
    common_mistakes: [
      "How long are you here? (❌) → How long have you been here? (✓)",
    ],
    study_cards: [
      {
        title: "'How long' with Present Perfect",
        content:
          "To ask about the duration of something that started in the past and continues NOW, use: How long + have/has + subject + (been) + verb? Use simple for states, continuous for activities.",
        examples: [
          "How long have you lived here? (state — simple)",
          "How long have you been waiting? (activity — continuous)",
          "How long has she been a teacher? (role/state — simple)",
        ],
      },
      {
        title: "For and Since in Answers",
        content:
          "Answer 'how long' questions with 'for' (duration) or 'since' (starting point).",
        examples: [
          "I've lived here for three years.",
          "I've been waiting since 9 o'clock.",
          "She's been a doctor for twenty years.",
        ],
      },
    ],
    listen_sentences: [
      "How long have you been learning English?",
      "I've known my best friend since primary school.",
      "How long has he been working at that company?",
      "She's been studying medicine for five years.",
      "How long have you had that car?",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "How long ______ you ______ English? (learning, still ongoing)",
        options: [
          "are / learning",
          "did / learn",
          "have / been learning",
          "were / learning",
        ],
        answer: "have / been learning",
        hint: "Ongoing activity with 'how long' → present perfect continuous.",
        explanation:
          "'How long have you been learning English?' — 'how long' + present perfect continuous for the duration of an ongoing activity.",
      },
      {
        id: 2,
        type: "true_false",
        question:
          "'How long are you here?' is the correct way to ask about duration in the present.",
        options: ["True", "False"],
        answer: "False",
        hint: "Think about which tense asks about duration to the present.",
        explanation:
          "False. The correct form is 'How long have you been here?' Present continuous cannot be used for duration starting in the past.",
      },
      {
        id: 3,
        type: "fill_blank",
        question:
          "I've known her ______ ten years. (duration)",
        options: [],
        answer: "for",
        hint: "Use 'for' with a length of time.",
        explanation:
          "'I've known her for ten years' — 'for' is used with a duration (ten years). 'Since' would need a starting point (since 2014).",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange to ask 'how long' about a job:",
        options: ["how", "long", "have", "you", "worked", "here"],
        answer: "how long have you worked here",
        hint: "'Work' as a state can use simple present perfect.",
        explanation:
          "'How long have you worked here?' — with 'work', both simple and continuous are possible, but simple is more common when asking about the ongoing state.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "How long ______ she ______ for the bus? (activity in progress)",
        options: [
          "is / waiting",
          "has / been waiting",
          "did / wait",
          "does / wait",
        ],
        answer: "has / been waiting",
        hint: "Present perfect continuous for ongoing activity.",
        explanation:
          "'How long has she been waiting for the bus?' — present perfect continuous to ask about the duration of an activity that is still happening.",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which is the correct response to 'How long have you been here'?",
        options: [
          "I am here since two hours.",
          "I have been here for two hours.",
          "I am here for two hours.",
          "I here since two hours.",
        ],
        answer: "I have been here for two hours.",
        hint: "Use present perfect with 'for' for duration.",
        explanation:
          "'I have been here for two hours' — present perfect with 'for' + duration is the correct answer to a 'how long' question.",
      },
      {
        id: 7,
        type: "true_false",
        question:
          "'How long have you had this car?' uses present perfect correctly.",
        options: ["True", "False"],
        answer: "True",
        hint: "'Have' (possession) is a state verb.",
        explanation:
          "True. 'Have' (possession) is a state verb, so we use present perfect simple: 'How long have you had this car?' (NOT been having).",
      },
      {
        id: 8,
        type: "fill_blank",
        question:
          "She's been a doctor ______ 2005. (starting point)",
        options: [],
        answer: "since",
        hint: "Use 'since' with a point in time.",
        explanation:
          "'She's been a doctor since 2005' — 'since' is used with a specific starting point (2005), not a duration.",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "Which question is correct to ask about duration?",
        options: [
          "Since when do you live here?",
          "How long do you live here?",
          "How long have you been living here?",
          "From when are you living here?",
        ],
        answer: "How long have you been living here?",
        hint: "Duration to the present = present perfect.",
        explanation:
          "'How long have you been living here?' — correct. 'How long' questions about present duration require present perfect (simple or continuous).",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a 'how long' question about knowing someone:",
        options: ["how", "long", "have", "you", "known", "each", "other"],
        answer: "how long have you known each other",
        hint: "'Know' = state verb → present perfect simple.",
        explanation:
          "'How long have you known each other?' — 'know' is a state verb, so we use present perfect simple (not continuous) to ask about duration.",
      },
    ],
  },
  {
    id: 12,
    title: "for and since",
    category: "Tenses",
    section: "Present Perfect & Past",
    key_rule: "'For' = duration. 'Since' = starting point.",
    examples: [
      "I've been here for three hours.",
      "I've been here since 9 o'clock.",
      "She's worked there since 2018.",
    ],
    common_mistakes: [
      "Since three hours (❌) → For three hours (✓)",
    ],
    study_cards: [
      {
        title: "For — Duration",
        content:
          "'For' is used with a LENGTH of time: how long the action has lasted. It can be used with any tense, but with present perfect it connects the duration to the present.",
        examples: [
          "I've been waiting for two hours.",
          "She has worked here for five years.",
          "We've been friends for a long time.",
        ],
      },
      {
        title: "Since — Starting Point",
        content:
          "'Since' is used with a POINT IN TIME: when the action began. It is typically used with present perfect (or past perfect) because it looks back to a starting point.",
        examples: [
          "I've been here since 9 o'clock.",
          "She's worked there since 2018.",
          "He's been ill since Monday.",
        ],
      },
    ],
    listen_sentences: [
      "I've been learning French for two years.",
      "She's lived in this city since she was a child.",
      "He's been waiting since eight o'clock.",
      "We've been friends for over a decade.",
      "They haven't spoken to each other since the argument.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "I've lived here ______ 2010.",
        options: ["for", "since", "during", "from"],
        answer: "since",
        hint: "2010 is a point in time, not a duration.",
        explanation:
          "'Since 2010' — 2010 is a specific point in time (starting point). Use 'since' when you give the start of a period.",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "She's been studying ______ three hours. (duration, not starting point)",
        options: [],
        answer: "for",
        hint: "'Three hours' is a length of time.",
        explanation:
          "'She's been studying for three hours' — 'three hours' is a duration (length), so we use 'for'.",
      },
      {
        id: 3,
        type: "true_false",
        question:
          "'Since three hours' is correct English.",
        options: ["True", "False"],
        answer: "False",
        hint: "'Three hours' is a duration, not a starting point.",
        explanation:
          "False. 'Three hours' is a duration, so you must say 'for three hours'. 'Since' needs a point in time: 'since 3 o'clock'.",
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "He hasn't eaten anything ______ this morning.",
        options: ["for", "since", "during", "while"],
        answer: "since",
        hint: "'This morning' = a starting point.",
        explanation:
          "'Since this morning' — 'this morning' is a point in time (when he last ate), so 'since' is correct.",
      },
      {
        id: 5,
        type: "drag_order",
        question: "Arrange to use 'for' correctly:",
        options: ["i", "have", "known", "him", "for", "many", "years"],
        answer: "i have known him for many years",
        hint: "'Many years' is a duration.",
        explanation:
          "'I have known him for many years' — 'many years' is a duration, so 'for' is correct.",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence is correct?",
        options: [
          "I've been waiting since one hour.",
          "I've been waiting for an hour.",
          "I've been waiting during one hour.",
          "I'm waiting since one hour.",
        ],
        answer: "I've been waiting for an hour.",
        hint: "'One hour' is a duration.",
        explanation:
          "'I've been waiting for an hour' — 'one hour' is a duration, so 'for' is correct. 'Since' needs a clock time.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "They've been married ______ twenty years. (duration)",
        options: [],
        answer: "for",
        hint: "Twenty years = length of time.",
        explanation:
          "'They've been married for twenty years' — 'twenty years' is a length of time, so use 'for'.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'I've known her since we were at school together' is correct.",
        options: ["True", "False"],
        answer: "True",
        hint: "'Since' can be followed by a clause.",
        explanation:
          "True. 'Since' can be followed by a time clause: 'since we were at school' gives the starting point of the friendship.",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "Which is correct? Choose the grammatically accurate option.",
        options: [
          "She's been tired since a long time.",
          "She's been tired for a long time.",
          "She's been tired during a long time.",
          "She's been tired while a long time.",
        ],
        answer: "She's been tired for a long time.",
        hint: "'A long time' is a duration.",
        explanation:
          "'For a long time' is correct — 'a long time' refers to a duration (length), so 'for' is the right preposition.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange using 'since':",
        options: ["he", "has", "been", "a", "teacher", "since", "2012"],
        answer: "he has been a teacher since 2012",
        hint: "2012 is a point in time → use 'since'.",
        explanation:
          "'He has been a teacher since 2012' — 2012 is the starting point of his career as a teacher, so 'since' is correct.",
      },
    ],
  },
  {
    id: 13,
    title: "Present perfect and past 1",
    category: "Tenses",
    section: "Present Perfect & Past",
    key_rule:
      "Use past simple with finished time expressions.",
    examples: [
      "I saw him yesterday.",
      "She lived in Paris in 2010.",
      "Have you seen him recently?",
    ],
    common_mistakes: [
      "I have seen him yesterday (❌) — 'yesterday' = finished time → use past simple",
    ],
    study_cards: [
      {
        title: "Finished Time = Past Simple",
        content:
          "When the time period is finished and you specify it (yesterday, last week, in 2010, three days ago, this morning when it is now afternoon), use past simple.",
        examples: [
          "I saw him yesterday. (finished)",
          "She lived in Paris in 2010. (finished year)",
          "Did you call me an hour ago? (finished time)",
        ],
      },
      {
        title: "Unfinished Time = Present Perfect",
        content:
          "When the time period is NOT finished (today, this week, this year, recently, ever, so far), use present perfect.",
        examples: [
          "I've seen him today. (today is not finished)",
          "Have you seen him recently?",
          "She's made three calls this week.",
        ],
      },
    ],
    listen_sentences: [
      "I saw a great film last night.",
      "Have you eaten anything today?",
      "She called me three times this morning.",
      "We met in 2015 at a conference.",
      "Has he arrived yet?",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Which is correct? 'I ______ him last week.'",
        options: [
          "have seen",
          "saw",
          "have been seeing",
          "see",
        ],
        answer: "saw",
        hint: "'Last week' is a finished time expression.",
        explanation:
          "'I saw him last week' — 'last week' is a finished time, so past simple is required.",
      },
      {
        id: 2,
        type: "true_false",
        question:
          "'I have visited Rome last summer' is a grammatically correct sentence.",
        options: ["True", "False"],
        answer: "False",
        hint: "'Last summer' is a finished time.",
        explanation:
          "False. 'Last summer' is a finished time, so you must use past simple: 'I visited Rome last summer.'",
      },
      {
        id: 3,
        type: "fill_blank",
        question:
          "______ you see that new film yet? (it's still in cinemas)",
        options: [],
        answer: "Have",
        hint: "Unfinished relevance → present perfect.",
        explanation:
          "'Have you seen that new film yet?' — 'yet' and an unfinished context call for present perfect.",
      },
      {
        id: 4,
        type: "error_correction",
        question: "Which sentence is correct?",
        options: [
          "I have bought this car three years ago.",
          "I bought this car three years ago.",
          "I have been buying this car three years ago.",
          "Three years ago I have bought this car.",
        ],
        answer: "I bought this car three years ago.",
        hint: "'Three years ago' = finished time.",
        explanation:
          "'I bought this car three years ago' — 'ago' always signals a finished past time, requiring past simple.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "______ she passed her driving test this morning. (it's still morning)",
        options: [
          "She passed",
          "She has passed",
          "She was passing",
          "She pass",
        ],
        answer: "She has passed",
        hint: "'This morning' when morning is not finished = present perfect.",
        explanation:
          "'She has passed her driving test this morning' — if it's still morning, 'this morning' is an unfinished time, so present perfect is used.",
      },
      {
        id: 6,
        type: "drag_order",
        question: "Arrange a past simple sentence with a finished time:",
        options: ["they", "moved", "to", "london", "in", "2019"],
        answer: "they moved to london in 2019",
        hint: "'In 2019' is a specific finished year.",
        explanation:
          "'They moved to London in 2019' — 'in 2019' is a finished time, so past simple is correct.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "He ______ (work) for that company from 2010 to 2015.",
        options: [],
        answer: "worked",
        hint: "Both start and end points are in the past.",
        explanation:
          "'He worked for that company from 2010 to 2015' — the period is completely finished (from X to Y in the past), so past simple is correct.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'Have you seen the new exhibition? It opened last Tuesday' — the tense change is logical here.",
        options: ["True", "False"],
        answer: "True",
        hint: "First = life experience (no time given), second = specific event.",
        explanation:
          "True. 'Have you seen' (present perfect — no specific time, experience). 'It opened last Tuesday' (past simple — specific finished time).",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "Which time expression REQUIRES past simple?",
        options: [
          "recently",
          "so far",
          "in 1995",
          "ever",
        ],
        answer: "in 1995",
        hint: "Which is a specific finished time?",
        explanation:
          "'In 1995' is a specific finished time, requiring past simple. 'Recently', 'so far', and 'ever' are used with present perfect.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a present perfect sentence (no specific past time):",
        options: ["i", "have", "never", "tried", "sushi"],
        answer: "i have never tried sushi",
        hint: "'Never' = life experience → present perfect.",
        explanation:
          "'I have never tried sushi' — no specific finished time given, life experience → present perfect with 'never'.",
      },
    ],
  },
  {
    id: 14,
    title: "Present perfect and past 2",
    category: "Tenses",
    section: "Present Perfect & Past",
    key_rule:
      "News/new information = present perfect. Details = past simple.",
    examples: [
      "There's been an accident. → It happened on the motorway.",
      "I've broken my leg. → I fell off my bike.",
    ],
    common_mistakes: ["Mixing tenses without logic"],
    study_cards: [
      {
        title: "Introducing News vs Giving Details",
        content:
          "When introducing new information or announcing something, use present perfect. When giving specific details (time, place, manner), switch to past simple.",
        examples: [
          "There's been an accident. (announce) It happened on the motorway. (detail)",
          "I've lost my wallet. (news) I left it in the café. (detail)",
          "She's won the prize. (announce) She won it last night. (detail)",
        ],
      },
      {
        title: "The Pattern in Conversations",
        content:
          "In conversations, the first mention of news uses present perfect. Follow-up questions and answers about specifics use past simple.",
        examples: [
          "A: I've just seen Mark. B: Oh really? Where did you see him?",
          "A: Have you heard? She's got the job! B: When did she find out?",
          "A: The boss has resigned. B: When did he resign?",
        ],
      },
    ],
    listen_sentences: [
      "I've just heard some amazing news.",
      "She's broken her wrist — it happened during training.",
      "There's been a power cut. It started at midnight.",
      "He's lost his job. The company went bankrupt.",
      "We've sold the house. We agreed on a price yesterday.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question:
          "A: '______ an accident.' B: 'What happened?' — Choose the best sentence for A.",
        options: [
          "There was",
          "There has been",
          "There had been",
          "There is been",
        ],
        answer: "There has been",
        hint: "Introducing news = present perfect.",
        explanation:
          "'There has been an accident' — introducing new information uses present perfect. The follow-up 'What happened?' switches to past simple.",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "I've hurt my foot. I ______ (trip) on the stairs. (detail after news)",
        options: [],
        answer: "tripped",
        hint: "Details after present perfect use past simple.",
        explanation:
          "'I tripped on the stairs' — after announcing the news in present perfect ('I've hurt my foot'), the detail of HOW it happened uses past simple.",
      },
      {
        id: 3,
        type: "true_false",
        question:
          "'Have you heard? Sarah has got engaged! She met him only three months ago.' — The tenses are used correctly here.",
        options: ["True", "False"],
        answer: "True",
        hint: "News first (present perfect), then details (past simple).",
        explanation:
          "True. 'Has got engaged' = news/present perfect. 'She met him' = detail with implied finished time → past simple. Correct pattern.",
      },
      {
        id: 4,
        type: "error_correction",
        question: "Which conversation is grammatically correct?",
        options: [
          "A: Tom broke his arm. B: Oh no! How did it happen?",
          "A: Tom has broken his arm. B: Oh no! How did it happen?",
          "A: Tom had broken his arm. B: Oh no! How did it happen?",
          "A: Tom breaks his arm. B: Oh no! How did it happen?",
        ],
        answer: "A: Tom has broken his arm. B: Oh no! How did it happen?",
        hint: "Announcing news = present perfect. Follow-up question = past simple.",
        explanation:
          "A uses present perfect to announce news. B's follow-up question naturally uses past simple to ask for specific details. This is the correct pattern.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "A: '______ my keys!' B: 'Where did you last have them?'",
        options: [
          "I lost",
          "I've lost",
          "I was losing",
          "I lose",
        ],
        answer: "I've lost",
        hint: "Announcing a current problem = present perfect.",
        explanation:
          "'I've lost my keys!' — present perfect announces a current problem with present relevance. The reply naturally uses past simple for a specific past question.",
      },
      {
        id: 6,
        type: "drag_order",
        question: "Arrange the news announcement correctly:",
        options: ["she", "has", "won", "the", "gold", "medal"],
        answer: "she has won the gold medal",
        hint: "Announcing a recent achievement = present perfect.",
        explanation:
          "'She has won the gold medal' — announcing recent news/achievement uses present perfect.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "A: I've passed my exam! B: Brilliant! When ______ you ______ (find out)?",
        options: [],
        answer: "did / find",
        hint: "Asking for specific details uses past simple.",
        explanation:
          "'When did you find out?' — the follow-up question about a specific past moment uses past simple.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "You can say 'There's been a storm. It happened yesterday.' — both tenses are correctly used.",
        options: ["True", "False"],
        answer: "True",
        hint: "Announce with present perfect, give details with past simple.",
        explanation:
          "True. 'There's been a storm' announces the news (present perfect). 'It happened yesterday' gives the specific time (past simple). Correct pattern.",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "Which sentence introduces news INCORRECTLY?",
        options: [
          "Somebody has stolen my bike!",
          "Have you heard? She's got a new job!",
          "Somebody stole my bike last Tuesday!",
          "There's been a change of plan.",
        ],
        answer: "Somebody stole my bike last Tuesday!",
        hint: "This sentence introduces specific details, not just news.",
        explanation:
          "'Somebody stole my bike last Tuesday!' gives a specific finished time ('last Tuesday'), so it uses past simple — which is appropriate for giving details, not just announcing news.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a follow-up detail sentence:",
        options: ["it", "happened", "near", "the", "town", "centre"],
        answer: "it happened near the town centre",
        hint: "Giving location details after news = past simple.",
        explanation:
          "'It happened near the town centre' — this detail sentence correctly uses past simple after a present perfect news announcement.",
      },
    ],
  },
  {
    id: 15,
    title: "Past perfect (I had done)",
    category: "Tenses",
    section: "Present Perfect & Past",
    key_rule:
      "Past perfect = the earlier of two past actions.",
    examples: [
      "When I arrived, the film had already started.",
      "She had never seen snow before going to Canada.",
      "I was hungry because I hadn't eaten.",
    ],
    common_mistakes: [
      "When I arrived, the film already started (❌) → had already started (✓)",
    ],
    study_cards: [
      {
        title: "Forming and Using Past Perfect",
        content:
          "Form: had + past participle. Use it for the EARLIER of two past events — the action that happened first. The later event uses past simple.",
        examples: [
          "When I arrived, the film had already started. (film started first)",
          "She passed because she had studied hard.",
          "I was tired because I hadn't slept well.",
        ],
      },
      {
        title: "Past Perfect with Before/After/When/By the time",
        content:
          "Past perfect is common with: before, after, when, by the time, because, as soon as — to show which event came first.",
        examples: [
          "By the time we arrived, they had left.",
          "After she had eaten, she went for a walk.",
          "I hadn't seen him before that meeting.",
        ],
      },
    ],
    listen_sentences: [
      "When she woke up, the snow had stopped.",
      "He had never flown before his trip to Australia.",
      "By the time I called, she had already left.",
      "I recognised the place because I had been there before.",
      "They had just sat down when the alarm went off.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question:
          "When I arrived at the cinema, the film ______ already ______.",
        options: [
          "already started",
          "had already started",
          "has already started",
          "was already starting",
        ],
        answer: "had already started",
        hint: "The film started BEFORE I arrived.",
        explanation:
          "'The film had already started' — past perfect shows the film started before my arrival (the earlier of two past events).",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "She was exhausted because she ______ (not sleep) for two days.",
        options: [],
        answer: "hadn't slept",
        hint: "Past perfect negative: hadn't + past participle.",
        explanation:
          "'She hadn't slept for two days' — past perfect shows the earlier condition (lack of sleep) that caused the later result (exhaustion).",
      },
      {
        id: 3,
        type: "true_false",
        question:
          "'By the time we arrived, they left' is correct when they left before we arrived.",
        options: ["True", "False"],
        answer: "False",
        hint: "Which action happened first?",
        explanation:
          "False. If 'they left' happened BEFORE 'we arrived', the earlier action needs past perfect: 'By the time we arrived, they had left.'",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange to show the earlier past action:",
        options: ["he", "had", "never", "seen", "the", "sea", "before"],
        answer: "he had never seen the sea before",
        hint: "Past perfect for a first-ever experience up to that past moment.",
        explanation:
          "'He had never seen the sea before' — past perfect shows that up to that moment in the past, he had never had this experience.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "I didn't need to eat because I ______ already ______.",
        options: [
          "already ate",
          "had already eaten",
          "have already eaten",
          "was already eating",
        ],
        answer: "had already eaten",
        hint: "Eating happened before the decision not to eat.",
        explanation:
          "'I had already eaten' — past perfect shows the earlier event (eating) that explains the later situation (not needing to eat).",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence correctly uses past perfect?",
        options: [
          "When she arrived, he already left.",
          "When she arrived, he has already left.",
          "When she arrived, he had already left.",
          "When she arrived, he was already left.",
        ],
        answer: "When she arrived, he had already left.",
        hint: "He left BEFORE she arrived — use past perfect.",
        explanation:
          "'He had already left' — past perfect correctly shows that his leaving happened before her arrival.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "After they ______ (eat), they went for a walk.",
        options: [],
        answer: "had eaten",
        hint: "Eating happened first, before the walk.",
        explanation:
          "'After they had eaten, they went for a walk' — past perfect for the action that happened first (eating) before the past simple action (went for a walk).",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "Past perfect is always necessary when two past events are mentioned.",
        options: ["True", "False"],
        answer: "False",
        hint: "Think about when 'after' and 'before' make the order clear.",
        explanation:
          "False. When words like 'after' or 'before' make the sequence clear, past simple can be used: 'After she ate, she left.' Past perfect is used for emphasis or clarity.",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "I ______ (never / visit) England before my trip in 2022.",
        options: [
          "never visited",
          "had never visited",
          "have never visited",
          "was never visiting",
        ],
        answer: "had never visited",
        hint: "The trip was a specific past event; 'before' signals past perfect.",
        explanation:
          "'I had never visited England before my trip in 2022' — past perfect with 'never' for a first experience up to that past moment.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange using past perfect for the earlier action:",
        options: ["the", "guests", "had", "left", "before", "she", "arrived"],
        answer: "the guests had left before she arrived",
        hint: "Guests left first → past perfect. She arrived second → past simple.",
        explanation:
          "'The guests had left before she arrived' — past perfect ('had left') for the first action, past simple ('arrived') for the second.",
      },
    ],
  },
  {
    id: 16,
    title: "Past perfect continuous (I had been doing)",
    category: "Tenses",
    section: "Present Perfect & Past",
    key_rule:
      "Activity in progress before a past moment.",
    examples: [
      "I was tired because I'd been working all day.",
      "How long had you been waiting when the bus arrived?",
      "Her eyes were red — she'd been crying.",
    ],
    common_mistakes: ["Forgetting 'had been'"],
    study_cards: [
      {
        title: "Forming Past Perfect Continuous",
        content:
          "Form: had + been + verb-ing. Use to show an activity that was IN PROGRESS before a specific past moment. Often explains why something was the case at that moment.",
        examples: [
          "I was tired because I'd been working all day.",
          "She'd been running — her face was red.",
          "He was dirty because he'd been gardening.",
        ],
      },
      {
        title: "'How long' with Past Perfect Continuous",
        content:
          "'How long had + subject + been + verb-ing' to ask about the duration of an activity before a past moment.",
        examples: [
          "How long had you been waiting when the bus arrived?",
          "How long had they been arguing before she left?",
          "I had been studying for three hours when the power went out.",
        ],
      },
    ],
    listen_sentences: [
      "She'd been practising for months before the competition.",
      "When the alarm rang, I'd been asleep for only an hour.",
      "His hands were covered in paint because he'd been decorating.",
      "How long had she been driving before she stopped for a break?",
      "I'd been waiting for an hour when he finally called.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question:
          "I was exhausted because I ______ for twelve hours.",
        options: [
          "worked",
          "had worked",
          "had been working",
          "was working",
        ],
        answer: "had been working",
        hint: "The activity was ongoing before the past moment of exhaustion.",
        explanation:
          "'I had been working for twelve hours' — past perfect continuous shows the ongoing activity that caused the past state (exhaustion).",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "Her eyes were red because she ______ (cry).",
        options: [],
        answer: "had been crying",
        hint: "Form: had + been + verb-ing.",
        explanation:
          "'She had been crying' — past perfect continuous explains the past state (red eyes) by describing the activity that had been happening before that moment.",
      },
      {
        id: 3,
        type: "true_false",
        question:
          "'How long had you been waiting when the bus arrived?' is grammatically correct.",
        options: ["True", "False"],
        answer: "True",
        hint: "Past perfect continuous for duration before a past moment.",
        explanation:
          "True. 'How long had you been waiting' — past perfect continuous question about duration before the bus arrived (the past moment).",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange to explain a past situation using past perfect continuous:",
        options: ["he", "was", "tired", "because", "he", "had", "been", "running"],
        answer: "he was tired because he had been running",
        hint: "Running caused tiredness — running came first.",
        explanation:
          "'He was tired because he had been running' — past perfect continuous explains the past state (tired) through a preceding ongoing activity (running).",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "How long ______ she ______ when the accident happened?",
        options: [
          "was / driving",
          "had / been driving",
          "did / drive",
          "has / been driving",
        ],
        answer: "had / been driving",
        hint: "Duration before a past event = past perfect continuous.",
        explanation:
          "'How long had she been driving when the accident happened?' — past perfect continuous question about duration before a specific past moment.",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence correctly describes an activity before a past moment?",
        options: [
          "She was happy because she has been singing.",
          "She was happy because she had been singing.",
          "She was happy because she was been singing.",
          "She was happy because she been singing.",
        ],
        answer: "She was happy because she had been singing.",
        hint: "Form: had + been + verb-ing.",
        explanation:
          "'She had been singing' — past perfect continuous with had + been + verb-ing correctly shows the ongoing activity before the past state.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "When I got home, dinner ______ (cook) for over an hour.",
        options: [],
        answer: "had been cooking",
        hint: "The cooking was ongoing before I got home.",
        explanation:
          "'Dinner had been cooking for over an hour' — past perfect continuous shows an ongoing process that had been happening before the arrival home.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'I had been knowing him for years' is correct for a state verb.",
        options: ["True", "False"],
        answer: "False",
        hint: "State verbs cannot be used in continuous forms.",
        explanation:
          "False. 'Know' is a state verb and cannot be used in continuous forms. The correct form is 'I had known him for years.'",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "The floor was wet because someone ______.",
        options: [
          "had mopped it",
          "had been mopping it",
          "mopped it",
          "Both A and B are possible",
        ],
        answer: "Both A and B are possible",
        hint: "Simple = action completed, continuous = action in progress.",
        explanation:
          "Both are possible: 'had mopped' (completed action, result visible) and 'had been mopping' (activity in progress, just stopped). Both explain the wet floor.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a past perfect continuous sentence with 'for':",
        options: ["they", "had", "been", "arguing", "for", "hours"],
        answer: "they had been arguing for hours",
        hint: "Duration + past perfect continuous = had + been + verb-ing.",
        explanation:
          "'They had been arguing for hours' — past perfect continuous with 'for' + duration shows how long the activity had been going on before a past moment.",
      },
    ],
  },
  {
    id: 17,
    title: "have and have got",
    category: "Tenses",
    section: "Present Perfect & Past",
    key_rule:
      "'Have got' = possession (mainly British). 'Have' = more universal.",
    examples: [
      "I've got a car. / I have a car.",
      "Have you got a pen? / Do you have a pen?",
      "She hasn't got any money.",
    ],
    common_mistakes: [
      "I have got eaten (❌) — only for possession",
    ],
    study_cards: [
      {
        title: "'Have got' for Possession",
        content:
          "'Have got' is mainly used in British English for possession, relationships, illness, and characteristics. It is NOT used for actions (eating, having a shower, etc.). Question: Have you got…? Negative: haven't got.",
        examples: [
          "I've got a headache. (illness)",
          "She's got two brothers. (relationship)",
          "Have you got a moment? (availability)",
        ],
      },
      {
        title: "'Have' for Actions",
        content:
          "For actions, use 'have' (not 'have got'): have breakfast, have a bath, have a good time, have a look. In these cases, 'have' is a main verb and forms questions/negatives with 'do'.",
        examples: [
          "I have breakfast at 8. (NOT I've got breakfast)",
          "Did you have a good time? (action, past)",
          "Do you have a shower every morning? (habit)",
        ],
      },
    ],
    listen_sentences: [
      "I've got an appointment at three o'clock.",
      "Do you have any brothers or sisters?",
      "She hasn't got enough time to finish.",
      "Have you got a moment to talk?",
      "He has a really interesting job.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Which is a correct British English way to say this?",
        options: [
          "Do you got a pen?",
          "Have you got a pen?",
          "Have you a pen?",
          "Got you a pen?",
        ],
        answer: "Have you got a pen?",
        hint: "British English: Have you got + noun?",
        explanation:
          "'Have you got a pen?' — correct British English question form for possession. 'Do you have a pen?' is also correct (more universal/American).",
      },
      {
        id: 2,
        type: "true_false",
        question:
          "'I've got a shower every morning' is correct English.",
        options: ["True", "False"],
        answer: "False",
        hint: "'Have a shower' is an action, not possession.",
        explanation:
          "False. 'Have a shower' is an action, not possession. You cannot use 'have got' for actions. Say 'I have a shower every morning' or 'I take a shower every morning.'",
      },
      {
        id: 3,
        type: "fill_blank",
        question:
          "She ______ got three cats. (British English, positive statement)",
        options: [],
        answer: "has",
        hint: "Third person singular of 'have got'.",
        explanation:
          "'She has got three cats' — 'have got' uses 'has' for third-person singular. Note the contraction: 'She's got three cats.'",
      },
      {
        id: 4,
        type: "multiple_choice",
        question:
          "They ______ a beautiful house in the countryside.",
        options: [
          "have got / have",
          "has got",
          "are having",
          "do have",
        ],
        answer: "have got / have",
        hint: "Both 'have got' and 'have' work for possession.",
        explanation:
          "Both 'have got' and 'have' are correct for possession: 'They've got a beautiful house' / 'They have a beautiful house.' Both are acceptable.",
      },
      {
        id: 5,
        type: "drag_order",
        question: "Arrange a negative 'have got' sentence:",
        options: ["she", "hasn't", "got", "any", "cash"],
        answer: "she hasn't got any cash",
        hint: "Negative: hasn't got.",
        explanation:
          "'She hasn't got any cash' — 'have got' negative in third person singular: hasn't got. This is mainly British English.",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence is correct?",
        options: [
          "I have got a good time at the party.",
          "I had a good time at the party.",
          "I've got a good time at the party.",
          "I got a good time at the party.",
        ],
        answer: "I had a good time at the party.",
        hint: "'Have a good time' is an action expression.",
        explanation:
          "'I had a good time at the party' — 'have a good time' is an action/experience, not possession. 'Have got' cannot be used here.",
      },
      {
        id: 7,
        type: "true_false",
        question:
          "'Do you have a car?' and 'Have you got a car?' mean the same thing.",
        options: ["True", "False"],
        answer: "True",
        hint: "Both ask about possession.",
        explanation:
          "True. Both forms ask about possession and mean the same thing. 'Do you have' is more common in American English, 'Have you got' in British English.",
      },
      {
        id: 8,
        type: "fill_blank",
        question:
          "______ you got any plans for this weekend? (British English)",
        options: [],
        answer: "Have",
        hint: "Question form: Have + subject + got?",
        explanation:
          "'Have you got any plans for this weekend?' — British English question form with 'have got' for future plans/arrangements.",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "Which sentence uses 'have got' correctly?",
        options: [
          "I've got breakfast at eight.",
          "She's got a terrible headache.",
          "He's got a walk in the park.",
          "We've got dinner with friends.",
        ],
        answer: "She's got a terrible headache.",
        hint: "Headache = a state/condition, which can use 'have got'.",
        explanation:
          "'She's got a terrible headache' — headache is a state/condition, so 'have got' is correct. 'Have breakfast/dinner' are actions, not possession, so they shouldn't use 'have got'.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange: Ask about brothers/sisters using 'have got':",
        options: ["have", "you", "got", "any", "brothers", "or", "sisters"],
        answer: "have you got any brothers or sisters",
        hint: "Question: Have + you + got + ...",
        explanation:
          "'Have you got any brothers or sisters?' — correct British English question with 'have got' for family relationships.",
      },
    ],
  },
  {
    id: 18,
    title: "used to (do)",
    category: "Tenses",
    section: "Present Perfect & Past",
    key_rule:
      "'Used to' = past habit or state that is no longer true.",
    examples: [
      "I used to smoke, but I stopped.",
      "She used to live in London.",
      "Did you use to play football?",
    ],
    common_mistakes: [
      "I use to go (❌) → I used to go (✓)",
    ],
    study_cards: [
      {
        title: "Forming 'used to'",
        content:
          "Positive: used to + base verb. Negative: didn't use to + base verb. Question: Did you use to + base verb? Note: in questions and negatives, write 'use to' (not 'used to') because 'did' already marks the past.",
        examples: [
          "I used to eat meat, but I'm vegetarian now.",
          "I didn't use to like vegetables.",
          "Did you use to play a sport?",
        ],
      },
      {
        title: "'Used to' vs Past Simple",
        content:
          "'Used to' emphasises that something was habitual or a state in the past but IS NO LONGER TRUE now. It cannot be used for a single past event or a specific number of times.",
        examples: [
          "I used to walk to school. (habit, no longer do it)",
          "I walked to school yesterday. (single event — NOT 'used to')",
          "They used to be very close friends. (past state, changed)",
        ],
      },
    ],
    listen_sentences: [
      "I used to be afraid of the dark when I was small.",
      "She used to walk to school every day.",
      "Did you use to have long hair?",
      "He didn't use to like coffee.",
      "We used to spend every summer at the beach.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "I ______ smoke a lot, but I gave it up ten years ago.",
        options: [
          "use to",
          "used to",
          "was used to",
          "am used to",
        ],
        answer: "used to",
        hint: "Past habit, no longer happening.",
        explanation:
          "'I used to smoke' — past habit that is no longer true. Note the spelling: 'used to' in positive statements.",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "______ you use to have a bicycle when you were a child?",
        options: [],
        answer: "Did",
        hint: "Questions with 'used to' use 'did'.",
        explanation:
          "'Did you use to have a bicycle?' — in questions, use 'did' + 'use to' (not 'used to'). 'Did' marks the past tense.",
      },
      {
        id: 3,
        type: "true_false",
        question:
          "'I use to go to the gym' is correct for a past habit.",
        options: ["True", "False"],
        answer: "False",
        hint: "Check the spelling in positive statements.",
        explanation:
          "False. In positive statements, it must be 'I used to go to the gym' — with the -d ending. 'Use to' (without -d) only appears after 'did' in questions and negatives.",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange to describe a past habit:",
        options: ["she", "used", "to", "play", "the", "piano"],
        answer: "she used to play the piano",
        hint: "'Used to' + base verb for past habit.",
        explanation:
          "'She used to play the piano' — describes a past habit or regular activity that is no longer happening.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "Which sentence CANNOT use 'used to'?",
        options: [
          "I used to live in Rome.",
          "She used to be shy.",
          "I used to break my leg last year.",
          "They used to visit us every Sunday.",
        ],
        answer: "I used to break my leg last year.",
        hint: "'Used to' cannot describe a single event.",
        explanation:
          "'I used to break my leg' is wrong because breaking your leg is a single event, not a habit. The correct form is 'I broke my leg last year.'",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence is correct?",
        options: [
          "He didn't used to eat vegetables.",
          "He didn't use to eat vegetables.",
          "He use to not eat vegetables.",
          "He wasn't used to eat vegetables.",
        ],
        answer: "He didn't use to eat vegetables.",
        hint: "After 'did', write 'use to' not 'used to'.",
        explanation:
          "'He didn't use to eat vegetables' — in negatives, 'did' + 'use to' (not 'used to'). The past is marked by 'didn't'.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "There ______ to be a cinema here, but they knocked it down.",
        options: [],
        answer: "used",
        hint: "'There used to be' = something existed in the past.",
        explanation:
          "'There used to be a cinema here' — 'used to' describes a past state (the cinema existed) that is no longer true.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'I used to go to Paris last summer' is correct.",
        options: ["True", "False"],
        answer: "False",
        hint: "'Used to' cannot be used with specific past times.",
        explanation:
          "False. 'Used to' cannot be combined with specific past time expressions like 'last summer'. Say 'I went to Paris last summer.'",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "My grandmother ______ tell us stories every night when we visited.",
        options: [
          "would / used to",
          "will",
          "has used to",
          "is used to",
        ],
        answer: "would / used to",
        hint: "Both 'used to' and 'would' can describe past habits.",
        explanation:
          "Both 'used to tell' and 'would tell' are correct for a past habitual action. 'Would' (for habits) and 'used to' (for habits and states) are often interchangeable for repeated past actions.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a negative 'used to' sentence:",
        options: ["i", "didn't", "use", "to", "like", "spicy", "food"],
        answer: "i didn't use to like spicy food",
        hint: "Negative: didn't use to + base verb.",
        explanation:
          "'I didn't use to like spicy food' — negative form with 'didn't use to' (note: 'use to', not 'used to', after 'didn't').",
      },
    ],
  },
];

export default presentPerfectAndPast;
