import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { flowerPot2 } from "@/constant/images";

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={flowerPot2}
        style={styles.background}
        resizeMode="contain"
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Welcome to </Text>
        </View>
      </ImageBackground>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.loginButton, styles.margin]}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.registerButton, styles.margin]}
          onPress={() => alert("Register Button Pressed!")}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  background: {
    flex: 3,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    borderRadius: 20,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  margin: {
    marginTop: 20,
    marginRight: 20,
    marginBottom: 0,
    marginLeft: 20,
  },
  loginButton: {
    backgroundColor: "black",
    padding: 18,
    borderRadius: 10,
  },
  registerButton: {
    borderColor: "black",
    borderWidth: 1,
    padding: 18,
    borderRadius: 10,
  },
});
