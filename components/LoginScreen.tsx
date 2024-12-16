import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Image,
  Text,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./styles/loginStyle";
import { apple, facebook, google } from "@/constant/icon";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {
    console.log("Email:", email, "Password:", password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainContainer}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Welcome back!</Text>

            <View style={styles.textFields}>
              <TextInput
                placeholder="Enter Your Email"
                style={styles.textInput}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />

              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Enter Your Password"
                  style={styles.textInputPassword}
                  secureTextEntry={!isPasswordVisible}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Icon
                    name={isPasswordVisible ? "visibility" : "visibility-off"}
                    size={24}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}
              >
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.loginOptions}>
              <View style={styles.lineContainer}>
                <View style={styles.horizontalLine} />
                <Text style={styles.orLoginWith}>Or Login With</Text>
                <View style={styles.horizontalLine} />
              </View>
              <View style={styles.icons}>
                <View style={styles.iconStyles}>
                  <Image source={facebook} style={styles.image} />
                </View>
                <View style={styles.iconStyles}>
                  <Image source={google} style={styles.image} />
                </View>
                <View style={styles.iconStyles}>
                  <Image source={apple} style={styles.image} />
                </View>
              </View>
            </View>
            <View style={styles.registerText}>
              <Text>Don't Have an account?</Text>
              <Text style={{ color: "red" }}>Register Here.</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
