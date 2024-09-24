import styles from './BottomBar.module.css'

function BottomBar({toggleTimer, resetTimer})

{
    return (<>
    
        <div className={styles.bottomBar}>
           <button onClick={resetTimer} className={styles.stopButton + " " + styles.controlButton}>Reset</button>
        <button onClick={toggleTimer} className={styles.startButton + " " + styles.controlButton}>Start</button>
        </div>
    
    </>);
}


export default BottomBar