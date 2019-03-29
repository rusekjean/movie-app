const TRAKT_API_KEY = "463316ff7604fd9db9ac8852d77e019ae3ed3976e49d99315b4485c9c719ec2e";
const OMDB_API_KEY = "abb47c96";

const OMDB_API_URI = "http://www.omdbapi.com/"; // ex : http://www.omdbapi.com/?i=tt3896198&apikey=a3544
const TRAKT_API_BOXOFFICE = "https://api.trakt.tv/movies/boxoffice";
const TRAKT_API_POPULAR = "https://api.trakt.tv/movies/popular";


/*
SET HEADERS FOR TRAKT API
Content-Type:application/json
trakt-api-version:2
trakt-api-key:[client_id]
*/

class api {
    async getBoxOffice() {
        const options = {
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'trakt-api-version':'2',
                'trakt-api-key': TRAKT_API_KEY
            }
        }
        const response = await fetch(TRAKT_API_BOXOFFICE, options);
        const json = await response.json();
        return json;
    }
    async getMovieById(idM) {
        var omdburl = OMDB_API_URI;
        omdburl += "?i=";
        omdburl += idM;
        omdburl += "&apikey=";
        omdburl += OMDB_API_KEY;

        const response = await fetch(omdburl);
        const json = await response.json();
        return json;
        }

    async getMovieByTitle(title) {
        var omdburl = OMDB_API_URI;
        omdburl += "?t=";
        omdburl += title;
        omdburl += "&apikey=";
        omdburl += OMDB_API_KEY;

        const response = await fetch(omdburl);
        const json = await response.json();
        return json;
        }
    async getPopular() {
        const options = {
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'trakt-api-version':'2',
                'trakt-api-key': TRAKT_API_KEY
            }
        }
        const response = await fetch(TRAKT_API_POPULAR, options);
        const json = await response.json();
        return json;
    };
}

export default new api();
  