window.addEventListener('click', () => {
    document.getElementById("song").play();
    // document.getElementById("song").pause();
    document.getElementById("song").volume = -200;
})


// script.js

function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    timeElement.textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 1000);
updateTime();  // initial call to set the time immediately
