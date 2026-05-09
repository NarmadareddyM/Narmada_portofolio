import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Certifications",
    "Contact",
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1120]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <h1 className="text-3xl font-bold text-white">
            M Narmada<span className="text-blue-500"></span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-blue-400 transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Icon */}
          <div
            className="md:hidden text-white text-2xl cursor-pointer"
            onClick={() => setNav(!nav)}
          >
            {nav ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className="md:hidden bg-[#111827] px-6 py-6">
          <ul className="flex flex-col gap-6 text-gray-300 text-lg">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setNav(false)}
                  className="hover:text-blue-400 transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;