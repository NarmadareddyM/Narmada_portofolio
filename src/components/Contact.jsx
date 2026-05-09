import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#0B1120]"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          Contact Me
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-[#111827] border border-gray-700 rounded-3xl p-10 shadow-xl hover:border-blue-500 transition duration-300"
        >

          <p className="text-gray-300 text-lg leading-8 text-center mb-10">
            I am open to Java Developer, Full Stack Developer,
            and Software Engineering opportunities.
            Feel free to connect with me.
          </p>

          {/* Contact Links */}
          <div className="space-y-8">

            {/* Email */}
            <a
              href="mailto:narmadam286@gmail.com"
              className="flex items-center gap-5 text-gray-300 hover:text-blue-400 transition duration-300 text-lg"
            >
              <FaEnvelope className="text-2xl" />
              narmadam286@gmail.com
            </a>

            {/* Phone */}
            <a
              href="tel:+919014319612"
              className="flex items-center gap-5 text-gray-300 hover:text-blue-400 transition duration-300 text-lg"
            >
              <FaPhoneAlt className="text-2xl" />
              +91 9014319612
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/NarmadareddyM"
              target="_blank"
              className="flex items-center gap-5 text-gray-300 hover:text-blue-400 transition duration-300 text-lg"
            >
              <FaGithub className="text-2xl" />
              github.com/NarmadareddyM
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/narmadam"
              target="_blank"
              className="flex items-center gap-5 text-gray-300 hover:text-blue-400 transition duration-300 text-lg"
            >
              <FaLinkedin className="text-2xl" />
              linkedin.com/in/narmadam
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;