import React, {useState} from 'react';
import Navigation from './components/Navigation';
import About from './components/About'

function App() {
    const options = [
        'About Me',
        'Portfolio',
        'Contact',
        'Resume'
    ]
    const [selection, setSelection] = useState(options[0]);
    return (
        <div>
            <Navigation
                options={options}
                selection={selection}
                setSelection={setSelection}>
            </Navigation>
            <main>
                {(() => {
                    switch (selection) {
                        case 'About Me':
                            return <About></About>
                    }
                })()}
            </main>
        </div>
    );
}

export default App;