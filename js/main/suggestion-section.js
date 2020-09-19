const gifPositions = [
  "suggested__gif__img1",
  "suggested__gif__img2",
  "suggested__gif__img3",
  "suggested__gif__img4",
];

const hashTags = ["hashtag1", "hashtag2", "hashtag3", "hashtag4"];

const defaultTerms = [
  "Golden retriever",
  "League of legends",
  "Drag Race",
  "Coding",
];

const seeMoreBtns = [
  document.getElementById("see__more1"),
  document.getElementById("see__more2"),
  document.getElementById("see__more3"),
  document.getElementById("see__more4"),
];

const loadSuggestedGifs = () => {
  defaultTerms.sort((a, b) => 0.5 - Math.random());
  defaultTerms.forEach(async (element, index) => {
    const searchUrl = SEARCH + element;
    const gif = await createGifObjectsArray(searchUrl);
    const img = document.getElementById(gifPositions[index]);
    img.setAttribute("src", gif[index].url);
    img.setAttribute("alt", gif[index].title);
    const hashtag = document.getElementById(hashTags[index]);
    hashtag.innerHTML = "#" + defaultTerms[index];
    searchOnVerMas();
  });
};

const searchOnVerMas = () => {
    seeMoreBtns.forEach((element, index) => {
    element.onclick = () => {
      loadSection(SEARCH + defaultTerms[index], "result__gifs__container");
      sessionSearches.unshift(defaultTerms[index]);
      sessionStorage.setItem(
        "sessionSearches",
        JSON.stringify(sessionSearches)
      );
      document.getElementById("results__intro").innerHTML =
        "Resultados: (" + defaultTerms[index] + ")";
      const resultsSection = document.getElementById("results");
      resultsSection.style.display = "block";
      resultsSection.scrollIntoView();
      loadRecentSearches();
    };
  });
};
