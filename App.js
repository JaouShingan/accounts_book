/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./src/components/Home";
import InOutDetail from "./src/components/InOutDetail";

const AppNavigator = createStackNavigator(
    {
        Home: Home,
        InOutDetail: InOutDetail
    },
    {
        initialRouteName: "Home"
    }
);
export default createAppContainer(AppNavigator);
