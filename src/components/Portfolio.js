import React, {useState} from 'react';
import {BsFileEarmarkPost, BsFileEarmarkCode} from "react-icons/bs";
import {BsGithub, BsLink} from "react-icons/bs";


function Portfolio() {
    const [projects] = useState([
        // {name: '', deployed: true/false, focus: '', repo: '', link: '', img: ''},
        {name: 'CatWorx', deployed: false, focus: 'C#, .NET Core', repo: 'https://github.com/TOVTC/csharp-.net-CatWorx', img: 'csharp-catworx'},
        {name: 'Just Tech News', deployed: true, focus: 'Java Fullstack MVC', repo: 'https://github.com/TOVTC/tech-news-java-api', link: 'https://cc-java-api-777.herokuapp.com/', img: 'java-tech-news'},
        {name: 'Java Employee Tracker', deployed: false, focus: 'Spring Boot API', repo: 'https://github.com/TOVTC/java-spring-employee-api', img: 'java-employee-api'},
        {name: 'Hello, User!', deployed: false, focus: 'Java API', repo: 'https://github.com/TOVTC/spring-java-greeting-api', img: 'java-hello-user'},
        {name: 'Locum', deployed: true, focus: 'React SPA', repo: 'https://github.com/TOVTC/Locum-project-three', link: 'https://locum-staffing.herokuapp.com/', img: 'locum'},
        {name: 'Employee Tracker', deployed: false, focus: 'SQL Database', repo: 'https://github.com/TOVTC/employee-tracker-challenge', img: 'employee-tracker'},
        {name: 'Team Profile Generator', deployed: false, focus: 'Node.js', repo: 'https://github.com/TOVTC/team-profile-generator-challenge', img: 'team-generator'},
        {name: 'Fermata', deployed: true, focus: 'Fullstack MVC', repo: 'https://github.com/TOVTC/Fermata-project-two', link: 'https://experience-fermata.herokuapp.com/home', img: 'fermata'},
        {name: 'WeathCon', deployed: true, focus: 'Interactive Frontend', repo: 'https://github.com/TOVTC/WeathCon-project-one', link: 'https://projects2022.github.io/WeathCon-project-one/', img: 'weathcon'},
        {name: 'Weather Dashboard', deployed: true, focus: 'Server-Side APIs', repo: 'https://github.com/TOVTC/weather-dashboard-challenge', link: 'https://tovtc.github.io/weather-dashboard-challenge/', img: 'weather-dashboard'},
        {name: 'Workday Scheduler', deployed: true, focus: 'Third-Party APIs', repo: 'https://github.com/TOVTC/scheduler-challenge', link: 'https://tovtc.github.io/scheduler-challenge/', img: 'scheduler'},
        {name: 'Code Quiz', deployed: true, focus: 'Web APIs', repo: 'https://github.com/TOVTC/code-quiz-challenge', link: 'https://tovtc.github.io/code-quiz-challenge/', img: 'coding-quiz'},
        {name: 'Personal Portfolio', deployed: true, focus: 'CSS Flexbox', repo: 'https://github.com/TOVTC/portfolio-challenge', link: 'https://tovtc.github.io/portfolio-challenge/', img: 'portfolio'},
    ]);
    const deployedApps = projects.filter(project => project.deployed === true);
    const nondeployedApps = projects.filter(project => project.deployed === false);
    return (
        <div className='container'>
            <div className='row mb-2'>
                <h2>Portfolio</h2>
            </div>
            <div className='row'>
                <h3 className='my-2'><BsFileEarmarkPost /> Deployed Applications</h3>
            </div>
            <div className='row'>
                <div className='col d-flex flex-wrap my-3 projects'>
                    {!deployedApps.length ? (
                        <p>No applications of this type featured!</p>
                    ) : (
                        deployedApps.map(app => (
                            <div className='m-3 p-4 radius project' key={app.name}>
                                <a href={app.repo}>
                                    <img src={require(`../assets/images/projects/${app.img}.png`)} className='m-2 image radius' alt={app.name}></img>
                                </a>
                                <h4 className='mt-4'>{app.name}</h4>
                                <div className='my-3'>
                                    <p>Focus: {app.focus}</p>
                                    <BsGithub /><a href={app.repo} className='mx-2 p-1 mini-link' target='_blank' rel='noreferrer'>GitHub</a>
                                    <BsLink className='ms-3'/><a href={app.link} className='mx-2 p-1 mini-link' target='_blank' rel='noreferrer'>Deployed</a>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className='row'>
                <h3 className='mt-5'><BsFileEarmarkCode /> Non-Deployed Applications</h3>
            </div>
            <div className='row mt-2'>
                    <div className='col d-flex flex-wrap my-3 projects'>
                        {!nondeployedApps.length ? (
                            <p>No applications of this type featured!</p>
                        ) : (
                            nondeployedApps.map(app => (
                                <div className='m-3 p-4 radius project' key={app.name}>
                                    <a href={app.repo}>
                                        <img src={require(`../assets/images/projects/${app.img}.png`)} className='m-2 image radius' alt={app.name}></img>
                                    </a>
                                    <h4 className='mt-4'>{app.name}</h4>
                                    <div className='my-3'>
                                        <p>Focus: {app.focus}</p>
                                        <BsGithub /><a href={app.repo} className='mx-2 p-1 mini-link' target='_blank' rel='noreferrer'>GitHub</a>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
        </div>
    )
}

export default Portfolio;