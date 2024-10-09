
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css'; 

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const deleteItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  //  calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className='text-light'>
      <h2>Cart Items</h2>
      {cart.length > 0 ? (
        <table className="table table-striped text-light">
          <thead>
            <tr>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem, index) => (
              <tr key={index}>
                <td>{cartItem.name}</td>
                <td>&#8377;{cartItem.price}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteItem(index)}>Delete</button>
                </td>
              </tr>
            ))}
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>&#8377;{calculateTotal()}</strong></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="empty-cart-message">Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;

