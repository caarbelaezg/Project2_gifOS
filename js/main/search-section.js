let sessionSearches = [];
const searchButton = document.getElementById("search__button");

const setSearchSection = () => {
  document.getElementById("search__input").onkeyup = () => {
    let length = document.getElementById("search__input").value.length;
    if (length === 0) {
      document.getElementById("search__suggestion__container").style.display = "none";
      searchButton.removeAttribute("class");
      searchButton.disabled = true;
    } else if (event.keyCode === 13) {
      inputSearch();
      searchButton.removeAttribute("class");
      searchButton.disabled = true;
    } else {
      document.getElementById("search__suggestion__container").style.display = "flex";
      searchButton.setAttribute("class", "search-button-focus");
      searchButton.disabled = false;
    }
  };

};

//search on search button click
const searchOnButtonPress = () => {
  searchButton.onclick = () => {
    const empty = document.getElementById("search__input").value;
    if (empty !== "") {
      inputSearch();
      searchButton.removeAttribute("class");
      searchButton.disabled = true;
    }
  };
};

//action to be perfmormed when a search using input is needed
const inputSearch = () => {
  const searchTerm = document.getElementById("search__input").value;
  const searchUrl = SEARCH + searchTerm;
  loadSection(searchUrl, "result__gifs__container");
  sessionSearches.unshift(searchTerm);
  sessionStorage.setItem("sessionSearches", JSON.stringify(sessionSearches));
  document.getElementById("results-intro").innerHTML =
    "Resultados: (" + searchTerm + ")";
  const resultsSection = document.getElementById("results");
  resultsSection.style.display = "flex";
  resultsSection.scrollIntoView();
  const onSearch = document.getElementById("search__suggestion__container");
  onSearch.style.display = "none";
  loadRecentSearches();
  document.getElementById("search__input").value = "";
};

//search on autocomplete click
const createNamesArray = async (url) => {
  const data = await apiFetch(url);
  if (data) {
    let namesArray = [];
    data.forEach((element, index) => {
      namesArray.push(data[index].name);
    });
    return namesArray;
  } else {
    console.log("Error in fetch response");
    document.getElementById("wrong").style.display = "block";
  }
};

const loadNames = async (url) => {
  const posArray = ["result1", "result2", "result3"];
  const array = await createNamesArray(url);
  array.forEach(async (element, index) => {
    let result = document.getElementById(posArray[index]);
    result.innerHTML = element;
  });
};

const loadAutocomplete = () => {
  const inputField = document.getElementById("search__input");
  inputField.oninput = function () {
    const term = document.getElementById("search__input").value;
    const url = AUTOCOMPLETE + term;
    loadNames(url);
  };
};

//search on suggestion click
const searchSuggestionBased = () => {
  const suggestionAarray = [
    document.getElementById("result1"),
    document.getElementById("result2"),
    document.getElementById("result3"),
  ];
  suggestionAarray.forEach((element) => {
    element.onclick = () => {
      loadSection(SEARCH + element.innerHTML, "result__gifs__container");
      sessionSearches.unshift(element.innerHTML);
      sessionStorage.setItem(
        "sessionSearches",
        JSON.stringify(sessionSearches)
      );
      document.getElementById("results__intro").innerHTML =
        "Resultados: (" + element.innerHTML + ")";
      document.getElementById("search__input").value = "";
      const onSearch = document.getElementById("search__suggestion__container");
      onSearch.style.display = "none";
      searchButton.removeAttribute("class");
      searchButton.disabled = true;
      const resultsSection = document.getElementById("results");
      resultsSection.style.display = "block";
      resultsSection.scrollIntoView();
    };
  });
};


const loadSearchSection = () => {
  setSearchSection();
  loadAutocomplete();
  searchOnButtonPress();
  searchSuggestionBased();
};
