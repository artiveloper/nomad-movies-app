import React from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import {BG_COLOR, TINT_COLOR} from "../constants/Colors";

export default () => (
    <View style={styles.container}>
        <ActivityIndicator
            color={TINT_COLOR}
            size="large"
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: BG_COLOR
    }
});
