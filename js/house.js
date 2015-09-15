TAG.house = {
  "title" : "The House",
  "places" : [
    {
      "title" : "The Hallway",
      "description" : "You are in a large room. A corridor leads off to the North.\nThere are doors to the East and West and stairs lead up and down.",
      "exits" : [
        {
          "direction" : "east",
          "title" : "The Old Library"
        },
        {
          "direction" : "west",
          "title" : "The Study"
        },
        {
          "direction" : "north",
          "title" : "The Kitchen"
        },
        {
          "direction" : "up",
          "title" : "The Landing"
        },
        {
          "direction" : "down",
          "title" : "The Gloomy Basement"
        }
      ]
    },
    {
      "title" : "The Old Library",
      "description" : "You are in an old library. Dusty books line the walls. There is a gaping hole in the ceiling.",
      "exits" : [
        {
          "direction" : "west",
          "title" : "The Hallway"
        },
        {
          "direction" : "up",
          "title" : "The Yellow Bedroom",
          "challenge" : {
            "message" : "Who are you? Superman?",
            "success" : "You manage to catch the rope on an object above. Good to go.",
            "failure" : "The hole's still there. Beyond reach.",
            "requires" : "a lucky rope"
          }
        }
      ],
      "items" : [
        "a rusty key"
      ]
    },
    {
      "title" : "The Study",
      "description" : "You are in a small study. There is a solid oak cupboard on the West wall.",
      "exits" : [
        {
          "direction" : "east",
          "title" : "The Hallway"
        },
        {
          "direction" : "west",
          "title" : "The Large Cupboard",
          "items" : [
              "a lamp"
          ],
          "challenge" : {
            "message" : "The cupboard is locked.",
            "success" : "With a wince-inducing squeal, the key turns in the lock.",
            "failure" : "That doesn't work. The cupboard refuses to open.",
            "requires" : "a rusty key"
          }
        }
      ]
    },
    {
      "title" : "The Large Cupboard",
      "description" : "You are in the cupboard! It's surprisingly roomy. There's not much of interest apart from...",
      "items" : [
          "a lamp"
      ],
      "exits" : [
        {
          "direction" : "east",
          "title" : "The Study"
        }
      ]
    },
    {
      "title" : "The Gloomy Basement",
      "description" : "You are in a basement. It is gloomy.",
      "exits" : [
        {
          "direction" : "up",
          "title" : "The Hallway"
        },
        {
          "direction" : "north",
          "title" : "The Trapdoor",
          "challenge" : {
            "message" : "It is too dark to go in that direction. You might trip and graze your knee.",
            "success" : "The warm glow of the lamp lights the way.",
            "failure" : "I'm not sure how that will help. It's still too dark.",
            "requires" : "a lamp",
            "damage" : 1
          }
        }
      ]
    },
    {
      "title" : "The Trapdoor",
      "description" : "You are at the northern end of the basement. There is a large, closed trapdoor.",
      "exits" : [
        {
          "direction" : "south",
          "title" : "The Gloomy Basement"
        },
        {
          "direction" : "down",
          "title" : "The Dungeon",
          "challenge" : {
            "message" : "The trapdoor is fastened securely by a robust padlock.",
            "success" : "The padlock explodes with the force of the axe's blow.\nYou feel strong and effective and give a small, contented smile.",
            "failure" : "That just doesn't cut it!",
            "requires" : "a sturdy axe"
          }
        }
      ]
    },
    {
      "title" : "The Dungeon",
      "description" : "You are in a dungeon. It is dark and dank and dreary.\nYou're lamp shows the dungeon extends to the south.",
      "exits" : [
        {
          "direction" : "up",
          "title" : "The Trapdoor"
        },
        {
          "direction" : "south",
          "title" : "The Blessed Emporium",
          "challenge" : {
            "message" : "A holy knight blocks your path. 'NUN SHALL PASS!' he exclaims.\nIn the gloom you can just make out that his sword is actually a feather duster.\nIt still hurts when he whacks you round the ear.",
            "success" : "'At last! A sword worthy of my station and purpose. You are blessed indeed!'\nAccepting your gift, the knight is really, really happy and steps out of the way.",
            "failure" : "'You are not worthy,' says the knight, tickling you painfully with his feather duster.\nHe still blocks the path. 'NUN SHALL PASS!!!",
            "requires" : "The Sword of the Sisters of the Sword",
            "damage" : 7
          }
        },
        {
          "direction" : "pit",
          "title" : "The Prisoner's Pit"
        }
      ]
    },
    {
      "title" : "The Blessed Emporium",
      "description" : "You are in a dungeon-based shop that seems to sell only holy water.",
      "items" : [
          "holy water",
          "a feather duster"
      ],
      "exits" : [
        {
          "direction" : "north",
          "title" : "The Dungeon"
        }
      ]
    },
    {
      "title" : "The Prisoner's Pit",
      "description" : "You are in a deep pit. It is dark and unpleasant. Why did you jump in the pit?",
      "items" : [
          "a dead cat"
      ],
      "exits" : [
        {
          "direction" : "up",
          "title" : "The Dungeon",
          "challenge" : {
            "message" : "The walls are vertical and slimy and may be covered in acid.",
            "success" : "That is a lucky rope! You manage to catch it on something above.",
            "failure" : "Are you desperate yet? You're doomed!",
            "damage" : 8,
            "requires" : "a lucky rope"
          }
        }
      ]
    },
    {
      "title" : "The Kitchen",
      "description" : "You are in a kitchen. There is a disturbing smell of unease. It could be the cheese...\n...or maybe the putrid zombie blocking the exit to the north.",
      "exits" : [
        {
          "direction" : "south",
          "title" : "The Hallway"
        },
        {
          "direction" : "west",
          "title" : "The Walled Garden"
        },
        {
          "direction" : "north",
          "title" : "Congratulations! You are free",
          "challenge" : {
            "message" : "The zombie groans mournfully and sinks its teeth into your neck. It really hurts!!!",
            "success" : "With a whistful sigh,\n\n't h a n k   y   o    u,'\n\nthe zombie disintegrates into an icky puddle of putrid goo.",
            "failure" : "The zombie is strangely resilient. Maybe it's something to do with the diabolical curse. Poor zombie.",
            "requires" : "holy water",
            "damage" : 20
          }
        }
      ],
      "items" : [
          "a smelly cheese"
      ]
    },
    {
      "title" : "The Walled Garden",
      "description" : "You are in a beautiful, fragrant walled garden, filled with colour... and a dog... and a shed.",
      "exits" : [
        {
          "direction" : "east",
          "title" : "The Kitchen",
          "challenge" : {
            "message" : "The dog looks hungry. It won't let you past. In fact, it looks like you might be dinner.",
            "success" : "The dog seems confused by the cheese. It whines and lies down, head on paws, subdued.",
            "failure" : "This mutt knows dog-fu. Your attempts are worthless.",
            "requires" : "a smelly cheese",
            "damage" : 10
          }
        },
        {
          "direction" : "north",
          "title" : "The Shed"
        }
      ]
    },
    {
      "title" : "The Shed",
      "description" : "You are in a garden shed. There are lots of spiders here.\nThere are probably snakes and scorpions too.\nMaybe evil clowns.\nWho knows what's under that tarp!\n\nLook out!",
      "exits" : [
        {
          "direction" : "south",
          "title" : "The Walled Garden"
        }
      ],
      "items" : [
          "a sturdy axe"
      ]
    },
    {
      "title" : "Congratulations! You are free",
      "description" : "You exit the house into bright sunshine. A road of yellow bricks winds into the countryside.\nDid that scarecrow just wink at you?"
    },
    {
      "title" : "The Landing",
      "description" : "You are on the landing above the hallway. There are three doors.",
      "exits" : [
        {
          "direction" : "down",
          "title" : "The Hallway"
        },
        {
          "direction" : "door1",
          "title" : "The Red Bedroom"
        },
        {
          "direction" : "door2",
          "title" : "The Blue Bedroom"
        },
        {
          "direction" : "door3",
          "title" : "The Yellow Bedroom"
        }
      ]
    },
    {
      "title" : "The Red Bedroom",
      "description" : "You are in a bedroom. The walls are four shades of red.\nA sign on the wall reads 'To Dust You Shall Return.'\nBeneath the sign is a collection of swords.",
      "items" : [
          "The Sword of the Sisters of the Sword"
      ],
      "exits" : [
        {
          "direction" : "door",
          "title" : "The Landing"
        },
        {
          "direction" : "corner",
          "title" : "The Cabinet",
          "challenge" : {
            "message" : "It is too dusty. You cough and sneeze and splutter and back off.",
            "success" : "The blessed feather duster seems to suck up all the dust. There is a cabinet in the corner.",
            "failure" : "It's no use. The dust is overpowering.",
            "requires" : "a feather duster",
            "damage" : 5
          }
        }
      ]
    },
    {
      "title" : "The Cabinet",
      "description" : "You look into the cabinet.",
      "items" : [
          "elixir"
      ],
      "exits" : [
        {
          "direction" : "back",
          "title" : "The Red Bedroom"
        }
      ]
    },
    {
      "title" : "The Blue Bedroom",
      "description" : "You are in a bedroom. It is painted a light blue colour.\nA skeleton is tucked up in bed. It seems to be asleep.",
      "items" : [
          "a lucky rope"
      ],
      "exits" : [
        {
          "direction" : "door",
          "title" : "The Landing"
        }
      ]
    },
    {
      "title" : "The Yellow Bedroom",
      "description" : "You are in a bedroom. You never knew there were so many shades of yellow!\nThere is a large hole in the floor.",
      "exits" : [
        {
          "direction" : "down",
          "title" : "The Old Library",
          "challenge" : {
            "message" : "It's too far to jump.",
            "success" : "You tie a clever knot and lower the rope into the library.",
            "failure" : "You still don't want to risk the fall.",
            "requires" : "a lucky rope"
          }
        },
        {
          "direction" : "door",
          "title" : "The Landing",
          "challenge" : {
            "message" : "The door won't open from this side. Tha handle is smashed and spiky. Ouch!",
            "success" : "How did you do that? I can't believe you found a bulldozer!!!",
            "failure" : "The heavy door isn't open to your efforts.",
            "damage" : 3,
            "requires" : "a bulldozer"
          }
        }
      ]
    }
  ],
  "start" : "The Hallway"
};