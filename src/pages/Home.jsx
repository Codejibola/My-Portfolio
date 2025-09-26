import React from 'react';
import bello from './BELLO.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaEnvelope, FaGithub, FaHtml5, FaCss3Alt, FaJsSquare,
  FaReact, FaNodeJs, FaExternalLinkAlt, FaDatabase
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiPostgresql, SiMongodb
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

// silver border wrapper
const SilverSection = ({ children, className = '' }) => (
  <div
    className={`relative my-12 mx-auto max-w-6xl rounded-2xl bg-gradient-to-b from-zinc-950 to-black 
                p-[1px] shadow-lg shadow-slate-800/40`}>
    <div className={`rounded-2xl bg-black/90 p-8 border border-slate-400/30 ${className}`}>
      {children}
    </div>
  </div>
);

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
      <section id="hero" className="pt-20 px-6">
        <SilverSection>
          <SlideInSection direction="up">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h1 className="text-5xl font-extrabold text-cyan-400 mb-6">Hi, I am Bello Habeebullah</h1>
                <p className="text-xl text-gray-300 mb-4">Frontend Developer | React Enthusiast | Aspiring Backend Engineer</p>
                <p className="text-gray-400 mb-4">I build beautiful, fast interfaces with React & TailwindCSS. Currently mastering Node.js, Express, and databases.</p>
                <div className="my-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-cyan-400" />
                    <a href="mailto:bellohabeebullah838@gmail.com" className="text-cyan-400 underline">bellohabeebullah838@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaGithub className="text-cyan-400" />
                    <a href="https://github.com/Codejibola" target="_blank" rel="noreferrer" className="text-cyan-400 underline">Codejibola</a>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex-1 flex justify-center"
              >
                <img src={bello} alt="Bello" className="rounded-2xl w-[300px] sm:w-[400px] h-[450px] object-cover border border-slate-300 shadow-lg" />
              </motion.div>
            </div>
          </SlideInSection>
        </SilverSection>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6">
        <SilverSection>
          <SlideInSection direction="left">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-cyan-400 mb-6">About Me</h2>
              <p className="text-gray-300 leading-relaxed">
                I’m a developer passionate about crafting interactive, high-impact web experiences…
              </p>
            </div>
          </SlideInSection>
        </SilverSection>
      </section>

      {/* TECH STACK */}
      <section id="techstack" className="px-6">
        <SilverSection>
          <SlideInSection direction="right">
            <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
              {[
                [<FaHtml5 className="text-orange-500"/>, 'HTML5'],
                [<FaCss3Alt className="text-blue-500"/>, 'CSS3'],
                [<FaJsSquare className="text-yellow-400"/>, 'JavaScript'],
                [<FaReact className="text-cyan-400"/>, 'React'],
                [<SiTailwindcss className="text-cyan-500"/>, 'TailwindCSS'],
                [<FaNodeJs className="text-green-500"/>, 'Node.js'],
                [<SiExpress className="text-gray-400"/>, 'Express'],
                [<SiMongodb className="text-green-400"/>, 'MongoDB'],
                [<SiPostgresql className="text-sky-400"/>, 'PostgreSQL']
              ].map(([Icon, name], i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="text-5xl">{Icon}</div>
                  <span className="mt-2 text-gray-300">{name}</span>
                </div>
              ))}
            </div>
          </SlideInSection>
        </SilverSection>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6">
        <SilverSection>
          <SlideInSection direction="up">
            <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">My Projects</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {projects.map((p, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="p-6 rounded-xl border border-slate-400 bg-gradient-to-br from-zinc-900 to-black shadow-md hover:scale-[1.03] transition"
                >
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">{p.title}</h3>
                  <p className="text-gray-400 mb-4">{p.description}</p>
                  <a href={p.link} target="_blank" rel="noreferrer"
                     className="inline-flex items-center text-sm text-black bg-cyan-400 hover:bg-cyan-300 px-4 py-2 rounded transition">
                    View Demo <FaExternalLinkAlt className="ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </SlideInSection>
        </SilverSection>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6">
        <SilverSection>
          <SlideInSection direction="down">
            <h2 className="text-4xl font-bold text-cyan-400 mb-4 text-center">Let’s Connect</h2>
            <p className="text-gray-400 mb-6 text-center">Want to collaborate or just say hi?</p>
            <div className="text-center">
              <a href="mailto:bellohabeebullah838@gmail.com"
                 className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full transition">
                Say Hello
              </a>
            </div>
          </SlideInSection>
        </SilverSection>
      </section>

      <footer className="text-center py-6 text-gray-500 border-t border-slate-700">
        &copy; {new Date().getFullYear()} Bello Habeebullah. Built by yours truly
      </footer>
    </main>
  );
}
