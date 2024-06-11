import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Foreningstorvet Dashboard</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white">Forside</Link>
          <Link to="/services" className="text-white">Services</Link>
          <Link to="/about" className="text-white">Om os</Link>
          <Link to="/contact" className="text-white">Kontakt</Link>
          <Link to="/subsidy-programs" className="text-white">Tilskudsprogrammer</Link>
          <Link to="/benchmarking-tools" className="text-white">Benchmarking Tools</Link>
          <Link to="/benchmarking-tools" className="text-white">Benchmarking Tools</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;