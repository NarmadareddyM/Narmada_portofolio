import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiSpringboot,
  SiMysql,
  SiCplusplus,
} from "react-icons/si";

function Skills() {

  const skills = [
    {
      name: "Java",
      icon: <FaJava />,
    },
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "React.js",
      icon: <FaReact />,
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot />,
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "C++",
      icon: <SiCplusplus />,
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#0B1120]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          Skills
        </motion.h2>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                rotate: 2,
              }}
              className="bg-[#111827] border border-gray-700 rounded-3xl p-8 flex flex-col items-center justify-center gap-5 shadow-xl hover:border-blue-500 transition duration-300"
            >

              <div className="text-5xl text-blue-400">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {skill.name}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;