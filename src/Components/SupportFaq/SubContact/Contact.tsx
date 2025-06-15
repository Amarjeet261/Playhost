import Image from "next/image";
import Link from "next/link";

export default function Contact(){
    return(
        <section className="w-full h-[300px] flex justify-center items-center bg-[#010314]">
            <div className="w-[85%] h-[180px] flex justify-between px-[20px] items-center flex-wrap rounded-[15px] bg-[url('/subheader-contact.webp')] bg-center bg-cover max-sm:flex-col  max-sm:justify-center">
        <div className="flex justify-center gap-[20px] items-center flex-wrap ">
          <Image
            src="/icon-4.png"
            alt="Customer support icon"
            width={40}
            height={40}
            className="w-[40px] h-[40px]"
          />
          <h2 className="text-white">Cannot find answer? Contact our customer support now.</h2>
        </div>
        <Link
          href="/contact"
          aria-label="Contact customer support"
          className="font-serif w-[200px] py-[7px] bg-[#4F20C5] text-white border-2 border-[#4F20C5] hover:bg-[#3e1aa1] rounded-[5px] hover:shadow-[0_0_10px_#4F20C5] cursor-pointer max-lg:text-sm text-center block"
        >
          Contact Us
        </Link>

      </div>
        </section>
    )
}