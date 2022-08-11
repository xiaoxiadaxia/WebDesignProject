const box = document.querySelector('.box');
const content = document.querySelector('.content');
const imgArr = box.children;
const describes = content.children;

for (let i = 0; i < imgArr.length; i++) {
    imgArr[i].addEventListener('click', function () {
        for (let j = 0; j < imgArr.length; j++) {
            describes[j].style.display = 'none';
        }
        document.body.style.backgroundImage = `url(${imgArr[i].src})`;
        describes[i].style.display = 'block';
    });
}
