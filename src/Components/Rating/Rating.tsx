"use client";

import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

// ✅ Import proper Swiper type
import { Swiper as SwiperType } from "swiper";

interface RatingItem {
  rating: number;
  para: string;
  img: string;
  name: string;
}

export default function Rating() {
  const navigationPrevRef = useRef<HTMLDivElement | null>(null);
  const navigationNextRef = useRef<HTMLDivElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (
      swiperInstance &&
      navigationPrevRef.current &&
      navigationNextRef.current
    ) {
      swiperInstance.params.navigation = {
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      };
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const RatingData: RatingItem[] = [
    {
      rating: 5,
      para: "The flexibility Playhost offers is incredible. I can easily switch between game servers or even host multiple games on the same plan. It&apos;s a gamer's dream come true!",
      img: "/testimonial1.jpg",
      name: "Edward B.",
    },
    {
      rating: 4.5,
      para: "I've been a loyal customer of Playhost for years now. Their dedication to keeping their hardware up-to-date ensures my gaming experience is always optimal.",
      img: "/testimonial2.jpg",
      name: "Daniel H.",
    },
    {
      rating: 5,
      para: "When our community needed a reliable server for our esports tournaments, we turned to Playhost, and they've never let us down. Their servers are perfect for competitive gaming.",
      img: "/testimonial3.jpg",
      name: "Bryan G.",
    },
    {
      rating: 4,
      para: "The DDoS protection from Playhost is a lifesaver. We used to get attacked regularly, but since switching to their servers, we haven't had any downtime.",
      img: "/testimonial4.jpg",
      name: "Michael S.",
    },
    {
      rating: 5,
      para: "Running a game server used to be a hassle, but Playhost makes it easy. The control panel is user-friendly, and I love how they handle server maintenance and updates.",
      img: "/testimonial5.jpg",
      name: "Robert L.",
    },
    {
      rating: 5,
      para: "I've tried several hosting providers in the past, and Playhost is by far the best. Their server performance is top-notch, and I've never experienced lag while playing with friends.",
      img: "/testimonial6.jpg",
      name: "Jake M.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#010314] flex flex-col items-center justify-center py-10">
      <div className="w-[85%] text-white mb-6 px-[20px]">
        <h3 className="w-fit border border-white rounded-[12px] px-[10px] py-[5px] text-[18px]">
          Customer reviews
        </h3>
        <h2 className="text-[35px] font-sans">4.85 out of 5</h2>
      </div>

      <div className="w-[95%]">
        <div className="relative flex justify-center items-center py-[20px]">
          <Swiper
            onSwiper={setSwiperInstance}
            slidesPerView={3}
            spaceBetween={30}
            loop
            pagination={{ clickable: true }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            modules={[Pagination, Navigation]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 50 },
            }}
            className="w-[86%] h-fit"
          >
            {RatingData.map((item, idx) => (
              <SwiperSlide key={idx} className="flex justify-center pb-20">
                <div className="flex flex-col border rounded-[10px] h-[300px] w-[380px] p-[10px] gap-[5px] max-sm:w-[280px]">
                  <div className="flex gap-2">
                    {Array.from({ length: Math.floor(item.rating) }).map(
                      (_, ratingIndex) => (
                        <Star
                          key={ratingIndex}
                          className="text-yellow-500 w-[15px] fill-amber-500"
                        />
                      )
                    )}
                    {item.rating % 1 !== 0 && (
                      <StarHalf className="text-yellow-500 w-[15px] fill-amber-500" />
                    )}
                  </div>
                  <p className="text-gray-400 text-[18px]">{item.para}</p>
                  <div className="flex items-center gap-[10px] mt-2">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <span className="text-[16px] font-semibold text-white">
                      {item.name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div
            ref={navigationPrevRef}
            className="absolute w-[50px] h-[50px] flex justify-center items-center rounded-full top-1/2 left-[10px] transform -translate-y-1/2 cursor-pointer bg-white shadow z-50"
          >
            <ChevronLeft />
          </div>
          <div
            ref={navigationNextRef}
            className="absolute w-[50px] h-[50px] flex justify-center items-center rounded-full top-1/2 right-[10px] transform -translate-y-1/2 cursor-pointer bg-white shadow z-50"
          >
            <ChevronRight />
          </div>
        </div>
      </div>
    </section>
  );
}
