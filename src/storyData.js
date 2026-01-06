// Visual Novel Story Data
export const characters = {
  yuki: {
    name: "Yukino Sakurai", // The Gentle Mask: Appears selfless, secretly controlling.
    sprite: "yuki_character",
    color: "#4A90E2" 
  },
  mei: {
    name: "Megumi Hanasaki", // The Honest Liar: Transparent energy masking fear of abandonment.
    sprite: "mei_character",
    color: "#7ED321" 
  },
  rin: {
    name: "Rinne Tsukimi", // The Observer: Knows the truth, waits for the right moment to strike.
    sprite: "rin_character", 
    color: "#9013FE" 
  },
  jei: {
    name: "Jei Akerman", 
    sprite: "jei_character", 
    color: "#bc2626ff" 
  },
  hori: {
    name: "Hori San", 
    sprite: "hori_character", 
    color: "#c819c2ff" 
  },
  takamura: {
    name: "Takamura Takashi",
    sprite: "takamura_character", 
    color: "#18169aff" 
  },
  jenni: {
    name: "Jenni Hermoso", 
    sprite: "jenni_character", 
    color: "#42fe13ff" 
  },
  jisoo: {
    name: "Kim Ji-soo", 
    sprite: "jisoo_character", 
    color: "#d4c717ff" 
  },
  lisa: {
    name: "Lalisa Manoban", 
    sprite: "lisa_character", 
    color: "#ab0b93ff" 
  },
  rose: {
    name: "Roseanne Park",
    sprite: "rose_character", 
    color: "#df2f2fff" 
  },
  narrator: {
    name: "",
    sprite: null,
    color: "#FFFFFF"
  }
}

export const backgrounds = {
  classroom: "classroom_background",
  hallway: "school_hallway_background", 
  park: "sakura_park_background",
  library: "library_background",
  rooftop: "school_rooftop_background",
  garden: "school_garden_background",
  sports_field: "sports_field_background",
  cafeteria: "school_cafeteria_background",
  moonlight_terrace: "moonlight_terrace_background",
  student_council_room: "student_council_room_background",
  music_room: "music_room_background",
  beach: "beach_background",
  mountain: "mountain_background",
  cafe: "cafe_background",
  classroom_background_day: "classroom_background_day",
  shopping_mall: "shopping_mall_background"
}

export const storyData = {
  start: {
    background: "classroom",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "narrator",
        text: "The afternoon sun leans heavily against the classroom windows. The air smells of dust and the faint, chemical scent of floor wax."
      },
      {
        character: "narrator", 
        text: "You stand at the door of Class 2-B. To everyone else, it's just Monday. To you, it's a room full of strangers who already seem to know where you belong."
      },
      {
        character: "yuki",
        sprite: "yuki_character",
        text: "You're at the wrong desk. Third row, second from the window. I've already moved your things."
      },
      { character: "narrator", text: "A girl with a perfectly tied ribbon looks up. Her smile doesn't reach her eyes; it's a professional courtesy." },
      {
        character: "yuki",
        sprite: "yuki_character",
        text: "I told Sensei you were helping the office with the transfer paperwork. It would be a shame to start your first day with a mark on your record."
      },
      {
        character: "mei",
        sprite: "mei_character_happy",
        text: "Don't mind Yuki. She's just obsessed with keeping the universe in a straight line. I'm Megumi, by the way. I'm the one who'll actually help you survive this place."
      },
      {
        character: "narrator",
        text: "The girl next to you leans in. Her laugh is a little too loud for the quiet room. She's vibrating with a nervous energy that she's trying very hard to pass off as friendliness."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "Survival requires more than just snacks and lies, Megumi."
      },
      {
        character: "narrator",
        text: "In the back corner, a girl is watching you. Not looking—watching. She hasn't turned a page in five minutes."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "Welcome to the aquarium. Try not to tap on the glass. Some of us are more fragile than we look."
      }
    ],
    choices: [
      {
        text: "Thank Yukino for the 'favor'",
        next: "yuki_route_1",
        effects: { affinity: { yuki: 1 } }
      },
      {
        text: "Ask Megumi why she's being so helpful",
        next: "mei_route_1",
        effects: { affinity: { mei: 1 } }
      },
      {
        text: "Meet Rinne's gaze",
        next: "rin_route_1",
        effects: { affinity: { rin: 1 } }
      },
      {
        text: "Follow the sound of music from the hallway",
        next: "music_room_start"
      }
    ]
  },

  yuki_route_1: {
    background: "classroom",
    music: "gentle_conversation_theme",
    dialogue: [
      {
        character: "yuki",
        sprite: "yuki_character",
        text: "You don't need to thank me. I just dislike disorder. A new student is like a loose thread on a sweater. If I don't tuck it in, everything eventually unravels."
      },
      {
        character: "narrator",
        text: "She's already adjusting the books on your desk, her movements precise, almost rhythmic. She doesn't look at you, but she's perfectly aware of your presence."
      },
      {
        character: "yuki",
        sprite: "yuki_character", 
        text: "Stick with me. I'll make sure you're assigned to the right committees, introduced to the right people. It's safer that way."
      },
      {
        character: "narrator",
        text: "There's no warmth in the offer. It sounds less like a invitation and more like an instruction. She's building a cage around you, and she's calling it 'help'."
      }
    ],
    choices: [
      {
        text: "Why do you care so much about 'disorder'?",
        next: "yuki_route_2a"
      },
      {
        text: "I think I can handle my own threads, Yuki",
        next: "yuki_route_2b"
      }
    ]
  },

  mei_route_1: {
    background: "hallway", 
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "narrator",
        text: "Megumi's hand is on your arm before you can even stand up. Her grip is tight—not quite painful, but urgent. She's practically pulling you toward the door."
      },
      {
        character: "mei",
        sprite: "mei_character_excited",
        text: "Quick, before Yuki starts explaining the fifty-seven rules of the hallway. I've got a stash of melon pan in the gym shed that's calling our names."
      },
      {
        character: "mei", 
        sprite: "mei_character_happy",
        text: "You're lucky I found you. This place... it's like a museum. Everyone's afraid to touch anything. Me? I'm just here for the ride."
      },
      {
        character: "narrator",
        text: "She's grinning, but she's talking too fast. Her eyes keep darting toward the classroom door, as if she's waiting for someone to come out and stop her."
      }
    ],
    choices: [
      {
        text: "Are you always this... intense?",
        next: "mei_route_2a"
      },
      {
        text: "What are you running from, Megumi?",
        next: "mei_route_2b"
      }
    ]
  },

  rin_route_1: {
    background: "classroom",
    music: "peaceful_school_theme", 
    dialogue: [
      {
        character: "narrator",
        text: "You step toward the back corner. The air here feels thinner, cooler. Rinne doesn't look up, but she closes her book with a deliberate 'thud'."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "You're making a mistake. Choosing to talk to me doesn't fit the role they've already assigned you."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "Yukino wants a project. Megumi wants an audience. I'm just the one who watches the theater burn. Why would you want to sit with me?"
      },
      {
        character: "narrator", 
        text: "She finally looks up. Her eyes are old. Not tired, but deeply, profoundly weary of things she's seen a hundred times before."
      }
    ],
    choices: [
      {
        text: "Maybe I'm tired of the 'theater' too",
        next: "rin_route_2a"
      },
      {
        text: "What role did they assign me?",
        next: "rin_route_2b"
      }
    ]
  },

  yuki_route_2a: {
    background: "garden",
    music: "gentle_conversation_theme",
    dialogue: [
      {
        character: "narrator",
        text: "The school garden is a masterpiece of control. Every leaf seems to have been told where to grow. Yuki stands by the hedges, her shears glinting in the sun."
      },
      {
        character: "yuki", 
        sprite: "yuki_character_thoughtful",
        text: "Disorder is just a polite word for pain. If people are left to their own devices, they hurt each other. They make messes. I just... prevent the mess."
      },
      {
        character: "yuki",
        sprite: "yuki_character",
        text: "You see this branch? It's trying to grow toward the sun, but it's blocking the others. If I don't cut it, the whole hedge suffers."
      },
      {
        character: "narrator",
        text: "She snips the branch. It falls to the ground with a soft 'thump'. She looks at you, and for a split second, you see the exhaustion behind the mask."
      },
      {
        character: "yuki",
        sprite: "yuki_character_happy",
        text: "I've already arranged for you to join the student council as an observer. It's a clean path. No thorns. You'll thank me later."
      }
    ],
    choices: [
      {
        text: "What if I want the thorns?",
        next: "yuki_route_3a"
      },
      {
        text: "I'll do as you say, Yuki",
        next: "yuki_route_3b"
      }
    ]
  },

  yuki_route_2b: {
    background: "student_council_room",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "yuki",
        sprite: "yuki_character",
        text: "I see. You value your independence. That's a brave choice, though often a lonely one."
      },
      {
        character: "narrator",
        text: "She's smiling, but the atmosphere in the room has shifted. It feels like you've just failed a test you didn't know you were taking."
      },
      {
        character: "yuki",
        sprite: "yuki_character_happy",
        text: "Just remember, the 'loose threads' are the ones that get caught in the machinery. I'll be here if you decide you need a needle and thread."
      },
      {
        character: "narrator",
        text: "She turns back to her paperwork, dismissing you without a word. The silence is louder than any argument could be."
      }
    ],
    choices: [
      {
        text: "Apologize and ask for her help",
        next: "yuki_route_3c"
      },
      {
        text: "Leave the room quietly",
        next: "explore_school"
      }
    ]
  },

  mei_route_2a: {
    background: "rooftop",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "narrator",
        text: "The wind screams across the rooftop, tearing at Megumi's hair. She's standing too close to the edge, looking out at the city like she's looking for an exit."
      },
      {
        character: "mei",
        sprite: "mei_character_excited",
        text: "Intense? Me? I'm just living, you know? Most people are just... vibrating in place. I want to move. I want to go so fast the world turns into a blur."
      },
      {
        character: "narrator",
        text: "She turns to you, her face flushed from the wind. Her eyes are wide, glassy. There's a desperation in her smile that makes your chest ache."
      },
      {
        character: "mei",
        sprite: "mei_character",
        text: "If I stop moving, I have to think. And thinking is... it's like falling. So don't let me stop, okay? Promise me you'll keep me moving."
      }
    ],
    choices: [
      {
        text: "I'll stay with you, Megumi",
        next: "mei_route_3a"
      },
      {
        text: "You can't run forever",
        next: "mei_route_3b"
      }
    ]
  },

  mei_route_2b: {
    background: "hallway",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "narrator",
        text: "Megumi stops dead in her tracks. The hallway is empty, our shadows stretching long against the lockers."
      },
      {
        character: "mei",
        sprite: "mei_character",
        text: "...Running? Who says I'm running? I'm just... I'm a track star, remember? That's what we do. We run."
      },
      {
        character: "narrator",
        text: "She tries to laugh, but it dies in her throat. She's looking at a flyer on the wall—a notice about academic probation. Her name isn't on it yet, but she's staring at it like it's a death warrant."
      },
      {
        character: "mei",
        sprite: "mei_character_happy",
        text: "Come on! The melon pan will be gone if we don't hurry. Forget I said anything. I'm just tired."
      }
    ],
    choices: [
      {
        text: "I should probably head home and study.",
        next: "go_home_solo",
        effects: { flags: { solo_path: true } }
      },
      {
        text: "Check if anyone wants to grab a coffee at the nearby cafe.",
        next: "cafe_invitation"
      }
    ]
  },

  cafe_invitation: {
    background: "hallway",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "narrator",
        text: "The final bell echoes through the corridors. A sense of liberation—and exhaustion—fills the air."
      },
      {
        character: "narrator",
        text: "You see the three of them near the lockers. Yukino is meticulously organizing her bag, Megumi is stretching like a cat, and Rinne is already halfway to the exit."
      }
    ],
    choices: [
      {
        text: "Invite Yukino (The Student Council President)",
        next: "cafe_yuki",
        effects: { affinity: { yuki: 1 } }
      },
      {
        text: "Invite Megumi (The Energetic Athlete)",
        next: "cafe_mei",
        effects: { affinity: { mei: 1 } }
      },
      {
        text: "Invite Rinne (The Mysterious Observer)",
        next: "cafe_rin",
        effects: { affinity: { rin: 1 } }
      }
    ]
  },

  cafe_yuki: {
    background: "cafe",
    music: "gentle_conversation_theme",
    dialogue: [
      {
        character: "yuki",
        sprite: "yuki_character",
        text: "Coffee? I suppose a short break won't derail my schedule. There's a quiet place two blocks from here. They have excellent Darjeeling."
      },
      {
        character: "narrator",
        text: "The cafe is dimly lit, filled with the aroma of roasted beans and old paper. Yukino sits with perfect posture, her eyes scanning the menu as if it's a strategic report."
      },
      {
        character: "yuki",
        sprite: "yuki_character_thoughtful",
        text: "You're an interesting variable, you know. Most people just... drift. You seem to be looking for something. Or someone."
      },
      {
        character: "narrator",
        text: "She looks at you over the rim of her cup. For a moment, the 'President' mask slips, revealing a girl who might just be very, very lonely."
      }
    ],
    choices: [
      {
        text: "I'm just looking for a friend, Yuki.",
        next: "yuki_affinity_up",
        effects: { affinity: { yuki: 2 } }
      },
      {
        text: "Is everything a 'variable' to you?",
        next: "yuki_tension_up",
        effects: { affinity: { yuki: -1 } }
      }
    ]
  },

  yuki_affinity_up: {
    background: "cafe",
    music: "gentle_conversation_theme",
    dialogue: [
      {
        character: "yuki",
        sprite: "yuki_character_happy",
        text: "A friend... It's been a long time since someone used that word without an agenda attached."
      },
      {
        character: "yuki",
        sprite: "yuki_character",
        text: "Maybe this transfer wasn't such a bad thing after all."
      }
    ],
    choices: [
      {
        text: "Continue the conversation",
        next: "yuki_route_1"
      }
    ]
  },

  yuki_tension_up: {
    background: "cafe",
    music: "gentle_conversation_theme",
    dialogue: [
      {
        character: "yuki",
        sprite: "yuki_character",
        text: "Variables are predictable. Predictability is safety. If that's too clinical for you, perhaps you should spend more time with Megumi."
      }
    ],
    choices: [
      {
        text: "Apologize",
        next: "yuki_route_1"
      }
    ]
  },

  cafe_mei: {
    background: "cafe",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "mei",
        sprite: "mei_character_excited",
        text: "Cafe? Heck yeah! I know a place that does these massive strawberry parfaits. They're basically a workout for your stomach."
      },
      {
        character: "narrator",
        text: "Megumi practically vibrates with excitement as you walk. In the cafe, she's a whirlwind of energy, greeting the staff and nearly knocking over a vase."
      },
      {
        character: "mei",
        sprite: "mei_character_happy",
        text: "So, new kid. Tell me everything. What's your favorite color? Do you believe in aliens? And most importantly... do you like pineapple on pizza?"
      }
    ],
    choices: [
      {
        text: "I'm more of a 'classic pepperoni' person.",
        next: "mei_affinity_up",
        effects: { affinity: { mei: 2 } }
      },
      {
        text: "You're really high-energy, aren't you?",
        next: "mei_tension_up",
        effects: { affinity: { mei: -1 } }
      }
    ]
  },

  mei_affinity_up: {
    background: "cafe",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "mei",
        sprite: "mei_character_excited",
        text: "Classic! I respect that. Reliable, solid, doesn't try to be something it's not. I like you already!"
      }
    ],
    choices: [
      {
        text: "Continue the conversation",
        next: "mei_route_1"
      }
    ]
  },

  mei_tension_up: {
    background: "cafe",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "mei",
        sprite: "mei_character",
        text: "High energy? Is that a polite way of saying 'annoying'? It's okay, I get that a lot. I'll dial it down."
      },
      {
        character: "narrator",
        text: "She looks down at her parfait, the sparkle in her eyes dimming just a fraction. It's a heavy silence."
      }
    ],
    choices: [
      {
        text: "Apologize",
        next: "mei_route_1"
      }
    ]
  },

  cafe_rin: {
    background: "cafe",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "rin",
        sprite: "rin_character",
        text: "You're persistent. Fine. There's a library-cafe near the station. It's quiet. No one talks about parfaits or schedules there."
      },
      {
        character: "narrator",
        text: "Rinne leads you to a corner table buried under stacks of books. She orders a black coffee and doesn't add sugar. She doesn't even look at the menu."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "Why are you here? Most people are afraid of the silence I carry. Are you hoping to break it, or just hide in it?"
      }
    ],
    choices: [
      {
        text: "I think the silence is comfortable.",
        next: "rin_affinity_up",
        effects: { affinity: { rin: 2 } }
      },
      {
        text: "I want to know what you're watching so closely.",
        next: "rin_mystery_up",
        effects: { affinity: { rin: 1 }, flags: { rin_curiosity: true } }
      }
    ]
  },

  rin_affinity_up: {
    background: "cafe",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "rin",
        sprite: "rin_character",
        text: "Comfortable... few people understand that. Silence isn't empty; it's just full of things people don't want to hear."
      }
    ],
    choices: [
      {
        text: "Continue the conversation",
        next: "rin_route_1"
      }
    ]
  },

  rin_mystery_up: {
    background: "cafe",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "rin",
        sprite: "rin_character",
        text: "I'm watching the masks. Everyone wears one. Even you. You're just trying to figure out which one fits best in this new school."
      }
    ],
    choices: [
      {
        text: "Continue the conversation",
        next: "rin_route_1"
      }
    ]
  },

  go_home_solo: {
    background: "hallway",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "narrator",
        text: "You decide to head home alone. The walk is quiet, the sunset painting the streets in hues of orange and purple."
      },
      {
        character: "narrator",
        text: "Sometimes, the best company is your own thoughts. But as you pass the park, you can't help but wonder what the others are doing."
      }
    ],
    choices: [
      {
        text: "End of the day",
        next: "start"
      }
    ]
  },

  mei_route_2d: {
    background: "sports_field",
    music: "energetic_sports_theme",
    dialogue: [
      {
        character: "narrator",
        text: "Megumi brings you to the sports field where several students are still training."
      },
      {
        character: "mei",
        sprite: "mei_character_excited",
        text: "This is my favorite place! I practice track and field here every day!"
      },
      {
        character: "narrator",
        text: "You see Megumi's eyes light up when she talks about sports, full of passion and determination."
      }
    ],
    choices: [
      {
        text: "I believe you can achieve your goal",
        next: "mei_route_3e",
        effects: { affinity: { mei: 2 } }
      },
      {
        text: "What's your strongest event?",
        next: "mei_route_3f"
      }
    ]
  },
  rin_route_2a: {
    background: "library",
    music: "intellectual_theme",
    dialogue: [
      {
        character: "narrator",
        text: "The library is a cathedral of silence. Rinne leads you to the very back, where the books smell like forgotten centuries."
      },
      {
        character: "rin",
        sprite: "rin_character_gentle",
        text: "Most people come here to hide. I come here to see. Books don't lie. They tell you exactly what they are on the first page."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "Yukino is a tragedy disguised as a romance. Megumi is a comedy that's about to end. And you? You're the one who hasn't realized what genre you're in yet."
      },
      {
        character: "narrator",
        text: "She pulls a book from the shelf—'No Longer Human'. She doesn't hand it to you, she just lets you see the title."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "If I show you the ending of this school year, will you still want to stay? Or will you close the book and walk away?"
      }
    ],
    choices: [
      {
        text: "I want to see the ending, Rinne",
        next: "rin_route_3a"
      },
      {
        text: "I'd rather write a new chapter",
        next: "rin_route_3b"
      }
    ]
  },

  rin_route_2b: {
    background: "library",
    music: "intellectual_theme",
    dialogue: [
      {
        character: "narrator",
        text: "Rinne looks at you for a long time, her gaze heavy and clinical, like she's dissecting your thoughts."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "They assigned you the role of the 'Catalyst'. The one who comes in and forces everyone else to change."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "But catalysts are consumed by the reaction, didn't you know? By the time this is over, there won't be much of 'you' left."
      },
      {
        character: "narrator",
        text: "She turns back to the shelf, her fingers trailing over the spines. She looks lonely, but it's a loneliness she's carefully cultivated."
      }
    ],
    choices: [
      {
        text: "Why are you telling me this?",
        next: "rin_route_3c"
      },
      {
        text: "I'm not afraid of the 'reaction'",
        next: "rin_route_3d"
      }
    ]
  },

  // Continue with more routes...
  yuki_route_3a: {
    background: "student_council_room",
    music: "emotional_moment_theme",
    dialogue: [
      {
        character: "yuki",
        sprite: "yuki_character_thoughtful",
        text: "The thorns are what make the rose real, aren't they? I've spent so long trying to file them down that I've forgotten what it feels like to bleed."
      },
      {
        character: "narrator",
        text: "She's standing by the window, the student council room silent around her. She looks small against the vast, empty school building."
      },
      {
        character: "yuki",
        sprite: "yuki_character_thoughtful",
        text: "I... I've done things. To keep the peace. Things I'm not proud of. But I did them for you. For everyone."
      },
      {
        character: "narrator",
        text: "She turns to you, her hands clasped tightly in front of her. She's trembling. This isn't a mask. This is the girl underneath, and she's terrified."
      }
    ],
    choices: [
      {
        text: "I'm here for you, Yuki",
        next: "yuki_route_4a",
        effects: { affinity: { yuki: 5 } }
      }
    ]
  },

  music_room_start: {
    background: "music_room",
    music: "intellectual_theme",
    dialogue: [
      {
        character: "narrator",
        text: "You follow a melody that seems to dance through the air, leading you to the third floor. The sign on the door reads 'Music Room'."
      },
      {
        character: "narrator",
        text: "Inside, four girls are focused on their instruments. The harmony is breathtaking."
      },
      {
        character: "jisoo",
        sprite: "jisoo_character",
        text: "One, two, and... stop. That was much better, everyone."
      },
      {
        character: "narrator",
        text: "A girl with elegant features looks up from the piano. She notices you at the door and smiles warmly."
      },
      {
        character: "jisoo",
        sprite: "jisoo_character",
        text: "Oh, a visitor? We don't usually get many people here during practice. I'm Jisoo, the president of the Music Club."
      },
      {
        character: "lisa",
        sprite: "lisa_character",
        text: "Is it a new recruit?! Please tell me you play the drums! Or at least the triangle!"
      },
      {
        character: "narrator",
        text: "A girl with bangs and a bright smile hops off a stool, her energy filling the room instantly."
      },
      {
        character: "rose",
        sprite: "rose_character",
        text: "Lisa, don't scare them away. Not everyone can handle your 'enthusiasm' before they've even said hello."
      },
      {
        character: "jenni",
        sprite: "jenni_character",
        text: "Rose is right. Let the poor student breathe. Though, I must admit, we could use some fresh ears for our new arrangement."
      }
    ],
    choices: [
      {
        text: "The music was beautiful, I had to see where it came from.",
        next: "music_room_compliment",
        effects: { affinity: { jisoo: 1, rose: 1 } }
      },
      {
        text: "Are you guys preparing for a performance?",
        next: "music_room_performance",
        effects: { affinity: { jenni: 1, lisa: 1 } }
      }
    ]
  },

  music_room_compliment: {
    background: "music_room",
    music: "intellectual_theme",
    dialogue: [
      {
        character: "jisoo",
        sprite: "jisoo_character",
        text: "That's very kind of you. We've been working on this piece for weeks. It's meant to capture the feeling of falling cherry blossoms."
      },
      {
        character: "rose",
        sprite: "rose_character",
        text: "I'm glad it resonated with you. Sometimes we get so lost in the technical parts that we forget to feel the music."
      },
      {
        character: "lisa",
        sprite: "lisa_character",
        text: "See! I told you we needed more 'feeling'! More 'bam'! More 'wow'!"
      }
    ],
    choices: [
      {
        text: "Ask Rose about her instrument",
        next: "music_room_rose_focus"
      },
      {
        text: "Ask Lisa what she means by 'bam'",
        next: "music_room_lisa_focus"
      }
    ]
  },

  music_room_performance: {
    background: "music_room",
    music: "intellectual_theme",
    dialogue: [
      {
        character: "jenni",
        sprite: "jenni_character",
        text: "Sharp observation. We have the Cultural Festival coming up. It's the biggest event of the year for the club."
      },
      {
        character: "lisa",
        sprite: "lisa_character",
        text: "And we're going to blow everyone away! Right, Jenni?"
      },
      {
        character: "jenni",
        sprite: "jenni_character",
        text: "If we can actually agree on the tempo for the bridge, then yes, Lisa. We might."
      }
    ],
    choices: [
      {
        text: "Offer to help with their preparations",
        next: "music_room_help",
        effects: { affinity: { jenni: 1, jisoo: 1 } }
      },
      {
        text: "I'll look forward to seeing you perform!",
        next: "music_room_exit"
      }
    ]
  },

  music_room_help: {
    background: "music_room",
    music: "intellectual_theme",
    dialogue: [
      {
        character: "jisoo",
        sprite: "jisoo_character",
        text: "We'd love that! We need someone to help us organize the sheet music and maybe help with the stage setup."
      },
      {
        character: "jenni",
        sprite: "jenni_character",
        text: "It's a lot of work, but having an extra pair of hands will make a huge difference."
      }
    ],
    choices: [
      {
        text: "Start helping them",
        next: "music_room_practice_session",
        effects: { flags: { music_club_helper: true } }
      }
    ]
  },

  music_room_exit: {
    background: "hallway",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "narrator",
        text: "You leave the Music Room, the fading notes of their practice still ringing in your ears."
      },
      {
        character: "narrator",
        text: "The sun is setting, casting long shadows across the hallway. You should probably head home or see what the others are up to."
      }
    ],
    choices: [
      {
        text: "Head to the cafe",
        next: "cafe_invitation"
      },
      {
        text: "Go home",
        next: "go_home_solo"
      }
    ]
  },

  music_room_rose_focus: {
    background: "music_room",
    music: "intellectual_theme",
    dialogue: [
      {
        character: "rose",
        sprite: "rose_character",
        text: "This guitar? It was a gift. It's my most prized possession. Every time I play it, I feel like I'm telling a story."
      }
    ],
    choices: [
      {
        text: "I'd love to hear your story one day",
        next: "music_room_exit",
        effects: { affinity: { rose: 2 } }
      }
    ]
  },

  music_room_lisa_focus: {
    background: "music_room",
    music: "intellectual_theme",
    dialogue: [
      {
        character: "lisa",
        sprite: "lisa_character",
        text: "Bam! It's that feeling when the bass hits and your heart just... jumps! You know what I mean?"
      }
    ],
    choices: [
      {
        text: "I think I do, Lisa",
        next: "music_room_exit",
        effects: { affinity: { lisa: 2 } }
      }
    ]
  },

  music_room_practice_session: {
    background: "music_room",
    music: "intellectual_theme",
    dialogue: [
      {
        character: "narrator",
        text: "The afternoon passes in a blur of melodies and laughter. You spend hours helping the girls organize their music and adjusting the acoustics of the room."
      },
      {
        character: "jisoo",
        sprite: "jisoo_character",
        text: "Phew! That's the last of the sheet music sorted. You're a natural at this, you know?"
      },
      {
        character: "lisa",
        sprite: "lisa_character",
        text: "Yeah! You even caught that rhythm mistake in the second verse. Even Jenni didn't notice that!"
      },
      {
        character: "jenni",
        sprite: "jenni_character",
        text: "I was... testing you. Obviously. But yes, your attention to detail is impressive."
      },
      {
        character: "rose",
        sprite: "rose_character",
        text: "It's nice to have someone who just enjoys the music with us. It feels less like work and more like... a club."
      }
    ],
    choices: [
      {
        text: "Talk to Jisoo about the club's history",
        next: "music_room_jisoo_focus",
        effects: { affinity: { jisoo: 2 } }
      },
      {
        text: "Ask Jenni about her vocal training",
        next: "music_room_jenni_focus",
        effects: { affinity: { jenni: 2 } }
      },
      {
        text: "Join Lisa and Rose for a jam session",
        next: "music_room_jam_session",
        effects: { affinity: { lisa: 1, rose: 1 } }
      }
    ]
  },

  music_room_jisoo_focus: {
    background: "music_room",
    music: "intellectual_theme",
    dialogue: [
      {
        character: "jisoo",
        sprite: "jisoo_character",
        text: "This club means everything to me. It's where I found my voice, both literally and figuratively. My family wanted me to focus on academics, but here..."
      },
      {
        character: "jisoo",
        sprite: "jisoo_character",
        text: "Here, I can just be me. Not the 'perfect daughter', but the 'pianist who sometimes hits the wrong keys'. It's liberating."
      }
    ],
    choices: [
      {
        text: "I'm glad you found a place where you can be yourself",
        next: "music_room_pre_rehearsal",
        effects: { affinity: { jisoo: 1 } }
      }
    ]
  },

  music_room_jenni_focus: {
    background: "music_room",
    music: "intellectual_theme",
    dialogue: [
      {
        character: "jenni",
        sprite: "jenni_character",
        text: "Singing isn't just about the notes. It's about the breath, the posture, the emotion behind every word. If you don't feel it, the audience won't either."
      },
      {
        character: "jenni",
        sprite: "jenni_character",
        text: "I've been training since I was five. Sometimes I wonder if I'm singing because I love it, or because it's all I know. But then I see the others, and I remember."
      }
    ],
    choices: [
      {
        text: "Your passion is evident every time you sing",
        next: "music_room_pre_rehearsal",
        effects: { affinity: { jenni: 1 } }
      }
    ]
  },

  music_room_jam_session: {
    background: "music_room",
    music: "intellectual_theme",
    dialogue: [
      {
        character: "narrator",
        text: "You pick up a tambourine and join Lisa and Rose. The energy in the room shifts as you all lose yourselves in a spontaneous, upbeat melody."
      },
      {
        character: "lisa",
        sprite: "lisa_character",
        text: "Yes! That's the 'bam' I was talking about! You've got rhythm!"
      },
      {
        character: "rose",
        sprite: "rose_character",
        text: "It's perfect. The way the guitar and the drums are locking in... it's magical."
      }
    ],
    choices: [
      {
        text: "That was incredible!",
        next: "music_room_pre_rehearsal"
      }
    ]
  },

  music_room_pre_rehearsal: {
    background: "music_room",
    music: "intellectual_theme",
    dialogue: [
      {
        character: "jisoo",
        sprite: "jisoo_character",
        text: "The School Festival is tomorrow. We're the closing act. It's a huge responsibility, but I think we're ready."
      },
      {
        character: "jenni",
        sprite: "jenni_character",
        text: "We better be. I've spent too many hours on that high note to mess it up now."
      },
      {
        character: "narrator",
        text: "The girls look at each other, a silent bond of friendship and shared effort evident between them. You feel honored to be a part of it."
      }
    ],
    choices: [
      {
        text: "I'll be there to support you",
        next: "the_revelation"
      }
    ]
  },

  yuki_route_4a: {
    background: "student_council_room",
    music: "emotional_moment_theme",
    dialogue: [
      {
        character: "yuki",
        sprite: "yuki_character",
        text: "The School Festival is tomorrow. Everything will be... decided then. Just promise me you'll stay by my side, no matter what people say."
      }
    ],
    choices: [
      {
        text: "I promise, Yuki",
        next: "the_revelation"
      },
      {
        text: "I can't promise that",
        next: "the_revelation"
      }
    ]
  },

  mei_route_3a: {
    background: "sports_field",
    music: "energetic_sports_theme",
    dialogue: [
      {
        character: "mei",
        sprite: "mei_character_excited",
        text: "If I keep running, the thoughts can't catch up. That's the secret, you know? Speed is the only thing that's honest."
      },
      {
        character: "narrator",
        text: "She's wearing her track uniform, but she's not training. She's just standing in the middle of the field, looking at the hurdles like they're a mountain range she can't climb."
      },
      {
        character: "mei",
        sprite: "mei_character_happy",
        text: "I made a deal. With Yuki. She keeps my grades looking 'perfect' so I can stay on the team. And in return... I just had to make sure you didn't ask too many questions."
      },
      {
        character: "narrator",
        text: "The confession comes out in a rush, like she's been holding her breath for a week. She doesn't look at you. She can't."
      },
      {
        character: "mei",
        sprite: "mei_character",
        text: "The School Festival... she's going to make a move then. To secure everything. I'm sorry. I'm so, so sorry."
      }
    ],
    choices: [
      {
        text: "Why are you telling me this now?",
        next: "the_revelation"
      },
      {
        text: "I don't blame you, Megumi",
        next: "the_revelation"
      }
    ]
  },

  rin_route_3a: {
    background: "library",
    music: "intellectual_theme",
    dialogue: [
      {
        character: "rin",
        sprite: "rin_character_surprised",
        text: "You're still here. Even after I showed you the title of the tragedy. You're either very brave or very foolish."
      },
      {
        character: "narrator",
        text: "Rinne is sitting on the floor between the bookshelves. She looks exhausted, the dark circles under her eyes more prominent than ever."
      },
      {
        character: "rin",
        sprite: "rin_character_gentle",
        text: "I've been watching them for years. Yuki's control. Megumi's fear. I thought I could just stay a spectator. But spectators are complicit in the play, aren't they?"
      },
      {
        character: "narrator",
        text: "She reaches out and touches your sleeve, her fingers light as a bird's wing. It's the first time she's initiated contact."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "Tomorrow, at the School Festival, the curtains will rise on the final act. I've gathered the evidence. The real truth. But showing it... it will destroy them."
      }
    ],
    choices: [
      {
        text: "Show me the truth, Rinne",
        next: "the_revelation"
      },
      {
        text: "Maybe some truths are better left hidden",
        next: "the_revelation"
      }
    ]
  },

  explore_school: {
    background: "hallway",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "narrator",
        text: "You decide to explore the school on your own, taking time to appreciate the peaceful atmosphere."
      },
      {
        character: "narrator",
        text: "As you walk through the hallways, you reflect on the girls you met today. Each one seems to be carrying a world of secrets behind their eyes."
      },
      {
        character: "narrator",
        text: "Tomorrow is the School Festival. Something tells you the peace won't last much longer."
      }
    ],
    choices: [
      {
        text: "Prepare for tomorrow",
        next: "the_revelation"
      }
    ]
  },

  the_revelation: {
    background: "cafeteria",
    music: "dramatic_tension_theme",
    dialogue: [
      {
        character: "narrator",
        text: "The School Festival is at its peak. Outside, fireworks are beginning to bloom against the night sky. But inside the cafeteria, the air is thick with a silence that feels like a physical weight."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "The play is over. The masks are already cracked. Let's just finish it."
      },
      {
        character: "narrator",
        text: "Rinne slams a folder onto the table. It's full of transcriptions—student council logs, private messages, and grade alteration reports."
      },
      {
        character: "yuki",
        sprite: "yuki_character_thoughtful",
        text: "I did it for the prestige of the school! If the rankings dropped, we all lose! I was just... managing the variables."
      },
      {
        character: "mei",
        sprite: "mei_character",
        text: "And I was just one of your 'variables', right, Yuki? You threatened to expose my family's financial situation if I didn't help you 'manage' the new student."
      },
      {
        character: "narrator",
        text: "The public speaker above us crackles to life. It's the principal's voice, announcing the final awards. But no one is listening. A small crowd has gathered, their eyes wide as they realize the 'Perfect Student' and the 'Track Star' are tearing each other apart."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "You can only save one of them from the consequences. The principal is on his way here. If you speak up now, you can take the blame for the grade alterations. One person walks away clean. The others... their lives change tonight."
      }
    ],
    choices: [
      {
        text: "Protect Yukino (Accept her conditional love)",
        next: "yuki_ending_bittersweet"
      },
      {
        text: "Save Megumi (Accept the fragile truth)",
        next: "mei_ending_bittersweet"
      },
      {
        text: "Stay with Rinne (Accept the cold reality)",
        next: "rin_ending_bittersweet"
      },
      {
        text: "Reform the Council together with Yuki",
        next: "yuki_ending_happy",
        condition: { affinity: { yuki: 5 } }
      },
      {
        text: "Help Megumi stop running",
        next: "mei_ending_happy",
        condition: { affinity: { mei: 5 } }
      },
      {
        text: "Write a new chapter with Rinne",
        next: "rin_ending_happy",
        condition: { affinity: { rin: 5 } }
      },
      {
        text: "Perform with the Music Club",
        next: "music_club_ending_happy",
        condition: { flags: { music_club_helper: true } }
      }
    ]
  },

  music_club_ending_happy: {
    background: "music_room",
    music: "intellectual_theme",
    dialogue: [
      {
        character: "narrator",
        text: "The School Festival was a triumph. The Music Club's performance was the highlight of the event, and you were right there on stage with them, helping with the technicals and even joining in for the final chorus."
      },
      {
        character: "jisoo",
        sprite: "jisoo_character",
        text: "We did it! I've never heard the crowd cheer that loud. And it's all thanks to you, for keeping us together and believing in our music."
      },
      {
        character: "lisa",
        sprite: "lisa_character",
        text: "That was the ultimate 'bam'! I felt like I was flying! Can we do it again? Every day?!"
      },
      {
        character: "jenni",
        sprite: "jenni_character",
        text: "Let's not get ahead of ourselves, Lisa. But yes, it was... adequate. Better than adequate. It was perfect."
      },
      {
        character: "rose",
        sprite: "rose_character",
        text: "The story we told tonight... it's just the beginning. I can't wait to see what song we write next, together."
      },
      {
        character: "narrator",
        text: "As the fireworks explode outside, you realize that while you came to this school as a stranger, you've found a family in the Music Club. The future is full of possibilities, and they're all set to the perfect melody."
      },
      {
        character: "narrator",
        text: "THE END - Music Club Route: The Harmony of Hearts"
      }
    ],
    choices: [
      {
        text: "Return to title screen",
        next: "title_screen"
      }
    ]
  },

  // Endings
  yuki_ending_bittersweet: {
    background: "garden",
    music: "romantic_sakura_theme",
    dialogue: [
      {
        character: "narrator",
        text: "You took the fall. You're expelled, your record stained forever. Yukino stays the 'Perfect Girl' in the eyes of the school, but she knows the cost."
      },
      {
        character: "yuki",
        sprite: "yuki_character_thoughtful",
        text: "I'll never let your sacrifice be in vain. I'll make sure this school becomes exactly what I promised. Safe. Controlled. Perfect."
      },
      {
        character: "narrator",
        text: "She visits you every week. She says she loves you. But when she looks at you, you see the guilt, and she sees the only person who knows what she's capable of. It's a relationship built on a debt that can never be paid."
      },
      {
        character: "narrator",
        text: "THE END - Yukino's Route: The Debt of Devotion"
      }
    ],
    choices: [
      {
        text: "Return to title screen",
        next: "title_screen"
      }
    ]
  },

  mei_ending_bittersweet: {
    background: "rooftop",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "narrator",
        text: "You confessed to everything. Megumi stays on the team, her future secure. But the girl who used to laugh and pull your arm is gone."
      },
      {
        character: "mei",
        sprite: "mei_character",
        text: "I'm still running. But I'm not running for speed anymore. I'm just running because I can't stand to be still with what I did to you."
      },
      {
        character: "narrator",
        text: "She's successful, a national star. But every time she wins a race, she looks at the crowd, searching for the person who sacrificed everything for her. You're together, but the shadow of the truth will always be the third person in your relationship."
      },
      {
        character: "narrator",
        text: "THE END - Megumi's Route: The Loneliness of the Long-Distance Runner"
      }
    ],
    choices: [
      {
        text: "Return to title screen",
        next: "title_screen"
      }
    ]
  },

  rin_ending_bittersweet: {
    background: "moonlight_terrace",
    music: "mysterious_night_theme",
    dialogue: [
      {
        character: "narrator",
        text: "You let the truth come out. Yukino is disgraced, Megumi is gone. The school is in chaos. You and Rinne stand on the terrace, watching the fallout."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "We're the only ones left in the theater. The lights are off, the actors have fled. Was it worth it? The cold, hard truth?"
      },
      {
        character: "narrator",
        text: "She takes your hand. Her skin is ice cold. You're together, but you're both ghosts now, haunted by the lives you destroyed in the name of honesty. There's no forgiveness here, only the shared silence of those who know too much."
      },
      {
        character: "narrator",
        text: "THE END - Rinne's Route: The Silence of the Aftermath"
      }
    ],
    choices: [
      {
        text: "Return to title screen",
        next: "title_screen"
      }
    ]
  },

  yuki_ending_happy: {
    background: "garden",
    music: "romantic_sakura_theme",
    dialogue: [
      {
        character: "narrator",
        text: "Instead of expulsion, you worked with Yuki to reform the student council. It wasn't easy, but truth has a way of clearing the air."
      },
      {
        character: "yuki",
        sprite: "yuki_character_happy",
        text: "I don't need a mask anymore. Not when I'm with you. Thank you for showing me that it's okay to be imperfect."
      },
      {
        character: "narrator",
        text: "The cherry blossoms are in full bloom. You hold Yuki's hand, and for the first time, her smile is genuine. It's the start of a beautiful, honest life together."
      },
      {
        character: "narrator",
        text: "THE END - Yuki's Route: Blossoms of Truth"
      }
    ],
    choices: [
      {
        text: "Return to title screen",
        next: "title_screen"
      }
    ]
  },

  mei_ending_happy: {
    background: "beach",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "narrator",
        text: "You helped Megumi face her fears. She's still a track star, but now she runs for herself, not away from her shadows."
      },
      {
        character: "mei",
        sprite: "mei_character_happy",
        text: "I finally stopped running long enough to realize that the person I was looking for was right here beside me."
      },
      {
        character: "narrator",
        text: "You're at the beach, the ocean breeze cooling the summer heat. Megumi laughs, a bright, clear sound that fills the air. You're ready for whatever comes next."
      },
      {
        character: "narrator",
        text: "THE END - Megumi's Route: The Warmth of the Sun"
      }
    ],
    choices: [
      {
        text: "Return to title screen",
        next: "title_screen"
      }
    ]
  },

  rin_ending_happy: {
    background: "moonlight_terrace",
    music: "mysterious_night_theme",
    dialogue: [
      {
        character: "narrator",
        text: "Rinne decided to share the truth in a way that helped everyone grow, rather than destroy them. She's no longer just a spectator."
      },
      {
        character: "rin",
        sprite: "rin_character_gentle",
        text: "The theater is different when you're on stage, isn't it? I think I like this role... the one where I'm with you."
      },
      {
        character: "narrator",
        text: "The stars are brilliant tonight. Rinne leans her head on your shoulder, the silence between you now full of peace and shared dreams."
      },
      {
        character: "narrator",
        text: "THE END - Rinne's Route: Moonlight Serenade"
      }
    ],
    choices: [
      {
        text: "Return to title screen",
        next: "title_screen"
      }
    ]
  },

  title_screen: {
    background: "classroom",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "narrator",
        text: "Thank you for playing! The story continues with each choice you make."
      }
    ],
    choices: [
      {
        text: "Restart story",
        next: "start"
      }
    ]
  }
}