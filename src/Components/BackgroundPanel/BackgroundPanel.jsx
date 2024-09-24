import styles from './BackgroundPanel.module.css'

function BackgroundPanel({time})
{


    return(<>
        <div className={styles.panel}>
            <div className={styles.timer}>
                <p>{time}</p>

            </div>


        </div>
    </>);
}

export default BackgroundPanel