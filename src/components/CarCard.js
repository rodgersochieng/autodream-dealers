import React, { useState } from 'react';
import TestDriveModal from './TestDriveModal';
import RequestCallModal from './RequestCallModal';

const CarCard = ({ car }) => {
  const [isTestDriveModalOpen, setIsTestDriveModalOpen] = useState(false);
  const [isRequestCallModalOpen, setIsRequestCallModalOpen] = useState(false);

  const handleTestDriveClick = () => setIsTestDriveModalOpen(true);
  const handleRequestCallClick = () => setIsRequestCallModalOpen(true);
  const handleCloseTestDriveModal = () => setIsTestDriveModalOpen(false);
  const handleCloseRequestCallModal = () => setIsRequestCallModalOpen(false);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <img src={car.images[0]} alt={`${car.make} front`} className="mb-2" />
      <img src={car.images[1]} alt={`${car.make} back`} className="mb-4" />
      <h2 className="text-xl font-bold">{car.make} {car.model}</h2>
      <p>Mileage: {car.mileage}</p>
      <p>Seats: {car.seats}</p>
      <p className="font-bold">{car.price}</p>

      <div className="flex space-x-4 mt-4">
        <button className="bg-secondary text-white py-2 px-4 rounded" onClick={handleTestDriveClick}>
          Book Test Drive
        </button>
        <button className="bg-primary text-white py-2 px-4 rounded" onClick={handleRequestCallClick}>
          Request Call
        </button>
      </div>

      {/* Test Drive Modal */}
      <TestDriveModal car={car} isOpen={isTestDriveModalOpen} onClose={handleCloseTestDriveModal} />

      {/* Request Call Modal */}
      <RequestCallModal car={car} isOpen={isRequestCallModalOpen} onClose={handleCloseRequestCallModal} />
    </div>
  );
};

export default CarCard;
