document.addEventListener("DOMContentLoaded", mobileNav);
function mobileNav() {
        const menuToggle = document.querySelector('#menu-toggle');
        const mobileMenu = document.querySelector('#header-menu');
        const bodyEl = document.body;
        if (menuToggle) {
                menuToggle.addEventListener('click', () => {
                        
                        if (menuToggle.classList.contains('active')) {
                                menuToggle.classList.remove('active');
                                mobileMenu.classList.remove('active')
                        } else {
                                menuToggle.classList.add('active');
                                mobileMenu.classList.add('active')
                        }
                        console.log('Hi');
                });
        }
}
export default mobileNav;
