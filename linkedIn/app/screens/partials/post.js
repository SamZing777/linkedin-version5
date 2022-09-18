import React, {Fragment} from 'react';
import { View } from 'react-native';

import {
     UserPostAction,
     UserPost,
     Reactions,
     FeedActions
} from '../../components/post';

const PostPartial = () =>{
    return(
        <Fragment>
            <View style={{backgroundColor: "white", marginBottom: 10}}>
                <UserPostAction name="Ade Farati" action="Commented on this" />
                <UserPost name="Krina Modi" position="2nd" bio="Digital Marketer || Mic.." 
                timeSince="6h" status="globe" />
                <Reactions numbers="555" comments="180 comments" shares="25 shares" />
                <FeedActions />
            </View>
        </Fragment>
    )
}

export default PostPartial;
