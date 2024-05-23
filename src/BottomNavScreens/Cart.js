import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Common/CartItem";
import { addToWishlist, removeFromCart } from "../Redux/actions/Actions";

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector((state) => state.reducers);

  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, marginTop: 50, marginBottom: 80 }}>
      <FlatList
        data={cartData}
        renderItem={({ item, index }) => {
          return (
            <CartItem
              item={item}
              onRemoveItem={() => {
                dispatch(removeFromCart(index));
              }}
              onAddToWishlist={(x) => {
                dispatch(addToWishlist(x));
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Cart;
