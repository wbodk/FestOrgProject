import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function MainPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData(url /* url - это ссылка на фб */) {
            try {
                const response = await fetch(url, { method: "GET" });
                const jsonData = await response.json();
                setData(jsonData);
                // console.log(jsonData); /* data нужно поместить в отдельное состояние, иначе в реакте использовать данные не получится, т.е. нужен useState */
            } catch (error) {
                console.log(error);
            }
        }
        getData("https://festorgproject-default-rtdb.firebaseio.com/organizatoriFestivala.json");
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">Organizers</h1>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    data ? Object.entries(data).map(([key, item]) => {
                        return (
                            <Link to={`/orgs/${key}`} key={key}>
                                <div className="bg-white rounded-lg shadow-md p-4">
                                    <h2 className="text-xl font-semibold mb-2">{item.naziv}</h2>
                                    <p className="text-gray-600 mb-4">Contact Information: {item.email}</p>
                                    <img src={item.logo} alt="Photo of Organizer" className="w-full h-auto mb-4" />
                                </div>
                            </Link>
                        )
                    }) : <p>Loading...</p>
                }
            </div>
        </div>
    )
}
