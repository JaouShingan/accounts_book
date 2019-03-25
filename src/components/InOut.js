import React, { Component } from "react";
import { StyleSheet, View, Text, Button, ToastAndroid } from "react-native";

export default class InOut extends Component {
    state = {
        dateType: 1
    };
    constructor() {
        super();
        this.condition = this.condition.bind(this);
    }
    condition(dateType) {
        this.setState({
            dateType: dateType
        });
        ToastAndroid.show(`${dateType} 功能开发中`, ToastAndroid.SHORT);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.item}>
                        <Text style={styles.label}>收入</Text>
                        <Text style={styles.value}>1000.00</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.label}>支出</Text>
                        <Text style={styles.value}>2000.00</Text>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.condition}>
                        <Button
                            title="当日"
                            color={this.state.dateType !== 1 ? "#ccc" : null}
                            onPress={() => this.condition(1)}
                        />
                        <Button
                            title="当月"
                            color={this.state.dateType !== 2 ? "#ccc" : null}
                            onPress={() => this.condition(2)}
                        />
                        <Button
                            title="当季"
                            color={this.state.dateType !== 3 ? "#ccc" : null}
                            onPress={() => this.condition(3)}
                        />
                        <Button
                            title="当年"
                            color={this.state.dateType !== 4 ? "#ccc" : null}
                            onPress={() => this.condition(4)}
                        />
                    </View>
                    {/* <View style={styles.add}>
                        <Button
                            title="新增"
                            onPress={() =>
                                this.props.navigation.navigate("InOutDetail")
                            }
                        />
                    </View> */}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        flex: 1
    },
    item: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20
    },
    label: {
        fontSize: 24,
        fontWeight: "bold"
    },
    value: {
        fontSize: 22,
        paddingLeft: 20
    },
    bottom: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    condition: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    default: { backgroundColor: "#fff", color: "#515a6e" },
    selected: {
        backgroundColor: "#57a3f3",
        color: "#fff"
    },
    add: {
        flex: 1,
        justifyContent: "space-around"
    }
});
