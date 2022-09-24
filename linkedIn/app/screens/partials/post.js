import React, { Fragment, useState } from 'react';
import { View } from 'react-native';

import {
     UserPostAction,
     UserPost,
     ImagePost,
     Reactions,
     FeedActions,
     TransFeedActions
} from '../../components/post';
import { Profile, Post } from '../../constants/images';

export const PostPartial = () =>{
    return(
        <Fragment>
            <View style={{backgroundColor: "white", marginBottom: 10}}>
                <UserPostAction userImg={Profile.Ade}
                 name="Ade Farati" action="Commented on this" />
                <UserPost userImg={Profile.Krina} name="Krina Modi" 
                position="2nd" bio="Digital Marketer || Mic.." 
                timeSince="6h" status="globe" />
                <Reactions numbers="555" comments="180 comments" shares="25 shares" />
                <FeedActions />
            </View>
        </Fragment>
    )
}

export const LanguagePost = () =>{
    const[Serena, translateSerena] = useState(Serena);
    const[loveMa, translateLoveMa] = useState(loveMa);

    return(
        <Fragment>
            <View style={{backgroundColor: "white", marginBottom: 10}}> 
                <ImagePost userImg={Profile.Toure} name="Toure Babangida" position="2nd" 
                bio="Human Resouces || Lotus.." timeSince="2d" status="globe"
                imagePost={!Serena ? Post.Serena_Fr : Post.Serena_En } />
                <Reactions numbers="450" comments="165 comments" shares="22 shares" />            
                <TransFeedActions string={Serena} translateString={translateSerena} />
            </View>

            <View style={{backgroundColor: "white", marginBottom: 10}}> 
                <ImagePost userImg={Profile.Emmanuel_Macron} name="Emmanuel Macron" position="3rd+" 
                bio="President of the French Republic." timeSince="4d" status="globe"
                imagePost={!loveMa ? Post.Love_Maa_Hindi : Post.Love_Maa_En} />
                <Reactions numbers="4,450" comments="1,282 comments" shares="642 shares" />
                <TransFeedActions string={loveMa} translateString={translateLoveMa} />
            </View>
        </Fragment>
    )
}
