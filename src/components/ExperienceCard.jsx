const ExperienceCard = () => {
    return (
        <div>
            <div className="jobCard">
                          <div className="cardItem">Company Name: {job.companyName}</div>
                          <div className="cardItem">Position: {job.positionTitle}</div>
                          <div className="cardItem">Start Date: {job.startExperienceDate}</div>
                          <div className="cardItem">Seperation Date: {job.seperationDate}</div>
                      </div>
                      <div className="cardItem btnBox"><button onClick={toggleJobEditing}>Edit</button>
                      <button onClick={delJob}>Delete</button></div>
        </div>
    )
}

export default ExperienceCard