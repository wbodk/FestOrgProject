import { Link } from "react-router-dom";

export function OrganizerPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-4">Organizer name</h2>
                <img src="фото-организатора.jpg" alt="Organizer photo" className="w-full h-auto mb-4" />
                <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla arcu a ligula convallis consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer vitae lorem eget nulla convallis tempor. Duis ultricies lacinia diam, vitae feugiat risus hendrerit in. Nulla facilisi. Proin efficitur suscipit turpis, eu condimentum tortor maximus sed. Nulla ac nulla sit amet risus ultricies dignissim. Maecenas sed lacus non libero facilisis luctus vel eget purus.
                </p>
                <p className="text-gray-600">
                    <strong>Address:</strong> Street 123, City, 12345<br />
                    <strong>Year of Foundation:</strong> 2000<br />
                    <strong>Phone:</strong> +123456789<br />
                    <strong>Email:</strong> email@example.com<br />
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/fests/1">
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-xl font-semibold mb-2">Festival 1</h3>
                        <p className="text-gray-600">
                            Type: Musical<br/>
                            Ticket price: $60<br/>
                            Max Capacity: 1000<br/>
                        </p>
                    </div>
                </Link>

                <Link to="/fests/1">
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-xl font-semibold mb-2">Festival 2</h3>
                        <p className="text-gray-600">
                            Type: Musical<br/>
                            Ticket price: $60<br/>
                            Max Capacity: 1000<br/>
                        </p>
                    </div>
                </Link>
                    {/* Add more festival tiles here */}
                </div>
            </div>
        </div>
    );
}
