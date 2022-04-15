function ShowObject({ entry: data, setShowingPage }) {
    return (
        <ul>
            {Object.keys(data).map((key) => {
                if (typeof data[key] === 'string') {
                    return (
                        <li key={key}>
                            <a
                                href="#"
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
                        <li key={key}> 
                            <button>{key}</button>
                            <ul>
                                <ShowObject
                                    entry={data[key]}
                                    setShowingPage={setShowingPage}
                                />
                            </ul>
                        </li>
                    );
                }
            })}
        </ul>
    );
}
export default ShowObject;
