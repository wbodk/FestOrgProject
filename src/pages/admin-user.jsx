import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserForm } from '../elements/user-form';

export function AdminUsersPage() {
  const [showUserForm, setShowUserForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', name: 'User 1' },
    { id: 2, username: 'user2', name: 'User 2' },
    // Добавьте остальных пользователей по аналогии
  ]);

  const handleOpenUserForm = (user) => {
    setSelectedUser(user);
    setShowUserForm(true);
  };

  // Функция для удаления пользователя
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Admin Users Panel</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id} className="flex justify-between items-center">
                <div>
                  <div>{user.name}</div>
                  <div className="text-sm text-gray-500">{user.username}</div>
                </div>
                <div className="flex">
                  <button
                    onClick={() => handleOpenUserForm(user)}
                    className="p-1 rounded-full focus:outline-none focus:shadow-outline bg-transparent hover:bg-blue-100"
                  >
                    <FontAwesomeIcon icon={faEdit} className="text-blue-500" />
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
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
          <button onClick={() => handleOpenUserForm(null)} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600">
            <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Add user
          </button>
          {showUserForm && <UserForm user={selectedUser} onClose={() => setShowUserForm(false)} />}
        </div>
      </div>
    </div>
  );
}
