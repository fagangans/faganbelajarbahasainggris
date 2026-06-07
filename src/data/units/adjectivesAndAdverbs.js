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
      { front: "Before noun", back: "Attributive position: a happy child, an old book" },
      { front: "After linking verb", back: "Predicative position: She is happy. It seems cold." },
      { front: "Adjective order", back: "Opinion → Size → Age → Shape → Colour → Origin → Material → Purpose" },
      { front: "Example order", back: "a lovely little old round green French silver whittling knife" },
      { front: "Hyphenated adjectives", back: "Used before noun: a well-known actor, a ten-year-old boy" }
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
        type: "drag_order",
        prompt: "Arrange adjectives: a ___ car (old / Italian / beautiful)",
        answer: "a beautiful old Italian car",
        items: ["a", "beautiful", "old", "Italian", "car"]
      },
      {
        type: "multiple_choice",
        prompt: "Which order is correct?",
        options: ["a round small wooden table", "a small round wooden table", "a wooden small round table", "a small wooden round table"],
        answer: "a small round wooden table"
      },
      {
        type: "true_false",
        prompt: "'She is seeming tired' is correct.",
        answer: "false"
      },
      {
        type: "fill_blank",
        prompt: "He is wearing a ___ black leather jacket. (new — what comes first?)",
        answer: "new",
        options: ["new", "black", "leather", "beautiful"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'I live in a house red brick old.'",
        answer: "an old red brick house",
        explanation: "Adjectives precede the noun and follow the order: age → colour → material."
      },
      {
        type: "multiple_choice",
        prompt: "The soup ___.",
        options: ["tastes deliciously", "tastes delicious", "tastes in a delicious way", "tastes very deliciously"],
        answer: "tastes delicious"
      },
      {
        type: "fill_blank",
        prompt: "It was a ___ French film. (excellent / new — which comes first?)",
        answer: "excellent new French film",
        options: ["excellent new French film", "new excellent French film", "French new excellent film", "new French excellent film"]
      },
      {
        type: "true_false",
        prompt: "'A well-known actor' is correctly hyphenated before the noun.",
        answer: "true"
      },
      {
        type: "drag_order",
        prompt: "Arrange: looks / She / today / happy / very",
        answer: "She looks very happy today",
        items: ["She", "looks", "very", "happy", "today"]
      },
      {
        type: "multiple_choice",
        prompt: "Which sentence uses adjective position correctly?",
        options: ["I have a car German new.", "I have a new German car.", "I have a German new car.", "I have a car new German."],
        answer: "I have a new German car."
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
      { front: "Predicative only", back: "afraid, asleep, alone, alive, awake, aware, ashamed" },
      { front: "Attributive only", back: "main, chief, former, only, principal, sheer, mere" },
      { front: "Both positions", back: "happy, cold, new, interesting — used before or after" },
      { front: "Alive predicative", back: "He is alive. (NOT: an alive person → use 'living')" },
      { front: "Former attributive", back: "the former president. (NOT: the president was former)" }
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
        type: "multiple_choice",
        prompt: "Which is correct?",
        options: ["an afraid dog", "a frightened dog", "an asleep dog", "an alone boy"],
        answer: "a frightened dog"
      },
      {
        type: "true_false",
        prompt: "'The chief problem is money' is correct.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "The cat is ___ on the armchair. (asleep — predicative)",
        answer: "asleep",
        options: ["asleep", "sleeping person", "an asleep", "the asleep"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'Look at that asleep baby — so cute.'",
        answer: "that sleeping baby",
        explanation: "'Asleep' is predicative only. Before a noun, use 'sleeping'."
      },
      {
        type: "multiple_choice",
        prompt: "The reason was ___.",
        options: ["main", "the main", "mainly", "a main"],
        answer: "the main"
      },
      {
        type: "fill_blank",
        prompt: "She was ___ of making a mistake in front of everyone.",
        answer: "afraid",
        options: ["afraid", "afraided", "the afraid", "a afraid"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: only / was / the / He / survivor",
        answer: "He was the only survivor",
        items: ["He", "was", "the", "only", "survivor"]
      },
      {
        type: "true_false",
        prompt: "'She is alone' is grammatically correct.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "She was ___ that she had forgotten his birthday.",
        options: ["ashame", "the ashamed", "ashamed", "ashameful"],
        answer: "ashamed"
      },
      {
        type: "fill_blank",
        prompt: "___ president attended the ceremony. (former)",
        answer: "The former",
        options: ["The former", "The former's", "Former the", "A former"]
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
      { front: "-ing adjective", back: "Describes cause: a boring lecture, exciting news" },
      { front: "-ed adjective", back: "Describes effect (how person feels): bored, excited" },
      { front: "Common pairs", back: "boring/bored, exciting/excited, confusing/confused, tiring/tired" },
      { front: "Common pairs (2)", back: "surprising/surprised, disappointing/disappointed, interesting/interested" },
      { front: "Test rule", back: "If subject is a person feeling something → use -ed" }
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
        type: "multiple_choice",
        prompt: "The film was ___ so I turned it off.",
        options: ["bored", "boring", "boringly", "bore"],
        answer: "boring"
      },
      {
        type: "fill_blank",
        prompt: "She felt ___ after the long journey.",
        answer: "tired",
        options: ["tired", "tiring", "tire", "tiresome"]
      },
      {
        type: "true_false",
        prompt: "'I am very boring' means you find things boring easily.",
        answer: "false"
      },
      {
        type: "multiple_choice",
        prompt: "He was ___ by the exam results.",
        options: ["disappointing", "disappoint", "disappointed", "disappointingly"],
        answer: "disappointed"
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'The news was shocked — I couldn't believe it.'",
        answer: "was shocking",
        explanation: "The news causes shock → 'shocking'. People feel 'shocked'."
      },
      {
        type: "fill_blank",
        prompt: "The game was ___ — we all had a great time.",
        answer: "exciting",
        options: ["exciting", "excited", "excite", "excitement"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: confused / The / very / instructions / were",
        answer: "The instructions were very confusing",
        items: ["The", "instructions", "were", "very", "confusing"]
      },
      {
        type: "true_false",
        prompt: "'She was interested in the topic' is correct.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "I find history ___.",
        options: ["interested", "interests", "interesting", "interest"],
        answer: "interesting"
      },
      {
        type: "fill_blank",
        prompt: "It was a ___ experience — we were all very ___.",
        answer: "frightening / frightened",
        options: ["frightening / frightened", "frightened / frightening", "frightening / frightening", "frightened / frightened"]
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
      { front: "Short adjectives", back: "Add -er/-est: fast→faster→fastest, hot→hotter→hottest" },
      { front: "Long adjectives", back: "Use more/most: more comfortable, most expensive" },
      { front: "Two-syllable adjectives", back: "Both possible: quieter/more quiet, cleverer/more clever" },
      { front: "Irregular forms", back: "good/better/best, bad/worse/worst, far/farther/further" },
      { front: "Than", back: "Use 'than' after comparatives: bigger than, more interesting than" }
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
        type: "fill_blank",
        prompt: "She is ___ than her brother. (tall)",
        answer: "taller",
        options: ["taller", "more tall", "tallest", "most tall"]
      },
      {
        type: "multiple_choice",
        prompt: "This is ___ film I've ever seen.",
        options: ["the most boring", "the more boring", "the boringest", "more boring"],
        answer: "the most boring"
      },
      {
        type: "true_false",
        prompt: "'More better' is correct comparative form.",
        answer: "false"
      },
      {
        type: "fill_blank",
        prompt: "His health is ___ than it was last year. (bad)",
        answer: "worse",
        options: ["worse", "badder", "more bad", "worser"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'She is the most cleverest student in the class.'",
        answer: "the cleverest",
        explanation: "Don't use both 'most' and '-est' together."
      },
      {
        type: "multiple_choice",
        prompt: "This book is ___ that one.",
        options: ["more interesting than", "more interesting then", "interesting more than", "more interesting as"],
        answer: "more interesting than"
      },
      {
        type: "drag_order",
        prompt: "Arrange: the / is / This / restaurant / expensive / most",
        answer: "This is the most expensive restaurant",
        items: ["This", "is", "the", "most", "expensive", "restaurant"]
      },
      {
        type: "true_false",
        prompt: "'Hotter' is the correct comparative of 'hot'.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "Today was ___ day of my life. (good)",
        answer: "the best",
        options: ["the best", "the goodest", "the most good", "the better"]
      },
      {
        type: "multiple_choice",
        prompt: "She works ___ than anyone else.",
        options: ["more hard", "hardlier", "harder", "most hard"],
        answer: "harder"
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
      { front: "As...as", back: "Equality: She is as tall as her mother." },
      { front: "Not as...as", back: "Inequality: He's not as fast as me." },
      { front: "The same as", back: "Your phone is the same as mine." },
      { front: "Different from", back: "This is different from what I expected." },
      { front: "Superlative + in/of", back: "the tallest in the class; the best of the three" }
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
        type: "fill_blank",
        prompt: "She runs ___ fast ___ her sister.",
        answer: "as / as",
        options: ["as / as", "so / as", "as / than", "more / as"]
      },
      {
        type: "multiple_choice",
        prompt: "My idea is ___ yours.",
        options: ["different than", "different from", "different of", "different with"],
        answer: "different from"
      },
      {
        type: "true_false",
        prompt: "'It's the same than before' is correct.",
        answer: "false"
      },
      {
        type: "fill_blank",
        prompt: "He isn't ___ clever ___ his brother.",
        answer: "as / as",
        options: ["as / as", "more / as", "so / than", "as / than"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'She is most talented singer in the world.'",
        answer: "the most talented",
        explanation: "Always use 'the' before superlatives."
      },
      {
        type: "multiple_choice",
        prompt: "This is ___ the other hotel — same price, same standard.",
        options: ["the same as", "the same than", "same as", "as same as"],
        answer: "the same as"
      },
      {
        type: "drag_order",
        prompt: "Arrange: not / is / as / This / the / as / other / bag / good",
        answer: "This bag is not as good as the other",
        items: ["This", "bag", "is", "not", "as", "good", "as", "the", "other"]
      },
      {
        type: "true_false",
        prompt: "'She is the youngest in her family' is correct.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "The result was ___ we expected.",
        options: ["different of what", "different from what", "different than what", "different as what"],
        answer: "different from what"
      },
      {
        type: "fill_blank",
        prompt: "He is ___ oldest ___ three brothers.",
        answer: "the / of the",
        options: ["the / of the", "the / of", "a / of the", "the / in the"]
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
      { front: "Form", back: "adjective + -ly: slow→slowly, careful→carefully, happy→happily" },
      { front: "Irregular adverbs", back: "fast, hard, late, early, straight — no -ly" },
      { front: "Good vs well", back: "She is a good singer. She sings well." },
      { front: "Position", back: "After verb/object: She sang beautifully. He plays the piano well." },
      { front: "Hard vs hardly", back: "She works hard (a lot). She hardly works (almost not at all)." }
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
        type: "multiple_choice",
        prompt: "She dances ___.",
        options: ["beautiful", "beautifully", "beautifuly", "beauty"],
        answer: "beautifully"
      },
      {
        type: "fill_blank",
        prompt: "He works ___, but he ___  earns enough. (hard/hardly)",
        answer: "hard / hardly",
        options: ["hard / hardly", "hardly / hard", "hard / hard", "hardly / hardly"]
      },
      {
        type: "true_false",
        prompt: "'She plays the piano good' is correct.",
        answer: "false"
      },
      {
        type: "fill_blank",
        prompt: "She speaks ___ English. (fluent → adverb)",
        answer: "fluently",
        options: ["fluently", "fluent", "fluency", "fluenced"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'He speaks English very good.'",
        answer: "very well",
        explanation: "Use adverb 'well' (not adjective 'good') to modify a verb."
      },
      {
        type: "multiple_choice",
        prompt: "He ___ left the office — he's barely been here this month.",
        options: ["hard", "lately", "hardly", "late"],
        answer: "hardly"
      },
      {
        type: "drag_order",
        prompt: "Arrange: carefully / listened / the / to / She / instructions",
        answer: "She listened carefully to the instructions",
        items: ["She", "listened", "carefully", "to", "the", "instructions"]
      },
      {
        type: "true_false",
        prompt: "'He arrived late' and 'He arrived lately' have the same meaning.",
        answer: "false"
      },
      {
        type: "multiple_choice",
        prompt: "Which adverb form is WRONG?",
        options: ["quickly", "fastly", "slowly", "quietly"],
        answer: "fastly"
      },
      {
        type: "fill_blank",
        prompt: "She finished the exam ___. (quick → adverb)",
        answer: "quickly",
        options: ["quickly", "quick", "quicker", "quickest"]
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
      { front: "Frequency adverb position", back: "Before main verb: I usually have breakfast at 7." },
      { front: "With 'be'", back: "After be: She is always happy. He is never on time." },
      { front: "Degree adverbs", back: "very, extremely, quite, fairly, rather, slightly, absolutely" },
      { front: "Quite vs very", back: "Quite = fairly/moderately: It's quite nice. Very = more than quite." },
      { front: "Absolutely", back: "Used with extreme adjectives: absolutely exhausted, absolutely brilliant" }
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
        type: "multiple_choice",
        prompt: "She ___ late for work.",
        options: ["is never", "never is", "is never being", "be never"],
        answer: "is never"
      },
      {
        type: "fill_blank",
        prompt: "I ___ go to the gym on Mondays. (usually)",
        answer: "usually",
        options: ["usually", "always", "never", "sometimes"]
      },
      {
        type: "true_false",
        prompt: "'He eats always lunch at one o'clock' is correct.",
        answer: "false"
      },
      {
        type: "multiple_choice",
        prompt: "It was ___ difficult — none of us could do it.",
        options: ["quite", "fairly", "absolutely", "extremely"],
        answer: "extremely"
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'She goes rarely to the cinema.'",
        answer: "She rarely goes",
        explanation: "Frequency adverbs go before the main verb: 'She rarely goes'."
      },
      {
        type: "fill_blank",
        prompt: "The food was ___ good — I'd say excellent, actually.",
        answer: "absolutely",
        options: ["absolutely", "fairly", "quite", "slightly"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: have / I / coffee / always / morning / in / the",
        answer: "I always have coffee in the morning",
        items: ["I", "always", "have", "coffee", "in", "the", "morning"]
      },
      {
        type: "true_false",
        prompt: "'Very tired' and 'absolutely tired' are both correct.",
        answer: "false"
      },
      {
        type: "multiple_choice",
        prompt: "He is ___ sure the meeting is at three.",
        options: ["very", "fairly", "absolutely", "utterly"],
        answer: "fairly"
      },
      {
        type: "fill_blank",
        prompt: "I ___ eat fast food. I prefer home-cooked meals. (rarely)",
        answer: "rarely",
        options: ["rarely", "often", "always", "usually"]
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
      { front: "So + adjective/adverb", back: "She is so clever. He speaks so quickly." },
      { front: "Such + noun", back: "She has such talent. It's such nonsense." },
      { front: "Such a/an + adjective + noun", back: "It was such a lovely day. He's such a nice person." },
      { front: "So...that", back: "Result: He was so tired that he fell asleep immediately." },
      { front: "Such...that", back: "Result: It was such a good film that we watched it twice." }
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
        type: "multiple_choice",
        prompt: "She is ___ talented musician.",
        options: ["so", "such", "such a", "so a"],
        answer: "such a"
      },
      {
        type: "fill_blank",
        prompt: "He was ___ tired that he fell asleep on the train.",
        answer: "so",
        options: ["so", "such", "such a", "very"]
      },
      {
        type: "true_false",
        prompt: "'It was such cold that we went inside' is correct.",
        answer: "false"
      },
      {
        type: "multiple_choice",
        prompt: "It was ___ hot day that we stayed inside.",
        options: ["so a", "such", "such a", "so"],
        answer: "such a"
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'He is so a good teacher.'",
        answer: "such a good teacher",
        explanation: "Before a/an + adjective + noun, use 'such', not 'so'."
      },
      {
        type: "fill_blank",
        prompt: "She has ___ patience — she never gets angry.",
        answer: "such",
        options: ["such", "so", "so a", "such a"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: a / was / film / such / good / It",
        answer: "It was such a good film",
        items: ["It", "was", "such", "a", "good", "film"]
      },
      {
        type: "true_false",
        prompt: "'She runs so quickly that no one can keep up' is correct.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "There was ___ noise that I couldn't sleep.",
        options: ["so much", "such", "so many", "such a"],
        answer: "so much"
      },
      {
        type: "fill_blank",
        prompt: "He told ___ funny jokes that we all laughed.",
        answer: "such",
        options: ["such", "so", "so a", "such a"]
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
      { front: "Too + adjective", back: "It's too expensive. They are too tired." },
      { front: "Adjective/adverb + enough", back: "She's tall enough. He didn't run fast enough." },
      { front: "Enough + noun", back: "We don't have enough money. Is there enough food?" },
      { front: "Too + much/many", back: "too much noise (uncountable), too many people (countable)" },
      { front: "Enough + to-infinitive", back: "She's old enough to drive. He's strong enough to lift it." }
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
        type: "multiple_choice",
        prompt: "The soup is ___ hot to eat right now.",
        options: ["enough", "too", "so", "very"],
        answer: "too"
      },
      {
        type: "fill_blank",
        prompt: "She isn't ___ tall to reach the shelf.",
        answer: "tall enough",
        options: ["tall enough", "enough tall", "too tall", "very tall"]
      },
      {
        type: "true_false",
        prompt: "'Enough money' is correct but 'money enough' is wrong.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "There are ___ people in this room.",
        options: ["too much", "enough", "too many", "very many"],
        answer: "too many"
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'He is enough old to drive.'",
        answer: "old enough",
        explanation: "'Enough' comes after adjectives: 'old enough', not 'enough old'."
      },
      {
        type: "fill_blank",
        prompt: "I don't have ___ time to help you today.",
        answer: "enough",
        options: ["enough", "too", "very", "much"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: speak / He / fast / too / to / understand",
        answer: "He speaks too fast to understand",
        items: ["He", "speaks", "too", "fast", "to", "understand"]
      },
      {
        type: "true_false",
        prompt: "'Too tired' and 'tired enough' have the same meaning.",
        answer: "false"
      },
      {
        type: "multiple_choice",
        prompt: "Are you ___ comfortable? Do you need more cushions?",
        options: ["too", "enough", "comfortable enough", "too comfortable"],
        answer: "comfortable enough"
      },
      {
        type: "fill_blank",
        prompt: "The bag is ___ heavy for me to carry. I need help.",
        answer: "too",
        options: ["too", "enough", "so", "such"]
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
      { front: "Fairly", back: "Neutral, less than average: The film was fairly good (acceptable)." },
      { front: "Quite", back: "More than average: She's quite talented. It was quite cold." },
      { front: "Rather", back: "Surprisingly or slightly more than expected (often negative): rather boring, rather rude" },
      { front: "Pretty (informal)", back: "Similar to quite/rather: It's pretty difficult. He's pretty clever." },
      { front: "Quite + ungradable", back: "Quite can mean 'completely' with extreme adjectives: quite right, quite wrong" }
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
        type: "multiple_choice",
        prompt: "The film was ___ boring — I nearly fell asleep.",
        options: ["fairly", "rather", "quite right", "absolutely"],
        answer: "rather"
      },
      {
        type: "fill_blank",
        prompt: "The weather is ___ warm for this time of year — nothing special.",
        answer: "fairly",
        options: ["fairly", "rather", "absolutely", "extremely"]
      },
      {
        type: "true_false",
        prompt: "'Rather' can express surprise or mild disappointment.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "In informal speech, ___ is similar to 'quite'.",
        options: ["absolutely", "pretty", "extremely", "very"],
        answer: "pretty"
      },
      {
        type: "fill_blank",
        prompt: "She was ___ right — we should have listened to her.",
        answer: "quite",
        options: ["quite", "fairly", "pretty", "rather"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'The food was fairly excellent.'",
        answer: "quite excellent / absolutely excellent",
        explanation: "'Excellent' is an extreme adjective — use 'quite' (= completely) or 'absolutely', not 'fairly'."
      },
      {
        type: "drag_order",
        prompt: "Arrange: a / was / film / quite / good / It",
        answer: "It was quite a good film",
        items: ["It", "was", "quite", "a", "good", "film"]
      },
      {
        type: "true_false",
        prompt: "'Fairly good' and 'quite good' are identical in meaning.",
        answer: "false"
      },
      {
        type: "multiple_choice",
        prompt: "He spoke ___ rudely — it was unexpected and unpleasant.",
        options: ["quite", "rather", "fairly", "slightly"],
        answer: "rather"
      },
      {
        type: "fill_blank",
        prompt: "The exam was ___ difficult — harder than I expected.",
        answer: "pretty",
        options: ["pretty", "absolutely", "very slightly", "enormously"]
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
      { front: "Common linking verbs", back: "be, seem, appear, look, feel, sound, taste, smell, become, get, stay" },
      { front: "After linking verb", back: "Use adjective: He feels tired. It sounds perfect." },
      { front: "Look as action", back: "She looked at him angrily. (looked = action, angrily = adverb)" },
      { front: "Look as linking", back: "She looks angry. (looks = linking, angry = adjective)" },
      { front: "Feel well", back: "'Feel well' = healthy. 'Feel good' = emotional state." }
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
        type: "multiple_choice",
        prompt: "The soup smells ___.",
        options: ["deliciously", "delicious", "deliciously good", "more delicious"],
        answer: "delicious"
      },
      {
        type: "fill_blank",
        prompt: "She seemed ___ about the decision.",
        answer: "happy",
        options: ["happy", "happily", "happiness", "more happily"]
      },
      {
        type: "true_false",
        prompt: "'He looked at the paper carefully' uses 'carefully' correctly.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "That plan sounds ___.",
        options: ["badly", "wonderfully", "terribly", "wonderful"],
        answer: "wonderful"
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'She felt nervously before the interview.'",
        answer: "felt nervous",
        explanation: "'Feel' is a linking verb — use the adjective 'nervous', not 'nervously'."
      },
      {
        type: "fill_blank",
        prompt: "Stay ___ — the doctor will see you shortly.",
        answer: "calm",
        options: ["calm", "calmly", "calmed", "calmer"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: angry / He / became / after / hearing / the / news",
        answer: "He became angry after hearing the news",
        items: ["He", "became", "angry", "after", "hearing", "the", "news"]
      },
      {
        type: "true_false",
        prompt: "'The cake tastes sweetly' is correct.",
        answer: "false"
      },
      {
        type: "multiple_choice",
        prompt: "I don't feel ___ today — I think I'm getting a cold.",
        options: ["good", "well", "Both A and B are possible", "badly"],
        answer: "Both A and B are possible"
      },
      {
        type: "fill_blank",
        prompt: "She appears ___ about the proposal.",
        answer: "excited",
        options: ["excited", "excitedly", "an excited", "excitement"]
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
      { front: "Gradable adjectives", back: "tired, cold, big, happy, good, interesting — use very/quite" },
      { front: "Extreme/ungradable", back: "exhausted, freezing, enormous, thrilled, perfect, brilliant, terrible" },
      { front: "Intensifiers for gradable", back: "very, extremely, quite, fairly, rather" },
      { front: "Intensifiers for extreme", back: "absolutely, completely, utterly, totally" },
      { front: "Quite special case", back: "Quite + gradable = fairly. Quite + extreme = completely (quite right, quite perfect)" }
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
        type: "multiple_choice",
        prompt: "I'm ___ exhausted after the marathon.",
        options: ["very", "absolutely", "quite", "fairly"],
        answer: "absolutely"
      },
      {
        type: "fill_blank",
        prompt: "The weather is ___ cold — you'll need a coat.",
        answer: "very",
        options: ["very", "absolutely", "utterly", "completely"]
      },
      {
        type: "true_false",
        prompt: "'Absolutely perfect' is correct.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "She was ___ furious when she heard.",
        options: ["very", "absolutely", "quite", "Both B and C"],
        answer: "absolutely"
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'The film was very brilliant — I loved it.'",
        answer: "absolutely brilliant",
        explanation: "'Brilliant' is an extreme adjective — use 'absolutely', not 'very'."
      },
      {
        type: "fill_blank",
        prompt: "The mountain air was ___ freezing.",
        answer: "absolutely",
        options: ["absolutely", "very", "quite", "fairly"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: devastated / was / completely / He / the / by / news",
        answer: "He was completely devastated by the news",
        items: ["He", "was", "completely", "devastated", "by", "the", "news"]
      },
      {
        type: "true_false",
        prompt: "'Very interesting' and 'absolutely fascinating' are both correct.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "The traffic was ___ terrible this morning.",
        options: ["very", "utterly", "Both A and B", "fairly"],
        answer: "Both A and B"
      },
      {
        type: "fill_blank",
        prompt: "It's ___ obvious that she's upset.",
        answer: "quite",
        options: ["quite", "absolutely", "completely", "totally"]
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
      { front: "Intensifying comparatives", back: "much, a lot, far: much faster, a lot better, far worse" },
      { front: "Small difference", back: "a bit, a little, slightly: a bit tired, slightly better" },
      { front: "The...the structure", back: "The older you get, the wiser you become." },
      { front: "Less + adjective", back: "It's less expensive. She's less stressed now." },
      { front: "No comparison: much/far", back: "Never: 'very more', 'very faster' — use 'much/far' instead" }
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
        type: "multiple_choice",
        prompt: "She's ___ better at maths than her brother.",
        options: ["very", "much", "most", "too"],
        answer: "much"
      },
      {
        type: "fill_blank",
        prompt: "___ you sleep, ___ you will feel. (more/better)",
        answer: "The more / the better",
        options: ["The more / the better", "More / better", "The more / the good", "More / the better"]
      },
      {
        type: "true_false",
        prompt: "'The film is far less interesting than the book' is correct.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "It's a ___ easier than I expected.",
        options: ["lot", "bit", "quite", "very"],
        answer: "bit"
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'The exam was very harder than I expected.'",
        answer: "much harder",
        explanation: "Use 'much/far/a lot' to intensify comparatives, not 'very'."
      },
      {
        type: "fill_blank",
        prompt: "The bus is ___ less comfortable than the train, but cheaper.",
        answer: "slightly",
        options: ["slightly", "very", "much", "the"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: the / earn / more / you / the / you / work / more",
        answer: "The more you work the more you earn",
        items: ["The", "more", "you", "work", "the", "more", "you", "earn"]
      },
      {
        type: "true_false",
        prompt: "'A lot better' and 'much better' mean the same thing.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "This version is ___ expensive than the original.",
        options: ["less", "fewer", "little", "lesser"],
        answer: "less"
      },
      {
        type: "fill_blank",
        prompt: "The situation is ___ worse than we thought.",
        answer: "far",
        options: ["far", "very", "most", "quite"]
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
      { front: "Adverb order", back: "Manner + Place + Time: She sang beautifully at the concert last night." },
      { front: "Never split V + Object", back: "She speaks English well. (NOT: She speaks well English)" },
      { front: "Frequency position", back: "Before main verb / after 'be': I often read. She is always busy." },
      { front: "Time adverbs (flexibility)", back: "Can go at start or end: Yesterday she called. / She called yesterday." },
      { front: "Always/never before verb", back: "She always remembers. He never forgets. (NOT: She remembers always)" }
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
        type: "multiple_choice",
        prompt: "Which sentence has correct adverb order?",
        options: [
          "She worked at the office hard yesterday.",
          "She worked hard yesterday at the office.",
          "She worked hard at the office yesterday.",
          "She yesterday worked hard at the office."
        ],
        answer: "She worked hard at the office yesterday."
      },
      {
        type: "fill_blank",
        prompt: "He ___ arrives ___ at work. (always / early)",
        answer: "always arrives early",
        options: ["always arrives early", "arrives always early", "early always arrives", "arrives early always"]
      },
      {
        type: "true_false",
        prompt: "'She speaks well English' is correct.",
        answer: "false"
      },
      {
        type: "multiple_choice",
        prompt: "Where does 'carefully' go: 'She read the letter'?",
        options: ["She carefully the letter read.", "She read carefully the letter.", "She read the letter carefully.", "She carefully read the letter."],
        answer: "She read the letter carefully."
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'She drives to work every day fast.'",
        answer: "drives fast to work every day",
        explanation: "Order: manner (fast) → place (to work) → time (every day)."
      },
      {
        type: "fill_blank",
        prompt: "He sings ___ in the shower ___. (beautifully / every morning)",
        answer: "beautifully / every morning",
        options: ["beautifully / every morning", "every morning / beautifully", "in the shower beautifully / every morning", "beautifully every morning / in the shower"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: quietly / sat / She / the / in / corner",
        answer: "She sat quietly in the corner",
        items: ["She", "sat", "quietly", "in", "the", "corner"]
      },
      {
        type: "true_false",
        prompt: "'Yesterday I worked late in the office' is correct.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "Which is correct?",
        options: ["He eats quickly his lunch.", "He eats his lunch quickly.", "He quickly eats his lunch quickly.", "He his lunch eats quickly."],
        answer: "He eats his lunch quickly."
      },
      {
        type: "fill_blank",
        prompt: "They ___ go to bed ___ midnight. (always / before)",
        answer: "always go to bed before",
        options: ["always go to bed before", "go always to bed before", "always go before to bed", "go to bed always before"]
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
      { front: "Adjective vs adverb", back: "Adjective modifies noun; adverb modifies verb/adjective/adverb" },
      { front: "Intensifiers summary", back: "very/quite/fairly (gradable) vs absolutely/utterly/completely (extreme)" },
      { front: "Comparative summary", back: "-er/more + than; the...the; as...as; less than" },
      { front: "-ing/-ed review", back: "-ing = cause; -ed = effect on person" },
      { front: "Too/enough review", back: "too + adj; adj/adv + enough; enough + noun" }
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
        type: "multiple_choice",
        prompt: "She speaks ___ for someone who only learned English last year.",
        options: ["very good", "goodly", "very well", "very nice"],
        answer: "very well"
      },
      {
        type: "fill_blank",
        prompt: "The film was ___ boring that I fell asleep.",
        answer: "so",
        options: ["so", "such", "very", "too"]
      },
      {
        type: "true_false",
        prompt: "'The presentation was absolutely perfect' is correct.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "He is ___ tired to concentrate.",
        options: ["too", "enough", "very", "much"],
        answer: "too"
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'The trip was very exhausting and I felt very exhausted.'",
        answer: "absolutely exhausted",
        explanation: "While 'very exhausting' is fine (gradable), 'exhausted' is extreme — use 'absolutely exhausted'."
      },
      {
        type: "fill_blank",
        prompt: "She's ___ experienced ___ handle the project alone.",
        answer: "experienced enough / to",
        options: ["experienced enough / to", "enough experienced / to", "too experienced / to", "experienced enough / for"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: interesting / The / absolutely / was / lecture",
        answer: "The lecture was absolutely fascinating",
        items: ["The", "lecture", "was", "absolutely", "fascinating"]
      },
      {
        type: "true_false",
        prompt: "'Much better than before' is correct.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "I was ___ by the film — it was better than I expected.",
        options: ["impressing", "impressive", "impressed", "impress"],
        answer: "impressed"
      },
      {
        type: "fill_blank",
        prompt: "___ older she gets, ___ confident she becomes.",
        answer: "The / the",
        options: ["The / the", "More / more", "The / more", "More / the"]
      }
    ]
  }
];

export default adjectivesAndAdverbs;
