import React, { Component } from "react";
import { StyleSheet, View, Text, ToastAndroid } from "react-native";
import Btn from "./Btn";
import InputMoney from "./InputMoney";
import InputRemarks from "./InputRemarks";
import { NavigationEvents } from "react-navigation";


export default class InOutDetail extends Component {
    state = {
        // 1: 支出 2: 收入
        inOrOut: 1,
        baseInfo: {}
    };
    constructor() {
        super();
        this.switchInOut = this.switchInOut.bind(this);
        this.getMoney = this.getMoney.bind(this);
        this.getRemarks = this.getRemarks.bind(this);
        this.handle = this.handle.bind(this);
        this.selectType = this.selectType.bind(this);
        this.onDidFocus = this.onDidFocus.bind(this);
    }
    componentWillMount() {
        
        // ToastAndroid.show("InOutDetail componentWillMount", ToastAndroid.SHORT);
    }
    onDidFocus() {
        
        const returnType = this.props.navigation.getParam('returnType');
        if (returnType) {
            this.setState({
                typeName: returnType.name,
                baseInfo: {
                    id: returnType.id
                }
            }, () => {
                // ToastAndroid.show(`onDidFocus:  ${this.state.typeName}`, ToastAndroid.SHORT);
            })
        }
    }
    switchInOut(inOrOut) {
        this.setState({
            inOrOut: inOrOut
        });
    }
    getMoney(money) {
        this.setState({
            baseInfo: {
                value: money
            }
        });
        ToastAndroid.show(`> money: ${money}`, ToastAndroid.SHORT);
    }
    getRemarks(reamrks) {
        this.setState({
            baseInfo: {
                reamrks: reamrks
            }
        });
        ToastAndroid.show(`> reamrks: ${reamrks}`, ToastAndroid.SHORT);
    }
    selectType() {
        this.props.navigation.navigate("Type", {
            inoutType: this.state.inOrOut
        });
    }
    // getSelectType({id, name}) {
    //     this.setState({
    //         baseInfo: {
    //             type: id
    //         },
    //         typeName: name
    //     });
    // }
    handle(type) {
        if (type) {
            
        }
        this.props.navigation.navigate("Home");
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationEvents onDidFocus={this.onDidFocus}/>
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
                        <Btn style={{ flex: 1 }} title={this.state.typeName || "请选择类型"} color="#ccc" onPress={this.selectType}/>
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
