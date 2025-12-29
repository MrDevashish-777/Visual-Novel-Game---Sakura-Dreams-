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
        text: "Dust motes dance in the heavy afternoon heat. The air in Sakura High smells of floor wax and old secrets."
      },
      {
        character: "narrator", 
        text: "You stand at the threshold of Class 2-B. It's just another school day for them, but for you, it's the beginning of a slow descent."
      },
      {
        character: "yuki",
        sprite: "yuki_character",
        text: "You're late. But don't worry... I already told the teacher you were with the principal. I'm Yukino, the class rep."
      },
      {
        character: "narrator",
        text: "She smiles. It's a perfect smile. Too perfect. Like she's been practicing it in a mirror since she was five."
      },
      {
        character: "mei",
        sprite: "mei_character_happy",
        text: "Hey, hey! New face! I'm Megumi! Ignore Yuki, she's always so formal. Come sit by me, I need someone to help me hide these snacks from the teacher!"
      },
      {
        character: "narrator",
        text: "Megumi's laughter is loud, almost desperate. She's looking at you like you're a life raft in a very deep ocean."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "...Don't believe everything you hear. Words are just masks we wear so we don't have to look at ourselves."
      },
      {
        character: "narrator",
        text: "Rinne doesn't look up from her book. Her voice is a cold splash of water in the warm room."
      }
    ],
    choices: [
      {
        text: "Accept Yukino's 'protection'",
        next: "yuki_route_1"
      },
      {
        text: "Let Megumi pull you into her world",
        next: "mei_route_1" 
      },
      {
        text: "Wait for Rinne to say more",
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
        text: "I hope you don't mind that I lied for you. In this school, first impressions are everything. If you start as 'the late student', people will never see you as anything else."
      },
      {
        character: "narrator",
        text: "She's already tidying your desk, moving your notebook two inches to the left so it aligns perfectly with the edge."
      },
      {
        character: "yuki",
        sprite: "yuki_character", 
        text: "You should stay close to me for a while. I know exactly how to make sure you're liked. It's... easier if you just follow my lead."
      },
      {
        character: "narrator",
        text: "There's a strange weight to her kindness. It feels less like a gift and more like a debt being recorded."
      }
    ],
    choices: [
      {
        text: "Ask why she's helping you",
        next: "yuki_route_2a"
      },
      {
        text: "Politely decline her 'guidance'",
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
        text: "Megumi's hand is warm, but she's gripping yours a little too tightly. She's practically dragging you down the hallway."
      },
      {
        character: "mei",
        sprite: "mei_character_excited",
        text: "Don't listen to Rinne. She thinks everyone is a tragedy waiting to happen. Life's too short for all that deep stuff, right?"
      },
      {
        character: "mei", 
        sprite: "mei_character_happy",
        text: "I'll show you the rooftop. It's the only place where the air doesn't feel like it's been breathed a thousand times already."
      },
      {
        character: "narrator",
        text: "She's smiling, but she won't meet your eyes. Her energy feels like a wall she's built to keep something out."
      }
    ],
    choices: [
      {
        text: "Follow her to the rooftop",
        next: "mei_route_2a"
      },
      {
        text: "Ask her why she's in such a rush",
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
        text: "You approach Rinne. She doesn't flinch, doesn't look up. She just turns a page, the sound loud in the sudden silence."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "They told you to come here, didn't they? Yukino wants to see if you're easy to manage. Megumi wants to see if you're loud enough to drown out her thoughts."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "And you? You're just curious. Curiosity is what gets the protagonist killed in the first act of most good stories."
      },
      {
        character: "narrator", 
        text: "She finally looks up. Her eyes aren't just purple; they're the color of a bruise that won't heal."
      }
    ],
    choices: [
      {
        text: "I'm not a character in a book, Rinne",
        next: "rin_route_2a"
      },
      {
        text: "Tell me what you see",
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
        text: "The school garden is beautiful, but the hedges are trimmed with surgical precision. Yuki stands by the roses, her back to you."
      },
      {
        character: "yuki", 
        sprite: "yuki_character_thoughtful",
        text: "Why help? Because chaos is exhausting. If I can help you fit in, everything remains balanced. Peaceful."
      },
      {
        character: "yuki",
        sprite: "yuki_character",
        text: "Do you know what happens to things that don't fit? They get pruned. Like these roses."
      },
      {
        character: "narrator",
        text: "She snips a perfectly healthy bud that was growing slightly off-center. She doesn't look sad about it."
      },
      {
        character: "yuki",
        sprite: "yuki_character_happy",
        text: "You have potential. But potential is dangerous if it's not directed correctly. Promise me you won't do anything... unpredictable."
      }
    ],
    choices: [
      {
        text: "I'll do my best to fit in",
        next: "yuki_route_3a"
      },
      {
        text: "I'm not a rose, Yuki",
        next: "yuki_route_3b"
      }
    ]
  },

  yuki_route_2b: {
    background: "classroom",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "yuki",
        sprite: "yuki_character",
        text: "Of course! I understand. It's important to explore things at your own pace."
      },
      {
        character: "narrator",
        text: "Yukino's understanding smile shows her consideration for others."
      },
      {
        character: "yuki",
        sprite: "yuki_character_happy",
        text: "If you need any help during your exploration, feel free to find me anytime! I'm usually in the student council room after school."
      },
      {
        character: "narrator",
        text: "The afternoon passes quickly. You spend the rest of the time getting familiar with the classroom environment."
      }
    ],
    choices: [
      {
        text: "Visit the student council room after school",
        next: "yuki_route_3c"
      },
      {
        text: "Explore other places first",
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
        text: "The wind on the rooftop is fierce. Megumi stands right at the edge, the safety fence the only thing between her and the drop."
      },
      {
        character: "mei",
        sprite: "mei_character_excited",
        text: "Look! Everything looks so small from here. Like you could just reach out and crush the whole school with one hand."
      },
      {
        character: "narrator",
        text: "She turns to you, and for a second, the mask slips. She looks exhausted."
      },
      {
        character: "mei",
        sprite: "mei_character",
        text: "Promise me something? Even if things get... messy. Don't just disappear. Everyone eventually disappears. It's so boring."
      }
    ],
    choices: [
      {
        text: "I'm not going anywhere",
        next: "mei_route_3a"
      },
      {
        text: "That depends on you, Megumi",
        next: "mei_route_3b"
      }
    ]
  },

  mei_route_2c: {
    background: "cafeteria",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "narrator",
        text: "Megumi takes you to the school cafeteria. Even though it's not mealtime, the aroma of food still lingers in the air."
      },
      {
        character: "mei",
        sprite: "mei_character_happy",
        text: "The aunt here makes the best curry! Every time after training, I come here to replenish my energy!"
      },
      {
        character: "narrator",
        text: "You can see that Megumi is well-liked here. Several cafeteria staff smile and wave at her."
      },
      {
        character: "mei",
        sprite: "mei_character_excited",
        text: "Oh! And the bread here is freshly baked every morning. You must try it tomorrow!"
      },
      {
        character: "narrator",
        text: "Megumi's enthusiasm for food reminds you of her energetic personality."
      }
    ],
    choices: [
      {
        text: "I'll definitely try it tomorrow",
        next: "mei_route_3c"
      },
      {
        text: "Do you always eat here?",
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
        text: "The library is a tomb of dead thoughts. Rinne walks between the stacks, her fingers tracing the spines of books like she's reading them through her skin."
      },
      {
        character: "rin",
        sprite: "rin_character_gentle",
        text: "Aren't you? We all have scripts. Yukino's is the 'Perfect Girl'. Megumi's is the 'Energetic Best Friend'."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "My script is 'The Observer'. I watch the wheels turn until they eventually break. And they always break."
      },
      {
        character: "narrator",
        text: "She stops and pulls a thin, black book from the shelf. She doesn't give it to you."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "If I tell you the ending, will you still want to play? Or will you try to change the pages? Truth is the only betrayal that matters."
      }
    ],
    choices: [
      {
        text: "I want the truth, no matter what",
        next: "rin_route_3a"
      },
      {
        text: "I'd rather write my own ending",
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
        text: "Rinne looks at you for a moment, then quietly nods."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "...Follow me."
      },
      {
        character: "narrator",
        text: "She silently packs her book and leads you to the library. The library is indeed very quiet, with only the soft sound of pages turning."
      },
      {
        character: "rin",
        sprite: "rin_character_thoughtful",
        text: "This is my sanctuary. Here, I can immerse myself in different worlds without being disturbed."
      },
      {
        character: "narrator",
        text: "You notice Rinne seems more relaxed in this environment, as if she truly belongs here."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "Do you...really want to understand literature? Or are you just trying to get closer to me?"
      }
    ],
    choices: [
      {
        text: "I genuinely love literature",
        next: "rin_route_3c"
      },
      {
        text: "I want to understand you better",
        next: "rin_route_3d"
      }
    ]
  },

  // Continue with more routes...
  yuki_route_3a: {
    background: "garden",
    music: "emotional_moment_theme",
    dialogue: [
      {
        character: "yuki",
        sprite: "yuki_character_shy",
        text: "Thank you...your words mean a lot to me."
      },
      {
        character: "narrator",
        text: "Yukino's cheeks turn slightly pink as she gathers courage to share her secret."
      },
      {
        character: "yuki",
        sprite: "yuki_character_thoughtful",
        text: "I...I write poetry in my spare time. But I've never shown it to anyone because I'm afraid they'll think it's childish."
      },
      {
        character: "narrator",
        text: "She pulls out a small notebook from her bag, her hands trembling slightly."
      },
      {
        character: "yuki",
        sprite: "yuki_character_happy",
        text: "Would you...would you like to read one of my poems?"
      }
    ],
    choices: [
      {
        text: "I'd be honored to read your poetry",
        next: "yuki_ending_good"
      },
      {
        text: "Poetry isn't really my thing",
        next: "yuki_ending_neutral"
      }
    ]
  },

  // Endings
  yuki_ending_good: {
    background: "garden",
    music: "romantic_sakura_theme",
    dialogue: [
      {
        character: "narrator",
        text: "As you read Yukino's beautiful poetry about nature and emotions, you realize how talented and sensitive she truly is."
      },
      {
        character: "yuki",
        sprite: "yuki_character_happy",
        text: "Thank you for understanding me. I feel like I can share anything with you."
      },
      {
        character: "narrator",
        text: "Under the setting sun in the garden, a beautiful friendship begins to bloom between you and Yukino."
      },
      {
        character: "narrator",
        text: "THE END - Yukino's Route: Garden of Poetry"
      }
    ],
    choices: [
      {
        text: "Return to title screen",
        next: "title_screen"
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
        text: "Really?! That's great! We have practice every day after school, and competitions on weekends!"
      },
      {
        character: "narrator",
        text: "Megumi's enthusiasm is contagious as she describes the various sports activities."
      },
      {
        character: "mei",
        sprite: "mei_character_happy",
        text: "Don't worry if you're a beginner! We all help each other improve. That's what teamwork is about!"
      },
      {
        character: "narrator",
        text: "You can see why Megumi is so popular - her positive attitude lifts everyone's spirits."
      }
    ],
    choices: [
      {
        text: "I'd like to join the track team",
        next: "mei_ending_good"
      },
      {
        text: "Maybe I'll try a different sport",
        next: "mei_ending_neutral"
      }
    ]
  },

  mei_ending_good: {
    background: "sports_field",
    music: "energetic_sports_theme",
    dialogue: [
      {
        character: "narrator",
        text: "Months later, you've become an integral part of the track team, training alongside Megumi every day."
      },
      {
        character: "mei",
        sprite: "mei_character_determined",
        text: "Look how much you've improved! I knew you had potential from the start!"
      },
      {
        character: "narrator",
        text: "The sound of the starting pistol echoes as you both prepare for the regional championships, ready to chase your dreams together."
      },
      {
        character: "narrator",
        text: "THE END - Megumi's Route: Racing Towards Dreams"
      }
    ],
    choices: [
      {
        text: "Return to title screen",
        next: "title_screen"
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
        text: "You've read Murasaki Shikibu's masterpiece? Most people find classical Japanese literature too difficult."
      },
      {
        character: "narrator",
        text: "For the first time, you see genuine excitement in Rinne's eyes."
      },
      {
        character: "rin",
        sprite: "rin_character_gentle",
        text: "Which chapter impressed you the most? I find the psychological depth of the characters fascinating."
      },
      {
        character: "narrator",
        text: "As you discuss literature, Rinne gradually opens up, revealing her passion for stories and human nature."
      }
    ],
    choices: [
      {
        text: "The relationship between Genji and Murasaki",
        next: "rin_ending_good"
      },
      {
        text: "The political intrigue aspects",
        next: "rin_ending_neutral"
      }
    ]
  },

  rin_ending_good: {
    background: "moonlight_terrace",
    music: "mysterious_night_theme",
    dialogue: [
      {
        character: "narrator",
        text: "Under the moonlight on the school terrace, you and Rinne continue your deep literary discussions."
      },
      {
        character: "rin",
        sprite: "rin_character_gentle",
        text: "I never expected to find someone who could understand the beauty of classical literature like you do."
      },
      {
        character: "narrator",
        text: "The night wind carries the scent of cherry blossoms as two kindred spirits connect through their shared love of literature."
      },
      {
        character: "narrator",
        text: "THE END - Rinne's Route: Moonlit Conversations"
      }
    ],
    choices: [
      {
        text: "Return to title screen",
        next: "title_screen"
      }
    ]
  },

  // Neutral endings and other routes would continue here...
  // For brevity, I'll add a few more key endings

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
        text: "As you walk through the hallways, you reflect on the three interesting girls you met today."
      },
      {
        character: "narrator",
        text: "Each of them seems to have their own unique charm and story. Perhaps tomorrow you'll have a chance to get to know them better."
      },
      {
        character: "narrator",
        text: "THE END - Neutral Route: New Beginnings"
      }
    ],
    choices: [
      {
        text: "Return to title screen",
        next: "title_screen"
      }
    ]
  },

  the_revelation: {
    background: "cafeteria",
    music: "dramatic_tension_theme",
    dialogue: [
      {
        character: "narrator",
        text: "The school festival is in full swing. Laughter, music, the smell of fried food. But in this corner of the cafeteria, the air is freezing."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "It's time to stop the play. The masks are starting to melt."
      },
      {
        character: "narrator",
        text: "Rinne drops a stack of photographs on the table. They show Yukino meeting with the school board, and Megumi crying in a dark hallway."
      },
      {
        character: "yuki",
        sprite: "yuki_character_thoughtful",
        text: "...I did it for the stability of the school. You were a variable, a risk. I had to ensure you were... contained."
      },
      {
        character: "mei",
        sprite: "mei_character",
        text: "And I... I was scared. They were going to kick me off the team because of my grades. Yuki said she'd fix it if I kept you distracted."
      },
      {
        character: "narrator",
        text: "The betrayal hits like a physical blow. The two people you thought you were getting close to were just playing their parts in a script written by fear and control."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "Now, the script is torn. You have one choice. One person gets to walk away with their dignity. The others... they stay in the dark."
      }
    ],
    choices: [
      {
        text: "Forgive Yukino (Conditional Love)",
        next: "yuki_ending_bittersweet"
      },
      {
        text: "Comfort Megumi (Fragile Trust)",
        next: "mei_ending_bittersweet"
      },
      {
        text: "Walk away with Rinne (The Cold Truth)",
        next: "rin_ending_bittersweet"
      }
    ]
  },

  yuki_ending_bittersweet: {
    background: "garden",
    music: "romantic_sakura_theme",
    dialogue: [
      {
        character: "narrator",
        text: "You chose to stay with Yukino. The 'Perfect Girl' is gone, replaced by someone who is terrified of losing control."
      },
      {
        character: "yuki",
        sprite: "yuki_character_thoughtful",
        text: "I'll never lie to you again. But I can't promise I won't try to protect you from things you don't even know exist."
      },
      {
        character: "narrator",
        text: "Your relationship is built on a foundation of broken trust and desperate need. It's love, but it's conditional. You'll always wonder what she's not telling you."
      },
      {
        character: "narrator",
        text: "THE END - Yukino's Route: The Controlled Heart"
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
        text: "Megumi is crying. She's lost her place on the team, and she's lost the easy cheerfulness she used to hide behind."
      },
      {
        character: "mei",
        sprite: "mei_character",
        text: "I'm a mess. I'm a liar. Why would you even look at me?"
      },
      {
        character: "narrator",
        text: "You stay with her, but the silence between you is heavy. The girl you first met is gone. The person left behind is real, but she's broken."
      },
      {
        character: "narrator",
        text: "THE END - Megumi's Route: The Fragile Truth"
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
        text: "You walk away from the others and find Rinne on the terrace. She doesn't look triumphant."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "I told you. The ending is always the same. Truth doesn't make things better. It just makes them clear."
      },
      {
        character: "narrator",
        text: "She takes your hand. It's ice cold. You're together, but you're both alone in the knowledge of how easily people can break each other."
      },
      {
        character: "narrator",
        text: "THE END - Rinne's Route: The Observer's Price"
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