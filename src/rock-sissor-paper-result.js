import styles from "./rock-sissor-paper-result.module.css"
function Rock_sissor_paper_result({myScore,comScore}){
return(
    <div className={styles.resultContainer}>
        {myScore}:{comScore}
    </div>
)
}

export default Rock_sissor_paper_result;