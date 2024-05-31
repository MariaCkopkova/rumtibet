function mobileNav() {
        const menuToggle = document.querySelector('#menu-toggle');
        const mobileMenu = document.querySelector('#header-menu');
        const bodyEl = document.body;
        if (menuToggle) {
                menuToggle.addEventListener('click', () => {                        
                        if (menuToggle.classList.contains('active')) {
                                menuToggle.classList.remove('active');
                                mobileMenu.classList.remove('active');
                                bodyEl.classList.remove('no-scroll');
                        } else {
                                menuToggle.classList.add('active');
                                mobileMenu.classList.add('active')
                                bodyEl.classList.add('no-scroll');
                        }
                });
                                /**клик по мобильному меню */
                                mobileMenu.addEventListener('click', () => {
                                        menuToggle.classList.remove('active');
                                        mobileMenu.classList.remove('active');
                                        bodyEl.classList.remove('no-scroll');
                                });
        }
}
export default mobileNav;
