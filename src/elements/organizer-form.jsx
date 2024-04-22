export function OrganizerForm({ onClose }) {
  // Функция для закрытия формы
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ваша логика для отправки данных формы
  };

  return (
    <div className="text-xl font-semibold mb-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md relative">
        <h2 className="text-2xl font-semibold mb-4">Organizer Details</h2>
        {/* Крестик для закрытия формы */}
        <button onClick={onClose} className="absolute top-0 right-0 mr-4 mt-2 text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Форма для ввода данных об организаторе */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
            <input type="text" id="address" name="address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="founded" className="block text-sm font-medium text-gray-700">Founded:</label>
            <input type="text" id="founded" name="founded" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="logo" className="block text-sm font-medium text-gray-700">Logo:</label>
            <input type="file" id="logo" name="logo" accept="image/*" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone:</label>
            <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="festivals" className="block text-sm font-medium text-gray-700">Festivals:</label>
            <textarea id="festivals" name="festivals" rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"></textarea>
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-indigo-600">Submit</button>
        </form>
      </div>
    </div>
  );
}