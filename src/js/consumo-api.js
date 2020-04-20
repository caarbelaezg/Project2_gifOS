async function apiConsumption(url) {
    try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.log('Se presentó un error en el consumo del API' + error)
    }
}