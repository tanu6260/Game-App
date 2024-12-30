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
        borderRadius: 30,
        height: SIZES.height,
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
    btnBox: {
        borderRadius: SIZES.width * 0.05,
        marginTop: SIZES.height * 0.1,
    },
    OtpContainer: {
        height: SIZES.width * 0.15,
        width: SIZES.width * 0.75,
        marginTop: SIZES.height * 0.04,
        alignSelf: 'center',
    },
    underlineStyleBase: {
        width: SIZES.width * 0.15,
        height: SIZES.width * 0.15,
        backgroundColor: COLORS.white,
        elevation: 1,
        borderRadius: 5,
        color: COLORS.black,
        fontSize: SIZES.width * 0.05,
    },
    underlineStyleHighLighted: {
        backgroundColor: 'lightgrey',
    },

});

export default styles;


