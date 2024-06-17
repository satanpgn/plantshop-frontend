import React, { useState } from 'react';
import { registerApi } from '../apis/Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const changeFirstName = (e) => setFirstName(e.target.value);
  const changeLastName = (e) => setLastName(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      password
    };

    registerApi(data)
      .then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message);
          navigate('/login'); // Redirect to login after successful registration
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Internal Server Error!');
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
        <div className="register-container" style={{ border: '10px solid #ccc', borderRadius: '20px', padding: '20px', borderBlockColor:'green'}}>
          <h1 style={{textAlign: 'left', color: 'green', marginTop: '0', marginBottom: '20px', fontSize: '3em'}}>Create Your Account!</h1>
          <form className="w-100" onSubmit={handleSubmit}>
            <div className="form-group m-2 fw-bold">
              <label style={{ color: 'black', textAlign:'center', }}>Firstname</label>
              <input 
                onChange={changeFirstName} 
                className="form-control" 
                type="text" 
                placeholder="Enter your Firstname" 
                required 
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'green' }}
              />
            </div>
            <div className="form-group m-2 fw-bold">
              <label style={{ color: 'black', textAlign:'center' }}>Lastname</label>
              <input 
                onChange={changeLastName} 
                className="form-control" 
                type="text" 
                placeholder="Enter your Lastname" 
                required 
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'green' }}
              />
            </div>
            <div className="form-group m-2 fw-bold">
              <label style={{ color: 'black', textAlign:'center' }}>Email</label>
              <input 
                onChange={changeEmail} 
                className="form-control" 
                type="email" 
                placeholder="Enter your email" 
                required 
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'green' }}
              />
            </div>
            <div className="form-group m-2 fw-bold">
              <label style={{ color: 'black', textAlign:'center' }}>Password</label>
              <input 
                onChange={changePassword} 
                className="form-control" 
                type="password" 
                placeholder="Enter your password" 
                required 
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'green' }}
              />
            </div>
            <button className="btn btn-success m-2 w-25" type="submit" style={{ width: '20%', borderRadius: '10px', textAlign: 'center'}}>
              Submit
            </button>
            <p className="mt-3" style={{ textAlign: 'center', color: '#333' }}>
              Already have an account? <a href="/login" className="text-dark text-decoration-dark fw-bold">Login here</a>
            </p>
          </form>
        </div>
      </body>
    </div>
  );
};

export default Register;
