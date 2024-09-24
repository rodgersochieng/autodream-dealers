import React, { useState } from 'react';
import CarCard from '../components/CarCard';
import carsData from '../assets/carData.json';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCars = carsData.filter(car =>
    car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <h5 className="text-4xl font-bold text-center mb-5"> Find your next drive</h5> 
      
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for cars..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>

      {/* Car Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
