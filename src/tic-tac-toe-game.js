import styles from "./tic-tac-toe-game.module.css"
function Tic_Tac_Toe_game(){
    return(
        <div className={styles.screen}>
            <div className={styles.areaContainer}>
                <div className={styles.line}>
                    <div className={styles.one} className={styles.area}></div>
                    <div className={styles.two} className={styles.area}></div>
                    <div className={styles.three} className={styles.area}></div>
                </div>
                <div className={styles.line}>
                    <div className={styles.four} className={styles.area}></div>
                    <div className={styles.five} className={styles.area}></div>
                    <div className={styles.six} className={styles.area}></div>
                </div>
                <div className={styles.line}>
                    <div className={styles.seven} className={styles.area}></div>
                    <div className={styles.eight} className={styles.area}></div>
                    <div className={styles.nine} className={styles.area}></div>
                </div>
            </div>
        </div>
    )
}
export default Tic_Tac_Toe_game;