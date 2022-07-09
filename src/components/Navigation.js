import React from 'react';

function Navigation(props) {
    const {
        options = [],
        selection,
        setSelection
    } = props;
    return (
        <header className='d-flex justify-content-between p-5'>
            <h1 className='d-inline-flex'>
                <a href="/">TOVTC</a>
            </h1>
            <nav className='d-inline-flex'>
                <ul className='flex-row list-inline'>
                    {options.map((option) => (
                        <li className={`mx-3 d-inline-flex ${selection === option && 'navActive'}`} key={option}>
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