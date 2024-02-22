const $ = document
const tabs = $.querySelectorAll('.wrapper')

const contents = $.querySelectorAll('.content')
const icons = $.querySelectorAll('.icon')
const toggles = $.querySelectorAll('.toggle')

let contentElem, toggleElem, iconElem

function closeAllTabs() {
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.height = '0px'
        toggles[i].style.color = '#111130'
        icons[i].classList.remove('fa-minus')
        icons[i].classList.add('fa-plus')

    }
}

tabs.forEach(tab => {
    tab.addEventListener('click', event => {

        closeAllTabs()

        contentElem = tab.querySelector('.content')
        toggleElem = tab.querySelector('.toggle')
        iconElem = tab.querySelector('.icon')

        contentElem.style.height = contentElem.scrollHeight + 'px'
        toggleElem.style.color = '#0084e9'
        iconElem.classList.add('fa-minus')
        iconElem.classList.remove('fa-plus')

    })
})