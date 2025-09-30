const countdownDate = new Date("2025-10-04T00:00:00").getTime();

// Update the countdown every second
const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // If the countdown is over, stop the timer and display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").textContent = "The big day is here!";
    }
}, 1000);

window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.style.opacity = 1;
        }
    });
});
