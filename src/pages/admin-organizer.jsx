import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { OrganizerForm } from '../elements/organizer-form';

export function AdminOrganizerPage() {
  const [showOrganizerForm, setShowOrganizerForm] = useState(false);
  const [selectedOrganizer, setSelectedOrganizer] = useState(null);
  const [organizers, setOrganizers] = useState([
    { id: 1, name: 'Organizer 1' },
    { id: 2, name: 'Organizer 2' },
    // Добавьте остальных организаторов по аналогии
  ]);

  // Функция для удаления организатора
  const handleDeleteOrganizer = (id) => {
    setOrganizers(organizers.filter((organizer) => organizer.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Organizers</h2>
          <ul>
            {organizers.map((organizer) => (
              <li key={organizer.id} className="flex justify-between items-center">
                <Link to={`/admin/organizer/${organizer.id}`}>{organizer.name}</Link>
                <div className="flex">
                  <button
                    onClick={() => {
                      setSelectedOrganizer(organizer);
                      setShowOrganizerForm(true);
                    }}
                    className="p-1 rounded-full focus:outline-none focus:shadow-outline bg-transparent hover:bg-blue-100"
                  >
                    <FontAwesomeIcon icon={faEdit} className="text-blue-500" />
                  </button>
                  <button
                    onClick={() => handleDeleteOrganizer(organizer.id)}
                    className="p-1 rounded-full focus:outline-none focus:shadow-outline bg-transparent hover:bg-red-100"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} className="text-red-500" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Actions</h2>
          <button onClick={() => setShowOrganizerForm(true)} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600">
            Add organizer
          </button>
          {showOrganizerForm && <OrganizerForm organizer={selectedOrganizer} onClose={() => setShowOrganizerForm(false)} />}
        </div>
      </div>
    </div>
  );
}
