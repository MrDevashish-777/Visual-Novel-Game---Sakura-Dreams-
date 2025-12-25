// Visual Novel Story Data
export const characters = {
  yuki: {
    name: "Yukino Sakurai", // Gentle and kind class president type
    sprite: "yuki_character",
    color: "#4A90E2" // Blue
  },
  mei: {
    name: "Megumi Hanasaki", // Cheerful and energetic athletic girl
    sprite: "mei_character",
    color: "#7ED321" // Green
  },
  rin: {
    name: "Rinne Tsukimi", // Quiet and mysterious literary girl
    sprite: "rin_character", 
    color: "#9013FE" // Purple
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
  music_room: "music_room_background"
}

export const storyData = {
  start: {
    background: "classroom",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "narrator",
        text: "This is another peaceful afternoon at Sakura High School. The afternoon sunlight streams through the classroom windows, casting warm golden light on the desks."
      },
      {
        character: "narrator", 
        text: "You are a new transfer student, and today is your first day of school. As you walk into the classroom, you notice three beautiful girls..."
      },
      {
        character: "yuki",
        sprite: "yuki_character",
        text: "Ah! You must be the new student. I'm Yukino Sakurai, everyone calls me Yukino. Welcome to our class!"
      },
      {
        character: "mei",
        sprite: "mei_character",
        text: "Hello! I'm Megumi Hanasaki! Just call me Megumi! Want to have lunch with us? I know all the best places in the school!"
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "*Quietly reading a book* ...I'm Rinne Tsukimi. You can call me Rinne. Don't mind me, I prefer quiet places."
      }
    ],
    choices: [
      {
        text: "Chat with Yukino about class matters",
        next: "yuki_route_1"
      },
      {
        text: "Ask Megumi about the school",
        next: "mei_route_1" 
      },
      {
        text: "Quietly approach Rinne",
        next: "rin_route_1"
      }
    ]
  },

  yuki_route_1: {
    background: "classroom",
    music: "peaceful_school_theme",
    dialogue: [
      {
        character: "yuki",
        sprite: "yuki_character",
        text: "I'm so glad you chose to talk to me! I love helping new classmates settle in."
      },
      {
        character: "yuki",
        sprite: "yuki_character", 
        text: "Our teacher is very nice, and the classmates are friendly too. You'll adapt quickly!"
      },
      {
        character: "narrator",
        text: "Yukino's gentle smile makes you feel at ease. Her kindness is sincere and warm."
      },
      {
        character: "yuki",
        sprite: "yuki_character",
        text: "Would you like me to show you around the school after class? I know the first day can be a bit overwhelming."
      }
    ],
    choices: [
      {
        text: "I'd love to, thank you!",
        next: "yuki_route_2a"
      },
      {
        text: "Maybe next time, I want to explore on my own first",
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
        text: "Megumi excitedly grabs your hand and takes you to the hallway."
      },
      {
        character: "mei",
        sprite: "mei_character_excited",
        text: "Come on! Let me show you the best places! The cafeteria curry is super delicious, and the rooftop has an amazing view!"
      },
      {
        character: "mei", 
        sprite: "mei_character_happy",
        text: "Oh! And the gymnasium and sports field! I love practicing there! Do you play any sports?"
      },
      {
        character: "narrator",
        text: "Megumi's energy is infectious. Her cheerful personality lights up the entire hallway."
      },
      {
        character: "mei",
        sprite: "mei_character",
        text: "So, what would you like to see first? I'm like a tour guide here!"
      }
    ],
    choices: [
      {
        text: "Take me to see the rooftop view",
        next: "mei_route_2a"
      },
      {
        text: "Let's go to the cafeteria and try that famous curry",
        next: "mei_route_2c"
      },
      {
        text: "Let's check out the sports field, I'm interested in athletics too",
        next: "mei_route_2d"
      }
    ]
  },

  rin_route_1: {
    background: "classroom",
    music: "peaceful_school_theme", 
    dialogue: [
      {
        character: "narrator",
        text: "You quietly walk towards Rinne's desk, noticing she's reading a thick novel with a complex cover."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "*Looking up from her book* Oh...you're still here. Most people find me too quiet and then walk away."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "This is 'The Tale of Genji'. Are you familiar with classical literature?"
      },
      {
        character: "narrator", 
        text: "Her purple eyes seem to see through you, as if trying to understand your true intentions."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "I spend most of my time in the library. It's quiet there...away from all the noise."
      }
    ],
    choices: [
      {
        text: "I like classical literature too",
        next: "rin_route_2a"
      },
      {
        text: "Could you show me the library?",
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
        text: "After school, Yukino takes you to the small garden behind the school. Few people come here, making it particularly peaceful."
      },
      {
        character: "yuki", 
        sprite: "yuki_character_happy",
        text: "This is one of my favorite places. When I need to think, I come here."
      },
      {
        character: "narrator",
        text: "The garden is full of various flowers, with butterflies dancing among them. Yukino walks to a blooming rose and gently touches the petals."
      },
      {
        character: "yuki",
        sprite: "yuki_character_thoughtful",
        text: "You know? I've always felt that flowers are like human emotions...beautiful but fragile, needing careful nurturing."
      },
      {
        character: "narrator",
        text: "Her words resonate deeply with you. Under the soft sunset, Yukino appears even more beautiful and moving."
      },
      {
        character: "yuki",
        sprite: "yuki_character_shy",
        text: "Actually...I have a secret I want to tell you. But could you promise not to laugh at me?"
      }
    ],
    choices: [
      {
        text: "You must be very talented, I believe in your dreams",
        next: "yuki_route_3a"
      },
      {
        text: "Why care about what others think?",
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
    music: "energetic_sports_theme",
    dialogue: [
      {
        character: "narrator",
        text: "Megumi leads you up the stairs to the school rooftop. The view here is indeed spectacular."
      },
      {
        character: "mei",
        sprite: "mei_character_excited",
        text: "Look! You can see the entire city from here! And when the cherry blossoms bloom in spring, it's absolutely beautiful!"
      },
      {
        character: "narrator",
        text: "The breeze on the rooftop is refreshing, and Megumi's hair dances in the wind."
      },
      {
        character: "mei",
        sprite: "mei_character_happy",
        text: "I often come here after training. The fresh air helps me recover quickly!"
      },
      {
        character: "narrator",
        text: "You notice Megumi's athletic build and healthy complexion, clearly someone who exercises regularly."
      },
      {
        character: "mei",
        sprite: "mei_character",
        text: "Hey, do you want to join our school's sports club? We always welcome new members!"
      }
    ],
    choices: [
      {
        text: "I'd like to know more about the sports club",
        next: "mei_route_3a"
      },
      {
        text: "I'm not very good at sports",
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
        text: "Rinne's eyes show a hint of surprise, then her expression softens slightly."
      },
      {
        character: "rin",
        sprite: "rin_character_gentle",
        text: "Really? That's...unexpected. Most students here prefer popular novels or manga."
      },
      {
        character: "narrator",
        text: "She closes her book and looks at you with more interest."
      },
      {
        character: "rin",
        sprite: "rin_character",
        text: "What's your favorite classical work? I'm curious about your literary taste."
      },
      {
        character: "narrator",
        text: "This seems to be the first time Rinne has shown genuine interest in conversation."
      }
    ],
    choices: [
      {
        text: "I like 'The Tale of Genji' too",
        next: "rin_route_3a"
      },
      {
        text: "I prefer Western classical literature",
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