import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="mb-4 text-5xl font-bold text-center text-eco-green">Velkommen til Foreningstorvet</h1>
      <p className="mb-8 text-xl text-center text-gray-600">Din one-stop løsning til at administrere og optimere din arbejdsplads.</p>
      <Link to="/register" className="px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
        Kom i gang
      </Link>
    </div>
  );
};

export default LandingPage;