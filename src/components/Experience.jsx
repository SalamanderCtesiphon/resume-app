const Experience = ({
    experienceSubmit,
    toggleExperience,
    handleExperienceSubmit,
    companyName,
    setCompanyName,
    positionTitle,
    setPositionTitle,
    startExperienceDate,
    setStartExperienceDate,
    seperationDate,
    setSeperationDate
}) => {

    return (
        <div className="educationForm">
            <h3>Experience </h3>
            {experienceSubmit === true ? (
                <button onClick={toggleExperience}>Add</button>
            ) : (
            <form className='contactInputs' onSubmit={handleExperienceSubmit}>
                <label>Company Name:</label>
                <input 
                    type="text"
                    name="companyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                />
                <label>Position Title:</label>
                <input 
                   type="text"
                   name="positionTitle"
                   value={positionTitle}
                   onChange={(e) => setPositionTitle(e.target.value)}
                />
                <label>Start Date:</label>
                 <input 
                   type="text"
                   name='startExperienceDate'
                   value={startExperienceDate}
                   onChange={(e) => setStartExperienceDate(e.target.value)}
                />
                 <label>Seperation Date:</label>
                 <input 
                    type="text"
                    name='seperationDate'
                    value={seperationDate}
                    onChange={(e) => setSeperationDate(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            )}
        </div>
    )
}

export default Experience