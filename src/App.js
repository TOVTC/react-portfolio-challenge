import React, {useState} from 'react';
import Navigation from './components/Navigation';
import About from './components/About'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
    const options = [
        'About Me',
        'Portfolio',
        'Contact',
        'Resume'
    ]
    const [selection, setSelection] = useState(options[0]);
    return (
        <div id='page-container'>
            <Navigation
                options={options}
                selection={selection}
                setSelection={setSelection}>
            </Navigation>
            <main id='content-wrap'>
                {(() => {
                    switch (selection) {
                        case 'About Me':
                            return <About></About>
                        case 'Portfolio':
                            return <Portfolio></Portfolio>
                        case 'Contact':
                            return <Contact></Contact>
                        case 'Resume':
                            return <Resume></Resume>
                        default:
                            return <About></About>
                    }
                })()}
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;