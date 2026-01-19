window.onload = function() {

document.querySelector('#loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  let usernameEl = document.querySelector('#username');
  let passwordEl = document.querySelector('#password');

  let isValid = true;

  usernameEl.classList.remove('is-invalid');
  passwordEl.classList.remove('is-invalid');
  if(usernameEl.value===''){
    usernameEl.classList.add('is-invalid');
    isValid = false;
  }

  if(passwordEl.value.length ==='' || passwordEl.value.length <= 3){

    passwordEl.classList.add('is-invalid');
    isValid = false;
  }
    if(isValid){

alert('Form submitted successfully!');
usernameEl.value = '';
passwordEl.value = '';

    }
    else{
        alert('Please correct the errors in the form.');
    }


});


}