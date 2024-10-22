import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import CategoryPage from './components/CategoryPage/CategoryPage'; 
import Products from './components/products/Products';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/products" element={<Products />} />
      {/* Другие маршруты могут быть добавлены здесь */}
    </Routes>
  );
};

export default App;