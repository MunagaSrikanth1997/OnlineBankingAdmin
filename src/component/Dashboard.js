import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Transactions from './Transactions';
import Logout from './Logout';
import CustomerRegistation from './CustomerRegistation';
import OpenAccount from './OpenAccount';
const Dashboard = ({loggedIn}) => {
  const [accounts, setAccounts] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [loading, setLoading] = useState(true); // New state to manage loading state
  const handlePopupToggle = () => {
    setPopupOpen((prevValue) => !prevValue);
  };
  // const history = useHistory();

  // const handlePopupToggle = () => {
  //   setPopupOpen((prevValue) => !prevValue);
  // };

  // useEffect(() => {
  //   // Fetch user data
  //   AccountsData.fetchCustomerAccountsData(localStorage.getItem('userGuid'))
  //     .then((data) => {
  //       setAccounts(data);
  //       setLoading(false); // Set loading to false once the data is fetched
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching user data:', error);
  //       setLoading(false); // Set loading to false on error as well
  //     });
  // }, []);

  

  // If logged in state is false, redirect to login
  // This handles the case when the user is logged out after some time and tries to access the dashboard directly
  // if (!loggedIn) {
  //   history.push('/login');
  //   return null;
  // }

  return (
    <div>
      <div className="card-container">
        <Logout/>
      
      
      </div>
      <div className="matrix-item"> <CustomerRegistation/></div>
      <div className="container matrix-container">
      <a href="#openAccount" onClick={handlePopupToggle}>
        Open Account
      </a>
      {isPopupOpen && <OpenAccount onClose={handlePopupToggle} />}
  
      <div className="matrix-item"> <Transactions/></div>
      </div>
    </div>
  );
};

export default Dashboard;
