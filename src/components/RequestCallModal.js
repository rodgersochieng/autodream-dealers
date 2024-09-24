
import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const RequestCallModal = ({ car, isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic phone number validation
    if (!/^\d{10,12}$/.test(phone)) {
      setErrorMessage('Please enter a valid phone number.');
      return;
    }

    // Clear error and show success message
    setErrorMessage('');
    setSuccessMessage(`We will call you soon regarding the ${car.make} ${car.model}.`);

    // Clear form fields
    setPhone('');

    // Auto-close modal after showing success (optional)
    setTimeout(() => {
      setSuccessMessage('');
      onClose();
    }, 3000); // Modal closes after 3 seconds
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Request a Call</h2>
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
              type="number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Enter your phone number in 07 format"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
              Request Call
              <FaPhoneAlt className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestCallModal;

