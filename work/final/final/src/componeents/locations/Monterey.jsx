import SeaView1 from '../../img/monterey/IMG_7176.jpeg';
import SeaView2 from '../../img/monterey/IMG_7359.jpeg';
import PeppleBeachGolf from '../../img/monterey/IMG_7404.jpeg';
import SunSet from '../../img/monterey/IMG_7426.jpeg';

function Monterey() {
    return (
        <main id='main' class="monterey__main">
            <h1 class="h1__title">Introduction</h1>
            <p>
                Monterey (Spanish: Monterrey; Ohlone: Aacistak[11]) is a city
                located in Monterey County on the southern edge of Monterey Bay
                on the U.S. state of California's Central Coast. Founded on June
                3, 1770, it functioned as the capital of Alta California under
                both Spain (1804 to 1821) and Mexico (1822 to 1846). During this
                period, Monterey hosted California's first theater, public
                building, public library, publicly-funded school,
                printing-press, and newspaper. It was originally the only port
                of entry for all taxable goods in California. In 1846, during
                the Mexican–American War of 1846–1848, the United States Flag
                was raised over the Customs House. After Mexico ceded California
                to the U.S. at the end of the war, Monterey hosted California's
                first constitutional convention in 1849.
            </p>

            <p>
                The city occupies a land area of 8.466 sq mi (21.93 km
                <sup>2</sup>) and the city hall is at 26 feet (8m) above sea
                level.[8] The 2020 census recorded a population of 30,218.
            </p>

            <p>
                Monterey and the surrounding area have attracted artists since
                the late 19th-century, and many celebrated painters and writers
                have lived in the area. Until the 1950s there was an abundant
                fishery. Monterey's present-day attractions include the Monterey
                Bay Aquarium, Cannery Row, Fisherman's Wharf, California Roots
                Music and Arts Festival, and the annual Monterey Jazz Festival.
            </p>

            <img src={SeaView1} alt="Sea View" srcset="" />
            <img src={SeaView2} alt="Sea View" srcset="" />
            <img src={PeppleBeachGolf} alt="Pepple Beach Golf" srcset="" />
            <img src={SunSet} alt="Sun Set" srcset="" />
        </main>
    );
}
export default Monterey;
