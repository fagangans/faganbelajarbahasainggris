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
      {
        title: "At + time",
        content: "Use 'at' for specific clock times and fixed time expressions.",
        examples: ["The meeting is at 3 o'clock.", "She called at midnight.", "We always rest at noon."]
      },
      {
        title: "On + day/date",
        content: "Use 'on' for days of the week and specific calendar dates.",
        examples: ["The party is on Saturday.", "He was born on 14 July.", "We met on Christmas Day."]
      },
      {
        title: "In + period",
        content: "Use 'in' for months, years, seasons, and parts of the day.",
        examples: ["She started in March.", "He was born in 2010.", "I feel more alert in the morning."]
      },
      {
        title: "Fixed expressions",
        content: "Certain time expressions always take 'at' regardless of the rule.",
        examples: ["We relax at the weekend.", "Families gather at Christmas.", "Schools close at Easter."]
      },
      {
        title: "No preposition",
        content: "Do not use a preposition before 'this', 'last', 'next', or 'every'.",
        examples: ["I'll call you this evening.", "She visited last week.", "He goes jogging every morning."]
      }
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
        id: 1,
        type: "fill_blank",
        question: "The train leaves ___ 9:30 ___ Tuesday morning.",
        answer: "at / on",
        options: ["at / on", "on / at", "in / on", "at / in"],
        hint: "Use 'at' for a clock time and 'on' for a day of the week.",
        explanation: "'At' goes with clock times (9:30) and 'on' goes with days (Tuesday). So: 'at 9:30 on Tuesday morning'."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "I was born ___ 1995.",
        options: ["at", "on", "in", "by"],
        answer: "in",
        hint: "Years take 'in'.",
        explanation: "We use 'in' with years, decades, and centuries: 'born in 1995'."
      },
      {
        id: 3,
        type: "true_false",
        question: "'She called me on the evening' is correct.",
        answer: "false",
        hint: "Parts of the day (morning, afternoon, evening) use 'in', not 'on'.",
        explanation: "We say 'in the evening', not 'on the evening'. 'On' is for specific dates and days."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "He usually goes jogging ___ the morning.",
        answer: "in",
        options: ["in", "at", "on", "by"],
        hint: "Parts of the day (morning, afternoon, evening) take 'in'.",
        explanation: "Use 'in' for the morning, afternoon, and evening. The exception is 'at night'."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'We're going on holiday in next week.'",
        answer: "next week (no preposition)",
        hint: "No preposition is used before 'next', 'last', 'this', or 'every'.",
        explanation: "No preposition before 'next': 'We're going on holiday next week.'"
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "The party is ___ Saturday night.",
        options: ["in", "at", "on", "by"],
        answer: "on",
        hint: "Days of the week always take 'on'.",
        explanation: "We use 'on' with days and specific dates: 'on Saturday night'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: at / meet / night / Let's / midnight",
        answer: "Let's meet at midnight tonight",
        options: ["Let's", "meet", "at", "midnight", "tonight"],
        hint: "Midnight is a fixed time, so use 'at'.",
        explanation: "Fixed times like midnight, noon, and night all take 'at': 'Let's meet at midnight'."
      },
      {
        id: 8,
        type: "true_false",
        question: "'At Christmas' is correct.",
        answer: "true",
        hint: "Christmas is a fixed time expression that takes 'at'.",
        explanation: "Festivals and holiday periods such as Christmas and Easter take 'at': 'at Christmas', 'at Easter'."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "She graduated ___ June ___ 2022.",
        answer: "in / —",
        options: ["in / —", "on / in", "in / in", "at / in"],
        hint: "Months take 'in'; no preposition is needed before a year that follows a month.",
        explanation: "Use 'in' before June (a month). When the year directly follows the month, no second preposition is needed: 'in June 2022'."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "I'll see you ___ the weekend.",
        options: ["in", "on", "at", "by"],
        answer: "at",
        hint: "'The weekend' is a fixed time expression.",
        explanation: "In British English, 'at the weekend' is the standard form. American English uses 'on the weekend'."
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
      {
        title: "At = point",
        content: "Use 'at' for a specific point or location, especially when giving directions or describing a meeting place.",
        examples: ["She is waiting at the door.", "Meet me at the bus stop.", "He works at school."]
      },
      {
        title: "On = surface",
        content: "Use 'on' for things resting on or attached to a surface.",
        examples: ["The cup is on the table.", "There's a mark on the wall.", "She put a sticker on the ceiling."]
      },
      {
        title: "In = enclosed/3D",
        content: "Use 'in' for spaces that have walls or boundaries — rooms, boxes, cities, countries.",
        examples: ["The cat is in the box.", "She lives in the city.", "He left his keys in the car."]
      },
      {
        title: "On = line/road",
        content: "Use 'on' for lines, roads, and sides (left/right).",
        examples: ["The bank is on the left.", "Turn right on the motorway.", "The shop is on Baker Street."]
      },
      {
        title: "In = country/city",
        content: "Use 'in' for cities, countries, and large geographic areas.",
        examples: ["She grew up in London.", "He works in Japan.", "They went for a walk in the park."]
      }
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
        id: 1,
        type: "fill_blank",
        question: "The book is ___ the shelf.",
        answer: "on",
        options: ["on", "in", "at", "by"],
        hint: "Shelves are surfaces, so use 'on'.",
        explanation: "Objects resting on a surface take 'on': 'on the shelf', 'on the table', 'on the floor'."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "She works ___ a hospital.",
        options: ["on", "at", "in", "by"],
        answer: "at",
        hint: "We use 'at' to describe a workplace as a general location.",
        explanation: "'At a hospital' describes where she works as a point or location. 'In a hospital' would stress being physically inside the building."
      },
      {
        id: 3,
        type: "true_false",
        question: "'He lives in Tokyo' is correct.",
        answer: "true",
        hint: "Cities and countries take 'in'.",
        explanation: "We use 'in' for cities and countries: 'in Tokyo', 'in Japan'. This is always correct."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "She was standing ___ the top of the stairs.",
        answer: "at",
        options: ["at", "in", "on", "to"],
        hint: "Use 'at' for a specific point or position.",
        explanation: "'At the top' means at a specific point. 'At' is used for positions that are seen as a single point rather than an area."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'The picture is in the wall.'",
        answer: "on the wall",
        hint: "Pictures are hung on surfaces, not inside them.",
        explanation: "Pictures hang on surfaces: 'on the wall', not 'in'."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "Turn right ___ the next corner.",
        options: ["in", "on", "at", "by"],
        answer: "at",
        hint: "Street corners are specific points — use 'at'.",
        explanation: "'At the corner' refers to a specific point where roads meet. We say 'at the corner', not 'on' or 'in'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: the / are / My / in / glasses / bag",
        answer: "My glasses are in the bag",
        options: ["My", "glasses", "are", "in", "the", "bag"],
        hint: "A bag is an enclosed space, so use 'in'.",
        explanation: "Bags, boxes, and drawers are enclosed spaces, so we use 'in': 'in the bag'."
      },
      {
        id: 8,
        type: "true_false",
        question: "'She is sitting on the floor' is correct.",
        answer: "true",
        hint: "Floors are surfaces, so 'on' is correct.",
        explanation: "The floor is a surface, so we use 'on': 'sitting on the floor', 'lying on the ground'."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "There's a good restaurant ___ the left, ___ the corner.",
        answer: "on / at",
        options: ["on / at", "at / on", "in / at", "at / in"],
        hint: "Sides (left/right) take 'on'; corners (as points) take 'at'.",
        explanation: "Directions use 'on the left/right'. Street corners use 'at the corner' because a corner is a point."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "He grew up ___ a small village ___ the mountains.",
        options: ["in / in", "at / in", "in / on", "on / in"],
        answer: "in / in",
        hint: "Both a village and the mountains are geographic areas that take 'in'.",
        explanation: "We use 'in' for villages, towns, cities, and geographic regions: 'in a village in the mountains'."
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
      {
        title: "Arrive at",
        content: "Use 'arrive at' for specific buildings, places, or small locations.",
        examples: ["We arrived at the hotel after midnight.", "She arrived at the station early.", "They arrived at the office at nine."]
      },
      {
        title: "Arrive in",
        content: "Use 'arrive in' for cities and countries.",
        examples: ["She arrived in New York on Tuesday.", "They arrived in France by ferry.", "He arrived in London after a long flight."]
      },
      {
        title: "At (activity location)",
        content: "Use 'at' with locations when focusing on the activity that happens there.",
        examples: ["She is at school right now.", "He is at work until six.", "Are you at home this evening?"]
      },
      {
        title: "On transport",
        content: "Use 'on' for public or open transport: buses, trains, planes, bikes.",
        examples: ["I fell asleep on the train.", "She read a book on the plane.", "He cycles to work on his bike."]
      },
      {
        title: "In transport",
        content: "Use 'in' for private enclosed vehicles such as cars and taxis.",
        examples: ["She sang along to the radio in the car.", "We got stuck in a taxi for an hour.", "He fell asleep in the back of the taxi."]
      }
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
        id: 1,
        type: "fill_blank",
        question: "We arrived ___ the hotel and checked in.",
        answer: "at",
        options: ["at", "in", "on", "to"],
        hint: "Use 'arrive at' for specific buildings and locations.",
        explanation: "'Arrive at' is used for specific buildings and places: 'arrive at the hotel', 'arrive at the station'."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "She was reading ___ the bus.",
        options: ["in", "at", "on", "by"],
        answer: "on",
        hint: "Public transport (buses, trains) takes 'on'.",
        explanation: "We use 'on' for public transport: 'on the bus', 'on the train', 'on the plane'."
      },
      {
        id: 3,
        type: "true_false",
        question: "'He arrived in the station' is correct.",
        answer: "false",
        hint: "Stations are specific locations, not cities — use 'arrive at'.",
        explanation: "'Arrive in' is only for cities and countries. For buildings and places, use 'arrive at': 'arrived at the station'."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "They arrived ___ France after a long flight.",
        answer: "in",
        options: ["in", "at", "on", "to"],
        hint: "Countries take 'arrive in'.",
        explanation: "Use 'arrive in' for countries and cities: 'arrived in France', 'arrived in Paris'."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'She is in school right now — she'll be home at four.'",
        answer: "at school",
        hint: "Use 'at school' when referring to the purpose/activity, not being physically inside the building.",
        explanation: "Use 'at school' for the activity/purpose location."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "I usually listen to music ___ my car.",
        options: ["on", "at", "in", "by"],
        answer: "in",
        hint: "Private vehicles (car, taxi) take 'in'.",
        explanation: "Use 'in' for private enclosed vehicles: 'in a car', 'in a taxi'. Public transport uses 'on'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: at / arrived / airport / We / the / five / at",
        answer: "We arrived at the airport at five",
        options: ["We", "arrived", "at", "the", "airport", "at", "five"],
        hint: "The airport is a specific location — use 'arrive at'. The time five o'clock also uses 'at'.",
        explanation: "'Arrive at' is used for specific locations like airports. 'At five' gives the time. Both use 'at' for different reasons."
      },
      {
        id: 8,
        type: "true_false",
        question: "'On a plane' is the standard preposition for air travel.",
        answer: "true",
        hint: "Planes are treated like other public/open transport.",
        explanation: "We say 'on a plane' just as we say 'on a bus' or 'on a train'. All public transport uses 'on'."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "I ran into her ___ the way to the office.",
        answer: "on",
        options: ["on", "in", "at", "by"],
        hint: "'On the way' is a fixed expression.",
        explanation: "'On the way' is a fixed phrase meaning during a journey. It always uses 'on'."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "He is ___ home today — he wasn't feeling well.",
        options: ["in", "on", "at", "by"],
        answer: "at",
        hint: "'At home' is a fixed location expression.",
        explanation: "'At home' is a fixed expression for the place you live. We also say 'at work', 'at school', 'at university'."
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
      {
        title: "By = deadline",
        content: "Use 'by' to say something must happen no later than a specific time.",
        examples: ["Please send it by Monday.", "I need the report by noon.", "She had finished by the time we arrived."]
      },
      {
        title: "Until/till = continuing",
        content: "Use 'until' or 'till' for something that continues up to a point in time.",
        examples: ["She waited until seven o'clock.", "The shop is open till midnight.", "He didn't stop until he finished."]
      },
      {
        title: "Since = starting point",
        content: "Use 'since' with a point in time to show something started then and continues now. Use with perfect tenses.",
        examples: ["She has worked here since 2018.", "He hasn't eaten since breakfast.", "I've known her since we were children."]
      },
      {
        title: "For = duration",
        content: "Use 'for' to describe how long something has lasted. Use with a period of time.",
        examples: ["He has been ill for three days.", "I've lived here for ten years.", "We waited for over an hour."]
      },
      {
        title: "By then",
        content: "Use 'by then' or 'by the time' to describe something completed before another event.",
        examples: ["By the time she arrived, he had left.", "By then, I had already decided.", "She'll have finished by tomorrow."]
      }
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
        id: 1,
        type: "fill_blank",
        question: "Please return the book ___ Friday.",
        answer: "by",
        options: ["by", "until", "since", "for"],
        hint: "A deadline uses 'by'.",
        explanation: "'By Friday' means no later than Friday — it sets a deadline. 'Until Friday' would mean the action continues right up to Friday."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "She waited ___ the last bus.",
        options: ["by", "since", "for", "until"],
        answer: "until",
        hint: "The waiting continued up to a point in time — use 'until'.",
        explanation: "'Waited until' means the waiting continued right up to the last bus. 'By' would set a deadline, not describe a continuing action."
      },
      {
        id: 3,
        type: "true_false",
        question: "'I have lived here since three years' is correct.",
        answer: "false",
        hint: "A number of years is a duration — use 'for', not 'since'.",
        explanation: "'Since' needs a point in time (since 2020). A duration (three years) uses 'for': 'I have lived here for three years'."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "They have been friends ___ they were children.",
        answer: "since",
        options: ["since", "for", "by", "until"],
        hint: "'When they were children' is a point in past time — use 'since'.",
        explanation: "'Since' connects a past starting point to the present: 'friends since they were children'."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'I need this report until tomorrow.'",
        answer: "by tomorrow",
        hint: "A deadline uses 'by', not 'until'.",
        explanation: "Deadlines use 'by', not 'until'."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "How long have you known him?",
        options: ["Since three years.", "For three years.", "By three years.", "Until three years."],
        answer: "For three years.",
        hint: "Three years is a duration of time — use 'for'.",
        explanation: "When answering 'how long?', use 'for' with a duration: 'for three years', 'for a month'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: five / worked / has / for / She / here / years",
        answer: "She has worked here for five years",
        options: ["She", "has", "worked", "here", "for", "five", "years"],
        hint: "Five years is a duration — use 'for'.",
        explanation: "'For five years' describes the duration of working here. Use 'for' with a period of time in perfect tenses."
      },
      {
        id: 8,
        type: "true_false",
        question: "'Until' and 'till' are interchangeable.",
        answer: "true",
        hint: "'Till' is simply a shorter, slightly informal version of 'until'.",
        explanation: "'Till' and 'until' mean the same thing. 'Till' is slightly more informal but both are grammatically correct."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "The shop is open ___ nine ___ nine.",
        answer: "from / until",
        options: ["from / until", "by / since", "since / until", "at / by"],
        hint: "Use 'from' for the start time and 'until' for the continuing end point.",
        explanation: "'From nine until nine' describes when something starts and when it continues to. 'From' marks the start; 'until' marks the end."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "___ the time she gets home, I'll have cooked dinner.",
        options: ["Since", "Until", "By", "For"],
        answer: "By",
        hint: "By the time = before that moment in time.",
        explanation: "'By the time' means before or at that moment. It introduces a completed action relative to another future event."
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
      {
        title: "Into / out of",
        content: "Use 'into' for movement entering an enclosed space; 'out of' for leaving one.",
        examples: ["She walked into the office.", "He ran out of the shop.", "The cat jumped into the box and then out of it again."]
      },
      {
        title: "Onto / off",
        content: "Use 'onto' for movement onto a surface; 'off' for movement away from a surface.",
        examples: ["He climbed onto the roof.", "She fell off the ladder.", "The cat jumped onto the sofa and then off it."]
      },
      {
        title: "Through",
        content: "Use 'through' when something passes inside or within a space from one side to the other.",
        examples: ["We drove through the tunnel.", "She walked through the forest.", "Light passes through glass."]
      },
      {
        title: "Across",
        content: "Use 'across' when movement goes from one side to the other over a flat surface.",
        examples: ["She swam across the river.", "He walked across the road.", "The children ran across the field."]
      },
      {
        title: "Along / up / down",
        content: "Use 'along' for movement parallel to something; 'up/down' for movement on a slope or stairs.",
        examples: ["We walked along the river bank.", "She ran up the stairs.", "He cycled down the hill."]
      }
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
        id: 1,
        type: "fill_blank",
        question: "She walked ___ the room and sat down.",
        answer: "into",
        options: ["into", "out of", "across", "through"],
        hint: "Movement entering an enclosed space uses 'into'.",
        explanation: "'Into' shows movement entering a space. 'She walked into the room' describes entering the room."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "The train passed ___ the tunnel.",
        options: ["across", "along", "through", "onto"],
        answer: "through",
        hint: "When something passes inside a space from end to end, use 'through'.",
        explanation: "'Through' is used when moving inside something — a tunnel, forest, or crowd — from one side to the other."
      },
      {
        id: 3,
        type: "true_false",
        question: "'She swam across the river' means she went from one side to the other.",
        answer: "true",
        hint: "'Across' describes movement over a flat surface from one side to the other.",
        explanation: "'Across' describes movement from one side to the other over a flat surface such as a river, road, or field. This sentence is correct."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "He jumped ___ the wall and landed in the garden.",
        answer: "over",
        options: ["over", "onto", "across", "along"],
        hint: "When you go from one side of something to the other by rising above it, use 'over'.",
        explanation: "'Over' describes movement that goes above and to the other side of an obstacle such as a wall or fence."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'She got on of the car and went inside.'",
        answer: "got out of the car",
        hint: "Leaving an enclosed vehicle uses 'out of'.",
        explanation: "Leaving an enclosed vehicle uses 'out of': 'got out of the car'."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "We walked ___ the beach all morning.",
        options: ["through", "across", "along", "onto"],
        answer: "along",
        hint: "Moving parallel to something (beside it) uses 'along'.",
        explanation: "'Along' means moving parallel to something extended, such as a beach, river, or road."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: the / walked / forest / through / We",
        answer: "We walked through the forest",
        options: ["We", "walked", "through", "the", "forest"],
        hint: "Walking inside a forest from one side to the other uses 'through'.",
        explanation: "'Through' describes movement passing inside an area: 'walked through the forest'."
      },
      {
        id: 8,
        type: "true_false",
        question: "'She got onto the bus' uses the correct preposition.",
        answer: "true",
        hint: "Boarding public transport uses 'onto' or simply 'on'.",
        explanation: "'Onto' (or 'on') the bus is correct for boarding. You can also say 'got on the bus'. Both are acceptable."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "He ran ___ the stairs as fast as he could.",
        answer: "up",
        options: ["up", "across", "through", "into"],
        hint: "Movement going higher on stairs uses 'up'.",
        explanation: "'Up the stairs' describes movement going higher. 'Down the stairs' would be the opposite."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "She came ___ the room when she heard her name.",
        options: ["into", "out from", "inside", "out of"],
        answer: "out of",
        hint: "Leaving an enclosed space uses 'out of'.",
        explanation: "'Out of' describes leaving an enclosed space. 'Out from' is not standard. 'Out of the room' is correct."
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
      {
        title: "Wait for",
        content: "Use 'wait for' when expecting a person, event, or thing.",
        examples: ["I've been waiting for the bus for twenty minutes.", "She waited for him outside the cinema.", "We're waiting for the results."]
      },
      {
        title: "Listen to",
        content: "Use 'listen to' when paying attention to a sound or person.",
        examples: ["She always listens to music while she works.", "Please listen to what I'm saying.", "He listens to the news every morning."]
      },
      {
        title: "Look at",
        content: "Use 'look at' when directing your eyes at something specific.",
        examples: ["Look at this photo — isn't it great?", "She looked at the menu for a long time.", "Don't look at me like that!"]
      },
      {
        title: "Think about / of",
        content: "Use 'think about' for considering something; 'think of' for having an opinion or remembering.",
        examples: ["Think about the future before you decide.", "What do you think of the new manager?", "I keep thinking about what you said."]
      },
      {
        title: "Rely on / depend on",
        content: "Use 'rely on' or 'depend on' for trust or dependence.",
        examples: ["You can always rely on her.", "It depends on the weather.", "He relies on public transport to get to work."]
      }
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
        id: 1,
        type: "fill_blank",
        question: "She is waiting ___ the doctor.",
        answer: "for",
        options: ["for", "to", "on", "at"],
        hint: "The verb 'wait' is always followed by 'for'.",
        explanation: "'Wait for' is the fixed collocation. We wait for a person, bus, or result."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "I love listening ___ classical music.",
        options: ["for", "at", "to", "on"],
        answer: "to",
        hint: "The verb 'listen' always takes 'to'.",
        explanation: "'Listen to' is the correct collocation. You cannot 'listen music' — the preposition 'to' is required."
      },
      {
        id: 3,
        type: "true_false",
        question: "'He apologized for his mistake' is correct.",
        answer: "true",
        hint: "'Apologize' is always followed by 'for'.",
        explanation: "'Apologize for' is the correct collocation: 'apologize for being late', 'apologize for the error'."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "She relies ___ her friends for support.",
        answer: "on",
        options: ["on", "for", "to", "at"],
        hint: "'Rely' is always followed by 'on'.",
        explanation: "'Rely on' means to depend on someone or something. It is always followed by 'on'."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'I was listening the news when he arrived.'",
        answer: "listening to the news",
        hint: "The verb 'listen' always needs the preposition 'to'.",
        explanation: "'Listen' requires 'to': 'listening to the news'."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "Can you think ___ a solution?",
        options: ["at", "for", "on", "of"],
        answer: "of",
        hint: "'Think of' means to come up with or remember something.",
        explanation: "'Think of' is used when you are trying to come up with an idea: 'think of a solution', 'think of a word'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: for / waiting / been / I've / hours / two",
        answer: "I've been waiting for two hours",
        options: ["I've", "been", "waiting", "for", "two", "hours"],
        hint: "'Wait for' and 'for + duration' both use 'for'.",
        explanation: "'Waiting for' is the verb collocation. 'For two hours' expresses duration. Both use 'for' in this sentence."
      },
      {
        id: 8,
        type: "true_false",
        question: "'Look on that photo' is correct.",
        answer: "false",
        hint: "'Look' followed by an object always takes 'at'.",
        explanation: "'Look at' is the correct collocation when directing your gaze at something: 'look at the photo'."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "He complained ___ the noise from the neighbours.",
        answer: "about",
        options: ["about", "for", "on", "at"],
        hint: "'Complain' is followed by 'about'.",
        explanation: "'Complain about' is the correct collocation: 'complain about the service', 'complain about the noise'."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "I agree ___ you completely.",
        options: ["to", "for", "with", "at"],
        answer: "with",
        hint: "'Agree with' is used when you share someone's view.",
        explanation: "'Agree with' is used for agreeing with a person's opinion: 'I agree with you'. 'Agree to' is for accepting a plan or proposal."
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
      {
        title: "Apply for",
        content: "Use 'apply for' when you submit a formal request for a job, grant, or place.",
        examples: ["She applied for several jobs last month.", "He is applying for a visa.", "I've applied for a place at university."]
      },
      {
        title: "Believe in",
        content: "Use 'believe in' for faith in the existence or value of something.",
        examples: ["Do you believe in ghosts?", "I believe in hard work.", "She doesn't believe in luck."]
      },
      {
        title: "Insist on",
        content: "Use 'insist on' when someone firmly demands something.",
        examples: ["He insisted on paying for dinner.", "She insisted on being heard.", "They insisted on an apology."]
      },
      {
        title: "Concentrate on",
        content: "Use 'concentrate on' when focusing your attention on something.",
        examples: ["I can't concentrate on my work with all this noise.", "She concentrated on the task.", "Try to concentrate on one thing at a time."]
      },
      {
        title: "Accuse of / Blame for",
        content: "Use 'accuse of' for a formal charge; 'blame for' for responsibility for something bad.",
        examples: ["They accused him of cheating.", "She blamed him for the accident.", "He was accused of fraud and blamed for the company's collapse."]
      }
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
        id: 1,
        type: "fill_blank",
        question: "She applied ___ the position last week.",
        answer: "for",
        options: ["for", "to", "on", "at"],
        hint: "'Apply' is always followed by 'for' when seeking a job or opportunity.",
        explanation: "'Apply for' is the correct collocation: 'apply for a job', 'apply for a grant'."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "He insists ___ doing everything himself.",
        options: ["for", "to", "on", "about"],
        answer: "on",
        hint: "'Insist' is always followed by 'on'.",
        explanation: "'Insist on' means to demand firmly: 'insist on doing it yourself', 'insist on the truth'."
      },
      {
        id: 3,
        type: "true_false",
        question: "'She was accused of fraud' is correct.",
        answer: "true",
        hint: "'Accuse' is always followed by 'of'.",
        explanation: "'Accuse of' is the correct collocation: 'accused of stealing', 'accused of lying'. This sentence is correct."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "I keep dreaming ___ a holiday in the mountains.",
        answer: "about",
        options: ["about", "of", "for", "Both A and B are correct"],
        hint: "Both 'dream of' and 'dream about' are possible.",
        explanation: "Both 'dream of' and 'dream about' are acceptable. However, the answer key here uses 'about' as the primary answer."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'He was blamed of causing the accident.'",
        answer: "blamed for causing",
        hint: "'Blame' is followed by 'for', not 'of'.",
        explanation: "'Blame' uses 'for': 'blamed for causing the accident'."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "She concentrated ___ the problem and found a solution.",
        options: ["to", "for", "on", "about"],
        answer: "on",
        hint: "'Concentrate' is always followed by 'on'.",
        explanation: "'Concentrate on' means to focus attention: 'concentrate on the task', 'concentrate on what matters'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: for / He / applied / the / job / online",
        answer: "He applied for the job online",
        options: ["He", "applied", "for", "the", "job", "online"],
        hint: "'Apply for' takes 'for' before the thing being applied for.",
        explanation: "'Applied for the job' is the correct verb + preposition structure. 'Online' indicates how he applied."
      },
      {
        id: 8,
        type: "true_false",
        question: "'Believe in' is used for trust in concepts or people.",
        answer: "true",
        hint: "'Believe in' expresses trust or belief in the existence or value of something.",
        explanation: "'Believe in' is used for faith in people, concepts, or existence: 'believe in yourself', 'believe in justice'. This is correct."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "They ___ him ___ breaking the equipment.",
        answer: "blamed / for",
        options: ["blamed / for", "accused / of", "Either is correct", "blamed / of"],
        hint: "'Blame' takes 'for'; if the sentence used 'accused', the answer would be 'of'.",
        explanation: "'Blame for' is the correct collocation. 'Accuse of' would also be grammatically valid but changes the meaning slightly."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "She laughed ___ his funny story.",
        options: ["on", "to", "about", "at"],
        answer: "at",
        hint: "'Laugh at' means to find something amusing.",
        explanation: "'Laugh at' means to find something amusing or to mock someone/something: 'laugh at a joke', 'laugh at his mistake'."
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
      {
        title: "Afraid / scared / frightened of",
        content: "These adjectives describing fear are followed by 'of'.",
        examples: ["She's afraid of spiders.", "He's scared of the dark.", "I'm frightened of flying."]
      },
      {
        title: "Good / bad / excellent at",
        content: "Adjectives describing ability or skill are followed by 'at'.",
        examples: ["He's very good at languages.", "She's bad at sport.", "They are excellent at problem-solving."]
      },
      {
        title: "Interested in",
        content: "Use 'interested in' when expressing curiosity or attention towards something.",
        examples: ["Are you interested in art?", "She's interested in learning Spanish.", "He's not interested in politics."]
      },
      {
        title: "Proud / ashamed of",
        content: "These adjectives about feelings towards achievements or actions take 'of'.",
        examples: ["She is very proud of her work.", "He was ashamed of his behaviour.", "I'm proud of what we achieved."]
      },
      {
        title: "Similar to / different from",
        content: "Use 'similar to' for likeness and 'different from' for contrast.",
        examples: ["This design is similar to the original.", "He's quite different from his brother.", "Her approach is different from mine."]
      }
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
        id: 1,
        type: "fill_blank",
        question: "She is afraid ___ the dark.",
        answer: "of",
        options: ["of", "from", "at", "about"],
        hint: "Fear adjectives (afraid, scared, frightened) are always followed by 'of'.",
        explanation: "'Afraid of' is the fixed collocation. Never use 'afraid from'. Other fear adjectives work the same way: 'scared of', 'frightened of'."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "He is very good ___ chess.",
        options: ["in", "on", "at", "for"],
        answer: "at",
        hint: "Skill adjectives (good, bad, excellent) take 'at'.",
        explanation: "'Good at' describes skill or ability. Use 'at' with: good, bad, excellent, brilliant, hopeless."
      },
      {
        id: 3,
        type: "true_false",
        question: "'She is interested in learning languages' is correct.",
        answer: "true",
        hint: "'Interested' is always followed by 'in'.",
        explanation: "'Interested in' is the correct collocation. This sentence is perfectly correct."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "Are you responsible ___ the catering?",
        answer: "for",
        options: ["for", "of", "to", "about"],
        hint: "'Responsible' is always followed by 'for'.",
        explanation: "'Responsible for' means having a duty or being accountable: 'responsible for the project', 'responsible for the mistake'."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'He is very proud about his daughter's success.'",
        answer: "proud of",
        hint: "'Proud' is followed by 'of', not 'about'.",
        explanation: "'Proud' is followed by 'of': 'proud of his daughter's success'."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "This solution is similar ___ the one we tried before.",
        options: ["as", "than", "to", "from"],
        answer: "to",
        hint: "'Similar' is followed by 'to', like a comparison pointing towards something alike.",
        explanation: "'Similar to' is the correct collocation: 'similar to the previous version'. Compare with 'different from'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: of / very / I'm / proud / you",
        answer: "I'm very proud of you",
        options: ["I'm", "very", "proud", "of", "you"],
        hint: "'Proud of' is the fixed collocation.",
        explanation: "'Proud of' expresses a positive feeling about someone's achievement. 'I'm very proud of you' is the correct word order."
      },
      {
        id: 8,
        type: "true_false",
        question: "'Different from' is the standard British English form.",
        answer: "true",
        hint: "British English strongly prefers 'different from'.",
        explanation: "'Different from' is standard in British English. 'Different than' is common in American English but less preferred in British contexts."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "She was surprised ___ the news.",
        answer: "by",
        options: ["by", "of", "in", "for"],
        hint: "'Surprised by' is used for what caused the surprise.",
        explanation: "'Surprised by' focuses on what caused the surprise. 'Surprised at' is also possible but 'by' is more common with an unexpected event."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "He's married ___ a doctor.",
        options: ["with", "to", "for", "of"],
        answer: "to",
        hint: "'Married to' is the fixed collocation — the same as 'engaged to'.",
        explanation: "'Married to' is the correct collocation. You are married to someone, not 'married with'. Compare: 'engaged to'."
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
      {
        title: "Reason for",
        content: "Use 'reason for' to explain why something happened.",
        examples: ["What's the reason for the cancellation?", "The reason for his success is hard work.", "There is no good reason for this delay."]
      },
      {
        title: "Solution to",
        content: "Use 'solution to' when describing an answer to a problem.",
        examples: ["We found a solution to the problem.", "There is no easy solution to this issue.", "She proposed a solution to the conflict."]
      },
      {
        title: "Increase/decrease in",
        content: "Use 'in' after nouns describing changes in quantity or level.",
        examples: ["There has been an increase in crime.", "A sharp decrease in sales worried the board.", "We saw a rise in temperatures last summer."]
      },
      {
        title: "Advantage/disadvantage of",
        content: "Use 'of' after advantage and disadvantage.",
        examples: ["The advantage of living here is clean air.", "One disadvantage of the plan is the cost.", "What are the advantages of this approach?"]
      },
      {
        title: "Invitation to / demand for",
        content: "Use 'to' after invitation; 'for' after demand.",
        examples: ["She received an invitation to the wedding.", "There is a growing demand for electric cars.", "His invitation to the conference arrived late."]
      }
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
        id: 1,
        type: "fill_blank",
        question: "What is the reason ___ the strike?",
        answer: "for",
        options: ["for", "of", "to", "behind"],
        hint: "'Reason' is always followed by 'for'.",
        explanation: "'Reason for' is the fixed collocation: 'the reason for the delay', 'the reason for his decision'."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "We need to find a solution ___ this problem.",
        options: ["of", "for", "to", "about"],
        answer: "to",
        hint: "'Solution' is followed by 'to', not 'of' or 'for'.",
        explanation: "'Solution to' is the correct collocation: 'a solution to the problem', 'a solution to our issues'."
      },
      {
        id: 3,
        type: "true_false",
        question: "'An increase in prices' is correct.",
        answer: "true",
        hint: "Changes in quantity or level use 'in': increase in, decrease in, rise in.",
        explanation: "'Increase in' is the correct collocation. We also say 'decrease in', 'fall in', 'rise in' for changes in level or quantity."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "There has been a rise ___ unemployment recently.",
        answer: "in",
        options: ["in", "of", "for", "at"],
        hint: "Changes in level or quantity (rise, fall, increase, decrease) take 'in'.",
        explanation: "'Rise in' follows the pattern of increase/decrease in: 'a rise in unemployment', 'a fall in profits'."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'The advantage of this plan is clear — why are you against it?'",
        answer: "The advantage of this plan",
        hint: "Check whether 'advantage of' is actually correct here.",
        explanation: "Actually correct! 'Advantage of' is right here."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "She received an invitation ___ the awards ceremony.",
        options: ["for", "of", "at", "to"],
        answer: "to",
        hint: "'Invitation' is followed by 'to', like 'come to an event'.",
        explanation: "'Invitation to' is the correct collocation: 'an invitation to the party', 'an invitation to the conference'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: to / a / found / problem / solution / We / the",
        answer: "We found a solution to the problem",
        options: ["We", "found", "a", "solution", "to", "the", "problem"],
        hint: "'Solution to' places 'to' between 'solution' and the problem it answers.",
        explanation: "'Solution to the problem' is the correct structure. 'Solution of' would be incorrect."
      },
      {
        id: 8,
        type: "true_false",
        question: "'The demand for affordable housing is growing' is correct.",
        answer: "true",
        hint: "'Demand' is followed by 'for'.",
        explanation: "'Demand for' is the correct collocation: 'demand for change', 'demand for affordable housing'. This sentence is correct."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "What are the disadvantages ___ working nights?",
        answer: "of",
        options: ["of", "for", "to", "at"],
        hint: "'Disadvantage' takes 'of', just like 'advantage of'.",
        explanation: "'Disadvantage of' is the correct collocation: 'disadvantages of working nights', 'disadvantage of this approach'."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "What's the connection ___ these two events?",
        options: ["among", "for", "between", "with"],
        answer: "between",
        hint: "When discussing the link between two things, use 'between'.",
        explanation: "'Connection between' is used for two specific things. 'Among' would be used for three or more: 'connection between the two events'."
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
      {
        title: "On time",
        content: "Use 'on time' to say something happened at the exact scheduled moment — punctual.",
        examples: ["The train arrived on time.", "She is never on time for meetings.", "Please be on time tomorrow."]
      },
      {
        title: "In time",
        content: "Use 'in time' to say something happened early enough, before a deadline.",
        examples: ["I arrived in time to eat first.", "She left in time to catch the last train.", "Are we in time for the show?"]
      },
      {
        title: "At the end",
        content: "Use 'at the end' for a specific point at the finish of something — always followed by 'of'.",
        examples: ["At the end of the street, turn left.", "Credits roll at the end of the film.", "She spoke at the end of the meeting."]
      },
      {
        title: "In the end",
        content: "Use 'in the end' to mean 'finally' or 'after everything', usually after some difficulty.",
        examples: ["In the end, she decided to stay.", "In the end, it all worked out.", "We argued for a while but agreed in the end."]
      },
      {
        title: "On purpose / by accident",
        content: "Use 'on purpose' for an intentional act; 'by accident' for an unintentional one.",
        examples: ["She did it on purpose — she knew exactly what she was doing.", "He broke it by accident.", "I'm sorry, I called you by mistake."]
      }
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
        id: 1,
        type: "multiple_choice",
        question: "The train left ___. It wasn't a minute late.",
        options: ["on time", "in time", "at time", "by time"],
        answer: "on time",
        hint: "Punctuality — arriving or leaving exactly as scheduled — uses 'on time'.",
        explanation: "'On time' means punctual — exactly at the scheduled moment. 'In time' means early enough before a deadline."
      },
      {
        id: 2,
        type: "fill_blank",
        question: "We got there just ___ to see the ceremony begin.",
        answer: "in time",
        options: ["in time", "on time", "at time", "by the time"],
        hint: "Just managing to arrive before something starts uses 'in time'.",
        explanation: "'In time' means early enough — you made it before it started. 'On time' would mean exactly at the scheduled moment."
      },
      {
        id: 3,
        type: "true_false",
        question: "'At the end, we went home' is correct.",
        answer: "false",
        hint: "When meaning 'finally', use 'in the end', not 'at the end'.",
        explanation: "'At the end' must be followed by 'of + noun'. To mean 'finally', use 'in the end': 'In the end, we went home'."
      },
      {
        id: 4,
        type: "multiple_choice",
        question: "___ the end, it all worked out well.",
        options: ["At", "In", "By", "On"],
        answer: "In",
        hint: "After a process or difficulty resolving, use 'in the end'.",
        explanation: "'In the end' means after a long process or difficulty, things worked out. 'At the end' would need 'of something'."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'She broke the vase in purpose.'",
        answer: "on purpose",
        hint: "The fixed expression for intentional action is 'on purpose'.",
        explanation: "The fixed expression is 'on purpose', not 'in purpose'."
      },
      {
        id: 6,
        type: "fill_blank",
        question: "___ the end of the film, everyone was crying.",
        answer: "At",
        options: ["At", "In", "On", "By"],
        hint: "'At the end of' refers to the final point of something specific.",
        explanation: "'At the end of the film' refers to the final moment of that specific film. 'In the end' does not need 'of' and means 'finally'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: the / by / broke / I / it / accident",
        answer: "I broke it by accident",
        options: ["I", "broke", "it", "by", "accident"],
        hint: "'By accident' is the fixed expression for something unintentional.",
        explanation: "'By accident' means it was unintentional. The opposite is 'on purpose'."
      },
      {
        id: 8,
        type: "true_false",
        question: "'At least ten people came' means a minimum of ten.",
        answer: "true",
        hint: "'At least' means not less than a given number.",
        explanation: "'At least' sets a minimum: 'at least ten people' means ten or more. This sentence is correct."
      },
      {
        id: 9,
        type: "multiple_choice",
        question: "She ran ___ to catch the bus before it left.",
        options: ["in time", "on time", "at the time", "by time"],
        answer: "in time",
        hint: "Catching something just before it's too late uses 'in time'.",
        explanation: "'In time' means early enough to do something. She ran so she could catch the bus before it left."
      },
      {
        id: 10,
        type: "fill_blank",
        question: "In ___, the project was a great success.",
        answer: "fact",
        options: ["fact", "the end", "time", "purpose"],
        hint: "'In fact' is a fixed phrase used to add emphasis or surprising information.",
        explanation: "'In fact' is a fixed discourse marker meaning 'actually' or 'to be more precise'. It is not the same as 'in the end'."
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
      {
        title: "Despite / in spite of + noun/gerund",
        content: "Use 'despite' or 'in spite of' before a noun or -ing form to show a contrast.",
        examples: ["Despite the noise, she slept.", "In spite of feeling ill, he worked.", "Despite being tired, she finished the report."]
      },
      {
        title: "Although + clause",
        content: "Use 'although' before a full clause (subject + verb) to show contrast.",
        examples: ["Although it was noisy, she slept.", "Although he felt ill, he worked.", "Although it rained, we had a good time."]
      },
      {
        title: "According to",
        content: "Use 'according to' to report information from a source.",
        examples: ["According to the doctor, I need rest.", "According to the report, sales rose by 10%.", "According to Tom, the meeting was cancelled."]
      },
      {
        title: "With = tool/companion",
        content: "Use 'with' to show what tool or companion is involved.",
        examples: ["Write with a pen.", "He came with his sister.", "She cut the bread with a knife."]
      },
      {
        title: "Without + noun/gerund",
        content: "Use 'without' to show the absence of something.",
        examples: ["He left without saying goodbye.", "She passed without any revision.", "Don't go without your umbrella."]
      }
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
        id: 1,
        type: "fill_blank",
        question: "___ the traffic, she arrived on time.",
        answer: "Despite",
        options: ["Despite", "Although", "Even though", "However"],
        hint: "'Despite' is followed by a noun, not a clause.",
        explanation: "'Despite' is followed by a noun or gerund: 'despite the traffic'. 'Although' and 'even though' would need a full clause."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "___ the report, sales increased by 15%.",
        options: ["According to", "In spite of", "Without", "Despite"],
        answer: "According to",
        hint: "Reporting information from a source uses 'according to'.",
        explanation: "'According to' introduces information from a source: 'According to the report...' It is not a contrast marker."
      },
      {
        id: 3,
        type: "true_false",
        question: "'Despite of the rain, we went out' is correct.",
        answer: "false",
        hint: "'Despite' is never followed by 'of'.",
        explanation: "'Despite' does not take 'of'. The correct form is 'despite the rain'. 'In spite of the rain' uses 'of' but is a fixed three-word phrase."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "He left ___ saying goodbye to anyone.",
        answer: "without",
        options: ["without", "despite", "with", "by"],
        hint: "The absence of an action uses 'without + -ing'.",
        explanation: "'Without + gerund' means the action did not happen: 'left without saying goodbye'."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'She succeeded despite of all the obstacles.'",
        answer: "despite all the obstacles",
        hint: "Remove 'of' — 'despite' stands alone before a noun.",
        explanation: "'Despite' is not followed by 'of': 'despite all the obstacles'."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "She did it ___ any help from anyone.",
        options: ["with", "despite", "without", "according to"],
        answer: "without",
        hint: "No help = absence of help — use 'without'.",
        explanation: "'Without any help' means she had no assistance. 'Without' expresses the absence of something."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: she / passed / Surprisingly / notes / any / without",
        answer: "Surprisingly she passed without any notes",
        options: ["Surprisingly", "she", "passed", "without", "any", "notes"],
        hint: "'Without any notes' follows the main clause.",
        explanation: "'Without any notes' shows she had no notes to help her. 'Without' + noun is the correct structure here."
      },
      {
        id: 8,
        type: "true_false",
        question: "'According to him, the meeting was cancelled' is correct.",
        answer: "true",
        hint: "'According to' can be followed by a person or a source.",
        explanation: "'According to him' is correct — 'according to' can precede a person, a report, or any information source."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "___ in spite ___ the difficulties, they completed the project.",
        answer: "— / of",
        options: ["— / of", "In / of", "Despite / of", "In / —"],
        hint: "The phrase is 'in spite of' — all three words together.",
        explanation: "'In spite of' is a fixed three-word phrase. The blank before 'in' needs nothing extra; 'of' completes the phrase."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "She went swimming ___ the cold.",
        options: ["despite", "although", "however", "in spite"],
        answer: "despite",
        hint: "'Despite + noun' expresses doing something against unfavourable conditions.",
        explanation: "'Despite the cold' is correct — 'despite' before a noun. 'Although' would need 'it was cold'. 'In spite' alone is incomplete — it needs 'of'."
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
      {
        title: "About",
        content: "Use 'about' to indicate a topic or subject being discussed, or to describe concern.",
        examples: ["She's writing a book about history.", "I'm worried about the results.", "Tell me about your trip."]
      },
      {
        title: "Of",
        content: "Use 'of' for belonging, partitive meaning, or content.",
        examples: ["A piece of cake fell on the floor.", "She's afraid of spiders.", "The colour of the sky changed at sunset."]
      },
      {
        title: "For",
        content: "Use 'for' to express purpose, benefit, or duration.",
        examples: ["This is good for your health.", "I waited for an hour.", "She bought a present for her mother."]
      },
      {
        title: "From",
        content: "Use 'from' to express origin, source, or starting point.",
        examples: ["She's from Spain.", "The cheese is made from milk.", "I haven't heard from him in months."]
      },
      {
        title: "Think about vs of",
        content: "'Think about' means to consider or ponder; 'think of' means to have an opinion or come up with an idea.",
        examples: ["Think about what you want to do.", "What do you think of the new design?", "Can you think of a better word?"]
      }
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
        id: 1,
        type: "fill_blank",
        question: "She told me ___ her new job.",
        answer: "about",
        options: ["about", "of", "for", "from"],
        hint: "When sharing information on a topic, use 'about'.",
        explanation: "'Tell someone about something' is the correct collocation. 'About' introduces the topic being shared."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "Cheese is made ___ milk.",
        options: ["with", "of", "from", "by"],
        answer: "from",
        hint: "When the original material is transformed, use 'from'.",
        explanation: "'Made from' is used when the material is transformed into something else: 'made from milk', 'made from wood'. 'Made of' is used when the material is unchanged: 'made of gold'."
      },
      {
        id: 3,
        type: "true_false",
        question: "'A glass of water' uses 'of' correctly.",
        answer: "true",
        hint: "'Of' is used in partitive expressions like 'a cup of tea'.",
        explanation: "'Of' is correct in partitive expressions: 'a glass of water', 'a piece of cake', 'a bottle of wine'."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "This is good ___ your health.",
        answer: "for",
        options: ["for", "to", "of", "about"],
        hint: "Benefit or purpose uses 'for'.",
        explanation: "'Good for' expresses benefit: 'good for your health', 'bad for the environment'."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'What do you think about the new manager?'",
        answer: "think of the new manager",
        hint: "'Think of' asks for an opinion or evaluation.",
        explanation: "'Think of' asks for an opinion. 'Think about' = to consider/ponder."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "I haven't heard ___ him since Christmas.",
        options: ["about", "from", "of", "for"],
        answer: "from",
        hint: "'Hear from' means to receive contact or news from someone.",
        explanation: "'Hear from' means to receive news or contact from someone: 'I haven't heard from him'. 'Hear about' means to receive news about a topic."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: a / is / about / book / This / courage",
        answer: "This is a book about courage",
        options: ["This", "is", "a", "book", "about", "courage"],
        hint: "'About' introduces the topic of the book.",
        explanation: "'A book about courage' uses 'about' to describe the subject matter. This follows the pattern: noun + about + topic."
      },
      {
        id: 8,
        type: "true_false",
        question: "'A present for my mother' is correct.",
        answer: "true",
        hint: "'For' indicates who benefits or who something is intended for.",
        explanation: "'For' expresses who the gift is intended for. 'A present for my mother' is perfectly correct."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "She is ___ Italy originally.",
        answer: "from",
        options: ["from", "of", "in", "at"],
        hint: "Origin or nationality uses 'from'.",
        explanation: "'From' indicates origin: 'She is from Italy', 'He is from Japan'. It shows where someone comes from."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "He was worried ___ the results.",
        options: ["of", "for", "about", "from"],
        answer: "about",
        hint: "Concern or anxiety about a topic uses 'about'.",
        explanation: "'Worried about' is the correct collocation: 'worried about the results', 'worried about her health'."
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
      {
        title: "Aware / conscious of",
        content: "Use 'aware of' and 'conscious of' to describe knowing about something.",
        examples: ["Are you aware of the risks?", "He became conscious of his mistake.", "She wasn't aware of the changes."]
      },
      {
        title: "Capable of / incapable of",
        content: "Use 'capable of' to describe ability or potential.",
        examples: ["She is capable of great things.", "He is incapable of lying.", "This engine is capable of high speeds."]
      },
      {
        title: "Familiar with",
        content: "Use 'familiar with' to describe knowledge of or acquaintance with something.",
        examples: ["Are you familiar with the process?", "I'm not familiar with this software.", "She became familiar with the city quickly."]
      },
      {
        title: "Satisfied / pleased with",
        content: "Use 'with' after adjectives expressing contentment or happiness about something.",
        examples: ["I'm satisfied with the results.", "She's pleased with her grade.", "He's not happy with the outcome."]
      },
      {
        title: "Tired of / fond of / keen on",
        content: "These adjectives of feeling or preference take specific prepositions.",
        examples: ["I'm tired of waiting.", "She's fond of animals.", "He's very keen on football."]
      }
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
        id: 1,
        type: "fill_blank",
        question: "Are you aware ___ the new policy?",
        answer: "of",
        options: ["of", "about", "for", "with"],
        hint: "'Aware' is always followed by 'of'.",
        explanation: "'Aware of' is the fixed collocation: 'aware of the risks', 'aware of the problem'."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "She is very capable ___ solving complex problems.",
        options: ["for", "to", "of", "at"],
        answer: "of",
        hint: "'Capable' is always followed by 'of'.",
        explanation: "'Capable of' is the correct collocation: 'capable of solving problems', 'capable of great things'."
      },
      {
        id: 3,
        type: "true_false",
        question: "'Familiar with' means you know something well.",
        answer: "true",
        hint: "'Familiar with' expresses knowledge or acquaintance.",
        explanation: "'Familiar with' means you know something or have experience of it: 'familiar with the procedure'. This is correct."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "I'm not satisfied ___ the service we received.",
        answer: "with",
        options: ["with", "about", "of", "for"],
        hint: "Contentment adjectives (satisfied, pleased, happy) take 'with'.",
        explanation: "'Satisfied with' is the correct collocation: 'satisfied with the service', 'pleased with the outcome'."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'He's very fond for his pets.'",
        answer: "fond of his pets",
        hint: "'Fond' is followed by 'of', not 'for'.",
        explanation: "'Fond' is followed by 'of': 'fond of his pets'."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "She's very keen ___ outdoor sports.",
        options: ["for", "about", "to", "on"],
        answer: "on",
        hint: "'Keen' is always followed by 'on'.",
        explanation: "'Keen on' means enthusiastic about something: 'keen on sport', 'keen on learning'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: of / tired / waiting / so / I'm",
        answer: "I'm so tired of waiting",
        options: ["I'm", "so", "tired", "of", "waiting"],
        hint: "'Tired of' is the fixed collocation — 'of' goes before a gerund.",
        explanation: "'Tired of + gerund' expresses being fed up with a repeated action: 'tired of waiting', 'tired of arguing'."
      },
      {
        id: 8,
        type: "true_false",
        question: "'He is famous of his paintings' is correct.",
        answer: "false",
        hint: "'Famous' is followed by 'for', not 'of'.",
        explanation: "'Famous for' is the correct collocation: 'famous for his paintings', 'famous for her music'. Never 'famous of'."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "She is conscious ___ the impact her decisions have.",
        answer: "of",
        options: ["of", "for", "about", "with"],
        hint: "'Conscious' takes 'of', like 'aware of'.",
        explanation: "'Conscious of' means aware of something: 'conscious of the impact', 'conscious of her mistakes'."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "He is famous ___ his photography.",
        options: ["about", "for", "of", "as"],
        answer: "for",
        hint: "'Famous' is always followed by 'for'.",
        explanation: "'Famous for' is the correct collocation: 'famous for his photography', 'famous for being kind'."
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
      {
        title: "In = position inside",
        content: "Use 'in' to describe where something or someone is located — inside an enclosed space.",
        examples: ["The cat is in the box.", "She is in the room.", "The keys are in the drawer."]
      },
      {
        title: "Into = movement inside",
        content: "Use 'into' to describe movement entering an enclosed space.",
        examples: ["The cat jumped into the box.", "She walked into the room.", "He dived into the pool."]
      },
      {
        title: "On = position on surface",
        content: "Use 'on' to describe where something is placed — resting on a surface.",
        examples: ["The book is on the table.", "There's a fly on the ceiling.", "The phone is on the shelf."]
      },
      {
        title: "Onto = movement onto surface",
        content: "Use 'onto' to describe movement resulting in being on a surface.",
        examples: ["She climbed onto the roof.", "He jumped onto the table.", "The cat leapt onto the windowsill."]
      },
      {
        title: "Out of = from inside",
        content: "Use 'out of' to describe movement leaving an enclosed space.",
        examples: ["He walked out of the building.", "She got out of the car.", "The water poured out of the broken pipe."]
      }
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
        id: 1,
        type: "fill_blank",
        question: "She walked ___ the office and closed the door.",
        answer: "into",
        options: ["into", "in", "onto", "out of"],
        hint: "Movement entering an enclosed space uses 'into'.",
        explanation: "'Into' shows direction of movement entering a space. 'In' describes position, not movement."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "He climbed ___ the table to reach the shelf.",
        options: ["in", "on", "onto", "into"],
        answer: "onto",
        hint: "Movement resulting in being on a surface uses 'onto'.",
        explanation: "'Onto' describes movement resulting in a position on a surface: 'climbed onto the table'."
      },
      {
        id: 3,
        type: "true_false",
        question: "'She jumped off the diving board' uses 'off' correctly.",
        answer: "true",
        hint: "Leaving a surface uses 'off'.",
        explanation: "'Off' describes movement away from a surface. Jumping from a diving board uses 'off' correctly."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "Please get ___ the car. We need to leave.",
        answer: "into",
        options: ["into", "in", "on", "onto"],
        hint: "Entering an enclosed vehicle uses 'into'.",
        explanation: "'Get into' a car means entering it. Cars are enclosed, so 'into' (not 'onto') is used."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'He got out from the building quickly.'",
        answer: "out of the building",
        hint: "Leaving an enclosed space uses 'out of', not 'out from'.",
        explanation: "The correct preposition is 'out of', not 'out from'."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "She fell ___ her bike when it hit the kerb.",
        options: ["out of", "from", "off", "out"],
        answer: "off",
        hint: "Falling from a surface or open vehicle uses 'off'.",
        explanation: "'Off' is used for movement away from a surface or open vehicle: 'fell off her bike', 'jumped off the wall'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: into / jumped / the / pool / She",
        answer: "She jumped into the pool",
        options: ["She", "jumped", "into", "the", "pool"],
        hint: "Entering an enclosed body of water uses 'into'.",
        explanation: "'Into the pool' describes entering the water. 'Into' is used for movement into an enclosed space."
      },
      {
        id: 8,
        type: "true_false",
        question: "'The papers are in the drawer' describes position correctly.",
        answer: "true",
        hint: "Static position inside an enclosed space uses 'in'.",
        explanation: "'In' describes where something is located — inside an enclosed space. This sentence is correct."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "He put the laptop ___ the bag.",
        answer: "into",
        options: ["into", "in", "onto", "off"],
        hint: "Placing something inside an enclosed space with movement uses 'into'.",
        explanation: "'Put into' describes the action of placing something inside. 'In' would describe its resting position."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "She stepped ___ the bus at the last stop.",
        options: ["out of", "off", "from", "Both A and B are correct"],
        answer: "Both A and B are correct",
        hint: "Both 'off' and 'out of' can be used for leaving a bus.",
        explanation: "Both 'stepped off the bus' and 'stepped out of the bus' are acceptable. 'Off' treats it like a surface; 'out of' treats it as an enclosed space."
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
      {
        title: "On holiday / on business / on strike",
        content: "Use 'on' for activities that represent a purpose or status.",
        examples: ["She is on holiday until Friday.", "He's travelling on business.", "The nurses went on strike last week."]
      },
      {
        title: "By mistake / by chance / by accident",
        content: "Use 'by' for expressions describing how something happened unintentionally or unexpectedly.",
        examples: ["I opened it by mistake.", "We met by chance at the airport.", "She broke the vase by accident."]
      },
      {
        title: "In a hurry / in danger / in common",
        content: "Use 'in' for expressions describing a state or shared quality.",
        examples: ["She's always in a hurry.", "The missing climbers are in danger.", "We have a lot in common."]
      },
      {
        title: "At risk / at fault / at stake",
        content: "Use 'at' for expressions describing a level or specific situation.",
        examples: ["Children are at risk from pollution.", "He was at fault in the accident.", "A great deal is at stake."]
      },
      {
        title: "In trouble / in time / in advance",
        content: "More fixed 'in' expressions to memorize.",
        examples: ["He's in trouble with his boss.", "She arrived just in time.", "Please book your tickets in advance."]
      }
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
        id: 1,
        type: "fill_blank",
        question: "Sorry — I sent you the wrong file ___ mistake.",
        answer: "by",
        options: ["by", "in", "on", "at"],
        hint: "Unintentional errors use the fixed phrase 'by mistake'.",
        explanation: "'By mistake' is the fixed expression for an unintentional error. 'By' is also used in: 'by chance', 'by accident'."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "They met ___ chance at a conference.",
        options: ["in", "at", "on", "by"],
        answer: "by",
        hint: "Unexpected or unplanned events use 'by chance'.",
        explanation: "'By chance' means something happened without planning. It follows the 'by' pattern: 'by accident', 'by mistake'."
      },
      {
        id: 3,
        type: "true_false",
        question: "'She is in holiday this week' is correct.",
        answer: "false",
        hint: "The fixed expression is 'on holiday', not 'in holiday'.",
        explanation: "'On holiday' is the correct fixed expression. 'In holiday' is incorrect in standard English."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "She's ___ a hurry — she has a train to catch.",
        answer: "in",
        options: ["in", "on", "at", "by"],
        hint: "'In a hurry' is a fixed expression.",
        explanation: "'In a hurry' is the fixed expression for being rushed. It always uses 'in'."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'She works on a law firm.'",
        answer: "at a law firm",
        hint: "Workplaces use 'at', not 'on'.",
        explanation: "Use 'at' for workplace: 'works at a law firm'."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "The drivers went ___ strike for better conditions.",
        options: ["in", "at", "on", "by"],
        answer: "on",
        hint: "'On strike' is the fixed expression for industrial action.",
        explanation: "'On strike' is the fixed collocation. Workers 'go on strike' or 'are on strike'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: advance / in / you / Book / well",
        answer: "Book well in advance",
        options: ["Book", "well", "in", "advance"],
        hint: "'In advance' is the fixed expression for doing something ahead of time.",
        explanation: "'In advance' means ahead of time. 'Book well in advance' means book a long time before you need it."
      },
      {
        id: 8,
        type: "true_false",
        question: "'They have nothing in common' is correct.",
        answer: "true",
        hint: "'In common' is the fixed expression for shared characteristics.",
        explanation: "'In common' means sharing the same qualities or interests: 'nothing in common', 'a lot in common'. This is correct."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "Children in this area are ___ risk from air pollution.",
        answer: "at",
        options: ["at", "in", "on", "by"],
        hint: "'At risk' is the fixed expression for being in a vulnerable situation.",
        explanation: "'At risk' is the fixed expression: 'at risk from pollution', 'children at risk'. It always uses 'at'."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "He arrived just ___ time to give the speech.",
        options: ["at", "on", "by", "in"],
        answer: "in",
        hint: "'In time' means arriving early enough to do something.",
        explanation: "'In time' means early enough to do what was needed. 'Just in time' emphasises that it was close."
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
      {
        title: "Time: at/on/in",
        content: "Choose the right preposition based on the type of time expression.",
        examples: ["The meeting is at 6 pm.", "It happens on Monday.", "She was born in March."]
      },
      {
        title: "Place: at/on/in",
        content: "Choose based on whether you mean a point, a surface, or an enclosed area.",
        examples: ["She works at the hospital.", "The book is on the shelf.", "He lives in the city."]
      },
      {
        title: "Movement prepositions",
        content: "Use into/onto for direction towards, and through/across for the path taken.",
        examples: ["She walked into the room.", "He climbed onto the roof.", "They ran through the park."]
      },
      {
        title: "Fixed expressions",
        content: "These must be memorised — the preposition cannot be guessed from context.",
        examples: ["She went on holiday.", "He did it by accident.", "They booked in advance."]
      },
      {
        title: "Verb/adjective + prep",
        content: "Verb and adjective collocations with prepositions must be learned as units.",
        examples: ["I'm waiting for the bus.", "She listens to music.", "He is proud of his work."]
      }
    ],
    listen_sentences: [
      "She arrived at the airport in time for her flight on Sunday.",
      "He walked through the park, along the river, and into the cafe.",
      "I'm very interested in the job you advertised.",
      "By the time we arrived, they had already left.",
      "Despite the delay, she was pleased with the overall outcome."
    ],
    questions: [
      {
        id: 1,
        type: "fill_blank",
        question: "The meeting is ___ three o'clock ___ Friday.",
        answer: "at / on",
        options: ["at / on", "on / at", "in / on", "at / in"],
        hint: "Use 'at' for clock times and 'on' for days of the week.",
        explanation: "'At' goes with clock times (three o'clock) and 'on' goes with days (Friday): 'at three o'clock on Friday'."
      },
      {
        id: 2,
        type: "multiple_choice",
        question: "She has been working here ___ 2019.",
        options: ["for", "since", "by", "until"],
        answer: "since",
        hint: "A specific year in the past as a starting point uses 'since'.",
        explanation: "'Since 2019' shows the starting point. 'For' would need a duration: 'for six years'."
      },
      {
        id: 3,
        type: "true_false",
        question: "'He is good at sports' is correct.",
        answer: "true",
        hint: "Skill adjectives (good, bad, excellent) take 'at'.",
        explanation: "'Good at' is the correct collocation for ability or skill. This sentence is correct."
      },
      {
        id: 4,
        type: "fill_blank",
        question: "The children ran ___ the road — it was very dangerous.",
        answer: "across",
        options: ["across", "along", "through", "into"],
        hint: "Moving from one side to the other over a flat surface uses 'across'.",
        explanation: "'Across' describes movement from one side to the other of a flat surface: 'ran across the road'."
      },
      {
        id: 5,
        type: "error_correction",
        question: "Find the error: 'She is in love of him.'",
        answer: "in love with him",
        hint: "'In love' is followed by 'with', not 'of'.",
        explanation: "'In love with' is the correct expression."
      },
      {
        id: 6,
        type: "multiple_choice",
        question: "He is tired ___ the same routine every day.",
        options: ["from", "about", "of", "with"],
        answer: "of",
        hint: "'Tired of' expresses frustration with something repeated.",
        explanation: "'Tired of' is the correct collocation: 'tired of waiting', 'tired of the same routine'."
      },
      {
        id: 7,
        type: "drag_order",
        question: "Arrange: the / into / She / room / walked / quickly",
        answer: "She walked quickly into the room",
        options: ["She", "walked", "quickly", "into", "the", "room"],
        hint: "'Into' shows direction of movement; the adverb 'quickly' comes before it.",
        explanation: "'Into the room' shows direction. The adverb 'quickly' modifies the verb and typically comes before the preposition phrase."
      },
      {
        id: 8,
        type: "true_false",
        question: "'They went on holiday in July' is correct.",
        answer: "true",
        hint: "'On holiday' is the fixed expression; months take 'in'.",
        explanation: "'On holiday' is correct for the fixed expression. 'In July' correctly uses 'in' for a month. Both are correct here."
      },
      {
        id: 9,
        type: "fill_blank",
        question: "He blamed her ___ the accident and she was accused ___ careless driving.",
        answer: "for / of",
        options: ["for / of", "of / for", "for / for", "of / of"],
        hint: "'Blame' takes 'for'; 'accuse' takes 'of'.",
        explanation: "'Blame for' and 'accuse of' are the correct collocations. They cannot be swapped."
      },
      {
        id: 10,
        type: "multiple_choice",
        question: "___ the end, they reached an agreement.",
        options: ["At", "In", "By", "On"],
        answer: "In",
        hint: "'In the end' means finally, after a long process.",
        explanation: "'In the end' means finally or after everything was resolved. 'At the end' requires 'of + something specific'."
      }
    ]
  }
];

export default prepositions;
