//import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const PraticleBg = () => {
    async function loadParitlces(main) {
        await loadFull(main)
    }
  return (
   <Particles id="tsparticles" init={loadParitlces} 
   options={{
    "fullScreen": {
        "enable": true,
        "zIndex": -1
    },
    "particles": {
        "number": {
            "value": 20,
            "density": {
                "enable": false,
                "value_area": 800
            }
        },
        "color": {
            "value": "#EC5A31"
        },
        "shape": {
            "type": "circle",
            "options": {
                "sides": 5
            }
        },
        "opacity": {
            "value": 0.8,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "rotate": {
            "value": 0,
            "random": true,
            "direction": "clockwise",
            "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
            }
        },
       


        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": ["grab"]
            },
            "onclick": {
                "enable": false,
                "mode": "bubble"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "background": {
        "color": "white",
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    }
}}
   />
  )
}

export default PraticleBg
