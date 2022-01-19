import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ProdutosLista from './ProdutosLista'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { vh, vw } from 'react-native-expo-viewport-units';
import { TouchableOpacity } from 'react-native';

function Carrinho(props){
    return (
            
            <View style={styles.container}>
                      
              {props.cartItems.length > 0 ? 
                <View style={{padding: vh(10), margin: vh(10), justifyContent: 'space-between'}}> 
                  <TouchableOpacity style={{padding: vh(10), margin: vh(10), justifyContent: 'space-between'}} onPress={props.removeItem}>{props.cartItems}</TouchableOpacity>
                </View>
                :<Text>Não há itens no carrinho</Text>
              }
              
              {console.log(props.cartItems)}
            </View>
            
        )

}
const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (item) => dispatch({
            type: 'REMOVE_FROM_CART',
            payload: item
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho);

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: vh(5)
    }
})

