import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class FlatItem extends Component {
    INOUT = {
        1: "收入",
        2: "支出"
    };
    render() {
        return (
            <View style={[style.base]}>
                <Text style={[style.text, style.inout]}>
                    {this.INOUT[this.props.data.inout]}
                </Text>
                <Text style={[style.text, style.time]}>
                    {this.props.data.time}
                </Text>
                <Text style={[style.text, style.money]}>
                    {this.props.data.money}
                </Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    base: {
        flex: 1,
        flexDirection: "row",
        minHeight: 30,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff',
        marginTop: 10,
        marginHorizontal: 5
    },
    text: {
        fontSize: 26,
        textAlign: "left",
        textAlignVertical: "center"
    },
    inout: {
        flex: 1
    },
    time: {
        flex: 1
    },
    money: {
        flex: 2,
        textAlign: "right"
    }
});
