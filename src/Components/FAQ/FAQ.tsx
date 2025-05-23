"use client";
import { faqData, faqDataTwo } from "@/utils/FAQ";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

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
