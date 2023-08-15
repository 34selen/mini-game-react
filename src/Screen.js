import "./Screen.css"
import Select from "./Select";
import {useState,useEffect} from 'react';
function Screen(){
    const [mySelect,setMySelect]=useState("");
    const [comSelect,setComselect]=useState("");
    const [score,setScore]=useState("");
    const [submitCheck,setSubmitCheck]=useState(false);
    const [submitRemain,setSubmitremainCheck]=useState(false);
    const [myScore,setMyScore]=useState(0);
    const [comScore,setComScore]=useState(0);
    useEffect(()=>{
        if(submitCheck===true){
            setSubmitCheck(false);
        }
    },[submitCheck]);

    const getImageFileName=(select)=>{
        return "/img/"+select+".jpeg"
    }

    return(
        <div id="screen">
            <div id="top-bar">
                <h1>{myScore}:{comScore}</h1>
            </div>
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
                <Select setMy={setMySelect} comSelect={comSelect}setMyScore={setMyScore} setComScore={setComScore} mySelect={mySelect} setCom={setComselect} setSubmitCheck={setSubmitCheck} setSubmitremainCheck={setSubmitremainCheck}/>
            </div>
        </div>
    )
}

export default Screen;