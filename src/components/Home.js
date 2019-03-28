import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, ToastAndroid } from "react-native";
import InOut from "./InOut";
import FlatItem from "./FlatItem";
import AddBtn from "./AddBtn";
// import Base from "../storage/base";

// const sqLite = new Base();
// let db = null;
export default class Home extends Component {
    static navigationOptions = {
        title: "Home"
    };
    state = {
        list: [
            {
                day: "20190322",
                key: 1,
                inout: "1",
                type: "1@1",
                time: "8:06",
                money: 6.5,
                remarks: "this is remarks"
            },
            {
                day: "20190322",
                key: 2,
                inout: "1",
                type: "1@2",
                time: "12:06",
                money: 14.5,
                remarks: "this is remarks"
            },
            {
                day: "20190322",
                key: 3,
                inout: "1",
                type: "1@3",
                time: "19:06",
                money: 18.5,
                remarks: "this is remarks"
            },
            {
                day: "20190322",
                key: 4,
                inout: "2",
                type: "1@3",
                time: "16:06",
                money: 100,
                remarks: "this is remarks"
            }
        ]
    };
    componentWillMount() {
        // ToastAndroid.show("Home componentWillMount", ToastAndroid.SHORT);
        // if (!db) {
        //     db = sqLite.open();
        // }
    }
    compennetDidUnmount() {
        // ToastAndroid.show("Home compennetDidUnmount", ToastAndroid.SHORT);
        // sqLite.close();
    }
    addPress() {
        this.props.navigation.navigate("InOutDetail");
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <InOut />
                </View>
                <View style={styles.bottom}>
                    <FlatList
                        data={this.state.list}
                        keyExtractor={(item, index) => index + ""}
                        renderItem={({ item }) => <FlatItem data={item} />}
                    />
                </View>
                <AddBtn onPress={this.addPress.bind(this)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
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
