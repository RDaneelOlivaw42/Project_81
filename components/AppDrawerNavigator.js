/*
//mine
import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { TabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';

export const DrawerNavigator = createDrawerNavigator({
    Home: { screen: TabNavigator }
}, 
    { contentComponent: CustomSideBarMenu },
    { initialRouteName: 'Home' }
);*/

import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { TabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';

export const DrawerNavigator = createDrawerNavigator({
    Home: { screen: TabNavigator },
},
    { contentComponent: CustomSideBarMenu },
    { initialRouteName: 'Home' }
);