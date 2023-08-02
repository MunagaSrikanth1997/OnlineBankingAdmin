import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Clear the loggedIn value from local storage
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userGuid');
    // Redirect to the login page
    history.push('/login');
  };

  return (
    <div>
      <h1>Admin</h1>
      <h5>Are you sure you want to logout?</h5>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
