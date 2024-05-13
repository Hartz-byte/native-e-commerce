import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 70,
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* home */}
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../Images/home.png")}
            style={{ width: 34, height: 34 }}
          />
        </TouchableOpacity>

        {/* search */}
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../Images/search.png")}
            style={{ width: 34, height: 34 }}
          />
        </TouchableOpacity>

        {/* bag */}
        <View
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              backgroundColor: "#000",
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../Images/bag.png")}
              style={{ width: 34, height: 34, tintColor: "#fff" }}
            />
          </TouchableOpacity>
        </View>

        {/* heart */}
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../Images/heart.png")}
            style={{ width: 34, height: 34 }}
          />
        </TouchableOpacity>

        {/* user */}
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../Images/user.png")}
            style={{ width: 34, height: 34 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
