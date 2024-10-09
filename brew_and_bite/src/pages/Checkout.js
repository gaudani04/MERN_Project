
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'; 

function Checkout() {
  const [cart, setCart] = useState([]);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    console.log('Order confirmed:', {
      cart,
      shippingInfo,
    });

    // Clear the cart
    localStorage.removeItem('cart');
    setCart([]);
    navigate('/'); 
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className='checkout-container'>
      <h2>Checkout</h2>
      {cart.length > 0 ? (
        <>
          <table className="table table-striped text-light">
            <thead>
              <tr>
                <th scope="col">Item Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem, index) => (
                <tr key={index}>
                  <td>{cartItem.name}</td>
                  <td>&#8377;{cartItem.price}</td>
                </tr>
              ))}
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>&#8377;{calculateTotal()}</strong></td>
              </tr>
            </tbody>
          </table>

          <form onSubmit={handleSubmit} className="shipping-form">
            <h3>Shipping Information</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={shippingInfo.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shippingInfo.address}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingInfo.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={shippingInfo.zipCode}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={shippingInfo.country}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-success">Confirm Order</button>
          </form>
        </>
      ) : (
        <p>Your cart is empty. Please add items to your cart before checking out.</p>
      )}
    </div>
  );
}

export default Checkout;
