const MainClolor = {
    green1 : '#0BCAD4',
    green2 : '#08C84F',
    dark1 : '#112340',
    dark2 : '#495A75',
    dark3 : '#8092AF',
    gray1 : '#D2D2D2',
    gray2 : '#EFEFEF',
    gray3 : '#EDEEF0',
    gray4 : '#B1B7C2',
    blue1 : "#0066CB",
    black : "#000000",
    black2 : "rgba(0,0,0,0.5)",
    red1 : "#E06379",
    coklatMuda : "#FFE3CD",
    kuningTua : "#F1C40F",
    kuningMuda : "#FBC300",
    putih : "#FAFAFA"
}

export const colors = {
    primary : MainClolor.green2,
    secondary : MainClolor.dark1,
    tertiary : MainClolor.blue1,
    white : 'white',
    black : 'black',
    disabled : MainClolor.gray3,
    text : {
        primary : MainClolor.dark1,
        secondary : MainClolor.gray1,
        dark  : MainClolor.dark1,
        menuInActive : MainClolor.dark2,
        menuActive : MainClolor.green1,
        subTitle : MainClolor.dark3,
    },
    button : {
        primary : {
            background : MainClolor.green2,
            text : 'white',
        },
        secondary : {
            background : 'white',
            text : MainClolor.dark1
        },
        disabled : {
            background : MainClolor.gray3,
            text : MainClolor.gray4
        }
    },
    border : MainClolor.gray2,
    cardLight : MainClolor.green2,
    LoadingBackground : MainClolor.black2,
    error : MainClolor.red1

}