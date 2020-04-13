window.onload = () => {

    //Load suggestion section

    let arrayQuerys = ['Jonathanvanness', 'golden retriever', 'unicorn', 'cat']
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

/*-----------Autocomplete search suggestions-------------*/
let search = document.getElementById("search")
let query = ''
let sugerencia = document.getElementById("search-sugg-cont")
let lupa = document.getElementById("lupa")
let btn = document.getElementById("search-btn")

//Identificar el error que se está genernado al consumir el servicio
search.oninput = (event) => {
    query = event.srcElement.value
    if (query != '') {
        // change atributes
        sugerencia.setAttribute('style', 'display:flex')
        search.setAttribute("style", "color:black")
        lupa.setAttribute('src', 'assets/images/lupa.svg')
        btn.setAttribute('style', 'background-color:#F7C9F3')

        //API consumption
        let itemsToFill = document.querySelectorAll('button.search-sugg-item > p')
        apiConsumption(`http://api.giphy.com/v1/gifs/search/tags?api_key=FeH8s28nS47gsfXjis23Brzi6lcQfXOJ&q=${query}`).then(answer => {
            for (let i = 0; i <= 2; i++) {
                try {
                    itemsToFill[i].innerHTML = answer.data[i].name
                } catch {
                    console.log('Imposible extraer datos de la respuesta' + answer.data[i].name)
                }
            }
        }).catch(
            console.log('imposible consumir servicio con el query: ' + query)
        )
    } else {
        sugerencia.setAttribute('style', 'display:none')
        lupa.setAttribute('src', 'assets/images/lupa_inactive.svg')
        btn.setAttribute('style', 'background-color:#E6E6E6')
    }
}

let searchGifs = () => {
    let query = document.getElementById('search').innerHTML
    apiConsumption(`http://api.giphy.com/v1/gifs/search?api_key=FeH8s28nS47gsfXjis23Brzi6lcQfXOJ&limit=1&q=${query}&rating=g`).then(response => {

    })


}