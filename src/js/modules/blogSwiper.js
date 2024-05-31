document.addEventListener('DOMContentLoaded', blogSwiper);
function blogSwiper() {
        const swiper = new Swiper('.sample-slider', {
                on: {
                        resize: function enableOnlyMobile(swiper) {
                      
                                // Отключите ползунок, если ширина окна меньше или равна 900.
                                if (900 < window.innerWidth) {
                                        swiper.disable()
                                        swiper.el.classList.add('-non-slider')
                                } else {
                                        swiper.enable()
                                        swiper.el.classList.remove('-non-slider')
                                }
                        },
                },
                loop: true,
                slidesPerView: 1,
                spaceBetween: 10,
                grabCursor: true,
		a11y: false,
		freeMode: true,
                speed: 3500,
                autoplay: {
                        delay: 0.5,
                        disableOnInteraction: false,
                },
        })
}
export default blogSwiper;