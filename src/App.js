import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-white to-cyan-50 text-gray-800 font-sans">
        <nav className="bg-white border-b shadow sticky top-0 z-50 p-4 flex justify-center space-x-10 text-sm sm:text-base">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'text-teal-600 border-b-2 border-teal-600 pb-1 font-semibold' : 'hover:text-teal-600 pb-1'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'text-teal-600 border-b-2 border-teal-600 pb-1 font-semibold' : 'hover:text-teal-600 pb-1'
            }
          >
            Projects
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}
