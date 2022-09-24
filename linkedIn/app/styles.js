import React from "react";
import { StyleSheet } from "react-native";

import { Colors, FontSizes, Spaces } from "./constants/theme";

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

    bottomTab: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: Spaces.small,
        marginTop: Spaces.height_base * 0.0001,
        borderWidth: 0.5,
        borderTopColor: "#ccc",
        backgroundColor: "white",
        borderColor: "white"
    },

    container: {
        flex: 1,
        flexDirection: "column"
    },

    smallRow: {
        flex: 1,
        flexDirection: "row"
    },
    
    follow: {
        flexDirection: "row",
        alignSelf: "center"
    },

    pic: {
        height: Spaces.height_base / 24,
        width: Spaces.width_base / 11,
        borderRadius: Spaces.width_base
    },

    action: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: Spaces.small
    },

    userAction: {
        flex: 1,
        flexDirection: "row"
    },

    userDetail: {
        flex: 1,
        flexDirection: "column"
    },

    userPic: {
        height: Spaces.height_base / 24,
        width: Spaces.width_base / 11,
        borderRadius: Spaces.width_base
    },

    actionPic: {
        height: Spaces.height_base / 40,
        width: Spaces.width_base / 18,
        borderRadius: Spaces.width_base,
        marginRight: Spaces.small
    },

    mainPostPic: {
        height: Spaces.height_base / 16,
        width: Spaces.width_base / 7,
        borderRadius: Spaces.width_base,
        marginRight: Spaces.small
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

    name: {
        fontSize: FontSizes.medium,
        color: Colors.smoke,
        fontWeight: "bold"
    },

    paragraph: {
        fontSize: FontSizes.base,
        color: Colors.camo
    },

    boldParagraph: {
        fontSize: FontSizes.base,
        color: Colors.camo,
        fontWeight: "bold",
        marginRight: Spaces.small / 2
    },

    grayText: {
        fontSize: FontSizes.base,
        color: "gray",
        marginRight: Spaces.small / 2
    },

    followText: {
        fontSize: FontSizes.medium,
        color: Colors.blue,
        fontWeight: "bold"
    },

    dot: {
        height: Spaces.small / 3.5,
        width: Spaces.small / 3.5,
        borderRadius: Spaces.medium,
        backgroundColor: "gray",
        alignSelf: "center",
        marginRight: Spaces.small / 2
    },

    line: {
        height: 1,
        alignSelf: "center",
        width: "95%",
        backgroundColor: "#ccc",
        marginTop: Spaces.small / 2
    },

    smallIcon: {
        alignSelf: "center"
    },

    seeMore: {
        marginTop: -Spaces.small * 2,
        paddingTop: 0,
        padding: Spaces.small
    },

    reactions: {
        flex: 1,
        flexDirection: "row"
    },

    reactionIcons: {
        flex: 1,
        flexDirection: "row",
        padding: Spaces.small
    },

    reactionIcon: {
         marginRight: -Spaces.small / 1.65
    },

    reactionNumber: {
        marginLeft: Spaces.small / 2
   },

   feedActions: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: Spaces.small / 2,
        paddingHorizontal: 0
   },

   feedIcon: {
        marginBottom: Spaces.small / 1.10,
        alignItems: "center"
   },

   imageView: {
        flex: 1,
        height: FontSizes.large * 5
   },

   imagePost: {
        height: FontSizes.large * 5.07
   }
})

export default styles;
