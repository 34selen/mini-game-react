import "./Select.css"
import judge from "./Judge.js"
import React, { useState, useEffect } from 'react';

function Select(props){
    const [isListenerActive, setIsListenerActive] = useState(true);
    useEffect(()=>{
        if(props.submitCheck){
            judge(props.mySelect,props.comSelect,props.setMyScore,props.setComScore);
        }
    },[props.submitCheck])
    
    function handleClick(event){
        if(isListenerActive){
            props.setSubmitremainCheck(false);
            props.setMy(event);
            props.setSubmitremainCheck(true)
            props.setSubmitCheck(true);
            setIsListenerActive(false);
            const comSelect=Math.floor(Math.random()*3);
            if (comSelect===0){
                props.setCom("rock");
                console.log("컴퓨터는 주먹")
            }
            else if(comSelect===1){
                props.setCom("sissor");
            }
            else{
                props.setCom("paper")
            }
            setTimeout(() => {
                setIsListenerActive(true);
            }, 2000);
        }
        
    }
    
    return(
        <div id="select-form">
            <div className="button-form">
                <img 
                id="rock"
                src="/img/rock-sissor-paper/rock.jpeg" 
                alt="Rock" 
                onClick={() =>handleClick("rock")}
                />
            </div>
            <div className="button-form" >
                <img 
                id="sissor" 
                src="/img/rock-sissor-paper/sissor.jpeg"
                alt="Sissor"
                onClick={() =>handleClick("sissor")}
                />
            </div>
            <div className="button-form">
                <img  
                id="paper" 
                src="/img/rock-sissor-paper/paper.jpeg" 
                alt="paper" 
                onClick={() =>handleClick("paper")}
                />
            </div>
        </div>
    )
    
    
}
export default Select