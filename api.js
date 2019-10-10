import axios from "axios";

baseURL = "https://api.themoviedb.org/3/";
// baseURLv4 = "https://api.themoviedb.org/4/";

const api = axios.create({
    baseURL,
    params: {
        api_key: "43b3051784f073b4bc878a38f5221b27",
        language: "en-US"
    }
});

export const movies = {
    getMovie: id =>
        api.get(`movie/${id}`, { params: { append_to_response: "videos" } }),
    getPopular: () => api.get("movie/popular"),
    getUpcoming: () => api.get("movie/upcoming"),
    getNowPlaying: () => api.get("movie/now_playing"),
    searchMovies: term =>
        api.get("search/movie", {
            params: {
                query: encodeURIComponent(term)
            }
        })
};

export const tv = {
    getShow: id =>
        api.get(`tv/${id}`, { params: { append_to_response: "videos" } }),
    getPopular: () => api.get("tv/popular"),
    getAiringThisWeek: () => api.get("tv/top_rated"),
    getAiringToday: () => api.get("tv/airing_today"),
    searchTv: term =>
        api.get("search/tv", {
            params: {
                query: encodeURIComponent(term)
            }
        })
};
