import { Link } from "react-router-dom";

export function MainPage(){
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">Organizers</h1>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/orgs/1">
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-semibold mb-2">Organizer Name 1</h2>
                        <p className="text-gray-600 mb-4">Contact Information: email@example.com</p>
                        <img src="organizer-photo-1.jpg" alt="Photo of Organizer 1" className="w-full h-auto mb-4" />
                    </div>
                </Link>
                <Link to="/orgs/1">
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-semibold mb-2">Organizer Name 2</h2>
                        <p className="text-gray-600 mb-4">Contact Information: email@example.com</p>
                        <img src="organizer-photo-2.jpg" alt="Photo of Organizer 2" className="w-full h-auto mb-4" />
                    </div>
                </Link>
                {/* Repeat the above structure for other organizers */}
            </div>
        </div>
    )
}
