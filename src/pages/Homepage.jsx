import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { create_order, getAllProductsApi } from "../apis/Api";


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchQueryUsers, setSearchQueryUsers] = useState("");
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState(1);
  const [userData, setUserData] = useState(null);
  


  useEffect(() => {
    getAllProductsApi(id).then((res) => {
      setProducts(res.data.products);
    });
  }, []);
  
//search button function
  const handleSearchUsers = (e) => {
    e.preventDefault();
    
 
    const filteredUsers = products.filter((products) => {
      const lowerCaseQuery = searchQueryUsers.toLowerCase();
      return products.productName.toLowerCase().includes(lowerCaseQuery);
      // user.firstName.toLowerCase().includes(lowerCaseQuery)
      // (user.phone && user.phone.toString().includes(lowerCaseQuery)) ||
      // user.token.toLowerCase().includes(lowerCaseQuery)
    });
    setProducts(filteredUsers);
  };
//add to the cart
  const addToCart = (index) => {
    const storedUserData = JSON.parse(localStorage.getItem("user"));
    setUserData(storedUserData);
  
    const productToAdd = products[index]; // Get the product based on the index
  
    if (!cart.find((item) => item.id === productToAdd._id)) {
      const orderData = {
        userId: storedUserData._id,
        productId: productToAdd._id, // Set productId based on productToAdd
        orderId: index.toString(), // Set orderId based on index
        quantity: cartValue,
      };
  
      create_order(orderData)
        .then((res) => {
          if (res.data.success === false) {
            toast.error(res.data.message);
          } else {
            setCart([
              ...cart,
              {
                id: productToAdd._id,
                name: productToAdd.productName,
                price: productToAdd.productPrice,
                quantity: cartValue,
                orderId: res.data.order.orderId,
              },
            ]);
            alert("Item added to cart!");
          }
        })
        .catch((err) => {
          toast.error("Server Error");
          console.log(err.message);
        });
    } else {
      alert("Item is already in the cart!");
    }
  };
  

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px' }}>
      <h1 style={{ textAlign: 'center', color: 'green', fontWeight: 'bold' }}>Find Your Perfect Plant</h1>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', position: 'relative' }}>
        <img
          src="https://img.freepik.com/free-photo/small-cacti-with-white-wall-background_53876-133169.jpg?w=1060&t=st=1706449718~exp=1706450318~hmac=0ed71bc17a3e0aa8ea75fc3edb317804c50e504651b6b7a2077ff36d4a1ad3db"
          alt="Introduction"
          style={{ height: '500px', width: '100%', borderRadius: '10px' }}
        />
        <button
          className="secondary-button"
          style={{
            position: 'absolute',
            top: '70%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px', // Adjust the padding as needed
            background: 'green', // Change the background color
            color: '#fff', // Change the text color
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Get Started <FiArrowRight />
        </button>
      </div>
      <form className="d-flex me-2" onSubmit={handleSearchUsers}>
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search Product..."
                aria-label="Search"
                value={searchQueryUsers }
                onChange={(e) => setSearchQueryUsers(e.target.value)}
                style={{
                  width: '300px', // Set the width as needed
                  padding: '10px', // Set the padding as needed
                  marginRight: '10px', // Add margin-right for spacing
                  borderRadius: '5px', // Add border radius
                  border: '1px solid #ccc',
                  marginTop: '10px' // Add border
                }}
              />              
              <button className="btn btn-outline-success" type="submit" style={{padding:'10px', borderRadius:'5px', border:'1px solid #ccc', marginTop:'10px'}}>Search</button>
            </form>

      <h2 style={{ textAlign: 'center', color: 'green', fontWeight: 'bold', marginTop: '20px' }}>New Arrivals</h2>

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px' }}>
      {products.map((product, index) => (
  <div key={product._id} style={{ margin: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '10px', textAlign: 'center' }}>
    <img src={product.productImageUrl} alt={product.productName} style={{ width: '413px', height: '500px', objectFit: 'cover', borderRadius: '5px' }} />
    <h3 style={{ marginTop: '10px', color: '#333' }}>{product.productName}</h3>
    <h3 style={{ marginTop: '10px', color: '#333' }}>{product.productPrice}</h3>
    <button style={{ padding: '10px', background: 'green', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>
      Order Now
    </button>
    <button onClick={() => addToCart(index)} style={{ padding: '10px', background: 'green', color: '#fff', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>
      Add to Cart
    </button>
  </div>
))}
      </div>

      {/* Grid container for services, location, contacts, and about */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '40px' }}>
        <div style={{ width: '413px', height: '400px', textAlign: 'left', padding: '20px', backgroundColor: 'green', borderRadius: '0px' }}>
        <h3 style={{ fontWeight: 'bold', color: 'black' }}>Our Services</h3>
          <ul>
            <li>Buy Plants and Accessories</li>
            <li>Plants and Consultation</li>
            <li>Plants Installation</li>
          </ul>
        </div>
        <div style={{ textAlign: 'left', padding: '20px', backgroundColor: 'green', borderRadius: '0px' }}>
        <h3 style={{ fontWeight: 'bold', color: 'black' }}>Location</h3>
          <ul>
            <li>Visit Office</li>
            <span>Chameli Marg, New Baneshwor</span>
            <span>Akriti Marga, Maharajgunj</span>        
          </ul>
        </div>
        <div style={{ textAlign: 'left', padding: '20px', backgroundColor: 'green', borderRadius: '0px' }}>
        <h3 style={{ fontWeight: 'bold', color: 'black' }}>Contacts</h3>
          <ul>
            <li>Call any time</li>
            <span>9805940807</span>
            <li>Send Email</li>
            <span>getbikeshchy@gmail.com</span>          
          </ul>
        </div>
        <div style={{ textAlign: 'left', padding: '20px', backgroundColor: 'green', borderRadius: '0px' }}>
        <h3 style={{ fontWeight: 'bold', color: 'black' }}>About Us</h3>
          <ul>
            <li>Who We Are</li>
            <li>Our Story</li>
            <li>Working at Planti.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
