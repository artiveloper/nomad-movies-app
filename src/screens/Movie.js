import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {inject, observer} from "mobx-react";
import Loader from "../components/Loader";

class Movie extends React.Component {

    componentDidMount() {
        try {
            this.props.MovieStore.fetchMovie();
        } catch (e) {

        } finally {

        }
    }

    render() {

        const {isLoading, error} = this.props.MovieStore;

        return (
            isLoading ? <Loader/> :
                <View>
                    <Text>MOVIE</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Detail")}>
                        <Text>Go To Detail.</Text>
                    </TouchableOpacity>
                </View>
        )
    }
}

export default inject("MovieStore")(observer(Movie))
