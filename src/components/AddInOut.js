import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Switch,
    Button,
    ToastAndroid
} from "react-native";
import KeyBoard from "./KeyBoard";
import Btn from "./Btn";

export default class AddInOut extends Component {
    constructor() {
        super();
        this.state = {
            // 1: 支出 2: 收入
            inOrOut: 1,
            inputNumber: 0
        };
        this.switchInOut = this.switchInOut.bind(this);
        this.getKeyBoardResult = this.getKeyBoardResult.bind(this);
    }
    switchInOut(inOrOut) {
        this.setState({
            inOrOut: inOrOut
        });
    }
    getKeyBoardResult(result) {
        this.setState({
            inputNumber: result
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.money}>
                    <Text style={styles.number}>{this.state.inputNumber}</Text>
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
                <View style={styles.keybord}>
                    <KeyBoard result={this.getKeyBoardResult} />
                </View>
                <View style={styles.operations}>
                    <Btn style={{ flex: 1 }} title="取消" type="default" />
                    <Btn style={{ flex: 1 }} title="确定" type="primary" />
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
        flex: 1
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
    keybord: {
        flex: 5
    },
    operations: {
        flex: 1,
        flexDirection: "row"
    }
});
