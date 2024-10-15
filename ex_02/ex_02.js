document.getElementById('Data').addEventListener('click', () => {
    const url = 'GLB.Ts+dSST.csv'; //j'arrive pas a le faire marcher, je pense que c'est a cause de la serveur qui bloque, j'ai testé avec le url du doc aussi le convertir en json mais aucun de ces methodes marchent. ici j'ai  lié le csv avec mon js. 
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
