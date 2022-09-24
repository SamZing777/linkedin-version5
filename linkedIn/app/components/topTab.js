import React from 'react';
import {
    View,
    Image
} from 'react-native';

import { Message } from './icons';
import SearchField from './searchField';
import { Profile } from '../constants/images';
import styles from '../styles';

const TopTab = () =>{
    return(
        <View style={styles.topTab}>
            <View style={styles.pic}>
                <Image style={styles.userPic}
                source={Profile.User} />
            </View>
            <SearchField />
            <Message />
        </View>
    )
}

export default TopTab;
