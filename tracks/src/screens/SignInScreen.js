import React from "react";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to your Account"
        errorMessage=""
        submitButtonText="Sign In"
        onSubmit={() => {}}
      />
      <NavLink
        text="Don't have an account? Sign up instead"
        routeName="SignIn"
      />
    </View>
  );
};

SignInScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SignInScreen;
