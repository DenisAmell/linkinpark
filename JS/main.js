	const cardBtn = document.querySelectorAll('.card-btn');
	const albumBlock = document.querySelectorAll('.album-block');
	const crossBtn = document.querySelectorAll('.cross-btn');

	let tab = function () {
		let tabBtn = document.querySelectorAll('.tab-btn');
		let tabBlock = document.querySelectorAll('.tab-block');
		let tabName;

		tabBtn.forEach(item => {
			item.addEventListener('click', selectTabNav)
		});

		function selectTabNav() {
			tabBtn.forEach(item => {
				item.classList.remove('active');
			});
			this.classList.add('active');
			tabName = this.getAttribute('data-tab-name');
			selectTabContent(tabName);
		}

		function selectTabContent(tabName){
			tabBlock.forEach(item => {
				item.classList.contains(tabName) ? item.classList.add('active') : 
				item.classList.remove('active');
			})
		}
	};

	tab();
 
	cardBtn.forEach((btn, i) => { // перебор элементов
		btn.addEventListener('click', () => { // навешиваем событие на все кнопки
			albumBlock[i].classList.add('active');
		})
	});

	crossBtn.forEach((btn, i) => { // перебор элементов
		btn.addEventListener('click', () => { // навешиваем событие на все кнопки
			albumBlock[i].classList.remove('active');
		})
	});

	const burger = document.querySelector('.burger');
	const mMenu = document.querySelector('.m-menu');
	const line = document.querySelector('.line');

	burger.addEventListener('click', function() {
		mMenu.classList.toggle("active");
		burger.classList.toggle("active");
		line.classList.toggle("active");
	});

	mMenu.addEventListener('click', function() {
		mMenu.classList.toggle("active");
		burger.classList.toggle("active");
		line.classList.toggle("active");
	})

	var mySwiper = new Swiper ('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 25,
	height: 520,
	loop: true,
    slidesOffsetAfter: 50,
    		navigation: {
                nextEl: ".next",
                prevEl: ".back",
            },
    breakpoints: {
    	1200: {
    		slidesPerView: 3,
    	},
		991:{
    		slidesPerView: 2,
		},
		768:{
			slidesPerView: 2,
		},
    	120:{
    		slidesPerView: 1,
    	},
    },
  });

  var mySwiper2 = new Swiper ('.swiper-gallery-up', {
	slidesPerView: 3,
	loop: true,
	autoplay: {
		delay: 2000,
	  },
	  breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			450:{
				slidesPerView: 2,
				
			},
			120:{
				slidesPerView: 1,
			}
		},
  });

  var mySwiper3 = new Swiper ('.swiper-gallery', {
	slidesPerView: 3,
	reverseDirection: true,
	loop: true,
	autoplay: {
		delay: 2000,
		reverseDirection: true,
	  },
	  breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			450:{
				slidesPerView: 2,
				
			},
			120:{
				slidesPerView: 1,
			}
		},
  });

  var mySwiper4 = new Swiper ('.swiper-gallery-down', {
	slidesPerView: 3,
	loop: true,
	autoplay: {
		delay: 2000,
	  },
	  breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			450:{
				slidesPerView: 2,
				
			},
			120:{
				slidesPerView: 1,
			}
		},
  });

  var mySwiper5= new Swiper ('.swiper-news', {
	slidesPerView: 3,
	spaceBetween: 25,
	slidesOffsetAfter: 50,
	loop:true,
    		navigation: {
                nextEl: ".next",
			},
			autoplay: {
				delay: 5000,
			  },
    breakpoints: {
    	1200: {
    		slidesPerView: 3,
    	},
		991:{
    		slidesPerView: 2,
		},
		768:{
			slidesPerView: 2,
		},
    	120:{
    		slidesPerView: 1,
    		navigation: {
    			nextEl: ".button-next",
    		},
    	},
    },
  });

  new  WOW().init();
