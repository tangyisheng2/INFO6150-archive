import './App.css';
// import ShowObject from './ShowObject';
import Tabs from './Tabs';

function App() {
    // let data = {
    //     basicInfo: {
    //         name: 'Yisheng Tang',
    //         NUID: '002193735',
    //     },
    //     myPets: {},
    //     myUniversity: 'Northeastern University',
    // };
    let data = {
        'Fav Food': 'Ramen Please!🍜',
        'Fav Drink': 'Boba Milktea!🥤',
        'Fav Snack': 'Chocolate 🍫',
        'Other': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, aperiam! Aperiam at quidem iste, facilis repellat consequuntur praesentium voluptatum quisquam explicabo, voluptate, unde laboriosam. Excepturi nisi soluta quas debitis dolorum porro? Accusantium dignissimos doloribus harum sit ipsam commodi pariatur amet sequi dolore sed. Repudiandae odio nobis cum quaerat rerum dolores.'
    };
    return (
        <div className="app">
            <h1>Take a Guess of my Favourite</h1>
            <Tabs entry={data} />
            {/* <ShowObject entry={data}/> */}
        </div>
    );
}

export default App;
