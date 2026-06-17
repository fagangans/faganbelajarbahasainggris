const adjectivesAndAdverbs = [
  {
    id: 98,
    title: "Adjectives — Position",
    category: "Adjectives & Adverbs",
    section: "Adjectives & Adverbs",
    key_rule: "Adjectives usually come before the noun or after linking verbs (be, seem, look, feel). When multiple adjectives appear, they follow a specific order: opinion, size, age, shape, colour, origin, material, purpose.",
    examples: [
      "a beautiful old Italian car (opinion → age → origin)",
      "a small round wooden table (size → shape → material)",
      "She looks tired. (after linking verb)",
      "an interesting new black leather bag"
    ],
    common_mistakes: [
      "Wrong order: 'an Italian old beautiful car' (wrong)",
      "Adjective after noun in English: 'a car red' (wrong — that's Spanish/French pattern)"
    ],
    study_cards: [
      {
        title: "Before noun",
        content: "Adjectives in attributive position come directly before the noun they describe.",
        examples: ["a happy child", "an old book", "a beautiful painting"]
      },
      {
        title: "After linking verb",
        content: "Adjectives in predicative position come after linking verbs like be, seem, look, feel.",
        examples: ["She is happy.", "It seems cold.", "The food tastes delicious."]
      },
      {
        title: "Adjective order",
        content: "When stacking multiple adjectives, follow this sequence: Opinion → Size → Age → Shape → Colour → Origin → Material → Purpose.",
        examples: ["a lovely little old round green French silver whittling knife", "a beautiful old Italian car", "a small round wooden table"]
      },
      {
        title: "Example order",
        content: "This famous example shows all adjective categories in the correct sequence.",
        examples: ["a lovely little old round green French silver whittling knife", "a big ugly black American plastic toy gun", "a gorgeous tall young slim blue-eyed Spanish surgeon"]
      },
      {
        title: "Hyphenated adjectives",
        content: "Compound adjectives formed with hyphens are always used in attributive position (before the noun).",
        examples: ["a well-known actor", "a ten-year-old boy", "a state-of-the-art facility"]
      }
    ],
    listen_sentences: [
      "She bought a beautiful blue Italian dress.",
      "The old wooden table needs repainting.",
      "He looks very tired today.",
      "That was an amazing small silver ring.",
      "She seems really happy about the news."
    ],
    questions: [
      {
        id: 1,
        type: "drag_order",
        question: "Arrange adjectives: a ___ car (old / Italian / beautiful)",
        answer: "a beautiful old Italian car",
        options: ["a", "beautiful", "old", "Italian", "car"],
        hint: "Follow the order: opinion → age → origin.",
        explanation: "Opinion (beautiful) comes before age (old), which comes before origin (Italian)."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "Which order is correct?",
        options: ["a round small wooden table", "a small round wooden table", "a wooden small round table", "a small wooden round table"],
        answer: "a small round wooden table",
        hint: "Size comes before shape, which comes before material.",
        explanation: "The correct adjective order is size (small) → shape (round) → material (wooden)."
      },
      {
        id: 3,
        type: "true_false",
        question: "'She is seeming tired' is correct.",
        answer: "false",
        hint: "Think about whether 'seem' can be used in the continuous form.",
        explanation: "'Seem' is a stative linking verb and cannot be used in continuous tenses. The correct form is 'She seems tired'."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "He is wearing a ___ black leather jacket. (new — what comes first?)",
        answer: "new",
        options: ["new", "black", "leather", "beautiful"],
        hint: "Age comes before colour, which comes before material.",
        explanation: "Adjective order: age (new) → colour (black) → material (leather). So 'new' comes first."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'I live in a house red brick old.'",
        answer: "an old red brick house",
        hint: "Adjectives must precede the noun and follow the correct order.",
        explanation: "Adjectives precede the noun and follow the order: age (old) → colour (red) → material (brick) → house."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "The soup ___.",
        options: ["tastes deliciously", "tastes delicious", "tastes in a delicious way", "tastes very deliciously"],
        answer: "tastes delicious",
        hint: "'Taste' is a linking verb, so it needs an adjective after it.",
        explanation: "'Tastes' is a linking verb, so it must be followed by the adjective 'delicious', not the adverb 'deliciously'."
      },
      {
        id: 7,
        type: "fill_blank",
        question: "It was a ___ French film. (excellent / new — which comes first?)",
        answer: "excellent new French film",
        options: ["excellent new French film", "new excellent French film", "French new excellent film", "new French excellent film"],
        hint: "Opinion adjectives come before age/newness adjectives.",
        explanation: "Opinion (excellent) comes before age (new), which comes before origin (French)."
      },
      {
        id: 8,
        type: "true_false",
        question: "'A well-known actor' is correctly hyphenated before the noun.",
        answer: "true",
        hint: "Compound adjectives used before a noun are typically hyphenated.",
        explanation: "When a compound modifier comes before the noun, it is hyphenated: 'a well-known actor'. After the verb no hyphen is needed: 'the actor is well known'."
      },
      {
        id: 9,
        type: "drag_order",
        question: "Arrange: looks / She / today / happy / very",
        answer: "She looks very happy today",
        options: ["She", "looks", "very", "happy", "today"],
        hint: "The linking verb comes after the subject; the adverb of degree comes before the adjective.",
        explanation: "Subject (She) → linking verb (looks) → degree adverb (very) → adjective (happy) → time adverb (today)."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "Which sentence uses adjective position correctly?",
        options: ["I have a car German new.", "I have a new German car.", "I have a German new car.", "I have a car new German."],
        answer: "I have a new German car.",
        hint: "Age/newness comes before origin in the adjective order.",
        explanation: "Adjectives must precede the noun. Age (new) comes before origin (German): 'a new German car'."
      }
    ]
  },
  {
    id: 99,
    title: "Adjectives — Predicative vs Attributive",
    category: "Adjectives & Adverbs",
    section: "Adjectives & Adverbs",
    key_rule: "Some adjectives can only be predicative (after a verb: afraid, asleep, alone, alive). Others are only attributive (before noun: main, chief, former, only). Most adjectives work in both positions.",
    examples: [
      "She is afraid. (predicative only — not 'an afraid woman')",
      "It was the main reason. (attributive only — not 'the reason was main')",
      "a happy child / the child is happy (both positions work)",
      "He is alone. (predicative — not 'an alone man')"
    ],
    common_mistakes: [
      "Using predicative-only adjectives attributively: 'an asleep child' (wrong → a sleeping child)",
      "Using attributive-only adjectives predicatively: 'the reason was main' (wrong)"
    ],
    study_cards: [
      {
        title: "Predicative only",
        content: "Some adjectives (often starting with 'a-') can only follow a linking verb, not precede a noun.",
        examples: ["She is afraid.", "The baby is asleep.", "He is alone.", "They were aware of the danger."]
      },
      {
        title: "Attributive only",
        content: "Some adjectives can only come before the noun and cannot be used predicatively.",
        examples: ["the main problem", "the former president", "the only solution", "the chief concern"]
      },
      {
        title: "Both positions",
        content: "Most common adjectives can be used either before the noun (attributive) or after a linking verb (predicative).",
        examples: ["a happy child / The child is happy.", "a cold day / The day is cold.", "an interesting book / The book is interesting."]
      },
      {
        title: "Alive vs living",
        content: "Predicative-only adjectives have attributive alternatives. 'Alive' becomes 'living'; 'asleep' becomes 'sleeping'.",
        examples: ["He is alive. (predicative) ✓", "a living person (attributive) ✓", "an alive person ✗"]
      },
      {
        title: "Former — attributive only",
        content: "'Former' can only appear before the noun. It cannot be used as a complement after a linking verb.",
        examples: ["the former president ✓", "The president is former. ✗", "a former colleague ✓"]
      }
    ],
    listen_sentences: [
      "The dog is asleep on the sofa.",
      "She was afraid of the dark.",
      "The main problem is time.",
      "He was the only survivor.",
      "Are you awake? The alarm went off."
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Which is correct?",
        options: ["an afraid dog", "a frightened dog", "an asleep dog", "an alone boy"],
        answer: "a frightened dog",
        hint: "Predicative-only adjectives (afraid, asleep, alone) cannot go before a noun.",
        explanation: "'Afraid', 'asleep', and 'alone' are predicative-only. Before a noun, use their attributive equivalents: 'frightened', 'sleeping', 'lonely'."
      },
      {
        id: 2,
        type: "true_false",
        question: "'The chief problem is money' is correct.",
        answer: "true",
        hint: "'Chief' is an attributive-only adjective used before a noun.",
        explanation: "'Chief' is an attributive-only adjective meaning 'main/most important'. It correctly appears before the noun 'problem' here."
      },
      {
        id: 3,
        type: "fill_blank",
        question: "The cat is ___ on the armchair. (asleep — predicative)",
        answer: "asleep",
        options: ["asleep", "sleeping person", "an asleep", "the asleep"],
        hint: "'Asleep' is used predicatively (after a linking verb), not before a noun.",
        explanation: "'Asleep' is a predicative-only adjective. It correctly follows the linking verb 'is' here."
      },
      {
        id: 4,
        type: "error_correction",
        question: "Find the error: 'Look at that asleep baby — so cute.'",
        answer: "that sleeping baby",
        hint: "'Asleep' cannot be placed before a noun.",
        explanation: "'Asleep' is predicative only. Before a noun, use the attributive form 'sleeping': 'that sleeping baby'."
      },
      {
        id: 5,
        type: "multiple_choice",
        question: "The reason was ___.",
        options: ["main", "the main", "mainly", "a main"],
        answer: "the main",
        hint: "'Main' is attributive-only, so it needs to be repositioned — but here the structure forces predicative use.",
        explanation: "Strictly, 'main' is attributive-only, so saying 'the reason was main' is awkward. The natural fix is 'the main reason was...' — but in this fill-in context, 'the main' is the best option given."
      },
      {
        id: 6,
        type: "fill_blank",
        question: "She was ___ of making a mistake in front of everyone.",
        answer: "afraid",
        options: ["afraid", "afraided", "the afraid", "a afraid"],
        hint: "'Afraid' is always used predicatively, after a linking verb.",
        explanation: "'Afraid' is a predicative-only adjective. It follows the linking verb 'was' and is not preceded by an article."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: only / was / the / He / survivor",
        answer: "He was the only survivor",
        options: ["He", "was", "the", "only", "survivor"],
        hint: "'Only' is an attributive adjective that goes immediately before the noun it modifies.",
        explanation: "'Only' is attributive-only and must come directly before the noun: 'the only survivor'."
      },
      {
        id: 8,
        type: "true_false",
        question: "'She is alone' is grammatically correct.",
        answer: "true",
        hint: "'Alone' is a predicative adjective used after a linking verb.",
        explanation: "'Alone' is predicative-only and correctly follows the linking verb 'is' here."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "She was ___ that she had forgotten his birthday.",
        options: ["ashame", "the ashamed", "ashamed", "ashameful"],
        answer: "ashamed",
        hint: "'Ashamed' is a predicative adjective used after linking verbs like 'be'.",
        explanation: "'Ashamed' is a predicative-only adjective. It follows the linking verb 'was' without an article."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "___ president attended the ceremony. (former)",
        answer: "The former",
        options: ["The former", "The former's", "Former the", "A former"],
        hint: "'Former' is attributive-only and must precede the noun.",
        explanation: "'Former' is an attributive-only adjective. It comes before the noun 'president': 'The former president'."
      }
    ]
  },
  {
    id: 100,
    title: "Adjectives ending in -ing and -ed",
    category: "Adjectives & Adverbs",
    section: "Adjectives & Adverbs",
    key_rule: "-ing adjectives describe what something causes (the cause). -ed adjectives describe how someone feels (the effect on a person). People feel -ed; things/situations are -ing.",
    examples: [
      "The film was boring. (it caused boredom) / I was bored. (I felt boredom)",
      "The news was shocking. / She was shocked.",
      "It was an interesting talk. / He was interested.",
      "The experience was frightening. / They were frightened."
    ],
    common_mistakes: [
      "Using -ing for person: 'I am very boring' (means you bore others!)",
      "Using -ed for situations: 'The film was bored' (wrong)"
    ],
    study_cards: [
      {
        title: "-ing adjective",
        content: "-ing adjectives describe the cause of a feeling. They tell you what a thing or situation is like.",
        examples: ["a boring lecture", "exciting news", "a frightening experience"]
      },
      {
        title: "-ed adjective",
        content: "-ed adjectives describe the effect — how a person feels as a result of something.",
        examples: ["I felt bored during the lecture.", "She was excited about the news.", "They were frightened by the storm."]
      },
      {
        title: "Common pairs",
        content: "Many emotional adjectives come in -ing/-ed pairs. The subject determines which to use.",
        examples: ["boring/bored", "exciting/excited", "confusing/confused", "tiring/tired"]
      },
      {
        title: "More common pairs",
        content: "Further -ing/-ed pairs to remember for everyday conversation.",
        examples: ["surprising/surprised", "disappointing/disappointed", "interesting/interested", "shocking/shocked"]
      },
      {
        title: "Quick test",
        content: "Ask: is the subject a person experiencing a feeling? use -ed. Is the subject a thing/situation causing a feeling? use -ing.",
        examples: ["The match was exciting. (thing, -ing)", "The fans were excited. (people, -ed)", "He is fascinating. (he fascinates others!)"]
      }
    ],
    listen_sentences: [
      "The lecture was so boring that half the class fell asleep.",
      "I was bored during the long meeting.",
      "The results were very surprising.",
      "She was surprised to hear the news.",
      "It was a tiring day at work."
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "The film was ___ so I turned it off.",
        options: ["bored", "boring", "boringly", "bore"],
        answer: "boring",
        hint: "The film is the cause of the feeling, not the one experiencing it.",
        explanation: "'The film' is a thing that causes boredom, so use the -ing form: 'boring'."
      },
      {
        id: 2,
        type: "fill_blank",
        question: "She felt ___ after the long journey.",
        answer: "tired",
        options: ["tired", "tiring", "tire", "tiresome"],
        hint: "She is a person experiencing the feeling.",
        explanation: "When a person experiences a feeling, use the -ed form. 'She felt tired' describes her emotional/physical state."
      },
      {
        id: 3,
        type: "true_false",
        question: "'I am very boring' means you find things boring easily.",
        answer: "false",
        hint: "Think about what -ing adjectives describe.",
        explanation: "'I am boring' means you cause boredom in others — you are a boring person. 'I am bored' means you are experiencing boredom."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "He was ___ by the exam results.",
        options: ["disappointing", "disappoint", "disappointed", "disappointingly"],
        answer: "disappointed",
        hint: "He is a person feeling the effect of the results.",
        explanation: "He experienced the feeling of disappointment, so use the -ed form: 'disappointed'."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'The news was shocked — I couldn't believe it.'",
        answer: "was shocking",
        hint: "The news is the cause, not the one feeling the emotion.",
        explanation: "The news causes shock, so use -ing: 'The news was shocking'. People feel 'shocked'."
      },
      {
        id: 6,
        type: "fill_blank",
        question: "The game was ___ — we all had a great time.",
        answer: "exciting",
        options: ["exciting", "excited", "excite", "excitement"],
        hint: "The game is the cause of excitement, not a person feeling it.",
        explanation: "'The game' is a situation causing excitement, so use the -ing form: 'exciting'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: confused / The / very / instructions / were",
        answer: "The instructions were very confusing",
        options: ["The", "instructions", "were", "very", "confusing"],
        hint: "Instructions are a thing that causes confusion, so use -ing.",
        explanation: "Instructions are the cause of confusion, so use -ing: 'The instructions were very confusing'."
      },
      {
        id: 8,
        type: "true_false",
        question: "'She was interested in the topic' is correct.",
        answer: "true",
        hint: "She is a person experiencing interest.",
        explanation: "'She was interested' is correct because she is experiencing the feeling of interest (effect on a person, -ed)."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "I find history ___.",
        options: ["interested", "interests", "interesting", "interest"],
        answer: "interesting",
        hint: "History is the subject that causes the feeling of interest.",
        explanation: "History is the cause of the feeling, so use the -ing form: 'interesting'. 'I find history interesting' = history causes interest in me."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "It was a ___ experience — we were all very ___.",
        answer: "frightening / frightened",
        options: ["frightening / frightened", "frightened / frightening", "frightening / frightening", "frightened / frightened"],
        hint: "First blank = the experience (cause); second blank = we (effect on people).",
        explanation: "The experience causes fright (-ing: frightening). We feel fright (-ed: frightened)."
      }
    ]
  },
  {
    id: 101,
    title: "Adjectives: Comparison (1) — er/more",
    category: "Adjectives & Adverbs",
    section: "Adjectives & Adverbs",
    key_rule: "One/two-syllable adjectives add -er/-est. Three or more syllables use more/most. Some adjectives have irregular forms (good→better→best, bad→worse→worst, far→farther/further).",
    examples: [
      "tall → taller → tallest",
      "intelligent → more intelligent → most intelligent",
      "happy → happier → happiest (double consonant/y→i)",
      "good → better → best; bad → worse → worst"
    ],
    common_mistakes: [
      "Double comparison: 'more taller', 'more better' (wrong)",
      "Using -er with long adjectives: 'intelligenter' (wrong)"
    ],
    study_cards: [
      {
        title: "Short adjectives",
        content: "One-syllable adjectives (and most two-syllable adjectives) form comparatives and superlatives by adding -er/-est.",
        examples: ["fast → faster → fastest", "hot → hotter → hottest", "big → bigger → biggest"]
      },
      {
        title: "Long adjectives",
        content: "Adjectives with three or more syllables use 'more' for comparatives and 'most' for superlatives.",
        examples: ["more comfortable → most comfortable", "more expensive → most expensive", "more intelligent → most intelligent"]
      },
      {
        title: "Two-syllable adjectives",
        content: "Some two-syllable adjectives accept both forms. Adjectives ending in -y, -er, -ow, -le often take -er/-est.",
        examples: ["quieter / more quiet", "cleverer / more clever", "happier → happiest"]
      },
      {
        title: "Irregular forms",
        content: "A handful of very common adjectives have completely irregular comparative and superlative forms.",
        examples: ["good → better → best", "bad → worse → worst", "far → farther/further → farthest/furthest"]
      },
      {
        title: "Than with comparatives",
        content: "Use 'than' (not 'then') after comparative adjectives to introduce the second element of comparison.",
        examples: ["She is taller than her sister.", "This hotel is more expensive than the other.", "He runs faster than anyone."]
      }
    ],
    listen_sentences: [
      "She is taller than her sister.",
      "This hotel is more expensive than the other one.",
      "He is the best player on the team.",
      "The weather is worse today than yesterday.",
      "This book is more interesting than the last one I read."
    ],
    questions: [
      {
        id: 1,
        type: "fill_blank",
        question: "She is ___ than her brother. (tall)",
        answer: "taller",
        options: ["taller", "more tall", "tallest", "most tall"],
        hint: "'Tall' is a one-syllable adjective, so add -er for the comparative.",
        explanation: "One-syllable adjectives form comparatives with -er: tall → taller."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "This is ___ film I've ever seen.",
        options: ["the most boring", "the more boring", "the boringest", "more boring"],
        answer: "the most boring",
        hint: "Use 'the most' for superlatives of long adjectives, and always include 'the'.",
        explanation: "'Boring' has two syllables, so it uses 'most'. Superlatives always take 'the': 'the most boring'."
      },
      {
        id: 3,
        type: "true_false",
        question: "'More better' is correct comparative form.",
        answer: "false",
        hint: "'Better' is already the comparative of 'good' — it doesn't need 'more'.",
        explanation: "'Better' is already a comparative form. Adding 'more' creates a double comparative, which is incorrect in standard English."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "His health is ___ than it was last year. (bad)",
        answer: "worse",
        options: ["worse", "badder", "more bad", "worser"],
        hint: "'Bad' has an irregular comparative form.",
        explanation: "'Bad' has the irregular comparative 'worse'. Neither 'badder' nor 'worser' exist in standard English."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'She is the most cleverest student in the class.'",
        answer: "the cleverest",
        hint: "Never combine 'most' and '-est' on the same adjective.",
        explanation: "Using both 'most' and '-est' is a double superlative error. The correct form is simply 'the cleverest'."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "This book is ___ that one.",
        options: ["more interesting than", "more interesting then", "interesting more than", "more interesting as"],
        answer: "more interesting than",
        hint: "Use 'than' (not 'then') after comparatives.",
        explanation: "After a comparative form, use 'than' to introduce what is being compared: 'more interesting than'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: the / is / This / restaurant / expensive / most",
        answer: "This is the most expensive restaurant",
        options: ["This", "is", "the", "most", "expensive", "restaurant"],
        hint: "Superlatives need 'the' and use 'most' for long adjectives.",
        explanation: "'Expensive' is a three-syllable adjective, so use 'the most expensive'. The superlative precedes the noun."
      },
      {
        id: 8,
        type: "true_false",
        question: "'Hotter' is the correct comparative of 'hot'.",
        answer: "true",
        hint: "Short adjectives ending in consonant-vowel-consonant double the final consonant before -er.",
        explanation: "'Hot' ends in consonant-vowel-consonant (h-o-t), so the final 't' is doubled: hotter."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "Today was ___ day of my life. (good)",
        answer: "the best",
        options: ["the best", "the goodest", "the most good", "the better"],
        hint: "'Good' has an irregular superlative form.",
        explanation: "'Good' has the irregular superlative 'best'. Always use 'the' before superlatives: 'the best'."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "She works ___ than anyone else.",
        options: ["more hard", "hardlier", "harder", "most hard"],
        answer: "harder",
        hint: "'Hard' is an irregular adverb — its comparative is 'harder', not 'more hard'.",
        explanation: "'Hard' functions as both adjective and adverb. Its comparative is 'harder' (not 'more hard', which is non-standard)."
      }
    ]
  },
  {
    id: 102,
    title: "Adjectives: Comparison (2) — Superlatives and Special Forms",
    category: "Adjectives & Adverbs",
    section: "Adjectives & Adverbs",
    key_rule: "Use 'the' before superlatives. Use 'as...as' for equality. Use 'not as...as' for inequality. Use 'the same as' and 'different from'.",
    examples: [
      "She is as tall as her mother.",
      "He is not as fast as his brother.",
      "This is the same as that.",
      "My bag is different from yours."
    ],
    common_mistakes: [
      "Omitting 'the': 'She is most intelligent student' (needs 'the')",
      "Using 'than' with 'as...as': 'as tall than' (wrong → as tall as)"
    ],
    study_cards: [
      {
        title: "As...as (equality)",
        content: "Use 'as + adjective + as' to show two things are equal in some quality.",
        examples: ["She is as tall as her mother.", "This film is as good as the book.", "He runs as fast as a professional."]
      },
      {
        title: "Not as...as (inequality)",
        content: "Use 'not as + adjective + as' to show one thing has less of a quality than another.",
        examples: ["He's not as fast as me.", "My apartment is not as big as yours.", "This version is not as good as the original."]
      },
      {
        title: "The same as",
        content: "Use 'the same as' to say two things are identical or equal.",
        examples: ["Your phone is the same as mine.", "The two cars are exactly the same.", "His score is the same as hers."]
      },
      {
        title: "Different from",
        content: "Use 'different from' (British English) or 'different than' (American English) to contrast two things.",
        examples: ["This is different from what I expected.", "My opinion is different from yours.", "Today's lesson is quite different from yesterday's."]
      },
      {
        title: "Superlative + in/of",
        content: "After a superlative, use 'in' for a place/group and 'of' when comparing a number of things.",
        examples: ["the tallest in the class", "the best of the three", "the most experienced in the department"]
      }
    ],
    listen_sentences: [
      "She is just as talented as her sister.",
      "My apartment is not as big as yours.",
      "The two cars are exactly the same.",
      "This version is quite different from the original.",
      "He is the most experienced member of the team."
    ],
    questions: [
      {
        id: 1,
        type: "fill_blank",
        question: "She runs ___ fast ___ her sister.",
        answer: "as / as",
        options: ["as / as", "so / as", "as / than", "more / as"],
        hint: "Use 'as...as' to show equality.",
        explanation: "The structure for equality is 'as + adjective/adverb + as': 'She runs as fast as her sister'."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "My idea is ___ yours.",
        options: ["different than", "different from", "different of", "different with"],
        answer: "different from",
        hint: "In British English, 'different' is followed by 'from'.",
        explanation: "In standard British English, 'different from' is the correct preposition. 'Different than' is more common in American English."
      },
      {
        id: 3,
        type: "true_false",
        question: "'It's the same than before' is correct.",
        answer: "false",
        hint: "Think about which word follows 'the same'.",
        explanation: "The correct phrase is 'the same as', not 'the same than'. 'It's the same as before' is correct."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "He isn't ___ clever ___ his brother.",
        answer: "as / as",
        options: ["as / as", "more / as", "so / than", "as / than"],
        hint: "Use 'not as...as' to show that one person has less of a quality.",
        explanation: "'Not as...as' expresses inequality: 'He isn't as clever as his brother' means his brother is cleverer."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'She is most talented singer in the world.'",
        answer: "the most talented",
        hint: "Superlatives always require 'the' before them.",
        explanation: "Superlatives must be preceded by 'the': 'She is the most talented singer in the world'."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "This is ___ the other hotel — same price, same standard.",
        options: ["the same as", "the same than", "same as", "as same as"],
        answer: "the same as",
        hint: "The full phrase is 'the same as', always with 'the'.",
        explanation: "'The same as' is the correct fixed phrase for expressing identity or equality between two things."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: not / is / as / This / the / as / other / bag / good",
        answer: "This bag is not as good as the other",
        options: ["This", "bag", "is", "not", "as", "good", "as", "the", "other"],
        hint: "The structure is: subject + is not + as + adjective + as + comparison.",
        explanation: "'Not as...as' shows that the first item has less of the quality: 'This bag is not as good as the other'."
      },
      {
        id: 8,
        type: "true_false",
        question: "'She is the youngest in her family' is correct.",
        answer: "true",
        hint: "Superlatives use 'the' and 'in' before a group.",
        explanation: "Correct: superlative 'youngest' takes 'the', and 'in' is used before the group (her family)."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "The result was ___ we expected.",
        options: ["different of what", "different from what", "different than what", "different as what"],
        answer: "different from what",
        hint: "'Different from' is the standard British English preposition.",
        explanation: "'Different from what we expected' is the correct standard British English form."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "He is ___ oldest ___ three brothers.",
        answer: "the / of the",
        options: ["the / of the", "the / of", "a / of the", "the / in the"],
        hint: "Superlatives need 'the', and use 'of' when comparing a specific number of things.",
        explanation: "Use 'the' before the superlative, and 'of the' when comparing among a specific number: 'the oldest of the three brothers'."
      }
    ]
  },
  {
    id: 103,
    title: "Adverbs (1) — Manner and Position",
    category: "Adjectives & Adverbs",
    section: "Adjectives & Adverbs",
    key_rule: "Adverbs of manner describe how actions are done. They usually go after the verb or object. Most are formed by adding -ly to adjectives, but some are irregular (fast, hard, late, early, well).",
    examples: [
      "She speaks clearly. / He drove carefully.",
      "He works hard. (NOT 'hardly' — different meaning)",
      "She arrived late. (NOT 'lately' — different meaning)",
      "Do it well. (NOT 'goodly')"
    ],
    common_mistakes: [
      "Putting adverb between verb and object: 'She speaks clearly English' (wrong)",
      "Confusing hard/hardly, late/lately, near/nearly"
    ],
    study_cards: [
      {
        title: "Forming adverbs",
        content: "Most adverbs of manner are formed by adding -ly to the adjective. Spelling rules apply for adjectives ending in -y, -le, or -ic.",
        examples: ["slow → slowly", "careful → carefully", "happy → happily", "basic → basically"]
      },
      {
        title: "Irregular adverbs",
        content: "Some adverbs have the same form as their adjectives — they do NOT add -ly.",
        examples: ["fast (not fastly)", "hard (not hardly — different meaning)", "late (not lately — different meaning)", "straight, early"]
      },
      {
        title: "Good vs well",
        content: "'Good' is an adjective; 'well' is its adverb form used to modify verbs.",
        examples: ["She is a good singer. (adjective)", "She sings well. (adverb)", "He plays the piano well."]
      },
      {
        title: "Adverb position",
        content: "Manner adverbs go after the verb, or after the object if there is one. Never between the verb and object.",
        examples: ["She sang beautifully.", "He plays the piano well.", "She speaks English clearly. (not: She speaks clearly English.)"]
      },
      {
        title: "Hard vs hardly",
        content: "'Hard' means with a lot of effort. 'Hardly' means almost not at all — a very different meaning.",
        examples: ["She works hard. (a lot)", "She hardly works. (almost not at all)", "He studied hard for the exam."]
      }
    ],
    listen_sentences: [
      "He drives very carefully on the motorway.",
      "She arrived early and set up the room.",
      "They worked hard to finish the project.",
      "She speaks French fluently.",
      "The dog ran fast across the field."
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "She dances ___.",
        options: ["beautiful", "beautifully", "beautifuly", "beauty"],
        answer: "beautifully",
        hint: "We need an adverb of manner to describe how she dances.",
        explanation: "To modify the verb 'dances', use the adverb 'beautifully' (adjective 'beautiful' + -ly)."
      },
      {
        id: 2,
        type: "fill_blank",
        question: "He works ___, but he ___ earns enough. (hard/hardly)",
        answer: "hard / hardly",
        options: ["hard / hardly", "hardly / hard", "hard / hard", "hardly / hardly"],
        hint: "'Hard' = with great effort; 'hardly' = almost not at all.",
        explanation: "'He works hard' = he puts in a lot of effort. 'He hardly earns enough' = he almost doesn't earn enough."
      },
      {
        id: 3,
        type: "true_false",
        question: "'She plays the piano good' is correct.",
        answer: "false",
        hint: "We need an adverb to modify the verb 'plays', not an adjective.",
        explanation: "To modify a verb, use the adverb 'well', not the adjective 'good': 'She plays the piano well'."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "She speaks ___ English. (fluent → adverb)",
        answer: "fluently",
        options: ["fluently", "fluent", "fluency", "fluenced"],
        hint: "Convert the adjective 'fluent' to an adverb by adding -ly.",
        explanation: "To describe how she speaks, use the adverb form: fluent + -ly = fluently."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'He speaks English very good.'",
        answer: "very well",
        hint: "'Good' is an adjective — you need an adverb to modify the verb 'speaks'.",
        explanation: "Use the adverb 'well' (not the adjective 'good') to modify a verb: 'He speaks English very well'."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "He ___ left the office — he's barely been here this month.",
        options: ["hard", "lately", "hardly", "late"],
        answer: "hardly",
        hint: "The sentence means he is almost never in the office.",
        explanation: "'Hardly' means 'almost not at all'. It fits the meaning that he has barely been present this month."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: carefully / listened / the / to / She / instructions",
        answer: "She listened carefully to the instructions",
        options: ["She", "listened", "carefully", "to", "the", "instructions"],
        hint: "The adverb of manner goes after the verb but before the prepositional phrase.",
        explanation: "Manner adverbs go after the verb: 'She listened carefully to the instructions'."
      },
      {
        id: 8,
        type: "true_false",
        question: "'He arrived late' and 'He arrived lately' have the same meaning.",
        answer: "false",
        hint: "'Late' and 'lately' are two different adverbs with different meanings.",
        explanation: "'He arrived late' means after the expected time. 'Lately' means recently. They are completely different in meaning."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "Which adverb form is WRONG?",
        options: ["quickly", "fastly", "slowly", "quietly"],
        answer: "fastly",
        hint: "'Fast' is an irregular adverb — it does not add -ly.",
        explanation: "'Fast' is both the adjective and adverb form. 'Fastly' does not exist in English."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "She finished the exam ___. (quick → adverb)",
        answer: "quickly",
        options: ["quickly", "quick", "quicker", "quickest"],
        hint: "Add -ly to the adjective 'quick' to form the adverb.",
        explanation: "To describe how she finished, use the adverb: quick + -ly = quickly."
      }
    ]
  },
  {
    id: 104,
    title: "Adverbs (2) — Frequency and Degree",
    category: "Adjectives & Adverbs",
    section: "Adjectives & Adverbs",
    key_rule: "Adverbs of frequency (always, usually, often, sometimes, rarely, never) go before main verbs but after 'be'. Adverbs of degree (very, quite, rather, fairly, extremely) modify adjectives and adverbs.",
    examples: [
      "She always arrives on time. (before main verb)",
      "He is never late. (after 'be')",
      "It's quite cold today. / She's extremely talented.",
      "I'm fairly sure. / He's rather tired."
    ],
    common_mistakes: [
      "Placing frequency adverb at wrong position: 'She arrives always on time' (wrong)",
      "Confusing quite (= fairly) with quite (= completely): 'quite right' vs 'quite interesting'"
    ],
    study_cards: [
      {
        title: "Frequency adverb position",
        content: "Adverbs of frequency go before the main verb in a sentence.",
        examples: ["I usually have breakfast at 7.", "She often goes to the gym.", "They rarely eat out."]
      },
      {
        title: "Frequency adverbs with 'be'",
        content: "When 'be' is the verb, the frequency adverb goes AFTER 'be', not before it.",
        examples: ["She is always happy.", "He is never on time.", "They are sometimes late."]
      },
      {
        title: "Degree adverbs",
        content: "Degree adverbs modify adjectives and adverbs to show intensity. They go immediately before the word they modify.",
        examples: ["very cold", "extremely talented", "quite interesting", "fairly confident", "slightly worried"]
      },
      {
        title: "Quite vs very",
        content: "'Quite' with gradable adjectives means fairly/moderately. 'Very' is stronger. With extreme adjectives, 'quite' means completely.",
        examples: ["It's quite nice. (= fairly nice)", "It's very nice. (= more than quite)", "You're quite right. (= completely right)"]
      },
      {
        title: "Absolutely",
        content: "'Absolutely' is used with extreme (ungradable) adjectives to mean completely/totally.",
        examples: ["absolutely exhausted", "absolutely brilliant", "absolutely terrible", "absolutely certain"]
      }
    ],
    listen_sentences: [
      "I always check my email first thing in the morning.",
      "She is never rude to anyone.",
      "The film was quite long but very entertaining.",
      "He's fairly confident about the presentation.",
      "I'm absolutely exhausted after that run."
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "She ___ late for work.",
        options: ["is never", "never is", "is never being", "be never"],
        answer: "is never",
        hint: "Frequency adverbs go after 'be'.",
        explanation: "When 'be' is the main verb, the frequency adverb comes after it: 'She is never late'."
      },
      {
        id: 2,
        type: "fill_blank",
        question: "I ___ go to the gym on Mondays. (usually)",
        answer: "usually",
        options: ["usually", "always", "never", "sometimes"],
        hint: "The adverb 'usually' goes before the main verb 'go'.",
        explanation: "Frequency adverbs go before main verbs: 'I usually go to the gym on Mondays'."
      },
      {
        id: 3,
        type: "true_false",
        question: "'He eats always lunch at one o'clock' is correct.",
        answer: "false",
        hint: "Check the position of the frequency adverb relative to the main verb.",
        explanation: "Frequency adverbs go before the main verb: 'He always eats lunch at one o'clock'."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "It was ___ difficult — none of us could do it.",
        options: ["quite", "fairly", "absolutely", "extremely"],
        answer: "extremely",
        hint: "The context suggests an unusually high degree of difficulty.",
        explanation: "'Extremely' shows a very high degree of difficulty, consistent with no one being able to do it. 'Quite' and 'fairly' would be too weak."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'She goes rarely to the cinema.'",
        answer: "She rarely goes",
        hint: "Frequency adverbs go before the main verb, not after it.",
        explanation: "Frequency adverbs go before the main verb: 'She rarely goes to the cinema'."
      },
      {
        id: 6,
        type: "fill_blank",
        question: "The food was ___ good — I'd say excellent, actually.",
        answer: "absolutely",
        options: ["absolutely", "fairly", "quite", "slightly"],
        hint: "Use 'absolutely' with extreme adjectives to mean 'completely'.",
        explanation: "The speaker clarifies it was 'excellent' — an extreme quality. 'Absolutely' is used with extreme adjectives, meaning outstanding."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: have / I / coffee / always / morning / in / the",
        answer: "I always have coffee in the morning",
        options: ["I", "always", "have", "coffee", "in", "the", "morning"],
        hint: "Put the frequency adverb before the main verb 'have'.",
        explanation: "The frequency adverb 'always' goes before the main verb 'have': 'I always have coffee in the morning'."
      },
      {
        id: 8,
        type: "true_false",
        question: "'Very tired' and 'absolutely tired' are both correct.",
        answer: "false",
        hint: "Think about whether 'tired' is gradable or ungradable.",
        explanation: "'Tired' is a gradable adjective, so 'very tired' is correct. 'Absolutely' is used with extreme adjectives like 'exhausted', not with 'tired'."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "He is ___ sure the meeting is at three.",
        options: ["very", "fairly", "absolutely", "utterly"],
        answer: "fairly",
        hint: "'Sure' is a gradable adjective — 'fairly sure' suggests moderate confidence.",
        explanation: "'Fairly sure' is natural for moderate certainty. 'Absolutely sure' would imply complete certainty, which the hedging language doesn't support."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "I ___ eat fast food. I prefer home-cooked meals. (rarely)",
        answer: "rarely",
        options: ["rarely", "often", "always", "usually"],
        hint: "The second sentence implies the speaker avoids fast food.",
        explanation: "'Rarely' means almost never, which fits the preference for home-cooked meals: 'I rarely eat fast food'."
      }
    ]
  },
  {
    id: 105,
    title: "So and Such",
    category: "Adjectives & Adverbs",
    section: "Adjectives & Adverbs",
    key_rule: "Use 'so' before adjectives/adverbs. Use 'such' before nouns or adjective+noun. Both are used to emphasize and often appear in 'so/such...that' result clauses.",
    examples: [
      "She is so beautiful. / He ran so fast.",
      "It was such a hot day. / She has such talent.",
      "He is so tired that he can't think.",
      "It was such good news that we celebrated."
    ],
    common_mistakes: [
      "Using 'such' before adjective alone: 'such beautiful' (wrong — needs noun: 'such a beautiful day')",
      "Using 'so' before noun: 'so a good film' (wrong → such a good film)"
    ],
    study_cards: [
      {
        title: "So + adjective/adverb",
        content: "'So' intensifies adjectives and adverbs. It comes directly before the word it modifies.",
        examples: ["She is so clever.", "He speaks so quickly.", "The exam was so difficult."]
      },
      {
        title: "Such + noun",
        content: "'Such' comes before a noun (with or without an adjective) to add emphasis.",
        examples: ["She has such talent.", "It's such nonsense.", "He showed such courage."]
      },
      {
        title: "Such a/an + adjective + noun",
        content: "When there is a singular countable noun, use 'such a/an' before the adjective + noun combination.",
        examples: ["It was such a lovely day.", "He's such a nice person.", "It was such an interesting talk."]
      },
      {
        title: "So...that (result clause)",
        content: "Use 'so...that' to express that a quality led to a result.",
        examples: ["He was so tired that he fell asleep immediately.", "She ran so fast that no one could catch her.", "It was so cold that the pipes froze."]
      },
      {
        title: "Such...that (result clause)",
        content: "Use 'such...that' when there is a noun involved in the emphasis.",
        examples: ["It was such a good film that we watched it twice.", "She has such talent that everyone admires her.", "It was such bad weather that we cancelled the trip."]
      }
    ],
    listen_sentences: [
      "It was such a long meeting that I nearly fell asleep.",
      "She is so good at her job.",
      "It was such bad weather that we stayed inside.",
      "He speaks so fast that it's hard to follow.",
      "They had such a good time at the concert."
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "She is ___ talented musician.",
        options: ["so", "such", "such a", "so a"],
        answer: "such a",
        hint: "There is a singular countable noun after the blank — use 'such a'.",
        explanation: "Before a singular countable noun (musician), use 'such a'. 'So' cannot precede a noun directly."
      },
      {
        id: 2,
        type: "fill_blank",
        question: "He was ___ tired that he fell asleep on the train.",
        answer: "so",
        options: ["so", "such", "such a", "very"],
        hint: "'Tired' is an adjective with no noun following — use 'so'.",
        explanation: "'So' goes before adjectives and adverbs. 'He was so tired that...' shows a degree leading to a result."
      },
      {
        id: 3,
        type: "true_false",
        question: "'It was such cold that we went inside' is correct.",
        answer: "false",
        hint: "'Cold' here is used as an adjective without a noun — which word should precede an adjective?",
        explanation: "'Such' must be followed by a noun. 'Cold' alone is an adjective, so use 'so cold': 'It was so cold that we went inside'."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "It was ___ hot day that we stayed inside.",
        options: ["so a", "such", "such a", "so"],
        answer: "such a",
        hint: "There is a singular countable noun (day) — use 'such a'.",
        explanation: "Before adjective + singular countable noun, use 'such a': 'such a hot day'."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'He is so a good teacher.'",
        answer: "such a good teacher",
        hint: "'So' cannot directly precede 'a' + noun.",
        explanation: "Before 'a/an + adjective + noun', use 'such', not 'so': 'He is such a good teacher'."
      },
      {
        id: 6,
        type: "fill_blank",
        question: "She has ___ patience — she never gets angry.",
        answer: "such",
        options: ["such", "so", "so a", "such a"],
        hint: "'Patience' is an uncountable noun — use 'such' without an article.",
        explanation: "'Patience' is an uncountable noun, so use 'such' (not 'such a'): 'She has such patience'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: a / was / film / such / good / It",
        answer: "It was such a good film",
        options: ["It", "was", "such", "a", "good", "film"],
        hint: "Use 'such a' before adjective + singular noun.",
        explanation: "'Such a good film' follows the pattern: such + a + adjective + noun."
      },
      {
        id: 8,
        type: "true_false",
        question: "'She runs so quickly that no one can keep up' is correct.",
        answer: "true",
        hint: "'So' correctly modifies the adverb 'quickly', and a result clause follows with 'that'.",
        explanation: "'So + adverb + that' is the correct structure for a result clause: 'She runs so quickly that no one can keep up'."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "There was ___ noise that I couldn't sleep.",
        options: ["so much", "such", "so many", "such a"],
        answer: "so much",
        hint: "'Noise' is uncountable — use 'so much'.",
        explanation: "'Noise' is an uncountable noun. Use 'so much + uncountable noun': 'so much noise'."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "He told ___ funny jokes that we all laughed.",
        answer: "such",
        options: ["such", "so", "so a", "such a"],
        hint: "'Jokes' is a plural noun — use 'such' without an article.",
        explanation: "'Jokes' is a plural noun, so use 'such' without 'a': 'He told such funny jokes'."
      }
    ]
  },
  {
    id: 106,
    title: "Enough and Too",
    category: "Adjectives & Adverbs",
    section: "Adjectives & Adverbs",
    key_rule: "Too = more than needed (negative). Enough = as much as needed (sufficient). Too comes before adjectives/adverbs. Enough comes after adjectives/adverbs but before nouns.",
    examples: [
      "It's too hot. (more than wanted) / It's hot enough. (sufficient hot)",
      "He's too young to vote. / She's old enough to drive.",
      "There isn't enough time. / There is too much traffic.",
      "She didn't work hard enough."
    ],
    common_mistakes: [
      "Wrong order: 'enough tall' (wrong → tall enough)",
      "Using too for 'also': 'I want too' (wrong — here use 'too' meaning 'also' is fine in informal, but not with adjective)"
    ],
    study_cards: [
      {
        title: "Too + adjective",
        content: "'Too' comes before an adjective or adverb and means more than is wanted or possible.",
        examples: ["It's too expensive.", "They are too tired.", "He spoke too quickly for me to follow."]
      },
      {
        title: "Adjective/adverb + enough",
        content: "'Enough' comes AFTER adjectives and adverbs to mean sufficiently.",
        examples: ["She's tall enough.", "He didn't run fast enough.", "Is the coffee cool enough to drink?"]
      },
      {
        title: "Enough + noun",
        content: "'Enough' comes BEFORE nouns to mean a sufficient amount.",
        examples: ["We don't have enough money.", "Is there enough food?", "There isn't enough time."]
      },
      {
        title: "Too much / Too many",
        content: "Use 'too much' before uncountable nouns and 'too many' before countable plural nouns.",
        examples: ["too much noise (uncountable)", "too many people (countable)", "too much traffic, too many cars"]
      },
      {
        title: "Enough/Too + to-infinitive",
        content: "Both structures are often followed by a to-infinitive to explain the consequence.",
        examples: ["She's old enough to drive.", "He's strong enough to lift it.", "It's too hot to drink.", "She's too young to vote."]
      }
    ],
    listen_sentences: [
      "This coffee is too hot to drink.",
      "She is old enough to make her own decisions.",
      "There isn't enough food for everyone.",
      "He speaks too quickly for me to understand.",
      "Do you have enough money for the ticket?"
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "The soup is ___ hot to eat right now.",
        options: ["enough", "too", "so", "very"],
        answer: "too",
        hint: "'Too' means more than is wanted — it implies a problem.",
        explanation: "'Too hot' means the soup is more than hot enough — it's uncomfortable or impossible to eat. The to-infinitive 'to eat' confirms the negative result."
      },
      {
        id: 2,
        type: "fill_blank",
        question: "She isn't ___ tall to reach the shelf.",
        answer: "tall enough",
        options: ["tall enough", "enough tall", "too tall", "very tall"],
        hint: "'Enough' goes after the adjective 'tall'.",
        explanation: "'Enough' follows adjectives: 'tall enough'. The sentence means she lacks sufficient height to reach the shelf."
      },
      {
        id: 3,
        type: "true_false",
        question: "'Enough money' is correct but 'money enough' is wrong.",
        answer: "true",
        hint: "Remember the rule: 'enough' goes before nouns.",
        explanation: "'Enough' precedes nouns: 'enough money', 'enough time'. The reversed order 'money enough' is not standard English."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "There are ___ people in this room.",
        options: ["too much", "enough", "too many", "very many"],
        answer: "too many",
        hint: "'People' is countable and plural — use 'too many'.",
        explanation: "'Too many' is used before countable plural nouns: 'too many people'. 'Too much' is for uncountable nouns."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'He is enough old to drive.'",
        answer: "old enough",
        hint: "'Enough' always comes AFTER adjectives.",
        explanation: "'Enough' must follow the adjective: 'old enough', not 'enough old'. Compare: 'He is old enough to drive'."
      },
      {
        id: 6,
        type: "fill_blank",
        question: "I don't have ___ time to help you today.",
        answer: "enough",
        options: ["enough", "too", "very", "much"],
        hint: "'Enough' precedes the noun 'time' to mean a sufficient amount.",
        explanation: "'Enough' goes before nouns: 'enough time' = a sufficient amount of time."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: speak / He / fast / too / to / understand",
        answer: "He speaks too fast to understand",
        options: ["He", "speaks", "too", "fast", "to", "understand"],
        hint: "'Too' precedes the adverb 'fast', and the result follows with 'to + infinitive'.",
        explanation: "'Too + adverb + to-infinitive' expresses that the degree of the action makes the result impossible: 'He speaks too fast to understand'."
      },
      {
        id: 8,
        type: "true_false",
        question: "'Too tired' and 'tired enough' have the same meaning.",
        answer: "false",
        hint: "'Too' implies excess (a problem); 'enough' implies sufficiency.",
        explanation: "'Too tired' = more tired than is good (negative). 'Tired enough' = sufficiently tired (for some purpose). They are opposites in meaning."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "Are you ___ comfortable? Do you need more cushions?",
        options: ["too", "enough", "comfortable enough", "too comfortable"],
        answer: "comfortable enough",
        hint: "The question asks if the current level of comfort is sufficient.",
        explanation: "'Comfortable enough' asks whether the person has sufficient comfort. 'Enough' follows the adjective 'comfortable'."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "The bag is ___ heavy for me to carry. I need help.",
        answer: "too",
        options: ["too", "enough", "so", "such"],
        hint: "The bag is more than I can handle — this implies excess.",
        explanation: "'Too heavy' means it exceeds what is manageable. The result 'I need help' confirms the negative consequence of excessive weight."
      }
    ]
  },
  {
    id: 107,
    title: "Quite, Rather, Pretty, Fairly",
    category: "Adjectives & Adverbs",
    section: "Adjectives & Adverbs",
    key_rule: "Quite, rather, pretty, and fairly all mean 'to some degree' but differ in emphasis. Rather/quite suggest more than average; fairly suggests less. Rather can suggest mild disappointment or surprise.",
    examples: [
      "It's fairly good. (not great, acceptable)",
      "It's quite good. (better than average)",
      "It's rather good. (surprisingly good / a degree more)",
      "It's pretty difficult. (informal, like quite)"
    ],
    common_mistakes: [
      "Treating all four as identical — nuance differs",
      "Using 'rather' always positively — it often implies disappointment: 'It was rather boring'"
    ],
    study_cards: [
      {
        title: "Fairly",
        content: "'Fairly' expresses a neutral or below-average degree. It suggests something is acceptable but not impressive.",
        examples: ["The film was fairly good. (acceptable, nothing special)", "She's fairly confident.", "The weather is fairly warm."]
      },
      {
        title: "Quite",
        content: "'Quite' expresses a degree above average. With extreme adjectives, it can mean 'completely'.",
        examples: ["She's quite talented. (more than average)", "It was quite cold.", "You're quite right. (= completely right)"]
      },
      {
        title: "Rather",
        content: "'Rather' suggests a surprising or slightly more than expected degree, often (but not always) with a negative tone.",
        examples: ["He was rather rude to the waiter. (unexpectedly rude)", "It was rather good. (surprisingly good)", "The exam was rather difficult."]
      },
      {
        title: "Pretty (informal)",
        content: "'Pretty' is informal and similar in strength to 'quite' or 'rather'. Common in spoken English.",
        examples: ["It's pretty cold outside.", "She's pretty clever.", "That was pretty impressive."]
      },
      {
        title: "Quite + extreme adjective",
        content: "'Quite' changes meaning with extreme adjectives: it means 'completely' rather than 'fairly'.",
        examples: ["quite right (= completely right)", "quite wrong (= completely wrong)", "quite perfect (= absolutely perfect)"]
      }
    ],
    listen_sentences: [
      "The book was quite interesting — I'd recommend it.",
      "The weather is fairly warm for October.",
      "He was rather rude to the waiter.",
      "It's pretty cold outside today.",
      "She was quite right about the solution."
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "The film was ___ boring — I nearly fell asleep.",
        options: ["fairly", "rather", "quite right", "absolutely"],
        answer: "rather",
        hint: "'Rather' can express mild disappointment or an unexpectedly negative quality.",
        explanation: "'Rather boring' implies a surprising or notable degree of boredom, consistent with nearly falling asleep. 'Rather' often carries a slightly negative or disappointed tone."
      },
      {
        id: 2,
        type: "fill_blank",
        question: "The weather is ___ warm for this time of year — nothing special.",
        answer: "fairly",
        options: ["fairly", "rather", "absolutely", "extremely"],
        hint: "'Nothing special' suggests a moderate, unremarkable degree.",
        explanation: "'Fairly warm' implies acceptable but not impressive warmth — matching 'nothing special'. 'Rather' or 'quite' would imply more than expected."
      },
      {
        id: 3,
        type: "true_false",
        question: "'Rather' can express surprise or mild disappointment.",
        answer: "true",
        hint: "Think about how 'rather' is used in negative contexts like 'rather rude' or 'rather boring'.",
        explanation: "'Rather' often carries a tone of mild surprise or disappointment: 'It was rather expensive' or 'He was rather rude'."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "In informal speech, ___ is similar to 'quite'.",
        options: ["absolutely", "pretty", "extremely", "very"],
        answer: "pretty",
        hint: "Think about informal equivalents of degree adverbs.",
        explanation: "'Pretty' is an informal degree adverb similar in strength to 'quite': 'It's pretty good' = 'It's quite good'."
      },
      {
        id: 5,
        type: "fill_blank",
        question: "She was ___ right — we should have listened to her.",
        answer: "quite",
        options: ["quite", "fairly", "pretty", "rather"],
        hint: "With 'right' (an extreme/absolute quality), which adverb means 'completely'?",
        explanation: "With extreme/absolute adjectives like 'right' or 'wrong', 'quite' means 'completely': 'She was quite right' = completely right."
      },
      {
        id: 6,
        type: "error_correction",
        question: "Find the error: 'The food was fairly excellent.'",
        answer: "quite excellent / absolutely excellent",
        hint: "'Excellent' is an extreme adjective — 'fairly' is too weak for extreme adjectives.",
        explanation: "'Excellent' is an extreme adjective. 'Fairly' is only used with gradable adjectives. Use 'quite' (= completely) or 'absolutely' with 'excellent'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: a / was / film / quite / good / It",
        answer: "It was quite a good film",
        options: ["It", "was", "quite", "a", "good", "film"],
        hint: "When 'quite' modifies 'a + adjective + noun', it comes before the article.",
        explanation: "'Quite' precedes the article 'a' in this structure: 'It was quite a good film'."
      },
      {
        id: 8,
        type: "true_false",
        question: "'Fairly good' and 'quite good' are identical in meaning.",
        answer: "false",
        hint: "Think about the relative strength of 'fairly' vs 'quite'.",
        explanation: "'Fairly good' suggests acceptable but not impressive. 'Quite good' suggests better than average. They are close but not identical."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "He spoke ___ rudely — it was unexpected and unpleasant.",
        options: ["quite", "rather", "fairly", "slightly"],
        answer: "rather",
        hint: "The phrase 'unexpected and unpleasant' signals a notable and surprising degree.",
        explanation: "'Rather rudely' expresses a surprising or noteworthy degree, often with a slightly negative or critical tone."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "The exam was ___ difficult — harder than I expected.",
        answer: "pretty",
        options: ["pretty", "absolutely", "very slightly", "enormously"],
        hint: "The context suggests moderately difficult, informal register.",
        explanation: "'Pretty difficult' is informal and means quite/rather difficult — matching 'harder than I expected' without implying extreme difficulty."
      }
    ]
  },
  {
    id: 108,
    title: "Adjectives After Verbs",
    category: "Adjectives & Adverbs",
    section: "Adjectives & Adverbs",
    key_rule: "Linking verbs (be, seem, appear, look, feel, sound, taste, smell, become, get, stay, remain, turn) are followed by adjectives, not adverbs.",
    examples: [
      "She looks happy. (NOT 'happily')",
      "The food tastes wonderful.",
      "He became angry.",
      "Stay calm. / Keep quiet. / The sky turned dark."
    ],
    common_mistakes: [
      "Using adverb after linking verb: 'She looks happily' (wrong — 'She looks happy')",
      "Confusing action verbs with linking verbs: 'She looked carefully at the map' (carefully modifies looked-as-action)"
    ],
    study_cards: [
      {
        title: "Common linking verbs",
        content: "Linking verbs connect the subject to a describing word (adjective). They do not express an action.",
        examples: ["be, seem, appear, look, feel", "sound, taste, smell, become, get", "stay, remain, keep, turn, grow"]
      },
      {
        title: "Adjective after linking verb",
        content: "After a linking verb, always use an adjective (not an adverb) to describe the subject.",
        examples: ["He feels tired. (not tiredly)", "It sounds perfect. (not perfectly)", "The milk smells sour. (not sourly)"]
      },
      {
        title: "Look as action verb",
        content: "When 'look' is an action verb (= direct one's gaze), it takes an adverb.",
        examples: ["She looked at him angrily. (action)", "He looked carefully at the map. (action)", "She looked nervously around the room. (action)"]
      },
      {
        title: "Look as linking verb",
        content: "When 'look' is a linking verb (= appear/seem), it takes an adjective.",
        examples: ["She looks angry. (linking)", "He looks nervous. (linking)", "You look tired today. (linking)"]
      },
      {
        title: "Feel well vs feel good",
        content: "'Feel well' refers to physical health. 'Feel good' refers to emotional wellbeing. Both use adjectives after 'feel'.",
        examples: ["I don't feel well — I think I have a cold. (health)", "I feel good about the decision. (emotion)", "She feels great after the holiday."]
      }
    ],
    listen_sentences: [
      "This coffee smells amazing!",
      "She seemed nervous before the exam.",
      "The music sounds wonderful tonight.",
      "He became very anxious about the results.",
      "Stay calm and everything will be fine."
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "The soup smells ___.",
        options: ["deliciously", "delicious", "deliciously good", "more delicious"],
        answer: "delicious",
        hint: "'Smells' is a linking verb — use an adjective, not an adverb.",
        explanation: "'Smell' is a linking verb, so it takes the adjective 'delicious', not the adverb 'deliciously'."
      },
      {
        id: 2,
        type: "fill_blank",
        question: "She seemed ___ about the decision.",
        answer: "happy",
        options: ["happy", "happily", "happiness", "more happily"],
        hint: "'Seemed' is a linking verb — the complement must be an adjective.",
        explanation: "'Seem' is a linking verb. It is followed by the adjective 'happy', not the adverb 'happily'."
      },
      {
        id: 3,
        type: "true_false",
        question: "'He looked at the paper carefully' uses 'carefully' correctly.",
        answer: "true",
        hint: "Here 'looked at' is an action, not a linking verb.",
        explanation: "'Looked at' here is an action verb meaning 'directed his gaze'. As an action verb, it can be modified by the adverb 'carefully'."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "That plan sounds ___.",
        options: ["badly", "wonderfully", "terribly", "wonderful"],
        answer: "wonderful",
        hint: "'Sounds' is a linking verb — choose the adjective form.",
        explanation: "'Sound' is a linking verb followed by an adjective: 'sounds wonderful'. 'Wonderfully' is an adverb, which is incorrect here."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'She felt nervously before the interview.'",
        answer: "felt nervous",
        hint: "'Feel' is a linking verb — it needs an adjective, not an adverb.",
        explanation: "'Feel' is a linking verb. Use the adjective 'nervous', not the adverb 'nervously': 'She felt nervous before the interview'."
      },
      {
        id: 6,
        type: "fill_blank",
        question: "Stay ___ — the doctor will see you shortly.",
        answer: "calm",
        options: ["calm", "calmly", "calmed", "calmer"],
        hint: "'Stay' is a linking verb here — use an adjective.",
        explanation: "'Stay' acts as a linking verb meaning 'remain'. It takes the adjective 'calm', not the adverb 'calmly'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: angry / He / became / after / hearing / the / news",
        answer: "He became angry after hearing the news",
        options: ["He", "became", "angry", "after", "hearing", "the", "news"],
        hint: "'Became' is a linking verb followed by an adjective.",
        explanation: "'Become' is a linking verb, so it takes the adjective 'angry': 'He became angry after hearing the news'."
      },
      {
        id: 8,
        type: "true_false",
        question: "'The cake tastes sweetly' is correct.",
        answer: "false",
        hint: "'Taste' is a linking verb — it needs an adjective, not an adverb.",
        explanation: "'Taste' is a linking verb. Use the adjective 'sweet': 'The cake tastes sweet'. 'Sweetly' is an adverb and is incorrect here."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "I don't feel ___ today — I think I'm getting a cold.",
        options: ["good", "well", "Both A and B are possible", "badly"],
        answer: "Both A and B are possible",
        hint: "'Feel good' refers to emotion; 'feel well' refers to physical health — both are valid here.",
        explanation: "Both 'feel good' (emotional state) and 'feel well' (physical health) are grammatically correct after 'feel'. In context of possibly being ill, 'well' is slightly more precise."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "She appears ___ about the proposal.",
        answer: "excited",
        options: ["excited", "excitedly", "an excited", "excitement"],
        hint: "'Appears' is a linking verb — use the adjective form.",
        explanation: "'Appear' is a linking verb followed by an adjective: 'She appears excited'. 'Excitedly' is an adverb and is incorrect here."
      }
    ]
  },
  {
    id: 109,
    title: "Adjectives: Gradable and Ungradable",
    category: "Adjectives & Adverbs",
    section: "Adjectives & Adverbs",
    key_rule: "Gradable adjectives (cold, big, tired) can be intensified with very/quite/fairly. Ungradable/extreme adjectives (freezing, huge, exhausted) can't use very — use absolutely/completely/utterly instead.",
    examples: [
      "very tired (gradable) / absolutely exhausted (ungradable)",
      "quite good / absolutely perfect",
      "very cold / absolutely freezing",
      "rather interesting / completely fascinating"
    ],
    common_mistakes: [
      "Using 'very' with extreme adjectives: 'very exhausted', 'very freezing' (avoid)",
      "Using 'absolutely' with gradable adjectives: 'absolutely cold' (unusual)"
    ],
    study_cards: [
      {
        title: "Gradable adjectives",
        content: "Gradable adjectives exist on a scale — you can be a little, quite, very, or extremely cold/tired/big, etc.",
        examples: ["very tired", "quite cold", "fairly big", "extremely happy", "a bit interested"]
      },
      {
        title: "Extreme / ungradable adjectives",
        content: "Extreme adjectives already imply 'very' in their meaning — they cannot be graded with 'very'.",
        examples: ["exhausted (= extremely tired)", "freezing (= extremely cold)", "enormous (= extremely big)", "thrilled, perfect, brilliant, terrible"]
      },
      {
        title: "Intensifiers for gradable adjectives",
        content: "Use these degree adverbs with gradable adjectives to show how much of the quality exists.",
        examples: ["very cold", "extremely tired", "quite interesting", "fairly confident", "rather difficult"]
      },
      {
        title: "Intensifiers for extreme adjectives",
        content: "Use these amplifiers with extreme adjectives instead of 'very'.",
        examples: ["absolutely exhausted", "completely devastated", "utterly brilliant", "totally wrong"]
      },
      {
        title: "Quite: special case",
        content: "'Quite' changes meaning depending on whether the adjective is gradable or extreme.",
        examples: ["quite cold = fairly cold (gradable)", "quite right = completely right (extreme)", "quite perfect = absolutely perfect (extreme)"]
      }
    ],
    listen_sentences: [
      "I'm absolutely exhausted after working all day.",
      "The view from the top was absolutely stunning.",
      "It's very cold today — bring a jacket.",
      "She was completely devastated by the news.",
      "The food was absolutely terrible."
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "I'm ___ exhausted after the marathon.",
        options: ["very", "absolutely", "quite", "fairly"],
        answer: "absolutely",
        hint: "'Exhausted' is an extreme adjective — use an amplifier, not 'very'.",
        explanation: "'Exhausted' is an extreme adjective (= extremely tired). Use 'absolutely' instead of 'very': 'absolutely exhausted'."
      },
      {
        id: 2,
        type: "fill_blank",
        question: "The weather is ___ cold — you'll need a coat.",
        answer: "very",
        options: ["very", "absolutely", "utterly", "completely"],
        hint: "'Cold' is a gradable adjective — use 'very', not 'absolutely'.",
        explanation: "'Cold' is a gradable adjective, so it takes 'very' as its intensifier. 'Absolutely cold' is not natural."
      },
      {
        id: 3,
        type: "true_false",
        question: "'Absolutely perfect' is correct.",
        answer: "true",
        hint: "'Perfect' is an extreme adjective — 'absolutely' is the right amplifier.",
        explanation: "'Perfect' is an extreme/absolute adjective. 'Absolutely' is the correct amplifier: 'absolutely perfect'."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "She was ___ furious when she heard.",
        options: ["very", "absolutely", "quite", "Both B and C"],
        answer: "absolutely",
        hint: "'Furious' is an extreme adjective — avoid 'very' with extreme adjectives.",
        explanation: "'Furious' is an extreme adjective. The correct amplifier is 'absolutely'. While 'quite furious' is sometimes heard, 'absolutely furious' is the standard choice."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'The film was very brilliant — I loved it.'",
        answer: "absolutely brilliant",
        hint: "'Brilliant' is an extreme adjective — it cannot be modified by 'very'.",
        explanation: "'Brilliant' is an extreme adjective meaning exceptionally good. Use 'absolutely', not 'very': 'absolutely brilliant'."
      },
      {
        id: 6,
        type: "fill_blank",
        question: "The mountain air was ___ freezing.",
        answer: "absolutely",
        options: ["absolutely", "very", "quite", "fairly"],
        hint: "'Freezing' is an extreme adjective — use an amplifier.",
        explanation: "'Freezing' is an extreme adjective (= extremely cold). Use 'absolutely', not 'very': 'absolutely freezing'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: devastated / was / completely / He / the / by / news",
        answer: "He was completely devastated by the news",
        options: ["He", "was", "completely", "devastated", "by", "the", "news"],
        hint: "'Devastated' is extreme — 'completely' is the correct amplifier.",
        explanation: "'Devastated' is an extreme adjective. 'Completely' is the correct amplifier: 'He was completely devastated by the news'."
      },
      {
        id: 8,
        type: "true_false",
        question: "'Very interesting' and 'absolutely fascinating' are both correct.",
        answer: "true",
        hint: "'Interesting' is gradable (use very); 'fascinating' is more extreme (use absolutely).",
        explanation: "'Interesting' is gradable, so 'very interesting' is correct. 'Fascinating' is stronger/more extreme, so 'absolutely fascinating' is correct."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "The traffic was ___ terrible this morning.",
        options: ["very", "utterly", "Both A and B", "fairly"],
        answer: "Both A and B",
        hint: "'Terrible' can be treated as both gradable and extreme in everyday usage.",
        explanation: "'Terrible' can be used as a strong gradable adjective ('very terrible') or an extreme one ('utterly terrible'). Both are accepted in everyday English."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "It's ___ obvious that she's upset.",
        answer: "quite",
        options: ["quite", "absolutely", "completely", "totally"],
        hint: "'Obvious' is gradable — use a standard degree adverb.",
        explanation: "'Obvious' is a gradable adjective, so 'quite obvious' (= fairly obvious) is natural. 'Absolutely obvious' is also possible when meaning 'completely obvious'."
      }
    ]
  },
  {
    id: 110,
    title: "Comparative Adjectives in Context",
    category: "Adjectives & Adverbs",
    section: "Adjectives & Adverbs",
    key_rule: "Intensify comparatives with much/a lot/far/a bit/slightly. Use 'the + comparative...the + comparative' for parallel increase. Use 'less' for the opposite of 'more'.",
    examples: [
      "It's much better than before.",
      "She's a bit taller than her sister.",
      "The more you practise, the better you'll get.",
      "It's less expensive than I thought."
    ],
    common_mistakes: [
      "Using 'more' instead of 'less': 'It's more cheap' (informal, but 'cheaper/less expensive' preferred)",
      "Wrong intensifier with comparative: 'very better' (wrong → much better)"
    ],
    study_cards: [
      {
        title: "Intensifying comparatives",
        content: "Use 'much', 'a lot', or 'far' to show a large difference in a comparison.",
        examples: ["much faster", "a lot better", "far worse", "She is much taller than her brother."]
      },
      {
        title: "Small differences",
        content: "Use 'a bit', 'a little', or 'slightly' to show a small difference in a comparison.",
        examples: ["a bit tired", "a little better", "slightly more expensive", "He is a bit taller than me."]
      },
      {
        title: "The...the structure",
        content: "Use 'the + comparative ... the + comparative' to show that two things change in proportion.",
        examples: ["The older you get, the wiser you become.", "The more you practise, the better you'll get.", "The harder she works, the more she earns."]
      },
      {
        title: "Less + adjective",
        content: "Use 'less' before an adjective to form the 'downward' comparative (opposite of 'more').",
        examples: ["It's less expensive.", "She's less stressed now.", "This route is far less dangerous."]
      },
      {
        title: "Never use 'very' with comparatives",
        content: "'Very' cannot be used to intensify comparative adjectives. Use 'much', 'far', or 'a lot' instead.",
        examples: ["much better (not: very better)", "far faster (not: very faster)", "a lot more interesting (not: very more interesting)"]
      }
    ],
    listen_sentences: [
      "This laptop is much faster than my old one.",
      "She's feeling a lot better after some rest.",
      "The more I think about it, the less I understand.",
      "It's slightly colder in the north.",
      "This route is far less dangerous than the other."
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "She's ___ better at maths than her brother.",
        options: ["very", "much", "most", "too"],
        answer: "much",
        hint: "Use 'much' (not 'very') to intensify comparative adjectives.",
        explanation: "'Very' cannot modify comparatives. Use 'much' to show a large degree of difference: 'much better'."
      },
      {
        id: 2,
        type: "fill_blank",
        question: "___ you sleep, ___ you will feel. (more/better)",
        answer: "The more / the better",
        options: ["The more / the better", "More / better", "The more / the good", "More / the better"],
        hint: "The 'the...the' structure requires 'the' before each comparative.",
        explanation: "The parallel comparative structure is: 'The + comparative ... the + comparative': 'The more you sleep, the better you will feel'."
      },
      {
        id: 3,
        type: "true_false",
        question: "'The film is far less interesting than the book' is correct.",
        answer: "true",
        hint: "'Far' can intensify comparatives, and 'less' is the downward comparative of 'more'.",
        explanation: "'Far less interesting' is correct — 'far' intensifies the comparative, and 'less interesting' is the opposite of 'more interesting'."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "It's a ___ easier than I expected.",
        options: ["lot", "bit", "quite", "very"],
        answer: "bit",
        hint: "Use 'a bit' to show a small difference — 'a lot' implies a large one.",
        explanation: "'A bit easier' shows a small difference — fitting for something slightly easier than expected."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'The exam was very harder than I expected.'",
        answer: "much harder",
        hint: "'Very' cannot modify comparative adjectives.",
        explanation: "'Very' cannot be used with comparatives. Use 'much/far/a lot' to intensify: 'The exam was much harder than I expected'."
      },
      {
        id: 6,
        type: "fill_blank",
        question: "The bus is ___ less comfortable than the train, but cheaper.",
        answer: "slightly",
        options: ["slightly", "very", "much", "the"],
        hint: "Use 'slightly' for a small degree of difference.",
        explanation: "'Slightly less comfortable' shows a small difference. 'Much less' would imply a large difference, which contradicts 'but cheaper' as a reasonable trade-off."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: the / earn / more / you / the / you / work / more",
        answer: "The more you work the more you earn",
        options: ["The", "more", "you", "work", "the", "more", "you", "earn"],
        hint: "Use the 'the...the' parallel comparative structure.",
        explanation: "The parallel structure: 'The more you work, the more you earn' — both comparatives are preceded by 'the'."
      },
      {
        id: 8,
        type: "true_false",
        question: "'A lot better' and 'much better' mean the same thing.",
        answer: "true",
        hint: "Both 'a lot' and 'much' intensify comparatives to show a large difference.",
        explanation: "'A lot better' and 'much better' are interchangeable — both intensify the comparative 'better' to show a significant improvement."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "This version is ___ expensive than the original.",
        options: ["less", "fewer", "little", "lesser"],
        answer: "less",
        hint: "'Less' is used with adjectives; 'fewer' is used with countable nouns.",
        explanation: "'Less' is the comparative downgrader for adjectives: 'less expensive'. 'Fewer' is used only with countable nouns."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "The situation is ___ worse than we thought.",
        answer: "far",
        options: ["far", "very", "most", "quite"],
        hint: "Use 'far' (not 'very') to show a large degree of difference with a comparative.",
        explanation: "'Far worse' intensifies the comparative 'worse' to show a significantly larger degree. 'Very worse' is incorrect in English."
      }
    ]
  },
  {
    id: 111,
    title: "Word Order with Adverbs",
    category: "Adjectives & Adverbs",
    section: "Adjectives & Adverbs",
    key_rule: "When multiple adverbs appear in a sentence, the usual order is: manner → place → time. Adverbs of frequency go before main verbs. Place adverbs usually go before time adverbs.",
    examples: [
      "She danced beautifully at the party last night. (manner → place → time)",
      "He often works in the library.",
      "They arrived quietly at midnight.",
      "She is always at home on Sundays."
    ],
    common_mistakes: [
      "Putting time before place: 'She went last night there' (wrong)",
      "Separating verb from object with an adverb: 'She eats quickly her food' (wrong)"
    ],
    study_cards: [
      {
        title: "Adverb order: Manner + Place + Time",
        content: "When you have more than one type of adverb, follow this order: manner first, then place, then time.",
        examples: ["She sang beautifully at the concert last night.", "He worked hard at the office all day.", "They drove carefully to the airport at dawn."]
      },
      {
        title: "Never split verb and object",
        content: "Do not place an adverb between the verb and its object — always put the adverb after the object.",
        examples: ["She speaks English well. (not: She speaks well English)", "He plays the piano beautifully.", "She reads books quickly."]
      },
      {
        title: "Frequency adverb position",
        content: "Frequency adverbs go before the main verb, or after 'be'.",
        examples: ["I often read before bed.", "She is always busy.", "He never forgets a name.", "We sometimes go hiking."]
      },
      {
        title: "Time adverbs (flexible position)",
        content: "Time adverbs can go at the start or end of a sentence for emphasis, but not in the middle.",
        examples: ["Yesterday she called me.", "She called me yesterday.", "Last week he finished the report.", "He finished the report last week."]
      },
      {
        title: "Always/never before verb",
        content: "Always and never always go before the main verb (or after 'be'). They cannot go at the end.",
        examples: ["She always remembers.", "He never forgets.", "She remembers always. (wrong)", "He forgets never. (wrong)"]
      }
    ],
    listen_sentences: [
      "They worked hard at the office all day.",
      "She sings beautifully at concerts.",
      "Yesterday, he arrived late at the meeting.",
      "I usually walk to work in the morning.",
      "She quietly opened the door at midnight."
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "Which sentence has correct adverb order?",
        options: [
          "She worked at the office hard yesterday.",
          "She worked hard yesterday at the office.",
          "She worked hard at the office yesterday.",
          "She yesterday worked hard at the office."
        ],
        answer: "She worked hard at the office yesterday.",
        hint: "Remember the order: manner → place → time.",
        explanation: "Correct order: manner (hard) → place (at the office) → time (yesterday)."
      },
      {
        id: 2,
        type: "fill_blank",
        question: "He ___ arrives ___ at work. (always / early)",
        answer: "always arrives early",
        options: ["always arrives early", "arrives always early", "early always arrives", "arrives early always"],
        hint: "'Always' goes before the main verb; 'early' is a manner/time adverb that goes after the verb.",
        explanation: "Frequency adverb 'always' goes before the main verb: 'He always arrives early at work'."
      },
      {
        id: 3,
        type: "true_false",
        question: "'She speaks well English' is correct.",
        answer: "false",
        hint: "Never place an adverb between the verb and its object.",
        explanation: "Adverbs cannot split the verb from its object. Correct: 'She speaks English well'."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "Where does 'carefully' go: 'She read the letter'?",
        options: ["She carefully the letter read.", "She read carefully the letter.", "She read the letter carefully.", "She carefully read the letter."],
        answer: "She read the letter carefully.",
        hint: "The adverb goes after the object, not between the verb and the object.",
        explanation: "'Carefully' goes after the object 'the letter': 'She read the letter carefully'. 'She carefully read' (before the verb) is also acceptable."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'She drives to work every day fast.'",
        answer: "drives fast to work every day",
        hint: "The correct order is: verb + manner + place + time.",
        explanation: "Correct order: manner (fast) → place (to work) → time (every day): 'She drives fast to work every day'."
      },
      {
        id: 6,
        type: "fill_blank",
        question: "He sings ___ in the shower ___. (beautifully / every morning)",
        answer: "beautifully / every morning",
        options: ["beautifully / every morning", "every morning / beautifully", "in the shower beautifully / every morning", "beautifully every morning / in the shower"],
        hint: "Manner (beautifully) comes before place (in the shower), which comes before time (every morning).",
        explanation: "Correct adverb order: manner → place → time: 'He sings beautifully in the shower every morning'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: quietly / sat / She / the / in / corner",
        answer: "She sat quietly in the corner",
        options: ["She", "sat", "quietly", "in", "the", "corner"],
        hint: "Manner (quietly) comes before place (in the corner).",
        explanation: "Manner adverb (quietly) comes before the place adverb (in the corner): 'She sat quietly in the corner'."
      },
      {
        id: 8,
        type: "true_false",
        question: "'Yesterday I worked late in the office' is correct.",
        answer: "true",
        hint: "Time adverbs can go at the start of a sentence for emphasis.",
        explanation: "Time adverbs like 'yesterday' can be placed at the beginning of a sentence for emphasis: 'Yesterday I worked late in the office'."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "Which is correct?",
        options: ["He eats quickly his lunch.", "He eats his lunch quickly.", "He quickly eats his lunch quickly.", "He his lunch eats quickly."],
        answer: "He eats his lunch quickly.",
        hint: "Never place an adverb between the verb and its direct object.",
        explanation: "The adverb 'quickly' must come after the object 'his lunch': 'He eats his lunch quickly'. Placing it before the object ('eats quickly his lunch') is wrong."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "They ___ go to bed ___ midnight. (always / before)",
        answer: "always go to bed before",
        options: ["always go to bed before", "go always to bed before", "always go before to bed", "go to bed always before"],
        hint: "'Always' goes before the main verb; 'before midnight' is a time expression that ends the sentence.",
        explanation: "Frequency adverb 'always' goes before the main verb 'go': 'They always go to bed before midnight'."
      }
    ]
  },
  {
    id: 112,
    title: "Adjectives and Adverbs: Revision",
    category: "Adjectives & Adverbs",
    section: "Adjectives & Adverbs",
    key_rule: "Comprehensive review: adjective vs adverb forms, comparative and superlative, intensifiers, position, -ed/-ing forms, so/such, too/enough.",
    examples: [
      "She speaks well. (adverb) vs. Her English is good. (adjective)",
      "It was such a fantastic film that I watched it twice.",
      "He is too tired to drive.",
      "The news is absolutely shocking."
    ],
    common_mistakes: [
      "Mixing adjective/adverb forms",
      "Incorrect intensifier for gradable vs extreme adjectives"
    ],
    study_cards: [
      {
        title: "Adjective vs adverb",
        content: "Adjectives modify nouns and follow linking verbs. Adverbs modify verbs, adjectives, and other adverbs.",
        examples: ["Her English is good. (adjective modifies noun)", "She speaks English well. (adverb modifies verb)", "It was an extremely good film. (adverb modifies adjective)"]
      },
      {
        title: "Intensifiers summary",
        content: "Match your intensifier to whether the adjective is gradable or extreme.",
        examples: ["very/quite/fairly/rather + gradable: very cold, quite interesting", "absolutely/completely/utterly + extreme: absolutely freezing, completely devastated"]
      },
      {
        title: "Comparative summary",
        content: "Key comparative structures to remember for the revision unit.",
        examples: ["-er/more + than: taller than, more interesting than", "The...the: The more you practise, the better.", "as...as: She is as tall as her sister.", "less than: less expensive than"]
      },
      {
        title: "-ing/-ed review",
        content: "The fundamental rule for participial adjectives: cause vs effect.",
        examples: ["-ing describes the cause: a boring lecture, shocking news", "-ed describes the effect on a person: I was bored, she was shocked", "Trick: can you say 'it made me feel ___'? use -ed for the person."]
      },
      {
        title: "Too/enough/so/such review",
        content: "A summary of the key modifying structures covered in this section.",
        examples: ["too + adj: too cold to swim", "adj/adv + enough: warm enough to swim", "so + adj/adv: so cold that we left", "such (a) + (adj) + noun: such a cold day"]
      }
    ],
    listen_sentences: [
      "She performed really well in the exam.",
      "It was such a scary film that I had nightmares.",
      "The flight was absolutely awful — delayed for six hours.",
      "He's much better at cooking than his brother.",
      "She felt exhausted after the long journey."
    ],
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question: "She speaks ___ for someone who only learned English last year.",
        options: ["very good", "goodly", "very well", "very nice"],
        answer: "very well",
        hint: "We need an adverb to modify the verb 'speaks'.",
        explanation: "To modify the verb 'speaks', use the adverb 'well', not the adjective 'good': 'She speaks very well'."
      },
      {
        id: 2,
        type: "fill_blank",
        question: "The film was ___ boring that I fell asleep.",
        answer: "so",
        options: ["so", "such", "very", "too"],
        hint: "'Boring' is an adjective with no noun following — use 'so' before an adjective.",
        explanation: "'So' precedes adjectives in the 'so...that' result clause structure: 'The film was so boring that I fell asleep'."
      },
      {
        id: 3,
        type: "true_false",
        question: "'The presentation was absolutely perfect' is correct.",
        answer: "true",
        hint: "'Perfect' is an extreme adjective — 'absolutely' is the correct amplifier.",
        explanation: "'Perfect' is an extreme adjective. 'Absolutely' is the correct amplifier: 'absolutely perfect'."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "He is ___ tired to concentrate.",
        options: ["too", "enough", "very", "much"],
        answer: "too",
        hint: "'Too' means more than is desirable — it implies a problem or impossibility.",
        explanation: "'Too tired to concentrate' means his tiredness exceeds what allows concentration. 'Too + adjective + to-infinitive' expresses a negative result."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'The trip was very exhausting and I felt very exhausted.'",
        answer: "absolutely exhausted",
        hint: "'Exhausted' is an extreme adjective — avoid 'very' with extreme adjectives.",
        explanation: "While 'very exhausting' is acceptable (exhausting can be gradable), 'exhausted' is an extreme adjective. Use 'absolutely exhausted' instead of 'very exhausted'."
      },
      {
        id: 6,
        type: "fill_blank",
        question: "She's ___ experienced ___ handle the project alone.",
        answer: "experienced enough / to",
        options: ["experienced enough / to", "enough experienced / to", "too experienced / to", "experienced enough / for"],
        hint: "'Enough' follows the adjective; the result is expressed with 'to + infinitive'.",
        explanation: "'Enough' comes after the adjective: 'experienced enough'. The consequence uses 'to + infinitive': 'experienced enough to handle'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: interesting / The / absolutely / was / lecture",
        answer: "The lecture was absolutely fascinating",
        options: ["The", "lecture", "was", "absolutely", "fascinating"],
        hint: "Use 'absolutely' before the extreme adjective 'fascinating'.",
        explanation: "'Fascinating' is an extreme adjective, so use 'absolutely': 'The lecture was absolutely fascinating'."
      },
      {
        id: 8,
        type: "true_false",
        question: "'Much better than before' is correct.",
        answer: "true",
        hint: "'Much' correctly intensifies the comparative adjective 'better'.",
        explanation: "'Much' is a correct intensifier for comparative adjectives: 'much better than before'. 'Very better' would be incorrect."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "I was ___ by the film — it was better than I expected.",
        options: ["impressing", "impressive", "impressed", "impress"],
        answer: "impressed",
        hint: "I am a person experiencing the feeling — use the -ed form.",
        explanation: "'I' am the person experiencing the feeling, so use the -ed form: 'I was impressed'. 'Impressive' describes the film itself."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "___ older she gets, ___ confident she becomes.",
        answer: "The / the",
        options: ["The / the", "More / more", "The / more", "More / the"],
        hint: "Use the 'the...the' parallel comparative structure.",
        explanation: "The parallel comparative structure requires 'the' before each comparative: 'The older she gets, the more confident she becomes'."
      }
    ]
  }
];

export default adjectivesAndAdverbs;
