export {inputArea, resultArea};
import {input, clear, clearAll, result} from './functionScript.js';

let inputArea = document.getElementById('inputArea');
let resultArea = document.getElementById('resultArea');
let button = document.getElementById('button');

button.onclick = result;
window.onkeydown = function (event) {
    inputArea.setCustomValidity('');
    event.preventDefault();
    switch (event.key) {
        case String(event.key.match(/[0-9+\-]/)):
            input(event.key);
            break;
        case 'Backspace':
            clear();
            break;
        case 'Delete':
            break;
        case 'Clear':
            clearAll();
            break;
        case 'Enter':
        case 'Return':
            result();
            break;
    }
}