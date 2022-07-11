import React from 'react';
import {BsFileEarmarkPost, BsFileEarmarkCode, BsFileEarmarkRuled} from "react-icons/bs";

function Resume() {
    return (
        <div className='m-4 px-5'>
            <div className='mb-4'>
                <h2>Summary of Proficiencies</h2>
                <p>Primary - MERN Stack</p>
            </div>
            <div className='d-flex flex-wrap'>
                <div className='me-5'>
                    <h3><BsFileEarmarkPost /> Frontend Technologies</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS (+ Bootstrap)</li>
                        <li>JavaScript (+ JQuery)</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className='me-5'>
                    <h3><BsFileEarmarkCode /> Backend Technologies</h3>
                    <ul>
                        <li>Node.js (+ npm)</li>
                        <li>Jest</li>
                        <li>Express.js</li>
                        <li>MySql (+ Sequelize)</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className='me-5'>
                    <h3><BsFileEarmarkRuled /> Other Technologies</h3>
                    <ul>
                        <li>R</li>
                        <li>Heroku (+ JawsDB, MongoDB Atlas)</li>
                        <li>Handlebars</li>
                    </ul>
                </div>
            </div>    
            <div className='mt-3'>
                <h2>Full Resume</h2>
                <p>Available for download <a href={require('../assets/documents/resume-example.pdf')} download>here</a></p>
            </div>        
        </div>
    )
}

export default Resume;