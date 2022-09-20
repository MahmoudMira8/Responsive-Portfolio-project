const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobilMenu = document.querySelector(".header .nav-bar .nav-list ul");
const anchorForList = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
const header = document.querySelector('.header.container');

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    mobilMenu.classList.toggle("active");
});

document.addEventListener('scroll', () => {
	var scrollPosition = window.scrollY;
	if (scrollPosition > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

anchorForList.forEach(item => {
	item.addEventListener("click", ()=> {
		hamburger.classList.remove("active");
		mobilMenu.classList.remove("active");
	});
});




