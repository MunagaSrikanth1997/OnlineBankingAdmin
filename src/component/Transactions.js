
// App.js
import React, { useEffect, useState } from 'react';
import TransactionTable from './TransactionTable';
import axios from 'axios';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch transactions data from the API
    
    axios.get('http://localhost:8088/api/onlineBanking/admin/getCustomerTransactions')
      .then((response) => {
        setTransactions(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Transaction List</h1>
      
        <TransactionTable transactions={transactions} transactionsPerPage={5} />
    </div>
  );
};

export default App;
