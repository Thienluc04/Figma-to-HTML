const navMobile = document.querySelector('.nav__mobile') 
const html = document.querySelector('html') 
const menuBtn = document.querySelector('.menu-btn') 
const closeBtn = document.querySelector('.close-btn')
const bg = document.querySelector('.bg')


menuBtn.onclick = function () {
    navMobile.className = 'nav__mobile show'
    html.classList.add('overflow')
    navMobile.classList.add('full')
    bg.classList.add('is-active')
}

closeBtn.onclick = function() {
    navMobile.className = 'nav__mobile hidden'
    html.classList.remove('overflow')
    navMobile.classList.remove('full')
    bg.classList.remove('is-active')

}
