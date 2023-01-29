import React, { useState } from "react"
import './App.css';
import ContactInfo from './components/ContactInfo';

function App(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  function handleSubmit(e) {
      e.preventDefault();
      
      setFirstName(firstName);
      setLastName(lastName);
  };

  return (
    <div className="App">
      <h1 className="header">HI</h1>
      <div className="sidebar">
        <ContactInfo
          firstName={firstName}
          lastName={lastName}
          handleSubmit={handleSubmit}
          setFirstName={setFirstName}
          setLastName={setLastName}
        />
      </div>
      <div className="page">
        {firstName}
        {lastName}
      </div>
    </div>
  );
}

export default App;
