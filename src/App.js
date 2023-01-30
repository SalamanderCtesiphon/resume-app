import React, { useState } from "react"
import './App.css';
import ContactInfo from './components/ContactInfo';
import Education from "./components/Education";
import Experience from "./components/Experience";

function App(props) {
  const [firstName, setFirstName] = useState('Seamus');
  const [lastName, setLastName] = useState('Quixote');
  const [streetAddress, setStreetAddress] = useState('2712 W. Willmington St.');
  const [city, setCity] = useState('Lamesa');
  const [state, setState] = useState('TX');
  const [zip, setZip] = useState('79777');
  const [email, setEmail] = useState('swssswiss@aol.com');
  const [phone, setPhone] = useState('+1-555-444-8523');
  const [contactSubmit, setContactSubmit] = useState(true);
  const [educationSubmit, setEducationSubmit] = useState(true);
  const [schoolName, setSchoolName] = useState('Texas Tech University')
  const [fieldOfStudy, setFieldOfStudy] = useState('Ergonomics');
  const [startDate, setStartDate] = useState('July 1776');
  const [completeDate, setCompleteDate] = useState('December 2040');

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

  function handleEducationSubmit(e) {
    e.preventDefault();
    setSchoolName(schoolName);
    setFieldOfStudy(fieldOfStudy);
    setStartDate(startDate);
    setCompleteDate(completeDate);
    setEducationSubmit(true);
  }

  function toggleContact(e) {
    setContactSubmit(false);
  }

  function toggleEducation(e) {
    setEducationSubmit(false);
  }

  return (
    <div className="App">
      <h1 className="header">Resume Editor</h1>
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
        <Education 
          educationSubmit={educationSubmit}
          toggleEducation={toggleEducation}
          handleEducationSubmit={handleEducationSubmit}
          schoolName={schoolName}
          setSchoolName={setSchoolName}
          fieldOfStudy={fieldOfStudy}
          setFieldOfStudy={setFieldOfStudy}
          startDate={startDate}
          setStartDate={setStartDate}
          completeDate={completeDate}
          setCompleteDate={setCompleteDate}
        />
        <Experience />
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
        <div className="educationSection">
          <h3>Education: </h3>
          <p>{schoolName}</p>
          <p>{fieldOfStudy}</p>
          <p>{startDate}{' '}-{' '}{completeDate}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
