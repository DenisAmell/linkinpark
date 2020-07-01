$(document).ready(function () {
	const mMenuBtn = $(".burger");
	const mMenu = $(".m-menu");
	const tab = $(".tab");
	const line = $(".line");
	const modalWindow = $(".modal-window");
	const album1 = $(".album1");
	const card1 = $(".card1");
	const album2 = $(".album2");
	const card2 = $(".card2");
	const album3 = $(".album3");
	const card3 = $(".card3");
	const album4 = $(".album4");
	const card4 = $(".card4");
	const album5 = $(".album5");
	const card5 = $(".card5");
	const album6 = $(".album6");
	const card6 = $(".card6");
	const album7 = $(".album7");
	const card7 = $(".card7");
	const cross = $(".cross");
	const cross2 = $(".cross2");
	const cross3 = $(".cross3");
	const cross4 = $(".cross4");
	const cross5 = $(".cross5");
	const cross6 = $(".cross6");
	const cross7 = $(".cross7");
	

	mMenuBtn.on('click', function() {
		mMenu.toggleClass("active");
		mMenuBtn.toggleClass("active");
		line.toggleClass("active");
		$('body').toggleClass("no-scroll");
	});
	mMenu.on('click', function(){
		mMenu.toggleClass("active");
		mMenuBtn.toggleClass("active");
		line.toggleClass("active");
		$('body').toggleClass("no-scroll");
	});
	card1.on('click', function(){
		album1.toggleClass("active");
	});
	card2.on('click', function(){
		album2.toggleClass("active");
	});
	card3.on('click', function(){
		album3.toggleClass("active");
	});
	card4.on('click', function(){
		album4.toggleClass("active");
	});
	card5.on('click', function(){
		album5.toggleClass("active");
	});
	card6.on('click', function(){
		album6.toggleClass("active");
	});
	card7.on('click', function(){
		album7.toggleClass("active");
	});
	cross.on('click', function(){
		album1.toggleClass("active");
	});
	cross2.on('click', function(){
		album2.toggleClass("active");
	});
	cross3.on('click', function(){
		album3.toggleClass("active");
	});
	cross4.on('click', function(){
		album4.toggleClass("active");
	});
	cross5.on('click', function(){
		album5.toggleClass("active");
	});
	cross6.on('click', function(){
		album6.toggleClass("active");
	});
	cross7.on('click', function(){
		album7.toggleClass("active");
	});
	
	tab.on('click', function () {
		tab.removeClass("active");
		$(this).toggleClass("active");
		let activeTabContent = $(this).attr('data-target');
		$('.wrapper').removeClass("visible")
		$(activeTabContent).toggleClass('visible');
	});

	var mySwiper = new Swiper ('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 25,
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
    		slidesOffsetAfter: 50,
    		navigation: {
    			nextEl: ".button-next",
    		},
    	},
    },
  });
});