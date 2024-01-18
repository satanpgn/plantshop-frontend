import React, { useState } from 'react';
import { registerApi } from '../apis/Api';
import { toast } from 'react-toastify';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <div className="container mt-5">
      <div className="row">
        {/* Image Section */}
        <div className="col-md-6 d-none d-md-block">
          <img 
            src="https://www.shutterstock.com/image-photo/colorful-hardcover-books-flying-on-600nw-1618124554.jpg" 
            alt="Register" 
            className="img-fluid" 
            style={{ maxHeight: '100%', width: '100%' }} 
          />
        </div>
        
        {/* Registration Form Section */}
        <div className="col-md-6">
          <h1 className="mb-4">Create an Account!</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Firstname</label>
              <input 
                onChange={changeFirstName} 
                className="form-control" 
                type="text" 
                placeholder="Enter your firstname" 
                required 
              />
            </div>
            <div className="mb-3">
              <label>Lastname</label>
              <input 
                onChange={changeLastName} 
                className="form-control" 
                type="text" 
                placeholder="Enter your lastname" 
                required 
              />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input 
                onChange={changeEmail} 
                className="form-control" 
                type="email" 
                placeholder="Enter your email" 
                required 
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input 
                onChange={changePassword} 
                className="form-control" 
                type="password" 
                placeholder="Enter your password" 
                required 
              />
            </div>
            <button className="btn btn-danger w-100" type="submit">Submit</button>
            <p className="mt-3">Already have an account? <a href="login" className="text-decoration-none">Login here</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
