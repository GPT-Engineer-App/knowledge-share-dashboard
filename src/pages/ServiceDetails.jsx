import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ComparisonChart from '../components/ComparisonChart';

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
    chartData: {
      categories: ['Service 1', 'Service 2', 'Service 3'],
      series: [
        {
          name: 'Tekniske Tjenester',
          data: [1, 2, 3]
        }
      ]
    }
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
    chartData: {
      categories: ['Service A', 'Service B', 'Service C'],
      series: [
        {
          name: 'Konsulenttjenester',
          data: [4, 5, 6]
        }
      ]
    }
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
    chartData: {
      categories: ['Service X', 'Service Y', 'Service Z'],
      series: [
        {
          name: 'Finansielle Tjenester',
          data: [7, 8, 9]
        }
      ]
    }
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
      <h2 className="mb-2 text-2xl font-bold">Priser</h2>
      <p className="mb-4">{service.pricing}</p>
      <h2 className="mb-2 text-2xl font-bold">Brugeranmeldelser</h2>
      <ul className="mb-4 list-disc list-inside">
        {service.reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.user}:</strong> {review.comment}
          </li>
        ))}
      </ul>
      <h2 className="mb-2 text-2xl font-bold">Tilgængelige Tjenester</h2>
      <ul className="list-disc list-inside">
        {service.services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <ComparisonChart data={service.chartData} />
      <Link to="/request-quote" className="px-6 py-3 mt-4 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
        Indhent tilbud
      </Link>
    </div>
  );
};

export default ServiceDetails;