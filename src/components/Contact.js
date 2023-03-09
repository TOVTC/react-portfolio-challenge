import React, {useState} from 'react';
import {validate} from '../utils/helpers.js';
import {BsEnvelope} from "react-icons/bs";
import emailjs from "@emailjs/browser";

function Contact() {
    const [form, setForm] = useState({name: '', email: '', message: ''});
    const {name, email, message} = form;
    const [warning, setWarning] = useState('');
    function monitorForm(e) {
        if (!e.target.value.length) {
            setWarning(`Please enter your ${e.target.name}`);
        } else {
            setWarning('');
        }
        if (e.target.name === 'email' && e.target.value.length) {
            const valid = validate(e.target.value);
            if (!valid) {
                setWarning('Please enter a valid email');
            } else {
                setWarning('');
            }
        }
        if (!warning) {
            setForm({...form, [e.target.name]: e.target.value});
        }
    }
    function submitForm(e) {
        e.preventDefault();
        setWarning('Email sending...');
            emailjs.send('service_nag7qdo','template_5jklzm7', form, 'j2nBG-yr1qCSBDVXJ')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert(`Email from ${name} successfully sent!

                Reply to Email: ${email}

                Message: ${message}`);
                document.location.reload();
            }, (err) => {
                alert('Unable to send email!');
                console.log('FAILED...', err);
            });
    }
    return (
        <div className='container'>
            <div className='row'>
                <h2 className='mb-4'>Contact <BsEnvelope /></h2>
            </div>
            <div className='row'>
                <form onSubmit={submitForm}>
                    <div className='d-flex flex-wrap w-50'>
                        <div className='my-2 me-5'>
                            <label htmlFor='name'className='d-block'>Name:</label>
                            <input type='text' name='name' defaultValue={name} onBlur={monitorForm}></input>
                        </div>
                        <div className='my-2'>
                            <label htmlFor='email' className='d-block'>Email:</label>
                            <input type='text' name='email' defaultValue={email} onBlur={monitorForm}></input>
                        </div>
                    </div>
                    <div className='my-2'>
                        <label htmlFor='message' className='d-block'>Message:</label>
                        <textarea type='text' name='message' rows='5' id='message' defaultValue={message} onBlur={monitorForm}></textarea>
                    </div>
                    <button type='submit' className='btn my-2' id='contact'>Send</button>
                </form>
                {warning && (
                    <div>
                        <p>{warning}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Contact;