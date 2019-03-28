import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    ToastAndroid,
    DatePickerAndroid,
    TimePickerAndroid
} from "react-native";
import Btn from "./Btn";
import InputMoney from "./InputMoney";
import InputRemarks from "./InputRemarks";
import { NavigationEvents } from "react-navigation";

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
        this.selectType = this.selectType.bind(this);
        this.onDidFocus = this.onDidFocus.bind(this);
        this.openDate = this.openDate.bind(this);
        this.openTime = this.openTime.bind(this);
    }
    componentWillMount() {
        // ToastAndroid.show("InOutDetail componentWillMount", ToastAndroid.SHORT);
    }
    onDidFocus() {
        const returnType = this.props.navigation.getParam("returnType");
        if (returnType) {
            this.setState({
                typeName: returnType.name,
                typeId: returnType.id
            });
        }
    }
    switchInOut(inOrOut) {
        this.setState({
            inOrOut: inOrOut
        });
    }
    getMoney(money) {
        this.setState({
            money
        });
        ToastAndroid.show(`> money: ${money}`, ToastAndroid.SHORT);
    }
    getRemarks(reamrks) {
        this.setState({
            reamrks
        });
        ToastAndroid.show(`> reamrks: ${reamrks}`, ToastAndroid.SHORT);
    }
    openDate() {
        DatePickerAndroid.open({
            // 要设置默认值为今天的话，使用`new Date()`即可。
            date: new Date()
        })
            .then(({ action, year, month, day }) => {
                if (action !== DatePickerAndroid.dismissedAction) {
                    // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
                    this.setState({
                        date: `${year}-${month + 1}-${day}`
                    });
                }
            })
            .catch(({ code, message }) => {
                ToastAndroid.show(`错误: ${message}`, ToastAndroid.SHORT);
            });
    }
    openTime() {
        TimePickerAndroid.open({
            // is24Hour (boolean) - 如果设为true，则选择器会使用 24 小时制。如果设为false，则会额外显示 AM/PM 的选项。如果不设定，则采取当前地区的默认设置。
            is24Hour: true
        })
            .then(({ action, hour, minute }) => {
                if (action !== TimePickerAndroid.dismissedAction) {
                    // 这里开始可以处理用户选好的小时、分钟两个个参数：hour, minute
                    this.setState({
                        time: `${hour}:${minute}`
                    });
                }
            })
            .catch(({ code, message }) => {
                ToastAndroid.show(`错误: ${message}`, ToastAndroid.SHORT);
            });
    }
    selectType() {
        this.props.navigation.navigate("Type", {
            inoutType: this.state.inOrOut
        });
    }
    handle(type) {
        let result = null;
        if (type) {
            result = {
                money: this.state.money,
                inout: this.state.inOrOut,
                date: this.state.date,
                time: this.state.time,
                type: this.state.typeId,
                reamrks: this.state.reamrks,
            }
        }
        this.props.navigation.navigate("Home", {
            inOutDetail: result
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationEvents onDidFocus={this.onDidFocus} />
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
                <View style={[styles.item]}>
                    <Text style={[styles.itemLabel]}>日期</Text>
                    <Btn
                        style={[styles.itemOper]}
                        title={this.state.date || "请选择日期"}
                        color="#ccc"
                        onPress={this.openDate}
                    />
                </View>
                <View style={[styles.item]}>
                    <Text style={[styles.itemLabel]}>时间</Text>
                    <Btn
                        style={[styles.itemOper]}
                        title={this.state.time || "请选择时间"}
                        color="#ccc"
                        onPress={this.openTime}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={[styles.itemLabel]}>收支类型</Text>
                    <Btn
                        style={[styles.itemOper]}
                        title={this.state.typeName || "请选择类型"}
                        color="#ccc"
                        onPress={this.selectType}
                    />
                </View>
                <View style={styles.mark}>
                    <InputRemarks
                        placeholder="请输入备注"
                        getRemarks={this.getRemarks}
                    />
                </View>
                <View style={styles.operations}>
                    <Btn
                        onPress={() => this.handle(0)}
                        style={{ flex: 1 }}
                        title="取消"
                        type="default"
                    />
                    <Btn
                        onPress={() => this.handle(1)}
                        style={{ flex: 1 }}
                        title="确定"
                        type="primary"
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
    item: {
        flex: 1,
        flexDirection: "row",
        minHeight: 30
    },
    itemLabel: {
        minWidth: 100,
        fontSize: 20,
        textAlignVertical: "center",
        textAlign: "right"
    },
    itemOper: {
        flex: 1
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
    inoutType: {
        flex: 1,
        flexDirection: "row"
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
