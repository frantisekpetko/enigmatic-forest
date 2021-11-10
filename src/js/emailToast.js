const emailBtn = document.getElementById("emailBtn");

const name = document.getElementById("name");

const email = document.getElementById("email");

const text = document.getElementById("text");

emailBtn.addEventListener("click", () => {

  if(name.value !== ''   && email.value !== ''  && text.value !== ''  ) {
    return showToast('snackbar');
  }
  else {
    return showToast('invalid-snackbar');
  }

})

function showToast(id) {
    var x = document.getElementById(id);
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}