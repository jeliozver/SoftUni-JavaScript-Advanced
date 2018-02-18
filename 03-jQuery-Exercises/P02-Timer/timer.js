function timer() {
    let startBtn = $('#start-timer');
    let pauseBtn = $('#stop-timer');
    let hoursSpan = $('#hours');
    let minutesSpan = $('#minutes');
    let secondsSpan = $('#seconds');

    let timer;
    let tempSeconds = 0;
    let allTimeHours = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let isStarted = false;

    startBtn.on('click', start);
    pauseBtn.on('click', pause);

    function start() {
        if (!isStarted) {
            isStarted = true;
            timer = setInterval(tick, 1000);
        }
    }

    function pause() {
        clearInterval(timer);
        isStarted = false;
    }

    function tick() {
        tempSeconds++;
        hours = allTimeHours;
        minutes = Math.floor(tempSeconds / 60);
        seconds = tempSeconds % 60;

        if (minutes >= 60) {
            minutes = 0;
            tempSeconds = 0;
            allTimeHours++;
        }

        if (hours < 10) hours = '0' + hours;
        if (minutes < 10) minutes = '0' + minutes;
        if (seconds < 10) seconds = '0' + seconds;

        hoursSpan.text(hours);
        minutesSpan.text(minutes);
        secondsSpan.text(seconds);
    }
}

window.onload = function () {
    timer();
};