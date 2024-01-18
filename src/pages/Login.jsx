import React, { useState } from 'react';
import { loginApi } from '../apis/Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password
    };

    loginApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.userData));
          if (res.data.userData.isAdmin) {
            navigate('/admin/dashboard');
          } else {
            navigate('/home');
          }
        
        }
      })

      .catch((err) => {
        console.log(err);
        toast.error('Server Error!');
      });


  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Image Section */}
        <div className="col-md-6 d-none d-md-block">
          <img 
            src="https://thumbs.dreamstime.com/b/stack-old-books-flying-books-isolated-white-55497971.jpg" 
            alt="Login" 
            className="img-fluid" 
            style={{ maxHeight: '100%', width: '100%' }} 
          />
        </div>
        
        {/* Login Section */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Sign in to your account!</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input 
                    id="email" 
                    onChange={changeEmail} 
                    className="form-control" 
                    type="email" 
                    placeholder="Enter your email" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    id="password" 
                    onChange={changePassword} 
                    className="form-control" 
                    type="password" 
                    placeholder="Enter your password" 
                    required 
                  />
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary" type="submit">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
