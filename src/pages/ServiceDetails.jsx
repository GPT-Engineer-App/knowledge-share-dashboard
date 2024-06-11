import React from 'react';
import { useParams } from 'react-router-dom';

const serviceDetails = {
  'tekniske-tjenester': {
    title: 'Tekniske Tjenester',
    description: 'Detaljeret beskrivelse af tekniske tjenester.',
    services: ['Service 1', 'Service 2', 'Service 3'],
  },
  'konsulenttjenester': {
    title: 'Konsulenttjenester',
    description: 'Detaljeret beskrivelse af konsulenttjenester.',
    services: ['Service A', 'Service B', 'Service C'],
  },
  'finansielle-tjenester': {
    title: 'Finansielle Tjenester',
    description: 'Detaljeret beskrivelse af finansielle tjenester.',
    services: ['Service X', 'Service Y', 'Service Z'],
  },
};

const ServiceDetails = () => {
  const { category } = useParams();
  const service = serviceDetails[category];

  if (!service) {
    return <div className="p-6">Service ikke fundet.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-bold">{service.title}</h1>
      <p className="mb-4">{service.description}</p>
      <ul className="list-disc list-inside">
        {service.services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceDetails;