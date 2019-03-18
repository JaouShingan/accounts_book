/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./src/components/Home";
import AddInOut from "./src/components/AddInOut";
import TypeList from "./src/components/TypeList";

const instructions = Platform.select({
    ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
    android:
        "Double tap R on your keyboard to reload,\n" +
        "Shake or press menu button for dev menu"
});
const AppNavigator = createStackNavigator(
    {
        Home: Home,
        AddInOut: AddInOut
    },
    {
        initialRouteName: "Home"
    }
);
export default createAppContainer(AppNavigator);
// class App extends Component {
//   render() {
//     return (
//       <TypeList></TypeList>
//     );
//   }
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
