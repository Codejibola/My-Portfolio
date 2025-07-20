// This is the home page component for the portfolio
import bello from './BELLO.jpg';
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiExpress } from 'react-icons/si';


export default function Home() {
  return (
     <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="py-16 px-4 sm:px-8 md:px-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-700 mb-6 leading-tight font-poppins">
            Hi, I'm Bello Habeebullah
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-4 font-sans">
            Frontend Developer | React Enthusiast | Aspiring Backend Engineer
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-4 font-sans">
            I specialize in building fast, responsive, and modern web interfaces using React and Tailwind CSS. Currently, I’m deepening my backend knowledge with tools like Node.js, Express, MongoDB, and SQL.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-4 font-sans">
            I'm passionate about creating digital solutions that solve real problems. Right now, I’m focused on building RESTful APIs, integrating backend services, and exploring real-time technologies.
          </p>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-2 text-teal-600">Contact</h3>
            <p className="text-gray-700 flex items-center gap-2">
              <FaEnvelope className="text-teal-500" />
              <a href="mailto:bellohabeebullah838@gmail.com" className="text-teal-600 underline">bellohabeebullah838@gmail.com</a>
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <FaGithub className="text-teal-500" />
              <a href="https://github.com/Codejibola" rel="noreferrer" target="_blank" className="text-teal-600 underline">Codejibola</a>
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">My Journey</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-1">Frontend Journey</h3>
                <p className="text-gray-700 mb-2">
                  Started with HTML, CSS, and JavaScript, then advanced into React, Tailwind CSS, and responsive UI/UX design. I’ve built multiple real-world projects and continuously optimize my workflows.
                </p>
                <div className="flex flex-wrap gap-4 text-2xl text-teal-500">
                  <FaHtml5 title="HTML5" />
                  <FaCss3Alt title="CSS3" />
                  <FaJsSquare title="JavaScript" />
                  <FaReact title="React" />
                  <SiTailwindcss title="Tailwind CSS" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-1">Backend Journey</h3>
                <p className="text-gray-700 mb-2">
                  Recently diving deep into Node.js, Express, and databases like MongoDB and PostgreSQL. I'm learning API development, authentication, and deploying full-stack applications.
                </p>
                <div className="flex flex-wrap gap-4 text-2xl text-teal-500">
                  <FaNodeJs title="Node.js" />
                  <SiExpress title="Express" />
                  <SiMongodb title="MongoDB" />
                  <SiPostgresql title="PostgreSQL" />
                  <FaDatabase title="SQL/Databases" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={bello}
            alt="Bello Habeebullah"
            className="w-[90%] sm:w-[400px] md:w-[450px] h-[500px] object-cover rounded-2xl border-4 border-teal-500 shadow-xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

