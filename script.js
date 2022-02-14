function digitalClock() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let timeFormat = 'AM';

    let finalTime = `${hours}:${minutes}:${seconds}`

    document.getElementById('time').innerText = finalTime;
    document.getElementById('ampm').innerText = timeFormat;
    setInterval(digitalClock, 1000);
}
digitalClock();