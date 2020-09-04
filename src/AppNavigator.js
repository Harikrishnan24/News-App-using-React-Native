import React, { Component } from 'react'

import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator, createMaterialTopTabNavigator } from "react-navigation";
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import FeedScreen from "./Screens/FeedScreen";
import SettingScreen from "./Screens/SettingScreen";

import FullNewsScreen from "./Screens/FullNewsScreen";
import Icon from 'react-native-vector-icons/dist/AntDesign';
import FontIcon from 'react-native-vector-icons/dist/FontAwesome';
import { white } from 'ansi-colors';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";


const AppNavigator = createMaterialBottomTabNavigator({
    Feeds: {

        screen: createStackNavigator({
            FeedScreen,
            Home: {
                screen: HomeScreen,
            },
            FullNew: {
                screen: FullNewsScreen,
            },

        }),
        navigationOptions: {
            topBarLabel: 'Feeds',

            tabBarIcon: <FontIcon name="feed" color="#fb703f" size={20} />,


        }
    },

    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            topBarLabel: 'Profile',
            tabBarIcon: <Icon name="profile" color="#fb703f" size={20} />

        }

    },
    Setting: {
        screen: SettingScreen,
        navigationOptions: {
            topBarLabel: 'Feeds',
            tabBarIcon: <Icon name="setting" color="#fb703f" size={20} />,


        }
    },



},
    {
        initialRouteName: 'Feeds',
        activeTintColor: 'white',
        barStyle: {
            backgroundColor: "#1E1D1B"
        }


    }
);

export default createAppContainer(AppNavigator);