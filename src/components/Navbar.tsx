import React from "react";
import { Link, useLocation } from "react-router-dom";
interface NavbarProps {
  toggleTheme: () => void;
  theme: string;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  const location = useLocation();

  const navLinkClass = (path: string) =>
    `hover:text-indigo-500 transition-colors ${
      location.pathname === path ? "text-indigo-600 dark:text-indigo-400 font-semibold" : ""
    }`;

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/70 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            🎬 Movie
          </div>

          {/* Links & Theme Toggle */}
          <div className="flex items-center gap-6">
            <ul className="flex gap-4 text-gray-800 dark:text-gray-200 font-medium">
              <li>
                <Link to="/" className={navLinkClass("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/movies" className={navLinkClass("/movies")}>
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/about" className={navLinkClass("/about")}>
                  About
                </Link>
              </li>
            </ul>

            {/* Theme Toggle */}
            <button
              className="text-2xl focus:outline-none hover:scale-110 transition-transform duration-200"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
