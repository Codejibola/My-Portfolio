import Home from './pages/Home';
import { Link } from 'react-scroll';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white font-sans">
      
      {/* NAVBAR */}
    <nav className="hidden sm:flex bg-black/70 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50 p-4 justify-center space-x-10 text-sm sm:text-base">
      <Link to="hero" smooth duration={500} offset={-80} className="cursor-pointer hover:text-cyan-400">Home</Link>
      <Link to="about" smooth duration={500} offset={-80} className="cursor-pointer hover:text-cyan-400">About</Link>
      <Link to="techstack" smooth duration={500} offset={-80} className="cursor-pointer hover:text-cyan-400">Tech Stack</Link>
      <Link to="projects" smooth duration={500} offset={-80} className="cursor-pointer hover:text-cyan-400">Projects</Link>
      <Link to="contact" smooth duration={500} offset={-80} className="cursor-pointer hover:text-cyan-400">Contact</Link>
   </nav>


      {/* MAIN CONTENT */}
      <Home />
    </div>
  );
}
