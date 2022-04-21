function Home_DisplayBlock ({displayTitle,title, description, image, link, setShowingPage}) {
    console.log(image)
    return (
        <li className='home-display__block'>
            <div className={`home-display-block__div ${title}`} >
            <h2 className="home-display-block__title">{displayTitle}</h2>
            <p className="home-display-block__description">{description}</p>
            <a onClick={() => setShowingPage(title)} href={`#/location/${title}`}>Learn More</a>
            <img src={image} alt="" srcset="" className='preview__image' />
            </div>
            
            {/* <img src={image} className="home-display-block__image"></img> */}
            
        </li>
    )
}
export default Home_DisplayBlock;