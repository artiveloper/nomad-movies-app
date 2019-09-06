import {createStackNavigator} from "react-navigation-stack";
import {BG_COLOR, TINT_COLOR} from "../constants/Colors";

export const createStack = (screen, title) => createStackNavigator(
    {
        Screen: {
            screen: screen,
            navigationOptions: {
                title: title,
                ...headerStyle
            }
        }
    },
);

export const headerStyle = {
    headerStyle: {
        backgroundColor: BG_COLOR,
        borderBottomWidth: 0
    },
    headerTitleStyle: {
        color: TINT_COLOR
    },
    headerTintColor: TINT_COLOR

};
