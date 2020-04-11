window.onload = () => {

    //Load suggestion section

    let arrayQuerys = ['jvn', 'golden retriever', 'unicorn', 'cat']
    let suggParent = document.getElementById("suggParent")
    let suggChild = ''

    arrayQuerys.forEach(element => {
        apiConsumption(`http://api.giphy.com/v1/gifs/search?api_key=FeH8s28nS47gsfXjis23Brzi6lcQfXOJ&limit=1&q=${element}&rating=g`).then(response => {
            let url = response.data[0].images.downsized.url
            let tags = response.data[0].title.split(' ', 3)
            suggChild = suggChild + `
            <div class="sugg-item">
                <div class="sugg-item-head">
                    <p class="sugg-text">#${tags[0]} #${tags[1]}</p>
                    <img src="assets/images/button3.svg" alt="">
                </div>
                <div class="sugg-img-cont">
                    <img class="sugg-img" src="${url}" alt="">
                </div>
                <button class="sugg-btn">Ver más...</button>
            </div>`
            suggParent.innerHTML = suggChild
        }).catch(error => {
            console.log(error)
        })

    })

    //Load tendencies section

    apiConsumption('http://api.giphy.com/v1/gifs/trending?api_key=FeH8s28nS47gsfXjis23Brzi6lcQfXOJ&limit=20&rating=pg').then(rpta => {

        let elementos = rpta.data
        let tendParent = document.getElementById("tendParent")
        let tendChild = ''

        elementos.forEach(jsonElement => {
            let url = jsonElement.images.downsized.url
            let tags = jsonElement.title.split(' ', 3)
            tendChild = tendChild + `
            <div class="sugg-item tend-item">
                <div class="tend-img-cont">
                    <img class="sugg-img" src="${url}" alt="">
                </div>
                <div class="tend-item-head">
                    <p class="tend-text">#${tags[0]} #${tags[1]} #${tags[2]}</p>
                </div>
            </div>
            `
            tendParent.innerHTML = tendChild
        })
    })


}


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