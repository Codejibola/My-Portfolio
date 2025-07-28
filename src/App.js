import Home from './pages/Home';
import { Link } from 'react-scroll';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white font-sans">
      
      {/* NAVBAR */}
      <nav className="bg-black/70 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50 p-4 flex justify-center space-x-10 text-sm sm:text-base">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer hover:text-cyan-400 transition-colors"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer hover:text-cyan-400 transition-colors"
        >
          About
        </Link>
        <Link
          to="techstack"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer hover:text-cyan-400 transition-colors"
        >
          Tech Stack
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer hover:text-cyan-400 transition-colors"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer hover:text-cyan-400 transition-colors"
        >
          Contact
        </Link>
      </nav>

      {/* MAIN CONTENT */}
      <Home />
    </div>
  );
}
