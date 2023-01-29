
import '../App.css'

const ContactInfo = ({ 
    firstName, 
    lastName, 
    setFirstName, 
    setLastName, 
    handleSubmit, 
    streetAddress, 
    setStreetAdress,
    city,
    setCity,
    state,
    setState,
    zip,
    setZip,
    email,
    setEmail,
    phone, 
    setPhone,
    contactSubmit,
    toggleContact
}) => {
 

    return (
        <div className="contactForm">
            <h3>Contact Information</h3>
            {contactSubmit === true ? (
                <button onClick={toggleContact}>Edit Section</button>
            ) : (
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
                <label>Street Address:</label>
                 <input 
                    type="text"
                    name="streetAddress" 
                    value={streetAddress}
                    onChange={(e) => setStreetAdress(e.target.value)}
                />
                 <label>City:</label>
                 <input 
                    type="text"
                    name="city" 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                 <label>State:</label>
                 <input 
                    type="text"
                    name="state" 
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                 <label>Zip Code:</label>
                 <input 
                    type="text"
                    name="zip" 
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                />
                 <label>Email Address:</label>
                 <input 
                    type="text"
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                   <label>Phone Number:</label>
                 <input 
                    type="text"
                    name="phone" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            )}
        </div>
    )
}

export default ContactInfo