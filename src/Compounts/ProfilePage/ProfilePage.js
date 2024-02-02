
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './authActions';

const ProfilePage = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());

  };

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
