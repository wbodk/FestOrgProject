import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { OrganizerForm } from '../elements/organizer-form';

const FIREBASE_URL = 'https://festorgproject-default-rtdb.firebaseio.com/';

export const AdminOrganizerPage = () => {
  const [organizers, setOrganizers] = useState([]);
  const [festivals, setFestivals] = useState({});
  const [selectedOrganizer, setSelectedOrganizer] = useState(null);
  const [newFestival, setNewFestival] = useState({
    naziv: '',
    opis: '',
    tip: '',
    prevoz: '',
    cena: '',
    maxOsoba: '',
    slike: []
  });
  const [showOrganizerForm, setShowOrganizerForm] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchOrganizers();
  }, []);

  const fetchOrganizers = async () => {
    try {
      const response = await fetch(`${FIREBASE_URL}organizatoriFestivala.json`);
      const data = await response.json();
      const fetchedOrganizers = Object.keys(data).map(key => ({ id: key, ...data[key] }));
      setOrganizers(fetchedOrganizers);
      fetchFestivals(fetchedOrganizers);
    } catch (error) {
      console.error("Failed to fetch organizers:", error);
    }
  };

  const fetchFestivals = async (organizers) => {
    try {
      const festivalsData = {};
      for (const organizer of organizers) {
        if (organizer.festivali) {
          const festivalKey = organizer.festivali;
          const response = await fetch(`${FIREBASE_URL}festivali/${festivalKey}.json`);
          const data = await response.json();
          festivalsData[festivalKey] = data;
        }
      }
      setFestivals(festivalsData);
    } catch (error) {
      console.error("Failed to fetch festivals:", error);
    }
  };

  const handleAddOrganizer = async (organizerData) => {
    try {
      const response = await fetch(`${FIREBASE_URL}organizatoriFestivala.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(organizerData),
      });
      const data = await response.json();
      setOrganizers([...organizers, { id: data.name, ...organizerData }]);
      setMessage("Organizer added successfully");
    } catch (error) {
      console.error("Failed to add organizer:", error);
    }
  };

  const handleDeleteOrganizer = async (id) => {
    try {
      await fetch(`${FIREBASE_URL}organizatoriFestivala/${id}.json`, {
        method: 'DELETE',
      });
      setOrganizers(organizers.filter(org => org.id !== id));
      setMessage("Organizer deleted successfully");
    } catch (error) {
      console.error("Failed to delete organizer:", error);
    }
  };

  const handleEditOrganizer = (organizer) => {
    setSelectedOrganizer(organizer);
    setShowOrganizerForm(true);
  };

  const handleUpdateOrganizer = async (updatedOrganizer) => {
    try {
      const { id, ...organizerDataWithoutId } = updatedOrganizer;
      await fetch(`${FIREBASE_URL}organizatoriFestivala/${id}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(organizerDataWithoutId),
      });
      setOrganizers(organizers.map(org => (org.id === id ? updatedOrganizer : org)));
      setSelectedOrganizer(null);
      setShowOrganizerForm(false);
      setMessage("Organizer updated successfully");
    } catch (error) {
      console.error("Failed to update organizer:", error);
    }
  };

  const handleAddFestival = async () => {
    if (selectedOrganizer) {
      try {
        const response = await fetch(`${FIREBASE_URL}festivali.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFestival),
        });
        const data = await response.json();
        const festivalKey = data.name;

        const updatedOrganizer = {
          ...selectedOrganizer,
          festivali: festivalKey
        };

        await handleUpdateOrganizer(updatedOrganizer);
        setFestivals({ ...festivals, [festivalKey]: newFestival });
        setNewFestival({
          naziv: '',
          opis: '',
          tip: '',
          prevoz: '',
          cena: '',
          maxOsoba: '',
          slike: []
        });
        setMessage("Festival added successfully");
      } catch (error) {
        console.error("Failed to add festival:", error);
      }
    }
  };

  const handleEditFestival = (festivalKey, updatedFestival) => {
    setFestivals({ ...festivals, [festivalKey]: updatedFestival });
  };

  const handleUpdateFestival = async (festivalKey, updatedFestival) => {
    try {
      await fetch(`${FIREBASE_URL}festivali/${festivalKey}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFestival),
      });
      setFestivals({ ...festivals, [festivalKey]: updatedFestival });
      setMessage("Festival updated successfully");
    } catch (error) {
      console.error("Failed to update festival:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
      </header>
      {message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{message}</span>
          <button onClick={() => setMessage(null)} className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-6 w-6 text-green-500" role="button" viewBox="0 0 20 20">
              <title>Close</title>
              <path d="M14.348 14.849a1 1 0 01-1.414 0L10 11.414 7.066 14.348a1 1 0 01-1.414-1.414L8.586 10 5.652 7.066a1 1 0 011.414-1.414L10 8.586l2.934-2.934a1 1 0 011.414 1.414L11.414 10l2.934 2.934a1 1 0 010 1.415z"/>
            </svg>
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Organizers</h2>
          <ul>
            {organizers.map((organizer) => (
              <li key={organizer.id} className="flex justify-between items-center">
                <Link to={`/admin/organizer/${organizer.id}`}>{organizer.naziv}</Link>
                <div className="flex">
                  <button
                    onClick={() => handleEditOrganizer(organizer)}
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
          <button
            onClick={() => {
              setSelectedOrganizer(null);
              setShowOrganizerForm(true);
            }}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
          >
            Add organizer
          </button>
          {showOrganizerForm && (
            <OrganizerForm
              organizer={selectedOrganizer}
              onSave={selectedOrganizer ? handleUpdateOrganizer : handleAddOrganizer}
              onClose={() => setShowOrganizerForm(false)}
            />
          )}
          {selectedOrganizer && (
            <div className="mt-4">
              <button
                onClick={handleAddFestival}
                className="bg-green-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-green-600"
              >
                Add Festival to {selectedOrganizer.naziv}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
