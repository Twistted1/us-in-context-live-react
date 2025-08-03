import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-bold">Us In Context</Link>
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 focus:outline-none"
          >
            Menu
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-200">About Us</Link>
              <Link to="/political" className="block px-4 py-2 hover:bg-gray-200">Political Insights</Link>
              <Link to="/economic" className="block px-4 py-2 hover:bg-gray-200">Economic Commentary</Link>
              <Link to="/social" className="block px-4 py-2 hover:bg-gray-200">Social Responsibility</Link>
              <Link to="/sustainability" className="block px-4 py-2 hover:bg-gray-200">Sustainability</Link>
              <Link to="/contact" className="block px-4 py-2 hover:bg-gray-200">Contact</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;