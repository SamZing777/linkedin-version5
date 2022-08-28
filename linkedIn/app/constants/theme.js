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
