import { ViewStyle, TextStyle, ImageStyle } from "react-native";

export class Utils {
    static dynamicStyle(
        portraitStyles: ViewStyle
            | ViewStyle[]
            | TextStyle
            | TextStyle[]
            | ImageStyle
            | ImageStyle[],
        landscapeStyles: ViewStyle
            | ViewStyle[]
            | TextStyle
            | TextStyle[]
            | ImageStyle
            | ImageStyle[],
        orientation: string
    ) {
        return orientation === 'portrait' ? portraitStyles : landscapeStyles
    }

}