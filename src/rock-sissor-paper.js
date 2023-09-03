import "./rock-sissor-paper.css"
import Select from "./Select";
import React from 'react';
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
function Rock_sissor_paper(){
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
        return "/img/rock-sissor-paper/"+select+".jpeg"
    }
    function resetButtonHandler(){
        setMyScore(0);
        setComScore(0);
        setSubmitremainCheck(false);

    }
    const navigate = useNavigate();

    const handleMenuButton = () => {
      navigate("/");
    };

    
    return(
        <div id="screen">
            <div id="top-bar">
                <h1 id="score">{myScore}:{comScore}</h1>
                <div id="reset">
                    <div>
                    </div>
                    <button id="reset-button" onClick={resetButtonHandler}>Reset</button>
                    <button id="menu-button" onClick={handleMenuButton}>menu</button>
                </div>
              
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
                <Select setMy={setMySelect} comSelect={comSelect}setMyScore={setMyScore} setComScore={setComScore} mySelect={mySelect} setCom={setComselect} setSubmitCheck={setSubmitCheck} setSubmitremainCheck={setSubmitremainCheck} submitCheck={submitCheck}/>
            </div>
        </div>
    )
}

export default Rock_sissor_paper;