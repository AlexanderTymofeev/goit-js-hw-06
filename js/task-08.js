const form = document.querySelector(".login-form");

form.addEventListener("submit", submitFunc);

function submitFunc(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Пожалуйста, заполните все поля");
  }

  const formItems = {
  email: email.value,
  password: password.value,
  };
  if (email.value && password.value) {
    console.log(formItems);
  }
  if (email.value && password.value) {
    event.currentTarget.reset();
  }
  form.reset();
}





