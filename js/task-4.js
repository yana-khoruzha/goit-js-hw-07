const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  const obj = {};

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    obj.email = email;
    obj.password = password;
    console.log(obj);
    form.reset();
  }
});

