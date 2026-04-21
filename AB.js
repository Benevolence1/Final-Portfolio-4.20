//Making the moving carousel mechanics
// just like p5 kinda 
// make var that tracks the slides
let currentSlide = 0;

//target the places that holds my images

const slides = document.querySelectorAll('.image-holder')
//now we need the number of TOTAL slides


//I somewhat undestand a little 
//we need to make the functions that we think of
// e.g: we need the number of slides which means
// we need to make a var name slides and then turn 
//it into a function itself


const totalSlides = slides.length


//Now we need to make it move?

//we need a custom mechanic that makes it move aka 
//function!!! to move throught the images
//specifically


// do we need slides or index to see that or not?
function showSlides(index){
    if (index >= totalSlides){
        currentSlide = 0
    }
    else if (index < 0){
        currentSlide = totalSlides - 1
    }
    else{

        currentSlide = index
        // so other than that just follow the index
        // if the index is higher than the 
    }
     const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform 
    = `translateX(${offset}%)`;
}





// NEXT BUTTON

//now we have to make the function that makes it go
//next after making the the mechanics for making it 
//shift through the slides


function nextSlide(){
    showSlides(currentSlide + 1)
}


function previousSlide (){
    showSlides(currentSlide-1)
}

const buttonL = document.querySelector('.L-button');
buttonL.addEventListener('click', previousSlide)

const buttonR = document.querySelector('.R-button');
buttonR.addEventListener('click', nextSlide)



// /* KEYBOARD SHORTCUTS */
// document.addEventListener('keydown', function(e) {
//     if (e.ctrlKey && e.key === 'z' && !e.shiftKey) {
//         e.preventDefault();
//         previousSlide(); // CTRL + Z
//     } else if (e.ctrlKey && e.shiftKey && e.key === 'Z') {
//         e.preventDefault();
//         nextSlide(); // CTRL + SHIFT + Z
//     }
// });


// what does function e mean and how does it relate


// 