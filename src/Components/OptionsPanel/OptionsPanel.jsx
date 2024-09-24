import styles from './OptionsPanel.module.css'


function OptionsPanel({increaseTimer, decreaseTimer, maxTime})
{


    return(<>

        <div className={styles.mainOptionsPanel}>
            <button id={styles.decreaseBtn} onClick={decreaseTimer}>Less</button>
            <p>{maxTime}</p>
            <button id={styles.increaseBtn} onClick={increaseTimer}>More</button>
        </div>
        

    
    </>);
}



export default OptionsPanel