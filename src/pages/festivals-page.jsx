import React from 'react';
import { Link } from 'react-router-dom';

export function FestivalsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">Festivals</h1>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/fests/1">
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-semibold mb-2">Festival name 1</h2>
                        <img src="template.jpg" alt="Festival photo 1" className="w-full h-auto mb-4" />
                    </div>
                </Link>
                <Link to="/fests/1">
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-semibold mb-2">Festival name 2</h2>
                        <img src="template.jpg" alt="Festival photo 2" className="w-full h-auto mb-4" />
                    </div>
                </Link>
            </div>
        </div>
    );
}