let randnum=parseInt(Math.random()*100+1);

const userInput=document.querySelector("#guessField");
const submit=document.querySelector("#subt");
const loworhi=document.querySelector(".lowOrHi");
const guesslist=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const startnew=document.querySelector(".resultParas");

const p=document.createElement("p");
let n=0;
let x=true;
if(x){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        validateguess(parseInt(userInput.value));
    })
}
function validateguess(guess){
    n++;
    displayguess(guess);
    if(guess===randnum){
        displaymessage("right guess");
        endgame();
    }
    else if(n===10){
        displaymessage(`lost, random number was ${randnum}`);
        endgame();
    }
    else{
        checkguess(guess);
    }
}
function checkguess(guess){
    if(guess>randnum){
        displaymessage("guess is high");
    }
    else{
        displaymessage("guess is low");
    }
}
function displayguess(guess){
    guesslist.innerText+=`${guess}, `;
    remaining.innerText=`${10-n}`;
}
function displaymessage(message){
    loworhi.innerHTML=`<h2>${message}</h2>`;
}
function endgame(){
    userInput.value="";
    userInput.setAttribute("disabled","");
    p.classList.add("button");
    p.innerHTML=`<h2 id="newgame">Start new game</h2>`;
    startnew.append(p);
    x=false;
    newgame();
}
function newgame(){
    const newgamebutton=document.querySelector("#newgame");
    newgamebutton.addEventListener("click",function(e){
        randnum=parseInt(Math.random()*100+1);
        userInput.value="";
        n=0;
        guesslist.innerText="";
        remaining.innerText=10;
        userInput.removeAttribute("disabled");
        startnew.removeChild(p);
        x=true;
    });
}