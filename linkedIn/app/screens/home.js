import React from "react";
import {
    ScrollView
} from 'react-native';

import PostPartial from "./partials/post";
import TopTab from "../components/topTab";
import BottomTab from "../components/bottomTab";
// import { Post } from "../constants/images";

const Home = () =>{
    return(
        <ScrollView style={{backgroundColor: "#f2f2f2"}}>
            <TopTab />
            <PostPartial />
            <BottomTab />
        </ScrollView>
    )
}

export default Home;
