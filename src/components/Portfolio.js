import React, {useState} from 'react';

function Portfolio() {
    const [projects] = useState([
        // {name: '', type: '', primary: '', repo: '', link: ''}
        {name: 'Fermata', deployed: true, primary: 'Fullstack MVC', repo: 'https://github.com/TOVTC/Fermata-project-two', link: 'https://experience-fermata.herokuapp.com/home', img: 'fermata'},
        {name: 'WeathCon', deployed: true, primary: 'Interactive Frontend', repo: 'https://github.com/TOVTC/WeathCon-project-one', link: 'https://scscbc-projects2022.github.io/WeathCon-project-one/', img: 'weathcon'},
        {name: 'Weather Dashboard', deployed: true, primary: 'Server-Side APIs', repo: 'https://github.com/TOVTC/weather-dashboard-scscbc-challenge', link: 'https://tovtc.github.io/weather-dashboard-scscbc-challenge/', img: 'weather-dashboard'},
        {name: 'Workday Scheduler', deployed: true, primary: 'Third-Party APIs', repo: 'https://github.com/TOVTC/scheduler-scscbc-challenge', link: 'https://tovtc.github.io/scheduler-scscbc-challenge/', img: 'scheduler'},
        {name: 'Code Quiz', deployed: true, primary: 'Web APIs', repo: 'https://github.com/TOVTC/code-quiz-scscbc-challenge', link: 'https://tovtc.github.io/code-quiz-scscbc-challenge/', img: 'coding-quiz'},
        {name: 'Personal Portfolio', deployed: true, primary: 'CSS Flexbox', repo: 'https://github.com/TOVTC/portfolio-scscbc-challenge', link: 'https://tovtc.github.io/portfolio-scscbc-challenge/', img: 'portfolio'},
    ]);
    const deployedApps = projects.filter(project => project.deployed === true);
    const nondeployedApps = projects.filter(project => project.deployed === false);
    return (
        <div className='mx-5'>
            <h3 className='my-2'>Deployed Applications</h3>
            <div className='d-flex flex-wrap m-3'>
                {!deployedApps.length ? (
                    <p>No applications of this type featured!</p>
                ) : (
                    deployedApps.map(app => (
                        <div className='m-5 p-2'>
                            <h4>{app.name}</h4>
                            <img src={require(`../assets/projects/${app.img}.png`)} className='m-2 image'></img>
                            <p>Focus: {app.primary}</p>
                            <a href={app.repo} className='mx-1' target='_blank'>GitHub Repository</a>
                            <a href={app.link} className='mx-1' target='_blank'>Deployed Link</a>
                        </div>
                    ))
                )}
            </div>
            <h3 className='my-2'>Non-Deployed Applications</h3>
            <div className='m-3'>
                {!nondeployedApps.length ? (
                    <p>No applications of this type featured!</p>
                ) : (
                    nondeployedApps.map(app => (
                        <div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Portfolio;