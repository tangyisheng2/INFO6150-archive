import '../css/header.css';
function Header({ setShowingPage, pageData }) {
    return (
        <header
            onClick={() => {
                setShowingPage(pageData.Home);
            }}
            className="header"
        >
            <div className="icon-mask">
                <span>📷</span>
            </div>
            <div className="title">
                <a href={`#/home`}>
                    <h1>Gallery of California</h1>
                    <h2>Always Exploring :D</h2>
                </a>
            </div>
        </header>
    );
}
export default Header;
