import React from 'react';
import Navigation from './Navigation';

function Header({options = [], selection, setSelection}) {
    return (
        <header className='d-flex flex-wrap p-3 mb-5'>
            <h1 className='d-inline-flex p-1'>
                <a href="/react-portfolio-scscbc-challenge">To, Veronica Tai Chi</a>
            </h1>
            <Navigation
                options={options}
                selection={selection}
                setSelection={setSelection}>
            </Navigation>
        </header>
    )
}

export default Header;