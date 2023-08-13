function judge(mySelect,comSelect,setCheckWin){
    //이기면 1 비기명 0 지면 -1
    if(mySelect==="rock"){
        if(comSelect==="rock"){
            setCheckWin(0);
        }
        else if(comSelect==="sissor"){
            setCheckWin(1);
        }
        else if(comSelect==="paper"){
            setCheckWin(-1);
        }
    }
    else if(mySelect==="sissor"){
        if(comSelect==="rock"){
            setCheckWin(-1);
        }
        else if(comSelect==="sissor"){
            setCheckWin(0);
        }
        else if(comSelect==="paper"){
            setCheckWin(1);
        }
    }
    else if(mySelect==="paper"){
        if(comSelect==="rock"){
            setCheckWin(1);
        }
        else if(comSelect==="sissor"){
            setCheckWin(-1);
        }
        else if(comSelect==="paper"){
            setCheckWin(0);
        }
    }

}

export default judge;