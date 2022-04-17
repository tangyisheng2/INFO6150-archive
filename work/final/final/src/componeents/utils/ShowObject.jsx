import '../../css/css.gg/gg-menu.css';
import '../../css/css.gg/gg-close.css';

function ShowObject({
    entry: data,
    setShowingPage,
    expandedMenu,
    setExpandedMenu,
}) {
    return (
        <ul className="navbar__list">
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
                                        expandedMenu[key] = true;
                                    }
                                    setExpandedMenu({
                                        ...expandedMenu,
                                        [key]: !expandedMenu[key],
                                    });
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
                                <ul className="navbar__sublist">
                                    <ShowObject
                                        entry={data[key]}
                                        setShowingPage={setShowingPage}
                                    />
                                </ul>
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
