import { useState } from "react";

function Tabs(entry){

    let data = entry.entry
    let [activeTabTitle, setActiveTabTitle] = useState("")
    console.log(activeTabTitle)
    // console.log(data)
    return (
        <div className="tab">
            <ul className="tab__title__list">
                {Object.keys(data).map(title => {
                    return (
                        <li>
                        <button onClick={() => {setActiveTabTitle(title)}} className={title === activeTabTitle ? "tab__title active" : "tab__title"}>{title.toUpperCase()}</button>
                        </li>
                    )
                })}
            </ul>
                <div className="tab__content">
                <p>{
                    data[activeTabTitle]
                }</p>
                </div>
        </div>
    )
}
export default Tabs;