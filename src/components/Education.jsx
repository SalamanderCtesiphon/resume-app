import React from 'react'

const Education = ({ 
    educationSubmit, 
    toggleEducation, 
    handleEducationSubmit,
    schoolName,
    setSchoolName,
    fieldOfStudy,
    setFieldOfStudy,
    startDate,
    setStartDate,
    completeDate, 
    setCompleteDate
}) => {
  return (
    <div className='educationForm'>
        <h3>Education</h3>
        {educationSubmit === true ? (
                <button onClick={toggleEducation}>Edit</button>
            ) : (
            <form className='contactInputs' onSubmit={handleEducationSubmit}>
                <label>School Name:</label>
                <input 
                    type="text"
                    name="schoolName"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                />
                <label>Field of Study:</label>
                <input 
                   type="text"
                   name="fieldOfStudy"
                   value={fieldOfStudy}
                   onChange={(e) => setFieldOfStudy(e.target.value)}
                />
                <label>Start Date:</label>
                 <input 
                   type="text"
                   name='startDate'
                   value={startDate}
                   onChange={(e) => setStartDate(e.target.value)}
                />
                 <label>Completion Date:</label>
                 <input 
                    type="text"
                    name='completeDate'
                    value={completeDate}
                    onChange={(e) => setCompleteDate(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            )}
    </div>
  )
}

export default Education