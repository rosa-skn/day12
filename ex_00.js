async function my_fetch() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528';
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

my_fetch();
