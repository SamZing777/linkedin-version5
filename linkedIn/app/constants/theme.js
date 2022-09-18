import React from 'react';
import { Dimensions } from 'react-native';

let {width, height} = Dimensions.get("screen");

export const Spaces = {
    width_base: width,
    height_base: height,
    xSmall: 0.25,
    base: 1,
    small: 10,
    medium: 17,
    large: 2,
    xLarge: 5
}

export const FontSizes = {
    small: width * 0.025,
    base: width * 0.035,
    medium: width * 0.04,
    large: width * 0.2
}

export const Colors = {
    blue: "#0a66c2",
    smoke: "#5b696b",
    camo: "#414335",
    systemRed: "#cc1016",
    amber: "",
    systemGreen: "#004d2a"
}
