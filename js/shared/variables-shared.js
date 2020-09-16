const API_BASE_URL =  'http://api.giphy.com/v1/gifs';
const API_KEY =  'rWUcALWkCwlA1p0Xgqtd7XPxqAQ5pCT2';


const TRENDING = API_BASE_URL + "/trending?api_key=" + API_KEY + "&limit=30";
const SEARCH = API_BASE_URL + "/search?api_key=" + API_KEY + "&q=";
const AUTOCOMPLETE = API_BASE_URL + "/search/tags?api_key=" + API_KEY + "&limit=3" + "&q=";
const GET_BY_IDS = API_BASE_URL + "?api_key=" + API_KEY + "&" + "ids=";