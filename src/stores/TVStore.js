import {action, observable} from "mobx";
import {tvApi} from "../apis/api";

class TVStore {

    @observable
    isLoading = true;

    @observable
    error = true;

    @observable
    values = {
        topRated: null,
        popular: null,
        airingToday: null
    };

    @action
    fetchTV = async () => {
        let topRated, popular, airingToday;
        try {
            ({data: {results: topRated}} = await tvApi.topRated());
            ({data: {results: popular}} = await tvApi.popular());
            ({data: {results: airingToday}} = await tvApi.airingToday());
            this.values.topRated = topRated;
            this.values.popular = popular;
            this.values.airingToday = airingToday;
        } catch (e) {
            this.error = "Can't get TV."
        } finally {
            this.isLoading = false;
        }
    }

}

export default new TVStore();
