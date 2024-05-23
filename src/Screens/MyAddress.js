import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MyAddress = () => {
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
        {/* My Address text */}
        <Text style={{ fontWeight: "600", fontSize: 18, marginLeft: 15 }}>
          My Address
        </Text>

        <TouchableOpacity
          style={{
            marginRight: 20,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.2,
            padding: 6,
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.navigate("AddAddress");
          }}
        >
          <Text>Add Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyAddress;
