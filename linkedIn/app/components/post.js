import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import { Name, Paragraph, BoldParagraph, GrayText, FollowText } from './texts';
import { Profile, Post } from '../constants/images';
import {
     BaseIcon, 
     SmallIcon,
     Like,
     Support,
     Celebrate,
     LikeIcon,
     CommentIcon,
     ShareIcon,
     SendIcon
} from './icons';
import { Colors } from '../constants/theme';
import { SeeMore } from './buttons';
import { Krina } from './writes';
import Dot from './dots';
import { Line } from './line';
import styles from '../styles';

export const UserPostAction = ({name, action}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.action}>
                <View style={styles.userAction}>
                    <Image style={styles.actionPic}
                    source={Profile.Ade} />
                    <BoldParagraph text={name} />
                    <Paragraph text={action} />
                </View>
                <BaseIcon icon="dots-three-vertical" iconColor={Colors.smoke} />
            </View>
            <Line />
        </View>
    )
}

export const UserPost = ({name, position, bio, timeSince, status}) =>{

    const post = Krina.map((content) => (
        <Text style={styles.paragraph}>{content.body}</Text>
    ))

    return(
        <View style={styles.container}>
            <View style={styles.action}>
                <Image style={styles.mainPostPic}
                    source={Profile.Krina} />
                <View style={styles.userDetail}>
                    <View style={styles.smallRow}>
                        <BoldParagraph text={name} />
                        <Dot />
                        <GrayText text={position} />
                    </View>
                    <GrayText text={bio} />
                    <View style={styles.smallRow}>
                        <GrayText text={timeSince} />
                        <Dot />
                        <SmallIcon icon={status} />
                    </View>
                </View>
                <FollowText />
            </View>

            <View style={styles.post}>
                {post}
                <SeeMore />
            </View>
            <Line />
        </View>
    )
}

export const Reactions = ({numbers, comments, shares}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.reactions}>
                <View style={styles.reactionIcons}>
                    <Like style={styles.reactionIcon} />
                    <Celebrate style={styles.reactionIcon} />
                    <Support />

                    <View style={styles.reactionNumber}>
                        <GrayText text={numbers} />
                    </View>
                </View>

                <View style={styles.reactionIcons}>
                    <GrayText text={comments} />
                    <Dot />
                    <GrayText text={shares} />
                </View>
            </View>
            <Line />
        </View>
    )
}

export const FeedActions = () =>{
    return(
        <View style={styles.feedActions}>
            <View style={styles.feedIcon}>
                <LikeIcon />
                <GrayText text="Like" />
            </View>
            <View style={styles.feedIcon}>
                <CommentIcon />
                <GrayText text="Comment" />
            </View>
            <View style={styles.feedIcon}>
                <ShareIcon />
                <GrayText text="Share" />
            </View>
            <View style={styles.feedIcon}>
                <SendIcon />
                <GrayText text="Send" />
            </View>
        </View>
    )
}
