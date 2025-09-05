    import { Link } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

    export default function Profile() {
    // animation setup
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;

    useEffect(() => {
        Animated.parallel([
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 5,
            useNativeDriver: true,
        }),
        ]).start();
    }, []);

    return (
        <View style={styles.container}>
        <Animated.View
            style={[
            styles.card,
            { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
            ]}
        >
            <Image
            source={{ uri: "https://i.pravatar.cc/300" }} // placeholder profile photo
            style={styles.avatar}
            />
            <Text style={styles.name}>Priyesh Shrivastava</Text>
            <Text style={styles.description}>
            🚀 React Native & Expo Enthusiast | Learning step by step to build
            mobile magic ✨
            </Text>
        </Animated.View>

        <Link href="/" style={styles.link}>
            ← Back home
        </Link>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0d1b2a", // deep navy
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    card: {
        backgroundColor: "#1b263b", // darker blue card
        borderRadius: 16,
        padding: 24,
        alignItems: "center",
        width: "90%",
        shadowColor: "#000",
        shadowOpacity: 0.4,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 8,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
        borderWidth: 3,
        borderColor: "#415a77", // accent border
    },
    name: {
        fontSize: 22,
        fontWeight: "700",
        color: "#e0e1dd",
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: "#c1c9d6",
        textAlign: "center",
    },
    link: {
        marginTop: 24,
        fontSize: 16,
        color: "#778da9",
        textDecorationLine: "underline",
    },
    });
