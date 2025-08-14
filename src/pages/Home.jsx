import React from 'react';
import bello from './BELLO.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaEnvelope, FaGithub, FaHtml5, FaCss3Alt, FaJsSquare,
  FaReact, FaNodeJs, FaExternalLinkAlt,FaDatabase
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress,SiPostgresql, SiMongodb
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
              <h1 className="text-5xl font-extrabold text-teal-400 mb-6">Hi, I am Bello Habeebullah</h1>
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

      {/* ABOUT SECTION */}
<section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black via-zinc-900 to-black">
  <SlideInSection direction="left">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-cyan-400 mb-6">About Me</h2>
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed sm:leading-loose px-2 sm:px-4">
        I’m a developer passionate about crafting interactive, high‑impact web experiences that feel seamless and memorable. 
        I focus on clean, efficient code, smooth animations, and building products that balance beauty with performance.
      </p>
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed sm:leading-loose mt-4 px-2 sm:px-4">
        Right now, I’m working on <span className="text-cyan-400 font-medium">Boom</span> — a movie segment app that lets users 
        record or upload short clips and identify the movie. The front‑end is live, while I’m actively developing the back‑end to 
        handle real‑time processing and smarter search.
      </p>
    </div>
  </SlideInSection>
</section>

{/* MY JOURNEY SECTION */}
{/* MY JOURNEY SECTION (updated theme + logos, background matched) */}
<SlideInSection direction="up">
  <section className="py-12 px-4 sm:px-8 md:px-20 bg-[#0a0a0a] text-white">
    <div className="max-w-6xl mx-auto">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-4">
          My Journey
        </h2>
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          My journey into web development has been a continuous story of
          curiosity and growth. From exploring small personal projects to
          taking on bigger challenges, each step has shaped my skills and
          mindset. Today, I’m working on <span className="text-cyan-400">Boom</span> — a movie segment app
          that allows users to record and upload clips which will be matched
          with movie titles. The backend is still in development, but the
          vision is set.
        </p>
      </div>

      {/* Timeline / Cards */}
      <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-10 md:items-start">
        {/* Early Days */}
        <SlideInSection direction="left">
          <div className="bg-black p-6 rounded-lg shadow-lg border border-cyan-500/20 hover:shadow-cyan-500/30 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              Early Days
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I started with basic HTML & CSS, fascinated by how lines of code
              could transform into something visible and interactive.
            </p>
            <div className="flex flex-wrap gap-4 text-2xl text-cyan-400 mt-4">
              <FaHtml5 title="HTML5" />
              <FaCss3Alt title="CSS3" />
            </div>
          </div>
        </SlideInSection>

        {/* Growing Skills */}
        <SlideInSection direction="right">
          <div className="bg-black p-6 rounded-lg shadow-lg border border-cyan-500/20 hover:shadow-cyan-500/30 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              Growing Skills
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Over time, I expanded my skills to JavaScript, React, and backend
              development, learning how to connect design with functionality.
            </p>
            <div className="flex flex-wrap gap-4 text-2xl text-cyan-400 mt-4">
              <FaJsSquare title="JavaScript" />
              <FaReact title="React" />
              <SiTailwindcss title="Tailwind CSS" />
            </div>
          </div>
        </SlideInSection>

        {/* Present Focus */}
        <SlideInSection direction="left">
          <div className="bg-black p-6 rounded-lg shadow-lg border border-cyan-500/20 hover:shadow-cyan-500/30 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              Present Focus
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I’m building applications like Boom — aiming to make movie segment
              recording and recognition seamless for users everywhere.
            </p>
            <div className="flex flex-wrap gap-4 text-2xl text-cyan-400 mt-4">
              <FaReact title="React" />
              <FaNodeJs title="Node.js" />
              <SiExpress title="Express" />
            </div>
          </div>
        </SlideInSection>

        {/* Looking Ahead */}
        <SlideInSection direction="right">
          <div className="bg-black p-6 rounded-lg shadow-lg border border-cyan-500/20 hover:shadow-cyan-500/30 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              Looking Ahead
            </h3>
            <p className="text-gray-300 leading-relaxed">
              My journey is far from over. I’m constantly learning, exploring
              new technologies, and building tools that solve real problems.
            </p>
            <div className="flex flex-wrap gap-4 text-2xl text-cyan-400 mt-4">
              <SiMongodb title="MongoDB" />
              <SiPostgresql title="PostgreSQL" />
              <FaDatabase title="SQL / Databases" />
            </div>
          </div>
        </SlideInSection>
      </div>
    </div>
  </section>
</SlideInSection>

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
            </div>
          </div>
        </SlideInSection>
      </section>
      {/* PROJECTS */}
       <section id="projects" className="py-20 px-6 bg-black text-white">
        <SlideInSection direction="up">
         <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">My Projects</h2>
         <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
         {projects.map((project, index) => (
           <motion.div
             key={index}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: index * 0.2 }}
             className="p-6 rounded-xl border border-cyan-800 bg-gradient-to-br from-zinc-900 to-black 
                     shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transform transition-all duration-300"
            >
          <h3 className="text-xl font-semibold text-cyan-300 mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-black bg-cyan-400 hover:bg-cyan-300 px-4 py-2 rounded transition"
          >
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
