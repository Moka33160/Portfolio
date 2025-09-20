import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Site de Présentation de film",
    description: "un site de presentation de film , tailwind css , react , js",
    image: "public/img/MovieWebsite.png",
    link: "https://ton-portfolio.com",
    github: "https://github.com/Moka33160/Portfolio_MovieWebsite",
  },
  {
    title: "Application météo",
    description: "Une appli météo en java",
    image: "public/img/odomo.png",
    link: "https://app-meteo.com",
    github: "https://github.com/ton-projet",
  },
  {
    title: "Visualisation de données",
    description: "Projet de BUT : Graphiques avec  données publiques. c# , python ,sql",
    image: "public/img/GrennGraph.png",
    link: "#",
    github: "#",
  },
  {
    title: "Chasse au trésor",
    description: "jeux video de chasse au trésor en js.",
    image: "public/img/chasseAuTresor.png",
    link: "https://moka33160.github.io/Chasse_au_tr-sor/",
    github: "https://github.com/Moka33160/Chasse_au_tr-sor",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen flex flex-col justify-center items-center bg-[#231f20] text-[#f8f0de] px-4"
    >
      <h2 className="text-4xl font-extrabold font-migra mb-8">Mes Projets</h2>

      {/* Conteneur du carrousel */}
      <div className="relative w-full max-w-3xl overflow-hidden">
        <motion.div
          key={current}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col items-center bg-[#2f2b2c] rounded-xl shadow-lg p-6"
        >
          <img
            src={projects[current].image}
            alt={projects[current].title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">{projects[current].title}</h3>
          <p className="text-center mb-4">{projects[current].description}</p>
          <div className="flex space-x-4">
            <a
              href={projects[current].link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#f8f0de] text-[#231f20] rounded-lg font-migra font-bold hover:bg-[#d9cbb5] transition"
            >
              Demo
            </a>
            <a
              href={projects[current].github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border-2 border-[#f8f0de] rounded-lg font-migra font-bold hover:bg-[#f8f0de] hover:text-[#231f20] transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Boutons navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#f8f0de] text-[#231f20] rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-110 transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#f8f0de] text-[#231f20] rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-110 transition"
        >
          ›
        </button>
      </div>

      {/* Indicateurs (petits points) */}
      <div className="flex space-x-2 mt-6">
        {projects.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === index ? "bg-[#f8f0de]" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
