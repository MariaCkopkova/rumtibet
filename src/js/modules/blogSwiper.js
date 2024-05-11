function blogSwiper() {
        const swiper = new Swiper('.sample-slider', {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 10,
                grabCursor: true,
		a11y: false,
		freeMode: true,
                speed: 3000,
                autoplay: {
                        delay: 0.5,
                        disableOnInteraction: false,
                },
                on: {
                        resize: function enableOnlyMobile(swiper) {
                                // Disable the slider when the window width is less than or equal to 960
                                if (1200 < window.innerWidth) {
                                        swiper.disable()
                                        swiper.el.classList.add('-non-slider')
                                } else {
                                        swiper.enable()
                                        swiper.el.classList.remove('-non-slider')
                                }
                        },
                }
        })
}
export default blogSwiper;