const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

range.oninput = function () {
    text.style.fontSize = range.value+'px';
}




