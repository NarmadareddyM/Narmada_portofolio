import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#111827]"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About Me
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Card */}
          <div className="bg-[#0B1120] border border-gray-700 rounded-3xl p-8 shadow-xl hover:border-blue-500 transition duration-300">

            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              Who I Am
            </h3>

            <p className="text-gray-300 leading-9 text-lg">
              I am a motivated Computer Science graduate passionate
              about software development, problem-solving, and learning
              modern technologies. I enjoy building efficient applications
              using Java, React.js, Spring Boot, and SQL.
            </p>

            <p className="text-gray-300 leading-9 text-lg mt-6">
              I am eager to grow as a developer, contribute effectively
              to teams, and continuously improve my technical skills.
            </p>

          </div>

          {/* Right Card */}
          <div className="bg-[#0B1120] border border-gray-700 rounded-3xl p-8 shadow-xl hover:border-purple-500 transition duration-300">

            <h3 className="text-2xl font-bold text-purple-400 mb-6">
              Highlights
            </h3>

            <div className="space-y-6 text-gray-300 text-lg">

              <div className="flex items-start gap-4">
                <span className="text-blue-400 text-2xl">✓</span>
                <p>
                  Strong understanding of Java, Python, JavaScript, SQL, and Data Structures.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-blue-400 text-2xl">✓</span>
                <p>
                  Built full stack and problem-solving based projects.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-blue-400 text-2xl">✓</span>
                <p>
                  Passionate about Full Stack Development and AI/ML technologies.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-blue-400 text-2xl">✓</span>
                <p>
                  Leadership experience as Class Representative and Fest Coordinator.
                </p>
              </div>

            </div>

          </div>

        </div>

      </motion.div>
    </section>
  );
}

export default About;