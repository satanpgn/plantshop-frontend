import React, { useState, useEffect } from "react";
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getAllUserorderApi } from "../apis/Api";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  // const [cart, setCart] = useState([]);

  // const { id } = useParams();
  // useEffect(() => {
  //   getAllUserorderApi(id).then((res) => {
  //     setCart(res.data.order);
  //   });
  // }, [id]);
 

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/login');
  };
 
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div>
            <Link className="navbar-brand text-success fw-bold fs-4" to="#">
              Planti.
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active me-2 fw-bold" aria-current="page" to={"/home"} 
                style={{ fontFamily: 'Tisa Offc Serif Pro'}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to={"/product"}
                style={{ fontFamily: 'Tisa Offc Serif Pro'}}>
                  Products
                </Link>
              </li>              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle fw-bold"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontFamily: 'Tisa Offc Serif Pro'}}
                >
                  Top Selling
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#"
                    style={{ fontFamily: 'Tisa Offc Serif Pro'}}>
                      Money Plant
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#"
                    style={{ fontFamily: 'Tisa Offc Serif Pro'}}>
                      Snake Plant
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#"
                    style={{ fontFamily: 'Tisa Offc Serif Pro'}}>
                      Cactus
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            {/* Add to Cart Button */}
            <Link to="/cart" className="btn btn-outline-success me-2">
              <FaShoppingCart />
            </Link>
          
            

            {/* User Authentication Section */}
            {user ? (
              <div className="dropdown">
                <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Welcome, {user.firstName}!
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to={"/profile"}>Profile</Link></li>
                  <li><Link className="dropdown-item" to={"/changepassword"}>Change Password</Link></li>
                  <li><button onClick={handleLogout} className="dropdown-item" to="/logout">Log Out</button></li>
                </ul>
              </div>
            ) : (
              <div className="d-flex">
                <Link className="btn btn-outline-success me-2" to={'/login'}>Login</Link>
                <Link className="btn btn-outline-success" to={'/register'}>Register</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
