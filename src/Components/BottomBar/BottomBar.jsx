import styles from './BottomBar.module.css'


function BottomBar({toggleTimer, resetTimer, isTimerActive})
{


    return (<>
    
        <div className={styles.bottomBar}>
           <button id="stop" onClick={resetTimer} className={styles.stopButton + " " + styles.controlButton}>Reset</button>
        <button id="start" onClick={toggleTimer} className={styles.startButton + " " + styles.controlButton}>{isTimerActive ? "Pause" : "Start"}</button>
        </div>
    
    </>);
}


export default BottomBar