import React, { useState } from 'react';

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Send confirmation email logic here
    alert('Tak for din forespørgsel. Du vil modtage en bekræftelsesmail snart.');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-eco-green">Indhent tilbud</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-turquoise" htmlFor="name">
              Navn
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Dit navn"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-turquoise" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Din email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-turquoise" htmlFor="service">
              Service
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="service"
              name="service"
              type="text"
              placeholder="Ønsket service"
              value={formData.service}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-turquoise" htmlFor="comments">
              Yderligere kommentarer
            </label>
            <textarea
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="comments"
              name="comments"
              placeholder="Eventuelle yderligere kommentarer"
              value={formData.comments}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-bold text-white bg-eco-green rounded hover:bg-turquoise focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Indsend
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestQuote;