const styleSearchBar = (param) => {

    const sugerencia = document.getElementById("search-sugg-cont")
    const lupa = document.getElementById("lupa")
    const btn = document.getElementById("search-btn")

    if (param === 1) {
        // change atributes on input change
        sugerencia.setAttribute('style', 'display:flex')
        search.setAttribute("style", "color:black")
        lupa.setAttribute('src', 'public/assets/images/lupa.svg')
        btn.setAttribute('style', 'background-color:#F7C9F3')
        btn.disabled = false
    } else {
        //Restores the default styles when input bar is empty
        sugerencia.setAttribute('style', 'display:none')
        lupa.setAttribute('src', 'public/assets/images/lupa_inactive.svg')
        btn.setAttribute('style', 'background-color:#E6E6E6')
        btn.disabled = true
    }
}

let hideSuggOnSearch = () => {
    const suggCont = document.getElementById("suggestion")
    suggCont.setAttribute('style', 'display:none')

}

let hideChangeTheme = () => {
    let them = document.getElementById('themes')
    them.classList.remove('open')
}

let changeImagesThemes = () => {
    let cssLink = document.getElementById('cssTheme')
    let theme = cssLink.getAttribute('href')
    const logo = document.getElementById('logo')
    const drop = document.getElementById('dropdown')
    const lupa = document.getElementById('lupa')

    if (theme === 'assets/css/stylesNight.css') {
        logo.setAttribute('src', 'public/assets/images/gifOF_logo_dark.png')
        lupa.setAttribute('src', 'public/assets/images/lupa_light.svg')
    } else {
        logo.setAttribute('src', 'public/assets/images/gifOF_logo.png')
        lupa.setAttribute('src', 'public/assets/images/lupa_inactive.svg')
    }
}

let hideInstructions = () => {
    const startButton = document.getElementById('instructions')
    const captureCont = document.getElementById('capture')
    startButton.setAttribute('style', 'display:none')
    captureCont.setAttribute('style', 'display:flex')
}