import React from 'react';
import {StatusBar} from "react-native";
import {AppLoading} from "expo";
import * as Font from 'expo-font';
import {Ionicons} from "@expo/vector-icons";
import MainNavigation from "./src/navigation/MainNavigation";
import {Provider} from "mobx-react";
import MovieStore from "./src/stores/MovieStore";

const stores = {
    MovieStore
};

export default class App extends React.Component {

    state = {
        loaded: false
    };

    loadAssets = async () => {
        await Font.loadAsync({
            ...Ionicons.font
        })
    };

    handleError = error => console.log(error);
    handleLoaded = () => this.setState({loaded: true});

    render() {
        const {loaded} = this.state;

        if (loaded) {
            return (
                <>
                    <Provider {...stores}>
                        <StatusBar barStyle="light-content"/>
                        <MainNavigation/>
                    </Provider>
                </>
            );
        } else {
            return (
                <AppLoading
                    startAsync={this.loadAssets}
                    onFinish={this.handleLoaded}
                    onError={this.handleError}
                />
            )
        }
    }

}
