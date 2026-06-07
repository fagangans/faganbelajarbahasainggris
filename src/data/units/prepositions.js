const prepositions = [
  {
    id: 121,
    title: "At/On/In — Time",
    category: "Prepositions",
    section: "Prepositions",
    key_rule: "Use 'at' for specific times and fixed expressions. Use 'on' for days and dates. Use 'in' for months, years, seasons, and longer periods.",
    examples: [
      "at 3 o'clock, at night, at Christmas, at the weekend",
      "on Monday, on 5 June, on my birthday",
      "in January, in 2024, in summer, in the morning"
    ],
    common_mistakes: [
      "Using 'in' for specific times: 'in 3 o'clock' (wrong → at 3 o'clock)",
      "Using 'at' for days: 'at Monday' (wrong → on Monday)"
    ],
    study_cards: [
      { front: "At + time", back: "at 7 am, at noon, at midnight, at night" },
      { front: "On + day/date", back: "on Tuesday, on 14 July, on Christmas Day" },
      { front: "In + period", back: "in March, in 2010, in summer, in the evening" },
      { front: "Fixed expressions", back: "at the weekend, at Christmas, at Easter" },
      { front: "No preposition", back: "No preposition before: this, last, next, every: this morning, next week" }
    ],
    listen_sentences: [
      "The meeting is at ten o'clock on Friday.",
      "She was born in July 1990.",
      "I always feel tired in the evening.",
      "They got married on a sunny Saturday in spring.",
      "We don't work at weekends."
    ],
    questions: [
      {
        type: "fill_blank",
        prompt: "The train leaves ___ 9:30 ___ Tuesday morning.",
        answer: "at / on",
        options: ["at / on", "on / at", "in / on", "at / in"]
      },
      {
        type: "multiple_choice",
        prompt: "I was born ___ 1995.",
        options: ["at", "on", "in", "by"],
        answer: "in"
      },
      {
        type: "true_false",
        prompt: "'She called me on the evening' is correct.",
        answer: "false"
      },
      {
        type: "fill_blank",
        prompt: "He usually goes jogging ___ the morning.",
        answer: "in",
        options: ["in", "at", "on", "by"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'We're going on holiday in next week.'",
        answer: "next week (no preposition)",
        explanation: "No preposition before 'next': 'We're going on holiday next week.'"
      },
      {
        type: "multiple_choice",
        prompt: "The party is ___ Saturday night.",
        options: ["in", "at", "on", "by"],
        answer: "on"
      },
      {
        type: "drag_order",
        prompt: "Arrange: at / meet / night / Let's / midnight",
        answer: "Let's meet at midnight tonight",
        items: ["Let's", "meet", "at", "midnight", "tonight"]
      },
      {
        type: "true_false",
        prompt: "'At Christmas' is correct.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "She graduated ___ June ___ 2022.",
        answer: "in / —",
        options: ["in / —", "on / in", "in / in", "at / in"]
      },
      {
        type: "multiple_choice",
        prompt: "I'll see you ___ the weekend.",
        options: ["in", "on", "at", "by"],
        answer: "at"
      }
    ]
  },
  {
    id: 122,
    title: "At/On/In — Place",
    category: "Prepositions",
    section: "Prepositions",
    key_rule: "Use 'at' for a specific point/location. Use 'on' for surfaces and lines. Use 'in' for enclosed spaces, cities, and countries.",
    examples: [
      "at the bus stop, at the top, at the corner",
      "on the wall, on the floor, on the left",
      "in the box, in London, in France, in the room"
    ],
    common_mistakes: [
      "Using 'in' for points: 'in the corner of the room' (some usage varies: in the corner = inside a room; at the corner = street corner)",
      "Confusing at/in for buildings: at the station (location) vs in the station (inside)"
    ],
    study_cards: [
      { front: "At = point", back: "at the door, at the bus stop, at school, at work" },
      { front: "On = surface", back: "on the table, on the wall, on the ceiling, on the floor" },
      { front: "In = enclosed/3D", back: "in the box, in the room, in the city, in the world" },
      { front: "On = line/road", back: "on the left, on the right, on the motorway" },
      { front: "In = country/city", back: "in London, in Japan, in the park, in the garden" }
    ],
    listen_sentences: [
      "She is waiting at the bus stop.",
      "The keys are on the kitchen table.",
      "He lives in Paris, in a flat on the fifth floor.",
      "Turn left at the traffic lights.",
      "There is a spider on the ceiling."
    ],
    questions: [
      {
        type: "fill_blank",
        prompt: "The book is ___ the shelf.",
        answer: "on",
        options: ["on", "in", "at", "by"]
      },
      {
        type: "multiple_choice",
        prompt: "She works ___ a hospital.",
        options: ["on", "at", "in", "by"],
        answer: "at"
      },
      {
        type: "true_false",
        prompt: "'He lives in Tokyo' is correct.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "She was standing ___ the top of the stairs.",
        answer: "at",
        options: ["at", "in", "on", "to"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'The picture is in the wall.'",
        answer: "on the wall",
        explanation: "Pictures hang on surfaces: 'on the wall', not 'in'."
      },
      {
        type: "multiple_choice",
        prompt: "Turn right ___ the next corner.",
        options: ["in", "on", "at", "by"],
        answer: "at"
      },
      {
        type: "drag_order",
        prompt: "Arrange: the / are / My / in / glasses / bag",
        answer: "My glasses are in the bag",
        items: ["My", "glasses", "are", "in", "the", "bag"]
      },
      {
        type: "true_false",
        prompt: "'She is sitting on the floor' is correct.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "There's a good restaurant ___ the left, ___ the corner.",
        answer: "on / at",
        options: ["on / at", "at / on", "in / at", "at / in"]
      },
      {
        type: "multiple_choice",
        prompt: "He grew up ___ a small village ___ the mountains.",
        options: ["in / in", "at / in", "in / on", "on / in"],
        answer: "in / in"
      }
    ]
  },
  {
    id: 123,
    title: "At/On/In — More About Place",
    category: "Prepositions",
    section: "Prepositions",
    key_rule: "Some location expressions require specific prepositions: arrive at/in, at home/work/school, in the north/south/east/west, on the way, on a bus/train/plane (but in a car/taxi).",
    examples: [
      "arrive at the station / arrive in London (city)",
      "at home, at work, at school, at university",
      "on the bus, on the train, on the plane (public transport)",
      "in a car, in a taxi (private vehicle)"
    ],
    common_mistakes: [
      "Arrive in for small places: 'arrive in the station' (wrong → arrive at the station)",
      "Confusing on/in for vehicles: 'in the bus' (informal but 'on the bus' is standard)"
    ],
    study_cards: [
      { front: "Arrive at", back: "Small/specific locations: arrive at the airport, at the station, at school" },
      { front: "Arrive in", back: "Cities/countries: arrive in Tokyo, arrive in France" },
      { front: "At (activity location)", back: "at school, at work, at home, at a party, at a conference" },
      { front: "On transport", back: "on the bus/train/plane/ferry/bike/horse (public/open)" },
      { front: "In transport", back: "in a car, in a taxi, in a lift (enclosed private)" }
    ],
    listen_sentences: [
      "We arrived at the hotel just after midnight.",
      "She arrived in New York on Tuesday.",
      "He fell asleep on the train.",
      "Are you still at work?",
      "I'll meet you at the airport."
    ],
    questions: [
      {
        type: "fill_blank",
        prompt: "We arrived ___ the hotel and checked in.",
        answer: "at",
        options: ["at", "in", "on", "to"]
      },
      {
        type: "multiple_choice",
        prompt: "She was reading ___ the bus.",
        options: ["in", "at", "on", "by"],
        answer: "on"
      },
      {
        type: "true_false",
        prompt: "'He arrived in the station' is correct.",
        answer: "false"
      },
      {
        type: "fill_blank",
        prompt: "They arrived ___ France after a long flight.",
        answer: "in",
        options: ["in", "at", "on", "to"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'She is in school right now — she'll be home at four.'",
        answer: "at school",
        explanation: "Use 'at school' for the activity/purpose location."
      },
      {
        type: "multiple_choice",
        prompt: "I usually listen to music ___ my car.",
        options: ["on", "at", "in", "by"],
        answer: "in"
      },
      {
        type: "drag_order",
        prompt: "Arrange: at / arrived / airport / We / the / five / at",
        answer: "We arrived at the airport at five",
        items: ["We", "arrived", "at", "the", "airport", "at", "five"]
      },
      {
        type: "true_false",
        prompt: "'On a plane' is the standard preposition for air travel.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "I ran into her ___ the way to the office.",
        answer: "on",
        options: ["on", "in", "at", "by"]
      },
      {
        type: "multiple_choice",
        prompt: "He is ___ home today — he wasn't feeling well.",
        options: ["in", "on", "at", "by"],
        answer: "at"
      }
    ]
  },
  {
    id: 124,
    title: "By, Until, Since, For",
    category: "Prepositions",
    section: "Prepositions",
    key_rule: "By = not later than a deadline. Until/till = up to a time. Since = from a point in past to now. For = duration of time.",
    examples: [
      "Submit the report by Friday. (deadline)",
      "Stay until/till midnight. (continues up to that point)",
      "I've lived here since 2015. (point in past)",
      "I've lived here for ten years. (duration)"
    ],
    common_mistakes: [
      "Confusing by/until: 'Wait by five o'clock' (wrong if meaning continues — use 'until')",
      "Using for instead of since: 'I have been here for 2010' (wrong → since 2010)"
    ],
    study_cards: [
      { front: "By = deadline", back: "I need it by tomorrow. Be here by noon." },
      { front: "Until/till = continuing", back: "She waited until seven. Open till midnight." },
      { front: "Since = starting point", back: "She has worked here since 2018." },
      { front: "For = duration", back: "He has been ill for three days." },
      { front: "By then", back: "By the time she arrived, he had already left." }
    ],
    listen_sentences: [
      "Please finish the task by Monday morning.",
      "She stayed at the library until it closed.",
      "He has been learning guitar since he was ten.",
      "I've known her for about five years.",
      "By the time we arrived, the film had started."
    ],
    questions: [
      {
        type: "fill_blank",
        prompt: "Please return the book ___ Friday.",
        answer: "by",
        options: ["by", "until", "since", "for"]
      },
      {
        type: "multiple_choice",
        prompt: "She waited ___ the last bus.",
        options: ["by", "since", "for", "until"],
        answer: "until"
      },
      {
        type: "true_false",
        prompt: "'I have lived here since three years' is correct.",
        answer: "false"
      },
      {
        type: "fill_blank",
        prompt: "They have been friends ___ they were children.",
        answer: "since",
        options: ["since", "for", "by", "until"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'I need this report until tomorrow.'",
        answer: "by tomorrow",
        explanation: "Deadlines use 'by', not 'until'."
      },
      {
        type: "multiple_choice",
        prompt: "How long have you known him?",
        options: ["Since three years.", "For three years.", "By three years.", "Until three years."],
        answer: "For three years."
      },
      {
        type: "drag_order",
        prompt: "Arrange: five / worked / has / for / She / here / years",
        answer: "She has worked here for five years",
        items: ["She", "has", "worked", "here", "for", "five", "years"]
      },
      {
        type: "true_false",
        prompt: "'Until' and 'till' are interchangeable.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "The shop is open ___ nine ___ nine.",
        answer: "from / until",
        options: ["from / until", "by / since", "since / until", "at / by"]
      },
      {
        type: "multiple_choice",
        prompt: "___ the time she gets home, I'll have cooked dinner.",
        options: ["Since", "Until", "By", "For"],
        answer: "By"
      }
    ]
  },
  {
    id: 125,
    title: "Prepositions of Movement",
    category: "Prepositions",
    section: "Prepositions",
    key_rule: "Prepositions of movement describe direction: into/out of (entering/leaving an enclosed space), onto/off (onto a surface), through (passing inside), across (passing over a surface), along (moving parallel), towards/away from.",
    examples: [
      "She walked into the room. / He ran out of the house.",
      "He jumped onto the table. / She stepped off the bus.",
      "They walked through the tunnel.",
      "She walked across the bridge."
    ],
    common_mistakes: [
      "Into vs in: 'She went in the room' (going inside → 'into' or 'in' both acceptable in informal English, but 'into' for movement)",
      "Confusing through/across: through = inside something; across = on a surface"
    ],
    study_cards: [
      { front: "Into / out of", back: "Direction into enclosed space: walk into the room, run out of the shop" },
      { front: "Onto / off", back: "Movement onto a surface: climb onto the roof, fall off the ladder" },
      { front: "Through", back: "Passing inside a space: walk through the forest, drive through the tunnel" },
      { front: "Across", back: "Moving from one side to other over a surface: swim across the river, walk across the road" },
      { front: "Along / up / down", back: "Along = parallel to: walk along the river. Up/down = movement on slope/stairs" }
    ],
    listen_sentences: [
      "She walked into the office and closed the door.",
      "He drove through the tunnel at high speed.",
      "The children ran across the field.",
      "She climbed up the stairs carefully.",
      "He fell off his bicycle and hurt his knee."
    ],
    questions: [
      {
        type: "fill_blank",
        prompt: "She walked ___ the room and sat down.",
        answer: "into",
        options: ["into", "out of", "across", "through"]
      },
      {
        type: "multiple_choice",
        prompt: "The train passed ___ the tunnel.",
        options: ["across", "along", "through", "onto"],
        answer: "through"
      },
      {
        type: "true_false",
        prompt: "'She swam across the river' means she went from one side to the other.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "He jumped ___ the wall and landed in the garden.",
        answer: "over",
        options: ["over", "onto", "across", "along"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'She got on of the car and went inside.'",
        answer: "got out of the car",
        explanation: "Leaving an enclosed vehicle uses 'out of': 'got out of the car'."
      },
      {
        type: "multiple_choice",
        prompt: "We walked ___ the beach all morning.",
        options: ["through", "across", "along", "onto"],
        answer: "along"
      },
      {
        type: "drag_order",
        prompt: "Arrange: the / walked / forest / through / We",
        answer: "We walked through the forest",
        items: ["We", "walked", "through", "the", "forest"]
      },
      {
        type: "true_false",
        prompt: "'She got onto the bus' uses the correct preposition.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "He ran ___ the stairs as fast as he could.",
        answer: "up",
        options: ["up", "across", "through", "into"]
      },
      {
        type: "multiple_choice",
        prompt: "She came ___ the room when she heard her name.",
        options: ["into", "out from", "inside", "out of"],
        answer: "out of"
      }
    ]
  },
  {
    id: 126,
    title: "Prepositions After Verbs (1)",
    category: "Prepositions",
    section: "Prepositions",
    key_rule: "Many verbs are followed by specific prepositions. These must be memorized. Common verb + preposition combinations include: wait for, listen to, look at, think about, rely on, apologize for.",
    examples: [
      "wait for someone, listen to music",
      "look at the picture, think about the problem",
      "apologize for something, rely on someone",
      "belong to, agree with, complain about"
    ],
    common_mistakes: [
      "Wrong preposition: 'wait on' (wrong in British English → wait for), 'listen at' (wrong → listen to)",
      "Omitting preposition: 'I agreed him' (wrong → agreed with him)"
    ],
    study_cards: [
      { front: "Wait for", back: "I've been waiting for the bus for twenty minutes." },
      { front: "Listen to", back: "She always listens to music while she works." },
      { front: "Look at", back: "Look at this photo — isn't it great?" },
      { front: "Think about / of", back: "Think about the future. What do you think of him?" },
      { front: "Rely on / depend on", back: "You can always rely on her. It depends on the weather." }
    ],
    listen_sentences: [
      "I've been waiting for a reply for over a week.",
      "She always listens to the radio in the morning.",
      "Look at those clouds — it might rain.",
      "You can rely on him to get the job done.",
      "He apologized for being late to the meeting."
    ],
    questions: [
      {
        type: "fill_blank",
        prompt: "She is waiting ___ the doctor.",
        answer: "for",
        options: ["for", "to", "on", "at"]
      },
      {
        type: "multiple_choice",
        prompt: "I love listening ___ classical music.",
        options: ["for", "at", "to", "on"],
        answer: "to"
      },
      {
        type: "true_false",
        prompt: "'He apologized for his mistake' is correct.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "She relies ___ her friends for support.",
        answer: "on",
        options: ["on", "for", "to", "at"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'I was listening the news when he arrived.'",
        answer: "listening to the news",
        explanation: "'Listen' requires 'to': 'listening to the news'."
      },
      {
        type: "multiple_choice",
        prompt: "Can you think ___ a solution?",
        options: ["at", "for", "on", "of"],
        answer: "of"
      },
      {
        type: "drag_order",
        prompt: "Arrange: for / waiting / been / I've / hours / two",
        answer: "I've been waiting for two hours",
        items: ["I've", "been", "waiting", "for", "two", "hours"]
      },
      {
        type: "true_false",
        prompt: "'Look on that photo' is correct.",
        answer: "false"
      },
      {
        type: "fill_blank",
        prompt: "He complained ___ the noise from the neighbours.",
        answer: "about",
        options: ["about", "for", "on", "at"]
      },
      {
        type: "multiple_choice",
        prompt: "I agree ___ you completely.",
        options: ["to", "for", "with", "at"],
        answer: "with"
      }
    ]
  },
  {
    id: 127,
    title: "Prepositions After Verbs (2)",
    category: "Prepositions",
    section: "Prepositions",
    key_rule: "More common verb + preposition collocations: apply for, believe in, dream of/about, insist on, ask for, laugh at, concentrate on, blame for, accuse of, warn about/of.",
    examples: [
      "apply for a job, believe in something",
      "insist on doing something, ask for help",
      "concentrate on the task, dream of/about travelling",
      "blame someone for something, accuse someone of something"
    ],
    common_mistakes: [
      "Wrong preposition: 'apply to a job' (wrong → apply for a job)",
      "Omitting preposition: 'concentrate the task' (wrong → concentrate on)"
    ],
    study_cards: [
      { front: "Apply for", back: "She applied for several jobs last month." },
      { front: "Believe in", back: "Do you believe in ghosts? I believe in hard work." },
      { front: "Insist on", back: "He insisted on paying for dinner." },
      { front: "Concentrate on", back: "I can't concentrate on my work with all this noise." },
      { front: "Accuse of / Blame for", back: "They accused him of cheating. She blamed him for the accident." }
    ],
    listen_sentences: [
      "She applied for a scholarship at three universities.",
      "He insisted on walking home despite the rain.",
      "I can't concentrate on anything when I'm hungry.",
      "They accused her of stealing the money.",
      "Do you believe in life on other planets?"
    ],
    questions: [
      {
        type: "fill_blank",
        prompt: "She applied ___ the position last week.",
        answer: "for",
        options: ["for", "to", "on", "at"]
      },
      {
        type: "multiple_choice",
        prompt: "He insists ___ doing everything himself.",
        options: ["for", "to", "on", "about"],
        answer: "on"
      },
      {
        type: "true_false",
        prompt: "'She was accused of fraud' is correct.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "I keep dreaming ___ a holiday in the mountains.",
        answer: "about",
        options: ["about", "of", "for", "Both A and B are correct"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'He was blamed of causing the accident.'",
        answer: "blamed for causing",
        explanation: "'Blame' uses 'for': 'blamed for causing the accident'."
      },
      {
        type: "multiple_choice",
        prompt: "She concentrated ___ the problem and found a solution.",
        options: ["to", "for", "on", "about"],
        answer: "on"
      },
      {
        type: "drag_order",
        prompt: "Arrange: for / He / applied / the / job / online",
        answer: "He applied for the job online",
        items: ["He", "applied", "for", "the", "job", "online"]
      },
      {
        type: "true_false",
        prompt: "'Believe in' is used for trust in concepts or people.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "They ___ him ___ breaking the equipment.",
        answer: "blamed / for",
        options: ["blamed / for", "accused / of", "Either is correct", "blamed / of"]
      },
      {
        type: "multiple_choice",
        prompt: "She laughed ___ his funny story.",
        options: ["on", "to", "about", "at"],
        answer: "at"
      }
    ]
  },
  {
    id: 128,
    title: "Prepositions After Adjectives",
    category: "Prepositions",
    section: "Prepositions",
    key_rule: "Adjectives are often followed by specific prepositions: afraid of, interested in, proud of, responsible for, similar to, different from, good/bad at, keen on, surprised at/by, married to.",
    examples: [
      "She is afraid of spiders.",
      "I'm interested in photography.",
      "He is responsible for the mistake.",
      "Are you good at maths?"
    ],
    common_mistakes: [
      "Wrong preposition: 'afraid from' (wrong → afraid of), 'interested on' (wrong → interested in)",
      "Different 'than' instead of 'from': 'different than' (used in American English; British prefers 'different from')"
    ],
    study_cards: [
      { front: "Afraid / scared / frightened of", back: "She's afraid of spiders. He's scared of the dark." },
      { front: "Good / bad / excellent at", back: "He's very good at languages. She's bad at sport." },
      { front: "Interested in", back: "Are you interested in art?" },
      { front: "Proud / ashamed of", back: "She is very proud of her work." },
      { front: "Similar to / different from", back: "This is similar to that. He's quite different from his brother." }
    ],
    listen_sentences: [
      "She's very good at playing the piano.",
      "He's not interested in politics.",
      "They are responsible for the project's success.",
      "I'm really proud of what we've achieved.",
      "This painting is very similar to the original."
    ],
    questions: [
      {
        type: "fill_blank",
        prompt: "She is afraid ___ the dark.",
        answer: "of",
        options: ["of", "from", "at", "about"]
      },
      {
        type: "multiple_choice",
        prompt: "He is very good ___ chess.",
        options: ["in", "on", "at", "for"],
        answer: "at"
      },
      {
        type: "true_false",
        prompt: "'She is interested in learning languages' is correct.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "Are you responsible ___ the catering?",
        answer: "for",
        options: ["for", "of", "to", "about"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'He is very proud about his daughter's success.'",
        answer: "proud of",
        explanation: "'Proud' is followed by 'of': 'proud of his daughter's success'."
      },
      {
        type: "multiple_choice",
        prompt: "This solution is similar ___ the one we tried before.",
        options: ["as", "than", "to", "from"],
        answer: "to"
      },
      {
        type: "drag_order",
        prompt: "Arrange: of / very / I'm / proud / you",
        answer: "I'm very proud of you",
        items: ["I'm", "very", "proud", "of", "you"]
      },
      {
        type: "true_false",
        prompt: "'Different from' is the standard British English form.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "She was surprised ___ the news.",
        answer: "by",
        options: ["by", "of", "in", "for"]
      },
      {
        type: "multiple_choice",
        prompt: "He's married ___ a doctor.",
        options: ["with", "to", "for", "of"],
        answer: "to"
      }
    ]
  },
  {
    id: 129,
    title: "Prepositions After Nouns",
    category: "Prepositions",
    section: "Prepositions",
    key_rule: "Many nouns are followed by specific prepositions: reason for, increase/decrease in, advantage/disadvantage of, solution to, demand for, invitation to, relationship with/between.",
    examples: [
      "the reason for the delay",
      "an increase in prices, a decrease in sales",
      "the solution to the problem",
      "an advantage of this method, an invitation to the party"
    ],
    common_mistakes: [
      "Wrong preposition: 'solution of the problem' (wrong → solution to)",
      "'reason of' instead of 'reason for'"
    ],
    study_cards: [
      { front: "Reason for", back: "What's the reason for the cancellation?" },
      { front: "Solution to", back: "We found a solution to the problem." },
      { front: "Increase/decrease in", back: "There has been an increase in crime." },
      { front: "Advantage/disadvantage of", back: "The advantage of living here is the clean air." },
      { front: "Invitation to / demand for", back: "an invitation to the wedding; a demand for change" }
    ],
    listen_sentences: [
      "The reason for the delay was a technical fault.",
      "They found a solution to the parking problem.",
      "There has been a sharp increase in temperatures.",
      "One advantage of working from home is flexibility.",
      "She received an invitation to the state dinner."
    ],
    questions: [
      {
        type: "fill_blank",
        prompt: "What is the reason ___ the strike?",
        answer: "for",
        options: ["for", "of", "to", "behind"]
      },
      {
        type: "multiple_choice",
        prompt: "We need to find a solution ___ this problem.",
        options: ["of", "for", "to", "about"],
        answer: "to"
      },
      {
        type: "true_false",
        prompt: "'An increase in prices' is correct.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "There has been a rise ___ unemployment recently.",
        answer: "in",
        options: ["in", "of", "for", "at"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'The advantage of this plan is clear — why are you against it?'",
        answer: "The advantage of this plan",
        explanation: "Actually correct! 'Advantage of' is right here."
      },
      {
        type: "multiple_choice",
        prompt: "She received an invitation ___ the awards ceremony.",
        options: ["for", "of", "at", "to"],
        answer: "to"
      },
      {
        type: "drag_order",
        prompt: "Arrange: to / a / found / problem / solution / We / the",
        answer: "We found a solution to the problem",
        items: ["We", "found", "a", "solution", "to", "the", "problem"]
      },
      {
        type: "true_false",
        prompt: "'The demand for affordable housing is growing' is correct.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "What are the disadvantages ___ working nights?",
        answer: "of",
        options: ["of", "for", "to", "at"]
      },
      {
        type: "multiple_choice",
        prompt: "What's the connection ___ these two events?",
        options: ["among", "for", "between", "with"],
        answer: "between"
      }
    ]
  },
  {
    id: 130,
    title: "Prepositions: In/At/On — Expressions",
    category: "Prepositions",
    section: "Prepositions",
    key_rule: "Many fixed expressions use in/at/on. Learn these as set phrases: in time, on time, at the end, in the end, on the other hand, at least, in fact, on purpose.",
    examples: [
      "in time = early enough; on time = punctual (exactly at the right time)",
      "in the end = finally, after a long time; at the end = at the final point",
      "on purpose = intentionally; by accident = unintentionally",
      "at least = a minimum; at most = a maximum"
    ],
    common_mistakes: [
      "Confusing in time / on time: 'She arrived in time to catch her train' vs 'The bus arrived on time'",
      "Confusing in the end / at the end: 'In the end, we decided to go' vs 'At the end of the film'"
    ],
    study_cards: [
      { front: "On time", back: "Punctual, exactly scheduled: The train arrived on time." },
      { front: "In time", back: "Early enough before a deadline: I arrived in time to eat first." },
      { front: "At the end", back: "At the final point: at the end of the street, at the end of the film" },
      { front: "In the end", back: "Finally, after all: In the end, she decided to stay." },
      { front: "On purpose / by accident", back: "She did it on purpose. He broke it by accident." }
    ],
    listen_sentences: [
      "The meeting started on time for once.",
      "We arrived just in time to catch the last train.",
      "In the end, we had a great holiday.",
      "At the end of the road, turn left.",
      "I didn't mean to spill it — it was by accident."
    ],
    questions: [
      {
        type: "multiple_choice",
        prompt: "The train left ___. It wasn't a minute late.",
        options: ["on time", "in time", "at time", "by time"],
        answer: "on time"
      },
      {
        type: "fill_blank",
        prompt: "We got there just ___ to see the ceremony begin.",
        answer: "in time",
        options: ["in time", "on time", "at time", "by the time"]
      },
      {
        type: "true_false",
        prompt: "'At the end, we went home' is correct.",
        answer: "false"
      },
      {
        type: "multiple_choice",
        prompt: "___ the end, it all worked out well.",
        options: ["At", "In", "By", "On"],
        answer: "In"
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'She broke the vase in purpose.'",
        answer: "on purpose",
        explanation: "The fixed expression is 'on purpose', not 'in purpose'."
      },
      {
        type: "fill_blank",
        prompt: "___ the end of the film, everyone was crying.",
        answer: "At",
        options: ["At", "In", "On", "By"]
      },
      {
        type: "drag_order",
        prompt: "Arrange: the / by / broke / I / it / accident",
        answer: "I broke it by accident",
        items: ["I", "broke", "it", "by", "accident"]
      },
      {
        type: "true_false",
        prompt: "'At least ten people came' means a minimum of ten.",
        answer: "true"
      },
      {
        type: "multiple_choice",
        prompt: "She ran ___ to catch the bus before it left.",
        options: ["in time", "on time", "at the time", "by time"],
        answer: "in time"
      },
      {
        type: "fill_blank",
        prompt: "In ___, the project was a great success.",
        answer: "fact",
        options: ["fact", "the end", "time", "purpose"]
      }
    ]
  },
  {
    id: 131,
    title: "Prepositions: With, Without, Despite, According to",
    category: "Prepositions",
    section: "Prepositions",
    key_rule: "With = accompanying or using something. Without = lacking or not including. Despite/in spite of = contrast (although). According to = based on someone's statement.",
    examples: [
      "She left with her bag. / He went without saying goodbye.",
      "Despite the rain, they played the match.",
      "According to the news, it will snow tomorrow.",
      "In spite of his age, he runs marathons."
    ],
    common_mistakes: [
      "'Despite of' (wrong — remove 'of': just 'despite the rain')",
      "Confusing despite and although: despite + noun/gerund; although + clause"
    ],
    study_cards: [
      { front: "Despite / in spite of + noun/gerund", back: "Despite the noise, she slept. In spite of feeling ill, he worked." },
      { front: "Although + clause", back: "Although it was noisy, she slept. (clause, not noun)" },
      { front: "According to", back: "Based on source: According to the doctor, I need rest." },
      { front: "With = tool/companion", back: "Write with a pen. He came with his sister." },
      { front: "Without + noun/gerund", back: "Leave without saying goodbye. Go without food." }
    ],
    listen_sentences: [
      "Despite the cold weather, they had a picnic.",
      "She finished the exam without any preparation.",
      "According to the weather forecast, it will be sunny.",
      "He passed with flying colours.",
      "In spite of his nerves, he gave a great speech."
    ],
    questions: [
      {
        type: "fill_blank",
        prompt: "___ the traffic, she arrived on time.",
        answer: "Despite",
        options: ["Despite", "Although", "Even though", "However"]
      },
      {
        type: "multiple_choice",
        prompt: "___ the report, sales increased by 15%.",
        options: ["According to", "In spite of", "Without", "Despite"],
        answer: "According to"
      },
      {
        type: "true_false",
        prompt: "'Despite of the rain, we went out' is correct.",
        answer: "false"
      },
      {
        type: "fill_blank",
        prompt: "He left ___ saying goodbye to anyone.",
        answer: "without",
        options: ["without", "despite", "with", "by"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'She succeeded despite of all the obstacles.'",
        answer: "despite all the obstacles",
        explanation: "'Despite' is not followed by 'of': 'despite all the obstacles'."
      },
      {
        type: "multiple_choice",
        prompt: "She did it ___ any help from anyone.",
        options: ["with", "despite", "without", "according to"],
        answer: "without"
      },
      {
        type: "drag_order",
        prompt: "Arrange: she / passed / Surprisingly / notes / any / without",
        answer: "Surprisingly she passed without any notes",
        items: ["Surprisingly", "she", "passed", "without", "any", "notes"]
      },
      {
        type: "true_false",
        prompt: "'According to him, the meeting was cancelled' is correct.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "___ in spite ___ the difficulties, they completed the project.",
        answer: "— / of",
        options: ["— / of", "In / of", "Despite / of", "In / —"]
      },
      {
        type: "multiple_choice",
        prompt: "She went swimming ___ the cold.",
        options: ["despite", "although", "however", "in spite"],
        answer: "despite"
      }
    ]
  },
  {
    id: 132,
    title: "Prepositions: About, Of, For, From",
    category: "Prepositions",
    section: "Prepositions",
    key_rule: "About = on the subject of. Of = belonging/content. For = purpose/intended for/duration. From = origin/source/point in time. These prepositions have many uses and must be learned in context.",
    examples: [
      "a book about history, talk about your day",
      "a cup of tea, afraid of something, the end of the film",
      "good for your health, a present for you, for three hours",
      "from London, made from wood, hear from someone"
    ],
    common_mistakes: [
      "Confusing about/of with think: 'think about' (general thinking) vs 'think of' (have an opinion of)",
      "Wrong 'from': 'he told about' (wrong → told him about)"
    ],
    study_cards: [
      { front: "About", back: "Subject/topic: a film about war; worried about money" },
      { front: "Of", back: "Belonging/partitive: a piece of cake; the colour of the sky; afraid of" },
      { front: "For", back: "Purpose/benefit/duration: good for you; I waited for an hour; a gift for her" },
      { front: "From", back: "Origin: made from milk; she's from Spain; hear from someone" },
      { front: "Think about vs of", back: "Think about = consider. Think of = have an opinion of / remember" }
    ],
    listen_sentences: [
      "She told me all about her trip to Japan.",
      "He was made from the same mould as his father.",
      "This is a gift for you.",
      "I haven't heard from her in months.",
      "What do you think of the new design?"
    ],
    questions: [
      {
        type: "fill_blank",
        prompt: "She told me ___ her new job.",
        answer: "about",
        options: ["about", "of", "for", "from"]
      },
      {
        type: "multiple_choice",
        prompt: "Cheese is made ___ milk.",
        options: ["with", "of", "from", "by"],
        answer: "from"
      },
      {
        type: "true_false",
        prompt: "'A glass of water' uses 'of' correctly.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "This is good ___ your health.",
        answer: "for",
        options: ["for", "to", "of", "about"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'What do you think about the new manager?'",
        answer: "think of the new manager",
        explanation: "'Think of' asks for an opinion. 'Think about' = to consider/ponder."
      },
      {
        type: "multiple_choice",
        prompt: "I haven't heard ___ him since Christmas.",
        options: ["about", "from", "of", "for"],
        answer: "from"
      },
      {
        type: "drag_order",
        prompt: "Arrange: a / is / about / book / This / courage",
        answer: "This is a book about courage",
        items: ["This", "is", "a", "book", "about", "courage"]
      },
      {
        type: "true_false",
        prompt: "'A present for my mother' is correct.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "She is ___ Italy originally.",
        answer: "from",
        options: ["from", "of", "in", "at"]
      },
      {
        type: "multiple_choice",
        prompt: "He was worried ___ the results.",
        options: ["of", "for", "about", "from"],
        answer: "about"
      }
    ]
  },
  {
    id: 133,
    title: "Prepositions After Adjectives (2)",
    category: "Prepositions",
    section: "Prepositions",
    key_rule: "More adjective + preposition combinations: aware of, capable of, conscious of, familiar with, satisfied with, tired of, used to, keen on, fond of, famous for.",
    examples: [
      "aware of the problem, capable of great things",
      "familiar with the procedure, satisfied with the result",
      "tired of waiting, keen on photography",
      "famous for its cuisine, fond of children"
    ],
    common_mistakes: [
      "'Familiar to' (sometimes used but 'familiar with' is standard for knowledge of something)",
      "'Capable for' (wrong → capable of)"
    ],
    study_cards: [
      { front: "Aware / conscious of", back: "Are you aware of the risks? He became conscious of his mistake." },
      { front: "Capable of / incapable of", back: "She is capable of great things. He is incapable of lying." },
      { front: "Familiar with", back: "Are you familiar with the process?" },
      { front: "Satisfied / pleased with", back: "I'm satisfied with the results. She's pleased with her grade." },
      { front: "Tired of / fond of / keen on", back: "I'm tired of waiting. She's fond of animals. He's keen on football." }
    ],
    listen_sentences: [
      "Are you aware of any changes to the schedule?",
      "She is capable of handling much more responsibility.",
      "He is familiar with the software from his previous job.",
      "I'm not satisfied with this outcome.",
      "She is very fond of her grandchildren."
    ],
    questions: [
      {
        type: "fill_blank",
        prompt: "Are you aware ___ the new policy?",
        answer: "of",
        options: ["of", "about", "for", "with"]
      },
      {
        type: "multiple_choice",
        prompt: "She is very capable ___ solving complex problems.",
        options: ["for", "to", "of", "at"],
        answer: "of"
      },
      {
        type: "true_false",
        prompt: "'Familiar with' means you know something well.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "I'm not satisfied ___ the service we received.",
        answer: "with",
        options: ["with", "about", "of", "for"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'He's very fond for his pets.'",
        answer: "fond of his pets",
        explanation: "'Fond' is followed by 'of': 'fond of his pets'."
      },
      {
        type: "multiple_choice",
        prompt: "She's very keen ___ outdoor sports.",
        options: ["for", "about", "to", "on"],
        answer: "on"
      },
      {
        type: "drag_order",
        prompt: "Arrange: of / tired / waiting / so / I'm",
        answer: "I'm so tired of waiting",
        items: ["I'm", "so", "tired", "of", "waiting"]
      },
      {
        type: "true_false",
        prompt: "'He is famous of his paintings' is correct.",
        answer: "false"
      },
      {
        type: "fill_blank",
        prompt: "She is conscious ___ the impact her decisions have.",
        answer: "of",
        options: ["of", "for", "about", "with"]
      },
      {
        type: "multiple_choice",
        prompt: "He is famous ___ his photography.",
        options: ["about", "for", "of", "as"],
        answer: "for"
      }
    ]
  },
  {
    id: 134,
    title: "Prepositions: In/Into, On/Onto, Out of/Off",
    category: "Prepositions",
    section: "Prepositions",
    key_rule: "In/on describe position (state). Into/onto describe movement towards (direction). Out of describes movement from inside. Off describes movement away from a surface or vehicle.",
    examples: [
      "She is in the room. (position) / She walked into the room. (movement)",
      "The keys are on the table. / She put the keys onto the table.",
      "He got out of the car. / He got off the bus.",
      "Jump off the wall. / Take the picture off the wall."
    ],
    common_mistakes: [
      "Using 'in' for movement: 'She walked in the room' (into preferred for directional movement)",
      "Confusing off/out of: off = from surface; out of = from enclosed space"
    ],
    study_cards: [
      { front: "In = position inside", back: "The cat is in the box." },
      { front: "Into = movement inside", back: "The cat jumped into the box." },
      { front: "On = position on surface", back: "The book is on the table." },
      { front: "Onto = movement onto surface", back: "She climbed onto the roof." },
      { front: "Out of = from inside", back: "He walked out of the building. Get out of the car." }
    ],
    listen_sentences: [
      "She walked into the meeting room and sat down.",
      "He put the plates onto the shelf.",
      "She fell off her chair when she heard the news.",
      "The water flowed out of the broken pipe.",
      "Jump into the pool — the water's lovely!"
    ],
    questions: [
      {
        type: "fill_blank",
        prompt: "She walked ___ the office and closed the door.",
        answer: "into",
        options: ["into", "in", "onto", "out of"]
      },
      {
        type: "multiple_choice",
        prompt: "He climbed ___ the table to reach the shelf.",
        options: ["in", "on", "onto", "into"],
        answer: "onto"
      },
      {
        type: "true_false",
        prompt: "'She jumped off the diving board' uses 'off' correctly.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "Please get ___ the car. We need to leave.",
        answer: "into",
        options: ["into", "in", "on", "onto"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'He got out from the building quickly.'",
        answer: "out of the building",
        explanation: "The correct preposition is 'out of', not 'out from'."
      },
      {
        type: "multiple_choice",
        prompt: "She fell ___ her bike when it hit the kerb.",
        options: ["out of", "from", "off", "out"],
        answer: "off"
      },
      {
        type: "drag_order",
        prompt: "Arrange: into / jumped / the / pool / She",
        answer: "She jumped into the pool",
        items: ["She", "jumped", "into", "the", "pool"]
      },
      {
        type: "true_false",
        prompt: "'The papers are in the drawer' describes position correctly.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "He put the laptop ___ the bag.",
        answer: "into",
        options: ["into", "in", "onto", "off"]
      },
      {
        type: "multiple_choice",
        prompt: "She stepped ___ the bus at the last stop.",
        options: ["out of", "off", "from", "Both A and B are correct"],
        answer: "Both A and B are correct"
      }
    ]
  },
  {
    id: 135,
    title: "Prepositions: Common Expressions",
    category: "Prepositions",
    section: "Prepositions",
    key_rule: "Many common English expressions require specific prepositions that must be memorized: by mistake, in a hurry, on holiday, in common, by chance, at risk, on strike, in danger.",
    examples: [
      "I called the wrong number by mistake.",
      "She is on holiday until next week.",
      "They are in a hurry.",
      "The workers went on strike."
    ],
    common_mistakes: [
      "Using wrong preposition with fixed expressions: 'in holiday' (wrong → on holiday)",
      "'at mistake' (wrong → by mistake)"
    ],
    study_cards: [
      { front: "On holiday / on business / on strike", back: "She is on holiday. He's away on business. The staff are on strike." },
      { front: "By mistake / by chance / by accident", back: "I opened it by mistake. We met by chance." },
      { front: "In a hurry / in danger / in common", back: "She's in a hurry. He's in danger. They have a lot in common." },
      { front: "At risk / at fault / at stake", back: "Children are at risk. He was at fault. A lot is at stake." },
      { front: "In trouble / in time / in advance", back: "He's in trouble. She arrived in time. Book in advance." }
    ],
    listen_sentences: [
      "She took the wrong umbrella by mistake.",
      "They ran into each other by chance at the airport.",
      "He is away on business until Thursday.",
      "The nurses went on strike over pay.",
      "She booked the tickets well in advance."
    ],
    questions: [
      {
        type: "fill_blank",
        prompt: "Sorry — I sent you the wrong file ___ mistake.",
        answer: "by",
        options: ["by", "in", "on", "at"]
      },
      {
        type: "multiple_choice",
        prompt: "They met ___ chance at a conference.",
        options: ["in", "at", "on", "by"],
        answer: "by"
      },
      {
        type: "true_false",
        prompt: "'She is in holiday this week' is correct.",
        answer: "false"
      },
      {
        type: "fill_blank",
        prompt: "She's ___ a hurry — she has a train to catch.",
        answer: "in",
        options: ["in", "on", "at", "by"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'She works on a law firm.'",
        answer: "at a law firm",
        explanation: "Use 'at' for workplace: 'works at a law firm'."
      },
      {
        type: "multiple_choice",
        prompt: "The drivers went ___ strike for better conditions.",
        options: ["in", "at", "on", "by"],
        answer: "on"
      },
      {
        type: "drag_order",
        prompt: "Arrange: advance / in / you / Book / well",
        answer: "Book well in advance",
        items: ["Book", "well", "in", "advance"]
      },
      {
        type: "true_false",
        prompt: "'They have nothing in common' is correct.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "Children in this area are ___ risk from air pollution.",
        answer: "at",
        options: ["at", "in", "on", "by"]
      },
      {
        type: "multiple_choice",
        prompt: "He arrived just ___ time to give the speech.",
        options: ["at", "on", "by", "in"],
        answer: "in"
      }
    ]
  },
  {
    id: 136,
    title: "Prepositions: Revision",
    category: "Prepositions",
    section: "Prepositions",
    key_rule: "Comprehensive review of all preposition types: time (at/on/in), place (at/on/in), movement (into/through/across), verb+preposition, adjective+preposition, and fixed expressions.",
    examples: [
      "She left at 8 on Monday. / He lives in Berlin.",
      "They walked through the park to the station.",
      "She is proud of her work. / He applied for the job.",
      "By mistake, she called the wrong number."
    ],
    common_mistakes: [
      "All common preposition errors reviewed in context",
      "Mixing up similar prepositions: by/until, since/for, in/at/on"
    ],
    study_cards: [
      { front: "Time: at/on/in", back: "at 6pm, on Monday, in March — use the right one!" },
      { front: "Place: at/on/in", back: "at the stop, on the table, in the room — size/type matters" },
      { front: "Movement prepositions", back: "into/onto for direction, through/across for path" },
      { front: "Fixed expressions", back: "on holiday, by accident, in advance, at risk — memorize these!" },
      { front: "Verb/adjective + prep", back: "wait for, listen to, proud of, good at — always check!" }
    ],
    listen_sentences: [
      "She arrived at the airport in time for her flight on Sunday.",
      "He walked through the park, along the river, and into the café.",
      "I'm very interested in the job you advertised.",
      "By the time we arrived, they had already left.",
      "Despite the delay, she was pleased with the overall outcome."
    ],
    questions: [
      {
        type: "fill_blank",
        prompt: "The meeting is ___ three o'clock ___ Friday.",
        answer: "at / on",
        options: ["at / on", "on / at", "in / on", "at / in"]
      },
      {
        type: "multiple_choice",
        prompt: "She has been working here ___ 2019.",
        options: ["for", "since", "by", "until"],
        answer: "since"
      },
      {
        type: "true_false",
        prompt: "'He is good at sports' is correct.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "The children ran ___ the road — it was very dangerous.",
        answer: "across",
        options: ["across", "along", "through", "into"]
      },
      {
        type: "error_correction",
        prompt: "Find the error: 'She is in love of him.'",
        answer: "in love with him",
        explanation: "'In love with' is the correct expression."
      },
      {
        type: "multiple_choice",
        prompt: "He is tired ___ the same routine every day.",
        options: ["from", "about", "of", "with"],
        answer: "of"
      },
      {
        type: "drag_order",
        prompt: "Arrange: the / into / She / room / walked / quickly",
        answer: "She walked quickly into the room",
        items: ["She", "walked", "quickly", "into", "the", "room"]
      },
      {
        type: "true_false",
        prompt: "'They went on holiday in July' is correct.",
        answer: "true"
      },
      {
        type: "fill_blank",
        prompt: "He blamed her ___ the accident and she was accused ___ careless driving.",
        answer: "for / of",
        options: ["for / of", "of / for", "for / for", "of / of"]
      },
      {
        type: "multiple_choice",
        prompt: "___ the end, they reached an agreement.",
        options: ["At", "In", "By", "On"],
        answer: "In"
      }
    ]
  }
];

export default prepositions;
