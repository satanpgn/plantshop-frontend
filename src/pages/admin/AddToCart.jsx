import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getallorderapi } from "../../apis/Api";
 
const Cart = () => {
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState(null);
 
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("user"));
    setUserData(storedUserData);
 
    getallorderapi(storedUserData._id)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          setCart(res.data.order);
        }
      })
      .catch((err) => {
        toast.error("Server Error");
        console.log(err.message);
      });
  }, [id]);
 //add product to cart
  const addToCart = (product) => {
    const updatedCart = cart.map((item) =>
      item.productId._id === product.productId._id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  };
 
  const removeFromCart = (product) => {
    const updatedCart = cart.map((item) =>
      item.productId._id === product.productId._id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };
 
  const getTotalPrice = () => {
    return cart
      .reduce(
        (total, item) => total + item.productId.productPrice * item.quantity,
        0
      )
      .toFixed(2);
  };
 
  const checkout = () => {
    alert("Checkout successful!");
    setCart([]);
  };
 
  const CartItem = ({ item, quantity, increase, decrease }) => {
    return (
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          margin: "10px",
          maxWidth: "600px",
          maxHeight: "200",
        }}
      >
        <img
          src={item.productId.productImageUrl}
          alt={item.productId.productName}
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        />
        <span>{item.productId.productName}</span>
        <span style={{ margin: "0 10px" }}>
          Price: NPR {item.productId.productPrice}
        </span>
        <span style={{ marginRight: "10px" }}>Quantity: {quantity}</span>
        <button style={{ marginRight: "5px" }} onClick={() => increase(item)}>
          +
        </button>
        <button onClick={() => decrease(item)}>-</button>
      </div>
    );
  };
 
  return (
    <div className="cart-container">
      <h1 className="cart-heading"> My Cart </h1>
      {cart.map((item) => (
        <CartItem
          key={item._id}
          item={item}
          quantity={item.quantity}
          increase={addToCart}
          decrease={removeFromCart}
        />
      ))}
      <div className="cart-summary">
        <h3>Total: NPR {getTotalPrice()}</h3>
        <button className="checkout-button" onClick={checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
};
 
export default Cart;
 