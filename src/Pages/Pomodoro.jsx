import BackgroundPanel from "../Components/BackgroundPanel/BackgroundPanel";
import BottomBar from "../Components/BottomBar/BottomBar";
import React, {useState, useEffect} from 'react';

function Pomodoro()
{
    const maxTime = 60*25;
    const [timer, setTimer] = useState(maxTime);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [backgroundStyle, setBackgroundStyle] = useState({background: 'rgb(123, 156, 195);'});

    const background = document.getElementById("panel");

    function resetTimerVal()
    {
        setTimer(maxTime);
        setIsTimerActive(false);
    }

    useEffect( () => 
    {
            setBackgroundStyle({background: 'rgb(123, 156, 195)'})


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
            <BackgroundPanel time={timer} style={backgroundStyle} />
            <BottomBar  resetTimer={() => resetTimerVal()} toggleTimer={() => setIsTimerActive(!isTimerActive)} />

        </>
    );
}

export default Pomodoro