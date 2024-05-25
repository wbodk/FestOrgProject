import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function OrganizerPage() {
    const { key } = useParams();
    const [festsKey, setFestsKey] = useState();
    const [organizer, setOrganizer] = useState(null);
    const [festivals, setFestivals] = useState(null);

    useEffect(() => {
        async function fetchOrganizer() {
            try {
                const responseOrgs = await fetch(`https://festorgproject-default-rtdb.firebaseio.com/organizatoriFestivala/${key}.json`);
                const data = await responseOrgs.json();
                setOrganizer(data);

                const responseFests = await fetch(`https://festorgproject-default-rtdb.firebaseio.com/festivali/${data.festivali}.json`)
                const dataFests = await responseFests.json();
                setFestivals(dataFests);
                setFestsKey(data.festivali);
                
            } catch (error) {
                console.error("Failed to fetch organizer:", error);
            }
        }
        fetchOrganizer();
    }, [key]);


    if (!organizer) {
        return <p>Loading...</p>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-4">{organizer.naziv}</h2>
                <img src={organizer.logo} alt="Organizer photo" className="w-full h-auto mb-4" />
                <p className="text-gray-600">
                    <strong>Address:</strong> {organizer.adresa}<br />
                    <strong>Year of Foundation:</strong> {organizer.godinaOsnivanja}<br />
                    <strong>Phone:</strong> {organizer.kontaktTelefon}<br />
                    <strong>Email:</strong> {organizer.email}<br />
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {festivals && Object.entries(festivals).map(([key, item]) => (
                            <Link to={`/fests/${festsKey}/${key}`}>
                                <div className="bg-white rounded-lg shadow-md p-4">
                                    <h3 className="text-xl font-semibold mb-2">{item.naziv}</h3>
                                    <p className="text-gray-600">
                                        Type: {item.tip}<br />
                                        Ticket price: {item.cena}<br />
                                        Max Capacity: {item.maxOsoba}<br />
                                    </p>
                                </div>
                            </Link>
                        ))
                        }
                </div>
            </div>
        </div>
    );
}

