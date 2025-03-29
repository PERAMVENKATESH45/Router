import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/Cartcontext';
import Products from './pages/Products';
import Carts from './pages/Carts';


const App = () => {
  return (
    <CartProvider>
      <Router>
        <nav className="p-4 shadow-md flex justify-between">
          <Link to="/" className="text-xl font-bold">Products</Link>
          <Link to="/cart" className="text-xl">Cart</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Carts/>} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;