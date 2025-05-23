import Image from "next/image";

export default function Features() {
  interface data {
    icon: string;
    heading: string;
    para: string;
  }
  const featData: data[] = [
    {
      icon: "/icon1.png",
      heading: "Super Quick Setup",
      para: "Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.",
    },
    {
      icon: "icon2.png",
      heading: "Premium Hardware",
      para: "Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.",
    },
    {
      icon: "icon3.png",
      heading: "DDos Protection",
      para: "Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.",
    },
    {
      icon: "icon.4.png",
      heading: "Fast Support",
      para: "Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.",
    },
  ];
  return (
    <section className="min-h-[400px] w-full flex flex-col justify-center items-center bg-[#010314] ">
      {/* Heading */}
      <ul className="flex text-white w-[85%] flex-col gap-[10px] mt-[50px]">
        <p className="w-fit border-white border rounded-[12px] px-[10px] text-[18px]"> Incredibly features </p>
        <h2 className="text-[35px]  --font-display"> Premium Game Server</h2>
      </ul>
      {/* featdata-container */}
      <div className="flex w-[85%] flex-wrap mt-[30px] gap-[20px] justify-center">
        {/* featData */}
        {featData.map((feat, idx) => {
          return (
            <div key={idx} className="w-[300px] h-[200px] flex flex-col justify-evenly text-white  px-[10px]">
              <Image src={feat.icon} alt="" className="h-[35px] w-[35px]" />
              <h2 className="text-[22px] --font-display">{feat.heading}</h2>
              <p className="">{feat.para}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
