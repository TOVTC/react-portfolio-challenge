import React from 'react';

function Resume() {
    return (
        <div className='m-4 px-5'>
            <div>
                <h2>Full Resume</h2>
                <p>Available for download <a href={require('../assets/documents/resume-example.pdf')} download>here</a></p>
            </div>
            <div className='my-5'>
                    <h2>Summary of Proficiencies</h2>
                    <p>Primary - MERN Stack</p>
                </div>
            <div className='d-flex flex-wrap'>
                <div className='mx-5'>
                    <h3>Frontend Technologies</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS (+ Bootstrap)</li>
                        <li>JavaScript (+ JQuery)</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className='mx-5'>
                    <h3>Backend Technologies</h3>
                    <ul>
                        <li>Node.js (+ npm)</li>
                        <li>Jest</li>
                        <li>Express.js</li>
                        <li>MySql (+ Sequelize)</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className='mx-5'>
                    <h3>Other Technologies</h3>
                    <ul>
                        <li>R</li>
                        <li>Heroku (+ JawsDB, MongoDB Atlas)</li>
                        <li>Handlebars</li>
                    </ul>
                </div>
            </div>            
        </div>
    )
}

export default Resume;