import React, {useState} from 'react';
import {BsFileEarmarkPost, BsFileEarmarkCode, BsGithub, BsLink, BsPeopleFill} from 'react-icons/bs';
import {projectList} from '../utils/projectList';


function Portfolio() {
    const [projects] = useState(projectList);
    const collaborativeApps = projects.filter(project => project.collaborative === true);
    const deployedApps = projects.filter(project => project.deployed === true);
    const nondeployedApps = projects.filter(project => project.deployed === false);
    return (
        <div className='container'>
            <div id='top' className='row mb-2'>
                <h2>Portfolio</h2>
                <p>
                    Jump to: <a id='group-link' href='#group'>Group Projects</a> | <a id='deployed-link' href='#deployed'>Deployed Applications</a> | <a id='not-deployed-link' href='#not-deployed'>Non-Deployed Applications</a>
                </p>
            </div>
            <div id='group' className='row'>
                <h3 className='mt-2'><BsPeopleFill /> Collaborative Group Projects</h3>
            </div>
            <div className='row'>
                <div className='col d-flex flex-wrap my-3 projects'>
                    {!collaborativeApps.length ? (
                        <p>No applications of this type featured!</p>
                    ) : (
                        collaborativeApps.map(app => (
                            <div className='m-3 p-4 radius project' key={app.name + 'group'}>
                                <a href={app.repo}>
                                    <img src={require(`../assets/images/projects/${app.img}.png`)} className='m-2 image radius' alt={app.name}></img>
                                </a>
                                <h4 className='mt-4'>{app.name}</h4>
                                {app.bootcamp ? (<p className='text-sm-left'>(Boot Camp)</p>) : ''}
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
            <div id='deployed' className='row'>
                <h3 className='mt-5 mb-2'><BsFileEarmarkPost /> Deployed Applications</h3>
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
                                {app.bootcamp ? (<p className='text-sm-left'>(Boot Camp)</p>) : ''}
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
            <div id='not-deployed' className='row'>
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
                                {app.bootcamp ? (<p className='text-sm-left'>(Boot Camp)</p>) : ''}
                                <div className='my-3'>
                                    <p>Focus: {app.focus}</p>
                                    <BsGithub /><a href={app.repo} className='mx-2 p-1 mini-link' target='_blank' rel='noreferrer'>GitHub</a>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className='row mt-2 mb-5'>
                <p>
                    For a complete list of open source applications I have worked on, please navigate to my <a href='https://github.com/TOVTC' className='mini-link'>GitHub</a> account.
                </p>
                <p>
                    [<a id='top-link' href='#top'>Back to top</a>]
                </p>
            </div>
        </div>
    )
}

export default Portfolio;