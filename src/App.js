import React, {useState} from 'react';
import Navigation from './components/Navigation';

function App() {
    const options = [
        "About Me",
        "Portfolio",
        "Contact",
        "Resume"
    ]
    const [selection, setSelection] = useState(options[0]);
    return (
        <div>
            {/* use variables to update highlighted text in Nav + set the currently selected section */}
            <Navigation
                options={options}
                selection={selection}
                setSelection={setSelection}
            >
            </Navigation>
            {/* here, take the selection and render each section using a switch statement? */}
        </div>
    );
}

export default App;