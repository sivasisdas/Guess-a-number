const btn = document.querySelector(".guessSubmit");

const userInput = document.querySelector(".guessField");
const results = document.getElementsByTagName('p');

btn.addEventListener("click",checkGuess);
let count=3;
let lastGuess =[];
let resetButton;
let randomNumber = Math.floor(Math.random()*100)+1;
console.log(`Random Number is: ${randomNumber}`);


userInput.focus();

function checkGuess(){
    let numInput= Number(userInput.value);  //or could have used parseint
    console.log(`Random Number is: ${randomNumber}`);  
  if(numInput !== 0){
        console.log(`count is: ${count}`);
        if(count>1){
            
            lastGuess.push(numInput);
            console.log("userinput is:"+numInput);
            
            results[2].textContent=`Last guesses: ${lastGuess}`;
            ;
            if(numInput===randomNumber){ //corect
                results[0].textContent="Correct";
                results[0].style.color="yellow";
                results[0].style.backgroundColor="Green";
                results[3].textContent="";
                
                setGameOver()
            }else{
                results[0].style.color="yellow";
                results[0].style.backgroundColor="red";
                results[0].textContent="Wrong";
                
                count--
                results[1].textContent=`Guesses Left : ${count}`;
                if(numInput>randomNumber){
                    results[3].textContent="Higher";
                    userInput.value="";
                }else if(numInput<randomNumber){
                    results[3].textContent="Lower";
                    userInput.value="";
                }
            } 
        }else{
            results[0].textContent="|| GAME OVER ||";
            results[0].style.backgroundColor="red";
            results[0].style.color="Yellow";
            results[1].textContent=`Guesses Left : 0`;
            setGameOver()
        }
    }else{
        results[0].textContent="Please enter a valid Number";
        results[0].style.backgroundColor="white";
        results[0].style.color="blue";
        // console.log("Nana");
    }
}

function setGameOver(){
    userInput.disabled=true;  //input-disabled
    btn.disabled=true;  //btn-disabled
    resetButton = document.createElement('button');
    resetButton.textContent="Reset";
    resetButton.className="reset";
    btn.replaceWith(resetButton);
    resetButton.addEventListener("click",resetGame);
}

function resetGame(){
    count = 3;
    userInput.disabled=false;  //input-abled
    btn.disabled=false;    //btn-abled
    userInput.value = "";
    userInput.focus();
    resetButton.replaceWith(btn);
    for(let result of results){
        result.textContent= "";
    }
    lastGuess=[];
    randomNumber = Math.floor(Math.random() * 100) + 1;
    
}


