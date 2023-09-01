import { Link } from 'react-router-dom';
import "./mainScreen.css"
function MainScreen(){
    return(
        <div id="screen">
            <div id="title">
                mini-game
            </div>
            <div id="gameList">
                <div className="gameName">
                    <Link to="/rock-sissor-paper" className='games'>rock-sissor-paper</Link>
                    
                </div>
                <div className="gameName">
                    <Link to="/tic-tac-toe" className='games'>tic-tac-toe</Link>
                </div>
            </div>

        </div>
    )
}
export default MainScreen;