import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";

export default class InputRemarks extends Component {
    state = {
        value: (this.props && this.props.value) || ""
    };
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.onEndEditing = this.onEndEditing.bind(this);
    }
    onChange({ nativeEvent }) {
        const { text } = nativeEvent;
        this.setState({
            value: text
        });
    }
    onEndEditing() {
        this.props.getRemarks(this.state.value);
    }
    render() {
        return (
            <TextInput
                value={this.state.value}
                placeholder={this.props.placeholder}
                style={[styles.base, this.style]}
                onChange={this.onChange}
                onEndEditing={this.onEndEditing}
            />
        );
    }
}
const styles = StyleSheet.create({
    base: {
        paddingHorizontal: 10
    }
});
