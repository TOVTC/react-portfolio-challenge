import React from 'react';
import {BsFileEarmarkPost, BsFileEarmarkCode, BsFileEarmarkRuled} from "react-icons/bs";

function Resume() {
    return (
        <div className='container'>
            <div className='row mb-4'>
                <div>
                    <h2>Summary of Proficiencies</h2>
                    <p>Primary - MERN Stack</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4 col-12'>
                        <h3><BsFileEarmarkPost /> Frontend Technologies</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS (+ Bootstrap)</li>
                            <li>JavaScript (+ JQuery)</li>
                            <li>React (+ React Router)</li>
                        </ul>
                    </div>
                    <div className='col-md-4 col-12'>
                        <h3><BsFileEarmarkCode /> Backend Technologies</h3>
                        <ul>
                            <li>Node.js (+ npm)</li>
                            <li>Express.js</li>
                            <li>MySQL (+ Sequelize)</li>
                            <li>MongoDB (+ Mongoose)</li>
                            <li>Webpack</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                    <div className='col-md-4 col-12'>
                        <h3><BsFileEarmarkRuled /> Other Technologies</h3>
                        <ul>
                            <li>R</li>
                            <li>Heroku (+ JawsDB, MongoDB Atlas)</li>
                            <li>Jest</li>
                            <li>Handlebars</li>
                            <li>Progressive Web Applications</li>
                            <li>IndexedDB</li>
                        </ul>
                    </div>
                </div>
            <div className='row mt-3'>
                <h2>Full Resume</h2>
                <p>Available for download <a href={require('../assets/documents/resume-example.pdf')} download className='mini-link'>here</a></p>
            </div>        
        </div>
    )
}

export default Resume;