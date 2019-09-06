import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {inject, observer} from "mobx-react";

const Movie = ({MovieStore, navigation}) => (
    <View>
        <Text>MOVIE</Text>
        <Text>{MovieStore.test}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
            <Text>Go To Detail.</Text>
        </TouchableOpacity>
    </View>
);

export default inject("MovieStore")(observer(Movie))
