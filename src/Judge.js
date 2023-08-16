function judge(mySelect,comSelect,setMyScore,setComScore){
    if(mySelect==="rock"){
        if(comSelect==="rock"){
        }
        else if(comSelect==="sissor"){
            setMyScore((prev)=>prev+1);
        }
        else if(comSelect==="paper"){
            setComScore((prev)=>prev+1);
        }
    }
    else if(mySelect==="sissor"){
        if(comSelect==="rock"){
            setComScore((prev)=>prev+1);
        }
        else if(comSelect==="sissor"){
           
        }
        else if(comSelect==="paper"){
            setMyScore((prev)=>prev+1);
        }
    }
    else if(mySelect==="paper"){
        if(comSelect==="rock"){
            setMyScore((prev)=>prev+1);
        }
        else if(comSelect==="sissor"){
            setComScore((prev)=>prev+1);
        }
        else if(comSelect==="paper"){
         
        }
    }

}

export default judge;