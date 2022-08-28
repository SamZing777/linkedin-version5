import React from "react";
import { StyleSheet } from "react-native";

import { Spaces } from "./constants/theme";

const styles = StyleSheet.create({
    topTab: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: Spaces.small / 2,
        marginBottom: 10,
        backgroundColor: "white",
        height: Spaces.height_base / 19
    },

    pic: {
        height: Spaces.height_base / 24,
        width: Spaces.width_base / 11,
        borderRadius: Spaces.width_base,
        backgroundColor: "gray"
    },

    searchBar: {
        flex: 1,
        flexDirection: "row",
        height: Spaces.height_base / 25,
        maxWidth: Spaces.width_base / 1.40,
        backgroundColor: "aliceblue",
        padding: Spaces.width_base / 90,
        borderRadius: Spaces.width_base / 100
    },

    input: {
        height: Spaces.height_base / 30,
        width: Spaces.width_base / 1.65,
        borderRadius: 5,
        backgroundColor: "aliceblue",
        padding: Spaces.width_base / 90
    },

    bottomTab: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: Spaces.small,
        marginTop: Spaces.height_base / 1.27,
        borderWidth: 0.5,
        borderTopColor: "#ccc",
        backgroundColor: "white",
        borderColor: "white"
    }
})

export default styles;
