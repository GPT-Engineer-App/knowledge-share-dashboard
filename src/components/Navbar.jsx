import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-eco-green p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Foreningstorvet Dashboard</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white">Hjem</Link>
          <Link to="/arbejdsplads" className="text-white">Arbejdsplads</Link>
          <Link to="/admin" className="text-white">Admin</Link>
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/register" className="text-white">Register</Link>
          <Link to="/services" className="text-white">Services</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;