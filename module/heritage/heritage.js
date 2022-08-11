const nav = document.querySelector('nav')
const navParts = nav.children
const main =document.querySelector('main')
const mainParts=main.children

for (let i = 0; i < navParts.length; i++) {
    navParts[i].addEventListener('click', function () {
        this.style.background = '#ffffff'
        this.style.fontSize='2vw'
        this.style.color = '#27342b'
        this.style.fontWeight = 'bolder'
        mainParts[i].style.display='block'
        for (let j = 0; j < navParts.length; j++) {
            if (j == i) continue
            navParts[j].style.background = 'none'
            navParts[j].style.fontSize='1.5vw'
            navParts[j].style.color = 'black'
            navParts[j].style.fontWeight = '500'
            mainParts[j].style.display='none'
        }
    })
}
