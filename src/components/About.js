import React from 'react';

function About() {
    return (
        <div className='container'>
            <div className='row d-flex flex-wrap justify-content-center align-items-center my-3'>
                <img src={require('../assets/images/avatar.jpg')} alt='TOVTC' id='avatar' className='m-3'></img>
                <div id='about-caption'>
                    <h2>TOVTC</h2>
                    <ul className='d-flex flex-wrap list-inline' id='title'>
                        <li>MEDICAL LABORATORY ASSISTANT</li>
                        <li className='mx-1 vert'>|</li>
                        <li>MATHEMATICS INSTRUCTOR</li>
                        <li className='mx-1 vert'>|</li>
                        <li>FULL STACK DEVELOPER</li>
                    </ul>
                </div>
            </div>
            <div className='row mt-3'>
                <p>
                    TOVTC here, medical laboratory assistant, mathematics instructor, full stack developer. My original field of study was mental health, and I've worked in the mental health, non-profit, and healthcare sectors throughout and since my undergraduate degree. I intially got into coding during my final semester at university when I took a neuroeconomics course (think neuroscience of decision making) that required statistical analysis using R - and that was pretty fun.
                </p>
            </div>
            <div className='row mx-5 my-3'>
                <ul className='about-text'>
                    <li>😝 Pronouns: She/Her/她</li>
                    <li>💻 Current project: University of Toronto's Coding Bootcamp</li>
                    <li>🎓 Educational background: BSc in psychological and health sciences from the University of Toronto under their co-op program</li>
                    <li>🏢 Work background: primarily in the mental health, non-profit, and healthcare sectors</li>
                    <li>📝 Looking for: opportunities to work on new and challenging projects - learning by doing has taught me the fastest</li>
                    <li>❓ Ask me about: overly convoluted hypotheticals</li>
                    <li>🌻 Fun fact: I like sunflowers, nerd stuff, and punk music (but I'll pretty much listen to anything)</li>
                </ul>
            </div>
            <div className='row mb-3'>
                <p>
                    I am newly graduated from University of Toronto's School of Continuing Studies Coding Bootcamp. The projects featured in this portfolio were created during this course - including this webpage you're reading now, which is a React single page application.
                    <br />
                    <br />
                    Hope you enjoy the products of this new journey of mine as much as I had fun learning it.
                </p>
            </div>
        </div>
    )
}

export default About;