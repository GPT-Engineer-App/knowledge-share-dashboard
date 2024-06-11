import React, { useState } from 'react';

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Tak for din forespørgsel. Vi vender tilbage til dig snart.');
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-bold">Support</h1>
      
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">FAQ</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Hvordan opretter jeg en konto?</h3>
          <p>Du kan oprette en konto ved at klikke på "Register" knappen på forsiden og følge instruktionerne.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Hvordan kontakter jeg support?</h3>
          <p>Du kan kontakte support ved at udfylde kontaktformularen nedenfor eller bruge vores live chat.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Hvordan ændrer jeg mine kontooplysninger?</h3>
          <p>Du kan ændre dine kontooplysninger ved at logge ind og gå til din profilside.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Kontakt os</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
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
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
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
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="message">
              Besked
            </label>
            <textarea
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="Din besked"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Indsend
            </button>
          </div>
        </form>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Live Chat</h2>
        <p>Brug vores live chat service for at få øjeblikkelig hjælp.</p>
        {/* Live chat widget integration */}
        <div id="live-chat-widget">
          {/* Placeholder for live chat widget */}
        </div>
      </section>
    </div>
  );
};

export default SupportPage;