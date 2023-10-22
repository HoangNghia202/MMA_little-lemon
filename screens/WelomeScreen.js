import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Button,
} from "react-native-web";
const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    source={require("../assets/little-lemon-logo.png")}
                    style={styles.image}
                />
                <Text style={styles.headerText}> Little Lemon</Text>
                <Text style={styles.regularText}>
                    Little Lemon, your local Mediterranean Bistro
                </Text>
            </View>

            <Button
                title="Newsletter"
                style={{ backgroundColor: "red" }}
                onPress={() => navigation.navigate("Subscribe")}
            ></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        padding: 20,
        justifyContent: "center",
    },
    headerText: {
        fontSize: 30,
        color: "#333333",
        textAlign: "center",
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: "black",
        textAlign: "center",
    },

    headerContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    image: {
        width: 100,
        height: 100,
    },

    button: {
        padding: 10, // Padding around the button text
        borderRadius: 5, // Border radius to round the corners
        width: 400, // Width of the button
        fontSize: 18, // Font size of the button text
        color: "white", // Text color
    },
});

export default WelcomeScreen;
