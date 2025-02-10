let btns=document.querySelectorAll(".btn");
let reset=document.querySelector("#reset");
let msg=document.querySelector("#msg");
let container=document.querySelector(".promt");
let newgame=document.querySelector("#new-button");


let turn0=true;


const wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
btns.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            btn.innerText="O";
            turn0=false;
        }
        else{
            btn.innerText="X";
            turn0=true;
        }
        btn.disabled=true;  

        check();
    })
});
const winner=(wins)=>{
    msg.innerText=`The winner is ${wins}`;
    container.classList.remove("hide");
    disablebox();

}
const disablebox=()=>{
    for(btn of btns){
        btn.disabled=true;
    }
}
const check=()=>{
    for(let win of wins){
        let pos1=btns[win[0]].innerText;
        let pos2=btns[win[1]].innerText;
        let pos3=btns[win[2]].innerText;
        

        if(pos1!=""&&pos2!=""&&pos3!="" ){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner");
                winner(pos1);
            }
        }
    }
}
reset.addEventListener("click",()=>{
    console.log("resset was clicked");
    location.reload();
});
newgame.addEventListener("click",()=>{
    console.log("resset was clicked");
    location.reload();
})
