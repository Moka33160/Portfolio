import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { section } from "framer-motion/client";

export default function Home() {


  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  const name = "Mathis Gesson";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let timeoutIds = [];
    let totalDelay = 0;

  
    const animate = () => {
      setDisplayed(""); // reset
      name.split("").forEach((char, index) => {
        const delay = index * 0.1 * 1000; 
        totalDelay = delay;
        const id = setTimeout(() => {
          setDisplayed(prev => prev + char);
        }, delay);
        timeoutIds.push(id);
      });

      const restartId = setTimeout(() => {
        animate();
      }, totalDelay + 3000);
      timeoutIds.push(restartId);
    };

    animate();

    return () => timeoutIds.forEach(id => clearTimeout(id));e
  }, []);

  return (

    
    <div  className="bg-[#231f20] text-[#f8f0de] min-h-screen">
      <Navbar />

      <section className="flex flex-col justify-center items-center h-screen text-center px-4 pt-16">
        <h1 className="text-6xl md:text-7xl font-extrabold font-migra mb-4">
          {displayed.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.05 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <p className="text-2xl md:text-3xl font-migra mb-8">
          Étudiant en BUT informatique
        </p>

        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")}
          className="border-2 border-[#f8f0de] text-[#f8f0de] px-8 py-3 rounded-lg font-migra font-bold hover:bg-[#f8f0de] hover:text-[#231f20] transition duration-300"
        >
          Me contacter
        </a>
      </section>
    </div>
  );
}
