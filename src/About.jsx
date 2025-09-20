import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full h-screen flex justify-center items-center overflow-hidden px-4"
    >
      {/* Vidéo en fond */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="public/videos/1664359873-1664359873-wave-abstract-white-background-live-wallpaper.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center">
        {/* Image animée */}
        <motion.img
          src="/img/IMG_40981.jpg"
          alt="Mathis Gesson"
          className="w-50 h-50 rounded-full border-4 border-[#f8f0de] object-cover mb-0 transform -translate-y-25"
          initial={{ scale: 0, rotate: -10, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Rectangle beige animé */}
        <motion.div
          className="relative bg-[#f8f0de] w-full max-w-3xl p-8 rounded-xl shadow-lg text-[#231f20] z-10 mt-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Titre */}
          <h2 className="text-3xl md:text-4xl font-extrabold font-migra text-center mb-4">
            À propos
          </h2>

          {/* Paragraphe */}
          <p className="text-lg md:text-xl font-migra text-justify">
          Étudiant 2ᵉ année BUT Informatique, disponible pour un stage du 6 avril au 12 juin 2026 . Je suis Motivé et prêt à contribuer activement dans les projets de votre entreprise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
