import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {

  const projects = [
    {
      title: "Personal Finance Tracker",
      tech: "Java • Spring Boot • React.js • MySQL",
      description:
        "Developed a Personal Finance Tracker that manages income and expenses while providing financial insights using dashboards and analytics.",
      github: "https://github.com/NarmadareddyM",
    },

    {
      title: "Sudoku Solver Leveraging Backtracking",
      tech: "Python • Tkinter • Backtracking Algorithm",
      description:
        "Built a user-friendly Sudoku Solver with real-time validation, reset functionality, and GUI support using Tkinter.",
      github: "https://github.com/NarmadareddyM",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-[#111827]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          Projects
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="bg-[#0B1120] border border-gray-700 rounded-3xl p-8 shadow-xl hover:border-blue-500 transition duration-300"
            >

              {/* Title */}
              <h3 className="text-2xl font-bold text-blue-400 mb-5">
                {project.title}
              </h3>

              {/* Tech */}
              <p className="text-purple-400 mb-6 text-lg">
                {project.tech}
              </p>

              {/* Description */}
              <p className="text-gray-300 leading-8 text-lg">
                {project.description}
              </p>

              {/* Button */}
              <a
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-3 mt-8 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl text-white font-semibold transition duration-300"
              >
                <FaGithub />
                View Project
              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;