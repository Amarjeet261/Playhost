export interface FaqItem {
  ques: string;
  ans: string;
}

export const faqData: FaqItem[] = [
  {
    ques: "What is game hosting?",
    ans: "Game hosting refers to the process of renting or setting up servers to run multiplayer online games. These servers allow players to connect and play together in the same game world.",
  },
  {
    ques: "How do I manage a game server?",
    ans: "Game server management varies depending on the hosting provider and game type. Typically, you'll have access to a control panel or command-line interface to configure settings, mods, and player access.",
  },
  {
    ques: "Why do I need game hosting?",
    ans: "Game hosting is essential for multiplayer gaming. It provides a dedicated server where players can join, ensuring a smooth and lag-free gaming experience. It also allows you to customize game settings and mods.",
  },
  {
    ques: "Can I run mods on my game server?",
    ans: "Yes, many game hosting services support modding. You'll usually be able to upload mods via FTP or use a control panel provided by the host.",
  },
  {
    ques: "How do I choose a game hosting provider?",
    ans: "Consider factors like server location, performance, scalability, customer support, and price when choosing a game hosting provider. Read reviews and ask for recommendations from fellow gamers.",
  },
];

export const faqDataTwo: FaqItem[] = [
  {
    ques: "What is DDoS protection, and do I need it?",
    ans: "DDoS protection helps defend your game server from malicious attacks that could disrupt gameplay. It's essential for maintaining server stability, especially for popular games.",
  },
  {
    ques: "What types of games can I host?",
    ans: "You can host various types of games, including first-person shooters, RPGs, survival games, and strategy games. Requirements vary per game.",
  },
  {
    ques: "How much does game hosting cost?",
    ans: "Game hosting costs vary. Shared servers may be as low as $5/month, while dedicated servers can cost hundreds, depending on specs and provider.",
  },
  {
    ques: "What is server latency or ping?",
    ans: "Server latency or ping is the time it takes for data to travel from your device to the server and back. Lower latency means smoother gameplay.",
  },
  {
    ques: "Is there 24/7 customer support?",
    ans: "Most reputable providers offer 24/7 customer support, but always check service guarantees and response times.",
  },
];