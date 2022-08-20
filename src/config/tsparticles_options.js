export const options = Object.freeze({
  fullScreen: false,
  background: {
    color: {
      value: "#fff"
    }
  },
  fpsLimit: 60,
  interactivity: {
    detectOn: "canvas"
  },
  particles: {
    color: {
      value: "#939393"
    },
    links: {
      color: "#939393",
      distance: 60,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: false
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce"
      },
      random: false,
      speed: 4,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
  detectRetina: true
});
