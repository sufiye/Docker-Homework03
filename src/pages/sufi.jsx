import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sufi = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-pink-100">
      
      <div className="bg-white shadow-xl rounded-2xl p-6 text-center border-2 border-pink-300">
        
        {/* Cat */}
        <div className="text-6xl mb-4">🐱</div>

        {/* Greeting */}
        <h1 className="text-2xl font-bold text-pink-600 mb-4">
          Salam Nadir müəllim!
        </h1>

        {/* Pink Back Button */}
        <button
          onClick={() => navigate('/')}
          className="bg-pink-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-pink-600 hover:scale-105 transition-all duration-200"
        >
          Back
        </button>

      </div>
    </div>
  );
};

export default Sufi;