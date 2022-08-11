const box = document.querySelector('.box');
const container=document.querySelector('.container')
const imgArr = box.children;

for (let i = 0; i < imgArr.length; i++) {
    imgArr[i].addEventListener('click', function () {
        container.style.backgroundImage = `url(${imgArr[i].src})`;
    });
}
