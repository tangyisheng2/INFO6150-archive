import '../css/header.css';
function Header({ setShowingPage, pageData }) {
    return (
        <header
            onClick={() => {
                setShowingPage(pageData.Home);
            }}
            className="header"
        >
            <mask className="icon-mask">
                <span>📷</span>
            </mask>
            <heading className="title">
                <a href={`#/home`}>
                    <h1>Gallery of California</h1>
                    <h2>Always Exploring :D</h2>
                </a>
            </heading>
        </header>
    );
}
export default Header;
