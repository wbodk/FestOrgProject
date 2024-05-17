import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function FestivalPage() {
    const { keyB, keyC } = useParams();
    const [festival, setFestival] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFestival() {
            try {
                const url = `https://festorgproject-default-rtdb.firebaseio.com/festivali/${keyB}/${keyC}.json`;
                console.log(`Fetching festival with URL: ${url}`);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched festival data:', data);
                setFestival(data);
            } catch (error) {
                console.error("Failed to fetch festival:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchFestival();
    }, [keyB, keyC]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!festival) {
        return <p>Festival not found</p>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-4">{festival.naziv}</h2>
                <img src={festival.image || "template.jpg"} alt={`Festival photo ${festival.naziv}`} className="w-full h-auto mb-4" />
                <p className="text-gray-600 mb-4">
                    {festival.opis || "No description available"}
                </p>
                <p className="text-gray-600">
                    <strong>Type:</strong> {festival.tip || "N/A"}<br />
                    <strong>Transport:</strong> {festival.prevoz || "N/A"}<br />
                    <strong>Price:</strong> {festival.cena || "N/A"}<br />
                    <strong>Max Capacity:</strong> {festival.maxOsoba || "N/A"}<br />
                    {/* <strong>Organizer:</strong> <Link to={`/orgs/${festival.organizerId}`}>{festival.organizerName || "N/A"}</Link> */}
                </p>
            </div>
        </div>
    );
}
