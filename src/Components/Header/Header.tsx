"use client";
import Navbar from "../Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const headerData = [
  {
    img: "/1.webp",
    badge: "Servers Are Available",
    title: "Galactic Odyssey",
    subtitle:
      "Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.",
    priceLabel: "Starting at",
    price: "15.99",
    currency: "$",
    interval: "/monthly",
    buttonText: "ORDER YOUR GAME SERVER NOW",
  },
  {
    img: "/2.webp",
    badge: "Servers Are Available",
    title: "FUNK DUNGEON",
    subtitle:
      "Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.",
    priceLabel: "Starting at",
    price: "15.99",
    currency: "$",
    interval: "/monthly",
    buttonText: "ORDER YOUR GAME SERVER NOW",
  },
  {
    img: "/3.webp",
    badge: "Servers Are Available",
    title: "Cybernetic Realm",
    subtitle:
      "Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.",
    priceLabel: "Starting at",
    price: "15.99",
    currency: "$",
    interval: "/monthly",
    buttonText: "ORDER YOUR GAME SERVER NOW",
  },
  {
    img: "/4.webp",
    badge: "Servers Are Available",
    title: "Dungeon Master",
    subtitle:
      "Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.",
    priceLabel: "Starting at",
    price: "15.99",
    currency: "$",
    interval: "/monthly",
    buttonText: "ORDER YOUR GAME SERVER NOW",
  },
];

export default function Header() {
  return (
    <section className="relative w-full flex flex-col">
      <Navbar />
      <div className="relative h-[730px] w-full">
        <Swiper
          slidesPerView={1}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="w-full h-full"
        >
          {headerData.map((data, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full">
                {/* Background Image */}
                <Image
                  src={data.img}
                  alt={data.title}
                  fill
                  className="object-cover object-center"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#00000084] z-10" />

                {/* Slide Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-10 md:px-20 text-white">
                  <h2 className="w-fit mb-4 px-4 py-1 rounded-full border border-white text-sm font-semibold bg-black/50">
                    {data.badge}
                  </h2>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
                    {data.title}
                  </h1>
                  <p className="max-w-xl text-base sm:text-lg mb-6">
                    {data.subtitle}
                  </p>
                  <div className="text-xl sm:text-2xl font-medium mb-2">{data.priceLabel}</div>
                  <div className="text-4xl sm:text-5xl font-extrabold flex items-end gap-2 mb-6">
                    <span className="text-[#5D5FEF]">{data.currency}</span>
                    {data.price}
                    <span className="text-base font-medium text-[#5D5FEF]">{data.interval}</span>
                  </div>
                  <button className="w-fit bg-[#5D5FEF] hover:shadow-[0_0_10px_#4F20C5] text-white px-6 py-3 rounded font-bold text-sm transition">
                    {data.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
