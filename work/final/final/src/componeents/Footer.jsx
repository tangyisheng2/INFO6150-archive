import '../css/footer.css'
function Footer({setShowingPage, pageData}){
    console.log(pageData)
    return (
        <footer>
            <p>© 1999-2022 Yisheng Tang.</p>
            <ul>
            {Object.keys(pageData).map((entry) => {
                return (
                    <li>Check out our <a onClick={() => {setShowingPage(pageData[entry])}}>{entry}</a></li>
                )
            })}
            </ul>
        </footer>
    )
}
export default Footer;