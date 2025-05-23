import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { navData } from "@/utils/Navbar";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <nav
      className={`h-[70px] w-full fixed top-0 z-[99] flex justify-center items-center transition-colors duration-300  ${
        scrolled ? "bg-[#010314] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-[85%] h-full flex justify-between items-center p-[5px]">
        {/* logo */}
       <Image src="/logo.png" alt="Playhost Logo" width={200} height={90} />

        {/* nav links */}
        <div className="flex gap-6 max-lg:hidden">
          {navData.map((data, idx) => (
            <div key={idx} className="relative group text-white cursor-pointer">
              <div className="flex items-center gap-1">
                {data.anker}
                {<ChevronDown size={16} className="text-[#5627D9]" />}
              </div>

              {/* dropdown on hover */}
              {data.submenu.length > 0 && (
                <div className="absolute top-[100%] mt-2 w-48 bg-[#0e0e0e] shadow-lg rounded z-50  group-hover:block group-hover:translate-y-1 transition-all duration-200 hidden">
                  {data.submenu.map((item, subIdx) => (
                    <Link
                      href="#"
                      key={subIdx}
                      className="block px-4 py-2 text-sm hover:bg-[#1e1e1e] text-white"
                    >
                      {subIdx === 5 && data.anker === "Game Servers" ? (
                        <span className="flex justify-between items-center">
                          {item}
                          <span className="text-[10px] bg-purple-600 text-white px-1 py-[1px] rounded font-bold">
                            NEW
                          </span>
                        </span>
                      ) : (
                        item
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* get hosting button */}
      <button>
  <Link
    href="#"
    className="font-serif px-[10px] py-[7px] border-[#4F20C5] border-2 text-white hover:bg-[#4F20C5] rounded-[5px] hover:shadow-[0_0_10px_#4F20C5] cursor-pointer max-lg:text-sm"
  >
    GETHOSTING
  </Link>
</button>

      </div>
    </nav>
  );
}
