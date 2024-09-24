import BackgroundPanel from "../Components/BackgroundPanel/BackgroundPanel";
import BottomBar from "../Components/BottomBar/BottomBar";
import React, {useState, useEffect} from 'react';
import dingSound from "../assets/pomodoro_ding.mp3";
import startSound from "../assets/pomodoro_start.mp3";
import OptionsPanel from "../Components/OptionsPanel/OptionsPanel";

function Pomodoro()
{
    const [maxTime, setMaxTime] = useState(1500);
    const [timer, setTimer] = useState(maxTime);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [backgroundStyle, setBackgroundStyle] = useState({background: 'rgb(123, 156, 195)'});

    function setMaxTimeFromLocalStorage()
    {
        const storedTime = localStorage.getItem('maxTime');
        console.log("setting max time from storage");
        if(storedTime)
        {
            setMaxTime(Number(storedTime));
            console.log("max time should be set from storage");
            setTimer(storedTime);
        }
    }
    
    useEffect(() => {setMaxTimeFromLocalStorage()}, []);
  

    const alarm = new Audio(dingSound);
    const alarmStart = new Audio(startSound);
    alarmStart.volume = .25;

    function resetTimerVal()
    {
        setTimer(maxTime);
        setIsTimerActive(false);
    }

    function toggleTimer()
    {
        setIsTimerActive(!isTimerActive);

        if(!isTimerActive) alarmStart.play();
    }

    function increaseMaxTime()
    {
        let newTime = maxTime + 60;
        newTime = Math.min(newTime, 3600);
        setMaxTime((prevMax) => newTime);
        localStorage.setItem('maxTime', `${newTime}` )
        if(!isTimerActive)
        {
            setTimer(newTime);
        }
    }

    function decreaseMaxTime()
    {
        let newTime = maxTime - 60;
        newTime = Math.max(newTime, 60);
        setMaxTime((prevMax) => newTime);
        localStorage.setItem('maxTime', `${newTime}` )
        if(!isTimerActive)
        {
            setTimer(newTime);
        }
    }

    useEffect( () => 
    {
            setBackgroundStyle({background: 'rgb(123, 156, 195)'})
          
            if(timer == 0) alarm.play();
            if(!isTimerActive || timer <= 0) 
            {
                setBackgroundStyle({background: 'rgb(238,174,202)'})
                return;
            }

            const intervalId = setInterval( () => 
            {
                    
                        setTimer((t) => t - 1);
            }, 1000);
    
            return () => clearInterval(intervalId);

    }, [isTimerActive, timer] );


    return(

        <>
            <BackgroundPanel timeRemaining={timer} style={backgroundStyle} />
            <BottomBar  resetTimer={() => resetTimerVal()} toggleTimer={toggleTimer}  isTimerActive={isTimerActive} />
            <OptionsPanel maxTime={maxTime} increaseTimer={increaseMaxTime} decreaseTimer={decreaseMaxTime} />
        </>
    );
}

export default Pomodoro