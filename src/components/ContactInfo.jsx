import React, { useState } from "react"
import '../App.css'

const ContactInfo = (props) => {
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
    });


    function handleSubmit(e) {
        e.preventDefault();

        
        addInputs([inputs]);
        setInputs({
            firstName: '',
            lastName: ''
        });
    };

    const addInputs = (firstName, lastName) => {
        const newContactInfo = {firstName, lastName}
        console.log(newContactInfo);
    }

    const handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setInputs({
            [name]: value,
            [name]: value,
        });
    }

    return (
        <div className="contactForm">
            <h3>Contact Information</h3>
            <form onSubmit={handleSubmit} className="contactInputs">
                <label>First Name:</label>
                <input 
                    type="text"
                    name="firstName" 
                    value={inputs.firstName}
                    onChange={handleInputChange}
                />
                <label>Last Name:</label>
                <input 
                    type="text"
                    name="lastName" 
                    value={inputs.lastName}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactInfo