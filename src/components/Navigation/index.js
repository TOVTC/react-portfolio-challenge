import React from 'react';

function Navigation() {
    return (
        <header className='d-flex justify-content-between p-5'>
            <h1 className='d-inline-flex'>
                <a href="/">TOVTC</a>
            </h1>
            <nav className='d-inline-flex'>
                <ul className='flex-row'>
                    <li className='mx-2 d-inline'>About Me</li>
                    <li className='mx-2 d-inline'>Portfolio</li>
                    <li className='mx-2 d-inline'>Contact</li>
                    <li className='mx-2 d-inline'>Resume</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;