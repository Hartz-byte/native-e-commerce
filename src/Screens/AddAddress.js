import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const AddAddress = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 70,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          style={{
            marginLeft: 20,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.2,
            padding: 6,
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../Images/back.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddAddress;
