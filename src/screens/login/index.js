import {View, Text,StatusBar, SafeAreaView} from 'react-native';

import { useState } from 'react';
import Button from '../../componets/button';
import { COLORS , SIZES } from '../../constans';
import styles from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';


const LogIn = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const [otpNumber, setOtpNumber] = useState('');

  const { mobileNumber } = route.params; 

  const handleOTP = () => {
    if (otpNumber === '') {
      alert('Please enter the OTP');
    } else if (otpNumber !== '1234') { // Assuming '1234' is the correct OTP for this example
      alert('Please enter a valid OTP');
    } else {
      navigation.navigate('GameScreen');
    }
  }

  return (
    <SafeAreaView style={styles.maincontainer}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <View style={styles.innerContainer}>
        <View style={styles.CenterBox}>
          <Text style={styles.Signtext}>LogIn </Text>
          <Text style={styles.text}>
            Please enter OTP that are send to {'\n'} +91 {mobileNumber}
          </Text>
          <Text style={styles.text}>OTP: {1234} </Text>
          <OTPInputView
            style={styles.OtpContainer}
            pinCount={4}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeChanged={setOtpNumber}
          /> 
          <Button
            btn="Submit"
            btnboxStyle={styles.btnBox}
            onPress={handleOTP}
            loadingIndicator={loading}
            loadcolor={COLORS.white}
            loadsize={SIZES.width * 0.07}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;