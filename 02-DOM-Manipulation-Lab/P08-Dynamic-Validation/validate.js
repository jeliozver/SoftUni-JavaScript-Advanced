function validate() {
    let regex = /^[a-z]+@[a-z]+.[a-z]+$/;
    let input = document.getElementById('email');
    input.addEventListener('change', isValid);

    function isValid() {
        let match = regex.test(this.value);
        if (match) {
            input.removeAttribute('class');
        } else {
            input.className = 'error';
        }
    }
}