const API_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY =  'rWUcALWkCwlA1p0Xgqtd7XPxqAQ5pCT2';

const TRENDING = API_URL + "/trending?api_key=" + API_KEY + "&limit=32";
const SEARCH = API_URL + "/search?api_key=" + API_KEY + "&q=";
const AUTOCOMPLETE = API_URL + "/search/tags?api_key=" + API_KEY + "&limit=3" + "&q=";
const GET_BY_IDS = API_URL + "?api_key=" + API_KEY + "&" + "ids=";
