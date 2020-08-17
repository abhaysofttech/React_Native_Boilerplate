import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { Typography } from '../styles/Global';

export interface Props {
    children: any,
    style?: TextStyle | TextStyle[]
};

const CustomText = (props: Props) => {
    return <Text allowFontScaling={false} style={[styles.text, props.style]}>
        {props.children}
    </Text>
}
const styles = StyleSheet.create({
    text: {
        ...Typography.paragraph
    }
})

export default CustomText;