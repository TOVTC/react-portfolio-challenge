import React from 'react';
import Navigation from './Navigation';

function Header({options = [], selection, setSelection}) {
    return (
        <header className='d-flex flex-wrap justify-content-between p-5'>
            <h1 className='d-inline-flex'>
                <a href="/">To, Veronica Tai Chi</a>
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