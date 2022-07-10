import React from 'react';

function Navigation(props) {
    const {
        options = [],
        selection,
        setSelection
    } = props;
    return (
        <header className='d-flex justify-content-between p-5'>
            <h2 className='d-inline-flex'>
                <a href="/">To, Veronica Tai Chi</a>
            </h2>
            <nav className='d-inline-flex'>
                <ul className='flex-row list-inline'>
                    {options.map((option) => (
                        <li className={`mx-3 d-inline-flex ${selection === option && 'selected'}`} key={option}>
                            <span onClick={() => setSelection(option)}>
                                {option}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;