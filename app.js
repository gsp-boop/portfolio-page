const header = document.querySelector(".header");
const homePage = document.querySelector(".extra");
const aboutMe = document.querySelector('.about-container')

const elemInView = (elem, offset = 0) => {
    const elemTop = elem.getBoundingClientRect().top;
    return(
        elemTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
    )
} 

const displayElem = elem => elem.classList.add("about-container-animation")
const hideElem = elem => elem.classList.remove("about-container-animation")

const scrollHandler = () => {
    if(elemInView(aboutMe, 50)) {
        displayElem(aboutMe)
    }
    else {
        hideElem(aboutMe)
    }
} 



window.addEventListener('scroll', function() {
    scrollHandler();
    const scrollCount = window.scrollY;

    if(scrollCount > 10){
        header.classList.add('sticky');

    }
    else if( scrollCount < 10){
        header.classList.remove('sticky')
    }

})

