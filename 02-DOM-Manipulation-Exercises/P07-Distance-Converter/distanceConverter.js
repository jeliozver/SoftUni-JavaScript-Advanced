function attachEventsListeners() {
    let convertButton = document.getElementById('convert');
    let inputUnits = document.getElementById('inputUnits');
    let outputUnits = document.getElementById('outputUnits');
    let input = document.getElementById('inputDistance');
    let output = document.getElementById('outputDistance');

    convertButton.addEventListener('click', convert);

    function convert() {
        let inputUnit = inputUnits.selectedIndex;
        let outputUnit = outputUnits.selectedIndex;

        let inputData = Number(input.value);
        if (isNaN(inputData)) return;
        let outputData = 0;

        switch (inputUnit) {
            case 0: outputData = inputData * 1000; break;
            case 1: outputData = inputData; break;
            case 2: outputData = inputData * 0.01; break;
            case 3: outputData = inputData * 0.001; break;
            case 4: outputData = inputData * 1609.34; break;
            case 5: outputData = inputData * 0.9144; break;
            case 6: outputData = inputData * 0.3048; break;
            case 7: outputData = inputData * 0.0254; break;
        }

        switch (outputUnit) {
            case 0: output.value = outputData / 1000; break;
            case 1: output.value = outputData; break;
            case 2: output.value = outputData / 0.01; break;
            case 3: output.value = outputData / 0.001; break;
            case 4: output.value = outputData / 1609.34; break;
            case 5: output.value = outputData / 0.9144; break;
            case 6: output.value = outputData / 0.3048; break;
            case 7: output.value = outputData / 0.0254; break;
        }
    }
}