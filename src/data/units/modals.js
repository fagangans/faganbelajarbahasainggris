const modals = [
  {
    id: 26,
    title: "can, could and (be) able to",
    category: "Modals",
    section: "Modals",
    key_rule: "'Can' = ability now. 'Could' = past. 'Be able to' = all tenses.",
    examples: [
      "She can swim very fast.",
      "He could play piano as a child.",
      "I wasn't able to finish in time.",
      "Will you be able to come?",
    ],
    common_mistakes: ["I can to swim (❌) → I can swim (✓)"],
    study_cards: [
      {
        title: "Can and Could for Ability",
        content:
          "'Can' expresses present ability. 'Could' expresses past ability. Neither takes 'to' — they are followed directly by the base verb.",
        examples: [
          "She can speak three languages. (now)",
          "He could run very fast as a boy. (past ability)",
          "I can't hear you — can you speak louder?",
        ],
      },
      {
        title: "'Be able to' for All Tenses",
        content:
          "'Be able to' is used in tenses where 'can/could' is not possible: future, perfect, infinitive. It expresses ability or managed achievement.",
        examples: [
          "Will you be able to come to the meeting?",
          "She's never been able to eat shellfish.",
          "I was able to finish in time. (on one occasion — not could)",
        ],
      },
    ],
    listen_sentences: [
      "Can you help me with this problem?",
      "She couldn't sleep because of the noise.",
      "Will you be able to finish by Friday?",
      "He's never been able to understand her.",
      "I was able to get a seat on the train.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "I ______ swim when I was five years old.",
        options: ["can", "could", "am able to", "will be able to"],
        answer: "could",
        hint: "'Could' for past ability.",
        explanation:
          "'Could' is used for general past ability. 'I could swim when I was five' means it was a general ability at that time.",
      },
      {
        id: 2,
        type: "fill_blank",
        question: "______ you speak any foreign languages? (present ability)",
        options: [],
        answer: "Can",
        hint: "'Can' for present ability — no 'to' after it.",
        explanation:
          "'Can you speak any foreign languages?' — 'can' for present ability. No 'to' is needed after modal verbs.",
      },
      {
        id: 3,
        type: "true_false",
        question: "'I can to drive' is correct English.",
        options: ["True", "False"],
        answer: "False",
        hint: "Modal verbs are followed by base verb (no 'to').",
        explanation:
          "False. Modal verbs like 'can' are always followed by the BASE verb without 'to'. Correct: 'I can drive.'",
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "After the operation, she ______ walk again.",
        options: ["could", "can", "was able to", "is able to"],
        answer: "was able to",
        hint: "'Was able to' for a specific achievement on one occasion.",
        explanation:
          "'Was able to walk again' — for a specific achievement (managed to), use 'was able to', not 'could'. 'Could' is for general past ability.",
      },
      {
        id: 5,
        type: "drag_order",
        question: "Arrange a future ability sentence:",
        options: ["will", "you", "be", "able", "to", "come", "tomorrow"],
        answer: "will you be able to come tomorrow",
        hint: "Future ability: will + be able to + base verb.",
        explanation:
          "'Will you be able to come tomorrow?' — 'be able to' is used with 'will' because 'can' has no future form.",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence is correct?",
        options: [
          "She has always could swim.",
          "She has always been able to swim.",
          "She always can swim.",
          "She could always to swim.",
        ],
        answer: "She has always been able to swim.",
        hint: "'Can' has no perfect form — use 'be able to'.",
        explanation:
          "'She has always been able to swim' — 'can' has no perfect form, so 'have been able to' is used instead.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "I'm sorry, I ______ come to the party last night. (past, specific occasion, inability)",
        options: [],
        answer: "wasn't able to",
        hint: "Specific occasion in the past, inability.",
        explanation:
          "'I wasn't able to come' — for a specific past occasion, use 'wasn't able to'. 'Couldn't' is also possible here.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'Could' can be used for a specific achievement on one occasion in the past.",
        options: ["True", "False"],
        answer: "False",
        hint: "For one specific achievement, we prefer 'was/were able to'.",
        explanation:
          "False. For a specific achievement on one past occasion, use 'was/were able to'. 'Could' is for general ability: 'He could run fast as a boy' (general).",
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "I've never ______ to understand his handwriting.",
        options: ["could", "can", "been able", "be able"],
        answer: "been able",
        hint: "After 'have/has never', use 'been able to'.",
        explanation:
          "'I've never been able to understand' — present perfect + 'been able to'. 'Can' has no perfect form.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a sentence about past general ability:",
        options: ["she", "could", "play", "chess", "at", "age", "six"],
        answer: "she could play chess at age six",
        hint: "'Could' + base verb for general past ability.",
        explanation:
          "'She could play chess at age six' — 'could' for general past ability (she had this skill at that age).",
      },
    ],
  },
  {
    id: 27,
    title: "could (do) and could have (done)",
    category: "Modals",
    section: "Modals",
    key_rule:
      "'Could do' = possibility/suggestion. 'Could have done' = past possibility not taken.",
    examples: [
      "You could try calling him.",
      "We could have taken a taxi.",
      "She could have been a doctor.",
    ],
    common_mistakes: ["You could have went (❌) → could have gone (✓)"],
    study_cards: [
      {
        title: "'Could' for Possibility and Suggestion",
        content:
          "'Could' is used to express present or future possibility, or to make suggestions. It is less certain than 'can'.",
        examples: [
          "You could ask the teacher for help. (suggestion)",
          "It could rain later. (possibility)",
          "We could go to the cinema if you like.",
        ],
      },
      {
        title: "'Could have done' for Unrealised Past Possibility",
        content:
          "'Could have + past participle' talks about something that was possible in the past but didn't happen. Often used for criticism or missed opportunities.",
        examples: [
          "You could have called — I was worried! (didn't call, but could have)",
          "She could have won the race. (didn't win, but had the ability)",
          "We could have taken the bus. (didn't, but it was possible)",
        ],
      },
    ],
    listen_sentences: [
      "You could have told me earlier.",
      "It could be the answer you're looking for.",
      "She could have been a concert pianist.",
      "You could try a different approach.",
      "He could have avoided the accident.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "You ______ asked me for help — I was right there!",
        options: ["could", "could have", "should", "might"],
        answer: "could have",
        hint: "Something that was possible in the past but didn't happen.",
        explanation:
          "'You could have asked me' — 'could have + past participle' for something that was possible in the past but didn't happen (mild criticism).",
      },
      {
        id: 2,
        type: "fill_blank",
        question: "If you're bored, you ______ try a new hobby. (suggestion)",
        options: [],
        answer: "could",
        hint: "'Could' for a suggestion about the present/future.",
        explanation: "'You could try a new hobby' — 'could' for a suggestion or possibility.",
      },
      {
        id: 3,
        type: "true_false",
        question: "'We could have went by train' is grammatically correct.",
        options: ["True", "False"],
        answer: "False",
        hint: "After 'could have', use the past participle.",
        explanation:
          "False. 'Could have' must be followed by a PAST PARTICIPLE. Correct: 'We could have gone by train.'",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange a missed opportunity sentence:",
        options: ["she", "could", "have", "won", "the", "competition"],
        answer: "she could have won the competition",
        hint: "'Could have' + past participle = missed past possibility.",
        explanation:
          "'She could have won the competition' — 'could have won' shows it was possible but didn't happen.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "That noise — it ______ be the neighbours.",
        options: ["could", "could have", "couldn't", "should"],
        answer: "could",
        hint: "Present possibility about the source of a noise.",
        explanation:
          "'It could be the neighbours' — 'could' for present possibility (we're not sure, but it's possible).",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence is correct?",
        options: [
          "I could have done it better.",
          "I could have did it better.",
          "I could did it better.",
          "I could have doing it better.",
        ],
        answer: "I could have done it better.",
        hint: "Form: could have + past participle.",
        explanation:
          "'I could have done it better' — correct form: could have + PAST PARTICIPLE (done).",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "You ______ at least sent a message to let us know. (mild criticism)",
        options: [],
        answer: "could have",
        hint: "Past possibility not used = mild criticism.",
        explanation:
          "'You could have at least sent a message' — mild criticism that a past possibility (sending a message) wasn't used.",
      },
      {
        id: 8,
        type: "true_false",
        question: "'Could' can be used to make a polite suggestion.",
        options: ["True", "False"],
        answer: "True",
        hint: "Think about offering alternatives.",
        explanation:
          "True. 'You could try calling him' / 'We could go to the park' — 'could' is very natural for suggestions.",
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "With the right training, he ______ a professional athlete.",
        options: [
          "could be",
          "could have been",
          "could been",
          "could being",
        ],
        answer: "could have been",
        hint: "A past unrealised possibility about his life.",
        explanation:
          "'He could have been a professional athlete' — missed past possibility: he had the potential but didn't become one.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a suggestion for the present:",
        options: ["you", "could", "try", "talking", "to", "her", "directly"],
        answer: "you could try talking to her directly",
        hint: "'Could' + base verb for a suggestion.",
        explanation:
          "'You could try talking to her directly' — 'could' for a present/future suggestion.",
      },
    ],
  },
  {
    id: 28,
    title: "must and can't",
    category: "Modals",
    section: "Modals",
    key_rule:
      "'Must' = logical deduction positive. 'Can't' = logical deduction negative.",
    examples: [
      "You've been walking all day — you must be tired.",
      "That can't be Tom — he's in Japan.",
      "She must have forgotten.",
    ],
    common_mistakes: [
      "He mustn't be home (❌ for deduction) → He can't be home (✓)",
    ],
    study_cards: [
      {
        title: "'Must' for Logical Deduction",
        content:
          "When you are SURE something is true based on evidence, use 'must'. This is not about obligation — it's about what you logically conclude.",
        examples: [
          "You must be tired after that long journey.",
          "She's been studying all day — she must be exhausted.",
          "That must be the answer — it all fits.",
        ],
      },
      {
        title: "'Can't' for Negative Deduction",
        content:
          "When you are SURE something is NOT true or NOT possible, use 'can't'. Do NOT use 'mustn't' for negative deduction.",
        examples: [
          "He can't be serious — he's joking surely!",
          "That can't be right — I checked it twice.",
          "She can't have arrived yet — she only left an hour ago.",
        ],
      },
    ],
    listen_sentences: [
      "You must be cold — you're not wearing a coat.",
      "That can't be his real name.",
      "She must have worked very hard to get that result.",
      "It can't be five o'clock already!",
      "He must be somewhere in the building.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question:
          "He's been running for two hours. He ______ be exhausted.",
        options: ["can't", "must", "mustn't", "might not"],
        answer: "must",
        hint: "You are logically certain he is tired.",
        explanation:
          "'He must be exhausted' — 'must' for logical deduction: based on evidence (running for 2 hours), you are sure he is exhausted.",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "That ______ be right — the numbers don't add up. (negative deduction)",
        options: [],
        answer: "can't",
        hint: "Negative deduction: you're sure it's NOT right.",
        explanation:
          "'That can't be right' — 'can't' for negative deduction: you are certain this is NOT correct.",
      },
      {
        id: 3,
        type: "true_false",
        question:
          "'He mustn't be home' is the correct way to say you are sure he is NOT home.",
        options: ["True", "False"],
        answer: "False",
        hint: "For negative deduction, use 'can't', not 'mustn't'.",
        explanation:
          "False. 'Mustn't' means prohibition (you are not allowed to). For negative deduction use 'can't': 'He can't be home.'",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange a logical deduction sentence:",
        options: ["she", "must", "have", "forgotten", "the", "meeting"],
        answer: "she must have forgotten the meeting",
        hint: "'Must have' + past participle = past deduction.",
        explanation:
          "'She must have forgotten the meeting' — 'must have + past participle' for a logical deduction about a past situation.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "He got 100% on every test. He ______ be very intelligent.",
        options: ["can't", "mustn't", "must", "couldn't"],
        answer: "must",
        hint: "Evidence leads to a certain positive conclusion.",
        explanation:
          "'He must be very intelligent' — logical deduction from evidence (perfect test scores).",
      },
      {
        id: 6,
        type: "error_correction",
        question:
          "Which sentence correctly expresses a negative deduction?",
        options: [
          "She mustn't be at home — the lights are off.",
          "She can't be at home — the lights are off.",
          "She couldn't be at home — the lights are off.",
          "She shouldn't be at home — the lights are off.",
        ],
        answer: "She can't be at home — the lights are off.",
        hint: "Negative deduction = 'can't', not 'mustn't'.",
        explanation:
          "'She can't be at home' — 'can't' for negative deduction based on evidence (lights off). 'Mustn't' means prohibition.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "They've been on that bus for five hours. They ______ be starving!",
        options: [],
        answer: "must",
        hint: "Evidence-based positive deduction.",
        explanation:
          "'They must be starving' — logical deduction from evidence (five hours on a bus without food).",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'Must have done' is used for logical deductions about the past.",
        options: ["True", "False"],
        answer: "True",
        hint: "Past deduction form.",
        explanation:
          "True. 'Must have + past participle' is used for logical deductions about past situations: 'She must have left early.'",
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "There's no answer at the door. She ______ be in.",
        options: ["must", "can't", "should", "would"],
        answer: "can't",
        hint: "No answer = you conclude she is NOT in.",
        explanation:
          "'She can't be in' — negative deduction: the evidence (no answer) leads you to conclude she is definitely not home.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a past deduction with 'can't have':",
        options: ["he", "can't", "have", "read", "the", "message"],
        answer: "he can't have read the message",
        hint: "'Can't have' + past participle = negative past deduction.",
        explanation:
          "'He can't have read the message' — negative past deduction: you are certain he did NOT read it.",
      },
    ],
  },
  {
    id: 29,
    title: "may and might 1",
    category: "Modals",
    section: "Modals",
    key_rule: "'May/might' = possible but not certain.",
    examples: [
      "I might go to the party.",
      "It may rain later.",
      "She might not come.",
    ],
    common_mistakes: ["He might to come (❌) → He might come (✓)"],
    study_cards: [
      {
        title: "May and Might for Possibility",
        content:
          "'May' and 'might' both express possibility — something is possible but not certain. 'Might' is slightly more uncertain than 'may'. Both are followed by the BASE verb (no 'to').",
        examples: [
          "I might go to the party — I haven't decided yet.",
          "It may snow tonight.",
          "She might not come — she's not feeling well.",
        ],
      },
      {
        title: "May/Might vs Must/Can't",
        content:
          "Use 'must' when you are CERTAIN. Use 'may/might' when you are NOT SURE (50% or less). Use 'can't' when you are CERTAIN it's NOT true.",
        examples: [
          "That must be Ann. (certain positive)",
          "That might be Ann. (not sure)",
          "That can't be Ann. (certain negative)",
        ],
      },
    ],
    listen_sentences: [
      "I might be a bit late — traffic is heavy.",
      "It may not be as bad as you think.",
      "She might have left already.",
      "There might be some food in the fridge.",
      "He may not agree with your idea.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question:
          "I haven't decided yet, but I ______ go to the concert.",
        options: ["must", "can't", "might", "shall"],
        answer: "might",
        hint: "Not decided = uncertain possibility.",
        explanation:
          "'I might go to the concert' — 'might' for uncertainty (I haven't decided; it's possible but not certain).",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "Take an umbrella — it ______ rain later. (possibility)",
        options: [],
        answer: "may / might",
        hint: "Both are possible for future uncertainty.",
        explanation:
          "'It may/might rain later' — both 'may' and 'might' express the possibility of future rain.",
      },
      {
        id: 3,
        type: "true_false",
        question: "'He might to come tonight' is grammatically correct.",
        options: ["True", "False"],
        answer: "False",
        hint: "Modal verbs are followed by the base verb (no 'to').",
        explanation:
          "False. 'Might' is a modal verb and is followed directly by the base verb: 'He might come tonight.'",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange a possibility sentence:",
        options: ["she", "may", "not", "be", "available", "tomorrow"],
        answer: "she may not be available tomorrow",
        hint: "'May not' for a negative possibility.",
        explanation:
          "'She may not be available tomorrow' — 'may not' expresses a possible negative situation.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "Which sentence expresses LESS certainty?",
        options: [
          "She must be the new manager.",
          "She might be the new manager.",
          "She can't be the new manager.",
          "She is the new manager.",
        ],
        answer: "She might be the new manager.",
        hint: "'Might' = not sure, possible.",
        explanation:
          "'She might be the new manager' expresses the least certainty — it's just a possibility.",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence is correct?",
        options: [
          "It may to snow tonight.",
          "It may snow tonight.",
          "It might snowing tonight.",
          "It might to snowing tonight.",
        ],
        answer: "It may snow tonight.",
        hint: "Modal + base verb (no 'to', no '-ing').",
        explanation:
          "'It may snow tonight' — correct. Modal verbs are followed by the base verb without 'to' or '-ing'.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "He ______ not understand — you should explain more clearly. (possibility)",
        options: [],
        answer: "may / might",
        hint: "Possible that he doesn't understand.",
        explanation:
          "'He may/might not understand' — 'may not/might not' for the possibility that something is NOT the case.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'May' and 'might' have the same meaning when expressing possibility.",
        options: ["True", "False"],
        answer: "True",
        hint: "Is there a significant difference in meaning?",
        explanation:
          "True (approximately). Both express possibility. 'Might' is sometimes felt to be slightly less certain than 'may', but in everyday English they are largely interchangeable for possibility.",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "That noise ______ be the cat — it's hard to tell.",
        options: ["must", "can't", "might", "should"],
        answer: "might",
        hint: "You're not sure what it is.",
        explanation:
          "'That might be the cat' — 'might' for uncertainty: it's possible but you're not certain.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange: expressing uncertainty about future plans:",
        options: ["i", "might", "not", "come", "to", "the", "meeting"],
        answer: "i might not come to the meeting",
        hint: "'Might not' = possibly won't.",
        explanation:
          "'I might not come to the meeting' — 'might not' for an uncertain future negative possibility.",
      },
    ],
  },
  {
    id: 30,
    title: "may and might 2",
    category: "Modals",
    section: "Modals",
    key_rule:
      "'Might have done' = past possibility. 'May/might' for permission (formal).",
    examples: [
      "She might have missed the bus.",
      "You may leave now.",
      "He might have got stuck in traffic.",
    ],
    common_mistakes: ["He might have went (❌) → might have gone (✓)"],
    study_cards: [
      {
        title: "'Might have done' for Past Possibility",
        content:
          "'Might have + past participle' or 'may have + past participle' expresses that something was possibly true in the past — we are not certain what happened.",
        examples: [
          "She might have missed the bus. (possible reason she's late)",
          "He may have forgotten about the meeting.",
          "They might have taken a different route.",
        ],
      },
      {
        title: "'May' for Formal Permission",
        content:
          "'May' is used to ask for or give formal permission. It is more polite and formal than 'can'. 'Might' can also be used but is rarer in this context.",
        examples: [
          "You may leave the room now. (permission given)",
          "May I ask a question? (asking permission formally)",
          "You may not enter without a ticket. (formal refusal)",
        ],
      },
    ],
    listen_sentences: [
      "She may have left her phone at the restaurant.",
      "You may proceed when ready.",
      "He might have taken the wrong turn.",
      "May I see your passport, please?",
      "They might have already heard the news.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "She's late. She ______ missed the last train.",
        options: ["might have", "might has", "may has", "might had"],
        answer: "might have",
        hint: "Past possibility: might have + past participle.",
        explanation:
          "'She might have missed the last train' — 'might have + past participle' for a past possibility.",
      },
      {
        id: 2,
        type: "fill_blank",
        question: "______ I use your phone? (formal permission)",
        options: [],
        answer: "May",
        hint: "Formal permission = 'May I'.",
        explanation:
          "'May I use your phone?' — 'may' for formal permission request. More polite than 'can I'.",
      },
      {
        id: 3,
        type: "true_false",
        question: "'He might have went home' is grammatically correct.",
        options: ["True", "False"],
        answer: "False",
        hint: "After 'might have', use the past participle.",
        explanation:
          "False. 'Might have' must be followed by a PAST PARTICIPLE. Correct: 'He might have gone home.'",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange a past possibility sentence:",
        options: ["they", "might", "have", "taken", "the", "wrong", "path"],
        answer: "they might have taken the wrong path",
        hint: "'Might have' + past participle.",
        explanation:
          "'They might have taken the wrong path' — past possibility: it's possible that this happened.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "I can't find my glasses anywhere. I ______ left them at the office.",
        options: ["may have", "may has", "might has", "might had"],
        answer: "may have",
        hint: "Past possibility: may have + past participle.",
        explanation:
          "'I may have left them at the office' — 'may have + past participle' for a past possibility.",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence correctly gives formal permission?",
        options: [
          "You might leave now.",
          "You may leave now.",
          "You can to leave now.",
          "You should leave now.",
        ],
        answer: "You may leave now.",
        hint: "Formal permission = 'may'.",
        explanation:
          "'You may leave now' — 'may' for formal permission. 'Might' is not typically used for giving permission.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "Where is John? He ______ (go) to the library — he mentioned it this morning. (past possibility)",
        options: [],
        answer: "might have gone / may have gone",
        hint: "Past possibility: may/might + have + past participle.",
        explanation:
          "'He might have gone to the library' — past possibility using 'might have + past participle'.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'May I ask a question?' is more formal than 'Can I ask a question?'",
        options: ["True", "False"],
        answer: "True",
        hint: "'May' vs 'can' for permission.",
        explanation:
          "True. 'May I ask?' is the more formal way to request permission. 'Can I ask?' is more informal/everyday.",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "He isn't here. He ______ already ______ to the meeting.",
        options: [
          "might / gone",
          "might have / gone",
          "might / went",
          "might have / went",
        ],
        answer: "might have / gone",
        hint: "Past possibility: might have + past participle.",
        explanation:
          "'He might have gone to the meeting' — 'might have' + past participle 'gone'.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a formal permission request:",
        options: ["may", "i", "sit", "here", "please"],
        answer: "may i sit here please",
        hint: "'May I' + base verb for formal permission.",
        explanation:
          "'May I sit here please?' — formal permission request using 'may I + base verb'.",
      },
    ],
  },
  {
    id: 31,
    title: "have to and must",
    category: "Modals",
    section: "Modals",
    key_rule: "'Must' = internal obligation. 'Have to' = external obligation.",
    examples: [
      "I must call my mother.",
      "I have to wear a uniform at work.",
      "Do you have to work on Saturdays?",
    ],
    common_mistakes: ["Do you must work? (❌) → Do you have to work? (✓)"],
    study_cards: [
      {
        title: "'Must' for Internal Obligation",
        content:
          "'Must' expresses obligation that comes from WITHIN the speaker — a personal feeling of necessity. It is NOT used in questions (use 'have to' there) and has no past form.",
        examples: [
          "I must call my mother — I haven't spoken to her all week.",
          "I must stop eating so much chocolate.",
          "You really must try this restaurant — it's amazing!",
        ],
      },
      {
        title: "'Have to' for External Obligation",
        content:
          "'Have to' expresses obligation from OUTSIDE (rules, laws, other people). It has all tenses (had to, will have to) and forms questions with 'do'.",
        examples: [
          "I have to wear a uniform at work. (rule)",
          "Did you have to take an exam? (question in past)",
          "She'll have to work harder next term. (future)",
        ],
      },
    ],
    listen_sentences: [
      "I have to submit the report by Monday.",
      "You must try this cake — it's incredible.",
      "Did you have to pay extra for the luggage?",
      "She had to leave early because of the traffic.",
      "I really must apologise to him.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "I ______ leave now or I'll miss my bus.",
        options: ["must / have to", "should", "shall", "might"],
        answer: "must / have to",
        hint: "Strong obligation to leave.",
        explanation:
          "Both 'must leave' and 'have to leave' are correct here. 'Must' expresses personal urgency, 'have to' expresses necessity.",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "______ you have to wear a uniform at your school? (external rule)",
        options: [],
        answer: "Do",
        hint: "'Have to' forms questions with 'do'.",
        explanation:
          "'Do you have to wear a uniform?' — 'have to' forms questions with 'do'. 'Must' cannot form questions naturally.",
      },
      {
        id: 3,
        type: "true_false",
        question: "'Do you must work on Sundays?' is correct.",
        options: ["True", "False"],
        answer: "False",
        hint: "'Must' doesn't take 'do' in questions.",
        explanation:
          "False. 'Must' doesn't form questions with 'do'. Use 'Do you have to work on Sundays?' instead.",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange a sentence expressing external obligation:",
        options: ["she", "has", "to", "finish", "the", "report", "today"],
        answer: "she has to finish the report today",
        hint: "'Has to' for third-person external obligation.",
        explanation:
          "'She has to finish the report today' — external obligation (deadline set by someone else).",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "When I was at school, I ______ wear a tie every day.",
        options: ["must", "had to", "have to", "must have"],
        answer: "had to",
        hint: "Past obligation = 'had to'.",
        explanation:
          "'I had to wear a tie' — 'had to' is the past tense of 'have to'. 'Must' has no past form.",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence is correct?",
        options: [
          "You must to be here at nine.",
          "You have to be here at nine.",
          "You musts be here at nine.",
          "You did must be here at nine.",
        ],
        answer: "You have to be here at nine.",
        hint: "'Must' has no 'to' after it; 'must' has no past-style forms.",
        explanation:
          "'You have to be here at nine' — 'have to' is correctly formed. 'Must + to' is incorrect; 'must' is followed directly by the base verb.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "I ______ see a doctor — I was very unwell. (past necessity)",
        options: [],
        answer: "had to",
        hint: "Past of 'have to' = 'had to'.",
        explanation:
          "'I had to see a doctor' — 'had to' is the past tense form. 'Must' has no past tense.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'Must' is typically used for rules imposed by other people.",
        options: ["True", "False"],
        answer: "False",
        hint: "Think about internal vs external obligation.",
        explanation:
          "False. 'Must' typically expresses INTERNAL obligation (what the speaker feels is necessary). 'Have to' is typically for EXTERNAL obligation (rules, other people).",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "You ______ see this film — it's absolutely brilliant!",
        options: [
          "have to",
          "must",
          "Both are correct",
          "Neither is correct",
        ],
        answer: "Both are correct",
        hint: "Strong personal recommendation.",
        explanation:
          "Both 'You must see this film' and 'You have to see this film' are correct for strong personal recommendations.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a past obligation sentence:",
        options: ["he", "had", "to", "retake", "the", "exam"],
        answer: "he had to retake the exam",
        hint: "Past obligation: had to + base verb.",
        explanation:
          "'He had to retake the exam' — 'had to' for past obligation (he had no choice).",
      },
    ],
  },
  {
    id: 32,
    title: "must / mustn't / needn't",
    category: "Modals",
    section: "Modals",
    key_rule: "'Mustn't' = prohibition. 'Needn't' = no necessity.",
    examples: [
      "You mustn't smoke here.",
      "You needn't come if you don't want to.",
      "I needn't have worried.",
    ],
    common_mistakes: [
      "You mustn't bring an umbrella (❌ means forbidden) → needn't (✓)",
    ],
    study_cards: [
      {
        title: "'Mustn't' vs 'Needn't'",
        content:
          "'Mustn't' = it is FORBIDDEN (don't do it). 'Needn't' = it is NOT NECESSARY (you don't have to, but you can if you want). These are very different meanings!",
        examples: [
          "You mustn't park here. (it's forbidden — no parking allowed)",
          "You needn't park far away — there's space right here. (not necessary to park far)",
          "You mustn't tell anyone. (forbidden) vs You needn't tell anyone. (not necessary)",
        ],
      },
      {
        title: "'Needn't have done' vs 'Didn't need to do'",
        content:
          "'Needn't have done' = you did it but it was unnecessary. 'Didn't need to do' = it wasn't necessary (and you may or may not have done it).",
        examples: [
          "I needn't have cooked so much — nobody was hungry. (I cooked, but unnecessarily)",
          "I didn't need to cook — there was plenty of food. (so I didn't cook)",
        ],
      },
    ],
    listen_sentences: [
      "You mustn't enter this area without permission.",
      "You needn't worry — everything is arranged.",
      "She needn't have bought a present — it wasn't expected.",
      "You mustn't be late to the interview.",
      "He needn't come to the meeting if he's busy.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question:
          "You ______ tell anyone my secret — it's very private!",
        options: ["needn't", "mustn't", "don't need", "hadn't"],
        answer: "mustn't",
        hint: "It is FORBIDDEN to tell.",
        explanation:
          "'You mustn't tell anyone' — 'mustn't' expresses prohibition: it is not allowed/forbidden.",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "You ______ come to the party if you don't feel well — we'll understand. (not necessary)",
        options: [],
        answer: "needn't",
        hint: "'Needn't' = not necessary.",
        explanation:
          "'You needn't come' — 'needn't' means it is not necessary; you have a choice.",
      },
      {
        id: 3,
        type: "true_false",
        question: "'Mustn't' and 'needn't' mean the same thing.",
        options: ["True", "False"],
        answer: "False",
        hint: "One means forbidden; the other means not necessary.",
        explanation:
          "False. 'Mustn't' = prohibited (don't do it — it's forbidden). 'Needn't' = not necessary (you don't have to, but you can).",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange: something is not necessary:",
        options: ["you", "needn't", "bring", "anything", "to", "the", "party"],
        answer: "you needn't bring anything to the party",
        hint: "'Needn't' + base verb = not necessary.",
        explanation:
          "'You needn't bring anything to the party' — 'needn't' shows it's not necessary to bring anything.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "The sign says 'No Entry'. You ______ go in there.",
        options: ["needn't", "don't need to", "mustn't", "shouldn't"],
        answer: "mustn't",
        hint: "'No Entry' = it is forbidden.",
        explanation:
          "'You mustn't go in there' — 'mustn't' for prohibition. The sign forbids entry.",
      },
      {
        id: 6,
        type: "error_correction",
        question:
          "Which sentence correctly says you did something unnecessarily?",
        options: [
          "I needn't bring my umbrella — it didn't rain.",
          "I needn't have brought my umbrella — it didn't rain.",
          "I mustn't have brought my umbrella.",
          "I didn't must bring my umbrella.",
        ],
        answer: "I needn't have brought my umbrella — it didn't rain.",
        hint: "'Needn't have done' = did it but it was unnecessary.",
        explanation:
          "'I needn't have brought my umbrella' — 'needn't have + past participle' for an action that was done but was unnecessary.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "You ______ touch those wires — it's extremely dangerous!",
        options: [],
        answer: "mustn't",
        hint: "Danger = prohibition.",
        explanation:
          "'You mustn't touch those wires' — 'mustn't' for prohibition/warning against doing something dangerous.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'I needn't have worried' means I was worried, but it turned out to be unnecessary.",
        options: ["True", "False"],
        answer: "True",
        hint: "Did the worry happen? Was it necessary?",
        explanation:
          "True. 'I needn't have worried' = I worried (it happened), but it turned out there was no reason to worry (unnecessary).",
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "You ______ rush — we have plenty of time.",
        options: ["mustn't", "needn't", "couldn't", "shouldn't"],
        answer: "needn't",
        hint: "There's no urgency — it's not necessary to rush.",
        explanation:
          "'You needn't rush' — rushing is not necessary because there is plenty of time. (Mustn't would incorrectly imply rushing is forbidden.)",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange: something is forbidden:",
        options: [
          "you",
          "mustn't",
          "use",
          "your",
          "phone",
          "during",
          "the",
          "exam",
        ],
        answer: "you mustn't use your phone during the exam",
        hint: "'Mustn't' = prohibited.",
        explanation:
          "'You mustn't use your phone during the exam' — 'mustn't' for a rule that forbids using a phone.",
      },
    ],
  },
  {
    id: 33,
    title: "should 1",
    category: "Modals",
    section: "Modals",
    key_rule: "'Should' = advice, opinion, or what is right/correct.",
    examples: [
      "You should see a doctor.",
      "I think he should apologise.",
      "Should I call her?",
    ],
    common_mistakes: ["You should to go (❌) → You should go (✓)"],
    study_cards: [
      {
        title: "'Should' for Advice and Opinion",
        content:
          "Use 'should' to give advice, express an opinion about what is right, or ask for advice. It is milder than 'must' and 'have to'. Follow with the BASE verb (no 'to').",
        examples: [
          "You should get more sleep. (advice)",
          "She should apologise — she was very rude. (what's right)",
          "Should I take an umbrella? (asking for advice)",
        ],
      },
      {
        title: "'Should' for Expectation",
        content:
          "Use 'should' to say something is expected to happen based on normal circumstances.",
        examples: [
          "It should be a great concert — they're very good.",
          "The package should arrive by Tuesday.",
          "This medicine should help your headache.",
        ],
      },
    ],
    listen_sentences: [
      "You should eat less junk food.",
      "Should I tell her the truth?",
      "He should be here any minute now.",
      "I think you should apologise to her.",
      "They should have finished building it by now.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question:
          "You look really tired. You ______ go to bed earlier.",
        options: ["should to", "should", "must to", "ought"],
        answer: "should",
        hint: "'Should' + base verb for advice.",
        explanation:
          "'You should go to bed earlier' — 'should' for advice, followed directly by the base verb (no 'to').",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "______ I accept this job offer, do you think?",
        options: [],
        answer: "Should",
        hint: "Asking for advice/opinion.",
        explanation:
          "'Should I accept this job offer?' — 'should' in a question to ask for advice or opinion.",
      },
      {
        id: 3,
        type: "true_false",
        question: "'You should to study harder' is grammatically correct.",
        options: ["True", "False"],
        answer: "False",
        hint: "Modal verbs are followed by the BASE verb — no 'to'.",
        explanation:
          "False. 'Should' is a modal verb and is followed directly by the base verb: 'You should study harder.' No 'to' is used.",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange an advice sentence:",
        options: ["i", "think", "you", "should", "see", "a", "doctor"],
        answer: "i think you should see a doctor",
        hint: "'I think + should + base verb' for advice.",
        explanation:
          "'I think you should see a doctor' — 'should' for advice, often softened with 'I think'.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "If you want to improve your English, you ______ read more.",
        options: ["should", "should to", "have should", "musts"],
        answer: "should",
        hint: "Advice = 'should' + base verb.",
        explanation:
          "'You should read more' — 'should' for advice/recommendation. No 'to' after it.",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence gives advice correctly?",
        options: [
          "She should calls him.",
          "She should call him.",
          "She should to calling him.",
          "She should called him.",
        ],
        answer: "She should call him.",
        hint: "'Should' + base verb.",
        explanation:
          "'She should call him' — base verb (call) follows 'should' directly, no changes.",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "The train ______ arrive at 6 — it's usually on time.",
        options: [],
        answer: "should",
        hint: "'Should' for expectation based on normal circumstances.",
        explanation:
          "'The train should arrive at 6' — 'should' for expectation: based on the schedule/normal circumstances.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'Should' can be used to express expectation, not just advice.",
        options: ["True", "False"],
        answer: "True",
        hint: "Think about 'it should be fine'.",
        explanation:
          "True. 'Should' can express expectation: 'The results should be ready tomorrow' = I expect they will be.",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "He ______ apologise — what he said was very hurtful.",
        options: ["should", "would", "might", "could"],
        answer: "should",
        hint: "Expressing what is morally right.",
        explanation:
          "'He should apologise' — 'should' for what is right/appropriate based on moral or social standards.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange: asking for advice:",
        options: ["should", "i", "tell", "her", "the", "truth"],
        answer: "should i tell her the truth",
        hint: "Question: Should + I + base verb?",
        explanation:
          "'Should I tell her the truth?' — 'should' question for asking advice about what to do.",
      },
    ],
  },
  {
    id: 34,
    title: "should 2",
    category: "Modals",
    section: "Modals",
    key_rule:
      "'Should have done' = past regret. 'Should' after 'if' for formal conditionals.",
    examples: [
      "I should have studied harder.",
      "Should you need help, call me.",
      "You shouldn't have said that.",
    ],
    common_mistakes: ["I should have went (❌) → should have gone (✓)"],
    study_cards: [
      {
        title: "'Should have done' for Past Regret",
        content:
          "'Should have + past participle' = it was the right thing to do, but it didn't happen (regret or criticism). 'Shouldn't have done' = it was wrong to do it (but it happened).",
        examples: [
          "I should have revised more. (I didn't revise enough — regret)",
          "You shouldn't have eaten all the cake! (you did — criticism)",
          "She should have told me earlier. (she didn't — regret/criticism)",
        ],
      },
      {
        title: "'Should' in Formal Conditionals",
        content:
          "In formal English, 'should' can begin a conditional clause (inverted if-clause), meaning 'if at any point'.",
        examples: [
          "Should you need assistance, please contact us.",
          "Should any problems arise, call this number.",
          "Should he change his mind, let us know.",
        ],
      },
    ],
    listen_sentences: [
      "I should have left earlier — now I'm late.",
      "You shouldn't have spent so much money on this.",
      "Should you require further information, please email us.",
      "She should have listened to the doctor.",
      "We shouldn't have taken that road — it was terrible.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question:
          "I ______ harder for my exam — now I've failed.",
        options: [
          "should study",
          "should have studied",
          "should had studied",
          "had should studied",
        ],
        answer: "should have studied",
        hint: "Regret about a past action: should have + past participle.",
        explanation:
          "'I should have studied harder' — 'should have + past participle' for past regret (I didn't study enough, and now I regret it).",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "You ______ said that — it was very unkind. (past criticism)",
        options: [],
        answer: "shouldn't have",
        hint: "Criticism of a past action.",
        explanation:
          "'You shouldn't have said that' — 'shouldn't have + past participle' for criticism of a past action (it happened, but it was wrong).",
      },
      {
        id: 3,
        type: "true_false",
        question: "'I should have went' is grammatically correct.",
        options: ["True", "False"],
        answer: "False",
        hint: "'Should have' must be followed by the past participle.",
        explanation:
          "False. 'Should have' must be followed by a PAST PARTICIPLE. Correct: 'I should have gone.'",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange: regret about a past decision:",
        options: [
          "we",
          "should",
          "have",
          "booked",
          "the",
          "hotel",
          "earlier",
        ],
        answer: "we should have booked the hotel earlier",
        hint: "'Should have' + past participle.",
        explanation:
          "'We should have booked the hotel earlier' — past regret: we didn't book early, and now we regret it.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "______ you require any assistance, do not hesitate to contact us.",
        options: ["If", "Should", "Unless", "When"],
        answer: "Should",
        hint: "Formal conditional with inversion.",
        explanation:
          "'Should you require assistance' = 'If you should require assistance' — formal inverted conditional.",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence expresses past criticism correctly?",
        options: [
          "She shouldn't have drove so fast.",
          "She shouldn't have driven so fast.",
          "She should hadn't driven so fast.",
          "She should have not driven so fast.",
        ],
        answer: "She shouldn't have driven so fast.",
        hint: "Negative: shouldn't have + past participle.",
        explanation:
          "'She shouldn't have driven so fast' — correct form: shouldn't have + past participle (driven).",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "He ______ told us about the change — we were completely unprepared.",
        options: [],
        answer: "should have",
        hint: "He didn't tell us = regret/criticism.",
        explanation:
          "'He should have told us' — the expected action (telling us) didn't happen, so we use 'should have + past participle'.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'Should any problems arise, call us immediately' is a formal conditional.",
        options: ["True", "False"],
        answer: "True",
        hint: "'Should' inverted to replace 'if'.",
        explanation:
          "True. 'Should any problems arise' is a formal inverted conditional, equivalent to 'If any problems should arise'. Common in formal/business writing.",
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "I'm so full. I ______ eaten that last piece of cake.",
        options: [
          "shouldn't have",
          "should have",
          "mustn't have",
          "can't have",
        ],
        answer: "shouldn't have",
        hint: "You ate it, but regret it — it was wrong.",
        explanation:
          "'I shouldn't have eaten that last piece' — I ate it (it happened), but I regret it because it was wrong/unnecessary.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a formal conditional:",
        options: ["should", "you", "need", "more", "time", "please", "ask"],
        answer: "should you need more time please ask",
        hint: "Formal inverted conditional: Should + subject + base verb.",
        explanation:
          "'Should you need more time, please ask' — formal inverted conditional equivalent to 'If you need more time, please ask.'",
      },
    ],
  },
  {
    id: 35,
    title: "I'd better … / it's time …",
    category: "Modals",
    section: "Modals",
    key_rule: "'I'd better' = strong advice. 'It's time' + past tense.",
    examples: [
      "You'd better hurry or you'll miss the bus.",
      "It's time you went to bed.",
      "I'd better not be late.",
    ],
    common_mistakes: ["I'd better to go (❌) → I'd better go (✓)"],
    study_cards: [
      {
        title: "'Had better' for Strong Advice",
        content:
          "'Had better' (contraction: 'd better) gives strong advice or warning — there could be a negative consequence if you don't follow it. Always followed by the BASE verb (no 'to').",
        examples: [
          "You'd better hurry — the train leaves in five minutes.",
          "I'd better call her or she'll be worried.",
          "You'd better not be late again.",
        ],
      },
      {
        title: "'It's time' + Past Tense",
        content:
          "After 'it's time' (+ for someone), use PAST TENSE to show something should be happening now but isn't.",
        examples: [
          "It's time you went to bed. (you should go to bed now)",
          "It's time we left. (we should leave now)",
          "It's time for him to get a job. (with 'for + object + to')",
        ],
      },
    ],
    listen_sentences: [
      "You'd better see a doctor — that cough sounds bad.",
      "It's time we had a serious talk.",
      "I'd better leave now if I want to catch the train.",
      "It's time you started thinking about your future.",
      "You'd better not tell anyone about this.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question:
          "You ______ take an umbrella — it looks like it might rain.",
        options: ["had better to", "had better", "'d better to", "'d to better"],
        answer: "had better",
        hint: "'Had better' + base verb (no 'to').",
        explanation:
          "'You had better take an umbrella' — 'had better' + base verb for strong advice/warning.",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "It's time you ______ (go) to bed — it's midnight!",
        options: [],
        answer: "went",
        hint: "'It's time' + past tense.",
        explanation:
          "'It's time you went to bed' — after 'it's time', use past tense (went) to show something should happen now.",
      },
      {
        id: 3,
        type: "true_false",
        question: "'I'd better to go now' is grammatically correct.",
        options: ["True", "False"],
        answer: "False",
        hint: "'Had better' is followed by the base verb — no 'to'.",
        explanation:
          "False. 'Had better' is always followed by the BASE verb without 'to'. Correct: 'I'd better go now.'",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange: strong advice with 'had better':",
        options: [
          "you'd",
          "better",
          "apologise",
          "before",
          "it's",
          "too",
          "late",
        ],
        answer: "you'd better apologise before it's too late",
        hint: "'You'd better' + base verb for strong advice.",
        explanation:
          "'You'd better apologise before it's too late' — strong advice with a clear warning of consequences.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "It's time he ______ looking for a new job.",
        options: ["starts", "start", "started", "to start"],
        answer: "started",
        hint: "'It's time' + past tense.",
        explanation:
          "'It's time he started looking for a job' — after 'it's time', use past tense (started).",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence is correct?",
        options: [
          "I'd better not to wake her up.",
          "I'd better not wake her up.",
          "I'd not better wake her up.",
          "I'd better to not wake her up.",
        ],
        answer: "I'd better not wake her up.",
        hint: "Negative: 'd better not + base verb.",
        explanation:
          "'I'd better not wake her up' — negative form: 'd better not + base verb (no 'to').",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "We ______ leave now or we'll miss the show. (strong advice)",
        options: [],
        answer: "'d better / had better",
        hint: "Strong advice with possible consequence.",
        explanation:
          "'We'd better leave now' — strong advice: if we don't leave, there's a negative consequence (miss the show).",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'It's time they stop being so childish' is grammatically correct.",
        options: ["True", "False"],
        answer: "False",
        hint: "After 'it's time + subject', use PAST tense.",
        explanation:
          "False. After 'it's time + subject', use PAST tense: 'It's time they stopped being so childish.'",
      },
      {
        id: 9,
        type: "multiple_choice",
        question:
          "It's about time you ______ your driving test.",
        options: ["pass", "passed", "to pass", "passing"],
        answer: "passed",
        hint: "'It's about time' + past tense.",
        explanation:
          "'It's about time you passed your driving test' — 'it's about time' also takes the past tense.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange: it's time for a decision:",
        options: ["it's", "time", "we", "made", "a", "decision"],
        answer: "it's time we made a decision",
        hint: "'It's time' + subject + past tense.",
        explanation:
          "'It's time we made a decision' — 'it's time' + past tense (made) = we should have decided by now.",
      },
    ],
  },
  {
    id: 36,
    title: "would",
    category: "Modals",
    section: "Modals",
    key_rule: "'Would' = hypothetical, polite requests, past habits.",
    examples: [
      "Would you like some tea?",
      "I would buy it if I had the money.",
      "When I was a child, I would visit my grandparents every Sunday.",
    ],
    common_mistakes: ["I would go there yesterday (❌)"],
    study_cards: [
      {
        title: "'Would' for Hypothetical Situations and Requests",
        content:
          "'Would' is used in conditional sentences (hypothetical), for polite requests and offers, and in formal/polite contexts.",
        examples: [
          "I would travel the world if I had more money. (hypothetical)",
          "Would you like some coffee? (polite offer)",
          "Would you mind closing the door? (polite request)",
        ],
      },
      {
        title: "'Would' for Past Habits",
        content:
          "Like 'used to', 'would' can describe repeated past habits. However, 'would' cannot describe past STATES.",
        examples: [
          "When I was young, I would play in the park every day. (past habit)",
          "She would always bring flowers when she visited. (past habit)",
          "I used to live in Rome. (NOT I would live — state, not habit)",
        ],
      },
    ],
    listen_sentences: [
      "Would you like to join us for dinner?",
      "I would move abroad if I had the chance.",
      "When we were children, we would spend summers by the lake.",
      "Would you mind helping me with this?",
      "I wouldn't say that if I were you.",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "______ you like some more water?",
        options: ["Should", "Would", "Could", "Must"],
        answer: "Would",
        hint: "Polite offer = 'Would you like'.",
        explanation:
          "'Would you like some more water?' — 'would' for polite offers. 'Would you like' is the standard polite offer form.",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "I ______ buy a new car if I had enough money. (hypothetical)",
        options: [],
        answer: "would",
        hint: "If + past → would + base verb in the result clause.",
        explanation:
          "'I would buy a new car if I had enough money' — 'would' in the result clause of a hypothetical (Type 2) conditional.",
      },
      {
        id: 3,
        type: "true_false",
        question: "'I would go there yesterday' is correct.",
        options: ["True", "False"],
        answer: "False",
        hint: "'Would' is not used for definite past events with specific times.",
        explanation:
          "False. 'Would' for past habits describes repeated actions, not specific events. 'Yesterday' requires past simple: 'I went there yesterday.'",
      },
      {
        id: 4,
        type: "drag_order",
        question: "Arrange a polite request using 'would':",
        options: ["would", "you", "mind", "turning", "the", "music", "down"],
        answer: "would you mind turning the music down",
        hint: "'Would you mind + -ing?' = polite request.",
        explanation:
          "'Would you mind turning the music down?' — 'Would you mind + -ing?' is a very polite request form.",
      },
      {
        id: 5,
        type: "multiple_choice",
        question:
          "As a child, she ______ help her mother in the kitchen every evening.",
        options: ["will", "would", "could", "should"],
        answer: "would",
        hint: "'Would' for repeated past habits.",
        explanation:
          "'She would help her mother every evening' — 'would' for a repeated past habit (done regularly in the past).",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which sentence is correct?",
        options: [
          "I would moved there if I could.",
          "I would move there if I could.",
          "I would to move there if I could.",
          "I would moving there if I could.",
        ],
        answer: "I would move there if I could.",
        hint: "'Would' + base verb (no 'to', no change).",
        explanation:
          "'I would move there if I could' — 'would' is followed by the base verb (move). No 'to', no '-ed', no '-ing'.",
      },
      {
        id: 7,
        type: "fill_blank",
        question: "______ you mind if I opened the window?",
        options: [],
        answer: "Would",
        hint: "Polite permission request.",
        explanation:
          "'Would you mind if I opened the window?' — 'would you mind if + past tense' for a polite request for permission.",
      },
      {
        id: 8,
        type: "true_false",
        question: "'Would' can be used to describe repeated past habits.",
        options: ["True", "False"],
        answer: "True",
        hint: "Like 'used to' for habits.",
        explanation:
          "True. 'When I was young, I would cycle to school every day' — 'would' for repeated past habits.",
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "Which sentence is NOT a correct use of 'would'?",
        options: [
          "I would call you but I lost your number.",
          "She would visit her aunt every weekend.",
          "I would live in Rome for five years.",
          "Would you like to come with us?",
        ],
        answer: "I would live in Rome for five years.",
        hint: "Living = a state, not a repeated habit.",
        explanation:
          "'I would live in Rome for five years' is incorrect because living is a STATE, not a repeated habit. Use 'I used to live in Rome' or 'I lived in Rome for five years.'",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a hypothetical sentence:",
        options: ["she", "would", "travel", "more", "if", "she", "had", "time"],
        answer: "she would travel more if she had time",
        hint: "Hypothetical result: would + base verb.",
        explanation:
          "'She would travel more if she had time' — 'would' in the result clause of a Type 2 conditional.",
      },
    ],
  },
  {
    id: 37,
    title: "can/could/would you … ? (Requests)",
    category: "Modals",
    section: "Modals",
    key_rule: "Use modals for polite requests and offers.",
    examples: [
      "Can you help me? / Could you help me?",
      "Would you mind closing the door?",
      "May I borrow your pen?",
    ],
    common_mistakes: ["Would you to help me? (❌) → Would you help me? (✓)"],
    study_cards: [
      {
        title: "Modals for Requests: Degrees of Formality",
        content:
          "From less formal to more formal: Can you? → Could you? → Would you? → Would you mind? → May I? All are followed by the base verb (or -ing after 'mind').",
        examples: [
          "Can you pass the salt? (informal)",
          "Could you help me with this? (more polite)",
          "Would you mind waiting a moment? (very polite)",
        ],
      },
      {
        title: "Responding to Requests",
        content:
          "To agree: 'Of course', 'Certainly', 'Sure', 'No problem'. To 'Would you mind?': answer 'No, not at all' (agreeing) or 'Sorry, I'd rather you didn't.'",
        examples: [
          "Can you lend me a pen? — Sure, here you are.",
          "Would you mind turning it down? — No, not at all.",
          "Could you repeat that? — Of course.",
        ],
      },
    ],
    listen_sentences: [
      "Could you please explain that again?",
      "Would you mind holding the door open?",
      "Can you show me where the library is?",
      "Would you like me to help you?",
      "Could I speak to the manager, please?",
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "______ you help me carry these bags?",
        options: ["Would you to", "Could you", "May you", "Should you"],
        answer: "Could you",
        hint: "'Could you + base verb' = polite request.",
        explanation:
          "'Could you help me carry these bags?' — 'could you + base verb' for a polite request.",
      },
      {
        id: 2,
        type: "fill_blank",
        question:
          "______ you mind moving your car, please? (very polite request)",
        options: [],
        answer: "Would",
        hint: "'Would you mind + -ing' = very polite.",
        explanation:
          "'Would you mind moving your car?' — 'would you mind + -ing' is a very polite way to make a request.",
      },
      {
        id: 3,
        type: "true_false",
        question: "'Would you to help me?' is correct.",
        options: ["True", "False"],
        answer: "False",
        hint: "'Would you' is followed directly by the base verb.",
        explanation:
          "False. 'Would you' is followed by the BASE verb without 'to'. Correct: 'Would you help me?'",
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Rank from MOST polite to LEAST polite:",
        options: [
          "Would you mind, Could you, Can you",
          "Can you, Could you, Would you mind",
          "Could you, Can you, Would you mind",
          "All are equally polite",
        ],
        answer: "Would you mind, Could you, Can you",
        hint: "Think about formality levels.",
        explanation:
          "From most to least polite: 'Would you mind?' > 'Could you?' > 'Can you?' — though all are acceptable in most situations.",
      },
      {
        id: 5,
        type: "drag_order",
        question: "Arrange a polite request:",
        options: ["could", "you", "please", "speak", "more", "slowly"],
        answer: "could you please speak more slowly",
        hint: "'Could you (please) + base verb' for a polite request.",
        explanation:
          "'Could you please speak more slowly?' — polite request with 'could you + base verb'.",
      },
      {
        id: 6,
        type: "error_correction",
        question: "Which request is correctly formed?",
        options: [
          "Can you to open the window?",
          "Would you mind to open the window?",
          "Would you mind opening the window?",
          "Could you to opening the window?",
        ],
        answer: "Would you mind opening the window?",
        hint: "'Would you mind' + -ing (gerund).",
        explanation:
          "'Would you mind opening the window?' — 'would you mind' is followed by the GERUND (-ing form).",
      },
      {
        id: 7,
        type: "fill_blank",
        question:
          "______ I use your phone for a moment? (polite request for permission)",
        options: [],
        answer: "Could / May",
        hint: "'Could I' or 'May I' for polite permission.",
        explanation:
          "'Could I use your phone?' or 'May I use your phone?' — both are polite ways to ask permission. 'May' is slightly more formal.",
      },
      {
        id: 8,
        type: "true_false",
        question:
          "'No, not at all' is a correct response to 'Would you mind helping me?'",
        options: ["True", "False"],
        answer: "True",
        hint: "What does 'no' mean in response to 'mind'?",
        explanation:
          "True. 'No, not at all' = 'I don't mind' = I'm happy to help. The answer is 'no' because you're saying 'No, I don't mind.'",
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "______ you like me to book a table for you?",
        options: ["Could", "Would", "Should", "Must"],
        answer: "Would",
        hint: "'Would you like me to...' = polite offer.",
        explanation:
          "'Would you like me to book a table?' — 'Would you like me to + base verb' for a polite offer to do something for someone.",
      },
      {
        id: 10,
        type: "drag_order",
        question: "Arrange a formal request for permission:",
        options: ["may", "i", "ask", "you", "a", "question"],
        answer: "may i ask you a question",
        hint: "'May I + base verb' = formal permission request.",
        explanation:
          "'May I ask you a question?' — 'may I + base verb' is a formal and polite request for permission.",
      },
    ],
  },
];

export default modals;
