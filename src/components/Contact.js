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
            console.log(form);
        }
    }
    function submitForm(e) {
        e.preventDefault();
        console.log(form)
    }
    return (
        <div className='m-4 px-5'>
            <h2 className='mb-4'>Contact <BsEnvelope /></h2>
            <form onSubmit={submitForm}>
                <div className='d-flex w-50'>
                    <div className='my-2 me-3'>
                        <label htmlFor='name'className='d-block'>Name:</label>
                        <input type='text' name='name' defaultValue={name} onBlur={monitorForm}></input>
                    </div>
                    <div className='my-2 ms-3'>
                        <label htmlFor='email' className='d-block'>Email:</label>
                        <input type='text' name='email' defaultValue={email} onBlur={monitorForm}></input>
                    </div>
                </div>
                <div className='my-2'>
                    <label htmlFor='message' className='d-block'>Message:</label>
                    <textarea type='text' name='message' rows='5' className='w-50' defaultValue={message} onBlur={monitorForm}></textarea>
                </div>
                <button type='submit' className='btn btn-secondary my-2'>Send</button>
            </form>
            {warning && (
                <div>
                    <p>{warning}</p>
                </div>
            )}
        </div>
    )
}

export default Contact;