import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import InOut from "./InOut";
import FlatItem from "./FlatItem";
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
                value: 6.5,
                remarks: "this is remarks"
            },
            {
                day: "20190322",
                key: 2,
                inout: "1",
                type: "1@2",
                time: "12:06",
                value: 14.5,
                remarks: "this is remarks"
            },
            {
                day: "20190322",
                key: 3,
                inout: "1",
                type: "1@3",
                time: "19:06",
                value: 18.5,
                remarks: "this is remarks"
            },
            {
                day: "20190322",
                key: 4,
                inout: "2",
                type: "1@3",
                time: "16:06",
                value: 100,
                remarks: "this is remarks"
            }
        ]
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <InOut navigation={this.props.navigation} />
                </View>
                <View style={styles.bottom}>
                    <FlatList
                        data={this.state.list}
                        keyExtractor={(item, index) => index + ""}
                        renderItem={({ item }) => <FlatItem data={item} />}
                    />
                </View>
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
