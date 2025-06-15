import { gameHelpData } from "@/utils/SubFaq";
import Image from "next/image";
import Link from "next/link";

export function Faqs() {
  return (
    <section className="min-h-screen w-full flex justify-center  items-center bg-[#010314] py-[55px]">
      <div className="w-[90%] flex justify-center items-center text-white flex-wrap gap-[20px]">
        {gameHelpData.map((game, idx) => {
          const Icon = game.icon;
          return (
            <div
              key={idx}
              className="h-[150px] w-[400px] bg-[#111827] border border-gray-700 rounded-2xl shadow-lg px-4 flex flex-col justify-center py-[50px] max-lg:w-[300px]  max-md:w-[230px]"
            >
              <div className="flex flex-col justify-start group">
                <Icon
                  size={60}
                  className="fill-[#2c2c2c] text-[#111827] group-hover:fill-white transition-all duration-300 max-sm:w-[50px]"
                />
                <h2 className="text-[30px] font-semibold max-lg:text-[18px]">
                  {game.title}
                  <span className="mt-auto text-[30px] text-indigo-300">
                    {game.count}
                  </span>
                </h2>
                <p className="text-sm text-gray-400 mt-2 ">{game.helpText}</p>
              </div>
            </div>
          );
        })}
        <div className="w-[90%] h-[180px] flex justify-between px-[20px] py-10 items-center flex-wrap rounded-[15px] bg-[url('/subheader-contact.webp')] bg-center bg-cover max-sm:justify-center  ">
        <div className=" flex justify-center items-center flex-wrap">
          <Image
            src="/icon-4.png"
            alt="Customer support icon"
            width={40}
            height={40}
            className="w-[40px] h-[40px]"
          />
          <h2 className="text-white">Cannot find answer? Contact our customer support now.</h2>
        </div>

        <Link
          href="/contact"
          aria-label="Contact customer support"
          className="font-serif w-[200px] py-[7px] bg-[#4F20C5] text-white border-2 border-[#4F20C5] hover:bg-[#3e1aa1] rounded-[5px] hover:shadow-[0_0_10px_#4F20C5] cursor-pointer max-lg:text-sm text-center block"
        >
          Contact Us
        </Link>
      </div>
      </div>
    </section>
  );
}
