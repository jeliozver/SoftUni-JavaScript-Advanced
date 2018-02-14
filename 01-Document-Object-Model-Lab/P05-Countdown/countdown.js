// window.onload = function() {
//     countdown(5);
// };

function countdown(sec) {
    setInterval(() => {
        sec--;
        let minutes = Math.floor(sec / 60);
        let seconds = sec % 60;
        if (minutes < 0) return;
        document.getElementById('time').value =
            minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
    }, 1000)
}