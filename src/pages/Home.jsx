import React, { useState } from 'react';
import bello from '../assets/BELLO.jpg';
import quantora from '../assets/image1.png';
import hifz from '../assets/hifzhub.png';
import rahamhKnits from '../assets/image2.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaEnvelope, FaGithub, FaExternalLinkAlt, FaBars, FaTimes,
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiPostgresql, SiMysql } from 'react-icons/si';

// Slide-in animation component
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

// Glassy section wrapper
const SilverSection = ({ children, className = '' }) => (
  <div className="relative my-12 mx-auto max-w-6xl rounded-3xl bg-gradient-to-b from-zinc-950 to-black p-[1px] shadow-lg shadow-slate-800/40">
    <div className={`rounded-3xl bg-black/80 backdrop-blur-sm p-8 border border-slate-400/30 ${className}`}>
      {children}
    </div>
  </div>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Projects with contributions
  const projects = [
    {
      title: 'Quantora',
      link: 'https://quantora-mu.vercel.app',
      image: quantora,
      description: 'Inventory management web app for small businesses.',
      contributions: [
        'Developed RESTful APIs with Node.js and Express for product management',
        'Designed PostgreSQL database schema for inventory and user management',
        'Implemented responsive UI using React and TailwindCSS',
        'Integrated authentication and authorization for different user roles'
      ],
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'TailwindCSS']
    },
   {
  title: 'RAHMAH KNITS',
  link: 'https://rahmah-knits-ngqa.vercel.app',
  image: rahamhKnits,
  description: 'Full-stack e-commerce web app for users to order knitted/crocheted wears and for the owner to upload products.',
  contributions: [
    'Built RESTful APIs with Node.js and Express for products and orders',
    'Designed PostgreSQL database schema for users, products, and orders',
    'Implemented frontend with React and TailwindCSS for product browsing, ordering, and checkout',
    'Built admin dashboard for owner to perform CRUD operations on goods',
    'Integrated authentication and authorization for users and owner'
  ],
  tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'TailwindCSS']
},
{
    title: 'HifzHub',
    link: 'quranly-six.vercel.app',
    image: hifz, 
    description: 'Quran memorization app with recitation, translation, daily ayahs, and bookmarking features.',
    contributions: [
      'Integrated Quran Cloud API for Arabic verses and translations',
      'Implemented multiple reciters selection with audio playback',
      'Built daily ayah feature and bookmarking system using React hooks and localStorage',
      'Designed responsive and modern UI with TailwindCSS'
    ],
    tech: ['React', 'TailwindCSS', 'JavaScript', 'Quran Cloud API']
  }

  ];

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#techstack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const techCategories = [
    { name: 'Frontend', tools: [
      { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
      { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-400' },
      { name: 'React', icon: FaReact, color: 'text-cyan-400' },
      { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    ]},
    { name: 'Backend', tools: [
      { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
      { name: 'Express', icon: SiExpress, color: 'text-gray-400' },
    ]},
    { name: 'Database', tools: [
      { name: 'MySQL', icon: SiMysql, color: 'text-green-400' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-sky-400' },
    ]},
  ];

  return (
    <main className="bg-black text-white font-sans scroll-smooth">

      {/* === Mobile Hamburger Navbar === */}
      <header className="md:hidden fixed top-0 left-0 w-full bg-black/90 border-b border-slate-700 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-cyan-400 text-xl font-bold">Bello</h1>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-cyan-400 text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col bg-black/95 border-t border-slate-700">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-3 text-gray-300 hover:text-cyan-400 border-b border-slate-800"
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="pt-24 px-6">
        <SilverSection>
          <SlideInSection direction="up">
            <div className="relative flex flex-col md:flex-row items-center gap-12 overflow-hidden">
              <div className="flex-1 z-10">
                <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 mb-4">
                  Hi, I am Bello Habeebullah
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-300"
                >
                  Full-Stack Developer (PERN Stack) —{' '}
                  <span className="text-orange-400 font-semibold">React</span>,{' '}
                  <span className="text-green-400 font-semibold">Node.js</span>,{' '}
                  <span className="text-sky-400 font-semibold">PostgreSQL</span>
                </motion.p>
                <p className="text-gray-400 mt-4">
                  I design and build performant, maintainable web applications with a strong focus on clean architecture, user experience, and scalability.
                </p>
                <div className="my-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-cyan-400" />
                    <a href="mailto:bellohabeebullah838@gmail.com" className="text-cyan-400 underline">
                      bellohabeebullah838@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaGithub className="text-cyan-400" />
                    <a href="https://github.com/Codejibola" target="_blank" rel="noreferrer" className="text-cyan-400 underline">
                      Codejibola
                    </a>
                  </div>
                </div>
              </div>
              <motion.div
                className="flex-1 relative"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500 to-purple-500 blur-3xl opacity-30"></div>
                <img
                  src={bello}
                  alt="Bello"
                  className="relative rounded-2xl w-[300px] sm:w-[400px] h-[450px] object-cover border border-slate-300 shadow-lg z-10"
                />
              </motion.div>
            </div>
          </SlideInSection>
        </SilverSection>
      </section>

      {/* ABOUT ME */}
      <section
        id="about"
        className="relative w-full max-w-4xl mx-auto my-16 p-8 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-3xl shadow-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400 border-l-4 border-cyan-400 pl-4">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          I am a full-stack developer with strong frontend fundamentals and growing backend expertise. My work focuses on building reliable, user-centric applications using React, Node.js, and relational databases.
          <br /><br />
          I pay close attention to application structure, API design, and performance, ensuring solutions are functional, maintainable, and scalable. I enjoy translating real-world problems into clean technical solutions and continuously improving my engineering skill set through hands-on projects.
        </p>
        <blockquote className="mt-6 pl-4 border-l-4 border-cyan-400 italic text-gray-300">
          “Great code is poetry in motion—clean, elegant, and always evolving.”
        </blockquote>
      </section>

      {/* TECH STACK */}
      <section id="techstack" className="px-6">
        <SilverSection>
          <SlideInSection direction="right">
            <h2 className="text-4xl font-bold text-cyan-400 text-center mb-4">Tech Stack</h2>
            <p className="text-center text-gray-400 mb-10">
              Tools and technologies I use to build production-ready applications
            </p>
            {techCategories.map((cat, i) => (
              <div key={i} className="mb-8">
                <h3 className="text-cyan-400 font-semibold text-xl mb-4 text-center">{cat.name}</h3>
                <div className="flex flex-wrap justify-center gap-8">
                  {cat.tools.map((tool, idx) => (
                    <motion.div key={idx} whileHover={{ scale: 1.2, rotate: 5 }} className="flex flex-col items-center">
                      <tool.icon className={`text-5xl ${tool.color}`} />
                      <span className="text-gray-300 mt-1">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </SlideInSection>
        </SilverSection>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6">
        <SilverSection>
          <SlideInSection direction="up">
            <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">My Projects</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2">
              {projects.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="relative rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-zinc-900 to-black border border-gray-700 p-4 hover:scale-[1.03] hover:rotate-0 transition"
                >
                  <img src={p.image} alt={p.title} className="rounded-xl mb-4 object-cover w-full h-48" />
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">{p.title}</h3>
                  <p className="text-gray-400 mb-2">{p.description}</p>

                  {/* Contributions */}
                  <ul className="list-disc list-inside text-gray-400 text-sm mb-2">
                    {p.contributions.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {p.tech.map(t => <span key={t} className="text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded">{t}</span>)}
                  </div>

                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm text-black bg-cyan-400 hover:bg-cyan-300 px-4 py-2 rounded transition">
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
            <div className="mx-auto max-w-md p-8 bg-black/70 backdrop-blur-sm rounded-3xl shadow-lg text-center">
              <h2 className="text-4xl font-bold text-cyan-400 mb-4">Let’s Connect</h2>
              <p className="text-gray-300 mb-6">
                Open to collaboration, internships, and full-stack development opportunities.
              </p>
              <a
                href="mailto:bellohabeebullah838@gmail.com"
                className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full shadow-lg transition"
              >
                Say Hello
              </a>
            </div>
          </SlideInSection>
        </SilverSection>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 border-t border-slate-700">
        &copy; {new Date().getFullYear()} Bello Habeebullah. All rights reserved.
      </footer>
    </main>
  );
}
