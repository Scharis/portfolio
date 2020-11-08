
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const scrollUp = document.querySelector('.scroll-up');
const items = Array.from(document.querySelectorAll('.portfolio__item'));
const carouselSlide = Array.from(document.querySelectorAll('.carousel-slider'));
// const carouselImages = document.querySelectorAll('.carousel-slider img');
// const prevBtn = document.querySelector('#prev-btn');
// const nextBtn = document.querySelector('#next-btn');

// console.log(scrollUp);
// NAVIGATION	
navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
})

//Scroll UP
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
}

scrollUp.addEventListener('click', () => {
	// console.log('scrollTop works');
	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
});

let size;
function slide(){
	carouselSlide.forEach( c => {

		// console.log(c.childElementCount - 2);
		// console.log(carouselSlide.indexOf(c));

		let carouselImages = Array.from(c.querySelectorAll('img'));
		let counter = 1;
		
		if(carouselSlide.indexOf(c) == 0){
			size = carouselImages[0].clientWidth;
		}
		// console.log(size);
		let prevBtn = c.parentElement.querySelector('#prev-btn');
		let nextBtn = c.parentElement.querySelector('#next-btn');

		// c.style.transform = 'translateX(' + (-size*counter) + 'px)';

		nextBtn.addEventListener('click', (e) => {
			e.preventDefault();
			if(counter >= carouselImages.length - 1) return;
			counter++;
			c.style.transition = 'transform 0.4s ease-in-out';
			c.style.transform = 'translateX(' + (-size*counter) + 'px)';
			console.log('c = ' + counter);
			console.log('s = ' + size);
		});

		prevBtn.addEventListener('click', (e) => {
			e.preventDefault();
			if(counter <= 0) return;
			counter--;
			c.style.transition = 'transform 0.4s ease-in-out';
			c.style.transform = 'translateX(' + (-size*counter) + 'px)';
		});

		c.addEventListener('transitionend', () =>  {
			if(carouselImages[counter].id === 'lastClone'){
				c.style.transition = "none";
				counter = carouselImages.length - 2;
				carouselImages[counter];
				c.style.transform = 'translateX(' + (-size*counter) + 'px)';

			}
			if(carouselImages[counter].id === 'firstClone'){
				c.style.transition = "none";
				counter = carouselImages.length - counter;
				carouselImages[counter];
				c.style.transform = 'translateX(' + (-size*counter) + 'px)';
				// console.log('last'+ counter);
			}
		});
	});
}
slide();
window.addEventListener("resize", () => {
	slide();
});



// mouseover
items.forEach(i => {
	let itemsDescription = Array.from(i.querySelectorAll('.portfolio--item__desc'));
	i.addEventListener('mouseover', () => {
		itemsDescription.forEach( d => {
			d.style.transform = 'translateY(0)';
		});
	});
});
// mouseleave
items.forEach(i => {
	let itemsDescription = Array.from(i.querySelectorAll('.portfolio--item__desc'));
	i.addEventListener('mouseleave', () => {
		itemsDescription.forEach( d => {
			d.style.transform = 'translateY(100%)';
		});
	});
});