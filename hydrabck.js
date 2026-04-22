const hydra = new Hydra({
  canvas: document.getElementById("hydraCanvas"),
  detectAudio: true
})

setResolution(
  window.innerWidth * window.devicePixelRatio,
  window.innerHeight * window.devicePixelRatio
)


// BUFFER 1
// testRun = 15

// osc(testRun, 0, 12).blend(noise(2.8, 0.0015, 12), 0.4)
// .color(3, 1, 8)
// .modulateRotate(noise(2, 0.002,15), 3)
// .pixelate(2, 2)
// .modulateRepeat(osc(2, 0.002, 15), 2, 6, 2, -3)
// .modulateScale(noise(10, 0.05,1), 0.2).kaleid(2).color(5, 7, 8)

// .pixelate(130, 130)
// .out(o0)
// render(o0)

// background for the graphics site (some tweaks  it's a LITTLE FASTER)

testRun = 20

osc(testRun, 0, 12).blend(noise(2.8, 0.085, 12), 0.7)
.color(3, 1, 8)
.modulateRotate(noise(2, 0.0095,15), 3)
.pixelate(2, 2)
.modulateRepeat(osc(2, 0.05, 15), 2, 6, 2, -3)
.modulateScale(noise(10, 0.5,1), 0.2).kaleid(2).color(5, 7, 8)

.pixelate(130, 130)
.out(o0)
render(o0)



// testRun = 15

// osc(testRun, 0, 12).blend(noise(2.8, 0.0030, 12), 0.4)
// .color(3, 1, 8)
// .modulateRotate(noise(2, 0.0030,15), 7)
// .pixelate(2, 2)
// .modulateRepeat(osc(2, 0.065, 15), 2, -6, 2, -3)
// .modulateScale(noise(8, 0.0045,1), 0.2).kaleid(2).color(5, 7, 8)
// .saturate()
// .pixelate(130, 130)
// .out(o0)
// render(o0)

// Buffer 2








//Buffer 3