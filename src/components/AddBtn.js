import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class AddBtn extends Component {
    render() {
        return (
            <View style={[styles.base]}>
                <Text style={[styles.text]} onPress={this.props.onPress}>+</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    base: {
        position: "absolute",
        right: 20,
        top: "85%",
        width: 60,
        height: 60
    },
    text: {
        flex: 1,
        borderRadius: 30,
        backgroundColor: "red",
        fontSize: 26,
        textAlign: "center",
        textAlignVertical: "center",
        color: "#fff",
        fontWeight: "bold"
    }
});
