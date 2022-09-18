import React from 'react';
import {
    View
} from 'react-native';

import { Home, People, PlusIcon, Jobs, Notifications } from './icons';
import styles from '../styles';

const BottomTab = () =>{
    return(
        <View style={styles.bottomTab}>
            <Home />
            <People />
            <PlusIcon />
            <Jobs />
            <Notifications />
        </View>
    )
}

export default BottomTab;
