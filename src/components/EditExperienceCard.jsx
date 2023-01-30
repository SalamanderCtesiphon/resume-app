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
          <form onSubmit={() => submitEdits(job.id)}>
          <div className='editCard'>
            <div className='editCardDetails'>
              <span>{'Company Name:'}<input 
                type="text"
                name="companyName"
                placeholder={job.companyName}
                value={editingCompanyName}
                onChange={(e) => setEditingCompanyName(e.target.value)}
              /></span>
              <span>{'Position: '}<input 
                type="text"
                name="positionTitle"
                placeholder={job.positionTitle}
                value={editingPositionTitle}
                onChange={(e) => setEditingPositionTitle(e.target.value)}
              /></span>
              <span>{'Start Date: '} <input 
                type="text"
                name='startExperienceDate'
                placeholder={job.startExperienceDate}
                value={editingStartExperienceDate}
                onChange={(e) => setEditingStartExperienceDate(e.target.value)}
              /></span>
              <span>{'Seperation Date: '}  <input 
                type="text"
                name='seperationDate'
                placeholder={job.seperationDate}
                value={editingSeperationDate}
                onChange={(e) => setEditingSeperationDate(e.target.value)}
              /></span>
            </div>
            <div className='editBtnBox'>
              <button>Resubmit</button>
            </div>
            </div>
          </form>
       
      </div>
    )
}

export default EditExperienceCard