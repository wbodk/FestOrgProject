import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserForm } from '../elements/user-form';

export function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const databaseUrl = 'https://festorgproject-default-rtdb.firebaseio.com/korisnici.json';

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(databaseUrl);
        const data = await response.json();
        const usersArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        setUsers(usersArray);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    }
    fetchUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      await fetch(`https://festorgproject-default-rtdb.firebaseio.com/korisnici/${id}.json`, {
        method: 'DELETE'
      });
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  const handleSaveUser = async (user) => {
    if (user.id) {
      // Update existing user
      try {
        await fetch(`https://festorgproject-default-rtdb.firebaseio.com/${user.id}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        });
        setUsers(users.map(u => (u.id === user.id ? user : u)));
      } catch (error) {
        console.error('Failed to update user:', error);
      }
    } else {
      // Add new user
      try {
        const response = await fetch(databaseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        });
        const data = await response.json();
        setUsers([...users, { ...user, id: data.name }]);
      } catch (error) {
        console.error('Failed to add user:', error);
      }
    }
    setShowUserForm(false);
    setSelectedUser(null);
  };

  const handleOpenUserForm = (user) => {
    setSelectedUser(user);
    setShowUserForm(true);
  };

  const handleCancelForm = () => {
    setShowUserForm(false);
    setSelectedUser(null);
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
              <li key={user.id} className="flex justify-between items-center mb-2">
                <div>
                  <div>{user.ime} {user.prezime}</div>
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
                    onClick={() => setUserToDelete(user)}
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
          {showUserForm && <UserForm user={selectedUser} onSave={handleSaveUser} onClose={handleCancelForm} />}
        </div>
      </div>

      {userToDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete {userToDelete.ime} {userToDelete.prezime}?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => handleDeleteUser(userToDelete.id)}
                className="mr-2 bg-red-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-600"
              >
                Delete
              </button>
              <button
                onClick={() => setUserToDelete(null)}
                className="bg-gray-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
