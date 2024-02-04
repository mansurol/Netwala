import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Image } from "react-native";

// Import your logo image
import LogoImage from "../../assets/icon-for-ui.png";

const HomePage = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, scaleAnim]);

  return (
    <Animated.View
      style={[
        styles.container,
        { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
      ]}
    >
      {/* Add your logo */}
      <Image source={LogoImage} style={styles.logo} />

      <Text style={styles.welcomeText}>
        <Text>সম্মানিত গ্রাহক :</Text>
        {"\n"}
        <Text style={{ color: "#FF7C00" }}>
          নেটওয়ালা কমিউনিকেশনে {"\n"}আপানাকে স্বাগতম
        </Text>
        {"\n\n"}
        <Text style={styles.contactText}>
          যোগাযোগঃ 09649901064, 01719901064{"\n"}
          মশান বাজার, হাইস্কুল সংলগ্ন মার্কেট, মিরপুর, কুষ্টিয়া-৭০৩০
        </Text>
        {"\n\n"}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 5,
  },
  logo: {
    width: 220,
    height: 220,
  },
  welcomeText: {
    color: "#000",
    fontSize: 23,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 30,
  },
  subtitle: {
    fontStyle: "italic",
    color: "#000",
    fontSize: 14,
  },
  contactText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "900",
  },
});

export default HomePage;
