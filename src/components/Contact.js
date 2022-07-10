import React, {useState} from 'react';

function Contact() {
    const [form, setForm] = useState({name: '', email: '', body: ''});
    const {name, email, body} = form;
    return (
        <div>
            <h2>Contact:</h2>
            <form>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name'></input>
                <label htmlFor='email'>Email:</label>
                <input type='text' name='email'></input>
                <label htmlFor='message'>Message:</label>
                <textarea type='text' name='message'></textarea>
            </form>
        </div>
    )
}

export default Contact;