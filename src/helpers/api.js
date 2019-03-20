const TRAKT_API_KEY = "Your Trakt api key";
const OMDB_API_KEY = "Your OMDB api key";

const OMDB_API_URI = "http://www.omdbapi.com/"; // ex : http://www.omdbapi.com/?i=tt3896198&apikey=a3544
const TRAKT_API_BOXOFFICE = "https://api.trakt.tv/movies/boxoffice"; 

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
    };

 

export default new api();
  