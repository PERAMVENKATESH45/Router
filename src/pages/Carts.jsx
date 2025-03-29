import React, { useContext } from 'react';
import { CartContext } from '../context/Cartcontext';

const Carts = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeFromCart = (id) => setCart(cart.filter(p => p.id !== id));

  const updateQuantity = (id, delta) => {
    setCart(cart.map(p => p.id === id ? { ...p, quantity: Math.max(p.quantity + delta, 1) } : p));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedPrice = totalPrice * 0.9;

  return (
    <div className="p-4">
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h2>{item.title}</h2>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <div>
                <button onClick={() => updateQuantity(item.id, 1)} className="bg-green-500 text-white px-2 py-1">+</button>
                <button onClick={() => updateQuantity(item.id, -1)} className="bg-red-500 text-white px-2 py-1 ml-2">-</button>
                <button onClick={() => removeFromCart(item.id)} className="bg-gray-500 text-white px-4 py-2 ml-4">Remove</button>
              </div>
            </div>
          ))}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <h3>Final Price after 10% Discount: ${discountedPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Carts;