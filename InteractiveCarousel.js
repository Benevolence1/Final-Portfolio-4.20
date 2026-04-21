
//When we click buttons
// we want the carousel to change 
//  the slide:


let currentSlide = 0;
const track = document.querySelector('.carousel-track')
const slides = Array.from(document.querySelectorAll('.Hydra-slide'))
const totalSlides = slides.length

// Get the right button so when we click it does something
const rightButton = document.querySelector('.right-button')



   function move (index){
       track.style.transform = `translateX(-${index *100}vw)`


}





rightButton.addEventListener('click', ()=>{
    currentSlide++
    if (currentSlide >= totalSlides){
        currentSlide = 0
    }
    updateHydraSlide(currentSlide)
  move(currentSlide)
  
})



const leftButton = document.querySelector('.left-button')
leftButton.addEventListener('click', ()=>{
    currentSlide--
    if(currentSlide <0){
        currentSlide = totalSlides -1
    }
    updateHydraSlide(currentSlide)
    move(currentSlide)
})









