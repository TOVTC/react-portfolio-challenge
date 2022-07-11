import React, {useState} from 'react';
import Header from './components/Header';
import About from './components/About'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
    const options = [
        'About',
        'Portfolio',
        'Contact',
        'Resume'
    ]
    const [selection, setSelection] = useState(options[0]);
    return (
        <div id='page-container'>
            <Header
                options={options}
                selection={selection}
                setSelection={setSelection}>
            </Header>
            <main id='content-wrap'>
                {(() => {
                    switch (selection) {
                        case 'About':
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