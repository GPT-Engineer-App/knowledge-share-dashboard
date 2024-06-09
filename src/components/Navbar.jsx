import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Company Dashboard</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/workplace" className="text-white">Workplace</Link>
          <Link to="/admin" className="text-white">Admin</Link>
          <Link to="/login" className="text-white">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;