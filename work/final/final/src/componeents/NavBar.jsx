import ShowObject from "./utils/ShowObject";

function NavBar({data, setShowingPage}){
    console.log(data)

    return (
        <div>
            <ShowObject entry={data} setShowingPage={setShowingPage}/>
        </div>
    )
}
export default NavBar;