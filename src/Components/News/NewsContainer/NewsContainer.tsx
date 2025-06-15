import { newsData, paginationData } from "@/utils/NewContainer";
import Image from "next/image";
export default function NewsContainer() {
    return (
        <section className="min-h-screen w-full flex flex-col items-center bg-[#010314] py-20">
            <div className="flex flex-wrap justify-center items-center gap-5 w-[85%]">
                {newsData.map((data, id) => (
                    <div
                        key={id}
                        className="h-[420px] w-[390px] flex flex-col rounded-[10px] overflow-hidden"
                    >
                        <div className="relative">
                            <Image
                                src={data.image!}
                                alt="news-image"
                                width={390}
                                height={200}
                                className="w-full h-[200px] object-cover"
                            />
                            <ul className="absolute top-2 right-2 flex gap-2">
                                {data.tags.map((tag, index) => (
                                    <li
                                        key={index}
                                        className="px-2 py-1 bg-[#22222254] text-white text-xs rounded-[25px]"
                                    >
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col justify-between gap-4 p-4 text-white">
                            <h6 className="text-sm text-[#aaa]">{data.date}</h6>
                            <h2 className="text-lg font-semibold">{data.title}</h2>
                            <p className="text-sm">{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex gap-4 mt-10 flex-wrap justify-center">
                {paginationData.map((item, index) => (
                    <button
                        key={index}
                        className={`px-6 py-3 border transition-all duration-200 text-sm max-sm:px-3 max-sm:py-2 max-sm:text-xs max-md:px-4 max-md:py-2 max-md:text-sm ${item.isActive
                                ? "bg-[#6366F1] text-white border-[#6366F1]"
                                : "text-white border-white hover:bg-white hover:text-black"
                            } rounded`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

        </section>
    );
}
