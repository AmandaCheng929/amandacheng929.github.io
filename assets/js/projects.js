/* =========================================================
   EDIT THIS FILE to change your site's content.
   You never need to touch the HTML to add a project:
   copy one project block below, change the text, and
   drop your images into assets/img/.
   ========================================================= */

const SITE = {
  name: "Your Name",
  statement:
    "I design and build interactive systems, from games to robots, and study how people make sense of them.",
  intro:
    "I'm a [your major] student at [your school] applying to graduate programs in human-computer interaction and human-robot interaction. My work moves between painting, game design and physical prototyping, and it keeps returning to one question: how do people form trust and intuition around machines?",
  email: "you@example.edu",
  cv: "assets/cv.pdf", // put your CV PDF in assets/ with this name
  links: [
    { label: "GitHub", url: "https://github.com/yourusername" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yourprofile" },
    { label: "Google Scholar", url: "" } // leave url empty to hide a link
  ],
  photo: "assets/img/portrait.svg",
  about: [
    "Write two or three short paragraphs here. Start with what drives your work, not your resume. Admissions readers want to know what questions you care about and why.",
    "Then connect your background to HCI and HRI. If painting taught you how people read form and color, or game design taught you how to test with players, say so plainly. Those links are what make an interdisciplinary background read as a strength."
  ],
  interests: [
    "Trust and legibility in human-robot collaboration",
    "Tangible and embodied interaction",
    "Playtesting and game design as research methods",
    "Accessible interface design"
  ],
  skills: {
    "Research methods": ["Usability testing", "Semi-structured interviews", "Wizard-of-Oz studies", "Thematic analysis"],
    "Making": ["Arduino", "3D printing", "Laser cutting", "Acrylic painting"],
    "Code and tools": ["Python", "Unity / C#", "JavaScript", "Figma", "ROS (basic)"]
  }
};

/* ---------------------------------------------------------
   PROJECTS
   Order here = order on the home page. Put your strongest
   and most HCI/HRI-relevant work first.

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
    id: "robot-handoff",
    title: "Readable robot handoffs",
    question: "Can a robot arm signal its intent clearly enough that people feel safe taking an object from it?",
    year: "2025",
    categories: ["Human-robot interaction", "Prototypes"],
    cover: "assets/img/handoff-cover.svg",
    summary:
      "Example project. Replace with a one-to-two sentence summary of what you built and what you found.",
    role: "Designer and researcher",
    timeline: "Jan to May 2025, 16 weeks",
    team: "Solo, advised by [Professor name]",
    tools: ["Arduino", "Servo arm kit", "Wizard-of-Oz", "Interviews"],
    links: [
      { label: "Watch the demo", url: "" },
      { label: "Read the report (PDF)", url: "" }
    ],
    video: "",
    sections: [
      {
        heading: "Context",
        paragraphs: [
          "What problem or observation started this? Who is affected? Keep it to a short paragraph and be concrete: a moment you noticed, a gap in existing work, a class prompt you pushed further."
        ]
      },
      {
        heading: "Process",
        paragraphs: [
          "Show how you worked, not just the result. Reviewers want to see you form a question, try something, test it with people and change course.",
          "Include sketches, failed versions and what each iteration taught you."
        ],
        images: [
          { src: "assets/img/handoff-1.svg", caption: "Early motion sketches for three signaling strategies." },
          { src: "assets/img/handoff-2.svg", caption: "Study setup with eight participants." }
        ]
      },
      {
        heading: "Outcome",
        paragraphs: [
          "What did you make and what happened when people used it? Use real numbers if you have them (\"6 of 8 participants...\"), and quotes from participants if they're telling."
        ]
      },
      {
        heading: "Reflection",
        paragraphs: [
          "What would you do differently, and what question does this open up for graduate study? This section is where you sound like a future researcher."
        ]
      }
    ]
  },

  {
    id: "accessible-kiosk",
    title: "Kiosk for low-vision users",
    question: "How might a public kiosk work for someone who can't read the screen?",
    year: "2024",
    categories: ["Interaction design"],
    cover: "assets/img/kiosk-cover.svg",
    summary: "Example project. Replace with your own.",
    role: "UX designer",
    timeline: "Fall 2024, 10 weeks",
    team: "Team of 3",
    tools: ["Figma", "Paper prototyping", "Usability testing"],
    links: [],
    sections: [
      { heading: "Context", paragraphs: ["Describe the problem."] },
      {
        heading: "Process",
        paragraphs: ["Describe how you worked."],
        images: [{ src: "assets/img/kiosk-1.svg", caption: "Paper prototype used in the first round of testing." }]
      },
      { heading: "Outcome", paragraphs: ["Describe the result."] },
      { heading: "Reflection", paragraphs: ["What you learned."] }
    ]
  },

  {
    id: "coop-game",
    title: "Signal: a co-op game without words",
    question: "Can two players coordinate using only gestures from their avatars?",
    year: "2024",
    categories: ["Game design"],
    cover: "assets/img/coop-cover.svg",
    summary: "Example project. Replace with your own.",
    role: "Game designer and programmer",
    timeline: "Spring 2024, 8 weeks",
    team: "Team of 4",
    tools: ["Unity", "C#", "Playtesting"],
    links: [{ label: "Play on itch.io", url: "" }],
    sections: [
      { heading: "Context", paragraphs: ["Describe the design goal."] },
      {
        heading: "Process",
        paragraphs: ["Playtests are user studies. Describe how many you ran and what changed after each."],
        images: [{ src: "assets/img/coop-1.svg", caption: "Notes from the third playtest." }]
      },
      { heading: "Outcome", paragraphs: ["Describe the result."] },
      { heading: "Reflection", paragraphs: ["What you learned."] }
    ]
  },

  {
    id: "tangible-controller",
    title: "Squeeze controller",
    question: "What does a controller feel like when pressure, not buttons, is the input?",
    year: "2023",
    categories: ["Prototypes", "Interaction design"],
    cover: "assets/img/controller-cover.svg",
    summary: "Example project. Replace with your own.",
    role: "Maker",
    timeline: "6 weeks",
    team: "Solo",
    tools: ["Force sensors", "Arduino", "3D printing"],
    links: [],
    sections: [
      { heading: "Context", paragraphs: ["Describe the idea."] },
      {
        heading: "Process",
        paragraphs: ["Show the iterations side by side."],
        images: [{ src: "assets/img/controller-1.svg", caption: "Four iterations of the enclosure." }]
      },
      { heading: "Reflection", paragraphs: ["What you learned."] }
    ]
  },

  {
    id: "companion-robot",
    title: "Companion robot concept",
    question: "What should a home robot look like so that older adults read it as helpful, not intrusive?",
    year: "2023",
    categories: ["Human-robot interaction", "Art"],
    cover: "assets/img/companion-cover.svg",
    summary: "Example project. Replace with your own.",
    role: "Concept designer",
    timeline: "4 weeks",
    team: "Solo",
    tools: ["Sketching", "Clay modeling", "Interviews"],
    links: [],
    sections: [
      { heading: "Context", paragraphs: ["Describe the idea."] },
      { heading: "Process", paragraphs: ["Describe how you worked."] },
      { heading: "Reflection", paragraphs: ["What you learned."] }
    ]
  },

  {
    id: "paintings",
    title: "Acrylic series",
    question: "How do color and composition change where a viewer looks first?",
    year: "2022 to 2024",
    categories: ["Art"],
    cover: "assets/img/paintings-cover.svg",
    summary: "Example project. Replace with your own.",
    role: "Artist",
    timeline: "Ongoing",
    team: "Solo",
    tools: ["Acrylic on canvas"],
    links: [],
    sections: [
      {
        heading: "About the series",
        paragraphs: ["Art projects can be shorter. One paragraph, then let the images do the work. If the work connects to perception or attention, say so: it ties your art to HCI."],
        images: [{ src: "assets/img/paintings-1.svg", caption: "Title, year, dimensions." }]
      }
    ]
  }
];
