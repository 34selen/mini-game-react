import "./Screen.css"
import Select from "./Select";
function Screen(){

    return(
        <div id="screen">
            <div id="top-bar"></div>
            <div id="middle-bar">
                <div id="mySelect">
                    <h1>You</h1>
                </div>
                <div id="divided-line"></div>
                <div id="comSelect">
                    <h1>Computer</h1>
                </div>
            </div>
            <div id="botton-bar">
                <Select />
            </div>
        </div>
    )
}

export default Screen;