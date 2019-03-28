import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, ToastAndroid } from "react-native";
import { outType, inType } from "../data/type";
import Btn from "./Btn";

const TYPE_NAME = {
    1: "支出",
    2: "收入"
};
export default class TypeList extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            // getParam(params1, params2)
            // params1: 参数名
            // params2: 没有时默认返回值
            title: `${TYPE_NAME[navigation.getParam("inoutType", 1)]}类型`
        };
    };
    state = {
        type1: [],
        type2: [],
        selectedType1: {},
        selectedType2: {}
    };
    constructor() {
        super();
        this.type1Click = this.type1Click.bind(this);
        this.type2Click = this.type2Click.bind(this);
        this.getType1List = this.getType1List.bind(this);
        this.handle = this.handle.bind(this);
    }
    componentWillMount() {
        this.getType1List();
    }
    componentDidMount() {}
    type1Click(item) {
        this.setState({
            selectedType1: {
                id: item.id,
                name: item.name
            },
            selectedType2: {},
            type2: item.sub
        });
    }
    type2Click(item) {
        this.setState({
            selectedType2: {
                id: item.id,
                name: item.name
            },
            returnType: {
                id: `${this.state.selectedType1.id}@${item.id}`,
                name: `${this.state.selectedType1.name}-${item.name}`
            }
        });
    }
    getType1List() {
        const { navigation } = this.props;
        /**
         * 1: 支出
         * 2: 收入
         */
        this.setState({
            type1: navigation.getParam("inoutType") === 1 ? outType : inType
        });
    }
    /**
     *
     * @param {*} type 0: 取消，1：确定
     */
    handle(type) {
        let returnType = null;
        if (type) {
            returnType = this.state.returnType;
        }
        this.props.navigation.navigate("InOutDetail", {
            returnType
        });
    }
    render() {
        const keyExtractor = (item, index) => item.id + "";
        return (
            <View style={styles.base}>
                <View style={[styles.list]}>
                    <View style={styles.l1Area}>
                        <FlatList
                            extraData={this.state.selectedType1}
                            data={this.state.type1 || []}
                            keyExtractor={keyExtractor}
                            renderItem={({ item, index }) => (
                                <Text
                                    style={[
                                        styles.text,
                                        styles.l1Text,
                                        this.state.selectedType1.id === item.id
                                            ? styles.clicked
                                            : {}
                                    ]}
                                    onPress={() => this.type1Click(item)}
                                >
                                    {item.name}
                                </Text>
                            )}
                        />
                    </View>
                    <View style={styles.l2Area}>
                        <FlatList
                            extraData={this.state.selectedType2}
                            data={this.state.type2 || []}
                            keyExtractor={keyExtractor}
                            renderItem={({ item, index }) => (
                                <Text
                                    style={[
                                        styles.text,
                                        styles.l2Text,
                                        this.state.selectedType2.id === item.id
                                            ? styles.clicked
                                            : {}
                                    ]}
                                    onPress={() => this.type2Click(item)}
                                >
                                    {item.name}
                                </Text>
                            )}
                        />
                    </View>
                </View>
                <View style={[styles.oper]}>
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
    base: {
        flex: 1
    },
    oper: {
        height: 60,
        flexDirection: "row"
    },
    list: {
        flex: 1,
        flexDirection: "row"
    },
    l1Area: {
        flex: 1,
        borderRightWidth: 2,
        borderRightColor: "#fff"
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
    },
    clicked: {
        backgroundColor: "lightblue"
    }
});
