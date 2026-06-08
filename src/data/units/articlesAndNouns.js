const articlesAndNouns = [
  {
    id: 69,
    title: "A/An and The",
    category: "Articles & Nouns",
    section: "Articles & Nouns",
    key_rule: "Use 'a/an' for first mention or non-specific nouns. Use 'the' when both speaker and listener know which one is meant.",
    examples: [
      "I saw a dog. The dog was barking.",
      "She has a car. The car is red.",
      "Can you close the door? (we both know which door)",
      "I need a doctor. (any doctor)"
    ],
    common_mistakes: [
      "Using 'the' for first mention: 'I saw the dog' (wrong if not previously mentioned)",
      "Using 'a' when specific: 'Give me a book on the table' (should be 'the book')"
    ],
    study_cards: [
      {
        title: "First mention",
        content: "Use 'a/an' the first time you mention something that hasn't been introduced yet.",
        examples: ["I bought a new phone.", "She met a man at the conference.", "There is a cat in the garden."]
      },
      {
        title: "Second mention",
        content: "Use 'the' when you refer back to something already mentioned or known to both people.",
        examples: ["I bought a phone. The phone is amazing.", "She met a man. The man was very tall.", "There was a cat. The cat ran away."]
      },
      {
        title: "Unique things",
        content: "Use 'the' with things there is only one of in the world or in context.",
        examples: ["The sun is very bright today.", "Can you close the door?", "She looked up at the moon."]
      },
      {
        title: "Before consonant sound",
        content: "Use 'a' before a word that begins with a consonant sound.",
        examples: ["a cat", "a university (starts with 'yoo' sound)", "a one-way street (starts with 'wuh' sound)"]
      },
      {
        title: "Before vowel sound",
        content: "Use 'an' before a word that begins with a vowel sound.",
        examples: ["an apple", "an hour (the 'h' is silent)", "an umbrella"]
      }
    ],
    listen_sentences: [
      "I saw a cat in the garden.",
      "The cat was sleeping under the tree.",
      "She is a teacher at a local school.",
      "Can you pass me the salt?",
      "He lives near an old church."
    ],
    questions: [
      {
        id: 1,
        type: "fill_blank",
        question: "I saw ___ dog in the park. ___ dog was very friendly.",
        answer: "a / The",
        options: ["a / The", "the / A", "a / A", "the / The"],
        hint: "The first mention uses 'a', and the second mention uses 'the'.",
        explanation: "We use 'a' the first time we mention the dog (new information). We use 'The' the second time because both speakers now know which dog is meant."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "Which is correct?",
        options: ["She is an teacher.", "She is a teacher.", "She is the teacher.", "She is teacher."],
        answer: "She is a teacher.",
        hint: "Use 'a/an' with jobs when not referring to a specific person.",
        explanation: "'A teacher' is correct because 'teacher' starts with a consonant sound and we are describing her job in general. 'An' is wrong before a consonant sound."
      },
      {
        id: 3,
        type: "true_false",
        question: "'The moon is very bright tonight' — is 'the' correct here?",
        answer: "true",
        hint: "There is only one moon, so it is always a unique, specific reference.",
        explanation: "We always use 'the' with unique things like the moon, the sun, and the sky because there is only one of each."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "___ sun rises in the east.",
        answer: "The",
        options: ["The", "A", "An", "—"],
        hint: "There is only one sun, so we always treat it as specific.",
        explanation: "We use 'The' with unique things like the sun, the moon, and the earth. There is only one sun, so it is always a definite reference."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'Can you close a door? It's cold.'",
        answer: "the door",
        hint: "Both speakers can see which door is meant, so it is specific.",
        explanation: "We say 'the door' because both people know which door is meant — it is the door in front of them. 'A door' would suggest any door."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "He waited for ___ hour.",
        options: ["a", "an", "the", "—"],
        answer: "an",
        hint: "The word 'hour' starts with a vowel sound (the 'h' is silent).",
        explanation: "We use 'an' before vowel sounds. 'Hour' is pronounced 'ow-er', beginning with a vowel sound, so we say 'an hour'."
      },
      {
        id: 7,
        type: "fill_blank",
        question: "I need to see ___ doctor. Do you know ___ good one?",
        answer: "a / a",
        options: ["a / a", "the / the", "a / the", "the / a"],
        hint: "No specific doctor has been mentioned yet, so both are non-specific.",
        explanation: "Both blanks use 'a' because we are not referring to any particular doctor — just any good doctor. There is no specific doctor in context yet."
      },
      {
        id: 8,
        type: "drag_order",
        question: "Arrange: saw / a / I / film / interesting",
        answer: "I saw an interesting film",
        options: ["I", "saw", "an", "interesting", "film"],
        hint: "'Interesting' starts with a vowel sound, so use 'an' before it.",
        explanation: "We say 'an interesting film' because 'interesting' begins with a vowel sound. The correct word order is subject + verb + article + adjective + noun."
      },
      {
        id: 9,
        type: "true_false",
        question: "'I bought a milk' is correct.",
        answer: "false",
        hint: "Milk is an uncountable noun and cannot take 'a/an'.",
        explanation: "'Milk' is uncountable, so we cannot say 'a milk'. We say 'some milk' or 'a carton of milk' instead."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "We live on ___ third floor.",
        options: ["a", "an", "the", "—"],
        answer: "the",
        hint: "Ordinal numbers (first, second, third) always take 'the'.",
        explanation: "We use 'the' with ordinal numbers like 'the third floor', 'the first page'. There is only one third floor in a building, making it specific."
      }
    ]
  },
  {
    id: 70,
    title: "A/An and The (2)",
    category: "Articles & Nouns",
    section: "Articles & Nouns",
    key_rule: "Use 'the' with superlatives, ordinals, 'only', and when talking about a specific thing in context. Use 'a/an' with jobs.",
    examples: [
      "She is the best student in the class.",
      "It's the first time I've been here.",
      "He is a doctor. (job — use a/an)",
      "The Amazon is the longest river in South America."
    ],
    common_mistakes: [
      "Using 'a' with superlative: 'She is a best student' (wrong)",
      "Omitting 'the' with ordinals: 'It was first time I tried it' (needs 'the')"
    ],
    study_cards: [
      {
        title: "Superlatives",
        content: "Always use 'the' before a superlative adjective because superlatives refer to one specific extreme.",
        examples: ["She is the tallest person in the room.", "It was the best film I've ever seen.", "This is the most expensive restaurant in the city."]
      },
      {
        title: "Ordinal numbers",
        content: "Use 'the' before ordinal numbers like first, second, third, last.",
        examples: ["This is the first time I've tried sushi.", "Take the second turning on the left.", "I sat in the last row."]
      },
      {
        title: "Jobs",
        content: "Use 'a/an' when describing someone's job or profession.",
        examples: ["She's a nurse.", "He's an engineer.", "My father was a teacher for 30 years."]
      },
      {
        title: "'Only'",
        content: "Use 'the' before 'only' because it refers to a unique, specific thing.",
        examples: ["It's the only solution.", "She was the only person who helped.", "That's the only bus tonight."]
      },
      {
        title: "Unique items in context",
        content: "Use 'the' when the listener knows exactly which item you mean from the shared situation.",
        examples: ["Can you turn off the light?", "Close the window, please.", "Pass me the pen on the desk."]
      }
    ],
    listen_sentences: [
      "She is the tallest girl in the class.",
      "This is the first time I've eaten sushi.",
      "My brother is a firefighter.",
      "It's the only way to solve the problem.",
      "The Pacific is the largest ocean in the world."
    ],
    questions: [
      {
        id: 1,
        type: "fill_blank",
        question: "That was ___ best meal I've ever had.",
        answer: "the",
        options: ["the", "a", "an", "—"],
        hint: "Superlatives always need 'the' before them.",
        explanation: "We always use 'the' with superlatives. 'The best' is correct because 'best' refers to a unique extreme — there is only one 'best meal'."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "She wants to be ___ architect.",
        options: ["a", "an", "the", "—"],
        answer: "an",
        hint: "'Architect' starts with a vowel sound, so choose between 'a' and 'an'.",
        explanation: "We use 'an' before a vowel sound. 'Architect' starts with the vowel 'a', so we say 'an architect'. We also use 'a/an' with jobs described in general."
      },
      {
        id: 3,
        type: "true_false",
        question: "'He is the doctor' is correct when describing someone's job.",
        answer: "false",
        hint: "Jobs use 'a/an', not 'the', unless referring to a specific, known doctor.",
        explanation: "When describing someone's job, use 'a/an': 'He is a doctor.' Use 'the doctor' only when referring to a specific doctor both speakers know about."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "It's ___ second time she has won ___ competition.",
        answer: "the / the",
        options: ["the / the", "a / a", "the / a", "a / the"],
        hint: "Ordinal numbers take 'the', and 'the competition' refers to a specific one.",
        explanation: "'The second time' uses 'the' because ordinal numbers always take 'the'. 'The competition' also uses 'the' because both speakers know which specific competition is meant."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'She is a best player on the team.'",
        answer: "the best player",
        hint: "Superlatives always require 'the', not 'a'.",
        explanation: "Use 'the' with superlatives. 'The best player' is correct — there is only one best player, making it a unique, definite reference."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "The Nile is ___ longest river in Africa.",
        options: ["a", "an", "the", "—"],
        answer: "the",
        hint: "This is a superlative statement — there is only one 'longest'.",
        explanation: "We use 'the' before superlatives. 'The longest river' is correct because there is only one longest river, so it is a unique, definite reference."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: only / is / This / the / option",
        answer: "This is the only option",
        options: ["This", "is", "the", "only", "option"],
        hint: "'Only' always takes 'the' because it refers to a unique thing.",
        explanation: "We use 'the' before 'only' because it identifies a single unique option. The correct word order is: subject + verb + the only + noun."
      },
      {
        id: 8,
        type: "fill_blank",
        question: "My mother is ___ nurse at ___ local hospital.",
        answer: "a / a",
        options: ["a / a", "the / the", "a / the", "an / a"],
        hint: "Both 'nurse' and 'local hospital' are being mentioned in general for the first time.",
        explanation: "'A nurse' uses 'a' because we are describing her job (not a specific nurse). 'A local hospital' uses 'a' because it hasn't been specified which hospital."
      },
      {
        id: 9,
        type: "true_false",
        question: "'The Amazon' uses 'the' correctly for a river name.",
        answer: "true",
        hint: "Rivers always take 'the' in English.",
        explanation: "Rivers always use 'the': the Amazon, the Nile, the Thames. This is a fixed rule in English for geographical features like rivers, mountain ranges, and oceans."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "This is ___ last train tonight.",
        options: ["a", "an", "the", "—"],
        answer: "the",
        hint: "'Last' functions like an ordinal — there is only one last train.",
        explanation: "We use 'the' before 'last' because it refers to a specific, unique item. Just like ordinals (the first, the second), 'the last' identifies one specific train."
      }
    ]
  },
  {
    id: 71,
    title: "The (3) — Places",
    category: "Articles & Nouns",
    section: "Articles & Nouns",
    key_rule: "Use 'the' with geographical features (rivers, mountain ranges, oceans, deserts) and some countries (the UK, the USA). Don't use 'the' with most countries, cities, continents, or individual mountains/lakes.",
    examples: [
      "the Nile, the Alps, the Pacific Ocean, the Sahara",
      "France (no article), London (no article)",
      "the United States, the Philippines (use 'the')",
      "Mount Everest (no article), Lake Victoria (no article)"
    ],
    common_mistakes: [
      "Adding 'the' to most countries: 'the France' (wrong)",
      "Omitting 'the' from ranges/oceans: 'Pacific Ocean' (needs 'the')"
    ],
    study_cards: [
      {
        title: "Rivers",
        content: "Always use 'the' before river names.",
        examples: ["The Thames flows through London.", "The Mississippi is the longest river in the USA.", "We swam in the Amazon."]
      },
      {
        title: "Mountain ranges",
        content: "Use 'the' before mountain range names (plural), but NOT before individual mountain names.",
        examples: ["The Himalayas are the highest range.", "The Andes run along South America.", "But: Mount Everest (no 'the')"]
      },
      {
        title: "Oceans and seas",
        content: "Always use 'the' before ocean and sea names.",
        examples: ["the Atlantic Ocean", "The Red Sea is beautiful in summer.", "The Pacific is the largest ocean."]
      },
      {
        title: "Most countries",
        content: "Do NOT use 'the' before most country names or city names.",
        examples: ["Italy is beautiful in spring.", "She lives in Japan.", "They visited Brazil last year."]
      },
      {
        title: "Plural and special countries",
        content: "Use 'the' with plural country names and countries that include a common noun.",
        examples: ["the Netherlands", "the United States of America", "the Philippines"]
      }
    ],
    listen_sentences: [
      "The Amazon flows through Brazil.",
      "She climbed Mount Kilimanjaro last year.",
      "The Mediterranean Sea is beautiful in summer.",
      "They live in the Netherlands.",
      "Lake Titicaca is the highest navigable lake."
    ],
    questions: [
      {
        id: 1,
        type: "fill_blank",
        question: "___ Alps are in central Europe.",
        answer: "The",
        options: ["The", "A", "An", "—"],
        hint: "Mountain ranges always take 'the'.",
        explanation: "Mountain ranges take 'the': the Alps, the Himalayas, the Andes. Individual mountains like Mount Everest do not take an article."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "She has never been to ___ Japan.",
        options: ["a", "the", "—", "an"],
        answer: "—",
        hint: "Most singular country names take no article.",
        explanation: "Most country names do not take an article: Japan, France, Brazil, Spain. We only use 'the' with plural or special country names like the Netherlands or the USA."
      },
      {
        id: 3,
        type: "true_false",
        question: "'The Pacific Ocean' uses 'the' correctly.",
        answer: "true",
        hint: "Oceans always take 'the' in English.",
        explanation: "Oceans and seas always take 'the': the Pacific Ocean, the Atlantic, the Red Sea. This is a fixed rule for large bodies of water."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "___ United Kingdom is in ___ Europe.",
        answer: "The / —",
        options: ["The / —", "A / the", "The / the", "— / the"],
        hint: "The UK takes 'the'; continents take no article.",
        explanation: "Countries with 'United' or 'Kingdom' in their name take 'the': the United Kingdom. Continents like Europe, Asia, and Africa take no article."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'I want to visit the France next summer.'",
        answer: "visit France",
        hint: "France is a standard country name — no article needed.",
        explanation: "Most country names don't take 'the'. We say 'France', 'Germany', 'Italy'. Only plural or special countries like the Netherlands use 'the'."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "___ Sahara is the largest hot desert.",
        options: ["A", "The", "—", "An"],
        answer: "The",
        hint: "Deserts, like other major geographical features, take 'the'.",
        explanation: "Deserts take 'the': the Sahara, the Gobi, the Atacama. This follows the same rule as rivers, mountain ranges, and oceans."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: in / live / They / the / USA",
        answer: "They live in the USA",
        options: ["They", "live", "in", "the", "USA"],
        hint: "The USA is a plural/special country name that takes 'the'.",
        explanation: "The USA (United States of America) takes 'the' because it contains 'United States' — a phrase with a common noun. The word order is subject + verb + in the + place."
      },
      {
        id: 8,
        type: "true_false",
        question: "'The Mount Everest' is correct.",
        answer: "false",
        hint: "Individual mountains do not take 'the' — only mountain ranges do.",
        explanation: "Individual mountains do not take 'the': Mount Everest, Mount Fuji, Mount Kilimanjaro. Only mountain ranges take 'the': the Alps, the Himalayas."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "___ Rhine flows through Germany and ___ Netherlands.",
        answer: "The / the",
        options: ["The / the", "The / —", "— / the", "A / the"],
        hint: "Rivers take 'the', and the Netherlands is a plural country name.",
        explanation: "Rivers always take 'the': the Rhine. The Netherlands takes 'the' because it is a plural country name (like the Philippines, the USA)."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "Which does NOT take 'the'?",
        options: ["the Nile", "the Amazon", "the Lake Superior", "the Atlantic"],
        answer: "the Lake Superior",
        hint: "Individual lakes do not take 'the' — just 'Lake + Name'.",
        explanation: "Individual lakes do not take 'the': Lake Superior, Lake Victoria, Lake Baikal. Rivers (the Nile), mountain ranges (the Alps), and oceans (the Atlantic) all take 'the'."
      }
    ]
  },
  {
    id: 72,
    title: "The (4) — Institutions, Meals, Times",
    category: "Articles & Nouns",
    section: "Articles & Nouns",
    key_rule: "Omit 'the' with institutions (school, prison, hospital) when used for their purpose, and with meals, sports, languages, and street names. Use 'the' when talking about the specific building.",
    examples: [
      "She is in hospital. (she is a patient) vs. She is at the hospital. (visiting)",
      "They go to school. vs. The school is near here.",
      "Have breakfast, play tennis, speak English (no articles)",
      "in the morning/afternoon/evening (use 'the')"
    ],
    common_mistakes: [
      "Adding 'the' to meals: 'I had the breakfast' (wrong in most contexts)",
      "Adding 'the' to languages: 'She speaks the French' (wrong)"
    ],
    study_cards: [
      {
        title: "Institutions (purpose)",
        content: "When someone goes to a place for its intended purpose, use no article.",
        examples: ["She goes to school every day.", "He was sent to prison for robbery.", "My grandfather is in hospital."]
      },
      {
        title: "Institutions (the building)",
        content: "When referring to the physical building (not its purpose), use 'the'.",
        examples: ["The school is on Park Street.", "We drove past the prison.", "The hospital was built in 1950."]
      },
      {
        title: "Meals",
        content: "Meals (breakfast, lunch, dinner) take no article in general use.",
        examples: ["Have breakfast before you leave.", "What time is dinner?", "She skipped lunch to finish her work."]
      },
      {
        title: "Languages and sports",
        content: "Languages and sports take no article.",
        examples: ["She speaks French fluently.", "They play basketball every Sunday.", "He is learning Japanese."]
      },
      {
        title: "Parts of day",
        content: "Use 'the' with morning, afternoon, and evening. 'At night' and 'at midnight' take no article.",
        examples: ["I'll call you in the morning.", "She works in the afternoon.", "But: He works at night."]
      }
    ],
    listen_sentences: [
      "She went to bed early last night.",
      "He is in hospital recovering from an operation.",
      "We usually have dinner at seven.",
      "They play golf every weekend.",
      "I'll call you in the morning."
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "She is in ___ hospital after the accident.",
        options: ["a", "the", "—", "an"],
        answer: "—",
        hint: "She is a patient — this is the purpose of the hospital.",
        explanation: "When someone is in hospital as a patient (the purpose of a hospital), use no article: 'in hospital'. Use 'the hospital' when visiting the building."
      },
      {
        id: 2,
        type: "fill_blank",
        question: "They have ___ breakfast at eight and ___ lunch at one.",
        answer: "— / —",
        options: ["— / —", "the / the", "a / a", "the / a"],
        hint: "Meal names (breakfast, lunch, dinner) take no article in general use.",
        explanation: "Meals take no article in general statements: have breakfast, eat lunch, cook dinner. Use 'the' only when making the meal specific: 'The lunch we had was wonderful.'"
      },
      {
        id: 3,
        type: "true_false",
        question: "'She speaks the English very well' is correct.",
        answer: "false",
        hint: "Languages never take an article in English.",
        explanation: "Languages take no article: she speaks English, he speaks French, they speak Japanese. 'The English' is wrong — we never use 'the' before language names."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "I usually go for a walk ___ morning.",
        options: ["in a", "in the", "in —", "on the"],
        answer: "in the",
        hint: "Parts of day (morning, afternoon, evening) take 'in the'.",
        explanation: "We say 'in the morning', 'in the afternoon', 'in the evening'. Note: 'at night' is the exception (no 'the')."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'He plays the tennis every weekend.'",
        answer: "plays tennis",
        hint: "Sports never take 'the' in English.",
        explanation: "Sports take no article: play tennis, play football, play chess. We never say 'the tennis' or 'the football' when referring to the sport itself."
      },
      {
        id: 6,
        type: "fill_blank",
        question: "The children go to ___ school five days a week.",
        answer: "—",
        options: ["—", "the", "a", "an"],
        hint: "Going to school for learning means no article is needed.",
        explanation: "When children go to school to study (the purpose of school), we use no article. If we say 'the school', we are referring to a specific building."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: morning / I / in / wake / early / the / up",
        answer: "I wake up early in the morning",
        options: ["I", "wake", "up", "early", "in", "the", "morning"],
        hint: "'In the morning' is the correct fixed expression for this time of day.",
        explanation: "We say 'in the morning' as a fixed expression. The word order is: subject + verb + adverb + in the morning."
      },
      {
        id: 8,
        type: "true_false",
        question: "'I went to the hospital to visit my friend' is correct.",
        answer: "true",
        hint: "Visiting the hospital building (not as a patient) takes 'the'.",
        explanation: "When you visit the hospital building (not as a patient), use 'the hospital'. This contrasts with 'in hospital' (being treated) vs 'at/to the hospital' (visiting)."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "What time is ___ dinner?",
        options: ["a", "the", "—", "an"],
        answer: "—",
        hint: "Meal names in general questions take no article.",
        explanation: "Meals take no article in general: 'What time is dinner?' We only add 'the' when referring to a specific dinner: 'The dinner we had last night was delicious.'"
      },
      {
        id: 10,
        type: "fill_blank",
        question: "He went to ___ prison for five years. Now he teaches at ___ prison near the town.",
        answer: "— / the",
        options: ["— / the", "the / the", "a / the", "— / a"],
        hint: "No article for the purpose (being imprisoned); 'the' for the specific building.",
        explanation: "'Went to prison' (no article) means he was imprisoned — that is the purpose. 'The prison near the town' refers to a specific building, not the purpose, so it takes 'the'."
      }
    ]
  },
  {
    id: 73,
    title: "Countable and Uncountable Nouns (1)",
    category: "Articles & Nouns",
    section: "Articles & Nouns",
    key_rule: "Countable nouns have singular and plural forms (a book/books). Uncountable nouns have no plural and don't take 'a/an' (water, advice, information).",
    examples: [
      "a chair / chairs (countable)",
      "water, music, advice (uncountable — no plural, no a/an)",
      "Can I have some information? (not 'an information')",
      "I need some help. (not 'a help')"
    ],
    common_mistakes: [
      "Using 'a' with uncountable: 'a furniture', 'an advice' (wrong)",
      "Pluralizing uncountable: 'informations', 'advices' (wrong)"
    ],
    study_cards: [
      {
        title: "Countable nouns",
        content: "Countable nouns can be counted and have singular and plural forms. They can take 'a/an'.",
        examples: ["a book / two books", "a car / many cars", "one idea / several ideas"]
      },
      {
        title: "Uncountable nouns",
        content: "Uncountable nouns cannot be counted, have no plural form, and cannot take 'a/an'.",
        examples: ["water (not 'a water' or 'waters')", "music (not 'a music')", "luck (not 'lucks')"]
      },
      {
        title: "Common uncountable nouns",
        content: "These common nouns are always uncountable — never add -s or use 'a/an' with them.",
        examples: ["advice, information, furniture", "luggage, news, weather", "money, traffic, knowledge"]
      },
      {
        title: "Quantifying uncountable nouns",
        content: "Use 'some', 'any', or 'much' to quantify uncountable nouns.",
        examples: ["some water, any advice", "much traffic, a lot of furniture", "How much information do you need?"]
      },
      {
        title: "Piece of / bit of",
        content: "Use 'a piece of' or 'a bit of' to refer to a portion of an uncountable noun.",
        examples: ["a piece of advice", "a bit of information", "two pieces of furniture"]
      }
    ],
    listen_sentences: [
      "She gave me some good advice.",
      "The furniture in this room is old.",
      "I need some information about the train.",
      "There is a lot of traffic today.",
      "He doesn't have much money."
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Which is correct?",
        options: ["She gave me an advice.", "She gave me some advice.", "She gave me advices.", "She gave me a advice."],
        answer: "She gave me some advice.",
        hint: "'Advice' is uncountable — it has no plural and cannot take 'a/an'.",
        explanation: "'Advice' is uncountable, so we cannot say 'an advice' or 'advices'. We use 'some advice' or 'a piece of advice' instead."
      },
      {
        id: 2,
        type: "true_false",
        question: "'Informations' is a correct plural form.",
        answer: "false",
        hint: "'Information' is uncountable and has no plural form.",
        explanation: "'Information' is uncountable — it has no plural. We say 'some information' or 'a piece of information', never 'informations'."
      },
      {
        id: 3,
        type: "fill_blank",
        question: "I need ___ help with this problem.",
        answer: "some",
        options: ["some", "a", "an", "many"],
        hint: "'Help' is uncountable, so use 'some' not 'a' or 'an'.",
        explanation: "'Help' is uncountable, so we use 'some help', not 'a help'. 'Some' works with both uncountable nouns and plural countable nouns."
      },
      {
        id: 4,
        type: "error_correction",
        question: "Find the error: 'Can I give you an information?'",
        answer: "some information",
        hint: "'Information' is uncountable and cannot take 'an'.",
        explanation: "'Information' is uncountable — use 'some', not 'an'. We say 'some information' or 'a piece of information', never 'an information'."
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "The ___ in the hotel was very comfortable.",
        options: ["furnitures", "a furniture", "furniture", "an furniture"],
        answer: "furniture",
        hint: "'Furniture' is uncountable — no article and no plural.",
        explanation: "'Furniture' is uncountable. We say 'the furniture' (specific) or 'some furniture' (general), never 'furnitures' or 'a furniture'."
      },
      {
        id: 6,
        type: "true_false",
        question: "'I have a lot of homework' is correct.",
        answer: "true",
        hint: "'A lot of' can be used with uncountable nouns like 'homework'.",
        explanation: "'Homework' is uncountable. 'A lot of' works with both uncountable nouns (a lot of homework) and countable plural nouns (a lot of books)."
      },
      {
        id: 7,
        type: "fill_blank",
        question: "There was so much ___ that we were late.",
        answer: "traffic",
        options: ["traffic", "traffics", "a traffic", "the traffics"],
        hint: "'Traffic' is uncountable — use the base form with no article or plural.",
        explanation: "'Traffic' is uncountable. We say 'so much traffic', 'a lot of traffic'. We never say 'traffics' or 'a traffic'."
      },
      {
        id: 8,
        type: "drag_order",
        question: "Arrange: piece / need / a / of / I / advice",
        answer: "I need a piece of advice",
        options: ["I", "need", "a", "piece", "of", "advice"],
        hint: "'A piece of advice' is how we make uncountable 'advice' countable.",
        explanation: "To make uncountable nouns countable, use 'a piece of': a piece of advice, a piece of information, a piece of furniture. Word order: subject + verb + a piece of + noun."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "How much ___ do you have?",
        options: ["luggages", "a luggage", "luggage", "luggages bag"],
        answer: "luggage",
        hint: "'Luggage' is uncountable — use 'much' not 'many' and no plural -s.",
        explanation: "'Luggage' is uncountable: 'How much luggage?' not 'How many luggages?'. For individual items, say 'a piece of luggage' or 'a bag'."
      },
      {
        id: 10,
        type: "true_false",
        question: "'The news are bad today' is grammatically correct.",
        answer: "false",
        hint: "'News' looks plural but always takes a singular verb.",
        explanation: "'News' ends in -s but is uncountable and takes a singular verb: 'The news is bad.' We say 'some news', 'a piece of news', never 'news are'."
      }
    ]
  },
  {
    id: 74,
    title: "Countable and Uncountable Nouns (2)",
    category: "Articles & Nouns",
    section: "Articles & Nouns",
    key_rule: "Some nouns can be countable or uncountable depending on meaning. Uncountable use refers to the substance; countable use refers to a type or serving.",
    examples: [
      "Would you like some coffee? (uncountable) vs. Two coffees, please. (countable = cups)",
      "I love chocolate. (substance) vs. She bought a chocolate. (a piece/bar)",
      "She has beautiful hair. (uncountable) vs. There are some hairs on the floor. (individual strands)"
    ],
    common_mistakes: [
      "Treating 'paper' as always uncountable: 'Write on paper' vs 'a paper' (a newspaper/essay)",
      "Treating 'glass' as always countable: 'a glass' (container) vs 'made of glass' (material)"
    ],
    study_cards: [
      {
        title: "Flexible nouns",
        content: "Some nouns can be countable or uncountable depending on meaning — substance vs. type or serving.",
        examples: ["Would you like coffee? (the drink in general)", "Two coffees, please. (two cups)", "I love chocolate. / She gave me a chocolate. (a piece)"]
      },
      {
        title: "Hair",
        content: "Uncountable when referring to all the hair on someone's head. Countable when referring to individual strands.",
        examples: ["She has long hair. (all her hair)", "I found a hair in my soup. (one strand)", "There were hairs on the pillow."]
      },
      {
        title: "Light",
        content: "Uncountable when referring to light in general. Countable when referring to individual light fixtures.",
        examples: ["The room was full of light.", "Turn on the lights.", "There's a light above the door."]
      },
      {
        title: "Paper",
        content: "Uncountable when referring to the material. Countable when referring to a document or newspaper.",
        examples: ["Write it on paper.", "Could you sign this paper?", "I read it in the paper this morning."]
      },
      {
        title: "Glass",
        content: "Uncountable when referring to the material. Countable when referring to a drinking glass.",
        examples: ["The table is made of glass.", "Can I have a glass of water?", "She broke two glasses."]
      }
    ],
    listen_sentences: [
      "Can I have two coffees and a tea, please?",
      "She cut her hair last week.",
      "There was a hair in my soup.",
      "This table is made of glass.",
      "He brought a paper for us to sign."
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "'Three coffees, please' means:",
        options: ["three cups of coffee", "three coffee beans", "three types of coffee plant", "three sacks of coffee"],
        answer: "three cups of coffee",
        hint: "When an uncountable drink noun is used in countable form, it refers to servings.",
        explanation: "When we use coffee in a countable way ('three coffees'), we mean three cups/servings of coffee. This is common in cafes and restaurants for drinks."
      },
      {
        id: 2,
        type: "fill_blank",
        question: "She has beautiful ___. She never cuts it.",
        answer: "hair",
        options: ["hair", "hairs", "a hair", "the hairs"],
        hint: "When talking about all the hair on someone's head, use the uncountable form.",
        explanation: "'Hair' is uncountable when referring to all the hair on someone's head: 'beautiful hair', 'long hair'. The pronoun 'it' confirms we are treating it as uncountable."
      },
      {
        id: 3,
        type: "true_false",
        question: "'Can I have a paper?' can mean 'Can I have a newspaper?'",
        answer: "true",
        hint: "'Paper' can be countable when it means a newspaper or a document.",
        explanation: "'A paper' (countable) can mean a newspaper or an academic paper. 'Paper' (uncountable) is the material. Context tells us which meaning is intended."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "The window is made of ___.",
        options: ["a glass", "glasses", "glass", "the glass"],
        answer: "glass",
        hint: "When referring to the material, 'glass' is uncountable.",
        explanation: "'Glass' as a material is uncountable: 'made of glass', 'a piece of glass'. 'A glass' (countable) refers to a drinking container."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'I found two hair in my food.'",
        answer: "two hairs",
        hint: "Individual strands of hair are counted, so 'hair' becomes countable.",
        explanation: "When referring to individual strands, 'hair' is countable: 'two hairs'. The uncountable form ('hair') refers to all the hair on a head collectively."
      },
      {
        id: 6,
        type: "fill_blank",
        question: "Could we have four ___ and two waters?",
        answer: "teas",
        options: ["teas", "tea", "a tea", "the tea"],
        hint: "Ordering drinks in a cafe treats them as countable (servings).",
        explanation: "When ordering at a cafe, drinks become countable: 'four teas' means four cups of tea, 'two waters' means two glasses of water. This is standard ordering language."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: made / This / of / is / glass / table",
        answer: "This table is made of glass",
        options: ["This", "table", "is", "made", "of", "glass"],
        hint: "'Glass' here is the material, so it is uncountable — no article.",
        explanation: "When 'glass' refers to the material, it is uncountable and takes no article: 'made of glass'. Word order: This + noun + is + made of + material."
      },
      {
        id: 8,
        type: "true_false",
        question: "'She has a beautiful hair' is correct when talking about her hairstyle.",
        answer: "false",
        hint: "When talking about all someone's hair, it is uncountable — no 'a'.",
        explanation: "When referring to all the hair on someone's head, 'hair' is uncountable: 'She has beautiful hair.' We cannot say 'a beautiful hair' in this context."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "Can you turn off ___ lights?",
        options: ["a light", "the light", "the lights", "some light"],
        answer: "the lights",
        hint: "Referring to specific lights you can both see — use 'the' and the plural.",
        explanation: "'The lights' is correct because we are referring to specific lights that both speakers know about (the lights in the room). The plural is used because there are several lights."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "He read it in ___ paper this morning.",
        answer: "the",
        options: ["the", "a", "—", "an"],
        hint: "'The paper' here means a specific newspaper that both speakers know about.",
        explanation: "'The paper' (countable) means a specific newspaper. We use 'the' because both speakers understand which paper is meant — the daily newspaper he normally reads."
      }
    ]
  },
  {
    id: 75,
    title: "Singular and Plural",
    category: "Articles & Nouns",
    section: "Articles & Nouns",
    key_rule: "Some nouns appear plural but take a singular verb (news, physics, mathematics). Some collective nouns can take singular or plural verbs. Some nouns have irregular plurals.",
    examples: [
      "The news is good today. (singular verb)",
      "Economics is my favourite subject.",
      "The team is/are playing well. (both possible)",
      "child→children, person→people, mouse→mice"
    ],
    common_mistakes: [
      "Using plural verb with news/physics: 'The news are...' (wrong)",
      "Regular plural for irregular nouns: 'childs', 'mouses' (wrong)"
    ],
    study_cards: [
      {
        title: "Plural-form singular nouns",
        content: "Some nouns end in -s but take a singular verb. They look plural but are treated as one subject.",
        examples: ["The news is shocking.", "Mathematics is her best subject.", "Physics was difficult for me."]
      },
      {
        title: "Collective nouns",
        content: "Collective nouns (team, family, staff) can take a singular or plural verb. British English often uses plural; American English uses singular.",
        examples: ["The team is playing well. (AmE)", "The team are playing well. (BrE)", "The family has/have decided to move."]
      },
      {
        title: "Irregular plurals",
        content: "Some nouns change their vowel or form completely to make the plural.",
        examples: ["child → children", "foot → feet, tooth → teeth", "mouse → mice, man → men, woman → women"]
      },
      {
        title: "Always plural nouns",
        content: "Some nouns are always plural and take a plural verb. They refer to items with two parts.",
        examples: ["My trousers are on the bed.", "Where are my glasses?", "The scissors are in the drawer."]
      },
      {
        title: "Person / people",
        content: "The plural of 'person' is 'people' in informal and standard use. 'Persons' is formal/legal.",
        examples: ["one person → two people", "There were twenty people at the party.", "How many people are coming?"]
      }
    ],
    listen_sentences: [
      "The news was shocking this morning.",
      "Mathematics is her strongest subject.",
      "The children are playing in the garden.",
      "My glasses are on the table.",
      "The staff have been informed of the changes."
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "The news ___ very bad.",
        options: ["are", "is", "were", "have been"],
        answer: "is",
        hint: "'News' ends in -s but is always treated as singular.",
        explanation: "'News' always takes a singular verb: 'the news is', never 'the news are'. Although it ends in -s, it is not a plural noun — it is uncountable."
      },
      {
        id: 2,
        type: "fill_blank",
        question: "The ___ of 'child' is 'children'.",
        answer: "plural",
        options: ["plural", "singular", "verb", "tense"],
        hint: "We are asking about the form used when there is more than one child.",
        explanation: "The irregular plural of 'child' is 'children'. This is an irregular form — we do not add -s or -es to make 'childs' or 'childes'."
      },
      {
        id: 3,
        type: "true_false",
        question: "'The scissors is on the table' is correct.",
        answer: "false",
        hint: "'Scissors' is always plural and needs a plural verb.",
        explanation: "'Scissors' is always plural: 'The scissors are on the table.' Like trousers, glasses, and pliers, scissors refers to a two-part object and always takes a plural verb."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "What is the plural of 'tooth'?",
        options: ["tooths", "teethes", "teeth", "toothe"],
        answer: "teeth",
        hint: "This is an irregular plural that changes the vowel sound.",
        explanation: "'Tooth' has the irregular plural 'teeth'. Like 'foot → feet' and 'goose → geese', the vowel changes in the plural form."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'There were three childs at the door.'",
        answer: "three children",
        hint: "The plural of 'child' is irregular — it is not 'childs'.",
        explanation: "The irregular plural of 'child' is 'children'. We never say 'childs'. This is one of the most common irregular plurals in English."
      },
      {
        id: 6,
        type: "fill_blank",
        question: "Physics ___ a difficult subject.",
        answer: "is",
        options: ["is", "are", "were", "have"],
        hint: "Academic subjects ending in -ics take a singular verb.",
        explanation: "Academic subjects ending in -ics (physics, mathematics, economics, linguistics) always take a singular verb: 'Physics is difficult.'"
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: have / My / lost / teeth / I / two",
        answer: "I have lost two teeth",
        options: ["I", "have", "lost", "two", "teeth"],
        hint: "'Teeth' is the irregular plural of 'tooth' — use it after 'two'.",
        explanation: "We say 'two teeth' (not 'two tooths'). The sentence uses the present perfect: I + have + lost + number + irregular plural noun."
      },
      {
        id: 8,
        type: "true_false",
        question: "'The team are playing well' is acceptable in British English.",
        answer: "true",
        hint: "British English often treats collective nouns as plural.",
        explanation: "In British English, collective nouns like 'team', 'family', and 'staff' can take a plural verb. In American English, the singular verb is preferred: 'The team is playing well.'"
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "Where ___ my trousers?",
        options: ["is", "was", "are", "has"],
        answer: "are",
        hint: "'Trousers' is always plural and takes a plural verb.",
        explanation: "'Trousers' is always plural in English: 'Where are my trousers?' Like scissors, glasses, and jeans, trousers always takes a plural verb."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "There were five ___ at the meeting, not just one ___ .",
        answer: "people / person",
        options: ["people / person", "persons / people", "peoples / persons", "people / peoples"],
        hint: "'People' is the plural of 'person' in standard English.",
        explanation: "The plural of 'person' is 'people': one person, five people. 'Persons' exists but is formal/legal. 'Peoples' refers to groups of different nationalities."
      }
    ]
  },
  {
    id: 76,
    title: "Noun + Noun",
    category: "Articles & Nouns",
    section: "Articles & Nouns",
    key_rule: "In English, two nouns can combine where the first noun acts as an adjective. The first noun is usually singular, and stress falls on the first word.",
    examples: [
      "a bus stop, a car park, a credit card",
      "a kitchen table, a garden wall, a window seat",
      "a five-minute walk (hyphenated when used before noun)",
      "a tennis court, a swimming pool, a film star"
    ],
    common_mistakes: [
      "Pluralizing the first noun: 'a cars park', 'a books shop' (wrong)",
      "Confusing noun+noun with adjective+noun order"
    ],
    study_cards: [
      {
        title: "Noun + noun structure",
        content: "The first noun describes or classifies the second noun. It almost always stays singular, even if the meaning is plural.",
        examples: ["a dog food (food for dogs)", "a car key (key for a car)", "a shoe shop (shop for shoes — not 'shoes shop')"]
      },
      {
        title: "Stress pattern",
        content: "In noun + noun compounds, stress falls on the FIRST noun. This helps distinguish them from adjective + noun phrases.",
        examples: ["BUS stop (not 'bus STOP')", "CAR park (not 'car PARK')", "TOOTH paste (not 'tooth PASTE')"]
      },
      {
        title: "Compound nouns",
        content: "Many common compound nouns are written as one word after years of use.",
        examples: ["toothpaste (tooth + paste)", "sunscreen (sun + screen)", "handbag (hand + bag)"]
      },
      {
        title: "Measurement + noun (hyphenated)",
        content: "When a number + noun combination comes before another noun, it is hyphenated and the first noun stays singular.",
        examples: ["a two-hour film", "a ten-year-old boy", "a five-minute walk"]
      },
      {
        title: "Noun + noun vs of-phrase",
        content: "Many noun+noun compounds have an equivalent 'of' phrase. Both are often correct but one may sound more natural.",
        examples: ["the car door / the door of the car", "the film star / the star of the film", "the city centre / the centre of the city"]
      }
    ],
    listen_sentences: [
      "The bus stop is right outside my house.",
      "She put her card in the credit card machine.",
      "It was only a ten-minute walk from the station.",
      "The swimming pool opens at seven.",
      "He left his keys on the kitchen table."
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Where is the ___?",
        options: ["stop bus", "bus stop", "buses stop", "stop of bus"],
        answer: "bus stop",
        hint: "The first noun (bus) modifies the second noun (stop) — noun + noun order.",
        explanation: "In English, the first noun modifies the second: 'bus stop', not 'stop bus'. The first noun is always singular: 'bus stop', not 'buses stop'."
      },
      {
        id: 2,
        type: "fill_blank",
        question: "She bought a new ___ bag for work.",
        answer: "hand",
        options: ["hand", "hands", "handling", "the hand"],
        hint: "The compound noun is 'handbag' — the modifier stays singular.",
        explanation: "'Handbag' is the compound noun (hand + bag). The first noun 'hand' stays singular. We write it as one word or two: handbag / hand bag."
      },
      {
        id: 3,
        type: "true_false",
        question: "In 'a shoes shop', the first noun should be singular.",
        answer: "true",
        hint: "The first noun in a noun+noun compound is almost always singular.",
        explanation: "The first noun in a compound is singular: 'a shoe shop' (not 'a shoes shop'). Even though the shop sells many shoes, the modifier 'shoe' stays singular."
      },
      {
        id: 4,
        type: "error_correction",
        question: "Find the error: 'I always park in the cars park.'",
        answer: "the car park",
        hint: "The first noun in a compound must be singular — not 'cars'.",
        explanation: "First noun in compound is singular: 'car park', not 'cars park'. This is a fixed rule — the modifier noun does not become plural even if the meaning implies many cars."
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "It was a ___ journey.",
        options: ["five hours", "five-hours", "five-hour", "fives-hour"],
        answer: "five-hour",
        hint: "When a number + noun comes before another noun, hyphenate it and keep the noun singular.",
        explanation: "When used before a noun, measurement phrases are hyphenated and the unit stays singular: 'a five-hour journey', 'a two-week holiday', 'a ten-minute walk'."
      },
      {
        id: 6,
        type: "fill_blank",
        question: "He works as a ___ star — very famous in films.",
        answer: "film",
        options: ["film", "films", "filming", "filmed"],
        hint: "The first noun (film) modifies 'star' and stays singular.",
        explanation: "'Film star' is a compound noun where 'film' describes what kind of star. The first noun is always singular: 'film star', not 'films star'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: pool / near / is / swimming / The / here",
        answer: "The swimming pool is near here",
        options: ["The", "swimming", "pool", "is", "near", "here"],
        hint: "'Swimming pool' is a compound noun — 'swimming' modifies 'pool'.",
        explanation: "'Swimming pool' is a noun+noun compound where 'swimming' acts as the modifier. Word order: The + compound noun + verb + location."
      },
      {
        id: 8,
        type: "true_false",
        question: "'A tooth paste' should be written as one word: 'toothpaste'.",
        answer: "true",
        hint: "Many common compound nouns have merged into a single word over time.",
        explanation: "'Toothpaste' is written as one word because the compound has become so common it merged. Other examples: sunscreen, handbag, bookshelf."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "She is a ___.",
        options: ["news presenter", "news presenting", "newsed presenter", "presenting news"],
        answer: "news presenter",
        hint: "'News' is the modifier noun and comes first before 'presenter'.",
        explanation: "'News presenter' is the compound noun where 'news' modifies 'presenter'. The noun+noun order puts the modifier first: news presenter, not presenter of news."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "I'll meet you at the ___ station.",
        answer: "train",
        options: ["train", "trains", "training", "the train"],
        hint: "The first noun 'train' modifies 'station' and stays singular.",
        explanation: "'Train station' is the compound noun. The first noun 'train' stays singular even though many trains use the station. We say 'train station', not 'trains station'."
      }
    ]
  },
  {
    id: 77,
    title: "'s (Possessive)",
    category: "Articles & Nouns",
    section: "Articles & Nouns",
    key_rule: "Use 's for people and animals. For things, use 'of'. For names ending in -s, add 's or just '. For plural nouns ending in -s, add only '.",
    examples: [
      "my friend's car, the cat's tail (people/animals)",
      "the door of the car, the top of the building (things)",
      "Charles's book / Charles' book (names ending in -s)",
      "the teachers' room (plural — apostrophe after -s)"
    ],
    common_mistakes: [
      "Using 's with things: 'the table's leg' is less natural than 'the leg of the table'",
      "Misplacing apostrophe: 'the teachers's room' (wrong)"
    ],
    study_cards: [
      {
        title: "Singular possessive",
        content: "For singular nouns, add apostrophe + s to show possession.",
        examples: ["the boy's bag (the bag belongs to the boy)", "Sarah's phone", "the dog's tail"]
      },
      {
        title: "Plural possessive (ending in -s)",
        content: "For regular plural nouns ending in -s, add only an apostrophe after the -s.",
        examples: ["the boys' team (the team of the boys)", "the teachers' lounge", "the students' books"]
      },
      {
        title: "Irregular plural possessives",
        content: "For irregular plurals that don't end in -s, add apostrophe + s.",
        examples: ["the children's books", "the men's room", "the women's team"]
      },
      {
        title: "Things — use 'of'",
        content: "For inanimate things, 'of' is more natural than 's.",
        examples: ["the roof of the house (not 'the house's roof')", "the end of the film", "the leg of the table"]
      },
      {
        title: "Time expressions",
        content: "Possessive 's is used naturally with time expressions.",
        examples: ["yesterday's news", "today's meeting", "last week's report"]
      }
    ],
    listen_sentences: [
      "Did you find my sister's keys?",
      "The children's playground is at the back.",
      "I read it in yesterday's newspaper.",
      "The top of the building is covered in glass.",
      "The teachers' meeting is at four o'clock."
    ],
    questions: [
      {
        id: 1,
        type: "fill_blank",
        question: "That is my ___. (brother / car)",
        answer: "brother's car",
        options: ["brother's car", "brothers car", "brother car", "car's brother"],
        hint: "Add apostrophe + s to the owner (brother) to show possession.",
        explanation: "For singular nouns, add 's to show possession: 'brother's car'. The apostrophe shows ownership. Without it ('brothers car'), the meaning is unclear."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "The ___ room is upstairs. (children)",
        options: ["childrens'", "children's", "childrens", "children"],
        answer: "children's",
        hint: "'Children' is an irregular plural not ending in -s, so add 's.",
        explanation: "Irregular plurals that don't end in -s add apostrophe + s: children's, men's, women's. We do NOT say 'childrens'' because 'children' doesn't end in -s."
      },
      {
        id: 3,
        type: "true_false",
        question: "'The leg of the table' is more natural than 'the table's leg'.",
        answer: "true",
        hint: "For inanimate objects, the 'of' structure is generally more natural.",
        explanation: "For things, we prefer 'of': the leg of the table, the roof of the house. Using 's with inanimate objects ('the table's leg') is grammatically possible but sounds unnatural."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "___ meeting was very productive. (yesterday)",
        answer: "Yesterday's",
        options: ["Yesterday's", "Yesterdays'", "Yesterday", "Yesterday is"],
        hint: "Use 's with time expressions to show they relate to the noun.",
        explanation: "We use 's with time words: yesterday's meeting, today's news, last week's results. This is a common pattern for time-related possessives."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'The teachers's coffee machine is broken.'",
        answer: "The teachers' coffee machine",
        hint: "For plural nouns already ending in -s, add only an apostrophe — not 's.",
        explanation: "For plural nouns ending in -s, add only an apostrophe: teachers'. Adding 's after the apostrophe ('teachers's') is a common mistake — the correct form is 'teachers'."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "I'm going to ___ house tonight.",
        options: ["James's", "James'", "James", "Both A and B are acceptable"],
        answer: "Both A and B are acceptable",
        hint: "Names ending in -s can form the possessive with either 's or just '.",
        explanation: "For names ending in -s (James, Charles, Chris), both forms are acceptable: James's or James'. Both are correct — style guides differ on which to prefer."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: the / end / film / the / of / I / enjoyed",
        answer: "I enjoyed the end of the film",
        options: ["I", "enjoyed", "the", "end", "of", "the", "film"],
        hint: "For inanimate things like 'film', use the 'of' structure.",
        explanation: "For things, we use 'of': the end of the film (not 'the film's end'). Word order: subject + verb + the + noun + of + the + noun."
      },
      {
        id: 8,
        type: "true_false",
        question: "'The men's shirts are on sale' is correct.",
        answer: "true",
        hint: "'Men' is an irregular plural not ending in -s, so add 's.",
        explanation: "'Men' is an irregular plural, so we add 's: men's shirts. This follows the rule for irregular plurals (children's, women's). The possessive is correct."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "She borrowed her ___ bike. (friend)",
        answer: "friend's",
        options: ["friend's", "friends'", "friends", "friend"],
        hint: "One friend owns the bike — use the singular possessive.",
        explanation: "'Friend's' (singular possessive) is correct here — one friend owns the bike. 'Friends'' (plural possessive) would mean multiple friends own it together."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "We sat on the ___ of the hill.",
        options: ["hill's top", "top of the hill", "top's hill", "hills top"],
        answer: "top of the hill",
        hint: "For geographic features and inanimate things, use the 'of' structure.",
        explanation: "For inanimate things, 'of' is more natural: 'the top of the hill'. Although 'the hill's top' is grammatically possible, 'of' is the preferred structure for places and things."
      }
    ]
  },
  {
    id: 78,
    title: "Myself / Yourself etc. (Reflexive Pronouns)",
    category: "Articles & Nouns",
    section: "Articles & Nouns",
    key_rule: "Reflexive pronouns (myself, yourself, himself, herself, itself, ourselves, yourselves, themselves) are used when the subject and object are the same person, or for emphasis.",
    examples: [
      "She cut herself while cooking.",
      "I did it myself. (emphasis — without help)",
      "He looked at himself in the mirror.",
      "The machine turns itself off automatically."
    ],
    common_mistakes: [
      "Overusing reflexive when not needed: 'Enjoy yourself' (correct) vs 'He sat himself down' (unusual)",
      "Using wrong form: 'theirself' (wrong, say 'themselves')"
    ],
    study_cards: [
      {
        title: "Reflexive pronoun forms",
        content: "Each subject pronoun has its own reflexive form. Learn them as pairs.",
        examples: ["I → myself, you → yourself/yourselves", "he → himself, she → herself, it → itself", "we → ourselves, they → themselves"]
      },
      {
        title: "Object = subject",
        content: "Use a reflexive pronoun when the action comes back to the subject — the doer and receiver are the same person.",
        examples: ["She hurt herself.", "They blamed themselves.", "He looked at himself in the mirror."]
      },
      {
        title: "Emphasis",
        content: "Reflexive pronouns can add emphasis to show someone did something without help or that it is surprising.",
        examples: ["I'll do it myself. (without help)", "The president himself attended.", "She organized everything herself."]
      },
      {
        title: "By + reflexive = alone",
        content: "'By + reflexive pronoun' means alone or without help from others.",
        examples: ["She lives by herself. (alone)", "He did it by himself. (without help)", "They built the house by themselves."]
      },
      {
        title: "Not always reflexive",
        content: "Some verbs don't need a reflexive pronoun in English even when other languages use them.",
        examples: ["I feel tired. (not 'I feel myself tired')", "She concentrated. (not 'concentrated herself')", "He relaxed on the sofa."]
      }
    ],
    listen_sentences: [
      "He taught himself to play guitar.",
      "Please help yourselves to the food.",
      "She organized the whole event herself.",
      "The door opened by itself.",
      "We found ourselves lost in the city."
    ],
    questions: [
      {
        id: 1,
        type: "fill_blank",
        question: "She hurt ___ when she fell.",
        answer: "herself",
        options: ["herself", "hisself", "myself", "himself"],
        hint: "The subject is 'she', so the reflexive pronoun must match.",
        explanation: "The subject is 'she', so the reflexive pronoun is 'herself'. The action (hurting) comes back to the subject — she hurt herself. 'Hisself' is not a real word."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "They did all the work ___.",
        options: ["theirself", "themself", "themselves", "theirselves"],
        answer: "themselves",
        hint: "The reflexive for 'they' is 'themselves' — note the spelling.",
        explanation: "'Themselves' is the correct reflexive for 'they'. 'Theirself' and 'theirselves' are not standard English. 'Themself' is sometimes used for singular 'they' but 'themselves' is standard."
      },
      {
        id: 3,
        type: "true_false",
        question: "'By himself' means 'with someone else'.",
        answer: "false",
        hint: "'By + reflexive' means alone or without help.",
        explanation: "'By himself' means alone or without help. 'He did it by himself' = he did it alone, without anyone helping. It is the opposite of 'with someone else'."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "I'm going to treat ___ to a nice dinner tonight.",
        answer: "myself",
        options: ["myself", "me", "my", "mine"],
        hint: "The subject is 'I' and the action comes back to the subject.",
        explanation: "'Treat myself' is correct because the subject (I) is also the one being treated. This is a typical reflexive construction: I am treating myself."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'He introduced hisself to the class.'",
        answer: "introduced himself",
        hint: "'Hisself' is not a real English word — find the correct reflexive for 'he'.",
        explanation: "'Hisself' is not a word — the correct reflexive for 'he' is 'himself'. Always form reflexives with the base pronoun: him → himself (not 'his' + self)."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "The president ___ opened the ceremony.",
        options: ["himself", "itself", "herself", "myself"],
        answer: "himself",
        hint: "This reflexive is used for emphasis to show it was the president personally.",
        explanation: "'Himself' is used here for emphasis — the president did it personally, not a representative. 'The president himself' shows how surprising or important this is."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: himself / fixed / He / by / the / car",
        answer: "He fixed the car by himself",
        options: ["He", "fixed", "the", "car", "by", "himself"],
        hint: "'By himself' means alone — it goes at the end of the sentence.",
        explanation: "'By himself' means he fixed it alone, without help. Word order: subject + verb + object + by + reflexive pronoun."
      },
      {
        id: 8,
        type: "true_false",
        question: "'Please help yourself' is a correct invitation.",
        answer: "true",
        hint: "'Help yourself' is a common fixed expression inviting someone to take something.",
        explanation: "'Help yourself' is a standard English expression meaning 'please take what you want'. It uses the reflexive pronoun 'yourself' because you are helping you."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "The heating turns ___ off at midnight.",
        answer: "itself",
        options: ["itself", "himself", "themselves", "yourself"],
        hint: "The heating is an inanimate thing — use the reflexive for 'it'.",
        explanation: "'Itself' is the reflexive for 'it'. The heating (an object) turns itself off — the action comes back to the subject. We use 'itself' for machines, objects, and animals without a known gender."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "She lives ___.",
        options: ["by herself", "by hers", "by she", "by herself's"],
        answer: "by herself",
        hint: "'By + reflexive' means alone — the reflexive for 'she' is 'herself'.",
        explanation: "'By herself' means she lives alone. 'By' + reflexive pronoun expresses being alone or doing something without help. 'By hers' and 'by she' are grammatically incorrect."
      }
    ]
  },
  {
    id: 79,
    title: "No Article with Plural and Uncountable Nouns",
    category: "Articles & Nouns",
    section: "Articles & Nouns",
    key_rule: "When making general statements about a plural countable noun or an uncountable noun, use no article. Use 'the' only when referring to something specific.",
    examples: [
      "Dogs make good pets. (general) vs. The dogs in the park were friendly. (specific)",
      "Money can't buy happiness. (general concept)",
      "I love music. vs. I loved the music at the party.",
      "Life is short. vs. The life of a teacher is rewarding."
    ],
    common_mistakes: [
      "Adding 'the' to general statements: 'The dogs are loyal animals' (wrong for general claim)",
      "Omitting 'the' for specific nouns: 'Dogs in garden are barking' (needs 'The dogs')"
    ],
    study_cards: [
      {
        title: "General statements",
        content: "When making a general statement about something (all examples of that thing), use no article.",
        examples: ["Children need love and care.", "Water is essential for life.", "Books can change your life."]
      },
      {
        title: "Specific reference",
        content: "When referring to specific people or things known to both speakers, use 'the'.",
        examples: ["The children in this class work very hard.", "The water in this lake is very cold.", "The books on that shelf are all classics."]
      },
      {
        title: "Abstract nouns (general)",
        content: "Abstract nouns used in a general sense take no article.",
        examples: ["Love is a powerful emotion.", "Freedom is important to everyone.", "Time flies when you are having fun."]
      },
      {
        title: "Plural countable (general)",
        content: "When speaking about things in general, plural countable nouns take no article.",
        examples: ["Cats sleep a lot.", "Birds can fly south in winter.", "Smartphones have changed communication."]
      },
      {
        title: "Uncountable (general vs specific)",
        content: "Uncountable nouns take no article in general statements but take 'the' for specific references.",
        examples: ["Rice is a staple food in Asia. (general)", "The rice we had was delicious. (specific)", "Music calms the mind. (general)"]
      }
    ],
    listen_sentences: [
      "Gold is more expensive than silver.",
      "I enjoy classical music.",
      "The gold in this ring is very pure.",
      "Teachers work very hard.",
      "The teachers at my school are all very kind."
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "___ dogs are loyal animals.",
        options: ["The", "A", "—", "Some"],
        answer: "—",
        hint: "This is a general statement about all dogs — no article needed.",
        explanation: "When making a general statement about all dogs, use no article: 'Dogs are loyal animals.' 'The dogs' would mean specific dogs already mentioned."
      },
      {
        id: 2,
        type: "fill_blank",
        question: "___ music at the party was amazing.",
        answer: "The",
        options: ["The", "A", "—", "Some"],
        hint: "This refers to specific music at a specific party — both speakers know which.",
        explanation: "'The music at the party' refers to specific music that both speakers heard. When 'music' is specific, use 'the'. When general ('I love music'), use no article."
      },
      {
        id: 3,
        type: "true_false",
        question: "'Life is beautiful' is a correct general statement without an article.",
        answer: "true",
        hint: "Abstract nouns like 'life' in general statements take no article.",
        explanation: "'Life is beautiful' is a general statement about life in general — no article is correct. If we said 'The life of a teacher is rewarding', we use 'the' because it is specific."
      },
      {
        id: 4,
        type: "error_correction",
        question: "Find the error: 'The love is the most important thing in life.'",
        answer: "Love is",
        hint: "Abstract nouns in general statements take no article.",
        explanation: "For general abstract concepts, omit 'the': 'Love is the most important thing.' We only say 'The love' when referring to a specific love, e.g., 'The love between them was clear.'"
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "___ rice we had for dinner was delicious.",
        options: ["The", "A", "—", "Some"],
        answer: "The",
        hint: "This refers to specific rice at a specific dinner — both speakers know which.",
        explanation: "'The rice we had for dinner' refers to specific rice — we ate it together. Compare: 'Rice is a staple food' (general, no article) vs 'The rice was delicious' (specific, use 'the')."
      },
      {
        id: 6,
        type: "fill_blank",
        question: "___ freedom is something everyone deserves.",
        answer: "—",
        options: ["—", "The", "A", "An"],
        hint: "'Freedom' is an abstract concept used in a general statement here.",
        explanation: "'Freedom' as an abstract concept in a general statement takes no article. We say 'Freedom is important', not 'The freedom is important'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: very / are / Birds / creatures / fascinating",
        answer: "Birds are very fascinating creatures",
        options: ["Birds", "are", "very", "fascinating", "creatures"],
        hint: "'Birds' here is a general statement about all birds — no article.",
        explanation: "'Birds are very fascinating creatures' is a general statement. No article is needed before 'Birds' or 'creatures' in a general statement. Word order: subject + verb + adverb + adjective + noun."
      },
      {
        id: 8,
        type: "true_false",
        question: "'The water in this lake is very clear' is correct.",
        answer: "true",
        hint: "This refers to specific water in a specific lake — 'the' is correct.",
        explanation: "'The water in this lake' refers to specific water we can both see. We use 'the' for specific references. Compare: 'Water is essential' (general, no article)."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "___ teachers in this school are excellent.",
        options: ["The", "—", "A", "An"],
        answer: "The",
        hint: "This refers to specific teachers in a specific school — 'the' is needed.",
        explanation: "'The teachers in this school' refers to specific teachers we both know about. We use 'the' because the noun is specific. 'Teachers are important' (general, no article) would be different."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "___ gold is a precious metal. ___ gold in her ring is 18 carat.",
        answer: "— / The",
        options: ["— / The", "The / The", "A / The", "— / A"],
        hint: "First blank: general statement about gold. Second blank: specific gold in her ring.",
        explanation: "First blank: 'Gold is a precious metal' is a general statement — no article. Second blank: 'The gold in her ring' is specific gold we are talking about — use 'the'."
      }
    ]
  },
  {
    id: 80,
    title: "Much, Many, Little, Few, A Lot, Plenty",
    category: "Articles & Nouns",
    section: "Articles & Nouns",
    key_rule: "Use 'much/little' with uncountable nouns and 'many/few' with countable nouns. 'A lot of' and 'plenty of' work with both. 'A little/a few' = some (positive); 'little/few' = not much/many (negative).",
    examples: [
      "much water, little time (uncountable)",
      "many books, few people (countable)",
      "a little money = some money (enough); little money = not much (not enough)",
      "a few friends = some friends; few friends = not many friends"
    ],
    common_mistakes: [
      "Using 'much' with countable: 'much books' (wrong → many books)",
      "Confusing 'a few' and 'few': 'I have a few problems' (manageable) vs 'I have few friends' (lonely)"
    ],
    study_cards: [
      {
        title: "Much + uncountable",
        content: "Use 'much' with uncountable nouns, mainly in questions and negatives.",
        examples: ["How much time do we have?", "There isn't much traffic today.", "She doesn't have much money."]
      },
      {
        title: "Many + countable",
        content: "Use 'many' with plural countable nouns, mainly in questions and negatives.",
        examples: ["How many people are coming?", "There aren't many books left.", "Not many students passed the test."]
      },
      {
        title: "A little (positive meaning)",
        content: "'A little' with uncountable nouns means 'some' — a small but sufficient amount.",
        examples: ["I have a little money. (some — enough)", "She speaks a little French.", "Can I have a little help?"]
      },
      {
        title: "Little (negative meaning)",
        content: "'Little' without 'a' means 'not much' — a very small, insufficient amount.",
        examples: ["There is little hope. (hardly any)", "He has little experience.", "We have little time left."]
      },
      {
        title: "A few vs few",
        content: "'A few' (positive) = some countable things. 'Few' (negative) = not many — implies there should be more.",
        examples: ["I have a few friends here. (some — enough)", "I have few friends here. (not many — lonely)", "A few people came. vs Few people came."]
      }
    ],
    listen_sentences: [
      "There is very little time left before the deadline.",
      "She has made a lot of progress recently.",
      "How many students are in your class?",
      "I have a few ideas we could try.",
      "Unfortunately, few people attended the event."
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "How ___ sugar do you want?",
        options: ["many", "few", "much", "a few"],
        answer: "much",
        hint: "'Sugar' is uncountable — choose the quantifier for uncountable nouns.",
        explanation: "'Sugar' is uncountable, so we use 'much': 'How much sugar?' We use 'many' with countable nouns: 'How many spoons of sugar?' not 'How many sugar?'"
      },
      {
        id: 2,
        type: "fill_blank",
        question: "She has ___ friends here — she's quite lonely.",
        answer: "few",
        options: ["few", "a few", "little", "much"],
        hint: "The context 'lonely' tells us this is negative — not many friends.",
        explanation: "'Few' (without 'a') has a negative meaning: she doesn't have many friends. 'A few friends' would suggest she has some friends — a more positive idea."
      },
      {
        id: 3,
        type: "true_false",
        question: "'I have a little money' implies I have enough for now.",
        answer: "true",
        hint: "'A little' has a positive meaning — some, enough.",
        explanation: "'A little money' means I have some money — a small but sufficient amount. This is positive. 'Little money' (without 'a') would mean I barely have any money — negative."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "There are ___ cars on the road this morning.",
        options: ["much", "little", "many", "a little"],
        answer: "many",
        hint: "'Cars' is countable — use the quantifier for countable plural nouns.",
        explanation: "'Cars' is countable (plural), so we use 'many': 'many cars'. We use 'much' with uncountable nouns like 'traffic', 'water', 'money'."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'I don't have much friends in this city.'",
        answer: "many friends",
        hint: "'Friends' is countable — 'much' is for uncountable nouns.",
        explanation: "'Friends' is countable, so use 'many': 'I don't have many friends.' 'Much' is for uncountable nouns. This is a very common error."
      },
      {
        id: 6,
        type: "fill_blank",
        question: "We have ___ time left, so let's hurry. (not much)",
        answer: "little",
        options: ["little", "a little", "few", "a few"],
        hint: "The hint says 'not much' — the negative form of the uncountable quantifier.",
        explanation: "'Little' (without 'a') means not much — a negative idea. 'We have little time' = we are running out of time. 'A little time' would mean we still have enough."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: of / There / students / lot / were / a",
        answer: "There were a lot of students",
        options: ["There", "were", "a", "lot", "of", "students"],
        hint: "'A lot of' works with both countable and uncountable nouns.",
        explanation: "'A lot of students' uses 'a lot of' which works with both countable and uncountable nouns. Word order: There + verb + a lot of + noun."
      },
      {
        id: 8,
        type: "true_false",
        question: "'A few books' and 'few books' have the same positive meaning.",
        answer: "false",
        hint: "'A few' is positive (some); 'few' without 'a' is negative (not many).",
        explanation: "'A few books' is positive — I have some books, which is fine. 'Few books' is negative — I barely have any books, which is a problem. The 'a' makes a big difference."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "___ of the food was left after the party.",
        options: ["Few", "Many", "Plenty", "Much"],
        answer: "Plenty",
        hint: "'Plenty of' works with uncountable nouns and means more than enough.",
        explanation: "'Plenty of food' means a lot — more than enough. 'Much of the food' is possible but less natural here. 'Few' and 'Many' are for countable nouns."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "He gave me ___ advice — just enough to help.",
        answer: "a little",
        options: ["a little", "little", "a few", "few"],
        hint: "'Advice' is uncountable and 'just enough' signals a positive, small amount.",
        explanation: "'A little advice' is correct — 'advice' is uncountable, and 'a little' means a small but useful amount (positive). 'Little advice' would mean barely any advice at all."
      }
    ]
  },
  {
    id: 81,
    title: "Articles: Revision",
    category: "Articles & Nouns",
    section: "Articles & Nouns",
    key_rule: "Comprehensive review of a/an, the, and no article — covering all contexts: first vs second mention, general vs specific, institutions, geography, meals, and quantifiers.",
    examples: [
      "A man came in. The man sat down.",
      "The Thames is a river in England.",
      "She is a teacher. / She studies mathematics.",
      "They had lunch. / The lunch was delicious."
    ],
    common_mistakes: [
      "Using 'the' for general plural statements",
      "Missing 'the' for second mention or specific reference"
    ],
    study_cards: [
      {
        title: "a / an",
        content: "Use 'a/an' for first mention, non-specific nouns, and jobs. 'An' before vowel sounds.",
        examples: ["I saw a car. (first mention)", "She is an engineer. (job)", "He bought an orange. (vowel sound)"]
      },
      {
        title: "the",
        content: "Use 'the' for second mention, unique things, superlatives, ordinals, and specific references.",
        examples: ["The car was red. (second mention)", "The sun is bright. (unique)", "It's the best film I've seen. (superlative)"]
      },
      {
        title: "No article",
        content: "Use no article for general statements with plural or uncountable nouns, meals, languages, sports, and most country/city names.",
        examples: ["Dogs are loyal. (general)", "Have breakfast. (meal)", "She speaks French. (language)"]
      },
      {
        title: "Geography rule",
        content: "Use 'the' with rivers, mountain ranges, oceans, and some countries. No article with most countries, cities, and individual mountains or lakes.",
        examples: ["the Nile, the Alps, the Pacific (use 'the')", "France, Tokyo, Mount Fuji (no article)", "the USA, the Netherlands (plural/special countries)"]
      },
      {
        title: "Institutions",
        content: "No article when using an institution for its purpose. Use 'the' when referring to the physical building.",
        examples: ["She went to school. (purpose)", "The school is on Park Street. (building)", "He is in hospital. (patient) vs. at the hospital (visiting)"]
      }
    ],
    listen_sentences: [
      "There's a good film on TV. The film starts at nine.",
      "She went to school at seven and came home at three.",
      "The Sahara Desert is in Africa.",
      "I love jazz music.",
      "Could you pass me the salt?"
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "I had ___ interesting conversation with ___ man I met on the train.",
        options: ["an / a", "the / a", "a / the", "an / the"],
        answer: "an / a",
        hint: "'Interesting' starts with a vowel sound; both nouns are first mention.",
        explanation: "'An interesting conversation' uses 'an' because 'interesting' starts with a vowel sound. 'A man' uses 'a' because it is first mention of this man — he hasn't been introduced yet."
      },
      {
        id: 2,
        type: "fill_blank",
        question: "___ man I told you about called this morning.",
        answer: "The",
        options: ["The", "A", "An", "—"],
        hint: "The listener already knows which man — 'the man I told you about'.",
        explanation: "'The man' is correct because this man was already mentioned (I told you about him). The listener knows exactly which man — it is a specific reference, so we use 'the'."
      },
      {
        id: 3,
        type: "true_false",
        question: "'She plays the piano' — using 'the' before a musical instrument is correct.",
        answer: "true",
        hint: "Musical instruments always take 'the' when you play them.",
        explanation: "Musical instruments take 'the' when used with 'play': play the piano, play the guitar, play the violin. This is a fixed rule in English grammar."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "___ English is spoken as a first language in Australia.",
        options: ["The", "A", "An", "—"],
        answer: "—",
        hint: "Language names take no article in general statements.",
        explanation: "Languages take no article in general statements: 'English is spoken in Australia', 'French is the official language.' We never say 'The English is spoken.'"
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'He was taken to a hospital by an ambulance.'",
        answer: "to hospital",
        hint: "He is a patient being treated — this is the purpose of a hospital, so no article.",
        explanation: "When someone is a patient (using the hospital for its purpose), use no article: 'taken to hospital'. 'A hospital' would suggest any hospital, and 'the hospital' implies a specific building."
      },
      {
        id: 6,
        type: "fill_blank",
        question: "___ Himalayas are ___ highest mountain range in ___ world.",
        answer: "The / the / the",
        options: ["The / the / the", "The / a / the", "— / the / —", "The / — / a"],
        hint: "Mountain ranges, superlatives, and unique nouns like 'world' all take 'the'.",
        explanation: "'The Himalayas' (mountain range), 'the highest' (superlative), and 'the world' (unique noun) all require 'the'. This sentence uses three different reasons to use 'the'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: the / plays / She / violin / and / piano / the",
        answer: "She plays the violin and the piano",
        options: ["She", "plays", "the", "violin", "and", "the", "piano"],
        hint: "Musical instruments always take 'the' when used with 'play'.",
        explanation: "Musical instruments take 'the': 'the violin', 'the piano'. We use 'the' before each instrument. Word order: subject + plays + the + instrument + and + the + instrument."
      },
      {
        id: 8,
        type: "true_false",
        question: "'Happiness is more important than money' uses articles correctly.",
        answer: "true",
        hint: "Abstract nouns like 'happiness' and 'money' take no article in general statements.",
        explanation: "Both 'happiness' and 'money' are used in a general sense here — no article is correct. Abstract nouns and uncountable nouns in general statements take no article."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "We usually have ___ lunch at around one o'clock.",
        options: ["the", "a", "—", "an"],
        answer: "—",
        hint: "Meal names take no article in general use.",
        explanation: "Meals take no article in general statements: have lunch, eat breakfast, cook dinner. We say 'We usually have lunch at one' — no article before the meal name."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "___ Pacific Ocean is ___ largest ocean in ___ world.",
        answer: "The / the / the",
        options: ["The / the / the", "— / a / the", "The / a / —", "The / the / —"],
        hint: "Oceans, superlatives, and 'world' all require 'the'.",
        explanation: "'The Pacific Ocean' (ocean name), 'the largest' (superlative), and 'the world' (unique noun) all take 'the'. Three different rules all lead to the same article."
      }
    ]
  }
];

export default articlesAndNouns;
