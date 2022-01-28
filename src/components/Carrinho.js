import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { vh, vw } from 'react-native-expo-viewport-units';
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native-web';


function Carrinho(props) {
    return (
        props.cartItems.length > 0 ?
            <>
                <FlatList
                    data={props.cartItems}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <View>
                            <Text style={styles.container}>{item}</Text>
                            {console.log(item)}
                        </View>
                    )}
                />
                <Button title="Comprar"
                    color="black"
                    onPress={() => props.navigation.navigate('Formulário de compra')}>
                </Button></>
            : <Text style={{ fontSize: vh(4), alignItems: 'center' }}>Não há itens no carrinho</Text>
    )
}
const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems.cart
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
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: vh(2),
        marginLeft: vw(3),
        fontSize: vh(4),
        flexDirection: 'column',
        flexWrap: 'wrap',
    }
})

