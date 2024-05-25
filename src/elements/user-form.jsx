import React, { useState, useEffect } from 'react';

export function UserForm({ user, onSave, onClose }) {
  const [userData, setUserData] = useState({
    adresa: '',
    datumRodjenja: '',
    email: '',
    ime: '',
    korisnickoIme: '',
    lozinka: '',
    prezime: '',
    telefon: '',
    zanimanje: ''
  });

  useEffect(() => {
    if (user) {
      setUserData({
        adresa: user.adresa || '',
        datumRodjenja: user.datumRodjenja || '',
        email: user.email || '',
        ime: user.ime || '',
        korisnickoIme: user.korisnickoIme || '',
        lozinka: user.lozinka || '',
        prezime: user.prezime || '',
        telefon: user.telefon || '',
        zanimanje: user.zanimanje || ''
      });
    }
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userDataWithId = { ...userData };
    if (user && user.id) {
      userDataWithId.id = user.id;
    }
    onSave(userDataWithId);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">{user ? 'Edit User' : 'Add User'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="ime" className="block text-sm font-medium text-gray-700">First Name:</label>
            <input
              type="text"
              id="ime"
              name="ime"
              value={userData.ime}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="prezime" className="block text-sm font-medium text-gray-700">Last Name:</label>
            <input
              type="text"
              id="prezime"
              name="prezime"
              value={userData.prezime}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="adresa" className="block text-sm font-medium text-gray-700">Address:</label>
            <input
              type="text"
              id="adresa"
              name="adresa"
              value={userData.adresa}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telefon" className="block text-sm font-medium text-gray-700">Phone Number:</label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              value={userData.telefon}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="zanimanje" className="block text-sm font-medium text-gray-700">Profession:</label>
            <input
              type="text"
              id="zanimanje"
              name="zanimanje"
              value={userData.zanimanje}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="korisnickoIme" className="block text-sm font-medium text-gray-700">Username:</label>
            <input
              type="text"
              id="korisnickoIme"
              name="korisnickoIme"
              value={userData.korisnickoIme}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lozinka" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="text"
              id="lozinka"
              name="lozinka"
              value={userData.lozinka}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="datumRodjenja" className="block text-sm font-medium text-gray-700">Date of birth:</label>
            <input
              type="text"
              id="datumRodjenja"
              name="datumRodjenja"
              value={userData.datumRodjenja}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mt-6 flex justify-end">
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
              {user ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
