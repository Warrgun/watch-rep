import React, {useState, useEffect} from "react";

const ClockApp = ()=>{
    const [time, setTime] = useState(new Date);
    const [isMilitery, setIsMilitery] = useState(false);

    useEffect(() =>{
        const intervalId = setInterval(() => setTime(new Date) ,1000);

        return () => clearInterval(intervalId);
    },[])

    let hours = time.getHours();
    const minutes = time.getMinutes();
    const secounds = time.getSeconds();

    const addZero = (number) => number<10? `0${number}`:number;

    const handleTimeMilitery = `${addZero(hours)}:${addZero(minutes)}:${addZero(secounds)}`;

    const handleTime = () =>{
        const noon = () => hours >= 12?"PM":"AM"; 
        const digits = () => hours % 12 !==0? hours%12: 12; 

        return `${addZero(digits())}:${addZero(minutes)}:${addZero(secounds)} ${noon()}`
    }

    const handleIsMilitery = () => setIsMilitery(!isMilitery);

    const changeClock = () => isMilitery? handleTimeMilitery :handleTime();

    return(
        <div className="container">
            <div className="clock-container">
                <h1 className="clock" onClick={handleIsMilitery}>{changeClock()}</h1>
            </div>    
        </div>
    );
};

export default ClockApp