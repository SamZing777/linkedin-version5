import React from "react";
import {
    ScrollView
} from 'react-native';

import TopTab from "../components/topTab";
import { PostPartial, LanguagePost } from "./partials/post";
import BottomTab from "../components/bottomTab";
// import { Post } from "../constants/images";

const Home = () =>{
    return(
        <ScrollView style={{backgroundColor: "#f2f2f2"}}>
            <TopTab />
            <PostPartial />
            <LanguagePost />
            <BottomTab />
        </ScrollView>
    )
}

export default Home;
