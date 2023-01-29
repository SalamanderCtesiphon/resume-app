import React, { useState } from "react"
import './App.css';
import ContactInfo from './components/ContactInfo';

function App(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [contactSubmit, setContactSubmit] = useState(false);
  


  function handleSubmit(e) {
      e.preventDefault();
      
      setFirstName(firstName);
      setLastName(lastName);
      setStreetAddress(streetAddress);
      setCity(city);
      setState(state);
      setZip(zip);
      setEmail(email);
      setPhone(phone);
      setContactSubmit(true);
  };

  function toggleContact(e) {
    console.log('click')
    setContactSubmit(false);
  }

  return (
    <div className="App">
      <h1 className="header">HI</h1>
      <div className="sidebar">
        <ContactInfo
          firstName={firstName}
          lastName={lastName}
          streetAddress={streetAddress}
          handleSubmit={handleSubmit}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setStreetAdress={setStreetAddress}
          city={city}
          setCity={setCity}
          state={state}
          zip={zip}
          email={email}
          setState={setState}
          setZip={setZip}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          contactSubmit={contactSubmit}
          toggleContact={toggleContact}
        />
      </div>
      <div className="page">
        <div className="pageHeader">
          <div className="headerLeft">
            <h3>{firstName}{' '}{lastName}</h3>
            <h5>{streetAddress}</h5>
            <h5>{city}{' '}{state}{' '}{zip}</h5>
          </div>
          <div className="headerRight">
            <h5>{email}</h5>
            <h5>{phone}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
