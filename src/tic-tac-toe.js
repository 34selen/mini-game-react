import styles from "./tic-tac-toe.module.css"
import { useNavigate } from 'react-router-dom';
import Tic_Tac_Toe_game from "./tic-tac-toe-game.js"
function Tic_Tac_Toe(){
    const navigate = useNavigate();
    const handleMenuButton = () => {
        navigate("/");
      };
    return(
        <div>
             <div id={styles.top_bar}>
                <h1 id={styles.title}>tic-tac-toe</h1>
                <div id="reset">
                    <div>
                    </div>
                    <button id="reset-button" >Reset</button>
                    <button id="menu-button" onClick={handleMenuButton}>menu</button> 
                </div>
            </div>
            <div>
                <Tic_Tac_Toe_game/>
            </div>
        </div>
    )
}
export default Tic_Tac_Toe