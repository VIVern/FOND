'use strict'

function goRight(){
	let slider = document.getElementsByClassName("slider");
	let slides = document.querySelectorAll("div.slider img");
	let navMenu = document.querySelectorAll("div.slider ul li");

	for(var i = 0; i<slides.length; i++) {

		if(!slides[i].classList.contains("hide")) {
			if(i == slides.length-1){
				slides[i].classList.add("hide");
				slides[0].classList.remove("hide");
				navMenu[i].classList.remove("active");
				navMenu[0].classList.add("active");
				document.querySelectorAll("div.slider p")[0].innerText = slides[0].alt;


			break;
			}
			slides[i].classList.add("hide");
			slides[i+1].classList.remove("hide");
			navMenu[i].classList.remove("active");
			navMenu[i+1].classList.add("active");
			document.querySelectorAll("div.slider p")[0].innerText = slides[i+1].alt;
			break;
		}

	}
}

function goLeft(){
	let slider = document.getElementsByClassName("slider");
	let slides = document.querySelectorAll("div.slider img");
	let navMenu = document.querySelectorAll("div.slider ul li");

	for(var i = slides.length-1; i>=0; i--) {

		if(!slides[i].classList.contains("hide")) {
			if(i == 0){
				slides[i].classList.add("hide");
				slides[slides.length-1].classList.remove("hide");
				navMenu[i].classList.remove("active");
				navMenu[slides.length-1].classList.add("active");
				document.querySelectorAll("div.slider p")[0].innerText = slides[slides.length-1].alt;
			break;
			}
			slides[i].classList.add("hide");
			slides[i-1].classList.remove("hide");
			navMenu[i].classList.remove("active");
			navMenu[i-1].classList.add("active");
			document.querySelectorAll("div.slider p")[0].innerText = slides[i-1].alt;
			break;
		}

	}
}

function navMenuClick(){

	for(let i =1 ; i<=4; i++) {
		if(this.classList.contains("b"+i)){
			var clas = i;
		}
	}

	let navMenuButtons = document.querySelectorAll("ul#navMenu li");

	let slides = document.querySelectorAll("div.slider img");
	for(var i = 0; i < slides.length; i++) {
		if(slides[i].classList.contains("s"+clas)) {
			document.querySelectorAll("div.slider p")[0].innerText = slides[i].alt;
			slides[i].classList.remove("hide");
			for(let j=0; j<slides.length; j++){
				if(slides[j] != slides[i]) {
					slides[j].classList.add("hide");
				}
			}
			for(var i=0; i<navMenuButtons.length; i++){
				navMenuButtons[i].classList.remove("active");
			}
			this.classList.add("active");

		}
	}

}



b1.onclick=navMenuClick;
b2.onclick=navMenuClick;
b3.onclick=navMenuClick;
b4.onclick=navMenuClick;
bLeft.onclick=goLeft;
bRight.onclick=goRight;


setInterval(function(){
	goRight();
},3000);
