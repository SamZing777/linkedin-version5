import React from 'react';
import {
     Pressable
} from 'react-native';

import { GrayText } from './texts';
import styles from '../styles';

export const SeeMore = () =>{
    return(
        <Pressable style={styles.seeMore}>
            <GrayText text="...see more" />
        </Pressable>
    )
}
