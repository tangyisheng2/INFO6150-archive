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
import CurrentUser from './componeents/CurrentUser';
// Home Image
import halfMoonBayPreview from './img/half_moon_bay/NorCal2018_Beach_and_Cliff_at_Ritz-Carlton_Half_Moon_Bay_S0675078.jpeg';
import montereyPreview from './img/monterey/MontereyBayAquariumBackview_(cropped).jpeg';
import santacruzPreview from './img/santa_cruz/Downtown_santa_cruz,_cropped_(cropped).jpeg';

function App() {
    const [showingPage, setShowingPage] = useState('home');
    const navPageData = {
        Home: 'home',
        Locations: {
            Monterey: 'monterey',
            'Half Moon Bay': 'halfmoonbay',
            'Santa Cruz': 'santacruz',
        },
        'Comment Board': 'comments',
        Newsletter: 'form',
    };

    const miscPageData = {
        'Privacy Policy': 'privacy',
        Licence: 'licence',
    };

    const locationDescription = {
        Monterey: 'Language Capital of the World,California\'s "First" City',
        'Half Moon Bay':
            'Home of the world famous Half Moon Bay Pumpkin Festival!',
        'Santa Cruz': 'Surf City',
    };

    const locationPreviewImage = {
        Monterey: montereyPreview,
        'Half Moon Bay': halfMoonBayPreview,
        'Santa Cruz': santacruzPreview,
    };

    // Comments.jsx
    const [comments, setComments] = useState({});
    const [commentsErrorMessage, setCommentsErrorMessage] = useState('');

    // Newsletter.jsx
    const [currentUser, setCurrentUser] = useState({});

    return (
        <div className="app">
            <Header
                setShowingPage={setShowingPage}
                pageData={navPageData}
                className="header"
            />
            <NavBar
                data={navPageData}
                setShowingPage={setShowingPage}
                className="nav"
            />
            <CurrentUser user={currentUser} />
            {showingPage === 'home' && (
                <Home
                    navPageData={navPageData.Locations}
                    cityDescription={locationDescription}
                    cityImage={locationPreviewImage}
                    setShowingPage={setShowingPage}
                />
            )}
            {showingPage === 'form' && <Form setCurrentUser={setCurrentUser} />}
            {showingPage === 'NotFound' && <NotFound />}
            {showingPage === 'monterey' && <Monterey />}
            {showingPage === 'halfmoonbay' && <HalfMoonBay />}
            {showingPage === 'santacruz' && <SantaCruz />}
            {showingPage === 'privacy' && <Privacy />}
            {showingPage === 'licence' && <Licence />}
            {showingPage === 'comments' && (
                <Comments
                    comments={comments}
                    setComments={setComments}
                    commentsErrorMessage={commentsErrorMessage}
                    setCommentsErrorMessage={setCommentsErrorMessage}
                />
            )}
            {/* {!(showingPage in [...Object.keys(navPageData), ...Object.keys(miscPageData)] || showingPage === undefined) && <NotFound setShowingPage={setShowingPage} pageData={navPageData} className='404'/>} */}
            <Footer
                setShowingPage={setShowingPage}
                pageData={miscPageData}
                className="footer"
            />
            {/* <Footer className="footer" /> */}
        </div>
    );
}

export default App;
