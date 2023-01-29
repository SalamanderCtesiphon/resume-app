import React, { useState } from "react"
import '../App.css'

const ContactInfo = (intialValues = {}) => {
    const [inputs, setInputs] = useState(intialValues);


    function handleSubmit(e) {
        e.preventDefault();
        
        console.log(inputs);
        setInputs('');
    };

    function handleChange(e) {
        setInputs({[e.target.name]: e.target.value})
    };

    return (
        <div className="contactForm">
            <h3>Contact Information</h3>
            <form onSubmit={handleSubmit} className="contactInputs">
                <label>First Name:</label>
                <input 
                    type="text"
                    name="firstName" 
                    value={inputs.firstName || ''}
                    onChange={handleChange}
                />
                <label>Last Name:</label>
                <input 
                    type="text"
                    name="lastName" 
                    value={inputs.lastName || ''}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactInfo