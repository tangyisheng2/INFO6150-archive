import OceanView1 from '../../img/half_moon_bay/IMG_9117.jpeg';
import OceanView2 from '../../img/half_moon_bay/IMG_9120.jpeg';
import Beach from '../../img/half_moon_bay/IMG_9127.jpeg';
function HalfMoonBay() {
    return (
        <main class="halfmoonbay__main">
            <h1 class="h1__title">Introduction</h1>
            <p>
                Half Moon Bay is a coastal city in San Mateo County, California,
                United States, approximately 25 miles (40 km) south of San
                Francisco. Its population was 11,795 as of the 2020 census.
                Immediately at the north of Half Moon Bay is Pillar Point Harbor
                and the unincorporated community of Princeton-by-the-Sea. Half
                Moon Bay is known for Mavericks, a big-wave surf location. It is
                called Half Moon Bay because of its crescent shape.
            </p>
            <p>
                Originally an agricultural outpost to Mission San Francisco de
                Asís, the town was found in the 1840s first as San Benito, and
                then as is its Anglo fishing community grew, it was renamed
                Spanishtown. In 1874, it was again renamed to Half Moon Bay.
                After rail and road connections in the early 1900s the town
                grew. The Foggy weather of the coast made the town a popular
                destination for booze running during prohibition.
            </p>
            <p>
                The city's infrastructure is heavily integrated with the coast,
                including the Pillar Point Harbor, major roads and fire
                department. The economy of Half Moon Bay is dominated by a
                handful of businesses, the biggest of which the Ritz-Carlton
                Half Moon Bay employs 500 people and is a major source of
                property and tourism income for the city.[8] Because of this
                geography, a 2022 study found that the city had over 123
                buildings vulnerable to sea level rise.[8]
            </p>

            <img src={OceanView1} alt="Ocean View" srcset="" />
            <img src={OceanView2} alt="Ocean View" srcset="" />
            <img src={Beach} alt="Beach" srcset="" />
        </main>
    );
}
export default HalfMoonBay;
