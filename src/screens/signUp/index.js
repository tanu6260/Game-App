
import { View, Text, Image, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import InputBox from '../../componets/input';
import Button from '../../componets/button';
import { COLORS, SIZES } from '../../constans';
import styles from './styles';



const SignUp = ({ navigation }) => {
    const [mobileNumber, setMobileNumber] = useState('');

    const handleSubmit = () => {
        if (mobileNumber === '') {
            alert('Please enter your mobile number');
        } else if (mobileNumber.length !== 10) {
            alert('Please enter a 10-digit mobile number');
        } else {
            navigation.navigate('LogIn', { mobileNumber });
        }
    }

    return (
        <SafeAreaView style={styles.maincontainer}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
            <View style={styles.innerContainer}>

                <View style={styles.CenterBox}>
                    <Text style={styles.Signtext}>Sign In </Text>
                    <Text style={styles.text}>
                        Please enter your mobile number
                    </Text>
                    <InputBox
                        placeholder="Mobile no."
                        keyboardType={'numeric'}
                        maxLength={10}
                        value={mobileNumber}
                        onChangeText={setMobileNumber}

                    />
                    <Button
                        btn="Submit"
                        btnboxStyle={styles.btnBox}
                        loadcolor={COLORS.white}
                        loadsize={SIZES.width * 0.07}
                        onPress={handleSubmit}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;