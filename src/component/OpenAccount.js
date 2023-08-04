// PopupForm.js
import React, { useState } from 'react';
import openAccount from './OpenAccountService'

const OpenAccountForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    // Initialize form data here, e.g., name, email, etc.
    accountName: '',
    accountType: '',
    userId:'',
    isDebitCardRequired:"false",
    depositAmount:''
    // Add more fields as needed
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    formData.isDebitCardRequired=e.target.checked;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSelectOptionChange = (e) => {
    const selectedValue = e.target.value;
    setFormData((prevFormData) => ({ ...prevFormData, accountType: selectedValue }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server
    const response = await openAccount.openAccount(formData);
    window.alert("account is created...");
    
    console.log('Form submitted:', formData);
    onClose(); // Close the popup after form submission
    window.location.reload();
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>Open Account</h2>
        <form onSubmit={handleSubmit}>
          <label>
            AccountName:
            <input type="text" name="accountName" value={formData.accountName} onChange={handleChange} required/><br/>
          </label>
          <label>userId
          <input type="text" name="userId" value={formData.userId} onChange={handleChange} required/><br/>
          </label>
          <label for="accountTypes">Choose AccountType:</label>
          <select
  name="accounts"
  id="accTypes"
  value={formData.accountType}
  onChange={handleSelectOptionChange}
  required
>
<option value="">AccountType</option>
  <option value="CHK">Checking</option>
  <option value="SAV">Savings</option>
  <option value="MTG">Mortgage</option>
  <option value="MAC">Master Card</option>
</select><br/>
<label>Deposit Amount
          <input type="number" name="depositAmount" value={formData.depositAmount} onChange={handleChange} /><br/>
          </label>
          <label>isDebitCard Required
          <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
         
          </label>
            {/* <input type="email" name="accountType" value={formData.accountType} onChange={handleChange} /> */}
          
          {/* Add more form fields as needed */}
          <div className="button-container">
          <button type="Cancel" className="button button4">Cancel</button>
      <button type="submit" className="button button4">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OpenAccountForm;
