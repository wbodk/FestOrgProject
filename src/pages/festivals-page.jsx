import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export function FestivalsPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData(url) {
            try {
                const response = await fetch(url, { method: "GET" });
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.log(error);
            }
        }
        getData("https://festorgproject-default-rtdb.firebaseio.com/festivali.json");
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">Festivals</h1>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data ? Object.entries(data).map(([keyB, objectB]) => (
                    Object.entries(objectB).map(([keyC, itemC]) => (
                        <Link to={`/fests/${keyB}/${keyC}`} key={keyC}>
                            <div className="bg-white rounded-lg shadow-md p-4">
                                <h2 className="text-xl font-semibold mb-2">{itemC.naziv}</h2>
                                <img src={itemC.image || "template.jpg"} alt={`Festival photo ${itemC.naziv}`} className="w-full h-auto mb-4" />
                            </div>
                        </Link>
                    ))
                )) : <p>Loading...</p>}
            </div>
        </div>
    );
}
