import React, { Component } from "react";
import { StyleSheet, View, Text, ToastAndroid } from "react-native";
import Btn from "./Btn";
import InputMoney from "./InputMoney";
import InputRemarks from "./InputRemarks";

export default class InOutDetail extends Component {
    state = {
        // 1: 支出 2: 收入
        inOrOut: 1
    };
    constructor() {
        super();
        this.switchInOut = this.switchInOut.bind(this);
        this.getMoney = this.getMoney.bind(this);
        this.getRemarks = this.getRemarks.bind(this);
        this.handle = this.handle.bind(this);
    }
    switchInOut(inOrOut) {
        this.setState({
            inOrOut: inOrOut
        });
    }
    getMoney(money) {
        ToastAndroid.show(`> money: ${money}`, ToastAndroid.SHORT);
    }
    getRemarks(reamrks) {
        ToastAndroid.show(`> reamrks: ${reamrks}`, ToastAndroid.SHORT);
    }
    handle(type) {
        if (type) {
            
        }
        this.props.navigation.navigate("Home");
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.money}>
                    <InputMoney
                        onchangeText={value => this.moneyOnChange(value)}
                        getMoney={this.getMoney}
                    />
                </View>
                <View style={styles.inout}>
                    <Text
                        style={[
                            styles.textBtn,
                            this.state.inOrOut === 1 ? styles.selected : {}
                        ]}
                        color={this.state.inOrOut == 1 ? null : "#ccc"}
                        title="支出"
                        onPress={() => this.switchInOut(1)}
                    >
                        支出
                    </Text>
                    <Text
                        style={[
                            styles.textBtn,
                            this.state.inOrOut === 2 ? styles.selected : {}
                        ]}
                        color={this.state.inOrOut == 2 ? null : "#ccc"}
                        title="收入"
                        onPress={() => this.switchInOut(2)}
                    >
                        收入
                    </Text>
                </View>
                <View style={styles.type}>
                    <Btn style={{ flex: 1 }} title="请选择类型" color="#ccc" />
                </View>
                <View style={styles.mark}>
                    <InputRemarks
                        placeholder="请输入备注"
                        getRemarks={this.getRemarks}
                    />
                </View>
                <View style={styles.operations}>
                    <Btn onPress={() => this.handle(0)} style={{ flex: 1 }} title="取消" type="default" />
                    <Btn onPress={() => this.handle(1)} style={{ flex: 1 }} title="确定" type="primary" />
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
    money: {
        flex: 1,
        minHeight: 40
    },
    number: {
        flex: 1,
        fontSize: 40,
        textAlignVertical: "center",
        paddingRight: 20,
        textAlign: "right"
    },
    inout: {
        flex: 1,
        flexDirection: "row"
    },
    textBtn: {
        flex: 1,
        backgroundColor: "#ccc",
        color: "#fff",
        fontSize: 30,
        textAlignVertical: "center",
        textAlign: "center"
    },
    selected: {
        backgroundColor: "#57a3f3",
        color: "#fff"
    },
    type: {
        flex: 1
    },
    mark: {
        flex: 5
    },
    keybord: {
        // flex: 5
        opacity: 0
    },
    operations: {
        flex: 1,
        flexDirection: "row"
    }
});
