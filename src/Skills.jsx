import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "public/img/c-removebg-preview.png",
    "public/img/Csharp-removebg-preview.png",
    "public/img/git.png",
    "public/img/java-removebg-preview.png",
    "public/img/mongodb-removebg-preview.png",
    "public/img/nodejs-removebg-preview.png",
    "public/img/php-removebg-preview.png",
    "public/img/python-removebg-preview.png",
    "public/img/React-removebg-preview.png",
    "public/img/sql-removebg-preview.png",
  ];

  // Animation infinie du ticker
  const tickerVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 55,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative w-full h-64 flex flex-col items-center overflow-hidden bg-[#f8f0de] px-4 py-6"
    >
      {/* Titre animé */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold font-migra text-[#231f20] mb-16 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Mes Compétences
      </motion.h2>

      {/* Ticker d'images avec hover pro */}
      <motion.div
        className="flex space-x-12" // plus d'espace entre logos
        variants={tickerVariants}
        animate="animate"
      >
        {[...skills, ...skills].map((skill, index) => (
          <motion.img
            key={index}
            src={skill}
            alt={`Skill ${index}`}
            className="w-20 h-20 object-contain cursor-pointer"
            whileHover={{
              scale: 1.2,
              rotate: 2,
              boxShadow: "0px 8px 15px rgba(155, 155, 155, 0.3) ",
              borderRadius: "50%",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </motion.div>
    </section>
  );
}
