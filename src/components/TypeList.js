import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

export default class TypeList extends Component {
    state = {
        level1: [
            {
                id: 1,
                // key: '1',
                name: "餐饮"
            },
            {
                id: 2,
                // key: '2',
                name: "购物"
            },
            {
                id: 3,
                // key: '3',
                name: "游戏"
            },
            {
                id: 4,
                // key: '4',
                name: "日用品"
            },
            {
                id: 5,
                // key: '5',
                name: "交通"
            },
            {
                id: 6,
                // key: '6',
                name: "五金"
            },
            {
                id: 7,
                // key: '7',
                name: "住房"
            },
            {
                id: 8,
                // key: '8',
                name: "娱乐"
            },
            {
                id: 9,
                // key: '9',
                name: "往来"
            }
        ]
    };
    render() {
        const keyExtractor = (item, index) => item.id + "";
        return (
            <View style={styles.container}>
                <View style={styles.l1Area}>
                    <FlatList
                        data={this.state.level1}
                        keyExtractor={keyExtractor}
                        renderItem={({ item, index }) => (
                            <Text style={[styles.text, styles.l1Text]}>
                                {item.name}
                            </Text>
                        )}
                    />
                </View>
                <View style={styles.l2Area}>
                    <FlatList
                        data={this.state.level1}
                        keyExtractor={keyExtractor}
                        renderItem={({ item, index }) => (
                            <Text style={[styles.text, styles.l2Text]}>{item.name}</Text>
                        )}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },
    // header: {
    //     flex: 
    // },
    // content: {
    //     flex: 1
    // },
    l1Area: {
        flex: 1,
        borderRightWidth: 2,
        borderRightColor: '#fff'
    },
    l2Area: {
        flex: 1
    },
    text: {
        textAlign: "center",
        textAlignVertical: "center"
    },
    l1Text: {
        height: 40,
        backgroundColor: "#ccc",
        borderBottomWidth: 1,
        borderBottomColor: "#fff"
    },
    l2Text: {
        height: 40,
        backgroundColor: "#ccc",
        borderBottomWidth: 1,
        borderBottomColor: "#fff"
    }
});
