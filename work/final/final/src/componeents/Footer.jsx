import '../css/footer.css';
import CurrentTime from './CurrentTime';
function Footer({ setShowingPage, pageData }) {
    return (
        <footer className="footer">
            <ul>
                <li>© 1999-2022 Yisheng Tang.</li>
                {Object.keys(pageData).map((entry) => {
                    return (
                        <li key={entry}>
                            
                            <a
                                
                                href={`#`}
                                onClick={() => {
                                    setShowingPage(pageData[entry]);
                                }}
                            >
                                {entry}
                            </a>
                        </li>
                    );
                })}
                <li><CurrentTime /></li>
            </ul>
        </footer>
    );
}
export default Footer;
