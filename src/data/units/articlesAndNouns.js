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
      { front: "First mention", back: "Use 'a/an': I bought a new phone." },
      { front: "Second mention", back: "Use 'the': The phone is great." },
      { front: "Unique things", back: "Use 'the': the sun, the moon, the sky" },
      { front: "Before consonant sound", back: "Use 'a': a cat, a university" },
      { front: "Before vowel sound", back: "Use 'an': an apple, an hour" }
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
        type: "fill_blank",
        prompt: "I saw ___ dog in the park. ___ dog was very friendly.",
        answer: "a / The",
        options: ["a / The", "the / A", "a / A", "the / The"]
      },
      {
        type: "multiple_choice",
        prompt: "Which is correct?",
        options: ["She is an teacher.", "She is a teacher.", "She is the teacher.", "She is teacher."],
        answer: "She is a teacher."
      },
      {
        type: "true_false",
        prompt: "'The moon is very bright tonight' — is 'the' correct here?",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "___ sun rises in the east.",
        answer: "The",
        options: ["The", "A", "An", "—"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'Can you close a door? It's cold.'",
        answer: "the door",
        explanation: "We say 'the door' because both people know which door is meant."
      },
      {
        type: "multiple_choice",
        prompt: "He waited for ___ hour.",
        options: ["a", "an", "the", "—"],
        answer: "an"
      },
      {
        type: "fill_blank",
        prompt: "I need to see ___ doctor. Do you know ___ good one?",
        answer: "a / a",
        options: ["a / a", "the / the", "a / the", "the / a"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: saw / a / I / film / interesting",
        answer: "I saw an interesting film",
        items: ["I", "saw", "an", "interesting", "film"]
      },
      {
        type: "true_false",
        prompt: "'I bought a milk' is correct.",
        answer: "false"
      },
      {
        type: "multiple_choice",
        prompt: "We live on ___ third floor.",
        options: ["a", "an", "the", "—"],
        answer: "the"
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
      { front: "Superlatives", back: "Always use 'the': the biggest, the most beautiful" },
      { front: "Ordinal numbers", back: "Use 'the': the first, the second, the last" },
      { front: "Jobs", back: "Use 'a/an': She's a nurse. He's an engineer." },
      { front: "'Only'", back: "Use 'the': It's the only solution." },
      { front: "Unique items in context", back: "Use 'the': Can you turn off the light?" }
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
        type: "fill_blank",
        prompt: "That was ___ best meal I've ever had.",
        answer: "the",
        options: ["the", "a", "an", "—"]
      },
      {
        type: "multiple_choice",
        prompt: "She wants to be ___ architect.",
        options: ["a", "an", "the", "—"],
        answer: "an"
      },
      {
        type: "true_false",
        prompt: "'He is the doctor' is correct when describing someone's job.",
        answer: "false"
      },
      {
        type: "fill_blank",
        prompt: "It's ___ second time she has won ___ competition.",
        answer: "the / the",
        options: ["the / the", "a / a", "the / a", "a / the"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'She is a best player on the team.'",
        answer: "the best player",
        explanation: "Use 'the' with superlatives."
      },
      {
        type: "multiple_choice",
        prompt: "The Nile is ___ longest river in Africa.",
        options: ["a", "an", "the", "—"],
        answer: "the"
      },
      {
        type: "drag_order",
        prompt: "Arrange: only / is / This / the / option",
        answer: "This is the only option",
        items: ["This", "is", "the", "only", "option"]
      },
      {
        type: "fill_blank",
        prompt: "My mother is ___ nurse at ___ local hospital.",
        answer: "a / a",
        options: ["a / a", "the / the", "a / the", "an / a"]
      },
      {
        type: "true_false",
        prompt: "'The Amazon' uses 'the' correctly for a river name.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "This is ___ last train tonight.",
        options: ["a", "an", "the", "—"],
        answer: "the"
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
      { front: "Rivers", back: "Use 'the': the Thames, the Mississippi" },
      { front: "Mountain ranges", back: "Use 'the': the Himalayas, the Andes" },
      { front: "Oceans/seas", back: "Use 'the': the Atlantic, the Red Sea" },
      { front: "Most countries", back: "No article: Italy, Japan, Brazil" },
      { front: "Plural/special countries", back: "Use 'the': the Netherlands, the USA" }
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
        type: "fill_blank",
        prompt: "___ Alps are in central Europe.",
        answer: "The",
        options: ["The", "A", "An", "—"]
      },
      {
        type: "multiple_choice",
        prompt: "She has never been to ___ Japan.",
        options: ["a", "the", "—", "an"],
        answer: "—"
      },
      {
        type: "true_false",
        prompt: "'The Pacific Ocean' uses 'the' correctly.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "___ United Kingdom is in ___ Europe.",
        answer: "The / —",
        options: ["The / —", "A / the", "The / the", "— / the"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'I want to visit the France next summer.'",
        answer: "visit France",
        explanation: "Most country names don't take 'the'."
      },
      {
        type: "multiple_choice",
        prompt: "___ Sahara is the largest hot desert.",
        options: ["A", "The", "—", "An"],
        answer: "The"
      },
      {
        type: "drag_order",
        prompt: "Arrange: in / live / They / the / USA",
        answer: "They live in the USA",
        items: ["They", "live", "in", "the", "USA"]
      },
      {
        type: "true_false",
        prompt: "'The Mount Everest' is correct.",
        answer: "false"
      },
      {
        type: "fill_blank",
        prompt: "___ Rhine flows through Germany and ___ Netherlands.",
        answer: "The / the",
        options: ["The / the", "The / —", "— / the", "A / the"]
      },
      {
        type: "multiple_choice",
        prompt: "Which does NOT take 'the'?",
        options: ["the Nile", "the Amazon", "the Lake Superior", "the Atlantic"],
        answer: "the Lake Superior"
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
      { front: "Institutions (purpose)", back: "No 'the': go to school, go to prison, go to bed" },
      { front: "Institutions (building)", back: "Use 'the': The school is on Park Street." },
      { front: "Meals", back: "No article: have breakfast, eat lunch, cook dinner" },
      { front: "Languages/sports", back: "No article: speak Spanish, play football" },
      { front: "Parts of day", back: "Use 'the': in the morning, in the evening" }
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
        type: "multiple_choice",
        prompt: "She is in ___ hospital after the accident.",
        options: ["a", "the", "—", "an"],
        answer: "—"
      },
      {
        type: "fill_blank",
        prompt: "They have ___ breakfast at eight and ___ lunch at one.",
        answer: "— / —",
        options: ["— / —", "the / the", "a / a", "the / a"]
      },
      {
        type: "true_false",
        prompt: "'She speaks the English very well' is correct.",
        answer: "false"
      },
      {
        type: "multiple_choice",
        prompt: "I usually go for a walk ___ morning.",
        options: ["in a", "in the", "in —", "on the"],
        answer: "in the"
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'He plays the tennis every weekend.'",
        answer: "plays tennis",
        explanation: "Sports don't take articles."
      },
      {
        type: "fill_blank",
        prompt: "The children go to ___ school five days a week.",
        answer: "—",
        options: ["—", "the", "a", "an"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: morning / I / in / wake / early / the / up",
        answer: "I wake up early in the morning",
        items: ["I", "wake", "up", "early", "in", "the", "morning"]
      },
      {
        type: "true_false",
        prompt: "'I went to the hospital to visit my friend' is correct.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "What time is ___ dinner?",
        options: ["a", "the", "—", "an"],
        answer: "—"
      },
      {
        type: "fill_blank",
        prompt: "He went to ___ prison for five years. Now he teaches at ___ prison near the town.",
        answer: "— / the",
        options: ["— / the", "the / the", "a / the", "— / a"]
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
      { front: "Countable", back: "Has singular/plural: a book, two books" },
      { front: "Uncountable", back: "No plural, no a/an: water, music, luck" },
      { front: "Common uncountable nouns", back: "advice, information, furniture, luggage, news, weather, money, traffic" },
      { front: "Quantifying uncountable", back: "Use 'some/any/much': some water, any advice" },
      { front: "Piece of", back: "Use 'piece/bit of' for portions: a piece of advice" }
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
        type: "multiple_choice",
        prompt: "Which is correct?",
        options: ["She gave me an advice.", "She gave me some advice.", "She gave me advices.", "She gave me a advice."],
        answer: "She gave me some advice."
      },
      {
        type: "true_false",
        prompt: "'Informations' is a correct plural form.",
        answer: "false"
      },
      {
        type: "fill_blank",
        prompt: "I need ___ help with this problem.",
        answer: "some",
        options: ["some", "a", "an", "many"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'Can I give you an information?'",
        answer: "some information",
        explanation: "'Information' is uncountable — use 'some', not 'an'."
      },
      {
        type: "multiple_choice",
        prompt: "The ___ in the hotel was very comfortable.",
        options: ["furnitures", "a furniture", "furniture", "an furniture"],
        answer: "furniture"
      },
      {
        type: "true_false",
        prompt: "'I have a lot of homework' is correct.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "There was so much ___ that we were late.",
        answer: "traffic",
        options: ["traffic", "traffics", "a traffic", "the traffics"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: piece / need / a / of / I / advice",
        answer: "I need a piece of advice",
        items: ["I", "need", "a", "piece", "of", "advice"]
      },
      {
        type: "multiple_choice",
        prompt: "How much ___ do you have?",
        options: ["luggages", "a luggage", "luggage", "luggages bag"],
        answer: "luggage"
      },
      {
        type: "true_false",
        prompt: "'The news are bad today' is grammatically correct.",
        answer: "false"
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
      { front: "Flexible nouns", back: "Some nouns shift: coffee (drink) vs a coffee (cup)" },
      { front: "Hair", back: "Uncountable (all hair): She has long hair. Countable: I found a hair." },
      { front: "Light", back: "Uncountable (light generally) vs countable: Turn on the lights." },
      { front: "Paper", back: "Uncountable (material) vs countable: a paper (document/newspaper)" },
      { front: "Glass", back: "Uncountable (material) vs countable: a glass (container)" }
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
        type: "multiple_choice",
        prompt: "'Three coffees, please' means:",
        options: ["three cups of coffee", "three coffee beans", "three types of coffee plant", "three sacks of coffee"],
        answer: "three cups of coffee"
      },
      {
        type: "fill_blank",
        prompt: "She has beautiful ___. She never cuts it.",
        answer: "hair",
        options: ["hair", "hairs", "a hair", "the hairs"]
      },
      {
        type: "true_false",
        prompt: "'Can I have a paper?' can mean 'Can I have a newspaper?'",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "The window is made of ___.",
        options: ["a glass", "glasses", "glass", "the glass"],
        answer: "glass"
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'I found two hair in my food.'",
        answer: "two hairs",
        explanation: "When referring to individual strands, 'hair' is countable: two hairs."
      },
      {
        type: "fill_blank",
        prompt: "Could we have four ___ and two waters?",
        answer: "teas",
        options: ["teas", "tea", "a tea", "the tea"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: made / This / of / is / glass / table",
        answer: "This table is made of glass",
        items: ["This", "table", "is", "made", "of", "glass"]
      },
      {
        type: "true_false",
        prompt: "'She has a beautiful hair' is correct when talking about her hairstyle.",
        answer: "false"
      },
      {
        type: "multiple_choice",
        prompt: "Can you turn off ___ lights?",
        options: ["a light", "the light", "the lights", "some light"],
        answer: "the lights"
      },
      {
        type: "fill_blank",
        prompt: "He read it in ___ paper this morning.",
        answer: "the",
        options: ["the", "a", "—", "an"]
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
      { front: "Plural-form singular nouns", back: "news, physics, economics, mathematics — take singular verb" },
      { front: "Collective nouns", back: "team, family, staff — can be singular or plural" },
      { front: "Irregular plurals", back: "child→children, foot→feet, tooth→teeth, mouse→mice" },
      { front: "Always plural", back: "trousers, scissors, glasses — use plural verb" },
      { front: "Person/people", back: "one person → two people (not 'two persons' in informal use)" }
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
        type: "multiple_choice",
        prompt: "The news ___ very bad.",
        options: ["are", "is", "were", "have been"],
        answer: "is"
      },
      {
        type: "fill_blank",
        prompt: "The ___ of 'child' is 'children'.",
        answer: "plural",
        options: ["plural", "singular", "verb", "tense"]
      },
      {
        type: "true_false",
        prompt: "'The scissors is on the table' is correct.",
        answer: "false"
      },
      {
        type: "multiple_choice",
        prompt: "What is the plural of 'tooth'?",
        options: ["tooths", "teethes", "teeth", "toothe"],
        answer: "teeth"
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'There were three childs at the door.'",
        answer: "three children",
        explanation: "The irregular plural of 'child' is 'children'."
      },
      {
        type: "fill_blank",
        prompt: "Physics ___ a difficult subject.",
        answer: "is",
        options: ["is", "are", "were", "have"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: have / My / lost / teeth / I / two",
        answer: "I have lost two teeth",
        items: ["I", "have", "lost", "two", "teeth"]
      },
      {
        type: "true_false",
        prompt: "'The team are playing well' is acceptable in British English.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "Where ___ my trousers?",
        options: ["is", "was", "are", "has"],
        answer: "are"
      },
      {
        type: "fill_blank",
        prompt: "There were five ___ at the meeting, not just one ___ .",
        answer: "people / person",
        options: ["people / person", "persons / people", "peoples / persons", "people / peoples"]
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
      { front: "Noun + noun structure", back: "First noun = modifier (usually singular): a dog food, a car key" },
      { front: "Stress", back: "Stress falls on first noun: BUS stop, CAR park" },
      { front: "Compound nouns", back: "Common pairs: tooth+paste, sun+screen, hand+bag" },
      { front: "Measurement + noun", back: "Hyphenate before a noun: a two-hour film, a ten-year-old boy" },
      { front: "Noun vs of-phrase", back: "Often interchangeable: the car door / the door of the car" }
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
        type: "multiple_choice",
        prompt: "Where is the ___?",
        options: ["stop bus", "bus stop", "buses stop", "stop of bus"],
        answer: "bus stop"
      },
      {
        type: "fill_blank",
        prompt: "She bought a new ___ bag for work.",
        answer: "hand",
        options: ["hand", "hands", "handling", "the hand"]
      },
      {
        type: "true_false",
        prompt: "In 'a shoes shop', the first noun should be singular.",
        answer: "true"
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'I always park in the cars park.'",
        answer: "the car park",
        explanation: "First noun in compound is singular: 'car park', not 'cars park'."
      },
      {
        type: "multiple_choice",
        prompt: "It was a ___ journey.",
        options: ["five hours", "five-hours", "five-hour", "fives-hour"],
        answer: "five-hour"
      },
      {
        type: "fill_blank",
        prompt: "He works as a ___ star — very famous in films.",
        answer: "film",
        options: ["film", "films", "filming", "filmed"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: pool / near / is / swimming / The / here",
        answer: "The swimming pool is near here",
        items: ["The", "swimming", "pool", "is", "near", "here"]
      },
      {
        type: "true_false",
        prompt: "'A tooth paste' should be written as one word: 'toothpaste'.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "She is a ___.",
        options: ["news presenter", "news presenting", "newsed presenter", "presenting news"],
        answer: "news presenter"
      },
      {
        type: "fill_blank",
        prompt: "I'll meet you at the ___ station.",
        answer: "train",
        options: ["train", "trains", "training", "the train"]
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
      { front: "Singular possessive", back: "Add 's: the boy's bag, Sarah's phone" },
      { front: "Plural possessive (ending in -s)", back: "Add ': the boys' team, the teachers' lounge" },
      { front: "Irregular plurals", back: "Add 's: the children's books, the men's room" },
      { front: "Things", back: "Use 'of': the roof of the house, the end of the film" },
      { front: "Time expressions", back: "Use 's: yesterday's news, today's meeting, last week's report" }
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
        type: "fill_blank",
        prompt: "That is my ___. (brother / car)",
        answer: "brother's car",
        options: ["brother's car", "brothers car", "brother car", "car's brother"]
      },
      {
        type: "multiple_choice",
        prompt: "The ___ room is upstairs. (children)",
        options: ["childrens'", "children's", "childrens", "children"],
        answer: "children's"
      },
      {
        type: "true_false",
        prompt: "'The leg of the table' is more natural than 'the table's leg'.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "___ meeting was very productive. (yesterday)",
        answer: "Yesterday's",
        options: ["Yesterday's", "Yesterdays'", "Yesterday", "Yesterday is"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'The teachers's coffee machine is broken.'",
        answer: "The teachers' coffee machine",
        explanation: "For plural nouns ending in -s, add only an apostrophe: teachers'."
      },
      {
        type: "multiple_choice",
        prompt: "I'm going to ___ house tonight.",
        options: ["James's", "James'", "James", "Both A and B are acceptable"],
        answer: "Both A and B are acceptable"
      },
      {
        type: "drag_order",
        prompt: "Arrange: the / end / film / the / of / I / enjoyed",
        answer: "I enjoyed the end of the film",
        items: ["I", "enjoyed", "the", "end", "of", "the", "film"]
      },
      {
        type: "true_false",
        prompt: "'The men's shirts are on sale' is correct.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "She borrowed her ___ bike. (friend)",
        answer: "friend's",
        options: ["friend's", "friends'", "friends", "friend"]
      },
      {
        type: "multiple_choice",
        prompt: "We sat on the ___ of the hill.",
        options: ["hill's top", "top of the hill", "top's hill", "hills top"],
        answer: "top of the hill"
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
      { front: "Reflexive forms", back: "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves" },
      { front: "Object = subject", back: "She hurt herself. They blamed themselves." },
      { front: "Emphasis", back: "I'll do it myself. The president himself attended." },
      { front: "By + reflexive", back: "= alone: She lives by herself. He did it by himself." },
      { front: "Not reflexive", back: "feel/concentrate/relax don't usually need reflexive: I feel tired (not 'feel myself')" }
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
        type: "fill_blank",
        prompt: "She hurt ___ when she fell.",
        answer: "herself",
        options: ["herself", "hisself", "myself", "himself"]
      },
      {
        type: "multiple_choice",
        prompt: "They did all the work ___.",
        options: ["theirself", "themself", "themselves", "theirselves"],
        answer: "themselves"
      },
      {
        type: "true_false",
        prompt: "'By himself' means 'with someone else'.",
        answer: "false"
      },
      {
        type: "fill_blank",
        prompt: "I'm going to treat ___ to a nice dinner tonight.",
        answer: "myself",
        options: ["myself", "me", "my", "mine"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'He introduced hisself to the class.'",
        answer: "introduced himself",
        explanation: "'Hisself' is not a word — the correct form is 'himself'."
      },
      {
        type: "multiple_choice",
        prompt: "The president ___ opened the ceremony.",
        options: ["himself", "itself", "herself", "myself"],
        answer: "himself"
      },
      {
        type: "drag_order",
        prompt: "Arrange: himself / fixed / He / by / the / car",
        answer: "He fixed the car by himself",
        items: ["He", "fixed", "the", "car", "by", "himself"]
      },
      {
        type: "true_false",
        prompt: "'Please help yourself' is a correct invitation.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "The heating turns ___ off at midnight.",
        answer: "itself",
        options: ["itself", "himself", "themselves", "yourself"]
      },
      {
        type: "multiple_choice",
        prompt: "She lives ___.",
        options: ["by herself", "by hers", "by she", "by herself's"],
        answer: "by herself"
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
      { front: "General statements", back: "No article: Children need love. Water is essential." },
      { front: "Specific reference", back: "Use 'the': The children in this class work hard." },
      { front: "Abstract nouns", back: "No article (general): Love, freedom, peace, time" },
      { front: "Plural countable (general)", back: "No article: Cats sleep a lot. Birds can fly." },
      { front: "Uncountable (general)", back: "No article: Rice is a staple food in Asia." }
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
        type: "multiple_choice",
        prompt: "___ dogs are loyal animals.",
        options: ["The", "A", "—", "Some"],
        answer: "—"
      },
      {
        type: "fill_blank",
        prompt: "___ music at the party was amazing.",
        answer: "The",
        options: ["The", "A", "—", "Some"]
      },
      {
        type: "true_false",
        prompt: "'Life is beautiful' is a correct general statement without an article.",
        answer: "true"
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'The love is the most important thing in life.'",
        answer: "Love is",
        explanation: "For general abstract concepts, omit 'the': 'Love is...' not 'The love is...'"
      },
      {
        type: "multiple_choice",
        prompt: "___ rice we had for dinner was delicious.",
        options: ["The", "A", "—", "Some"],
        answer: "The"
      },
      {
        type: "fill_blank",
        prompt: "___ freedom is something everyone deserves.",
        answer: "—",
        options: ["—", "The", "A", "An"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: very / are / Birds / creatures / fascinating",
        answer: "Birds are very fascinating creatures",
        items: ["Birds", "are", "very", "fascinating", "creatures"]
      },
      {
        type: "true_false",
        prompt: "'The water in this lake is very clear' is correct.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "___ teachers in this school are excellent.",
        options: ["The", "—", "A", "An"],
        answer: "The"
      },
      {
        type: "fill_blank",
        prompt: "___ gold is a precious metal. ___ gold in her ring is 18 carat.",
        answer: "— / The",
        options: ["— / The", "The / The", "A / The", "— / A"]
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
      { front: "Much + uncountable", back: "How much time? Not much traffic." },
      { front: "Many + countable", back: "How many people? Not many books." },
      { front: "A little (positive)", back: "I have a little money — enough for now." },
      { front: "Little (negative)", back: "There is little hope — hardly any." },
      { front: "A few / few", back: "I have a few friends (some); I have few friends (not many/sad)" }
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
        type: "multiple_choice",
        prompt: "How ___ sugar do you want?",
        options: ["many", "few", "much", "a few"],
        answer: "much"
      },
      {
        type: "fill_blank",
        prompt: "She has ___ friends here — she's quite lonely.",
        answer: "few",
        options: ["few", "a few", "little", "much"]
      },
      {
        type: "true_false",
        prompt: "'I have a little money' implies I have enough for now.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "There are ___ cars on the road this morning.",
        options: ["much", "little", "many", "a little"],
        answer: "many"
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'I don't have much friends in this city.'",
        answer: "many friends",
        explanation: "'Friends' is countable — use 'many', not 'much'."
      },
      {
        type: "fill_blank",
        prompt: "We have ___ time left, so let's hurry. (not much)",
        answer: "little",
        options: ["little", "a little", "few", "a few"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: of / There / students / lot / were / a",
        answer: "There were a lot of students",
        items: ["There", "were", "a", "lot", "of", "students"]
      },
      {
        type: "true_false",
        prompt: "'A few books' and 'few books' have the same positive meaning.",
        answer: "false"
      },
      {
        type: "multiple_choice",
        prompt: "___ of the food was left after the party.",
        options: ["Few", "Many", "Plenty", "Much"],
        answer: "Plenty"
      },
      {
        type: "fill_blank",
        prompt: "He gave me ___ advice — just enough to help.",
        answer: "a little",
        options: ["a little", "little", "a few", "few"]
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
      { front: "a/an", back: "First mention, non-specific, jobs: a car, a teacher" },
      { front: "the", back: "Second mention, unique, specific: the car, the sun" },
      { front: "No article", back: "General statements: Dogs bark. Music is beautiful." },
      { front: "Geography rule", back: "the + rivers/ranges/oceans; no article + countries/cities" },
      { front: "Institutions", back: "No article for purpose: go to school, go to hospital" }
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
        type: "multiple_choice",
        prompt: "I had ___ interesting conversation with ___ man I met on the train.",
        options: ["an / a", "the / a", "a / the", "an / the"],
        answer: "an / a"
      },
      {
        type: "fill_blank",
        prompt: "___ man I told you about called this morning.",
        answer: "The",
        options: ["The", "A", "An", "—"]
      },
      {
        type: "true_false",
        prompt: "'She plays the piano' — using 'the' before a musical instrument is correct.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "___ English is spoken as a first language in Australia.",
        options: ["The", "A", "An", "—"],
        answer: "—"
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'He was taken to a hospital by an ambulance.'",
        answer: "to hospital",
        explanation: "When someone is being treated, use 'hospital' with no article."
      },
      {
        type: "fill_blank",
        prompt: "___ Himalayas are ___ highest mountain range in ___ world.",
        answer: "The / the / the",
        options: ["The / the / the", "The / a / the", "— / the / —", "The / — / a"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: the / plays / She / violin / and / piano / the",
        answer: "She plays the violin and the piano",
        items: ["She", "plays", "the", "violin", "and", "the", "piano"]
      },
      {
        type: "true_false",
        prompt: "'Happiness is more important than money' uses articles correctly.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "We usually have ___ lunch at around one o'clock.",
        options: ["the", "a", "—", "an"],
        answer: "—"
      },
      {
        type: "fill_blank",
        prompt: "___ Pacific Ocean is ___ largest ocean in ___ world.",
        answer: "The / the / the",
        options: ["The / the / the", "— / a / the", "The / a / —", "The / the / —"]
      }
    ]
  }
];

export default articlesAndNouns;
