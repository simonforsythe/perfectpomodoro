import styles from './BackgroundPanel.module.css'


function BackgroundPanel({timeRemaining, style})
{

    

    return(<>
        <div className={styles.panel} style={style}>
            <div className={styles.timer}>
                <p>{timeRemaining}</p>
                <p id={styles.timerMsg}>seconds of productivity</p>
            </div>


        </div>
    </>);
}

export default BackgroundPanel