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

const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    console.log(`name: ${name}`);
    console.log(`value: ${value}`);
  });
  form.reset();
}





