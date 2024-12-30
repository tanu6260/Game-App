
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../../constans';
import SignUp from '../../screens/signUp';
import LogIn from '../../screens/login';
import GameScreen from '../../screens/gameScreen';
const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.gray10,
                },
            }}>
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{

                    title: 'Sign Up',
                }}
                // options={{
                //     headerShown: false,
                //   }}
            />
            <Stack.Screen
                name="LogIn"
                component={LogIn}
                options={{

                    title: 'Log In',
                }}
            />

            <Stack.Screen
                name="GameScreen"
                component={GameScreen}
                options={{
                    title: 'Home',
                }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
