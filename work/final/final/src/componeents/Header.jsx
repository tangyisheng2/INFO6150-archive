import '../css/header.css';
function Header({ setShowingPage, pageData }) {
    return (
        <header className="header">
            <a href="#main" className="skip-link">
                Skip to content
            </a>
            <div className="icon-mask">
                <span>📷</span>
            </div>
            <div className="title">
                <a href={`#`}>
                    <h1>Gallery of California</h1>
                    <h2>Always Exploring :D</h2>
                </a>
            </div>
        </header>
    );
}
export default Header;
