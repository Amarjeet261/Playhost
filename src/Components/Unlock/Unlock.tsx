"use client";
import Link from "next/link";
import Image from "next/image";

export default function Unlock() {
  return (
    <section className="w-full h-screen flex justify-center items-center bg-[#010314]">
      <div className="relative w-[85%] h-[500px] bg-[#23222292] overflow-hidden rounded-lg shadow-lg">
        
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/unlock.webp')] bg-cover bg-center bg-fixed opacity-65 z-10" />

        {/* Left Container */}
        <div className="relative z-20 h-full w-[50%]  flex flex-col justify-center gap-4 text-white px-[20px] max-sm:w-full ">
          <h3 className="w-fit border border-white rounded-xl px-4 py-1 text-sm"> Start your game </h3>
          <h2 className="text-2xl md:text-4xl font-serif leading-tight"> Unlock Your Gaming Full Potential
          </h2>
          <p className="text-gray-400  w-full "> Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore id do eiusmod. Lorem ipsum non labore. </p>
          <Link href="#">
            <button className="font-serif w-fit px-4 py-2 border-2 border-[#4F20C5] text-white hover:bg-[#4F20C5] rounded-[15px] hover:shadow-[0_0_10px_#4F20C5] transition">
              ORDER YOUR GAME SERVER NOW
            </button>
          </Link>
        </div>

        {/* Right Container */}
        <div className=" absolute bottom-0 right-0 z-20 max-sm:hidden">
          <Image src="/avatar.webp" alt="Avatar"  width={300}  height={500} className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
