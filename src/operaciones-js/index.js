window.onload = () => {
    getGuiphos('http://api.giphy.com/v1/gifs/search?q=love,sailor mercury&limit=5&api_key=FeH8s28nS47gsfXjis23Brzi6lcQfXOJ').then(response => {

        const suggImg = document.getElementById("prueba")
            //console.log(suggImg)
            //suggImg.setAttribute('src', response.data[0].images.original.url)


        /*const objeto = document.getElementById('main-img')
        const descripcion = document.getElementById('desc-new');
        const parrafo = document.createElement("p");
        const titulo = document.getElementById("title");
        const nombrePersonaje = document.createElement('h1');
        objeto.setAttribute('src', response[0].image)
        parrafo.innerHTML = response[0].quote;
        nombrePersonaje.innerHTML = response[0].character;
        descripcion.appendChild(parrafo);
        titulo.appendChild(nombrePersonaje);*/
    }).catch(error => {
        console.log(error)
    })
}