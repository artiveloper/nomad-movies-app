import {action, observable} from "mobx";
import {moviesApi} from "../apis/api";

class MovieStore {

    @observable
    isLoading = true;

    @observable
    error = true;

    @observable
    values = {
        nowPlaying: null,
        popular: null,
        upComing: null
    };

    @action
    fetchMovie = async () => {
        let nowPlaying, popular, upComing;
        try {
            ({data: {results: nowPlaying}} = await moviesApi.nowPlaying());
            ({data: {results: popular}} = await moviesApi.popular());
            ({data: {results: upComing}} = await moviesApi.upComing());
            this.values.nowPlaying = nowPlaying;
            this.values.popular = popular;
            this.values.upComing = upComing;
        } catch (e) {
            this.error = "Can't get Movies."
        } finally {
            this.isLoading = false;
        }
    }

}

export default new MovieStore();
