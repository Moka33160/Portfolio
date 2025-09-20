import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full h-screen flex justify-center items-center text-center overflow-hidden"
    >
      {/* Vidéo de fond */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover blur-custom"
      >
        <source src="public/videos/contact2.mp4" type="video/mp4" />
      </video>

      {/* Rectangle beige animé */}
      <motion.div
        className="relative bg-[#f8f0de] text-[#231f20] rounded-xl shadow-lg p-8 max-w-lg w-full z-10"
        initial={{ opacity: 0, y: 50 }}       // commence caché + décalé en bas
        whileInView={{ opacity: 1, y: 0 }}    // visible quand on scrolle dessus
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }} // déclenche dès que 20% est visible
      >
        <h2 className="text-3xl md:text-4xl font-extrabold font-migra mb-6">
          Me Contacter
        </h2>

       

        <ul className="space-y-4 text-lg">
          <li>
            📧{" "}
            <a href="mailto:mathisgesson@gmail.com" className="hover:underline">
              mathisgesson@gmail.com
            </a>
          </li>
          <li>
            💼{" "}
            <a
              href="https://www.linkedin.com/in/mathis-gesson-826a7036a/"
              target="_blank"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            🖥️{" "}
            <a
              href="https://github.com/Moka33160/"
              target="_blank"
              className="hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            📞{" "}
            <a href="tel:+33781668091" className="hover:underline">
              +33 7 81 66 80 91
            </a>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
