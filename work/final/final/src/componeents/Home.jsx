import '../css/home.css';
import Accordion from './Accordion';
import HomeDisplayBlock from './HomeDisplayBlock';
function Home({ navPageData, cityDescription, cityImage, setShowingPage }) {
    return (
        <main id="main" className="home__main">
            <ul className="home-display__list">
                {Object.keys(navPageData).map((title) => {
                    return (
                        <HomeDisplayBlock
                            displayTitle={title}
                            title={navPageData[title]}
                            key={navPageData[title]}
                            description={cityDescription[title]}
                            image={cityImage[title]}
                            link={navPageData[title]}
                            setShowingPage={setShowingPage}
                        />
                    );
                })}
            </ul>
            <Accordion />
        </main>
    );
}
export default Home;
