import { motion } from "framer-motion";

function Certifications() {

  const certifications = [
    {
      title: "TCS iON GET IT Training",
      description:
        "Corporate readiness training covering communication skills, teamwork, leadership, and interview preparation.",
    },

    {
      title: "CodeUnnati – Edunet Foundation",
      description:
        "Hands-on technical training focused on industry-relevant and professional development skills.",
    },
  ];

  return (
    <section
      id="certifications"
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
          Certifications
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {certifications.map((cert, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="bg-[#0B1120] border border-gray-700 rounded-3xl p-8 shadow-xl hover:border-purple-500 transition duration-300"
            >

              {/* Title */}
              <h3 className="text-2xl font-bold text-purple-400 mb-5">
                {cert.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-8 text-lg">
                {cert.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;