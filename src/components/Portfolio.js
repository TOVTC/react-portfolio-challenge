import React, {useState} from 'react';

function Portfolio() {
    const [projects] = useState([
        // {name: '', deployed: true/false, focus: '', repo: '', link: '', img: ''},
        {name: 'Employee Tracker', deployed: false, focus: 'SQL Database', repo: 'https://github.com/TOVTC/employee-tracker-scscbc-challenge', img: 'employee-tracker'},
        {name: 'Team Profile Generator', deployed: false, focus: 'Node.js', repo: 'https://github.com/TOVTC/team-profile-generator-scscbc-challenge', img: 'team-generator'},
        {name: 'Fermata', deployed: true, focus: 'Fullstack MVC', repo: 'https://github.com/TOVTC/Fermata-project-two', link: 'https://experience-fermata.herokuapp.com/home', img: 'fermata'},
        {name: 'WeathCon', deployed: true, focus: 'Interactive Frontend', repo: 'https://github.com/TOVTC/WeathCon-project-one', link: 'https://scscbc-projects2022.github.io/WeathCon-project-one/', img: 'weathcon'},
        {name: 'Weather Dashboard', deployed: true, focus: 'Server-Side APIs', repo: 'https://github.com/TOVTC/weather-dashboard-scscbc-challenge', link: 'https://tovtc.github.io/weather-dashboard-scscbc-challenge/', img: 'weather-dashboard'},
        {name: 'Workday Scheduler', deployed: true, focus: 'Third-Party APIs', repo: 'https://github.com/TOVTC/scheduler-scscbc-challenge', link: 'https://tovtc.github.io/scheduler-scscbc-challenge/', img: 'scheduler'},
        {name: 'Code Quiz', deployed: true, focus: 'Web APIs', repo: 'https://github.com/TOVTC/code-quiz-scscbc-challenge', link: 'https://tovtc.github.io/code-quiz-scscbc-challenge/', img: 'coding-quiz'},
        {name: 'Personal Portfolio', deployed: true, focus: 'CSS Flexbox', repo: 'https://github.com/TOVTC/portfolio-scscbc-challenge', link: 'https://tovtc.github.io/portfolio-scscbc-challenge/', img: 'portfolio'},
    ]);
    const deployedApps = projects.filter(project => project.deployed === true);
    const nondeployedApps = projects.filter(project => project.deployed === false);
    return (
        <div className='m-4 px-5'>
            <h3 className='my-2'>Deployed Applications</h3>
            <div className='d-flex flex-wrap justify-content-around m-3'>
                {!deployedApps.length ? (
                    <p>No applications of this type featured!</p>
                ) : (
                    deployedApps.map(app => (
                        <div className='m-3 p-4 border' key={app.name}>
                            <a href={app.repo}>
                                <img src={require(`../assets/images/projects/${app.img}.png`)} className='m-2 border image' alt={app.name}></img>
                            </a>
                            <h4 className='mt-4'>{app.name}</h4>
                            <div className='my-3'>
                                <p>Focus: {app.focus}</p>
                                <a href={app.repo} className='mx-1' target='_blank' rel='noreferrer'>GitHub Repository</a>
                                <a href={app.link} className='mx-1' target='_blank' rel='noreferrer'>Deployed Link</a>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <h3 className='mt-5 my-2'>Non-Deployed Applications</h3>
            <div className='d-flex flex-wrap justify-content-around m-3'>
                {!nondeployedApps.length ? (
                    <p>No applications of this type featured!</p>
                ) : (
                    nondeployedApps.map(app => (
                        <div className='m-3 p-4 border' key={app.name}>
                            <a href={app.repo}>
                                <img src={require(`../assets/images/projects/${app.img}.png`)} className='m-2 border image' alt={app.name}></img>
                            </a>
                            <h4 className='mt-4'>{app.name}</h4>
                            <div className='my-3'>
                                <p>Focus: {app.focus}</p>
                                <a href={app.repo} className='mx-1' target='_blank' rel='noreferrer'>GitHub Repository</a>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Portfolio;