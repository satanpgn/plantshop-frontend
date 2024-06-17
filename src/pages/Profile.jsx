import React from 'react';

const Profile = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', border: '5px solid #ddd', borderRadius: '10px', maxWidth: '600px' }}>
        <h1 style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>User Profile</h1>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" // Placeholder image URL
            alt="Profile"
            style={{ height: '200px', width: '200px', borderRadius: '50%' }}
          />
          <a
            href="/editprofile"
            style={{
              marginTop: '20px',
            background: 'green',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
            padding: '10px',
            cursor: 'pointer',
            display: 'inline-block',
            textDecoration: 'none', // Remove underline from link
      }}
    >
      Edit
    </a>
        </div>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h2>Bikesh Chaudhary</h2>
          <p>Email: bikesh123@gmail.com</p>
          <p>Location: New York, USA</p>
          <p>Age: 24</p>
          <p>Bio: Hey, I am Bikesh and I am from Saptai District.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
