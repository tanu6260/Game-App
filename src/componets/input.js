import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../constans';



const InputBox = ({
  placeholder,
  keyboardType,
  maxLength,
  value,
  editable,
  onPress,
  boxescontainer,
  disabled,
  numberOfLines,
  textstyle,
  onChangeText,
  autoCapitalize,
}) => {
  return (
    <View style={{ alignSelf: 'center' }}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.65}
        style={[styles.formContainer, boxescontainer]}>
        <TextInput
          style={[styles.TextInputstyle, textstyle]}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          keyboardType={keyboardType}
          maxLength={maxLength}
          value={value}
          editable={editable}
          numberOfLines={numberOfLines}
          onChangeText={onChangeText}
          autoCapitalize={autoCapitalize}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    width: SIZES.width * 0.91,
    marginTop:SIZES.height * 0.06,

  },

  TextInputstyle: {
    color: COLORS.black,
    fontSize: SIZES.width * 0.034,
    fontFamily: FONTS.medium,
    marginBottom: -3,
    width: SIZES.width * 0.75,
    marginHorizontal: SIZES.width * 0.03,
   
  },

});