import SQLiteStorage from 'react-native-sqlite-storage';
const database_name = "test.db"; //数据库文件
const database_version = "1.0"; //版本号
const database_displayname = "MySQLite";
const database_size = -1; //-1应该是表示无限制
let db = null;

const open = function () {
    db = SQLiteStorage.openDatabase(
        database_name,
        database_version,
        database_displayname,
        database_size,
        () => {},
        () => {});
    return db;
}
const close = function () {
    if (db) {
        db.close();
    }
    db = null;
}
const createTableAccounts = function () {
    return new Promise((s, e) => {
        if (!db) {
            open();
        }
        db.transaction((tx) => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS ACCOUNTS(
                id      INTEGER PRIMARY KEY AUTOINCREMENT,
                money   REAL    NOT NULL,
                date    NUMERIC NOT NULL,
                time    TEXT    NOT NULL,
                inout   INTEGER NOT NULL,
                type    TEXT NOT NULL,
                remarks TEXT
                )`, [],
                (resultSet) => {
                    s(resultSet);
                },
                (err) => {
                    e(err);
                });
        });
    });
}
const clearTableAccounts = function () {
    return new Promise((resolve, reject) => {
        if (!db) {
            open();
        }
        db.transaction((tx) => {
            tx.executeSql(`DELETE FROM ACCOUNTS`, [],
                (tx2) => {
                    tx2.executeSql(`UPDATE SQLITE_SEQUENCE SET SEQ = 0 WHERE NAME = 'ACCOUNTS'`, [], () => {
                        resolve('table accounts clear success');
                    }, (e) => {
                        reject(e);
                    });
                },
                (err) => {
                    reject(err);
                });
        });
    });
}
const insertAccounts = function (value) {
    return new Promise((s, e) => {
        if (!db) {
            open();
        }
        db.transaction((tx) => {
            tx.executeSql(`INSERT INTO ACCOUNTS(
                money,
                date ,
                time ,  
                inout,
                type ,
                remarks
                ) VALUES (?, ?, ?, ?, ?, ?);`,
                [value.money, value.date, value.time, value.inout, value.type, value.remarks],
                (tx2, resultSet) => {
                    s(resultSet);
                }, (err) => {
                    e(err);
                });
        });
    })
}
const selectAccounts = function (date) {
    return new Promise((s, e) => {
        if (!db) {
            open();
        }
        db.transaction((tx) => {
            tx.executeSql(`SELECT * FROM ACCOUNTS WHERE date > 1`,
                [],
                (tx2, resultSet) => {
                    s({
                        resultSet,
                        date
                    });
                },
                (err) => {
                    e(err, date);
                });
        });
    })
}
const testParams = function (test) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                test,
                b: 123
            });
        }, 100)
    });
}
// const success = async function (tx, rs) {
//     return await rs;
// }
// const error = async function (err) {
//     return await err;
// }
export default {
    close,
    createTableAccounts,
    clearTableAccounts,
    insertAccounts,
    selectAccounts,
    testParams
}