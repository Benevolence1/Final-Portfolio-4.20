
//Getting the time for the background change
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const currentMinutes = hours * 60 + minutes;


if (currentMinutes >= 405 && currentMinutes < 1080){
    document.getElementById("morning").classList.add("active");
    document.getElementById("evening").classList.remove("active");
    document.getElementById("night").classList.remove("active");
}


else if (currentMinutes >= 1080 && currentMinutes < 1260){
    document.getElementById("morning").classList.remove("active");
    document.getElementById("evening").classList.add("active");
    document.getElementById("night").classList.remove("active");
}

else{
    document.getElementById("morning").classList.remove("active");
    document.getElementById("evening").classList.remove("active");
    document.getElementById("night").classList.add("active");
}


// Sidebar Functionality For Time

const timeDisplay = document.querySelector(".Time");
let convertedHours = hours % 12 || 12;  // convert 0–23 → 1–12
let amPm = hours>= 12 ? 'PM': 'AM'
timeDisplay.innerHTML = `Current Time: ${convertedHours}:${minutes.toString().padStart(2, "0")} ${amPm}`;




// const timeDisplay = document.querySelector(".Time");

// let formattedHours = hours % 12 || 12;   // convert 0–23 → 1–12
// let amPm = hours >= 12 ? "PM" : "AM";

// timeDisplay.innerHTML = `Current Time: ${formattedHours}:${minutes.toString().padStart(2, "0")} ${amPm}`;

// //



const slideChangeText = document.querySelector(".slide-change-text");
if (currentMinutes >= 405 && currentMinutes < 1080){
    slideChangeText.innerHTML = `
        The Next 
        Slide <br>
        Will change at: 6:00 PM
    `;
}

else if (currentMinutes >= 1080 && currentMinutes < 1260){
    slideChangeText.innerHTML = `
    The Next Slide <br>
    Will change at: 8:00 PM`

}
else{
    slideChangeText.innerHTML = `
    The Next Slide <br>
    Will change at: 6:45 AM`
}





const track = document.querySelector(".carousel-track");
const slides = Array.from(document.querySelectorAll(".imageholder"));

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Each slide is exactly the width of the Gameboy screen (470px)
const slideWidth = 470;

let currentIndex = 0;

// Moves the track left/right
function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Go to next slide (wraps around)
nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    updateCarousel();
});

// Go to previous slide (wraps around)
prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateCarousel();
});