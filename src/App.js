import React, {useState} from 'react';
import Navigation from './components/Navigation';
import About from './components/About'
import Portfolio from './components/Portfolio';

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
                        case 'Portfolio':
                            return <Portfolio></Portfolio>
                        default:
                            return <About></About>
                    }
                })()}
            </main>
        </div>
    );
}

export default App;