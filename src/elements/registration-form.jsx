export function RegisterForm({ onClose }) {
  // Логика для формы регистрации
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md relative">
        <h2 className="text-2xl font-semibold mb-4">Sign up</h2>
        {/* Крестик для закрытия формы */}
        <button onClick={onClose} className="absolute top-0 right-0 mr-4 mt-2 text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Форма регистрации */}
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
            <input type="text" id="username" name="username" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input type="password" id="password" name="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
              <input type="text" id="firstName" name="firstName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
              <input type="text" id="lastName" name="lastName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street:</label>
              <input type="text" id="street" name="street" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City:</label>
              <input type="text" id="city" name="city" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code:</label>
              <input type="text" id="postalCode" name="postalCode" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number:</label>
              <input type="text" id="phoneNumber" name="phoneNumber" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="profession" className="block text-sm font-medium text-gray-700">Profession:</label>
            <input type="text" id="profession" name="profession" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-indigo-600">Sign up</button>
        </form>
      </div>
    </div>
  );
}
