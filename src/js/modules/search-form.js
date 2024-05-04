function searchForm() {
        const searchOpen = document.querySelector('#search-open');
        const searchForm = document.querySelector('#search-form');
       
        
        searchOpen.addEventListener('click', () => {
                searchForm.classList.toggle('form--open')
        });
}

export default searchForm;