function create(sentences) {
    let content = document.getElementById('content');
    for (let text of sentences) {
        let newDiv = document.createElement('div');
        let newPar = document.createElement('p');
        newPar.textContent = text;
        newPar.style.display = 'none';
        newDiv.addEventListener('click', show);
        newDiv.appendChild(newPar);
        content.appendChild(newDiv);

        function show() {
            newPar.style.display = 'block';
        }
    }
}