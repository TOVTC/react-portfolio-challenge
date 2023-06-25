import React from 'react';

function About() {
    return (
        <div className='container'>
            <div className='row d-flex flex-wrap justify-content-center align-items-center my-3'>
                <img src={require('../assets/images/avatar.jpg')} alt='TOVTC' id='avatar' className='m-3'></img>
                <div id='about-caption'>
                    <h2>TOVTC</h2>
                    <ul className='d-flex flex-wrap list-inline' id='title'>
                        <li>Junior Developer </li>
                        <li className='mx-1 vert'>|</li>
                        <li>Instructional Specialist</li>
                        <li className='mx-1 vert'>|</li>
                        <li>Mathematics Instructor</li>
                    </ul>
                </div>
            </div>
            <div className='row mt-3'>
                <p>
                    TOVTC here, full stack junior developer, instructional specialist, and mathematics instructor. My original field of study was mental health, and I've worked in the mental health, non-profit, and healthcare sectors throughout and since my undergraduate degree, working everything from social work to primary care clinics to addictions research to medical laboratory. I've also been a mathematics instructor since 2014. I initially got into coding during my final semester at university when I took a neuroeconomics course (think neuroscience of decision making) that required statistical analysis using R - and that was pretty fun.
                    <br/>
                    <br/>
                    After graduating University of Toronto's School of Continuing Studies Coding Bootcamp in 2022, I became a TA for their web development program and a junior developer at i3 Solutions Inc in healthcare technologies shortly after - something of a dream job, considering my prior work and educational backgrounds.
                </p>
            </div>
            <div className='row mx-5 my-3'>
                <ul className='about-text'>
                    <li>😝 Pronouns: She/Her/她</li>
                    <li>🇭🇰  Bilingual: English, Cantonese (廣東話)</li>
                    <li>💻 Current coding projects: healthcare technologies with i3, web development with EdX x UofT</li>
                    <li>🎓 Prior educational background: Honours BSc with distinction in mental health from the University of Toronto under their co-op program</li>
                    <li>🏢 Prior work background: primarily in the mental health, non-profit, and healthcare sectors</li>
                    <li>❓ Ask me about: overly convoluted hypotheticals</li>
                    <li>🌵 Self development: maintaining a consistent 6x a week gym schedule, keeping all my non-cacti houseplants alive, and improving my Chinese reading and writing skills</li>
                    <li>💥 Fun fact from my youth: I have an Industry Canada aeronautical radio license and was a trained RCAC ceremonial drill instructor on the rifle drill team until I retired from the program in 2014 at the rank of Warrant Officer 2nd Class</li>
                    <li>🌻 Relevant fun fact: I like sunflowers, nerd stuff, and punk music (but I'll pretty much listen to anything - from 1950's jazz to Cantonese nu-metal)</li>
                </ul>
            </div>
            <div className='row mb-3'>
                <p>
                    Outside of coding, teaching, and healthcare, I also have a passion for narrative and English literature and was nominated for University of Toronto's English Department Essay Prize by my professor in 2019. The essay in question was a think-piece on the interrogation of real-world accessibility in Fraction and Aja's Hawkeye (2012) (but I'm also into other nerd stuff, not just comics).
                </p>
            </div>
        </div>
    )
}

export default About;