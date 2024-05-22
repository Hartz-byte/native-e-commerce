import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import { products } from "../Products";

const Main = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [jeansList, setJeansList] = useState([]);
  const [shoesList, setShoesList] = useState([]);
  const [jacketList, setJacketList] = useState([]);
  const [trousersList, setTrousersList] = useState([]);
  const [slipperList, setSlipperList] = useState([]);

  useEffect(() => {
    let tempCategory = [];

    products.category.map((item) => {
      tempCategory.push(item);
    });

    setCategoryList(tempCategory);
    setTshirtList(products.category[0].data);
    setJeansList(products.category[1].data);
    setShoesList(products.category[2].data);
    setJacketList(products.category[3].data);
    setSlipperList(products.category[4].data);
    setTrousersList(products.category[5].data);
  }, []);

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

      {/* categories flatlist */}
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={categoryList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: "#000" }}>{item.category}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <Text
        style={{
          marginTop: 20,
          marginLeft: 20,
          color: "#000",
          fontSize: 16,
          fontWeight: "600",
        }}
      >
        New T Shirts
      </Text>
    </View>
  );
};

export default Main;
