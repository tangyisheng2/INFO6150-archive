import { useState } from 'react';
import ShowObject from './utils/ShowObject';
import '../css/navbar.css'

function NavBar({ data, setShowingPage }) {
    const [expandedMenu, setExpandedMenu] = useState({});

    return (
        <nav className='navbar'>
            <ShowObject
                entry={data}
                setShowingPage={setShowingPage}
                expandedMenu={expandedMenu}
                setExpandedMenu={setExpandedMenu}
            />
        </nav>
    );
}
export default NavBar;
