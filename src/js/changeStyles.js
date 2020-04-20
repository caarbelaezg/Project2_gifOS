let styleSearchBar = (param) => {

    const sugerencia = document.getElementById("search-sugg-cont")
    const lupa = document.getElementById("lupa")
    const btn = document.getElementById("search-btn")

    if (param === 1) {
        // change atributes on input change
        sugerencia.setAttribute('style', 'display:flex')
        search.setAttribute("style", "color:black")
        lupa.setAttribute('src', 'assets/images/lupa.svg')
        btn.setAttribute('style', 'background-color:#F7C9F3')
        btn.disabled = false
    } else {
        //Restores the default styles when input bar is empty
        sugerencia.setAttribute('style', 'display:none')
        lupa.setAttribute('src', 'assets/images/lupa_inactive.svg')
        btn.setAttribute('style', 'background-color:#E6E6E6')
        btn.disabled = true
    }
}

let hideSuggOnSearch = () => {
    const suggCont = document.getElementById("suggestion")
    suggCont.setAttribute('style', 'display:none')

}