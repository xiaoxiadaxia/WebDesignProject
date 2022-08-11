const collectImg = document.querySelector('.collect-icon')
const siteImg = document.querySelector('.site-icon')
const collect = document.querySelector('.collect')
const site = document.querySelector('.site')
let hasCollect = false;

collect.addEventListener('click', function () {
    hasCollect = !hasCollect;
    if (hasCollect) {
        collectImg.src = '../images/collected.png';
    } else {
        collectImg.src = '../images/collect.png';
    }
});
//
collect.addEventListener('mouseover', function () {
    collectImg.style.transform = 'scale(1.2,1.2)';
});
collect.addEventListener('mouseout', function () {
    collectImg.style.transform = 'scale(1,1)';
});
//
site.addEventListener('mouseover', function () {
    siteImg.style.transform = 'scale(1.2,1.2)';
});
site.addEventListener('mouseout', function () {
    siteImg.style.transform = 'scale(1,1)';
});
//
const container = document.querySelector('.container');
let modArr = container.children;

for (let i = 0; i < modArr.length; i++) {
    const divDom = modArr[i].querySelector('div');
    modArr[i].addEventListener('mouseover', function () {
        modArr[i].style.transform = 'scale(1.1,1.1) translateY(-2vh)';

        divDom.style.opacity = '1';
    });
    modArr[i].addEventListener('mouseout', function () {
        modArr[i].style.transform = 'scale(1,1) translateY(0)';

        divDom.style.opacity = '0';
    });
}


const qqImg = document.querySelector('.qq img')
const wxImg = document.querySelector('.wechat img')
const mailImg = document.querySelector('.e-mail img')
const qq = document.querySelector('.qq-code')
const wx = document.querySelector('.wx-code')
const mail = document.querySelector('.mail-code')

let hasclick0 = false
let hasclick1 = false
let hasclick2 = false

qqImg.addEventListener('click', function () {
    hasclick0 = !hasclick0
    if (hasclick0) {
        qq.style.display = 'block'
        wx.style.display = 'none'
        mail.style.display = 'none'
        hasclick1 = false
        hasclick2 = false
    } else {
        qq.style.display = 'none'
    }
})

wxImg.addEventListener('click', function () {
    hasclick1 = !hasclick1
    if (hasclick1) {
        wx.style.display = 'block'
        qq.style.display = 'none'
        mail.style.display = 'none'
        hasclick0 = false
        hasclick2 = false
    } else {
        wx.style.display = 'none'
    }
})

mailImg.addEventListener('click', function () {
    hasclick2 = !hasclick2
    if (hasclick2) {
        mail.style.display = 'block'
        qq.style.display = 'none'
        wx.style.display = 'none'
        hasclick0 = false
        hasclick1 = false
    } else {
        mail.style.display = 'none'
    }
})
