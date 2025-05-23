import { Facebook, Twitter, Youtube, Music2, Gamepad2 } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const gameServers = [
    "Thunder and City",
    "Mystic Racing Z",
    "Silent Wrath",
    "Funk Dungeon",
    "Galactic Oddsey",
    "Warfare Legend",
  ];

  const pages = [
    "Game Server",
    "Knowledgebase",
    "About Us",
    "Affiliates",
    "Locations",
    "News",
  ];

  const socialIcons = [
    { icon: <Facebook size={18} />, link: "#" },
    { icon: <Twitter size={18} />, link: "#" },
    { icon: <Gamepad2 size={18} />, link: "#" },
    { icon: <Music2 size={18} />, link: "#" },
    { icon: <Youtube size={18} />, link: "#" },
  ];

  return (
    <footer className="w-full min-h-[340px] bg-[#0f0f1b] text-white flex flex-col py-5 justify-center items-center">
      {/* Main Sections */}
      <div className="w-[85%] flex flex-wrap p-2 justify-between gap-10 ">
        {/* Logo & Description */}
        <div className="w-[280px] max-md:w-full">
          <div className="flex items-center gap-2 text-2xl font-semibold mb-4">
            <Image src="/logo.png" alt="Playhost Logo" width={200} height={90} />
          </div>
          <p className="text-sm text-gray-400 leading-6">
            Lorem ipsum culpa tempor tempor eu laboris adipisicing sunt exceptetur enim
            laborum officia eiusmod laborum sint do aliqua incididunt est aute deserunt
            in elit non sed ut velit ullamco aliquip.
          </p>
        </div>

        {/* Game Servers */}
        <div className="w-[200px]">
          <h3 className="text-lg font-semibold mb-4">Game Server</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {gameServers.map((game, i) => (
              <li key={i}>{game}</li>
            ))}
          </ul>
        </div>

        {/* Pages */}
        <div className="w-[200px]">
          <h3 className="text-lg font-semibold mb-4">Pages</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {pages.map((page, i) => (
              <li key={i}>{page}</li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div className="w-[280px]">
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <div className="flex items-center bg-[#1a1a2e] rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="enter your email"
              className="bg-transparent px-4 py-2 w-full outline-none text-sm"
            />
            <button className="bg-purple-600 px-4 py-2 text-white">➜</button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Your email is safe with us. We don&apos;t spam.
          </p>

          <h2 className="mt-4 text-sm">Follow Us on</h2>
          <div className="flex gap-3 mt-2">
            {socialIcons.map(({ icon, link }, i) => (
              <a
                key={i}
                href={link}
                className="bg-[#1a1a2e] p-2 rounded text-blue-600 hover:bg-white transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full border-gray-700 mt-10 mb-6" />

      {/* Bottom Bar */}
      <div className="w-full flex justify-between text-sm text-gray-400 flex-wrap px-3">
        <p>&copy; 2025 - Playhost by Designesia</p>
        <div className="flex gap-6 ">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy P olicy</a>
        </div>
      </div>
    </footer>
  );
}
