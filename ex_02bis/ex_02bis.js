document.getElementById('Data').onclick = () => {
    fetch('GLB.Ts+dSST.csv')
        .then(response => {
            if (!response.ok) throw new Error('Error: ' + response.status);
            return response.text();
        })
        .then(data => {
            const output = data().split('\n').map(row => {
                const [year, januaryTemp] = row.split(',');
                return year && januaryTemp ? `${year}: ${januaryTemp}` : null;
            }).filter(Boolean);

            let index = 0;
            const displayNextRow = () => {
                document.getElementById('dataDisplay').innerText = 
                    index < output.length ? output[index++] : 'No more data.';
            };

            displayNextRow();
            document.getElementById('Data').onclick = displayNextRow;
        })
        .catch(error => {
            document.getElementById('dataDisplay').innerText = 'Error: ' + error.message;
        });
};

