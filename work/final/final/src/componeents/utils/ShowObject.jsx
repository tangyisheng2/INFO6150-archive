import '../../css/css.gg/gg-menu.css';
import '../../css/css.gg/gg-close.css';

function ShowObject({
    entry: data,
    setShowingPage,
    expandedMenu,
    setExpandedMenu,
    isSubmenu
}) {
    
    return (
        <ul className={isSubmenu ? "navbar__sublist": "navbar__list"}>
            {Object.keys(data).map((key) => {
                if (typeof data[key] === 'string') {
                    return (
                        <li key={key} className="navbar__list-item">
                            <a
                                href={`/#/${key}`}
                                onClick={() => setShowingPage(data[key])}
                            >
                                {key}
                            </a>
                        </li>
                    );
                } else if (typeof data[key] === 'object') {
                    return (
                        // <ul>
                        //     <ShowObject entry={data[key]} setShowingPage={setShowingPage} />
                        // </ul>
                        <li key={key} className="navbar__list-item">
                            <button
                                onClick={() => {
                                    if (!(key in expandedMenu)) {
                                        expandedMenu[key] = false;
                                    }
                                    setExpandedMenu({
                                        ...expandedMenu,
                                        [key]: !expandedMenu[key],
                                    });
                                    console.log(expandedMenu)
                                }}
                            >
                                {key}{' '}
                                {expandedMenu[key] !== true && (
                                    <i className="icon gg-menu-boxed" />
                                )}
                                {expandedMenu[key] === true && (
                                    <i className="icon gg-close" />
                                )}
                            </button>
                            {/* {expandedMenu[key] === true && <span><i className='gg-menu' /></span>} */}

                            {key in expandedMenu && expandedMenu[key] === true && (
                                    <ShowObject
                                        entry={data[key]}
                                        setShowingPage={setShowingPage}
                                        className="navbar__sublist"
                                        isSubmenu={true}
                                    />
                            )}
                        </li>
                    );
                } else {
                    return null;
                }
            })}
        </ul>
    );
}
export default ShowObject;
