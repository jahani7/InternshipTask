import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, TextInput } from "react-native";
import { LoginStyles } from "../Styles/LoginStyles";

const LoginScreen = ({ navigation }) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={LoginStyles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#141414" />
            <View style={LoginStyles.circle}></View>
            <Text style={LoginStyles.text}>Sign in to Your account</Text>
            <View style={LoginStyles.inputView}>
                <TextInput
                    placeholder="Your mobile number"
                    onChangeText={(email) => setEmail(email)}
                    placeholderTextColor="gray"
                    style={LoginStyles.inputText}
                />
            </View>
            <View style={LoginStyles.inputView}>
                <TextInput
                    placeholder="Account Pascode"
                    onChangeText={(password) => setPassword(password)}
                    placeholderTextColor="gray"
                    style={LoginStyles.inputText}
                    secureTextEntry={!showPassword}
                />
            </View>
            <TouchableOpacity style={LoginStyles.logInBtn} onPress={() => navigation.navigate("TabNavigator")}>
                <Text style={LoginStyles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
