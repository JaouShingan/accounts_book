import React, {
    Component
} from 'react';
import {
    ToastAndroid,
    View
} from 'react-native';
import SQLiteStorage from 'react-native-sqlite-storage';
const database_name = "test.db"; //数据库文件
const database_version = "1.0"; //版本号
const database_displayname = "MySQLite";
const database_size = -1; //-1应该是表示无限制
let db = null;
export default class Base extends Component {
    constructor() {
        super();
        this.tt = this.tt.bind(this);
        this._successCB = this._successCB.bind(this);
        this._errorCB = this._errorCB.bind(this);
        this.open = this.open.bind(this);
    }
    componentWillUnmount() {
        if (db) {
            this._successCB('close');
            db.close();
        } else {
            ToastAndroid.show("数据库未打开", ToastAndroid.SHORT);
            console.log("SQLiteStorage not open");
        }
    }
    tt(message) {
        ToastAndroid.showWithGravityAndOffset(
            message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        );
    }
    open() {
        db = SQLiteStorage.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size,
            () => {
                this._successCB('open');
            },
            (err) => {
                this._errorCB('open', err);
            });
        return db;
    }
    createTableAccounts() {
        if (!db) {
            this.open();
        }
        this.tt("开始创建表");
        db.transaction((tx) => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS ACCOUNTS(
                id      INTEGER PRIMARY KEY AUTOINCREMENT,
                money   REAL    NOT NULL,
                date    NUMERIC NOT NULL,
                time    NUMERIC NOT NULL,
                inout   INTEGER NOT NULL,
                type    NUMERIC NOT NULL,
                remarks TEXT
                )`, [], () => {
                this.tt("创建成功");
                this._successCB('executeSql');
            }, (err) => {
                this.tt("创建失败");
                this._errorCB('executeSql', err);
            });
        });
    }
    insertAccounts(value) {
        if (!db) {
            this.open();
        }
        this.tt("开始插入");
        db.transaction((tx) => {
            tx.executeSql(`INSERT INTO ACCOUNTS(
                money,
                date ,
                time ,
                inout,
                type ,
                remarks
                ) VALUES (?, ?, ?, ?, ?, ?)`, [value.money, value.date, value.time, value.inout, value.type, value.remarks], () => {
                this.tt("插入成功");
                this._successCB('executeSql');
            }, (err) => {
                this.tt("插入失败");
                this._errorCB('executeSql', err);
            });
        });
    }
    selectAccounts() {
        if (!db) {
            this.open();
        }

        db.transaction((tx) => {
            db.executeSql(`SELECT * FROM ACCOUNTS`, [], (tx, rs) => {
                ToastAndroid.show("成功插入   条用户数据", ToastAndroid.SHORT);
                ToastAndroid.show(JSON.stringify(rs.rows), ToastAndroid.SHORT);
                this._successCB('executeSql');
            }, (err) => {
                ToastAndroid.show("数据失败", ToastAndroid.SHORT);
                this._errorCB('executeSql', err);
            });
        });
    }
    createTable(sql) {
        if (!db) {
            this.open();
        }
        db.transaction((tx) => {
            tx.executeSql(sql, [], () => {
                this._successCB('executeSql');
            }, (err) => {
                this._errorCB('executeSql', err);
            });
        });
        // //创建用户表
        // db.transaction((tx) => {
        //     tx.executeSql('CREATE TABLE IF NOT EXISTS USER(' +
        //         'id INTEGER PRIMARY KEY  AUTOINCREMENT,' +
        //         'name varchar,' +
        //         'age VARCHAR,' +
        //         'sex VARCHAR,' +
        //         'phone VARCHAR,' +
        //         'email VARCHAR,' +
        //         'qq VARCHAR)', [], () => {
        //             this._successCB('executeSql');
        //         }, (err) => {
        //             this._errorCB('executeSql', err);
        //         });
        // }, (err) => { //所有的 transaction都应该有错误的回调方法，在方法里面打印异常信息，不然你可能不会知道哪里出错了。
        //     this._errorCB('transaction', err);
        // }, () => {
        //     this._successCB('transaction');
        // })
    }
    insert(sql, value = []) {
        if (!db) {
            this.open();
        }
        db.transaction((tx) => {
            tx.executeSql(sql, value, () => {

            }, () => {

            });
        })
    }
    deleteData() {
        if (!db) {
            this.open();
        }
        db.transaction((tx) => {
            tx.executeSql('delete from user', [], () => {

            });
        });
    }
    dropTable() {
        db.transaction((tx) => {
            tx.executeSql('drop table user', [], () => {

            });
        }, (err) => {
            this._errorCB('transaction', err);
        }, () => {
            this._successCB('transaction');
        });
    }
    insertUserData(userData) {
        let len = userData.length;
        if (!db) {
            this.open();
        }
        this.createTable();
        this.deleteData();
        db.transaction((tx) => {
            for (let i = 0; i < len; i++) {
                var user = userData[i];
                let name = user.name;
                let age = user.age;
                let sex = user.sex;
                let phone = user.phone;
                let email = user.email;
                let qq = user.qq;
                let sql = "INSERT INTO user(name,age,sex,phone,email,qq)" +
                    "values(?,?,?,?,?,?)";
                tx.executeSql(sql, [name, age, sex, phone, email, qq], () => {

                }, (err) => {
                    console.log(err);
                });
            }
        }, (error) => {
            this._errorCB('transaction', error);
            ToastAndroid.show("数据插入失败", ToastAndroid.SHORT);
        }, () => {
            this._successCB('transaction insert data');
            ToastAndroid.show("成功插入 " + len + " 条用户数据", ToastAndroid.SHORT);
        });
    }
    close() {
        if (db) {
            this._successCB('close');
            db.close();
        } else {
            console.log("SQLiteStorage not open");
        }
        db = null;
    }
    _successCB(name) {
        ToastAndroid.show("SQLiteStorage " + name + " success", ToastAndroid.SHORT);
        console.log("SQLiteStorage " + name + " success");
        this.close();
    }
    _errorCB(name, err) {
        console.log("SQLiteStorage " + name);
        console.log(err);
    }
    render() {
        return ( < View / > );
    }
}