import Navigation from './components/Navigation';

function App() {
    const options = [
        "About Me",
        "Portfolio",
        "Contact",
        "Resume"
    ]
    return (
        <div>
            <Navigation options={options}></Navigation>
        </div>
    );
}

export default App;