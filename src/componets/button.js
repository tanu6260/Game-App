import {
    StyleSheet,
    Text,
    TouchableOpacity,
    ActivityIndicator,
  } from 'react-native';
  import React from 'react';
import { COLORS, FONTS, SIZES } from '../constans';

  const Button = ({
    btn,
    btnboxStyle,
    onPress,
    hederbtntext,
    loadingIndicator,
    loadcolor,
    loadsize,
  }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={[styles.btncontainer, btnboxStyle]}>
        {loadingIndicator && (
          <ActivityIndicator
            size={loadsize}
            color={loadcolor}
            style={{marginRight: SIZES.width * 0.03}}
          />
        )}
        <Text style={[styles.button, hederbtntext]}>{btn}</Text>
      </TouchableOpacity>
    );
  };
  
  export default Button;
  const styles = StyleSheet.create({
    btncontainer: {
      alignItems: 'center',
      width: SIZES.width * 0.9,
      backgroundColor: COLORS.orange,
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: SIZES.width * 0.07,
      height: SIZES.height * 0.06,
    },
    button: {
      color: COLORS.white,
      fontSize: SIZES.width * 0.045,
      fontFamily: FONTS.medium,
    },
  });