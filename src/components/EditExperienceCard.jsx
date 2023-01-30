import '../App.css'

const EditExperienceCard = ({ 
    companyName, 
    setCompanyName,
    positionTitle,
    setPositionTitle,
    startExperienceDate,
    setStartExperienceDate,
    seperationDate,
    setSeperationDate
}) => {
    return(
      <div>
            <form className="jobEditingForm">
                        {'Company Name:'}<input 
                          type="text"
                          name="companyName"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                        />
                        {'Position: '}<input 
                          type="text"
                          name="positionTitle"
                          value={positionTitle}
                          onChange={(e) => setPositionTitle(e.target.value)}
                        />
                        {'Start Date: '} <input 
                          type="text"
                          name='startExperienceDate'
                          value={startExperienceDate}
                          onChange={(e) => setStartExperienceDate(e.target.value)}
                        />
                        {'Seperation Date: '}  <input 
                          type="text"
                          name='seperationDate'
                          value={seperationDate}
                          onChange={(e) => setSeperationDate(e.target.value)}
                        />
                        <button>Resubmit</button>
                      </form>
      </div>
    )
}

export default EditExperienceCard