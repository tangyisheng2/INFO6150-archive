import { useState } from 'react';
import ShowObject from './utils/ShowObject';

function NavBar({ data, setShowingPage }) {
    const [expandedMenu, setExpandedMenu] = useState({});

    return (
        <div>
            <ShowObject
                entry={data}
                setShowingPage={setShowingPage}
                expandedMenu={expandedMenu}
                setExpandedMenu={setExpandedMenu}
            />
        </div>
    );
}
export default NavBar;
