import { motion } from "framer-motion";
import profile from "../assets/Narmada_p.JPG";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0B1120] px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-blue-400 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            M Narmada
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mt-4">
            Java Developer & Full Stack Enthusiast
          </h2>

          <p className="text-gray-400 mt-6 leading-8 text-lg">
            Motivated Computer Science graduate passionate about
            building efficient applications, solving problems,
            and continuously learning modern technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-8">

            <a
              href="https://github.com/NarmadareddyM"
              target="_blank"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition duration-300 px-6 py-3 rounded-xl text-white font-semibold"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/narmadam"
              target="_blank"
              className="flex items-center gap-2 border border-blue-500 hover:bg-blue-500 transition duration-300 px-6 py-3 rounded-xl text-white font-semibold"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition duration-300 px-6 py-3 rounded-xl text-white font-semibold"
            >
              <FaDownload />
              Resume
            </a>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Glow */}
            <div className="relative w-[280px] md:w-[350px] h-[320px] md:h-[420px] overflow-hidden rounded-t-full border-4 border-blue-500 shadow-2xl">

  <img
    src={profile}
    alt="profile"
    className="w-full h-full object-cover object-top"
  />

</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;