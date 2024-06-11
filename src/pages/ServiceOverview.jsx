import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaHandshake, FaChartLine } from 'react-icons/fa';

const services = [
  { name: 'Tekniske Tjenester', icon: <FaTools />, description: 'Kort beskrivelse af tekniske tjenester.', link: '/services/tekniske-tjenester' },
  { name: 'Konsulenttjenester', icon: <FaHandshake />, description: 'Kort beskrivelse af konsulenttjenester.', link: '/services/konsulenttjenester' },
  { name: 'Finansielle Tjenester', icon: <FaChartLine />, description: 'Kort beskrivelse af finansielle tjenester.', link: '/services/finansielle-tjenester' },
];

const ServiceOverview = () => {
  return (
    <div className="p-6 bg-white">
      <h1 className="mb-4 text-3xl font-bold text-eco-green">Serviceoversigt</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <Link to={service.link} key={index} className="p-4 bg-white rounded shadow hover:bg-gray-100">
            <div className="flex items-center mb-2 text-2xl text-eco-green">{service.icon}</div>
            <h2 className="mb-2 text-xl font-bold text-turquoise">{service.name}</h2>
            <p className="text-turquoise">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceOverview;