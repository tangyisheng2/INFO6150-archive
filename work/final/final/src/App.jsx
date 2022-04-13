import { useState } from 'react';
import './App.css';
import './css/styles.css'
import Footer from './componeents/Footer';
import Form from './componeents/Form';
import Header from './componeents/Header';
import Home from './componeents/Home';
import HalfMoonBay from './componeents/locations/HalfMoonBay';
import Monterey from './componeents/locations/Monterey';
import SantaCruz from './componeents/locations/SantaCruz';
import NavBar from './componeents/NavBar';
import NotFound from './componeents/NotFound';

function App() {
    const [showingPage, setShowingPage] = useState('home');

    return (
        <div className="app">
            <Header className="header" />
            <NavBar className="nav" />
            {showingPage === 'home' && <Home />}
            {showingPage === 'form' && <Form />}
            {showingPage === 'NotFound' && <NotFound />}
            {showingPage === 'monterey' && <Monterey />}
            {showingPage === 'halfmoonbay' && <HalfMoonBay />}
            {showingPage === 'santacruz' && <SantaCruz />}
            <Footer className="footer" />
        </div>
    );
}

export default App;
