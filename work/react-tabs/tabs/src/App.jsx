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
      name: "Yisheng Tang",
      NUID: "002193735",
      Amademic: "Northeastern University"
    }
    return (
        <div className="app">
            <h1>Take a Guess of my Favourite</h1>
            <Tabs entry={data}/>
            {/* <ShowObject entry={data}/> */}
        </div>
    );
}

export default App;
