import { StyleSheet } from "react-native";
export const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#141414",
        justifyContent: "center",
        alignItems: "center",
    },
    circle: {
        height: 150,
        width: 150,
        borderRadius: 25,
        backgroundColor: "#fbfbfb",
        marginTop: 20,
        right:100
    },
    text: {
        fontWeight: "bold",
        fontSize: 40,
        color: "#fbfbfb",
        marginTop: 10,
        right:40
    },
    inputView: {
        marginTop: 20,
        width: "90%",
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "black",
        height: 50,
        borderRadius: 8,
    },
    inputText: {
        flex: 1,
        padding: 10,
        color: "#fbfbfb",
    },
    logInBtn: {
        marginTop: 20,
        width: "80%",
        backgroundColor: "#fbfbfb",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
    },
    loginText: {
        color: "dodgerblue",
        fontWeight: "bold",
    },

})