import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default class Btn extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <TouchableOpacity style={[this.props.style]} onPress={this.props.onPress}>
                <Text style={[styles.text, this.props.text, styles[this.props.type]]}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
    },
    text: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20
    },
    primary: {
        backgroundColor: "#57a3f3",
        color: "#fff"
    },
    default: {
        backgroundColor: "#fff",
        color: "#515a6e"
    }
});
