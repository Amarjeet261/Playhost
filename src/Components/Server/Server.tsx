import Image from "next/image";
import Link from "next/link";
interface area{
    location:string,
}
const data :area[] =[
    {location:"London, England",},
    {location:"Paris, France",},
    {location:"Frankut, Germany",},
    {location:"Amsterdam, Netherlands",},
    {location:"Stockholm, Sweden",},
    {location:"Helsinki, Finland",},
    {location:"Los Angeles, USA",},
]

export default function Server(){
    return(
        <section className="min-h-[500px] w-full flex justify-center items-center bg-[#010314] py-[40px]">
            <div className="w-[85%] h-[70%] flex justify-center gap-[20px] items-center max-lg:flex-col">
                {/* left-container */}
                <div className="h-full w-[48%] flex justify-center items-center p-2">
                    <Image src="/server.webp" alt="Avatar"  width={700}  height={0} className="object-contain   " />
                </div>
                {/* right-container */}
                <div className="h-full w-[48%] flex flex-col justify-center gap-[4px] text-white max-lg:w-full">
                <h3 className="w-fit border-white border rounded-[12px] px-[10px] py-[3px] text-[18px] ">Server locations</h3>
                <h2 className="text-[40px] w-[500px] font-[700] --font-sans"><span className="text-[#635CEF]">25</span>servers available worldwide for your game.</h2>
                <p className=" w-[550px] text-[15px] text-gray-500 --font-mono max-lg:w-full ">Our collection of game server hosting options encompasses the most in-demand platforms of today. Within our offerings, you'll discover an extensive array of specialized tools and features tailored to each game, all of which we diligently keep up to date in sync with game and mod updates.</p>
                <ul className="flex flex-wrap gap-2 mt-3">
                    {data.map((loc , idx) => {
                        return(
                            <h3 key={idx} className="w-fit border border-white rounded-xl px-4 py-1 text-[16]">{loc.location}</h3>
                        )
                    })}
                <Link href={"#"} className="w-fit border-white border rounded-[12px] px-4 py-1 text-[16px] text-[#635CEF]">View all available server</Link>
                </ul>
                </div>
            </div>
        </section>
    )
}