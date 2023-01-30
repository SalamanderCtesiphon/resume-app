import '../App.css'

const EditExperienceCard = ({ 
    editingCompanyName, 
    setEditingCompanyName,
    editingPositionTitle,
    setEditingPositionTitle,
    editingStartExperienceDate,
    setEditingStartExperienceDate,
    editingSeperationDate,
    setEditingSeperationDate,
    submitEdits,
    job
}) => {
    return(
      <div>
            <form className="jobEditingForm" onSubmit={() => submitEdits(job.id)}>
              {'Company Name:'}<input 
                type="text"
                name="companyName"
                value={editingCompanyName}
                onChange={(e) => setEditingCompanyName(e.target.value)}
              />
              {'Position: '}<input 
                type="text"
                name="positionTitle"
                value={editingPositionTitle}
                onChange={(e) => setEditingPositionTitle(e.target.value)}
              />
              {'Start Date: '} <input 
                type="text"
                name='startExperienceDate'
                value={editingStartExperienceDate}
                onChange={(e) => setEditingStartExperienceDate(e.target.value)}
              />
              {'Seperation Date: '}  <input 
                type="text"
                name='seperationDate'
                value={editingSeperationDate}
                onChange={(e) => setEditingSeperationDate(e.target.value)}
              />
              <button>Resubmit</button>
            </form>
      </div>
    )
}

export default EditExperienceCard