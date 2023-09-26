import { ScrollView, Text, TextInput, View, Pressable } from "react-native-web";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
export default function LoginScreen() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <ScrollView>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            {!isLogin && (
                <Text style={styles.regularText}>Login to continue </Text>
            )}
            {!isLogin ? (
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter email"
                    ></TextInput>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter password"
                        textContentType="password"
                    ></TextInput>
                    <View style={styles.center}>
                        <Pressable
                            style={styles.pressable}
                            textContentType="password"
                            onPress={() => {
                                setIsLogin(true);
                            }}
                        >
                            <Text> Login </Text>
                        </Pressable>
                    </View>
                </View>
            ) : (
                <View style={styles.center}>
                    <Text style={styles.regularText}>Logged in</Text>
                    <Pressable
                        style={styles.pressable}
                        onPress={() => {
                            setIsLogin(false);
                        }}
                    >
                        <Text> Log out </Text>
                    </Pressable>
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
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

    input: {
        padding: 20,
        marginVertical: 8,
        color: "black",
        marginHorizontal: 40,
        borderColor: "#EDEFEE",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#EDEFEE",
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    pressable: {
        width: 150,
        padding: 10,
        marginVertical: 8,
        color: "black",
        marginHorizontal: 40,
        borderRadius: 20,
        backgroundColor: "#EE9972",
        alignItems: "center",
        fontSize: 24,
    },
});
