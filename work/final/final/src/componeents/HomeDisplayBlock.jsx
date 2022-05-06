function HomeDisplayBlock({
    displayTitle,
    title,
    description,
    image,
    link,
    setShowingPage,
}) {
    return (
        <li className="home-display__block">
            <div className={`home-display-block__div ${title}`}>
                <h2 className="home-display-block__title">{displayTitle}</h2>
                <p className="home-display-block__description">{description}</p>
                <a
                    onClick={() => setShowingPage(title)}
                    href={`#`}
                    className='home-display-block__link'
                >
                    Learn More
                </a>
                <img src={image} alt="" srcSet="" className="preview__image" />
            </div>
        </li>
    );
}
export default HomeDisplayBlock;
