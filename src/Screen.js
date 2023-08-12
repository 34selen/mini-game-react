import "./Screen.css"
import Select from "./Select";
import {useState,useEffect} from 'react';
function Screen(){
    const [mySelect,setMySelect]=useState("");
    const [comSelect,setComselect]=useState("");

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
                <Select setMy={setMySelect} setCom={setComselect}/>
            </div>
        </div>
    )
}

export default Screen;