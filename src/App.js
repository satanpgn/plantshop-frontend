import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Homepage';
import Profile from './pages/Profile';
import Register from './pages/Register';

// for showing toast messages
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import AddToCart from './pages/admin/AddToCart';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminEditProduct from './pages/admin/AdminEditProduct';
import ChangePassword from './pages/admin/changepassword';
import AdminRoutes from './protected_routes/AdminRoutes';
import UserRoutes from './protected_routes/UserRoutes';
import EditProfile from './pages/EditProfile';
import AccountPage from './AccountPage';




function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
      <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/account' element={<account />} /> */}

        
      <Route element={<UserRoutes />} >

        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='/cart' element={<AddToCart />} />
        <Route path='/account' element={<AccountPage />} /> {/* Add the route for AccountPage */}

      </Route>
        <Route element={<AdminRoutes />} >
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/edit/:id' element={<AdminEditProduct />} />
        </Route>

      </Routes>

    </Router>
  );
}

export default App;