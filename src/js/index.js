window.onload = () => {

    //Load suggestion section
    let arrayQuerys = ['Jonathanvanness', 'golden retriever', 'unicorn', 'cat']
    let suggParent = document.getElementById("suggParent")
    let suggChild = ''

    arrayQuerys.forEach(element => {
        apiConsumption(parameters.API_BASE_URL + '/search?api_key=' + parameters.API_KEY + `&limit=1&q=${element}&rating=g`).then(response => {
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

    apiConsumption(parameters.API_BASE_URL + '/trending?api_key=' + parameters.API_KEY + '&limit=20&rating=pg').then(rpta => {

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
let query = ''
let search = document.getElementById("search")
search.oninput = (event) => {
    query = event.srcElement.value
    if (query != '') {
        styleSearchBar(1)
            //API consumption
        let itemsToFill = document.querySelectorAll('button.search-sugg-item > p')
        apiConsumption(parameters.API_BASE_URL + '/search/tags?api_key=' + parameters.API_KEY + `&q=${query}`).then(answer => {
            for (let i = 0; i <= 2; i++) {
                try {
                    itemsToFill[i].innerHTML = answer.data[i].name
                } catch (error) {
                    console.log('Imposible extraer datos de la respuesta, error: ' + error)
                }
            }
        })
    } else {
        styleSearchBar(0)
    }
}

/*-----------Search gifs-------------*/

let searchGifs = () => {

    hideSuggOnSearch()
    styleSearchBar(0)

    let query = document.getElementById('search').value


    //Cliean current tend section
    let tendParent = document.getElementById("tendParent")
    tendParent.innerHTML = ''

    console.log(query)
    apiConsumption(parameters.API_BASE_URL + '/search?api_key=' + parameters.API_KEY + `&limit=20&q=${query}&rating=g`).then(response => {

        document.getElementById('tend-text').innerHTML = query + '(Resultados)'
        let elementos = response.data
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








/*let changeThemes = () => {
    let cont = document.getElementById('themes')
    cont.addEventListener('click', () => {
        if (!cont.classList.contains('open')) {
            cont.classList.add('open')
        } else {
            cont.classList.remove('open')
        }
    })

*/