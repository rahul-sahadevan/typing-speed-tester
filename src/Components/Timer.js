import React,{useState,useEffect} from "react";

function Timersetting({setTimerrange,timerStart,setTimerstart}){
 console.log(timerStart)
    
    const [timer, setTimer] = useState(15); // Initialize the timer to 15 seconds
    
   

  const decrementTimer = () => {
    if(timerStart === true){
      setTimerstart(false)
    }
    else{
      setTimerstart(true)
    }
    
    
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timerStart && timer > 0) {
        setTimer(timer - 1);
      }
      else{
        setTimerstart(false)
      }
      
    }, 1000);

    return () => {
      clearInterval(timerInterval); 
    };
  }, [timer,timerStart]);


    return (
        <div className="timer-div">
            <div className="left-timer-div">
                <p>{timer}s</p>
                <button onClick={decrementTimer} className="start-btn">Start</button>
            </div>
            <div className="right-timer-div">
                <button className="15s" onClick={()=> {
                  setTimer(15)
                  setTimerrange(15)
                  setTimerstart(false);
                }}>15s</button>
                <button className="30s" onClick={()=>{
                  setTimer(30)
                  setTimerrange(30)
                  setTimerstart(false);
                  }}>30s</button>
                <button className="60s" onClick={()=>{
                  setTimer(60)
                  setTimerrange(60)
                  setTimerstart(false);
                  }}>60s</button>
            </div>
        </div>
    )
}
export default Timersetting;