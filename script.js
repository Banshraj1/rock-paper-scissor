let choice=document.querySelectorAll(".choiceimg");
let userscore=document.querySelector("#yourscore");
let Compscore=document.querySelector("#compscore");
let message=document.querySelector("#messageid");

const compchoice=()=>{
    let carr=["rock","paper","scissor"];
    let idx=Math.floor(Math.random()*3);
    return carr[idx];
}

const userchoice =()=>{}
choice.forEach(box => {
    box.addEventListener("click",()=>{
        const userchoice=box.getAttribute("id")
        // console.log(userchoice);
        playgame(userchoice);
    })
    
});
let whoWin=-2;
let cScore=0;
let uscore=0;

const playgame=(U)=>{
    let C=compchoice();
    // console.log("user= "+U);
    // console.log("comp= "+ C);
    //condn
    if(C===U){
        whoWin=-1;
        // console.log("draw");
    } else {
        if(C==="rock"){
            if(U==="paper"){
                whoWin=1;
            }else{
                whoWin=0;
            }
        }else if(C==="paper"){
            if(U==="scissor"){
                whoWin=1;
            }else{
               whoWin=0;
            }
        }else{ //scissor
            if(U==="rock"){
                whoWin=1; 
            }else{
                whoWin=0;
            }
        }
        
    }
    display(whoWin);  
}

const display=(userwin)=>{
    if(userwin===1){
        // console.log(userwin);
        // console.log(whoWin);
        uscore++;
        // console.log("Uwin");
        userscore.innerHTML=uscore;
        userwin===-2;
        msg("You Win!");
    }
    if(userwin===0){
        // console.log(userwin);
        // console.log(whoWin);
        cScore++;
        // console.log("Cwin");
        Compscore.innerHTML=cScore;
        userwin===-2;
        msg("You Loss!");
    }
    if(userwin===-1){
        //         console.log(userwin);
        // console.log("draw from display");
        userwin===-2;
        msg("Draw!");
    }
}

const msg=(sms)=>{
    message.innerHTML=sms;
    setTimeout(()=>{
    message.innerHTML=("Pick Your Move");
},500);
}