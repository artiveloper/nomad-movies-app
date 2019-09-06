import {action, observable} from "mobx";
import {moviesApi} from "../apis/api";

class MovieStore {

    @observable
    movies = [];

    @observable
    test = "mobx test";

    @action
    fetchMovie = () => {

    }

}

export default new MovieStore();
