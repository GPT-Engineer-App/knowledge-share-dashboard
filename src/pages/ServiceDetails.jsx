import React from 'react';
import { useParams, Link } from 'react-router-dom';

const serviceDetails = {
  'tekniske-tjenester': {
    title: 'Tekniske Tjenester',
    description: 'Detaljeret beskrivelse af tekniske tjenester.',
    pricing: 'Pris: 500 DKK per time',
    reviews: [
      { user: 'John Doe', comment: 'Fantastisk service!' },
      { user: 'Jane Smith', comment: 'Meget professionel.' },
    ],
    services: ['Service 1', 'Service 2', 'Service 3'],
  },
  'konsulenttjenester': {
    title: 'Konsulenttjenester',
    description: 'Detaljeret beskrivelse af konsulenttjenester.',
    pricing: 'Pris: 1000 DKK per time',
    reviews: [
      { user: 'Alice Johnson', comment: 'Meget hjælpsom.' },
      { user: 'Bob Brown', comment: 'Ekspertrådgivning.' },
    ],
    services: ['Service A', 'Service B', 'Service C'],
  },
  'finansielle-tjenester': {
    title: 'Finansielle Tjenester',
    description: 'Detaljeret beskrivelse af finansielle tjenester.',
    pricing: 'Pris: 1500 DKK per time',
    reviews: [
      { user: 'Charlie Davis', comment: 'Fremragende rådgivning.' },
      { user: 'Dana Lee', comment: 'Meget tilfreds.' },
    ],
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
    <div className="p-6 bg-white">
      <h1 className="mb-4 text-3xl font-bold text-eco-green">{service.title}</h1>
      <p className="mb-4 text-turquoise">{service.description}</p>
      <h2 className="mb-2 text-2xl font-bold text-eco-green">Priser</h2>
      <p className="mb-4 text-turquoise">{service.pricing}</p>
      <h2 className="mb-2 text-2xl font-bold text-eco-green">Brugeranmeldelser</h2>
      <ul className="mb-4 list-disc list-inside text-turquoise">
        {service.reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.user}:</strong> {review.comment}
          </li>
        ))}
      </ul>
      <h2 className="mb-2 text-2xl font-bold text-eco-green">Tilgængelige Tjenester</h2>
      <ul className="list-disc list-inside text-turquoise">
        {service.services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <Link to="/request-quote" className="px-6 py-3 mt-4 text-lg font-bold text-white bg-eco-green rounded hover:bg-turquoise">
        Indhent tilbud
      </Link>
    </div>
  );
};

export default ServiceDetails;