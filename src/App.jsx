import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Sufi from './pages/sufi'; // pişik səhifəsi

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='h-screen flex flex-col items-center justify-center bg-gray-100'>

      <div className='border-2 border-rose-800 rounded-2xl p-5 bg-white shadow-xl'>

        <h1 className='text-3xl text-pink-500 mb-4'>
          Sufiye Huseynzade
        </h1>

        <button
          onClick={() => navigate('/sufi')}
          className='bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition'
        >
         Click meeee
        </button>

      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sufi' element={<Sufi />} />
      </Routes>
    </Router>
  );
};

export default App;