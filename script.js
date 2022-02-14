function digitalClock() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let timeFormat = 'AM';
    if (hours === 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        timeFormat = 'PM';
    }
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let finalTime = `${hours}:${minutes}:${seconds}`;

    document.getElementById('time').innerText = finalTime;
    document.getElementById('ampm').innerText = timeFormat;
    setInterval(digitalClock, 1000);
}
digitalClock();