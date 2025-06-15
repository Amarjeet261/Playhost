import { MoveRight } from "lucide-react";

export default function Header() {
  return (
    <section className="h-[450px] w-full flex justify-center items-center  bg-[url('/space.webp')] bg-cover bg-center">
      {/* {main-Container} */}
      <div className="w-[90%] h-full flex justify-center items-center">
        <div className="flex flex-col  gap-2 justify-center items-center text-white ">
            <p className="w-fit border-white border rounded-[12px] px-[10px] text-[18px]">
              Information center
            </p>
            <h2 className="text-[35px]  --font-display">
             Knowledgebase
            </h2>
            <div className=" w-[600px] h-[50px] flex justify-center items-center">
              <input type="text" className="h-full w-[520px] bg-[#ffffff1f] outline-none rounded-l-[20px] px-[20px] max-sm:w-[300px]" placeholder="Enter your Question here "/>
              <div className="w-[80px] h-full rounded-r-[20px]  flex justify-center items-center bg-[#6A79FA]">
                <MoveRight />
              </div>
            </div>
            <p className="">*eg. server setup, change hosting plan</p>
        </div>
      </div>
    </section>
  );
}
