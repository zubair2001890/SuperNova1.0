export const particlesDarkThemeConfig = {
  "background": {},
  "backgroundMask": {
    "cover": {
      "color": {
        "value": "#000000"
      },
      "opacity": 1
    },
    "enable": false
  },
  "detectRetina": true,
  "fpsLimit": 30,
  "infection": {
    "cure": false,
    "delay": 0,
    "enable": false,
    "infections": 0,
    "stages": []
  },
  "interactivity": {
    "detectsOn": "canvas",
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onDiv": {
        "elementId": "",
        "enable": false,
        "mode": []
      },
      "onHover": {
        "enable": true,
        "mode": "grab",
        "parallax": {
          "enable": false,
          "force": 60,
          "smooth": 10
        }
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 400,
        "duration": 2,
        "opacity": 0.8,
        "size": 40
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 200,
        "links": {
          "opacity": 1
        }
      },
      "push": {
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4,
        "speed": 1
      },
      "slow": {
        "factor": 3,
        "radius": 200
      }
    }
  },
  "particles": {
    "collisions": {
      "enable": false,
      "mode": "bounce"
    },
    "color": {
      "value": "#ffffff",
      "animation": {
        "enable": false,
        "speed": 1,
        "sync": true
      }
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#ffffff"
      },
      "consent": false,
      "distance": 63,
      "enable": true,
      "opacity": 1,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "lime"
        },
        "enable": false
      },
      "triangles": {
        "enable": false
      },
      "width": 1,
      "warp": false
    },
    "move": {
      "attract": {
        "enable": false,
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "direction": "none",
      "enable": true,
      "noise": {
        "delay": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0
        },
        "enable": false,
        "factor": {
          "horizontal": {
            "value": 50,
            "offset": 0
          },
          "vertical": {
            "value": 10,
            "offset": 40000
          }
        }
      },
      "outMode": "out",
      "random": true,
      "speed": 0.5,
      "straight": false,
      "trail": {
        "enable": false,
        "length": 10,
        "fillColor": {
          "value": "#000000"
        }
      },
      "vibrate": false,
      "warp": false
    },
    "number": {
      "density": {
        "enable": true,
        "area": 800,
        "factor": 500
      },
      "limit": 0,
      "value": 80
    },
    "opacity": {
      "animation": {
        "enable": false,
        "minimumValue": 0.1,
        "speed": 1,
        "sync": false
      },
      "random": {
        "enable": false,
        "minimumValue": 1
      },
      "value": 0.5
    },
    "rotate": {
      "animation": {
        "enable": false,
        "speed": 0,
        "sync": false
      },
      "direction": "clockwise",
      "random": false,
      "value": 0
    },
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "options": {
        "character": {
          "fill": true,
          "close": true,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "char": {
          "fill": true,
          "close": true,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "image": {
          "fill": true,
          "close": true,
          "height": 100,
          "replaceColor": false,
          "src": "https://cdn.matteobruni.it/images/particles/github.svg",
          "width": 100
        },
        "images": {
          "fill": true,
          "close": true,
          "height": 100,
          "replaceColor": false,
          "src": "https://cdn.matteobruni.it/images/particles/github.svg",
          "width": 100
        },
        "polygon": {
          "fill": true,
          "close": true,
          "sides": 7
        },
        "star": {
          "fill": true,
          "close": true,
          "sides": 7
        }
      },
      "type": "polygon"
    },
    "size": {
      "animation": {
        "destroy": "none",
        "enable": true,
        "minimumValue": 20,
        "speed": 6,
        "startValue": "max",
        "sync": false
      },
      "random": {
        "enable": true,
        "minimumValue": 1.5
      },
      "value": 3
    },
    "stroke": {
      "color": {
        "value": "#000000"
      },
      "width": 0,
      "opacity": 1
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    }
  },
  "pauseOnBlur": true
}

export const particlesLightThemeConfig = (() => {
  const particlesDarkThemeConfigClone = JSON.parse(
    JSON.stringify(particlesDarkThemeConfig)
  );
  particlesDarkThemeConfigClone.particles.color.value = "#9e9e9e";
  particlesDarkThemeConfigClone.particles.links.color.value = "#9e9e9e";
  return particlesDarkThemeConfigClone;
})();
