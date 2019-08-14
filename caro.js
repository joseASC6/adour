/** @type {HTMLElement} */
const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children);

console.log(slides);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav =  document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


//arrange the slides next to one another

// slides[1].style.left = slideWidth + 'px';
const setSLidePosition = (slide,index) =>{
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSLidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

//click left, move left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide')
    const prevDot = currentDot.previousElementSibling;

    moveToSlide(track,currentSlide, prevSlide);
    updateDots(currentSlide, prevDot);
})


//move right, move right

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide')
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentSlide, nextDot);
})

//when click indicator, move to that slide

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
})

let btn = document.getElementsByClassName("messageButton");
btn.addEventListener("click", function(){
    window.open("message.html")
});