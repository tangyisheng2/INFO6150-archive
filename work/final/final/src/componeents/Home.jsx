import '../css/home.css';
import Accordion from './Accordion';
import Home_DisplayBlock from './Home_DisplayBlock';
function Home({ navPageData, cityDescription, cityImage, setShowingPage }) {
    console.log(navPageData);
    return (
        <main className="home__main">


            <ul className="home-display__list">
                {Object.keys(navPageData).map((title) => {
                    return (
                        <Home_DisplayBlock
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
