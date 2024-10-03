const menuBtn = document.getElementById("menuBtn");
const navDemo = document.getElementById("navDemo");
	
menuBtn.addEventListener("click", () => {
    showMobileMenu();
});

function showMobileMenu() {

	console.log(navDemo.className.indexOf("w3-show"));
	console.log('showmobilemenu')
    if (navDemo.className.indexOf("w3-show") == -1)
    {
        navDemo.className += " w3-show";
    } 
    else 
    { 
        navDemo.className = navDemo.className.replace(" w3-show", "");
    }
}

document.querySelectorAll('.w3-navbar a').forEach((anchor) => {
	if (!anchor.querySelector('.fa-bars')) {
		anchor.addEventListener('click', () => {
			document.getElementById("navDemo").className = document.getElementById("navDemo").className.replace(" w3-show", "");
		});
	}
});
