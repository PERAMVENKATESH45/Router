import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CartContext } from '../context/Cartcontext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data));
  }, []);

  const addToCart = (product) => {
    const item = cart.find(p => p.id === product.id);
    if (item) {
      setCart(cart.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded-lg shadow-md">
          <img src={product.image} alt={product.title} className="h-40 mx-auto" />
          <h2 className="text-lg font-bold mt-2">{product.title}</h2>
          <p>${product.price}</p>
          {cart.some(p => p.id === product.id) ? (
            <button onClick={() => addToCart(product)} className="bg-gray-500 text-white px-4 py-2 mt-2">Added</button>
          ) : (
            <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 mt-2">Add to Cart</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;