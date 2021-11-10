const emailBtn = document.getElementById("emailBtn");

const name = document.getElementById("name");

const email = document.getElementById("email");

const text = document.getElementById("text");

emailBtn.addEventListener("click", () => {

  if(name.innerText !== '' && email.innerText !== '' && text.innerText !== '') {
    return showToast('Please enter valid form data.');
  }

  return showToast('Email was sent...');

})

function showToast(message) {
    var x = document.getElementById("snackbar");
    x.innerText = message;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}