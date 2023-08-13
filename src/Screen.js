import "./Screen.css"
import Select from "./Select";
import {useState,useEffect} from 'react';
function Screen(){
    const [mySelect,setMySelect]=useState("");
    const [comSelect,setComselect]=useState("");
    const [score,setScore]=useState("");
    const [submitCheck,setSubmitCheck]=useState(false);
    const [submitRemain,setSubmitremainCheck]=useState(false);
    const [checkWin,setCheckWin]=useState(null);//이기면 1 비기면 0 지면 -1
    useEffect(()=>{
        if(submitCheck===true){
            setSubmitCheck(false);
            if(checkWin===1){
                console.log("이김");
            }
            else if(checkWin===0){
                console.log("비김");
            }
            else if(checkWin===-1){
                console.log("짐")
            }
        }
    },[submitCheck]);

    const getImageFileName=(select)=>{
        return "/img/"+select+".jpeg"
    }

    return(
        <div id="screen">
            <div id="top-bar"></div>
            <div id="middle-bar">
                <div id="mySelect">
                    <h1>You</h1>
                    {submitRemain && <img src={getImageFileName(mySelect)} alt="Your Image" />}
                </div>
                <div id="divided-line"></div>
                <div id="comSelect">
                    <h1>Computer</h1>
                    {submitRemain && <img src={getImageFileName(comSelect)} alt="Your Image" />}
                </div>
            </div>
            <div id="botton-bar">
                <Select setMy={setMySelect} setCheckWin={setCheckWin} mySelect={mySelect} setCom={setComselect} setSubmitCheck={setSubmitCheck} setSubmitremainCheck={setSubmitremainCheck}/>
            </div>
        </div>
    )
}

export default Screen;