import React from "react";
import { View, Text, StatusBar, StyleSheet,TextInput,TouchableOpacity } from "react-native";
import Feather from 'react-native-vector-icons/dist/Feather';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { HomeStyles } from "../Styles/HomeStyles";

import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
    return (
        <View style={HomeStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
            <View style={HomeStyles.alignLeftContainer}>
                <Feather name="align-left" size={34} color="black" />
            </View>
            <Text style={HomeStyles.text} >Test Device</Text>
            <View style={HomeStyles.outerLine}>
                <View style={HomeStyles.inner1}>
                    <View style={HomeStyles.inner2}></View>
                </View>
                <Text style={HomeStyles.outerLineText} >Not on test</Text>
            </View>
            <View style={HomeStyles.juiceContainer}>
                <Text style={HomeStyles.jessicatxt}>Jesse's Juice Bar</Text>
                <View style={HomeStyles.arrowDown}>
                    <Feather name="chevron-down" size={24} color="dodgerblue" />
                </View>
            </View>
            <LinearGradient colors={["#1E90FF", "#00BFFF", '#00BFFF']} style={HomeStyles.linearGradient}>
                <Text style={{ color: "#fbfbfb", left: 20, top: 20 }}>ADDRESS</Text>
                <View style={HomeStyles.loctionCont}>
                    < Entypo name="location-pin" size={24} color="#E8E8E8" />
                    <Text style={{ color: "#fbfbfb" }} >56 Smot0hie Street Bridgewater, NJ</Text>
                </View>
                <View style={HomeStyles.Line} ></View>
                <View style={HomeStyles.loctionCont2}>
                    < Entypo name="phone" size={24} color="#E8E8E8" />
                    <View style={HomeStyles.textContainer}>
                        <Text style={{ color: "#fbfbfb" }}>{"(555)"} 99 88 88</Text>
                        <Text style={{ color: "#fbfbfb" }}>Account: 09 07 05 03</Text>
                    </View>


                </View>
            </LinearGradient>
            <View style={HomeStyles.juiceContainer2}>
                <Text style={HomeStyles.jessicatxt}>All Zones</Text>
                <View style={HomeStyles.arrowDown}>
                    <Feather name="chevron-down" size={24} color="dodgerblue" />
                </View>
            </View>
            <View style={HomeStyles.juiceContainer2}>
                <Text style={HomeStyles.jessicatxt}>Test length - 2 hours</Text>
                <View style={HomeStyles.arrowDown}>
                    <Feather name="chevron-down" size={24} color="dodgerblue" />
                </View>
            </View>
            <View style={HomeStyles.inputView}>
                <TextInput
                    placeholder="Comment*"
                    placeholderTextColor="#A9A9A9"
                    style={HomeStyles.inputText}
                />
            </View>
            <View style={HomeStyles.inputView}>
                <TextInput
                    placeholder="Account Pascode"
                    placeholderTextColor="#A9A9A9"
                    style={HomeStyles.inputText}
                />
            </View>
            <View style={HomeStyles.logCont}>
            <TouchableOpacity style={HomeStyles.logInBtn} >
                <Text style={HomeStyles.loginText}>Place on Test</Text>
            </TouchableOpacity>

            </View>

        </View>
    );
};

export default HomeScreen;
