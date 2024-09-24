import styles from './BackgroundPanel.module.css'

function BackgroundPanel({time, style})
{


    return(<>
        <div className={styles.panel} style={style}>
            <div className={styles.timer}>
                <p>{time}</p>

            </div>


        </div>
    </>);
}

export default BackgroundPanel