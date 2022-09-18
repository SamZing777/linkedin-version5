import React from "react";
import {
    View,
    TextInput
} from "react-native";

import { Search } from "./icons";
import styles from "../styles";

const SearchField = () =>{

    return(
        <View style={styles.searchBar}>
            <Search />
            <TextInput style={styles.input}
                placeholder="Search"
                placeholderTextColor="black"
            />
         </View>
    )
}

export default SearchField;
