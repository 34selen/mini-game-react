import "./Select.css"
import React, { useState, useEffect } from 'react';

function Select(props){
    const [isListenerActive, setIsListenerActive] = useState(true);
    
    function handleClick(event){
        if(isListenerActive){
            props.setSubmitremainCheck(false);
            props.setMy(event);
            props.setSubmitremainCheck(true)
            props.setSubmitCheck(true);
            const comSelect=Math.floor(Math.random()*3)
            if (comSelect===0){
                props.setCom("rock");
            }
            else if(comSelect===0){
                props.setCom("sissor");
            }
            else{
                props.setCom("paper")
            }
            setIsListenerActive(false);
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
                src="/img/rock.jpeg" 
                alt="Rock" 
                onClick={() =>handleClick("rock")}
                />
            </div>
            <div className="button-form" >
                <img 
                id="sissor" 
                src="/img/sissor.jpeg"
                alt="Sissor"
                onClick={() =>handleClick("sissor")}
                />
            </div>
            <div className="button-form">
                <img  
                id="paper" 
                src="/img/paper.jpeg" 
                alt="paper" 
                onClick={() =>handleClick("paper")}
                />
            </div>
        </div>
    )
    
    
}
export default Select