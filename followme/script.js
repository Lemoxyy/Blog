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


// script.js

document.getElementById('fb-btn').addEventListener('click', function() {
    window.open('https://www.facebook.com/lemoxyy', '_blank');
});

document.getElementById('x-btn').addEventListener('click', function() {
    window.open('https://x.com/Lemoxyy_', '_blank');
});
document.getElementById('thread-btn').addEventListener('click', function() {
    window.open('https://www.threads.net/@lemoxyy__', '_blank');
});
document.getElementById('insta-btn').addEventListener('click', function() {
    window.open('https://www.instagram.com/lemoxyy__', '_blank');
});
document.getElementById('discord-btn').addEventListener('click', function() {
    window.open('https://discordapp.com/users/669179511186915344', '_blank');
});