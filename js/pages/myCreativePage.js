Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

//makes the countdown to 2023
let countdown_element = document.getElementById("countdown");
let h2_text = document.getElementById("h2Text");

let countDownDate = new Date("Jan 1, 2023 15:37:35").getTime();

let x = setInterval(function(){
    //gets today's date and time
    let now = new Date().getTime();

    //find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown_element.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes & ${seconds} Seconds`;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        countdown_element.innerHTML = "EXPIRED";
    }

    //gives a random color out of the array.
    let colors = ["main-blue", "main-red", "main-green", "main-yellow"];
    countdown_element.classList.toggle(colors.random());
    h2_text.classList.toggle(colors.random());
}, 1000);

let particleColors = ["#00468a", "#d63031", "#34a752", "#fbbc05"];

//particles.js config
particlesJS('particles-js',
{
    "particles": {
      "number": {
        "value": 43,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#5f5454"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3.945738208161363,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#504848",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
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
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);

//fetching data from the sri lankan govenments api.
//documentation: https://www.hpb.health.gov.lk/en/api-documentation

let new_cases = document.getElementById("newCases");
let total_cases = document.getElementById("totalCases");
let total_deaths = document.getElementById("totalDeaths");
let date_and_src = document.getElementById("dateAndSrc");

fetch("https://www.hpb.health.gov.lk/api/get-current-statistical")
  .then(responce => responce.json())
  .then(fetched_data => {
    new_cases.innerHTML = `New Cases: ${fetched_data.data.local_new_cases}`;
    total_cases.innerHTML = `Total Cases: ${fetched_data.data.local_total_cases}`;
    total_deaths.innerHTML = `Total Deaths: ${fetched_data.data.local_total_cases}`
    date_and_src.innerHTML = `Last Updated: ${fetched_data.data.update_date_time}   .`;
  })