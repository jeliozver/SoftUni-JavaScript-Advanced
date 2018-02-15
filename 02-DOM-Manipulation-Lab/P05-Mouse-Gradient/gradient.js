function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');

    gradient.addEventListener('mousemove', calcGradient);
    gradient.addEventListener('mouseout', clear);

    function calcGradient(event) {
        let x = event.offsetX;
        let percent = (x / this.clientWidth) * 100;
        result.textContent = Math.floor(percent) + '%';
    }

    function clear() {
        result.textContent = '';
    }
}