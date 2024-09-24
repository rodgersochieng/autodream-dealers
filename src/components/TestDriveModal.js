
import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { format } from 'date-fns';

const TestDriveModal = ({ car, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    date: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedDate = new Date(formData.date);
    const today = new Date();

    // Check if the selected date is in the past
    if (selectedDate < today.setHours(0, 0, 0, 0)) {
      setErrorMessage('You cannot select a past date.');
      return;
    }

    // Clear error message if the date is valid
    setErrorMessage('');
    
    // Show success message
    setSuccessMessage(`Test drive booked for ${car.make} ${car.model} on ${format(selectedDate, 'yyyy-MM-dd')}`);

    // Clear form fields
    setFormData({
      phone: '',
      email: '',
      date: '',
    });

    // Automatically close modal after a few seconds (optional)
    setTimeout(() => {
      setSuccessMessage('');
      onClose();
    }, 3000); // Closes the modal after 3 seconds
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Book Test Drive</h2>
        {successMessage && (
          <div className="bg-green-100 text-green-700 p-3 rounded-lg text-center mb-4">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg text-center mb-4">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Preferred Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
              Book
              <FaCalendarAlt className="inline ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestDriveModal;

