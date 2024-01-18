import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Homepage';
import Register from './pages/Register';

// for showing toast messages
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminEditProduct from './pages/admin/AdminEditProduct';
import ChangePassword  from './pages/admin/changepassword';
import AdminRoutes from './protected_routes/AdminRoutes';
import UserRoutes from './protected_routes/UserRoutes';


function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/changepassword' element={<ChangePassword />} />
        

        <Route element={<UserRoutes/>}>
          <Route path='/profile' element={<h1>Profile</h1>} />
        </Route>

        <Route element={<UserRoutes/>}>
          <Route path='/changepp' element={<h1>changepp</h1>} />
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