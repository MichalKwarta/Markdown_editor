
const darkColor = "#262726"
const lightColor = "#eaeaea"
const accent = "#d0b68c";

export interface themeProps { 
    bg: string;
    elementColor: string;
    color:string

}


const theme = {
    light: {
        bg: lightColor,
        elementColor: "#dcdcdc",
        color: darkColor,
    },
    dark: {
        bg: darkColor,
        elementColor: "#303130",
        color: accent,
    }
}

export default theme