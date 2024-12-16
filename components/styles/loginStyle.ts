import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingHorizontal: 24,
  },
  title: {
    flex: 1,
    fontFamily: "sans-serif",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
    marginTop: 100,
  },
  textFields: {
    marginBottom: 24,
  },
  textInput: {
    height: 50,
    borderColor: "rgba(18, 99, 109, 0.5)",
    borderWidth: 1,
    marginBottom: 24,
    backgroundColor: "#f8f9f9",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgba(18, 99, 109, 0.5)",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#f8f9f9",
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 24,
  },
  textInputPassword: {
    flex: 1,
    height: "100%",
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "black",
    padding: 18,
    borderRadius: 10,
  },
  loginText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginOptions: {
    flex: 4,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  lineContainer: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  horizontalLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  orLoginWith: {
    width: 100,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
    marginHorizontal: 10,
  },
  icons: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },
  iconStyles: {
    padding: 10,
    margin: 10,
    borderColor: "rgba(185, 135, 135, 0.58)",
    borderWidth: 1,
    height: 50,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: 5,
  },
  image: {
    height: 25,
    width: 25,
  },
  registerText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
