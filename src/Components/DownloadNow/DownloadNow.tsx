import { down, img } from "@/utils/DownloadNow";
import Image from "next/image";

export default function DownloadNow() {


  return (
    <section className="w-full bg-[#010314] flex flex-col items-center justify-center">
      {/* Download Section */}
      <div className="w-[90%] h-[550px] bg-[url('/download1.webp')] bg-cover bg-center rounded-2xl shadow-lg flex relative my-8 ">
        {/* Left Section */}
        <div className="w-1/2 h-full flex flex-col justify-center px-8 z-10 text-white max-md:w-full">
          <button className="text-white border border-white px-6 py-2 rounded-full mb-4 w-max">
            {down.title}
          </button>
          <h2 className="text-4xl font-bold leading-tight p-2 w-full text-white rounded-md mb-4">
            {down.subtitle}
          </h2>
          <p className="text-gray-300 mb-6">{down.description}</p>
          <div className="flex gap-4">
            <Image
              src={down.appStoreImg}
              alt="App Store"
              width={140}
              height={45}
            />
            <Image
              src={down.playStoreImg}
              alt="Google Play"
              width={140}
              height={45}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 h-full flex justify-center items-end z-10 max-md:hidden">
          <Image
            src={down.heroImg}
            alt="User with phone"
            width={300}
            height={600}
            className="object-contain"
          />
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="w-[85%] flex items-center justify-between bg-[#010314] mt-10 py-8 px-4 text-white max-md:flex-col">
          <div className="mb-6  max-md:justify-start max-md:w-full ">
            <div className="border border-white text-white px-4 py-1 rounded-full text-sm w-max mb-3 ">
              Payment Methods
            </div>
            <h2 className="text-3xl font-bold w-full">We accept</h2>
          </div>
        <div className="flex flex-wrap justify-center gap-4  max-md:w-full">
          {img.map((card, idx) => (
            <div  key={idx} className="w-fit px-[10px] py-[5px] bg-[#0E1020] rounded-[10px]">
              <Image
                src={card}
                alt={`Payment method ${idx + 1}`}
                width={60}
                height={40}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
