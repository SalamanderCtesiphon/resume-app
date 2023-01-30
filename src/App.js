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
  const [schoolName, setSchoolName] = useState('Texas Tech University');
  const [fieldOfStudy, setFieldOfStudy] = useState('Ergonomics');
  const [startDate, setStartDate] = useState('July 1776');
  const [completeDate, setCompleteDate] = useState('December 2040');
  const [companyName, setCompanyName] = useState('Famous Company');
  const [positionTitle, setPositionTitle] = useState('Manager');
  const [startExperienceDate, setStartExperienceDate] = useState('December 2012');
  const [seperationDate, setSeperationDate] = useState('August 2020');
  const [experienceSubmit, setExperienceSunmit] = useState(true);

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

  function handleExperiencSubmit(e) {
    e.preventDefault();
    setCompanyName(companyName);
    setPositionTitle(positionTitle);
    setStartExperienceDate(startExperienceDate);
    setSeperationDate(seperationDate);
    setExperienceSunmit(true);
  }

  function toggleContact(e) {
    setContactSubmit(false);
  }

  function toggleEducation(e) {
    setEducationSubmit(false);
  }

  function toggleExperience(e) {
    setExperienceSunmit(false);
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
        <Experience
           experienceSubmit={experienceSubmit}
           toggleExperience={toggleExperience}
           handleExperienceSubmit={handleExperiencSubmit}
           companyName={companyName}
           setCompanyName={setCompanyName}
           positionTitle={positionTitle}
           setPositionTitle={setPositionTitle}
           startExperienceDate={startExperienceDate}
           setStartExperienceDate={setStartExperienceDate}
           seperationDate={seperationDate}
           setSeperationDate={setSeperationDate}
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
        <div className="educationSection">
          <div className="wrapper">
            <h3>Education: </h3>
            <div className="eduInfo">
              <p>{schoolName}</p>
              <p>{fieldOfStudy}</p>
              <p>{startDate}{' '}-{' '}{completeDate}</p>
            </div>
          </div>
          <div className="wrapper">
            <h3>Experience:</h3>
            <div className="workHistory">
              <p>Company Name: {companyName}</p>
              <p>Position:   {positionTitle}</p>
              <p>Start Date: {startExperienceDate}</p>
              <p>Final Date: {seperationDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
