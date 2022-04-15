import '../css/footer.css'
function Footer({setShowingPage, pageData}){
    return (
        <footer className='footer'>
            {/* <li>© 1999-2022 Yisheng Tang.</li> */}
            <ul>
            <li>© 1999-2022 Yisheng Tang.</li>
            {Object.keys(pageData).map((entry) => {
                return (
                    <li key={entry}><a href={`#/${pageData[entry]}`} onClick={() => {setShowingPage(pageData[entry])}}>{entry}</a></li>
                )
            })}
            </ul>
        </footer>
    )
}
export default Footer;