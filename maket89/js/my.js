$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$("#owl_1").owlCarousel({
	loop:true,
	nav:true,
	dots:true,
	items:4,
	margin:20,
	autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 2000,
    autoplayHoverPause: true,
});

const progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

function progressBar(e) {
	let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	
	let per = windowScroll / windowHeight * 100;

	progress.style.width = per + '%';


}

