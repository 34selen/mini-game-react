import styles from "./tic-tac-toe-game.module.css"
import React, { useState,useEffect } from 'react';
import Tic_Tac_Toe_Judge from "./tic-tac-toe-judge";
import ResultScreen from "./tic-tac-toe-resultScreen";
function Tic_Tac_Toe_game(){
    const [imageState,setimageState]=useState({
        one:null,
        two:null,
        three:null,
        four:null,
        five:null,
        six:null,
        seven:null,
        eight:null,
        nine:null
    })
    const [winner,setWinner]=useState("");
    useEffect(()=> {
        Tic_Tac_Toe_Judge(imageState,setWinner)
    },[imageState]
    )
    
    const [turn,setTurn]=useState("X");
    function handleClick(event) {
        // event.target.className 은 클릭된 div의 모든 클래스 이름을 반환합니다.
        // split을 사용하여 첫 번째 클래스 이름만 가져옵니다.
        const firstClass = event.target.className.split(" ")[0];

        if(imageState[firstClass]==null){
            const newImageState = {
                ...imageState,
                [firstClass]: `./img/tic-tac-toe/${turn}_mark.png`,
            };
            setimageState(newImageState);
            if (turn=="O"){
                setTurn("X");
            }
            else{
                setTurn("O");
            }
        }
       

    }
    return(
        <div className={styles.screen}>
            <div className={styles.areaContainer}>
                <div className={styles.line}>
                    <div className={`one ${styles.area}`} onClick={handleClick}>
                        {imageState.one && <img className={styles.O_Ximg}src={imageState.one} alt="icon" />}
                    </div>
                    <div className={`two ${styles.area}`} onClick={handleClick}>
                        {imageState.two && <img className={styles.O_Ximg} src={imageState.two} alt="icon" />}
                    </div>
                    <div className={`three ${styles.area}`} onClick={handleClick}>
                        {imageState.three && <img className={styles.O_Ximg} src={imageState.three} alt="icon" />}
                    </div>
                </div>
                <div className={styles.line}>
                    <div className={`four ${styles.area}`} onClick={handleClick}>
                        {imageState.four && <img className={styles.O_Ximg}src={imageState.four} alt="icon" />}
                    </div>
                    <div className={`five ${styles.area}`} onClick={handleClick}>
                        {imageState.five && <img className={styles.O_Ximg}src={imageState.five} alt="icon" />}
                    </div>
                    <div className={`six ${styles.area}`} onClick={handleClick}>
                        {imageState.six && <img className={styles.O_Ximg}src={imageState.six} alt="icon" />}
                    </div>
                </div>
                <div className={styles.line}>
                    <div className={`seven ${styles.area}`} onClick={handleClick}>
                        {imageState.seven && <img className={styles.O_Ximg}src={imageState.seven} alt="icon" />}
                    </div>
                    <div className={`eight ${styles.area}`} onClick={handleClick}>
                        {imageState.eight && <img className={styles.O_Ximg}src={imageState.eight} alt="icon" />}
                    </div>
                    <div className={`nine ${styles.area}`} onClick={handleClick}>
                        {imageState.nine && <img className={styles.O_Ximg}src={imageState.nine} alt="icon" />}
                    </div>
                </div>
            </div>
            <ResultScreen className={styles.ResultScreen}winner={winner}/>
        </div>
    )
}
export default Tic_Tac_Toe_game;