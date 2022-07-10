import React from 'react';

function About() {
    return (
        <div className='mx-5'>
            <div className='d-flex flex-wrap justify-content-center align-items-center mb-3'>
                <img src={require('../assets/avatar.jpg')} alt='TOVTC' id='avatar' className='mx-5'></img>
                <div id='about-caption'>
                    <h2>TOVTC</h2>
                    <ul className='d-flex flex-wrap list-inline'>
                        <li>ASPIRING FULL-STACK DEVELOPER</li>
                        <li className='mx-1'>|</li>
                        <li>MEDICAL LABORATORY ASSISTANT</li>
                        <li className='mx-1'>|</li>
                        <li>MATHEMATICS INSTRUCTOR</li>
                    </ul>
                </div>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <p className='about-text'>
                    TOVTC here, medical laboratory assistant, mathematics instructor, full-stack developer. My original field of study was mental health, and I've worked in the mental health, non-profit, and healthcare sectors throughout and since my undergraduate degree. I intially got into coding during my final semester at university when I took a neuroeconomics course (think neuroscience of decision making) that required statistical analysis using R - and that was pretty fun.
                    <br />
                    <br />
                    Currently, I'm a student with University of Toronto's School of Continuing Studies and in the final weeks of their Coding Bootcamp. The projects featured in this portfolio were created during this course - including this webpage you're reading now, which is a React single page application.
                    <ul className='m-4'>
                        <li>😝 Pronouns: She/Her/她</li>
                        <li>💻 Current project: University of Toronto's Coding Bootcamp</li>
                        <li>🎓 Educational background: BSc in psychological and health sciences from the University of Toronto under their co-op program</li>
                        <li>🏢 Work background: primarily in the mental health, non-profit, and healthcare sectors</li>
                        <li>📝 Looking for: opportunities to work on new and challenging projects - learning by doing has taught me the fastest</li>
                        <li>❓ Ask me about: overly convoluted hypotheticals</li>
                        <li>🌻 Fun fact: I like sunflowers, nerd stuff, and punk music (but I'll pretty much listen to anything)</li>
                    </ul>
                    Hope you enjoy the products of this new journey of mine as much as I had fun learning it.
                </p>
            </div>
        </div>
    )
}

export default About;