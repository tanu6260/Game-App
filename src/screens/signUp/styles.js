
import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constans';


const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    innerContainer: {
        width: SIZES.width,
        backgroundColor: COLORS.white,
        alignSelf: 'center',
    },
    CenterBox: {
        backgroundColor: COLORS.blue2,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: SIZES.height * .671,
        marginTop: SIZES.height * 0.35,

    },
    text: {
        color: COLORS.white,
        fontFamily: FONTS.regular,
        alignSelf: 'center',
        width: SIZES.width * 0.8,
        textAlign: 'center',
        fontSize: SIZES.width * 0.04,
    },
    Signtext: {
        fontSize: SIZES.width * 0.06,
        color: COLORS.white,
        fontFamily: FONTS.semiBold,
        textAlign: 'center',
        marginTop: SIZES.height * 0.02,
    },
    inputBox: {
        marginTop: SIZES.height * 0.05,
        width: SIZES.width * 0.91,
    },
    btnBox: {
        marginTop: SIZES.height * 0.1,
    },


});

export default styles;
