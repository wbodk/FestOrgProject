import React, { useState } from 'react';

export function UserForm({ user, onClose }) {
  const [username, setUsername] = useState(user ? user.username : '');
  const [password, setPassword] = useState(user ? user.password : '');
  const [firstName, setFirstName] = useState(user ? user.firstName : '');
  const [lastName, setLastName] = useState(user ? user.lastName : '');
  const [address, setAddress] = useState(user ? user.address : '');
  const [phoneNumber, setPhoneNumber] = useState(user ? user.phoneNumber : '');
  const [profession, setProfession] = useState(user ? user.profession : '');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь можно выполнить логику сохранения данных пользователя, например, отправить запрос на сервер
    // После успешного сохранения можно закрыть форму
    onClose();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{user ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="profession" className="block text-sm font-medium text-gray-700">Profession:</label>
          <input
            type="text"
            id="profession"
            name="profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
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
  );
}
