import React, { useState } from 'react';
import { loginApi } from '../apis/Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);

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
    <div className="box">
      <body
        style={{
          fontFamily: 'Arial, sans-serif',
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundImage: "url('https://img.freepik.com/free-photo/arrangement-green-plant-with-copy-space_23-2148831225.jpg?w=1380&t=st=1706354113~exp=1706354713~hmac=c02b3846b46a1efa030eb6d2ffd43a8c6e9c70f94070cc3b9c2ee75d9fb128c1')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="login-container" style={{ border: '10px solid #ccc', borderRadius: '20px', borderBlockColor:'green', padding: '80px' }}>
          <h1 style={{textAlign: 'left', color: 'green', marginTop: '0', marginBottom: '20px', fontSize: '4em'}}>Login Here!</h1>
          <form className="w-100" onSubmit={handleSubmit}>
            <div className="form-group fw-bold m-2 ">
              <label style={{ color: 'black',textAlign:'center', }}>Email Address</label>
              <input
                id="email"
                onChange={changeEmail}
                className="form-control"
                type="email"
                placeholder="Enter your email"
                required
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'green' }}
              />
            </div>
            <div className="form-group fw-bold m-2">
              <label style={{ color: 'black', textAlign:'center' }}>Password</label>
              <input
                id="password"
                onChange={changePassword}
                className="form-control"
                type="password"
                placeholder="Enter your password"
                required
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'green' }}
              />
            </div>
            <button className="btn btn-success m-2" type="submit" style={{ width: '30%', borderRadius: '10px', textAlign: 'center'}}>
              Login
            </button>
            <br></br>
            <a href="/register" className="text-dark text-decoration-dark fw-bold" style={{ display: 'block', textAlign: 'center', marginTop: '10px', color: '#333' }}>
              Don't have an account? SignUp
            </a>
          </form>
        </div>
      </body>
    </div>
  );
};

export default Login;
