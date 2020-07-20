import axios from 'axios';

// its a default import, thats why we can use the name axios

/** base url to make requests to the movie database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance; 