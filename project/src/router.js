import React from 'react';
import { TabNavigator } from 'react-navigation';

import Profile from './components/Profile/Profile';
import SignIn from './components/SignIn/SignIn';

export const Tabs = TabNavigator({
    Profile: {
        screen: Profile
    },
    SignIn: {
        screen: SignIn
    }
});