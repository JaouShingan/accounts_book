import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";

export default class InputMoney extends Component {
    regs = /[0-9\.]/;
    regs1 = /^[0-9]{1,7}$/;
    regs2 = /[0-9]{1,7}\.*[0-9]{0,2}/;
    
    constructor() {
        super();
        this.state = {
            value: (this.props && this.props.value) || ""
        };
        this.onChange = this.onChange.bind(this);
        this.onEndEditing = this.onEndEditing.bind(this);
    }

    onChange({ nativeEvent }) {
        this.setState({
            value: nativeEvent.text
        });
    }
    onEndEditing() {
        const arr = this.regs2.exec(this.state.value);
        let result = 0;
        if (arr) {
            result = arr[0];
        }
        this.setState({
            value: result
        });
        this.props.getMoney(result);
    }
    render() {
        return (
            <TextInput
                value={this.state.value}
                style={[styles.base, this.style]}
                keyboardType="numeric"
                placeholder="0"
                onChange={this.onChange}
                onEndEditing={this.onEndEditing}
            />
        );
    }
}

const styles = StyleSheet.create({
    base: {
        minHeight: 40,
        fontSize: 40,
        textAlign: "right",
        paddingHorizontal: 10
    }
});
