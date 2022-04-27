import Lighthouse from '../../img/santa_cruz/IMG_6123.jpeg';
import BeachView from '../../img/santa_cruz/IMG_6124.jpeg';
import OceanView from '../../img/santa_cruz/IMG_7160.jpeg';
import Sunset from '../../img/santa_cruz/IMG_6136.jpeg';
function SantaCruz() {
    return (
        <main id="main" className="santacruz__main">
            <h1 className="h1__title">Introduction</h1>
            <p>
                Santa Cruz (Spanish for 'Holy Cross') is the county seat and
                largest city of Santa Cruz County, California. As of the 2020
                census, the city population was 62,956.
            </p>

            <p>
                Situated on the northern edge of Monterey Bay, about 32 mi (51
                km) south of San Jose and 75 mi (120 km) south of San Francisco,
                the city is part of the 12-county San Jose-San Francisco-Oakland
                Combined Statistical Area.
            </p>

            <p>
                Santa Cruz is known for its moderate climate, natural
                environment, coastline, redwood forests, alternative community
                lifestyles, and socially liberal leanings. It is also home to
                the University of California, Santa Cruz, a premier research
                institution and educational hub, as well as the Santa Cruz Beach
                Boardwalk, an oceanfront amusement park operating continuously
                since 1907.
            </p>

            <p>
                The present-day site of Santa Cruz was the location of Spanish
                settlement beginning in 1791, including Mission Santa Cruz and
                the pueblo of Branciforte. The City of Santa Cruz was
                incorporated in 1866 and chartered in April 1876. Important
                early industries included lumber, gunpowder, lime and
                agriculture. Late in the 19th century, Santa Cruz established
                itself as a beach resort community.
            </p>
            <img src={Lighthouse} alt="Lighthouse" srcSet="" />
            <img src={BeachView} alt="Beach View" srcSet="" />
            <img src={OceanView} alt="Ocean View" srcSet="" />
            <img src={Sunset} alt="Sunset" srcSet="" />
        </main>
    );
}
export default SantaCruz;
