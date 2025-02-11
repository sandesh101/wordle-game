let keyContainer = document.getElementById('key-container');
let inputField = document.getElementsByClassName('input-guess');
let row = document.getElementsByClassName('row');




const keyboardLayout = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
    'z', 'x', 'c', 'v', 'b', 'n', 'm'
];

let word = "Apple"
let wordArray = word.split('');
console.log(wordArray);
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
        for(let i = 0; i<= rowFilled; i++){
            
            if(inputGuess[i].value.toUpperCase() === wordArray[i]){
                console.log("Matched");
                console.log(wordArray[i])
            }else{
                console.log("error");
            }
        }
    }
    
        
    });

})

