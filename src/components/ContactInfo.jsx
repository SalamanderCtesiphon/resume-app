import React, { useState } from "react"
import '../App.css'

const ContactInfo = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contacInfo, setContactInfo] = useState({
        firstName: '',
        lastName: ''
    })


    function handleSubmit(e) {
        e.preventDefault();
        setContactInfo({
            firstName: {firstName},
            lastName: {lastName}
        });
        setFirstName('');
        setLastName('');
    };

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