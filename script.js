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

keyboardLayout.forEach((character) => {
    button = document.createElement('button');
    button.textContent = character;
    button.classList = "guess-button";
    keyContainer.appendChild(button);
    button.addEventListener("click", (e) => {
        // console.log(e.target.textContent);

        for (let i = 0; i < validGuess; i++) {
            if (inputField[i].value == '') {
                inputField[i].value = e.target.textContent;
                isInputFilled += 1;
                inputField[i + 1].focus();
                break;
            }
        }

        if (isInputFilled === validGuess) {
            rowFilled += 1;
        }
        if (rowFilled == 1) {
            let letterMatched = 0;
            for (let i = 0; i < rowFilled; i++) {
                for (let j = 0; j < row.length - 1; j++)
                    if (inputField[j].value.toUpperCase() === wordArray[j].toUpperCase()) {
                        letterMatched++;
                    }
            }

            if (letterMatched === 5) {
                isRowMatched = true;
                isRowMatched ? alert("Word matched") : alert("did not match");
            }
        }
    });
});