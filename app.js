console.log("welcome");
let musicTurn = new Audio("ting_1.mp3");
let turn = "X";
let gameOver = false;

const changeTurn = () =>{
    return turn === "X" ? "0" : "X";
}

const checkWin = () => {
    let boxtext =document.getElementsByClassName("boxText");
    let tempArr =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ];
    tempArr.forEach(element =>{
        if((boxtext[element[0]].innerText === boxtext[element[1]].innerText) && (boxtext[element[2]].innerText === boxtext[element[1]].innerText) && (boxtext[element[0]].innerText !== "") ){
            document.querySelector(".info").innerText ="Congratulations ! " + boxtext[element[0]].innerText + " Won";
            gameOver = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "300px";
            // Array.from(boxtext).forEach(element => {
            //     element.innerText = "";
            // });
        }
   });
}

let boxes  = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxText");
    element.addEventListener("click", () => {
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn();
            musicTurn.play();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            // document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })
})

let reset=document.querySelector("#reset");

reset.addEventListener("click", () =>{
    let boxtext = document.querySelectorAll(".boxText");
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameOver=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
})