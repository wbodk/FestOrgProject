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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="naziv"
            value={formData.naziv}
            onChange={handleChange}
            placeholder="Name"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="adresa"
            value={formData.adresa}
            onChange={handleChange}
            placeholder="Address"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
            placeholder="Logo URL"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="godinaOsnivanja"
            value={formData.godinaOsnivanja}
            onChange={handleChange}
            placeholder="Year Founded"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="kontaktTelefon"
            value={formData.kontaktTelefon}
            onChange={handleChange}
            placeholder="Contact Phone"
            className="mb-2 p-2 border rounded w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
          >
            {organizer ? 'Save Changes' : 'Add Organizer'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 bg-gray-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-600"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};
