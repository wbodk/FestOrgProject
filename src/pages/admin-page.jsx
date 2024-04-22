import React from 'react';
import { Link } from 'react-router-dom';

export function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <p className="text-gray-600 mb-4">Manage all users on the site.</p>
          <Link
            to="/admin/usr"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Manage Users
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Organizers</h2>
          <p className="text-gray-600 mb-4">Manage all festival organizers.</p>
          <Link
            to="/admin/org"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Manage Organizers
          </Link>
        </div>
      </div>
    </div>
  );
}
