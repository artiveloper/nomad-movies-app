import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from "react-navigation-stack";
import MovieScreen from "../screens/Movie";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import {BG_COLOR, TINT_COLOR} from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";
import {createStack} from "./config";

const TabNavigation = createBottomTabNavigator(
    {
        Movie: {
            screen: createStack(MovieScreen, "Movies"),
            navigationOptions: {
                tabBarIcon: ({focused}) =>
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-film" : "md-film"}
                    />
            }
        },
        TV: {
            screen: createStack(TVScreen, "TV"),
            navigationOptions: {
                tabBarIcon: ({focused}) =>
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
                    />
            }
        },
        Search: {
            screen: createStack(SearchScreen, "Search"),
            navigationOptions: {
                tabBarIcon: ({focused}) =>
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-search" : "md-search"}
                    />
            }
        },
    },
    {
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: BG_COLOR
            }
        }
    }
);

export default createAppContainer(TabNavigation);
