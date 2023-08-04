// TransactionTable.js
import React, { useState, useEffect } from 'react';

const TransactionTable = ({ transactions, transactionsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);
  const [searchKey, setSearchKey] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  // Function to handle pagination navigation
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleSortChange = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
  // Function to get transactions for the current page
  const getCurrentTransactions = () => {
    const startIndex = (currentPage - 1) * transactionsPerPage;
    const endIndex = startIndex + transactionsPerPage;
    const filteredTransactions = transactions.filter((transaction) =>
    transaction.transactionId.includes(searchKey) ||
    transaction.userId.includes(searchKey)
  );
  const sortedTransactions = filteredTransactions.sort((a, b) => {
    const dateA = new Date(a.transactionDate);
    const dateB = new Date(b.transactionDate);
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
  });

  return sortedTransactions.slice(startIndex, endIndex);
  };
  const handleSearchChange = (event) => {
    setSearchKey(event.target.value);
    setCurrentPage(1); // Reset current page to 1 when search key changes
  };

  return (
    <div className="table-container">
      <label>
        search by UserId: 
      <input
        type="text"
        value={searchKey}
        onChange={handleSearchChange}
        placeholder="Search UserId"
      />
      </label>
      <button onClick={handleSortChange}>
        Sort by Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>
      <table>
        <thead>
          <tr>
          <th>UserId</th>
            <th>TransactionId</th>
            <th>Payment From</th>
            <th>Payment To</th>
            <th>Payment Type</th>
            <th>Amount(USD$)</th>
            <th>transactionDate</th>
            <th>paymentStatus</th>
          </tr>
        </thead>
        <tbody>
          {getCurrentTransactions().map((transaction) => (
            <tr key={transaction.transactionId + transaction.userId
            }>
              <td>{transaction.userId}</td>
              <td>{transaction.transactionId}</td>
              <td>{transaction.paymentSource}</td>
              <td>{transaction.paymentDestination}</td>
              <td>{transaction.paymentType}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.transactionDate}</td>
              <td>{transaction.paymentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination navigation */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionTable;
