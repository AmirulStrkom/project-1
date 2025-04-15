import React, { useState } from 'react';

export default function RandomNumberApp() {
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setNumber(random);
  };

  const getStatus = () => {
    if (number === null) return '';
    return number > 60 ? 'Kurang Baik' : 'Baik';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Random Number Checker</h1>
      <button
        onClick={generateRandomNumber}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-4"
      >
        Generate Number
      </button>
      {number !== null && (
        <div className="text-xl">
          <p>Angka: <strong>{number}</strong></p>
          <p>Status: <strong>{getStatus()}</strong></p>
        </div>
      )}
    </div>
  );
}