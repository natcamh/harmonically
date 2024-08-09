import React, { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

const Profile = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {auth?.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;