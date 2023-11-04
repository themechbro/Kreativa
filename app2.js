gsap.to('body', {
  scrollTrigger: {
    trigger: '.second',
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    markers: true,
    toggleActions: "play none reverse none"
  },
  backgroundColor: "#e3edec"
});
gsap.to('.second-content', {
  scrollTrigger: {
    trigger: '.second',
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
    toggleActions: "play none reverse none"
  },
  color: "black"
});
gsap.to('.navbar', {
  scrollTrigger: {
    trigger: '.second',
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
    toggleActions: "play none reverse none"
  },
  backgroundColor: "#e3edec"
});
gsap.to('.nav-link', {
  scrollTrigger: {
    trigger: '.second',
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
    toggleActions: "play none reverse none"
  },
  color: "black"
});
gsap.to('.navbar-brand', {
  scrollTrigger: {
    trigger: '.second',
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
    toggleActions: "play none reverse none"
  },
  color: "black"
});

gsap.to('body', {
  scrollTrigger: {
    trigger: '.third',
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
    toggleActions: "play none reverse none"
  },
  backgroundColor: "#37184d"
});
gsap.to('.third-content', {
  scrollTrigger: {
    trigger: '.third',
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
    toggleActions: "play none reverse none"
  },
  color: "white"
});
gsap.to('.navbar', {
  scrollTrigger: {
    trigger: '.third',
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
    toggleActions: "play none reverse none"
  },
  backgroundColor: "#37184d"
});
gsap.to('.notable p', {
  scrollTrigger: {
    trigger: '.third',
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
    toggleActions: "play none reverse none"
  },
  color: "white"
});
gsap.to('.nav-link', {
  scrollTrigger: {
    trigger: '.third',
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
    toggleActions: "play none reverse none"
  },
  color: "white"
});
gsap.to('.navbar-brand', {
  scrollTrigger: {
    trigger: '.third',
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
    toggleActions: "play none reverse none"
  },
  color: "white"
});

gsap.to('body', {
  scrollTrigger: {
    trigger: '.fourth',
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
    markers: true,
    toggleActions: "play none reverse none"
  },
  backgroundColor: "#e3edec"
});
gsap.to(['.fourth-content', 'i', 'hr', '.lead'], {
  scrollTrigger: {
    trigger: '.fourth',
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
    toggleActions: "play none reverse none"
  },
  color: "black"
});
gsap.to('.navbar', {
  scrollTrigger: {
    trigger: '.fourth',
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
    toggleActions: "play none reverse none"
  },
  backgroundColor: "#e3edec"})

gsap.to('.nav-link',{scrollTrigger:{trigger:'.fourth', start:"top ,top", end:"bottom bottom", scrub:2},color:"black"});
gsap.to('.navbar-brand',{scrollTrigger:{trigger:'.fourth', start:"top ,top", end:"bottom bottom", scrub:2},color:"black" });