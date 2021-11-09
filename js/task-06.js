const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
    console.log(input.dataset);
    if (input.value.length === Number(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else if (input.value.length !== Number(input.dataset.length)) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    } else if (input.value.length === 0) {
        input.classList.remove('invalid');
        input.classList.remove('valid');
    }
});


