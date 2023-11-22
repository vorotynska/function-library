const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];
const altText = ['human eye', 'bas-relief', 'blue flowers', 'ancient egyptian fresco', 'butterfly on a leaf'];

images.forEach((imageSrc, index) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageSrc);
    newImage.setAttribute('alt', altText[index]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        displayedImage.src = imageSrc;
        displayedImage.alt = altText[index];
    });
});

btn.addEventListener('click', () => {
    overlay.style.backgroundColor = overlay.style.backgroundColor === 'rgba(0, 0, 0, 0.5)' ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.5)';
});