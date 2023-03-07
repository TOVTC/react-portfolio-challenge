import React, {useState} from 'react';
import {validate} from '../utils/helpers.js';
import {BsEnvelope} from "react-icons/bs";

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
            // console.log(form);
        }
    }
    function submitForm(e) {
        e.preventDefault();
        // console.log(form);
        let email = document.createElement("a");
        email.href = `mailto:veronica.tc.to@outlook.com?subject=${form.name}&body=${form.message}`;
        email.click();
        // don't forget to clean this up
        form.name = '';
        form.email = '';
        form.message = '';
        console.log(form);
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