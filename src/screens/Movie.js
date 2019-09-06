import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";

export default ({navigation}) => (
    <View>
        <Text>MOVIE</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
            <Text>Go To Detail.</Text>
        </TouchableOpacity>
    </View>
);
