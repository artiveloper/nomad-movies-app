import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import Loader from "../components/Loader";
import {inject, observer} from "mobx-react";

class TV extends React.Component {

    componentDidMount() {
        try {
            this.props.TVStore.fetchTV();
        } catch (e) {

        } finally {

        }
    }

    render() {

        const {isLoading, error} = this.props.TVStore;

        return (
            isLoading ? <Loader/> :
                <View>
                    <Text>TV</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Detail")}>
                        <Text>Go To Detail.</Text>
                    </TouchableOpacity>
                </View>
        )
    }
}

export default inject("TVStore")(observer(TV))
