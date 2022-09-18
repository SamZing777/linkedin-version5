import React from 'react';
import {
    View, 
    Text
} from 'react-native';

import { Colors } from '../constants/theme';
import { BaseIcon } from './icons';
import styles from '../styles';

export const Name = ({text}) =>{
    return(
        <Text style={styles.name}>
            {text}
        </Text>
    )
}

export const Paragraph = ({text}) =>{
    return(
        <Text style={styles.paragraph}>
            {text}
        </Text>
    )
}

export const BoldParagraph = ({text}) =>{
    return(
        <Text style={styles.boldParagraph}>
            {text}
        </Text>
    )
}

export const GrayText = ({text}) =>{
    return(
        <Text style={styles.grayText}>
            {text}
        </Text>
    )
}

export const FollowText = () =>{
    return(
        <View style={styles.follow}>
            <BaseIcon icon="plus" iconColor={Colors.blue} />
            <Text style={styles.followText}>
                Follow
            </Text>
        </View>
    )
}
