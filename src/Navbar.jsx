import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  // Détecte le scroll pour changer le style de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full flex items-center p-4 h-16 z-50 text-[#f8f0de] backdrop-blur-md"
      animate={controls}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        backgroundColor: scrolled ? "rgba(35, 31, 32, 0.95)" : "transparent",
      }}
    >
      <div className="flex items-center w-full">
        {/* MG à gauche */}
        <div className="flex items-center">
          <a   href="#home"  className="text-primary font-migra font-extrabold text-xl hover:underline hover:text-[#f8f0de] transition-colors duration-300">MG</a>
        </div>

        {/* Liens à droite */}
        <ul className="flex space-x-12 ml-auto">
          <li>
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "about")}
              className="hover:underline hover:text-[#f8f0de] transition-colors duration-300"
            >
              À propos
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleLinkClick(e, "projects")}
              className="hover:underline hover:text-[#f8f0de] transition-colors duration-300"
            >
              Projets
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="hover:underline hover:text-[#f8f0de] transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
