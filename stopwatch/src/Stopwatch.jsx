import React from 'react'
import './App.css';

export const Stopwatch = () => {

    const [timer, setTimer] = React.useState(0);
    const [min, setMin] = React.useState(0);
    const [hour, setHour] = React.useState(0);
    const setTimerID = React.useRef();
    // console.log(setTimerID.current)

    const start = () => {
        if(!setTimerID.current) {
            // console.log("start presed")
            const id = setInterval(() => {
                setTimerID.current = id;
                setTimer((prev) => prev + 1);
            }, 1000);
        }
    }
    // console.log(timer)
    if(timer > 59){
        setMin(min+1);
        if(min > 59){
            setHour(hour+1);
            setMin(0);
        }
        setTimer(0);
    }

    // console.log(timer, min, hour)

    const pause = () => {
        if(setTimerID.current) {
            // console.log("pause presed")
            clearInterval(setTimerID.current);
            setTimerID.current = false;
        }
    }

    const reset = () => {
        // if(setTimerID.current) {
            // console.log("reset presed")
            clearInterval(setTimerID.current);
            setTimer(0);
            setMin(0);
            setHour(0)
            setTimerID.current = undefined;
        // }
    }
  return (
    <div className="App">
        <h1>Stopwatch : {hour>0 ? `${hour}hrs` : null} {min>0 ? `${min}min` : null} {timer>0 ? `${timer}sec` : "0sec"}</h1>

        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}
