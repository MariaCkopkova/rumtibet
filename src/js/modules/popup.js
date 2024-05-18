function popUp() {
        const images = [...document.querySelectorAll('.galery-img')];
        //popup
        const popup = document.querySelector('.popup');
        const closeBtn = document.querySelector('.close-btn');
        const imageName = document.querySelector('.image-name');
        const largeImage = document.querySelector('.large-image');
        const imageIndex = document.querySelector('.index');
        const leftArrow = document.querySelector('.left-arrow');
        const rightArrow = document.querySelector('.right-arrow');

        closeBtn.addEventListener('click', () => {
                popup.classList.toggle('active');
        })

        let index = 0;
        images.forEach((item, i) => {
                item.addEventListener('click', () => {
                        updateImage(i);
                        popup.classList.toggle('active');
                })
        })
        const updateImage = (i) => {
                let path = `./img/impression${i-3 + 1}/retina/impression${i-3 + 1}.avif`;
                largeImage.src = path;
                imageName.innerHTML = path;
                imageIndex.innerHTML = `0${i-3 + 1}`;
                index = i;
        }
        leftArrow.addEventListener('click', () => {
                if(index-3 > 0) {
                        updateImage(index - 1);
                }
        })
        rightArrow.addEventListener('click', () => {                
                if(index < images.length-3 - 1){
                        updateImage(index + 1);
                }
        })
}
export default popUp;