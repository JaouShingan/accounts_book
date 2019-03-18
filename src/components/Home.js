import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import InOut from './InOut';
export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <InOut navigation={this.props.navigation}></InOut>
                </View>
                <View style={styles.bottom}>
                    <Text>234</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    top: {
        flex: 1,
        backgroundColor: "#fff"
    },
    bottom: {
        flex: 2,
        backgroundColor: "#ccc"
    }
});
