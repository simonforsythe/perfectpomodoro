import styles from './BottomBar.module.css'
import React, {useState} from 'react'


function BottomBar({toggleTimer, resetTimer})
{

    const [mainBtnText, setMainBtnText] = useState("Start");

    function onClickResetBtn()
    {
        toggleTimer();
        toggleText();
    }

    function toggleText()
    {
        if(mainBtnText === "Start")
        {
            setMainBtnText("Pause");
        }
        else
        {
            setMainBtnText("Start");
        }
    }


    return (<>
    
        <div className={styles.bottomBar}>
           <button onClick={resetTimer} className={styles.stopButton + " " + styles.controlButton}>Reset</button>
        <button onClick={onClickResetBtn} className={styles.startButton + " " + styles.controlButton}>{mainBtnText}</button>
        </div>
    
    </>);
}


export default BottomBar