function closeForm() {
        const searchClose = document.querySelector('#search-close');
        const searchForm = document.querySelector('#search-form');

        searchClose.addEventListener('click', () => {  
                searchForm.classList.remove('form--open')

        });
}
export default closeForm;