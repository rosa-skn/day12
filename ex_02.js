document.getElementById('Data').addEventListener('click', () => {
    const url = 'GLB.Ts+dSST.csv';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error: ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('dataDisplay').innerText = data;
        })
        .catch(error => {
            document.getElementById('dataDisplay').innerText = 'Error: ' + error.message;
        });
});
