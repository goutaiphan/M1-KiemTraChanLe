export {input, clear, clearAll, result};
import {inputArea, resultArea} from './baseScript.js';

function input(key) {
    inputArea.value += key;
    resultArea.innerHTML = '';
}

function clear() {
    inputArea.value = inputArea.value.slice(0, -1);
    resultArea.innerHTML = '';
}

function clearAll() {
    inputArea.value = '';
    resultArea.innerHTML = '';
}

function result() {
    let formatValue = format(inputArea.value);
    inputArea.value = formatValue;

    try {
        let result = eval(formatValue);
        if (typeof (result) === 'number') {
            inputArea.value = result;
            if (result === 0) {
                resultArea.innerHTML = 'Đây là số 0.'
            } else if (result !== 0) {
                let posine = result > 0 ? 'dương' : 'âm';
                let evenodd = result % 2 === 0 ? ' chẵn.' : ' lẻ.';
                resultArea.innerHTML = 'Đây là số ' + posine + evenodd;
            }
        } else {
            inputArea.setCustomValidity('Biểu thức không hợp lệ.');
            inputArea.reportValidity();
        }
    } catch {
        inputArea.setCustomValidity('Biểu thức không hợp lệ.');
        inputArea.reportValidity();
    }
}

function format(inputValue) {
    let reMinus = inputValue.match(/(-)\1+/g);
    if (reMinus !== null) {
        for (let i = 0; i < reMinus.length; i++) {
            inputValue = reMinus[i].length % 2 === 0
                ? inputValue.replace(reMinus[i], '+')
                : inputValue.replace(reMinus[i], '-');
        }
    }
    return inputValue.replace(/(\+)\1+/g, '+');
}