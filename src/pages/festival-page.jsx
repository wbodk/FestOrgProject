import { Link } from "react-router-dom";

export function FestivalPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-4">Festival name</h2>
                <img src="фото-фестиваля.jpg" alt="Festival photo" className="w-full h-auto mb-4" />
                <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla arcu a ligula convallis consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer vitae lorem eget nulla convallis tempor. Duis ultricies lacinia diam, vitae feugiat risus hendrerit in. Nulla facilisi. Proin efficitur suscipit turpis, eu condimentum tortor maximus sed. Nulla ac nulla sit amet risus ultricies dignissim. Maecenas sed lacus non libero facilisis luctus vel eget purus.
                </p>
                <p className="text-gray-600">
                    <strong>Type:</strong> Musical<br />
                    <strong>Transport:</strong> Bus<br />
                    <strong>Price:</strong> $50<br />
                    <strong>Max Capacity:</strong> 1000<br />
                    <strong>Organizer:</strong> <Link to="/orgs/1">Organizer Name</Link>
                </p>
            </div>
        </div>
    );
}
