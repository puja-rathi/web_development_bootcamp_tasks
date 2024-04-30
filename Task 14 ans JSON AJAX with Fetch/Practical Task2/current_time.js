function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let timeString = hours + ':' + minutes + ':' + seconds;
    let clock = document.getElementById('clock');

    //css for clock div
    clock.style.cssText = 'text-align:center;font-size:30px;font-style:bold;padding:20%';
    //set time in div
    clock.textContent = timeString;
}

// Initial call to display time
updateClock();

// Update time every second
setInterval(updateClock, 1000);