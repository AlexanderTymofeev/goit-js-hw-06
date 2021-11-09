let counterValue = 0;
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
let value = document.querySelector('#value');

const onDecrementClick = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

const onIncrementClick = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

decrement.addEventListener('click', onDecrementClick);
increment.addEventListener('click', onIncrementClick);