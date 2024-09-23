
import React, { useState } from 'react';
import { FaWhatsapp, FaCarAlt, FaTachometerAlt, FaCalendarAlt, FaPhoneAlt,FaMoneyBillAlt } from 'react-icons/fa';
import Slider from 'react-slick';
import TestDriveModal from './TestDriveModal';
import RequestCallModal from './RequestCallModal';

const CarCard = ({ car }) => {
  const [isTestDriveModalOpen, setIsTestDriveModalOpen] = useState(false);
  const [isRequestCallModalOpen, setIsRequestCallModalOpen] = useState(false);

  const handleTestDriveClick = () => setIsTestDriveModalOpen(true);
  const handleRequestCallClick = () => setIsRequestCallModalOpen(true);
  const handleCloseTestDriveModal = () => setIsTestDriveModalOpen(false);
  const handleCloseRequestCallModal = () => setIsRequestCallModalOpen(false);

  const whatsappNumber = '+254729942447';
  const handleWhatsAppInquiry = () => {
    const message = `Hi, I'm requesting details about the ${car.make} ${car.model}.
      Year: ${car.year}, 
      Mileage: ${car.mileage} km, 
      Seats: ${car.seats}, 
      Price: KSH ${car.price}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      {/* Car Image Slider */}
      <Slider {...sliderSettings}>
        <div>
          <img src={car.images[0]} alt={`${car.make} front`} className="mb-2 rounded-lg" />
        </div>
        <div>
          <img src={car.images[1]} alt={`${car.make} back`} className="mb-2 rounded-lg" />
        </div>
      </Slider>

      {/* Car Details */}
      <h2 className="text-xl font-bold mt-4">{car.make} {car.model}</h2>
      <p className="text-gray-600 mb-2">  Price: <span className="font-bold">KSH {car.price}</span></p>

      <div className="flex items-center text-gray-600 space-x-4 mb-4">
        <div className="flex items-center space-x-2">
          <FaCarAlt />
          <span>{car.seats} Seats</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaTachometerAlt />
          <span>{car.mileage}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaCalendarAlt />
          <span>{car.year} YoM</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2 mt-2">
        <button
          className="flex items-center bg-green-600 text-white text-sm py-1 px-2 rounded"
          onClick={handleWhatsAppInquiry}
        >
          <FaWhatsapp className="mr-1" />
          WhatsApp
        </button>
        <button
          className="flex items-center bg-secondary text-white text-sm py-1 px-2 rounded"
          onClick={handleTestDriveClick}
        >
          <FaCalendarAlt className="mr-1" />
          Test Drive
        </button>
        <button
          className="flex items-center bg-primary text-white text-sm py-1 px-2 rounded"
          onClick={handleRequestCallClick}
        >
          <FaPhoneAlt className="mr-1" />
          Call Me
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

