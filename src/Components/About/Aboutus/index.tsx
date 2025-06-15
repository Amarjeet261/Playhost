import Image from "next/image";

export default function Aboutus() {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center items-center bg-[#010314] py-10">
            {/* Main Container */}
            <div className="w-[85%] min-h-[450px] flex justify-between items-center max-lg:flex-col">
                
                {/* Left Image Section */}
                <div className="relative h-full w-[45%] flex justify-center items-center max-lg:w-full">
                    <Image
                        src="/building.webp"
                        alt="Building background"
                        width={500}
                        height={450}
                        className=""
                    />
                    <Image
                        src="/girl-ai.webp"
                        alt="AI girl illustration"
                        width={200}
                        height={280}
                        className="absolute left-[25%] -translate-x-1/2 -translate-y-[60%] z-10 max-lg:hidden"
                    />
                </div>

                {/* Right Text Section */}
                <div className="h-full w-[45%] flex flex-col justify-center items-center max-lg:w-full">
                    <div className="flex text-white w-[85%] flex-col gap-4 mt-12">
                        <p className="w-fit border-white border rounded-[12px] px-3 py-1 text-lg">We are Playhost</p>
                        <h2 className="text-[35px] font-display font-extrabold">The beginning</h2>
                        <p>
                            Lorem ipsum ea ut magna nisi amet reprehenderit eu adipisicing nisi incididunt est sint fugiat deserunt tempor ea culpa nostrud commodo deserunt et do ullamco non tempor veniam id culpa mollit veniam ut non adipisicing ad commodo laborum esse do sunt in cillum irure incididunt officia quis ut.
                        </p>
                    </div>

                    <div className="flex text-white w-[85%] mt-4 items-center gap-4">
                        <h4 className="text-[75px] font-display font-extrabold">25</h4>
                        <p className="w-[100px]">Years Experience Hosting</p>
                    </div>
                </div>
            </div>

            {/* Vision and Mission Section */}
            <div className="w-[85%] min-h-[400px] flex justify-center items-center max-lg:flex-col mt-16 gap-10">
                
                <div className="w-[45%] flex flex-col text-white max-lg:w-full">
                    <h2 className="text-[35px] font-display font-extrabold mb-4">Our Vision</h2>
                    <p>
                        Adipisicing pariatur dolor pariatur officia aliqua ex irure aliqua ut exercitation nulla exercitation esse duis do commodo exercitation sed exercitation aliquip fugiat. Dolor ad amet sed aliqua ad nisi anim fugiat dolor labore ex non amet id mollit amet id magna elit fugiat voluptate aliquip in est quis aliquip aliqua eu. Lorem ipsum irure sed nisi id aute exercitation fugiat.
                    </p>
                </div>

                <div className="w-[45%] flex flex-col text-white max-lg:w-full">
                    <h2 className="text-[35px] font-display font-extrabold mb-4">Our Mission</h2>
                    <p>
                        Adipisicing pariatur dolor pariatur officia aliqua ex irure aliqua ut exercitation nulla exercitation esse duis do commodo exercitation sed exercitation aliquip fugiat. Ut excepteur deserunt labore exercitation commodo exercitation minim aliquip in aliqua deserunt nulla aliquip officia ut eiusmod irure ullamco sunt sunt velit dolor ex. Enim eu proident in non officia culpa.
                    </p>
                </div>

            </div>
        </section>
    )
}
