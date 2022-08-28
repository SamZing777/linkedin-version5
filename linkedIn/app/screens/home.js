import React from "react";
import {
    ScrollView,
    View,
    Text
} from 'react-native';

import TopTab from "../components/topTab";
import SearchField from "../components/searchField";
import BottomTab from "../components/bottomTab";

const Home = () =>{
    return(
        <ScrollView style={{backgroundColor: "#f2f2f2"}}>
            <TopTab />
            <BottomTab />
        </ScrollView>
    )
}

export default Home;
