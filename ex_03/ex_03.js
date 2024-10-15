function display_planet_info(planet) {
    const li = `<li class="planet">
        Name: ${planet.name}, 
        Diameter: ${planet.diameter}, 
        Climate: ${planet.climate}, 
        Terrain: ${planet.terrain}, 
        Population: ${planet.population}
    </li>`;
    
    $('#planet-list').append(li);
}
fetch('https://swapi.dev/api/planets/')
    .then(response => {
        if (!response.ok) throw new Error('error');
        return response.json();
    })
    .then(data => {
        data.results.forEach(planet => display_planet_info(planet));
    })
    .catch(error => console.error('Error:', error));
