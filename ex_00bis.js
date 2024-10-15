async function  check_route() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528';
    try {
        const response = await fetch(url);
           const data = await response.json();
        console.log('All is good!');
    } catch (error) {
        console.error('shit happens:', error);
    }
}
check_route();
