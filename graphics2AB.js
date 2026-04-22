// ---------------------------
// POSTER DATA
// ---------------------------
const rightSide = document.querySelector(".right-reserved");

const posters = [
    {
        title:"Digital Expansion",
        mainImage:"DigitalDomainPoster.png",
                rightSideColor: "#FF00FF",

        description: "Digital expansion is a poster made in Hydra and Photoshop. I made an abstract bit-mapped piece using hydra, a live coding software, and in Photoshop where I edited the colors using camera filter raw, and other color grading techniques, and added the text.",
        processPhotos: [
            "Screenshot 2026-03-16 142410.png",
            "Screenshot 2026-03-16 142913.png",
            "Screenshot 2026-03-16 143313.png",
            "Screenshot 2026-03-16 143421.png",
            "Screenshot 2026-03-16 143804.png",
            "Screenshot 2026-03-16 143851.png",
            "Screenshot 2026-03-16 143941.png",
            "Screenshot 2026-03-18 195809.png"
        ]
    },
    {
        title:"D.C Art x Tech",
        mainImage:"Screenshot2026-03-19011235.png",
                rightSideColor: "#ab5ce4",

        description: "D.C Art x Tech is a poster made with Hydra and Photoshop to advertise art events that involve integrated usages of technology. Personally I hear the most about these events in places like NY or San Francisco, because of that I decided to make this poster.",
 processPhotos: [
            "Screenshot 2026-03-19 011031.png",
            "Screenshot 2026-03-19 011103.png",
            "Screenshot 2026-03-19 011132.png",
            "Screenshot 2026-03-19 011143.png",
            "Screenshot 2026-03-19 011143.png",
            "Screenshot 2026-03-19 011159.png",
            "Screenshot 2026-03-19 011225.png",
            "Screenshot 2026-03-19 011235.png",
    "image copy 2.png"        ]
    },
     {
        title: "Hydra Live Coding",
        mainImage: "hydraLivecodingPoster.png",
        description: "Hydra Live Coding is a poster made with Hydra and Photoshop used to advertise a live coding event. I got into hydra mid to late last year to not have to learn that many adobe programs, however I fell in love with making cool visuals without having to learn a lot of things with a few lines of code. But, I noticed there's not many events in the DMV that have this, so I made this poster.",
        rightSideColor: "#b6e7ff",
        gridBackgroundImage: "Screenshot 2026-03-19 012059.png", // Add your image
        // hydraCode: function () {
        //     let testRun = 15;
        //     osc(testRun, 0, 12).blend(noise(2.8, 0.0090, 12), 0.8)
        //         .color(1,0.5, 1)
        //         .modulateRotate(noise(2, 0.050,15), -2)
        //         .pixelate(2, 2)
        //         .modulateRepeat(osc(2, -0.1, 15), 3, 6, 2, 8)
        //         .modulateScale(noise(12, 0.0070,1), 0.4)
        //         .kaleid(2)
        //         .color(5, 4, 7)
        //         .pixelate(130, 130)
        //         .out();
        // },
        processPhotos: [
            "Screenshot 2026-03-19 011804.png",
            "Screenshot 2026-03-19 011817.png",
            "Screenshot 2026-03-19 011832.png",
            "Screenshot 2026-03-19 011905.png",
            "Screenshot 2026-03-19 011940.png",
            "Screenshot 2026-03-19 011954.png",
            "Screenshot 2026-03-19 012123.png",
            "Screenshot 2026-03-19 012059.png"
        ]
    }
];


// ---------------------------
// ELEMENTS (MATCHING YOUR HTML)
// ---------------------------
let currentIndex = 1;

const posterSpace = document.querySelector(".poster-space");
const posterTitle = document.getElementById("poster-title");
const posterDescription = document.querySelector(".poster-description");
const photoSlots = document.querySelectorAll(".photo-slot img");

const btnL = document.getElementById("btn-L");
const btnR = document.getElementById("btn-R");


// ---------------------------
// UPDATE FUNCTION
// ---------------------------
function updatePosterDisplay(index) {
    const poster = posters[index];
    rightSide.style.backgroundColor = poster.rightSideColor;

    // Replace poster image inside poster-space
    posterSpace.innerHTML = `<img src="${poster.mainImage}" alt="">`;

    // Update text
    posterTitle.textContent = poster.title;
    posterDescription.textContent = poster.description;
    if (poster.hydraCode) {
    poster.hydraCode();
}

    // Update photo grid
    poster.processPhotos.forEach((photo, i) => {
        if (photoSlots[i]) {
            photoSlots[i].src = photo;
            photoSlots[i].style.opacity = 1;
        }
    });
}


// ---------------------------
// BUTTONS
// ---------------------------
btnR.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % posters.length;
    updatePosterDisplay(currentIndex);
});

btnL.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + posters.length) % posters.length;
    updatePosterDisplay(currentIndex);
});


// ---------------------------
// INITIAL LOAD
// ---------------------------
updatePosterDisplay(currentIndex);
