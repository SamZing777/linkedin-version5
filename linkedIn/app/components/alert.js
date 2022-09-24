import React from 'react';
import {
    ToastAndroid
} from 'react-native';

const DisplayMessage = (message) =>{
    return(
        ToastAndroid.showWithGravity(message, 
         ToastAndroid.SHORT,
         ToastAndroid.CENTER
                             )
     )
}

export default DisplayMessage;
