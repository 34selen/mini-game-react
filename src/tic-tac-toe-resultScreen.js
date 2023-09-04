import "./tic-tac-toe-resultScreen.css"
function ResultScreen({winner,setimageState,setWinner,setTurn}){
    function resetButtonHandler(){
        setimageState({
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
        setWinner("");
        setTurn("X");
        
    }
    return(
        <div>
            {winner?<div className="resultContainer">
                <div className="declareWinner">winner is {winner}!!</div>
                <button className="resetButton" onClick={resetButtonHandler}>reset</button>
                </div>:null}

        </div>
    )

}

export default  ResultScreen;