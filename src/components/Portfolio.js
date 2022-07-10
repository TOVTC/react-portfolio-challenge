import React, {useState} from 'react';

function Portfolio() {
    const [projects] = useState([
        {name: 'Personal Portfolio', deployed: true, primary: 'CSS Flexbox', repo: 'https://github.com/TOVTC/portfolio-scscbc-challenge', link: 'https://tovtc.github.io/portfolio-scscbc-challenge/', img: 'portfolio'},
        {name: 'Fermata', deployed: true, primary: 'MVC Fullstack Application', repo: 'https://github.com/TOVTC/Fermata-project-two', link: 'https://experience-fermata.herokuapp.com/home', img: 'fermata'},
        {name: 'WeathCon', deployed: true, primary: 'Frontend Application', repo: 'https://github.com/TOVTC/WeathCon-project-one', link: 'https://scscbc-projects2022.github.io/WeathCon-project-one/', img: 'weathcon'},
        {name: 'Weather Dashboard', deployed: true, primary: 'Server-Side APIs', repo: 'https://github.com/TOVTC/weather-dashboard-scscbc-challenge', link: 'https://tovtc.github.io/weather-dashboard-scscbc-challenge/', img: 'weather-dashboard'},
        {name: 'Workday Scheduler', deployed: true, primary: 'Third-Party APIs', repo: 'https://github.com/TOVTC/scheduler-scscbc-challenge', link: 'https://tovtc.github.io/scheduler-scscbc-challenge/', img: 'scheduler'},
        {name: 'Code Quiz', deployed: true, primary: 'Web APIs', repo: 'https://github.com/TOVTC/code-quiz-scscbc-challenge', link: 'https://tovtc.github.io/code-quiz-scscbc-challenge/', img: 'coding-quiz'},
        // {name: '', type: '', primary: '', repo: '', link: ''}
    ]);
    const deployedApps = projects.filter(project => project.deployed === true);
    const nondeployedApps = projects.filter(project => project.deployed === false);
    return (
        <div>
            <h3>Deployed Applications</h3>
            <div>
                {!deployedApps.length ? (
                    <p>No applications of this type featured!</p>
                ) : (
                    deployedApps.map(app => (
                        <p>{app.name}</p>
                    ))
                )}
            </div>
            <h3>Non-Deployed Applications</h3>
            <div>
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