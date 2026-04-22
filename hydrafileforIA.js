const hydra = new Hydra({
  canvas: document.getElementById("hydraCanvas"),
  detectAudio: true
})

setResolution(
  window.innerWidth * window.devicePixelRatio,
  window.innerHeight * window.devicePixelRatio
)


// BUFFER 1
osc(18, 0.1, 0)
  .blend(noise(12, 2, 12), () => mouse.x / width, () => mouse.y / height, 1)
  .color(12, 0.1, 2)
  .out(o0)


// BUFFER 2 (camera + color reactive)
s0.initCam()
src(s0)
  .modulateScale(src(o0), 0.3)
  .color(() => mouse.x / width, () => mouse.y / height, 1)
  .out(o1)


// BUFFER 3 (your VHS effect FIXED)

testRun = 15

osc(testRun, 0, 2).blend(noise(2, 0.5, 2), 0.8)
.color(8, 1, 2)
.modulateRotate(osc(10, 0.5,0), 0.1)
.modulateScale(o2, () => mouse.x / width, () => mouse.y / height, 1)
.kaleid(2).color(2, 7, 2)
.out(o2)
render(o2)

// SLIDE SWITCHER
function updateHydraSlide(index) {
  if (index === 0) render(o0)
  if (index === 1) render(o1)
  if (index === 2) render(o2)
}
