import { View, Text, Image } from "react-native";
import React from "react";
import Header from "../Common/Header";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* header */}
      <Header />

      {/* banner */}
      <Image
        source={require("../Images/banner.webp")}
        style={{
          width: "94%",
          height: 200,
          borderRadius: 10,
          alignSelf: "center",
          marginTop: 20,
        }}
      />
    </View>
  );
};

export default Main;
