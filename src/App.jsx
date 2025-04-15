import React, { useState } from 'react';

export default function RandomNumber() {
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setNumber(random);
  };

  const getStatus = () => {
    if (number === null) return '';
    return number > 60 ? 'Baik' : 'Kurang Baik';
  };

  return (
    <div>
      <h1 >Cek Nomor Random</h1>
      <button onClick={generateRandomNumber}>
        Tampilkan Nomor
      </button>
      {number !== null && (
        <div>
          <p>Angka : <strong>{number}</strong></p>
          <p>Status : <strong>{getStatus()}</strong></p>
        </div>
      )}
    </div>
  );
}