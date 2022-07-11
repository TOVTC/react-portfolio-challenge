import React from 'react';

function Navigation(props) {
    const {
        options = [],
        selection,
        setSelection
    } = props;
    return (
        <nav className='d-inline-flex'>
            <ul className='list-inline'>
                {options.map((option) => (
                    <li className={`mx-3 d-inline-flex ${selection === option && 'selected'}`} key={option}>
                        <span onClick={() => setSelection(option)}>
                            {option}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;