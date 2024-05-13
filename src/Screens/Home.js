import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import Main from "../BottomNavScreens/Main";
import Search from "../BottomNavScreens/Search";
import Cart from "../BottomNavScreens/Cart";
import Wishlist from "../BottomNavScreens/Wishlist";
import Profile from "../BottomNavScreens/Profile";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      {/* tabs condition */}
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}

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
          onPress={() => {
            setSelectedTab(0);
          }}
        >
          <Image
            source={require("../Images/home.png")}
            style={{
              width: 34,
              height: 34,
              tintColor: selectedTab === 0 ? "#000" : "#8e8e8e",
            }}
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
          onPress={() => {
            setSelectedTab(1);
          }}
        >
          <Image
            source={require("../Images/search.png")}
            style={{
              width: 34,
              height: 34,
              tintColor: selectedTab === 1 ? "#000" : "#8e8e8e",
            }}
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
              backgroundColor: selectedTab === 2 ? "green" : "#000",
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setSelectedTab(2);
            }}
          >
            <Image
              source={require("../Images/bag.png")}
              style={{
                width: 34,
                height: 34,
                tintColor: "#fff",
              }}
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
          onPress={() => {
            setSelectedTab(3);
          }}
        >
          <Image
            source={require("../Images/heart.png")}
            style={{
              width: 34,
              height: 34,
              tintColor: selectedTab === 3 ? "#000" : "#8e8e8e",
            }}
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
          onPress={() => {
            setSelectedTab(4);
          }}
        >
          <Image
            source={require("../Images/user.png")}
            style={{
              width: 34,
              height: 34,
              tintColor: selectedTab === 4 ? "#000" : "#8e8e8e",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
