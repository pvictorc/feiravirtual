import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { vh, vw } from "react-native-expo-viewport-units";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";

const imagemProduto = `https://mercadosocial.socialtec.net.br`;
function Carrinho(props) {

    const navigationToForm = () => {
    props.navigation.navigate('Formulário de compra', props.cartItems)
}

  return props.cartItems.length > 0 ? (
    <>
      <FlatList
        data={props.cartItems}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ width: vw(30), height: vh(15) }}
                resizeMode="contain"
                source={{ uri: imagemProduto + item.midia_list[0] }}
              />
              <Text style={{ fontSize: vh(4) }}>{item.nome}</Text>
              <Text style={{ fontSize: vh(4), marginTop: vh(12) }}>R${item.preco}</Text>
            </View>
        )}
      />
      <Button 
          onPress={() => { props.cartItems.length > 1 ? alert('Selecione apenas 1 item')  : props.navigation.navigate('Formulário de compra', props.cartItems)}}
          title="Comprar"
          color="black"
          />
    </>
  ) : (
    <Text style={{ fontSize: vh(4), alignItems: "center" }}>Não há itens no carrinho</Text>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (item) =>
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: item,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: vh(2),
    marginLeft: vw(3),
    fontSize: vh(4),
    flexDirection: "column",
    flexWrap: "wrap",
  },
});
