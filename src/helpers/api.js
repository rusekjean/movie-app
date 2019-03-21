const TRAKT_API_KEY = "9fb6768bcb7f15e967cffa69317a716bbf3158818bc3922ec186c5294e3486e3";
const OMDB_API_KEY = "a3544516";

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
  