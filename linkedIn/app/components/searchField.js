import React from "react";
import {
    View,
    TextInput
} from "react-native";
import { SvgXml } from "react-native-svg";

import styles from "../styles";

const SearchField = () =>{

    let searchIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
            <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
        </svg>
    `

    return(
        <View style={styles.searchBar}>
            <SvgXml xml={searchIcon} width="20" height="20" style={{color: "gray", alignSelf: "center"}} />
            <TextInput style={styles.input}
                placeholder="Search"
                placeholderTextColor="black"
            />
         </View>
    )
}

export default SearchField;
