import React, { useState, useEffect } from 'react';

export const OrganizerForm = ({ organizer, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    naziv: '',
    email: '',
    adresa: '',
    logo: '',
    godinaOsnivanja: '',
    kontaktTelefon: '',
    festivali: ''
  });

  useEffect(() => {
    if (organizer) {
      setFormData(organizer);
    }
  }, [organizer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, id: organizer ? organizer.id : undefined });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-4">{organizer ? 'Edit Organizer' : 'Add Organizer'}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            name="naziv"
            value={formData.naziv}
            onChange={handleChange}
            placeholder="Name"
            className="mb-2 p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="mb-2 p-2 border rounded"
          />
          <input
            type="text"
            name="adresa"
            value={formData.adresa}
            onChange={handleChange}
            placeholder="Address"
            className="mb-2 p-2 border rounded"
          />
          <input
            type="text"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
            placeholder="Logo URL"
            className="mb-2 p-2 border rounded"
          />
          <input
            type="text"
            name="godinaOsnivanja"
            value={formData.godinaOsnivanja}
            onChange={handleChange}
            placeholder="Year Founded"
            className="mb-2 p-2 border rounded"
          />
          <input
            type="text"
            name="kontaktTelefon"
            value={formData.kontaktTelefon}
            onChange={handleChange}
            placeholder="Contact Phone"
            className="mb-2 p-2 border rounded"
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {organizer ? 'Save Changes' : 'Add Organizer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
