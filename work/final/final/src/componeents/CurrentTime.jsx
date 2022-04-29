import { useState } from "react";

function CurrentTime () {
    const [currentTime, setCurrentTime] = useState(new Date())
    function updateTime() {
        setCurrentTime(new Date())
    }

    useState(() => {
        setInterval(updateTime, 1000)
    }, [])

    return (
        <div className="Time">
            {currentTime.toDateString()}, 
            {currentTime.toLocaleTimeString()}
        </div>
    )
}
export default CurrentTime;