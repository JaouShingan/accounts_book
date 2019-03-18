import React, { Component } from "react";
import { StyleSheet, View, Text, ToastAndroid } from "react-native";
import Btn from "./Btn";

export default class KeyBoard extends Component {
    state = {
        keylist: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "."],
        clickedKey: null,
        result: '0'
    };
    constructor() {
        super();
        this.keyClick = this.keyClick.bind(this);
    }
    keyClick(key) {
        let result = this.state.result;
        if (key === "C") {
            result = '0';
        } else if (
            (key === "." && result.includes(".")) ||
            /[0-9]+\.[0-9]{2}/.test(result) ||
            (/[0-9]{8,}/.test(result) && key !== "." && !result.includes(".")) || /[0-9]{8,}\.[0-9]{2}/.test(result)
        ) {
            result = result;
        } else {
            result += key;
        }
        if (/^0[0-9]+.*/.test(result)) {
            result = result.substr(1);
        }
        this.setState({
            result
        }, state => this.props.result(this.state.result));
    }
    render() {
        const list = this.state.keylist.map((item, index) => (
            <Btn
                style={[styles.key]}
                text={{ fontSize: 30 }}
                title={item}
                key={index}
                onPress={() => this.keyClick(item)}
            />
        ));
        return <View style={styles.container}>{list}</View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    key: {
        width: "33.3%",
        height: "25%",
        backgroundColor: "#ccc"
    },
    clicked: {
        backgroundColor: "#57a3f3"
    }
});
