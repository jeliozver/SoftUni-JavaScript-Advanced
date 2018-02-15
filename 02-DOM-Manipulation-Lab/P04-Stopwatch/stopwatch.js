// window.onload = function () {
//     stopwatch();
// };

function stopwatch() {
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
	let output = document.getElementById('time');

    startBtn.addEventListener('click', start);
    stopBtn.addEventListener('click', stop);

    let timer;
    let sec = 0;

    function start() {
		output.textContent = '00:00';
        startBtn.disabled = true;
        stopBtn.disabled = false;
        timer = setInterval(tick, 1000);
    }

    function stop() {
        startBtn.disabled = false;
        stopBtn.disabled = true;
        clearInterval(timer);
        sec = 0;
    }

    function tick() {
        sec++;
        let minutes = Math.floor(sec / 60);
        let seconds = sec % 60;
        if (minutes < 10) minutes = '0' + minutes;
        if (seconds < 10) seconds = '0' + seconds;
        output.textContent = minutes + ':' + seconds;
    }
}