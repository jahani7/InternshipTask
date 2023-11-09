import React from "react";
import { View, Text, StatusBar } from "react-native";
import Feather from 'react-native-vector-icons/dist/Feather';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import { ContactStyle } from "../Styles/ContactStyle";

const Contact = () => {
    return (
        <View style={ContactStyle.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
            <View style={ContactStyle.alignLeftContainer}>
                <Feather name="align-left" size={34} color="black" />
            </View>
            <Text style={ContactStyle.text} >Contact For Devices</Text>
            <View style={ContactStyle.juiceContainer}>
                <Text style={ContactStyle.jessicatxt}>Jesse's Juice Bar</Text>
                <View style={ContactStyle.arrowDown}>
                    <Feather name="chevron-down" size={24} color="dodgerblue" />
                </View>
            </View>
            <LinearGradient colors={["#1E90FF", "#00BFFF", '#00BFFF']} style={ContactStyle.linearGradient}>
                <Text style={{ color: "#fbfbfb", left: 20, top: 20 }}>ADDRESS</Text>
                <View style={ContactStyle.loctionCont}>
                    <Entypo name="location-pin" size={24} color="#E8E8E8" />
                    <Text style={{ color: "#fbfbfb" }} >56 Smot0hie Street Bridgewater, NJ</Text>
                </View>
                <View style={ContactStyle.Line} ></View>
                <View style={ContactStyle.loctionCont2}>
                    <Entypo name="phone" size={24} color="#E8E8E8" />
                    <View style={ContactStyle.textContainer}>
                        <Text style={{ color: "#fbfbfb" }}>{"(555)"} 99 88 88</Text>
                        <Text style={{ color: "#fbfbfb" }}>Account: 09 07 05 03</Text>
                    </View>
                </View>
            </LinearGradient>
            <View style={ContactStyle.linearGradient2}>
                <View style={ContactStyle.greyCircle}></View>
                <View style={ContactStyle.textContainer2}>
                    <Text style={{ color: "black" }}>Jesse Brown</Text>
                    <Text style={{ color: "grey" }}>Account: 09 07 05 03</Text>
                </View>
                <View style={ContactStyle.Line2} ></View>
                <View style={ContactStyle.textContainer3}>
                    <Text style={{ color: "black" }}>John Smith</Text>
                    <Text style={{ color: "grey" }}>Account: 09 07 05 03</Text>
                </View>
            </View>
        </View>
    )
}

export default Contact;
