import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import CustomTextInput from "../Common/CustomTextInput";
import CommonButton from "../Common/CommonButton";

const Signup = () => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
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

        {/* signup text */}
        <Text
          style={{
            marginTop: 50,
            alignSelf: "center",
            fontSize: 24,
            fontWeight: "600",
          }}
        >
          Sign Up
        </Text>

        {/* name input area */}
        <CustomTextInput
          placeholder={"Enter Name"}
          icon={require("../Images/user.png")}
        />

        {/* email input area */}
        <CustomTextInput
          placeholder={"Enter Email Id"}
          icon={require("../Images/mail.png")}
        />

        {/* phone input area */}
        <CustomTextInput
          placeholder={"Enter Mobile"}
          icon={require("../Images/phone.png")}
        />

        {/* password input area */}
        <CustomTextInput
          placeholder={"Enter Password"}
          icon={require("../Images/lock.png")}
          type={"password"}
        />

        {/* signup button */}
        <CommonButton
          title={"Sign Up"}
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
            marginBottom: 50,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          Already Have An Account?
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;
