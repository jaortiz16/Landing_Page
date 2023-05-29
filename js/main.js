gsap.registerPlugin(ScrollTrigger);
gsap.to(".container1", {
  x:-800,
  duration: 4,
})
gsap.to(".container2", {
  x:800,
  duration: 4,
})
gsap.fromTo("nav", {
  opacity: 0,
}, {
  opacity: 1,
  duration: 2,
  delay: 2,
});
gsap.fromTo("#video-container", {
  opacity: 0,
}, {
  opacity: 1,
  duration: 2,
});
gsap.to('#my-text', {
  y: 0,
  duration: .3,
  delay: 2.3,
})
gsap.to('#my-text2', {
  y: 0,
  duration: .3,
  delay: 2.3,
})
gsap.fromTo(".img-r2", {
  opacity: 0,
  y: 100,
}, {
  y: 0,
  opacity: 1,
  duration: 2,
  delay: 3.5,
})
gsap.fromTo(".img-r3", {
  opacity: 0,
  x:-300,
}, {
  x:0,
  opacity: 1,
  duration: 2,
  delay: 3,
})
gsap.fromTo(".img-r4", {
  opacity: 0,
  y:-100
}, {
  y:0,
  opacity: 1,
  duration: 3,
  delay: 2.5,
})