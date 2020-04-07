async function getGuiphos(url) {
    try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        console.log(jsonResponse)
        return jsonResponse;
    } catch (error) {
        console.log(error)
    }
}