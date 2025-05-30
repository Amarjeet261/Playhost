import { game } from "@/utils/Collection";
import Image from "next/image";
import Link from "next/link";


export default function collection() {
  return (
    <section className="w-full min-h-[1100px] justify-center items-center flex bg-[url('/bg-GameCollection.webp')] bg-cover bg-center bg-fixed relative py-[20px]">
      <div className="w-full h-full bg-[#0e0d0d7e] absolute z-0 "></div>
      <div className="w-[85%] flex  flex-wrap text-white px-[14px]">
        {/* game-heading */}
        <p className="w-fit  border-white  border rounded-[12px] px-[10px] text-[18px] z-10">
          Most complete
        </p>
        <ul className="flex justify-between w-full  text-white z-10 gap-[10px]">
          <h2 className="text-[35px] --font-display">Game Collection</h2>
          <Link href="#">
            <button className="font-serif w-fit px-4 py-2 border-2 border-[#4F20C5] text-white hover:bg-[#4F20C5] rounded-[15px] hover:shadow-[0_0_10px_#4F20C5] transition">
              View All Games
            </button>
          </Link>
        </ul>
        {/* game-container */}
        <div className="w-full h-full flex flex-wrap gap-[20px] justify-center items-center mt-[15px]">
          {/* game-card */}
          {game.map((play , idx) => {
            return(
              <div key={idx} className="h-[400px] relative w-[300px] rounded-[12px] text-white hover:border-4 hover:border-[#4F20C5] transition-all duration-200 group overflow-hidden">
              <Image src={play.img} alt="g1"  fill sizes="100%" className="h-full w-full rounded-[12px] object-cover" />
              <h6 className="absolute bg-[#E615AF] px-[10px] w-fit h-fit rounded-[8px] right-3 top-2">{play.offer}</h6>

              <ul className="absolute w-full h-[100px] py-[20px] -bottom-7 flex flex-col gap-3 group-hover:gap-2 justify-center group-hover:bottom-4 rounded-b-[12px] transition-all duration-500 pl-[20px]">
                <h2 className="--font-sans font-[700] text-[20px]">{play.title}</h2>
                <p className="flex gap-x-[10px]">{play.subtitles}<span className="text-white w-fit px-[10px] py-[2px] rounded-[5px] bg-[#7547ebe3]  ">{play.price}</span></p>
                <Link href="#">
                  <button className="font-serif w-fit px-10 py-1 bg-[#4F20C5] text-white hover:bg-[#4F20C5] rounded-[5px] hover:shadow-[0_0_10px_#4F20C5] transition  ">
                    ORDER NOW
                  </button>
                </Link>
              </ul>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
