Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

//makes the countdown to 2023
let countdown_element = document.getElementById("countdown");

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
    colors = ["main-blue", "main-red", "main-green", "main-yellow"];
    countdown_element.classList.toggle(colors.random());
}, 1000);
