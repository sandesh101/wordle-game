let keyContainer=document.getElementById('key-container');
let inputGuess = document.getElementsByClassName('input-guess');



const keyboardLayout = [
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "Z", "X", "C", "V", "B", "N", "M"
];

let guessWord = "Apple";

let button;
let validGuess = 5;
let rowFilled = 0;
let isInputFilled = 0;

keyboardLayout.forEach((character)=>{
    button=document.createElement('button');
    button.textContent=character;
    button.classList="guess-button";
    keyContainer.appendChild(button);

    button.addEventListener("click", function(e){
        for(let i = 0; i < validGuess; i++){
            if(inputGuess[i].value ===  ''){
            inputGuess[i].value = e.target.textContent;
            isInputFilled += 1;
            inputGuess[i+1].focus();
            break;    
        }
    }

    if(isInputFilled === validGuess){
        rowFilled += 1;
    }
    if(rowFilled === 1){
        for(let i = 0; i< rowFilled; i++){
            if(inputGuess[i].value === 'A'){
                console.log("Matched");
            }else{
                console.log("error");
            }
        }
    }
    
        
    });

})

