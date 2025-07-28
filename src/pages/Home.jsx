import React from 'react';
import bello from './BELLO.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaEnvelope, FaGithub, FaHtml5, FaCss3Alt, FaJsSquare,
  FaReact, FaNodeJs, FaDatabase, FaExternalLinkAlt
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiPostgresql, SiExpress
} from 'react-icons/si';

const SlideInSection = ({ children, direction = 'up' }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
      x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const projects = [
    { title: 'Quranly', link: 'https://quranly-phi.vercel.app', description: 'Helps user track their memorization of the holy Quran' },
    { title: 'Boom', link: 'https://boom-kohl.vercel.app', description: 'Lets users record and upload movie clips, then get the movie name.' },
    { title: 'JibolaReel', link: 'https://jibola-reel.vercel.app', description: `Lets users search for a movie and see related movies` },
    { title: 'AbuadBlog', link: 'https://abuad-blog.vercel.app', description: `Allows Abuad students to post the hottest gist in the school` }
  ];

  return (
    <main className="bg-black text-white font-sans scroll-smooth">
      
      {/* HERO */}
      <section id="hero" className="py-20 px-6">
        <SlideInSection direction="up">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-5xl font-extrabold text-teal-400 mb-6">Hi, I'm Bello Habeebullah</h1>
              <p className="text-xl text-gray-400 mb-4">Frontend Developer | React Enthusiast | Aspiring Backend Engineer</p>
              <p className="text-gray-500 mb-4">I build beautiful, fast interfaces with React & TailwindCSS. Currently mastering Node.js, Express, and databases.</p>
              <div className="my-6 space-y-2">
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-teal-400" />
                  <a href="mailto:bellohabeebullah838@gmail.com" className="text-teal-400 underline">bellohabeebullah838@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <FaGithub className="text-teal-400" />
                  <a href="https://github.com/Codejibola" target="_blank" rel="noreferrer" className="text-teal-400 underline">Codejibola</a>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 flex justify-center"
            >
              <img src={bello} alt="Bello" className="rounded-2xl w-[300px] sm:w-[400px] h-[450px] object-cover border-4 border-teal-500 shadow-lg" />
            </motion.div>
          </div>
        </SlideInSection>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-zinc-900">
        <SlideInSection direction="left">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-cyan-400 mb-4">About Me</h2>
            <p className="text-gray-300 text-lg">
              I’m a Nigerian-based developer focused on creating smooth, high-performing user interfaces. With a growing knowledge of backend technologies, I'm working toward becoming a full-stack engineer.
            </p>
          </div>
        </SlideInSection>
      </section>

      {/* TECH STACK */}
      <section id="techstack" className="py-20 px-6">
        <SlideInSection direction="right">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
              <div className="flex flex-col items-center">
                <FaHtml5 className="text-5xl text-orange-500" />
                <span className="mt-2 text-gray-300">HTML5</span>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3Alt className="text-5xl text-blue-500" />
                <span className="mt-2 text-gray-300">CSS3</span>
              </div>
              <div className="flex flex-col items-center">
                <FaJsSquare className="text-5xl text-yellow-400" />
                <span className="mt-2 text-gray-300">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-5xl text-cyan-400" />
                <span className="mt-2 text-gray-300">React</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss className="text-5xl text-cyan-500" />
                <span className="mt-2 text-gray-300">TailwindCSS</span>
              </div>
              <div className="flex flex-col items-center">
                <FaNodeJs className="text-5xl text-green-500" />
                <span className="mt-2 text-gray-300">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiExpress className="text-5xl text-gray-400" />
                <span className="mt-2 text-gray-300">Express</span>
              </div>
              <div className="flex flex-col items-center">
                <SiMongodb className="text-5xl text-green-400" />
                <span className="mt-2 text-gray-300">MongoDB</span>
              </div>
              <div className="flex flex-col items-center">
                <SiPostgresql className="text-5xl text-blue-400" />
                <span className="mt-2 text-gray-300">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center">
                <FaDatabase className="text-5xl text-gray-400" />
                <span className="mt-2 text-gray-300">SQL</span>
              </div>
            </div>
          </div>
        </SlideInSection>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 bg-white text-black">
        <SlideInSection direction="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-700 mb-10">My Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 border border-teal-100 rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white"
              >
                <h3 className="text-xl font-semibold text-teal-700 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded">
                  View Demo <FaExternalLinkAlt className="ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </SlideInSection>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center">
        <SlideInSection direction="down">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">Let’s Connect</h2>
          <p className="text-gray-400 mb-6">Want to collaborate or just say hi?</p>
          <a href="mailto:bellohabeebullah838@gmail.com" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full transition">
            Say Hello
          </a>
        </SlideInSection>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 bg-black border-t border-zinc-800 text-gray-500">
        &copy; {new Date().getFullYear()} Bello Habeebullah. Built by yours truly
      </footer>
    </main>
  );
}
