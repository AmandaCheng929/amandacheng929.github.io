/* =========================================================
   EDIT THIS FILE to change your site's content.
   You never need to touch the HTML to add a project:
   copy one project block below, change the text, and
   drop your images into assets/img/.

   Anything in [square brackets] is a placeholder for you
   to fill in or delete before the site goes live.
   ========================================================= */

   const SITE = {
    name: "AMANDA CHENG",
    statement:
      "I design interfaces that help people and robots understand each other, and I build them in whatever medium the question calls for: AR, hardware, games, or paint.",
    intro:
      "I'm a senior at Wellesley College, double majoring in Media Arts and Sciences and Biology, and applying to PhD programs in human-robot interaction and human-computer interaction. Whether I'm building an AR interface for supervising robots or a game about reliving a memory, I keep returning to one question: how much are we asking of the person on the other side of the interaction?",
    email: "ac153@wellesley.edu",
    cv: "assets/cv.pdf", // put your CV PDF in assets/ with this name
    links: [
      { label: "GitHub", url: "" }, // [add your GitHub URL]
      { label: "LinkedIn", url: "" }, // [add your LinkedIn URL]
      { label: "Google Scholar", url: "" } // leave url empty to hide a link
    ],
    photo: "assets/img/portrait.jpg",
    about: [
      "Robots are getting better at everyday tasks, but working with them is still demanding. People learn specific commands, adapt to rigid controls, and watch closely for mistakes. My research asks the opposite question: how can robots read the cues people already give, and how can robots show what they're about to do clearly enough that people can stay in control?",
      "My college has no robotics lab, so I found my way to this field by building across many mediums. I've studied how novice programmers talk to AI tools, run a brain-computer interface study at the MIT Media Lab, built tangible interfaces with Arduino, designed games in Unity and VR, and, most recently, built an AR interface for supervising robots at MIT's CLEAR Lab. Each medium reaches people differently, and I've learned to combine them to go deep on a single problem.",
      "My art and design work isn't separate from my research. Painting a campus map in four styles, or rebuilding my childhood bedroom from memory, taught me how form, scale, and visual style change what people notice and feel. Those are the same questions I ask when deciding what a robot should show the person working beside it."
    ],
    interests: [
      "Helping robots understand human intent from language, context, and natural cues",
      "Making robot actions and plans legible to the people working with them",
      "Reducing the mental and physical effort that interaction asks of people",
      "Tangible, embodied, and mixed reality interfaces",
      "Assistive technology for people with limited mobility"
    ],
    skills: {
      "Research methods": [
        "User study design",
        "Pilot testing and iteration",
        "Within-subjects experiments",
        "Workload measures (NASA-TLX)",
        "Statistical analysis",
        "Playtesting"
      ],
      "Code and tools": [
        "Python (pandas, PyTorch)",
        "SQL",
        "JavaScript",
        "Unity / C#",
        "Streamlit",
        "Git"
      ],
      "Making": [
        "Arduino and hardware prototyping",
        "Blender 3D modeling",
        "Architectural modeling",
        "Physical assembly"
      ],
      "Art": [
        "Acrylic and colored pencil",
        "Comic illustration",
        "Frame-by-frame animation (Procreate)",
        "Scientific illustration"
      ]
    }
  };
  
  /* ---------------------------------------------------------
     PROJECTS
     Order here = order on the home page. Research and
     HRI/HCI work comes first, then games and interaction
     design, then art and storytelling.
  
     Filter categories used on this site:
       "Research"                research projects with user studies
       "Human-robot interaction"
       "Interaction design"      interfaces people use directly
       "Games & XR"              games, VR, and immersive work
       "Physical prototypes"     things built by hand or with hardware
       "Web & data"              websites and data visualization
       "Art & storytelling"      illustration, animation, books
  
     Fields:
     id          short unique name, no spaces (used in the URL)
     title       project name
     question    the question the project explored (shown big)
     year        e.g. "2025"
     categories  used for the filter buttons on the home page
     cover       image for the home grid (landscape, ~1200x800)
     summary     one or two sentences
     role, timeline, team, tools
     links       optional: demo, video, repo, paper
     video       optional: a YouTube *embed* URL
                 (https://www.youtube.com/embed/VIDEO_ID)
     sections    the case study, each with paragraphs and images
     --------------------------------------------------------- */
  
  const PROJECTS = [
    {
      id: "ar-robot-supervision",
      title: "AR interface for supervising robots",
      question:
        "How much does a person need to see about a robot's decisions to step in at the right moment, without being overwhelmed?",
      year: "2026",
      categories: ["Research", "Human-robot interaction", "Interaction design"],
      cover: "assets/img/ar-cover.jpg",
      summary:
        "An AR interface, used in our user studies, that shows people when a robot is likely to fail and what it plans to do next, while they juggle another task.",
      role: "Co-lead researcher; sole developer of the interface",
      timeline: "May 2026 to present",
      team: "3 student researchers, advised by Prof. Andreea Bobu (MIT CLEAR Lab)",
      tools: ["Unity", "AR", "Python", "Robot arm", "User studies", "NASA-TLX"],
      links: [
        { label: "Watch the demo", url: "" } // [add a video if you have one]
        // Paper: to be submitted to RSS 2027. Add a link once it is public.
      ],
      video: "",
      sections: [
        {
          heading: "Context",
          paragraphs: [
            "Robots running learned policies can do more every year, but they still make mistakes, and the people supervising them often can't tell what's coming until it happens. Our project explored how to lower the mental and physical effort of supervising robots: deciding when a person should step in, and how the robot should communicate.",
            "Our team trained a detector that predicts failures from the robot policy's internal states, so the robot can pause and ask for help only when needed. I led the other half of the problem: designing how that information reaches the person."
          ]
        },
        {
          heading: "Process",
          paragraphs: [
            "I built the full interface in Unity. The primary task lets a person see the detector's decisions, preview the robot's upcoming actions, replay past actions, and interact with the robot. A secondary task runs alongside it to measure how much mental capacity the person has left, imitating a real setting where an operator is doing other work or monitoring several robots at once.",
            "I tried several designs and refined them over four rounds of pilot studies. The hardest decisions were about restraint: every extra piece of information could help someone understand the robot, but it could also overload them. [Add one specific design change a pilot study led you to make.]"
          ],
          images: [
            { src: "assets/img/ar-1.jpg", caption: "[The primary task view: warnings and previews of upcoming robot actions.]" },
            { src: "assets/img/ar-2.jpg", caption: "[The secondary task used to measure cognitive load.]" },
            { src: "assets/img/ar-3.jpg", caption: "[An early design next to the final version.]" }
          ]
        },
        {
          heading: "Outcome",
          paragraphs: [
            "We ran a 12-participant study comparing our system against three baselines: full teleoperation, expert intervention, and the failure detector without the AR display. [Add your key result in one or two sentences, with numbers if you can share them.]"
          ]
        },
        {
          heading: "Reflection",
          paragraphs: [
            "Better information helped, but supervision still asked a lot of people. The robot could tell people more about itself, yet it still understood almost nothing about them. That gap, between what robots show and what they can read from the people around them, is what I want to study in graduate school."
          ]
        }
      ]
    },
  
    {
      id: "tangible-task-tokens",
      title: "Tangible task reminder",
      question: "What if a to-do list could capture how a task feels, not just when it's due?",
      year: "[year]",
      categories: ["Interaction design", "Physical prototypes"],
      cover: "assets/img/tokens-cover.jpg",
      summary:
        "A desk-sized reminder where each task is a tactile ball that rises as its start time approaches, then rolls out for you to hold while you work.",
      role: "Hardware and software lead; project manager",
      timeline: "[Semester], Tangible User Interfaces course, 2 months",
      team: "Team of 3",
      tools: ["Arduino", "Sensors and motors", "Physical fabrication"],
      links: [
        { label: "Watch the demo", url: "" } // [add a video if you have one]
      ],
      video: "",
      sections: [
        {
          heading: "Context",
          paragraphs: [
            "Digital to-do lists flatten every task into the same rectangle on a screen. But tasks feel different. Some feel warm, some stressful, some soft, some bouncy. We wanted a reminder that could hold those abstract feelings in a physical form."
          ]
        },
        {
          heading: "Process",
          paragraphs: [
            "Each transparent column holds one task. To set one, you write the task on the column, set its start time, and choose a ball whose material captures how the task feels. Fifteen minutes before the start time, a token begins rising up the column. When it reaches the top, a door opens and the ball rolls out for you to hold and fiddle with while you work, part reminder and part stress ball.",
            "We prototyped several designs and formats before reaching the final one. I got the main Arduino system working, wrote most of the code, worked through the engineering problems to get the hardware running, sourced parts within a tight budget, assembled the physical pieces, and managed our timeline."
          ],
          images: [
            { src: "assets/img/tokens-1.jpg", caption: "[Early prototypes compared side by side.]" },
            { src: "assets/img/tokens-2.jpg", caption: "[The final prototype with tactile task balls.]" }
          ]
        },
        {
          heading: "Outcome",
          paragraphs: [
            "We presented a fully working prototype to the department. Watching the first ball roll out in front of an audience, I saw how much more powerfully people respond to something they can hold than to anything on a screen."
          ]
        },
        {
          heading: "Reflection",
          paragraphs: [
            "This project made me want to work with machines that act in the physical world. It also taught me that a good interface can carry meaning beyond its function: the ball reminds you to start, but it also gives you something to hold onto. [Add anything you'd do differently.]"
          ]
        }
      ]
    },
  
    {
      id: "mind-vr",
      title: "Inside the mind: a VR experience",
      question:
        "Can a virtual space make people feel emotions that films and games rarely portray, and act on thoughts they'd normally suppress?",
      year: "[year]",
      categories: ["Games & XR", "Interaction design"],
      cover: "assets/img/vr-cover.jpg",
      summary:
        "A VR game set in a brain-shaped world, with rooms that evoke less familiar emotions and spaces where players can safely act out intrusive thoughts.",
      role: "Co-designer and developer (equal partnership)",
      timeline: "[Semester]",
      team: "Team of 2",
      tools: ["Unity", "VR", "Blender"],
      links: [
        { label: "Watch a walkthrough", url: "" } // [add a video if you have one]
      ],
      video: "",
      sections: [
        {
          heading: "Context",
          paragraphs: [
            "Games and films tend to show the same few emotions in familiar ways. We wanted to use VR's immersion to evoke emotions that are less often portrayed, and to give players a space to satisfy the harmless intrusive thoughts everyone has but rarely acts on."
          ]
        },
        {
          heading: "Process",
          paragraphs: [
            "The world's floor plan is shaped like a brain. One side holds five emotion rooms: nostalgia, melancholy, greed, curiosity, and creativity, each designed to evoke its emotion without stereotypes. The other side holds intrusive thoughts: breaking something in a silent museum, jumping on a meeting table, running into a flock of feeding ducks, and throwing ringing alarm clocks out of earshot.",
            "My teammate and I shared the work equally. I scoped the project with my teammate to keep it achievable, designed the UI and interactions, built 3D assets in Blender, and created visuals and decorations through rounds of prototyping."
          ],
          images: [
            { src: "assets/img/vr-1.jpg", caption: "[The brain-shaped floor plan.]" },
            { src: "assets/img/vr-2.jpg", caption: "[One of the emotion rooms.]" },
            { src: "assets/img/vr-3.jpg", caption: "[An intrusive-thought space.]" }
          ]
        },
        {
          heading: "Outcome",
          paragraphs: [
            "We presented the game at the department showcase. [Add how players reacted, or a moment from the showcase that surprised you.]"
          ]
        },
        {
          heading: "Reflection",
          paragraphs: [
            "We chose not to script one correct experience. Each player moved through the space differently and felt different things, and we decided that was the point. Designing for that variation, instead of for a single typical player, is something I carry into my research."
          ]
        }
      ]
    },
  
    {
      id: "subway-time-loop",
      title: "Time loop on the subway",
      question:
        "Can a mystery game capture what it feels like to relive a painful memory until you finally make peace with it?",
      year: "In progress",
      categories: ["Games & XR", "Interaction design"],
      cover: "assets/img/subway-cover.jpg",
      summary:
        "A narrative mystery game set in a single subway car, where the player relives the 30 minutes before their partner's death, gathering clues until they understand what happened.",
      role: "Developer and 3D artist",
      timeline: "[Start date] to present",
      team: "Team of [number]",
      tools: ["Unity", "C#", "Blender"],
      links: [],
      video: "",
      sections: [
        {
          heading: "Context",
          paragraphs: [
            "The idea grew from my love of detective stories and my habit of noticing small details about people and places around me in public. The story became about mental health: how much the people around us may be carrying without our noticing.",
            "In the game, the player's partner has died on a subway train. Time loops back to 30 minutes before the incident. While time is frozen, the player collects clues from passengers, and each clue unlocks new conversations. The right clues and conversations reveal that the partner had been struggling with severe stress and mental health challenges. The loop mirrors how trauma makes people relive a memory until they can finally resolve it."
          ]
        },
        {
          heading: "Process",
          paragraphs: [
            "We made deliberate scope choices for the player's sake. Instead of a large world full of objects you can't touch, we kept the whole game inside one subway car and packed it with stories and interactions. We wanted every detail a player notices to respond, so the space feels alive rather than frustrating.",
            "I built the train car in Blender and paired a 3D scene with 2D characters, a combination that keeps exploration natural while leaving room for expressive character art. I handled the harder interactions, parallax effects, camera movement that imitates walking, UI design, billboarding of 2D characters, and the data structures that organize clues and conversations."
          ],
          images: [
            { src: "assets/img/subway-1.jpg", caption: "[The subway car modeled in Blender.]" },
            { src: "assets/img/subway-2.jpg", caption: "[2D characters in the 3D scene.]" }
          ]
        },
        {
          heading: "Reflection",
          paragraphs: [
            "Limiting the space made the experience richer, not smaller. Fewer, deeper interactions felt more intuitive than a big world with little to do, a lesson I apply when deciding how much a robot interface should show. [Update this section when the game is complete.]"
          ]
        }
      ]
    },
  
    {
      id: "interactive-fridge",
      title: "Fill the fridge",
      question: "How much freedom can an interface give before it stops feeling intuitive?",
      year: "[year]",
      categories: ["Interaction design", "Web & data"],
      cover: "assets/img/fridge-cover.jpg",
      summary:
        "A website coded from scratch in JavaScript where visitors open a fridge, browse groceries and recipes, and stock the shelves however they like.",
      role: "Designer and developer",
      timeline: "[Semester]",
      team: "Solo",
      tools: ["JavaScript", "HTML", "CSS"],
      links: [
        { label: "Try it", url: "" } // [add the live link]
      ],
      video: "",
      sections: [
        {
          heading: "Context",
          paragraphs: [
            "I wanted to build something small that people could freely play with: open drawers, browse a visual catalog of groceries, check recipes, and fill the fridge in their own way."
          ]
        },
        {
          heading: "Process",
          paragraphs: [
            "Real freedom turned out to be hard to code. Users should be able to arrange items in any order, remove them from anywhere, and have objects take up space according to their size. Each of those freedoms required careful logic and repeated playtesting to feel natural. I also experimented with different graphic techniques and interaction methods along the way.",
            "As with my games, I chose a small scene with many interactions over a large scene with few."
          ],
          images: [
            { src: "assets/img/fridge-1.jpg", caption: "[The open fridge with groceries arranged by a user.]" }
          ]
        },
        {
          heading: "Reflection",
          paragraphs: [
            "Freedom and intuitiveness pull against each other. The more choices you give people, the more carefully you have to design for every one of them, the same tension I study in human-robot interaction."
          ]
        }
      ]
    },
  
    {
      id: "childhood-room",
      title: "The room that keeps shrinking",
      question: "Why does the same room feel smaller every time I return to it?",
      year: "[year]",
      categories: ["Physical prototypes", "Art & storytelling"],
      cover: "assets/img/room-cover.jpg",
      summary:
        "A reconstruction of my childhood bedroom from memory, through sketches, floor plans, maps, and a foam architectural model.",
      role: "Designer and maker",
      timeline: "[Semester or length]",
      team: "Solo",
      tools: ["Perspective sketching", "Floor plans", "Mapping", "Foam modeling"],
      links: [],
      video: "",
      sections: [
        {
          heading: "Context",
          paragraphs: [
            "Every time I go back to my childhood bedroom, it feels smaller, because I've grown bigger. I wanted to explore space as something subjective and relative, shaped by who is standing in it."
          ]
        },
        {
          heading: "Process",
          paragraphs: [
            "I worked from perspective sketches to small prototypes, then to floor plans, maps placing the room within the wider world, and finally a foam architectural model. The proportions shifted as I moved between mediums, and each medium revealed something different. The physical model showed me where the space felt tight or crowded, while the floor plans made me think precisely about the dimensions of the bed and desk."
          ],
          images: [
            { src: "assets/img/room-1.jpg", caption: "[Perspective sketches from memory.]" },
            { src: "assets/img/room-2.jpg", caption: "[Floor plans and maps.]" },
            { src: "assets/img/room-3.jpg", caption: "[The final foam model.]" }
          ]
        },
        {
          heading: "Reflection",
          paragraphs: [
            "This was one of the first physical prototypes I ever built on purpose, and it changed how I work. Each medium answers different questions, so I now move between sketches, digital models, and physical builds to see a problem from more than one side."
          ]
        }
      ]
    },
  
    {
      id: "movies-in-wikipedia",
      title: "Movies in Wikipedia",
      question: "[What question did you want the movie data to answer?]",
      year: "[year]",
      categories: ["Web & data"],
      cover: "assets/img/movies-cover.jpg",
      summary:
        "An interactive Streamlit app for exploring and analyzing a large dataset of movies drawn from Wikipedia.",
      role: "Developer and analyst",
      timeline: "[Semester], CS 234",
      team: "Solo",
      tools: ["Python", "pandas", "SQL", "Streamlit"],
      links: [
        { label: "Explore the app", url: "https://cs234-amanda-cheng-movies-in-wikipedia.streamlit.app/" }
      ],
      video: "",
      sections: [
        {
          heading: "Context",
          paragraphs: [
            "[Describe the dataset: roughly how many movies, what information it includes, and where it came from.]"
          ]
        },
        {
          heading: "Process",
          paragraphs: [
            "[Describe how you cleaned and queried the data with pandas and SQL, and what views or controls the app offers visitors.]"
          ],
          images: [
            { src: "assets/img/movies-1.jpg", caption: "[A screenshot of the main visualization.]" }
          ]
        },
        {
          heading: "Reflection",
          paragraphs: [
            "[What did you learn about working with large, messy data, or about designing visualizations people can explore on their own?]"
          ]
        }
      ]
    },
  
    {
      id: "campus-memory-cards",
      title: "A campus in 16 cards",
      question: "Can a map show how a place feels, not just where things are?",
      year: "[year]",
      categories: ["Art & storytelling"],
      cover: "assets/img/cards-cover.jpg",
      summary:
        "A set of 16 painted cards. Their backs piece together into a map of my campus; their fronts show places I hold memories of, in four art styles matched to four feelings.",
      role: "Artist",
      timeline: "[Semester or length]",
      team: "Solo",
      tools: ["Colored pencil", "Ink dot work", "Comic illustration", "Acrylic"],
      links: [],
      video: "",
      sections: [
        {
          heading: "About the project",
          paragraphs: [
            "I wanted to challenge what a map can be. The backs of the cards form a 4-by-4 map of campus, and each front shows a location that holds a personal memory, laid out like a poker card. Each suit uses a different style for a different emotional effect: messy colored-pencil doodles, black dot work, comic illustration, and acrylic. Academic and social places get different styles, so the way a place is drawn tells you how it feels.",
            "The project taught me how strongly visual style shapes what people feel and notice, which is the same question I ask when designing what an interface shows."
          ],
          images: [
            { src: "assets/img/map_whole_back.jpeg", caption: "The backs assembled into the campus map." },
            { src: "assets/img/nap_whole_front.jpeg", caption: "The front composes of stylized places that hold personal memories." },
          ]
        },
        {
          heading: "Progress",
          paragraphs: [
            ""
          ],
          images: [
            { src: "assets/img/map_detail_style.HEIC", caption: "Experimenting with dotted art to capture the preciseness of academic locations" },
            { src: "assets/img/map_detail_emotions.HEIC", caption: "Using messy doodles to capture corners of alone time" },
          ]
        }
      ]
    },
  
    {
      id: "chinese-character-animation",
      title: "Characters that come alive",
      question: "Can animation help anyone, whether or not they read Chinese, see the pictures inside common characters?",
      year: "In progress",
      categories: ["Art & storytelling"],
      cover: "assets/img/characters-cover.jpg",
      summary:
        "A frame-by-frame animation that reveals the pictographic origins of common Chinese characters, timed to music and sound effects.",
      role: "Animator",
      timeline: "Long-term, ongoing",
      team: "Solo",
      tools: ["Procreate", "Frame-by-frame animation", "Sound design"],
      links: [
        { label: "Watch the animation", url: "" } // [add a link]
      ],
      video: "",
      sections: [
        {
          heading: "About the project",
          paragraphs: [
            "Many common Chinese characters began as pictures. I wanted to share that quality in a way that's intuitive for any audience, with or without a background in the language. Animation lets a character transform from image to symbol in front of the viewer, which a still image can't do.",
            "I developed a distinct art style for the piece and experimented with aligning motion to music and sound effects, so the visuals and sound reinforce each other. [Add how many characters it covers so far, or a favorite example.]"
          ],
          images: [
            { src: "assets/img/characters-1.jpg", caption: "[Frames showing one character's transformation.]" }
          ]
        }
      ]
    },
  
    {
      id: "global-feminism-book",
      title: "A children's book for a fairer world",
      question: "How do you show values to children through actions instead of lecturing them?",
      year: "[year]",
      categories: ["Art & storytelling"],
      cover: "assets/img/book-cover.jpg",
      summary:
        "An illustrated children's book about a utopian society built on the values of global feminism.",
      role: "Illustrator and co-writer",
      timeline: "[Semester]",
      team: "Team of [number]",
      tools: ["Illustration", "Character design", "Storytelling"],
      links: [],
      video: "",
      sections: [
        {
          heading: "About the project",
          paragraphs: [
            "Our team imagined a society shaped by global feminism together. My teammates drafted the story, and I created all the illustrations and characters and refined the dialogue. Our biggest challenge was conveying abstract values without lecturing: showing them through characters' actions rather than stating them.",
            "We also thought carefully about our audience. We wanted it to feel like a book made for children, not a book made for a class."
          ],
          images: [
            { src: "assets/img/book-1.jpg", caption: "[A spread from the book.]" }
          ]
        }
      ]
    },
  
    {
      id: "consumer-culture-guide",
      title: "A guide to consumer culture in China",
      question: "What if an essay on consumer culture were written as a guide to fitting into it?",
      year: "[year]",
      categories: ["Art & storytelling"],
      cover: "assets/img/consumer-cover.jpg",
      summary:
        "An illustrated booklet that critiques consumer culture in China by presenting itself as a how-to guide.",
      role: "Writer, designer, and illustrator",
      timeline: "[Semester]",
      team: "Solo",
      tools: ["Editorial design", "Illustration", "Surveys"],
      links: [],
      video: "",
      sections: [
        {
          heading: "About the project",
          paragraphs: [
            "Instead of writing an essay, I designed a booklet that guides readers through the \"best practices\" of fitting into consumer culture, letting the format carry the critique. I drew on careful observation of everyday behavior, my own experiences, and survey responses, and turned them into visual explanations. I also challenged myself to design every page differently so the booklet never felt repetitive."
          ],
          images: [
            { src: "assets/img/consumer-1.jpg", caption: "[Selected pages.]" }
          ]
        }
      ]
    },
  
    {
      id: "metamorphosis",
      title: "Metamorphosis",
      question: "How far can an image change, one small step at a time, and still surprise you?",
      year: "[year]",
      categories: ["Art & storytelling"],
      cover: "assets/img/metamorphosis-cover.jpg",
      summary:
        "A looping series of 18 black-and-white comic-style drawings that gradually transform through themes from my life.",
      role: "Artist",
      timeline: "[Semester or length]",
      team: "Solo",
      tools: ["Comic illustration", "Ink"],
      links: [],
      video: "",
      sections: [
        {
          heading: "About the project",
          paragraphs: [
            "Each drawing changes slightly from the one before, transforming through themes from my life: basketball, my cultural identity, and my love of nature. I avoided obvious transitions and tried to surprise the viewer at each step. The final drawing loops back to the first, closing the circle."
          ],
          images: [
            { src: "assets/img/metamorphosis-1.jpg", caption: "[The full sequence of 18 drawings.]" }
          ]
        }
      ]
    },
  
    {
      id: "plant-diagrams",
      title: "Campus flowers, up close",
      question: "What can you learn about a flower by taking it apart?",
      year: "[year]",
      categories: ["Art & storytelling"],
      cover: "assets/img/plants-cover.jpg",
      summary:
        "Labeled scientific illustrations of flowers I collected on campus, dissected, and identified under the microscope.",
      role: "Illustrator and researcher",
      timeline: "[Semester]",
      team: "Solo",
      tools: ["Microscopy", "Dissection", "Scientific illustration"],
      links: [],
      video: "",
      sections: [
        {
          heading: "About the project",
          paragraphs: [
            "I collected flowers from around campus, dissected them, and studied their structure under the microscope to identify each species. I then sketched and labeled each one. Careful observation, looking closely before drawing conclusions, is a habit from biology that I bring to every user study."
          ],
          images: [
            { src: "assets/img/plants-1.jpg", caption: "[Selected labeled diagrams.]" }
          ]
        }
      ]
    }
  ];