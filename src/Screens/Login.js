import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import CustomTextInput from "../Common/CustomTextInput";
import CommonButton from "../Common/CommonButton";

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [badPassword, setBadPassword] = useState(false);

  const validate = () => {
    if (email == "") {
      setBadEmail(true);
    }
    if (password == "") {
      setBadPassword(true);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* logo */}
      <Image
        source={require("../Images/playstore.png")}
        style={{
          width: 80,
          height: 80,
          alignSelf: "center",
          borderRadius: 50,
          marginTop: 150,
        }}
      />

      {/* login text */}
      <Text
        style={{
          marginTop: 50,
          alignSelf: "center",
          fontSize: 24,
          fontWeight: "600",
        }}
      >
        Login
      </Text>

      {/* email input area */}
      <CustomTextInput
        placeholder={"Enter Email Id"}
        icon={require("../Images/mail.png")}
        value={email}
        onChangeText={(txt) => {
          setEmail(txt);
        }}
      />

      {/* password input area */}
      <CustomTextInput
        placeholder={"Enter Password"}
        icon={require("../Images/lock.png")}
        type={"password"}
        value={password}
        onChangeText={(txt) => {
          setPassword(txt);
        }}
      />

      {/* login button */}
      <CommonButton
        title={"Login"}
        bgColor={"#000"}
        textColor={"#fff"}
        onPress={() => {}}
      />

      {/* register text */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "800",
          alignSelf: "center",
          marginTop: 20,
          textDecorationLine: "underline",
        }}
        onPress={() => {
          navigation.navigate("Signup");
        }}
      >
        Create New Account?
      </Text>
    </View>
  );
};

export default Login;
