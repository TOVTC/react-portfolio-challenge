import React from 'react';
import {BsFileEarmarkPost, BsFileEarmarkCode, BsFileEarmarkRuled} from "react-icons/bs";

function Resume() {
    return (
        <div className='container'>
            <div className='row mb-4'>
                    <h2>Summary of Proficiencies</h2>
            </div>
            <div className='row'>
                <div className='col-md-4 col-12'>
                        <h3><BsFileEarmarkPost /> Frontend</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS (+ Bootstrap, Tailwind)</li>
                            <li>JavaScript (+ JQuery)</li>
                            <li>Handlebars</li>
                            <li>React</li>
                            <li>Flutter (+ Dart)</li>
                            <li>Vue 2 & 3 (+ Vuetify)</li>
                        </ul>
                    </div>
                    <div className='col-md-4 col-12'>
                        <h3><BsFileEarmarkCode /> Backend</h3>
                        <ul>
                            <li>Node (+ npm)</li>
                            <li>Express</li>
                            <li>SQL (+ MySQL, Sequelize, SQLExpress)</li>
                            <li>NoSQL (+ MongoDB, Mongoose)</li>
                            <li>C#</li>
                            <li>.Net Core (+ Entity Framework Core)</li>
                        </ul>
                    </div>
                    <div className='col-md-4 col-12'>
                        <h3><BsFileEarmarkRuled /> Other</h3>
                        <ul>
                            <li>Git</li>
                            <li>Heroku (+ JawsDB, MongoDB Atlas)</li>
                            <li>Android Studio (+ XCode)</li>
                        </ul>
                    </div>
                </div>
            <div className='row mt-3'>
                <h2>Projects Resume</h2>
                <p>Available for download <a href={require('../assets/documents/ToV-Projects_2024Jan05.pdf')} download className='mini-link'>here</a></p>
            </div>        
        </div>
    )
}

export default Resume;