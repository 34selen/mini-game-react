function judge(mySelect,comSelect,setMyScore,setComScore){
    //컴퓨터 선택이 하나 밀리는 문제가 있음
    console.log("내 선택"+mySelect);
    console.log("컴퓨터 선택"+comSelect);
    //이기면 1 비기명 0 지면 -1
    if(mySelect==="rock"){
        if(comSelect==="rock"){
        }
        else if(comSelect==="sissor"){
            setMyScore((prev)=>prev+1);
            console.log("")
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