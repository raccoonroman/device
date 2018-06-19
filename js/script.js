var slideIndex = 1;
showSlides(slideIndex);
showServicesSlides(slideIndex);

function slide(n) {
	showSlides(slideIndex = n);
}
function serviceSlide(n) {
	showServicesSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slider-item");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "flex";
	dots[slideIndex-1].className += " active";
}

function showServicesSlides(n) {
	var i;
	var servicesSlides = document.getElementsByClassName("services-slider-item");
	var servicesBtns = document.getElementsByClassName("services-btn");
	for (i = 0; i < servicesSlides.length; i++) {
		servicesSlides[i].style.display = "none"; 
	}
	for (i = 0; i < servicesBtns.length; i++) {
		servicesBtns[i].className = servicesBtns[i].className.replace(" active", "");
	}
	servicesSlides[slideIndex-1].style.display = "block"; 
	servicesBtns[slideIndex-1].className += " active";
}


// var catalogInnerInit = document.querySelector('.catalog-link');
// var substrate = document.querySelector('.substrate');
// var indexSubnavList = document.querySelector('.index-subnav-list');
// var catalogInnerLink = document.getElementsByClassName('subnav-link');

// catalogInnerInit.addEventListener('focus', function () {
// 	substrate.style.display = "block";
// 	indexSubnavList.style.display = "flex";
// });

// for (var i = 0; i < catalogInnerLink.length; i++) {
// 		catalogInnerLink[i].addEventListener('focus', function (evt) {
// 			evt.preventDefault();
// 			substrate.style.display = "block";
// 			indexSubnavList.style.display = "flex";
// 	});
// }

// for (var i = 0; i < catalogInnerLink.length; i++) {
// 		catalogInnerLink[i].addEventListener('blur', function (evt) {
// 			evt.preventDefault();
// 			substrate.style.display = "none";
// 			indexSubnavList.style.display = "none";
// 	});
// }