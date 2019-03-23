import { AsyncStorage as DB, ToastAndroid } from "react-native";

const Toast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
};

const sql = async ({ method, key, value }) => {
    let json = null;
    if (value) {
        json = JSON.stringify(value);
    }
    let result = null;
    try {
        switch (method) {
            case "get":
                result = await DB.getItem(key);
                break;
            case "add":
                result = await DB.setItem(key, json);
                break;
            case "update":
                result = await DB.mergeItem(key, json);
                break;
            case "del":
                result = await DB.removeItem(key);
                break;
            default:
                break;
        }
        return result;
    } catch (error) {
        Toast(`数据库异常： ${error.message}`);
    }
};

export default {
    getItem(key) {
        return sql({ method: "get", key });
    },
    addItem(key, value) {
        return sql({ method: "add", key, value });
    },
    updateItem(key, value) {
        return sql({ method: "update", key, value });
    },
    delItem(key) {
        return sql({ method: "del", key });
    }
};
