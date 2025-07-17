import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800 font-sans">
        <nav className="bg-blue-600 text-white p-4 shadow-md">
          <ul className="flex flex-wrap gap-6 justify-center text-sm sm:text-base">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? 'underline font-semibold' : 'hover:underline'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? 'underline font-semibold' : 'hover:underline'
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'underline font-semibold' : 'hover:underline'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}