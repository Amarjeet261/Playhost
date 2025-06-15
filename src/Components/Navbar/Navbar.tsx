"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { navData } from "@/utils/Navbar";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = useCallback((index: number) => {
    setOpenSubmenu((prev) => (prev === index ? null : index));
  }, []);

  return (
    <nav
      className={`fixed top-0 z-[99] w-full h-[70px] flex justify-center items-center transition-colors duration-300 ${
        scrolled ? "bg-[#010314] shadow-md" : "bg-transparent"
      }`}
    >
      <section className="w-[85%] h-full flex justify-between items-center p-[5px] relative">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Playhost Logo" width={200} height={90} />
        </Link>

        {/* Desktop Navigation */}
        <div className="gap-6 hidden lg:flex text-white">
          {navData.map((data, idx) => (
            <div key={idx} className="relative group cursor-pointer">
              <Link
                href={data.link}
                className="flex items-center gap-1 h-[60px]"
              >
                {data.anker}
               <span>
                 {data.submenu.length > 0 && (
                  <ChevronDown size={16} className="text-[#5627D9]" />
                )}
               </span>
              </Link>

              {data.submenu.length > 0 && (
                <div className="absolute top-11 mt-2 w-48 bg-[#0e0e0e] shadow-lg rounded z-50 group-hover:block hidden transition-all duration-200">
                  {data.submenu.map((item, subIdx) => (
                    <Link
                      key={subIdx}
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-[#1e1e1e] text-white"
                    >
                      {subIdx === 5 && data.anker === "Game Servers" ? (
                        <span className="flex justify-between items-center">
                          {item.label}
                          <span className="text-[10px] bg-purple-600 text-white px-1 py-[1px] rounded font-bold ml-2">
                            NEW
                          </span>
                        </span>
                      ) : (
                        item.label
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        {!mobileMenuOpen && (
          <div className="lg:hidden text-white z-[100]">
            <button onClick={() => setMobileMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        )}

        {/* Get Hosting Button (desktop only) */}
        <Link
          href="#"
          className="font-serif px-[10px] py-[7px] border-[#4F20C5] border-2 text-white hover:bg-[#4F20C5] rounded-[5px] hover:shadow-[0_0_10px_#4F20C5] cursor-pointer max-lg:text-sm hidden lg:block"
        >
          GETHOSTING
        </Link>
      </section>

      {/* Mobile Menu Slide-in from Right */}
      <div
        className={`fixed top-0 right-0 h-screen w-[75%] max-w-[320px] bg-[#0e0e0e] z-[98] p-6 space-y-4 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={() => setMobileMenuOpen(false)}>
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Navigation Items */}
        {navData.map((data, idx) => (
          <div key={idx} className="text-white">
            <div
              className="flex justify-between items-center cursor-pointer py-2"
              onClick={() => toggleSubmenu(idx)}
            >
              <span>{data.anker}</span>
              {data.submenu.length > 0 && <ChevronDown size={18} />}
            </div>

            {openSubmenu === idx && data.submenu.length > 0 && (
              <div className="mt-2 pl-4 space-y-2">
                {data.submenu.map((item, subIdx) => (
                  <Link
                    key={subIdx}
                    href={item.href}
                    className="block text-sm hover:text-indigo-400"
                  >
                    {subIdx === 5 && data.anker === "Game Servers" ? (
                      <span className="flex justify-between items-center">
                        {item.label}
                        <span className="text-[10px] bg-purple-600 text-white px-1 py-[1px] rounded font-bold ml-2">
                          NEW
                        </span>
                      </span>
                    ) : (
                      item.label
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Mobile Hosting Button */}
        <Link
          href="#"
          className="block w-full text-center mt-6 font-serif px-[10px] py-[10px] border-[#4F20C5] border-2 text-white hover:bg-[#4F20C5] rounded-[5px] hover:shadow-[0_0_10px_#4F20C5]"
        >
          GETHOSTING
        </Link>
      </div>
    </nav>
  );
}
