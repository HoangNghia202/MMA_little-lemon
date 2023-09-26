import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native-web";
const WelcomeScreen = () => {
    return (
        <ScrollView indicatorStyle="white" style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    source={require("../assets/logo-lemon.png")}
                    style={styles.image}
                />
                <Text style={styles.headerText}> Little Lemon</Text>
            </View>

            <Text style={styles.regularText}>
                Little Lemon is a charming neighborhood bistro that serves
                simple food and classic cocktails in a lively but casual
                environment. We would love to hear more about your experience
                with us!
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        fontSize: 30,
        color: "#EDEFEE",
        textAlign: "center",
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: "#EDEFEE",
        textAlign: "center",
    },

    headerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        width: 100,
        height: 100,
    },
});

export default WelcomeScreen;