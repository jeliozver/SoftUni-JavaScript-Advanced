function attachEventsListeners() {
    let daysButton = document.getElementById('daysBtn');
    let hoursButton = document.getElementById('hoursBtn');
    let minutesButton = document.getElementById('minutesBtn');
    let secondsButton = document.getElementById('secondsBtn');

    let daysField = document.getElementById('days');
    let hoursField = document.getElementById('hours');
    let minutesField = document.getElementById('minutes');
    let secondsField = document.getElementById('seconds');

    daysButton.addEventListener('click', calcHMS);
    hoursButton.addEventListener('click', calcDMS);
    minutesButton.addEventListener('click', calcDHS);
    secondsButton.addEventListener('click', calcDHM);
    
    function calcHMS() {
        let days = Number(daysField.value);
        if (isNaN(days)) return;
        hoursField.value = days * 24;
        minutesField.value = days * 1440;
        secondsField.value = days * 86400;
    }

    function calcDMS() {
        let hours = Number(hoursField.value);
        if (isNaN(hours)) return;
        daysField.value = hours / 24;
        minutesField.value = hours * 60;
        secondsField.value = hours * 3600;
    }

    function calcDHS() {
        let minutes = Number(minutesField.value);
        if (isNaN(minutes)) return;
        daysField.value = minutes / 1440;
        hoursField.value = minutes / 60;
        secondsField.value = minutes * 60;
    }

    function calcDHM() {
        let seconds = Number(secondsField.value);
        if (isNaN(seconds)) return;
        daysField.value = seconds / 86400;
        hoursField.value = seconds / 3600;
        minutesField.value = seconds / 60;
    }
}