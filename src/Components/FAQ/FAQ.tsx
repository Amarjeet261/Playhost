"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FaqItem {
  ques: string;
  ans: string;
}

const faqData: FaqItem[] = [
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

const faqDataTwo: FaqItem[] = [
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

export default function FAQ() {
  const [activeIndexLeft, setActiveIndexLeft] = useState<number | null>(null);
  const [activeIndexRight, setActiveIndexRight] = useState<number | null>(null);

  const toggleLeft = (index: number) => {
    setActiveIndexLeft(activeIndexLeft === index ? null : index);
  };

  const toggleRight = (index: number) => {
    setActiveIndexRight(activeIndexRight === index ? null : index);
  };

  return (
    <section className="min-h-screen w-full bg-[#010314] flex flex-col justify-center items-center gap-5 py-10">
      {/* Heading */}
      <div className="flex flex-col gap-2 w-[85%] px-3 text-white">
        <p className="w-fit border border-white rounded-[12px] px-[10px] text-[18px]">
          Do you have
        </p>
        <h2 className="text-[35px] font-[700]">Any questions?</h2>
      </div>

      {/* FAQ Grid */}
      <div className="flex flex-col lg:flex-row gap-10 w-[85%] justify-center items-start">
        {/* Left Column */}
        <div className="w-full lg:w-[620px] flex flex-col gap-5">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="w-full px-4 py-4 flex flex-col gap-2 text-white rounded-[10px] bg-[#111123]"
            >
              <p
                className="flex justify-between items-center cursor-pointer font-[600] text-[18px]"
                onClick={() => toggleLeft(index)}
              >
                {item.ques}
                <span
                  className={`bg-[#5A36DF] rounded-[5px] p-1 transition-transform duration-300 ${
                    activeIndexLeft === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown size={18} />
                </span>
              </p>
              {activeIndexLeft === index && (
                <p className="text-[14px] text-white">{item.ans}</p>
              )}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[620px] flex flex-col gap-5">
          {faqDataTwo.map((item, index) => (
            <div
              key={index}
              className="w-full px-4 py-4 flex flex-col gap-2 text-white rounded-[10px] bg-[#111123]"
            >
              <p
                className="flex justify-between items-center cursor-pointer font-[600] text-[18px]"
                onClick={() => toggleRight(index)}
              >
                {item.ques}
                <span
                  className={`bg-[#5A36DF] rounded-[5px] p-1 transition-transform duration-300 ${
                    activeIndexRight === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown size={18} />
                </span>
              </p>
              {activeIndexRight === index && (
                <p className="text-[14px] text-white">{item.ans}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
