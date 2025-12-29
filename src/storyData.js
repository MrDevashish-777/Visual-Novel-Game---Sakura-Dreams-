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
        next: "yuki_route_1"
      },
      {
        text: "Ask Megumi why she's being so helpful",
        next: "mei_route_1" 
      },
      {
        text: "Meet Rinne's gaze",
        next: "rin_route_1"
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
        text: "Follow her (Let her keep the mask)",
        next: "mei_route_3c"
      },
      {
        text: "Press her for the truth",
        next: "mei_route_3d"
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
      },
      {
        character: "mei",
        sprite: "mei_character_determined",
        text: "My goal is to participate in the national competition! Although it's challenging, I believe I can do it!"
      },
      {
        character: "narrator",
        text: "Her determination is inspiring, making you want to support her dreams."
      }
    ],
    choices: [
      {
        text: "I believe you can achieve your goal",
        next: "mei_route_3e"
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
      },
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