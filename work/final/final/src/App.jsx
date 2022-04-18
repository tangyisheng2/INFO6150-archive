import { useState } from 'react';
import './App.css';
import Footer from './componeents/Footer';
import Form from './componeents/Form';
import Header from './componeents/Header';
import Home from './componeents/Home';
import HalfMoonBay from './componeents/locations/HalfMoonBay';
import Monterey from './componeents/locations/Monterey';
import SantaCruz from './componeents/locations/SantaCruz';
import NavBar from './componeents/NavBar';
import NotFound from './componeents/NotFound';
import Privacy from './componeents/Privacy';
import Licence from './componeents/License';
import Comments from './componeents/Comments';

function App() {
    const [showingPage, setShowingPage] = useState('home');
    console.log(showingPage)

    const navPageData = {
      Home: 'home',
      Newsletter: 'form',
      Locations: {
        Monterey: 'monterey',
        "Half Moon Bay": 'halfmoonbay',
        "Santa Cruz": 'santacruz'
      },
      'Comment Board': 'comments'
    }

    const miscPageData = {
      "Privacy Policy": 'privacy',
      "Licence": 'licence'
    }

    // Comments.jsx
    const [comments, setComments] = useState({});
    const [commentsErrorMessage, setCommentsErrorMessage] = useState("")



    return (
        <div className="app">
            <Header setShowingPage={setShowingPage} pageData={navPageData} className="header" />
            <NavBar data={navPageData} setShowingPage={setShowingPage} className="nav" />
            {showingPage === 'home' && <Home />}
            {showingPage === 'form' && <Form pageData={navPageData}/>}
            {showingPage === 'NotFound' && <NotFound />}
            {showingPage === 'monterey' && <Monterey />}
            {showingPage === 'halfmoonbay' && <HalfMoonBay />}
            {showingPage === 'santacruz' && <SantaCruz />}
            {showingPage === 'privacy' && <Privacy />}
            {showingPage === 'licence' && <Licence />}
            {showingPage === 'comments' && <Comments comments={comments} setComments={setComments} commentsErrorMessage = {commentsErrorMessage} setCommentsErrorMessage={setCommentsErrorMessage} />}
            {/* {!(showingPage in [...Object.keys(navPageData), ...Object.keys(miscPageData)] || showingPage === undefined) && <NotFound setShowingPage={setShowingPage} pageData={navPageData} className='404'/>} */}
            <Footer setShowingPage={setShowingPage} pageData={miscPageData} className="footer" />
            {/* <Footer className="footer" /> */}
        </div>
    );
}

export default App;
