function swiperFunc() {
	const swiper = new Swiper('.popular-slider', {
		on: {
			resize: function enableOnlyMobile(swiper) {
				// Disable the slider when the window width is less than or equal to 960
				if (840 < window.innerWidth) {
					swiper.disable()
					swiper.el.classList.add('-non-slider')
				} else {
					swiper.enable()
					swiper.el.classList.remove('-non-slider')
				}
			},
		},

		direction: 'horizontal',
		slidesPerView: 1,
		spaceBetween: 20,
		grabCursor: true,
		a11y: false,
		freeMode: true,
		speed: 3500,
		loop:true,
		autoplay: {
			delay: 0.0,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				direction: 'horizontal',
				slidesPerView: 1,
				spaceBetween: 0,
				grabCursor: true,
				a11y: false,
				freeMode: true,
				speed: 3500,
				loop:true,
				autoplay: {
					delay: 0.0,
					disableOnInteraction: false,
				},
			},

			586: {
				direction: 'horizontal',
				slidesPerView: 2,
				spaceBetween: 20,
				grabCursor: true,

			},
			840: {
				slidesPerView: 3,
				spaceBetween: 20,
			}
		},
	});
}
export default swiperFunc;

//	loop: true,
//	effect: "fade",
//	grabCursor: true,
//	a11y: false,
//	freeMode: true,
//	speed: 2000,
//	autoplay:{
//		delay: 0.5,
//		disableOnInteraction: false,