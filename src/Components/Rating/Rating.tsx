"use client";

import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

import { Swiper as SwiperType } from "swiper";
import { RatingData } from "@/utils/Rating";

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
    const navigation = swiperInstance.params.navigation;

    // ✅ Check if it's an object (not `true`)
    if (
      navigation &&
      typeof navigation === "object" &&
      swiperInstance.navigation
    ) {
      navigation.prevEl = navigationPrevRef.current;
      navigation.nextEl = navigationNextRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }
}, [swiperInstance]);


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
            navigation={true} // ✅ Let Swiper handle navigation until refs are updated
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
