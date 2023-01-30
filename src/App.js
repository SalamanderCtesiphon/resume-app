import React, { useState } from "react"
import './App.css';
import ContactInfo from './components/ContactInfo';
import EditExperienceCard from "./components/EditExperienceCard";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ExperienceCard from "./components/ExperienceCard";

function App(props) {
  const [firstName, setFirstName] = useState('Seamus');
  const [lastName, setLastName] = useState('Quixote');
  const [streetAddress, setStreetAddress] = useState('3312 W. Willmington St.');
  const [city, setCity] = useState('Lamesa');
  const [state, setState] = useState('TX');
  const [zip, setZip] = useState('79777');
  const [email, setEmail] = useState('famouscompany@aol.com');
  const [phone, setPhone] = useState('+1-555-444-8523');
  const [contactSubmit, setContactSubmit] = useState(true);
  const [educationSubmit, setEducationSubmit] = useState(true);
  const [schoolName, setSchoolName] = useState('Peperdine University');
  const [fieldOfStudy, setFieldOfStudy] = useState('Doctorate of Philosophy in Phrenology');
  const [startDate, setStartDate] = useState('June 1979');
  const [completeDate, setCompleteDate] = useState('December 2040');
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [startExperienceDate, setStartExperienceDate] = useState('');
  const [seperationDate, setSeperationDate] = useState('');
  const [experienceSubmit, setExperienceSunmit] = useState(true);
  const [jobEditing, setJobEditing] = useState(null);
  const [editingCompanyName, setEditingCompanyName] = useState('');
  const [editingPositionTitle, setEditingPositionTitle] = useState('');
  const [editingStartExperienceDate, setEditingStartExperienceDate] = useState('');
  const [editingSeperationDate, setEditingSeperationDate] = useState('');
  const [jobs, setJobs] = useState([
    {
      id: 1,
      companyName: "Taco Bell",
      positionTitle: "Shift Leader",
      startExperienceDate: "July 2016",
      seperationDate: "August 2016",
      experienceSubmit: true,
      jobEditing: null
    },
    {
      id: 2,
      companyName: "Bell Labratories",
      positionTitle: "Research Chemist",
      startExperienceDate: "June 2066",
      seperationDate: "August 2067",
      experienceSubmit: true,
      jobEditing: null
    },
    {
      id: 3,
      companyName: "Southwestern Bell",
      positionTitle: "Network Engineer",
      startExperienceDate: "January 1980",
      seperationDate: "August 1984",
      experienceSubmit: true,
      jobEditing: null
    }

  ]);

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
    addJob({ 
      companyName,
      positionTitle,
      startExperienceDate,
      seperationDate,
      experienceSubmit,
      jobEditing
    })
    setCompanyName('');
    setPositionTitle('');
    setStartExperienceDate('');
    setSeperationDate('');
    setExperienceSunmit(true);
    setJobEditing(null);
  }

  const addJob = (job) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newJob = {
      id,
      companyName,
      positionTitle,
      startExperienceDate,
      seperationDate,
      experienceSubmit,
      jobEditing
    }
    setJobs([...jobs, newJob])
  }

  function delJob(id)  {
    setJobs(jobs.filter((job) => job.id !== id))
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

  function submitEdits(id) {
    const updatedJobs = [...jobs].map((job) => {
      if (job.id === id) {
        (editingCompanyName === '' ? job.companyName = job.companyName :
        job.companyName = editingCompanyName);
        (editingPositionTitle === '' ? job.positionTitle = job.positionTitle :
        job.positionTitle = editingPositionTitle);
        (editingStartExperienceDate === '' ? job.startExperienceDate = job.startExperienceDate :
        job.startExperienceDate = editingStartExperienceDate);
        (editingSeperationDate === '' ? job.seperationDate = job.seperationDate :
        job.seperationDate = editingSeperationDate);
      }
      return job;
    });
    setJobs(updatedJobs);
    setJobEditing(null);
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
              <ul>
                {jobs.map((job) => (
                  <li 
                    key={job.id} 
                    className="listItem"
                  >
                    {job.id === jobEditing ? (
                      <EditExperienceCard 
                        job={job}
                        setJobEditing={setJobEditing}
                        delJob={delJob}
                        editingCompanyName={editingCompanyName}
                        editingPositionTitle={editingPositionTitle}
                        editingStartExperienceDate={editingStartExperienceDate}
                        editingSeperationDate={editingSeperationDate}
                        setEditingCompanyName={setEditingCompanyName}
                        setEditingPositionTitle={setEditingPositionTitle}
                        setEditingStartExperienceDate={setEditingStartExperienceDate}
                        setEditingSeperationDate={setEditingSeperationDate}
                        submitEdits={submitEdits}
                      />
                    ):(
                     <ExperienceCard
                      job={job}
                      setJobEditing={setJobEditing}
                      jobEditing={jobEditing}
                      delJob={delJob}
                     />
                    )} 
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
