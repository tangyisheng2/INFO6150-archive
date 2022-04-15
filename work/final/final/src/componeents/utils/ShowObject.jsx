function ShowObject(entry) {
    let data = entry.entry;

    if (typeof data === 'string') {
        return <span>{data}</span>;
    } else {
        return (
            <ul>
                {Object.keys(data).map((key) => {
                    return (
                        <li>
                            {key}: <ShowObject entry={data[key]} />
                        </li>
                    );
                })}
            </ul>
        );
    }
}
export default ShowObject;
