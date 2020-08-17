import { widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange, removeOrientationListener } from 'react-native-responsive-screen';
import { PrimaryTheme } from './Themes';

export const Typography : any= {
    title:{
        fontSize : wp('9%'),
        color:PrimaryTheme.$TEXT_COLOR_900,
        fontWeight:'bold'
    },
    heading:{
        fontSize : wp('5.5%'),
        color:PrimaryTheme.$TEXT_COLOR_900,
        fontWeight:'bold'
    },
    subHeading:{
        fontSize : wp('4.2%'),
        color:PrimaryTheme.$TEXT_COLOR_700,
        fontWeight:'500'
    },
    paragraph:{
        fontSize : wp('3.7%'),
        color:PrimaryTheme.$TEXT_COLOR_500,
        fontWeight:'500'
    },
    lightText:{
        fontSize : wp('3.2%'),
        color:PrimaryTheme.$TEXT_COLOR_300,
        fontWeight:'500'
    },
    errorText:{
        fontSize : wp('3%'),
        color:PrimaryTheme.$ERROR_COLOR,
        fontWeight:'500'
    }
}

export const pComponentStyles = () => {
    return {
        textInput: {
            marginBottom: 10,
            width: wp('70%'),
            borderWidth: 1
        }
    }
}

export const lComponentStyles = () => {
    return {
        textInput: {
            ...pComponentStyles().textInput,
            width: wp('60%'),
            borderColor: 'red'
        }
    }
}