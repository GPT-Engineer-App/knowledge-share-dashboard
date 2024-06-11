import React, { useState } from 'react';

const subsidyPrograms = [
  {
    id: 1,
    title: 'Program A',
    description: 'Detaljer om tilskudsprogram A.',
    eligibility: 'Kriterier for berettigelse til program A.',
  },
  {
    id: 2,
    title: 'Program B',
    description: 'Detaljer om tilskudsprogram B.',
    eligibility: 'Kriterier for berettigelse til program B.',
  },
  // Add more programs as needed
];

const SubsidyPrograms = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: '',
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
    alert('Tak for din ansøgning. Du vil modtage en bekræftelsesmail snart.');
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-bold text-eco-green">Tilskudsprogrammer</h1>
      <div className="mb-8">
        {subsidyPrograms.map((program) => (
          <div key={program.id} className="mb-6">
            <h2 className="mb-2 text-2xl font-bold text-turquoise">{program.title}</h2>
            <p>{program.description}</p>
            <p className="italic">{program.eligibility}</p>
          </div>
        ))}
      </div>
      <div className="p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-eco-green">Ansøg om tilskud</h2>
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
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="program">
              Vælg program
            </label>
            <select
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
            >
              <option value="">Vælg et program</option>
              {subsidyPrograms.map((program) => (
                <option key={program.id} value={program.title}>
                  {program.title}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="comments">
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
              Indsend ansøgning
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubsidyPrograms;