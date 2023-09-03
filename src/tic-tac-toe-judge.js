
function Tic_Tac_Toe_Judge(imageState,setWinner){
    if((imageState.one=="./img/tic-tac-toe/X_mark.png"&&imageState.two=="./img/tic-tac-toe/X_mark.png"&&imageState.three=="./img/tic-tac-toe/X_mark.png")||(imageState.four=="./img/tic-tac-toe/X_mark.png"&&imageState.five=="./img/tic-tac-toe/X_mark.png"&&imageState.six=="./img/tic-tac-toe/X_mark.png")||(imageState.seven=="./img/tic-tac-toe/X_mark.png"&&imageState.eight=="./img/tic-tac-toe/X_mark.png"&&imageState.nine=="./img/tic-tac-toe/X_mark.png")
    ||(imageState.one=="./img/tic-tac-toe/X_mark.png"&&imageState.four=="./img/tic-tac-toe/X_mark.png"&&imageState.seven=="./img/tic-tac-toe/X_mark.png")||(imageState.two=="./img/tic-tac-toe/X_mark.png"&&imageState.five=="./img/tic-tac-toe/X_mark.png"&&imageState.eight=="./img/tic-tac-toe/X_mark.png")||(imageState.three=="./img/tic-tac-toe/X_mark.png"&&imageState.six=="./img/tic-tac-toe/X_mark.png"&&imageState.nine=="./img/tic-tac-toe/X_mark.png")
    ||(imageState.one=="./img/tic-tac-toe/X_mark.png"&&imageState.five=="./img/tic-tac-toe/X_mark.png"&&imageState.nine=="./img/tic-tac-toe/X_mark.png")||(imageState.three=="./img/tic-tac-toe/X_mark.png"&&imageState.five=="./img/tic-tac-toe/X_mark.png"&&imageState.seven)
    ){
        setWinner("X");
        
    }
    else if((imageState.one=="./img/tic-tac-toe/Y_mark.png"&&imageState.two=="./img/tic-tac-toe/Y_mark.png"&&imageState.three=="./img/tic-tac-toe/Y_mark.png")||(imageState.four=="./img/tic-tac-toe/Y_mark.png"&&imageState.five=="./img/tic-tac-toe/Y_mark.png"&&imageState.six=="./img/tic-tac-toe/Y_mark.png")||(imageState.seven=="./img/tic-tac-toe/X_mark.png"&&imageState.eight=="./img/tic-tac-toe/Y_mark.png"&&imageState.nine=="./img/tic-tac-toe/Y_mark.png")
    ||(imageState.one=="./img/tic-tac-toe/Y_mark.png"&&imageState.four=="./img/tic-tac-toe/Y_mark.png"&&imageState.seven=="./img/tic-tac-toe/Y_mark.png")||(imageState.two=="./img/tic-tac-toe/Y_mark.png"&&imageState.five=="./img/tic-tac-toe/Y_mark.png"&&imageState.eight=="./img/tic-tac-toe/Y_mark.png")||(imageState.three=="./img/tic-tac-toe/X_mark.png"&&imageState.six=="./img/tic-tac-toe/Y_mark.png"&&imageState.nine=="./img/tic-tac-toe/Y_mark.png")
    ||(imageState.one=="./img/tic-tac-toe/Y_mark.png"&&imageState.five=="./img/tic-tac-toe/Y_mark.png"&&imageState.nine=="./img/tic-tac-toe/Y_mark.png")||(imageState.three=="./img/tic-tac-toe/Y_mark.png"&&imageState.five=="./img/tic-tac-toe/Y_mark.png"&&imageState.seven)
    ){
        setWinner("Y");
        
    }
}

export default Tic_Tac_Toe_Judge;