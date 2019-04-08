import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, ToastAndroid } from "react-native";
import InOut from "./InOut";
import FlatItem from "./FlatItem";
import AddBtn from "./AddBtn";
import Storage from "../storage";
import utils from "../utils";

export default class Home extends Component {
    static navigationOptions = {
        title: "Home"
    };
    state = {
        in: 0,
        out: 0,
        list: []
    };

    componentDidMount() {
        Storage.createTableAccounts().then(() => {}).finally(() => {
            // Storage.close();
        });
        // Storage.clearTableAccounts().then((r) => {
        //     ToastAndroid.show(`${JSON.stringify(r)}`, ToastAndroid.LONG);
        // }).catch(e => {
        //     ToastAndroid.show(`${JSON.stringify(e)}`, ToastAndroid.LONG);
        // })
        this.getList(utils.currentDay());
    }
    componentWillMount() {}
    compennetDidUnmount() {}
    addPress() {
        this.props.navigation.navigate("InOutDetail");
    }
    getList(date) {
        Storage.selectAccounts(date)
            .then(result => {
                const { rows } = result.resultSet;
                const temp = [];
                let tempIn = 0;
                let tempOut = 0;
                for (let i = 0; i < rows.length; i++) {
                    const t = rows.item(i);
                    t.date = utils.formatDate(t.date);
                    temp.push(t);
                    if (t.inout === 1) {
                        tempOut = tempOut + t.money;
                    } else {
                        tempIn = tempIn + t.money;
                    }
                    ToastAndroid.show(
                        `${typeof t.money}\n${typeof t.inout}`,
                        ToastAndroid.SHORT
                    );
                }
                // ToastAndroid.show(`result date: ${new Date(result.date)}, \n curre n t   : ${new Date()},\n templength: ${temp.length}`, ToastAndroid.LONG);
                // ToastAndroid.show(`temp: ${JSON.stringify(temp)}`, ToastAndroid.SHORT);
                this.setState({
                    in: tempIn,
                    out: tempOut,
                    list: temp
                });
            })
            .catch((err, d) => {
                // ToastAndroid.show(`err: ${JSON.stringify(err)}, ${d}`, ToastAndroid.LONG);
            })
            .finally(() => {
                // Storage.close();
            });
    }
    onRefresh() {
        this.getList(utils.currentDay());
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <InOut in={this.state.in} out={this.state.out} />
                </View>
                <View style={styles.bottom}>
                    <FlatList
                        refreshing={false}
                        onRefresh={this.onRefresh.bind(this)}
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
