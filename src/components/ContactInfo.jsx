
import '../App.css'

const ContactInfo = ({ firstName, lastName, setFirstName, setLastName, handleSubmit}) => {
 

    return (
        <div className="contactForm">
            <h3>Contact Information</h3>
            <form onSubmit={handleSubmit} className="contactInputs">
                <label>First Name:</label>
                <input 
                    type="text"
                    name="firstName" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label>Last Name:</label>
                <input 
                    type="text"
                    name="lastName" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactInfo