
function changeColor() {
    const box = document.getElementById('box');
    box.style.backgroundColor = box.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
}

function changeTextColor() {
    const text = document.querySelector('.styled-text');
    text.style.color = text.style.color === 'black' ? 'red' : 'black';
}


function changeButtonStyle() {
    const button = document.querySelector('button');
    button.style.backgroundColor = button.style.backgroundColor === 'lightgray' ? 'lightyellow' : 'lightgray';
    button.style.color = button.style.color === 'black' ? 'blue' : 'black';
    button.style.borderRadius = button.style.borderRadius === '0px' ? '10px' : '0px';
}
