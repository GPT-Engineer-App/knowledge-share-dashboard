import React from 'react';
import { Link } from 'react-router-dom';
const services = [
  { name: 'Administration', image: '/images/administration.jpg', description: 'Kort beskrivelse af administrationstjenester.', link: '/services/administration' },
  { name: 'Renholdelse', image: '/images/renholdelse.jpg', description: 'Kort beskrivelse af renholdelsestjenester.', link: '/services/renholdelse' },
  { name: 'Vedligeholdelse', image: '/images/vedligeholdelse.jpg', description: 'Kort beskrivelse af vedligeholdelsestjenester.', link: '/services/vedligeholdelse' },
  { name: 'Energi', image: '/images/energi.jpg', description: 'Kort beskrivelse af energitjenester.', link: '/services/energi' },
  { name: 'Finansiering', image: '/images/finansiering.jpg', description: 'Kort beskrivelse af finansieringstjenester.', link: '/services/finansiering' },
];

const ServiceOverview = () => {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-bold">Serviceoversigt</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <div className="p-4 bg-white rounded shadow hover:bg-gray-100">
            <img src={service.image} alt={service.name} className="mb-2 rounded" />
            <h2 className="mb-2 text-xl font-bold">{service.name}</h2>
            <p className="mb-2">{service.description}</p>
            <Link to={service.link} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Læs mere</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceOverview;