import React from 'react'
import { View, TouchableOpacity, Text, ViewStyle, TextStyle , StyleSheet} from 'react-native'


export interface Props {
    title: string;
    disabled?: boolean;
    buttonStyle?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle | TextStyle[];
    onPress: any;
}
const CustomButton = (props: Props) => {
    return <TouchableOpacity
        onPress={props.onPress}
        style={[props.disabled ? {...styles.buttonStyle, backgroundColor:'#cc9'} : styles.buttonStyle, props.buttonStyle]}
        disabled={props.disabled}>
        <Text style={[styles.textStyle, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
}

CustomButton.defaultProps = {
    disable: false
}

const styles = StyleSheet.create({
    buttonStyle:{
        backgroundColor:'blue',
        borderRadius:5,
        width:120,
        height:40

    },
    textStyle:{
        color:'white',
        textAlign:'center',
        padding:10

    }
})
export default CustomButton;