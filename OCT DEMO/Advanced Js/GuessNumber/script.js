let randomNum ;
let score = 20;
var guess = 1;

let guessNumber = document.querySelector(".number");
let chkBtn =document.getElementById("checkBtn")
let inputField = document.querySelector(".guess")
let messageResult = document.querySelector(".message")
let scoreData = document.querySelector(".score")
let audio = document.querySelector("#audio")

console.log(audio)
generateRndmNum()
function generateRndmNum(){
    randomNum = Math.floor(Math.random()*20)+1;
    console.log(randomNum)
    guessNumber.textContent = randomNum;
}

let checkGuessNumber = function(){

    let inputValue = inputField.value ;
    if(Number(inputValue)===randomNum){
        messageResult.textContent = "Yay!!! You guessed it right in "
     + guess + " guess"
        guess=1;
        document.body.style.backgroundColor= "green"        
        inputField.value= "";
        generateRndmNum();
        
    }
    else if(inputValue<randomNum){
        guess++;
        messageResult.textContent= "Oops sorry!! Try a bigger number "
        score--;
        scoreData.textContent=score;
        document.body.style.backgroundColor= "red"
    }
    else if(inputValue>randomNum){
        guess++
        messageResult.textContent= "Oops sorry!! Try a smaller number"
        score--;
        scoreData.textContent=score;
        document.body.style.backgroundColor= "red"
    }
}
chkBtn.addEventListener("click", checkGuessNumber);


