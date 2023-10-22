import * as React from "react";
import { View, Text, StyleSheet, TextInput, Image, Button } from "react-native";

const SubscribeScreen = () => {
    const [email, setEmail] = React.useState("");
    const [subscribed, setSubscribed] = React.useState(false);
    // Add subscribe screen code here
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../assets/little-lemon-logo-grey.png")}
            ></Image>
            <Text style={styles.text}>
                Subscribe to our newsletter for our latest delicious recipes!
            </Text>
            <TextInput
                disableFullscreenUI={true}
                style={styles.input}
                value={email}
                placeholder="Enter your email address"
                onChangeText={(text) => setEmail(text)}
                editable={!subscribed}
            ></TextInput>
            <Button
                disabled={subscribed === true}
                style={styles.button}
                title="Subscribe"
                onPress={() => {
                    if (setEmail) {
                        setSubscribed(true);
                        alert("Thank you for subscribing, stay tuned!");
                        setEmail("");
                    }
                }}
            ></Button>
        </View>
    );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },

    text: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: "black",
        textAlign: "center",
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
    },

    image: {
        width: 100,
        height: 100,
    },

    button: {
        padding: 10, // Padding around the button text
        margin: 10, // Margin around the entire button
        backgroundColor: "red",
        color: "white",
        borderRadius: 5,
        width: 200,
        textAlign: "center",
    },
});
