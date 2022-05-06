import '../css/error.css';
function NotFound({ setShowingPage, pageData }) {
    return (
        <main id="main" class="main">
            <div class="error__view">
                <p class="error__code">404</p>
                <p class="error__message">Sorry, the page is lost!</p>
                <p class="error__to_home">
                    <a
                        href="/"
                        onClick={() => setShowingPage(pageData.Home)}
                    >
                        Back to Home
                    </a>
                </p>
            </div>
        </main>
    );
}
export default NotFound;
