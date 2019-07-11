const emailBtn = document.getElementById("emailBtn");

emailBtn.addEventListener("click", () => {
  showToast();
})

function showToast() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}