import '../css/home.css';
import Home_DisplayBlock from './Home_DisplayBlock';
function Home({ navPageData, cityDescription, cityImage, setShowingPage }) {
    console.log(navPageData);
    return (
        <main className="main">
            {/* <p>👋Hi, welcome to my gallery.</p>
            <p>👨‍🎓I am Eason from Northeastern Univerisity</p>
            <p>⌨️I am mostly a programmer</p>
            <p>
                📷But this site is mostly used to share some of my photographies
            </p>
            <p>😄Feel free to look around</p>
            <p>📺And don't forget to subscribe my socal media!</p>
            <p>📰and also the Newsletter</p> */}

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
        </main>
    );
}
export default Home;
