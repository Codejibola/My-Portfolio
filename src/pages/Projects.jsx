//This is the Projects page component for the portfolio
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
    const projects = [
  { title: 'Quranly', link: 'https://quranly-phi.vercel.app', description: 'Helps user track their memorization of the holy Quran' },
  { title: 'Boom', link: 'https://boom-kohl.vercel.app', description: 'Lets users record, and upload movie clips and get the movie name.' },
  { title: 'JibolaReel', link: 'https://jibola-reel.vercel.app', description: `Lets users to search for a movie and see its related movies` },
  { title: 'AbuadBlog', link: 'https://abuad-blog.vercel.app', description: `Allows Abuad students to post tyhe hottest gist in the school` }
];
  return (
     <motion.section 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className="py-16 px-4 sm:px-8 md:px-20 bg-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-700 mb-10">My Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 border border-teal-100 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-teal-700 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded">
              View Demo <FaExternalLinkAlt className="ml-2" />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}