let keyContainer = document.getElementById('key-container');
let inputField = document.getElementsByClassName('input-guess');


const keyboardLayout = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
    'z', 'x', 'c', 'v', 'b', 'n', 'm'
];

let button;

keyboardLayout.forEach((character) => {
    button = document.createElement('button');
    button.textContent = character;
    button.classList = "guess-button";
    keyContainer.appendChild(button);
});


