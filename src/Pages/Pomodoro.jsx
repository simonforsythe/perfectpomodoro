import BackgroundPanel from "../Components/BackgroundPanel/BackgroundPanel";
import BottomBar from "../Components/BottomBar/BottomBar";
import React, {useState, useEffect} from 'react';

function Pomodoro()
{
    const maxTime = 60*25;
    const [timer, setTimer] = useState(3);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const background = document.getElementById("panel");

    function resetTimerVal()
    {
        setTimer(maxTime);
        setIsTimerActive(false);
    }

        useEffect( () => 
        {
                if(!isTimerActive || timer <= 0) return;

                const intervalId = setInterval( () => 
                {
                        
                            setTimer((t) => t - 1);
                }, 1000);
        
                return () => clearInterval(intervalId);

        }, [isTimerActive, timer] );


        return(

            <>
                <BackgroundPanel time={timer} />
                <BottomBar resetTimer={() => resetTimerVal()} toggleTimer={() => setIsTimerActive(!isTimerActive)} />

            </>
        );
}

export default Pomodoro