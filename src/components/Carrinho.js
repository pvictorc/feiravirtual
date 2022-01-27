import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { vh, vw } from 'react-native-expo-viewport-units';
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native-web';


function Carrinho(props) {
    return (

        <View>
            {!!props.cartItems.length > 0 ?
                <><Text style={styles.container}>{props.cartItems.join(', ')}</Text><View style={{ marginTop: vh(50) }}>
                    <Button
                        title="Comprar"
                        color="black"
                        onPress={() => props.navigation.navigate('Formulário de compra')} />
                </View></>       
                : <Text style={{fontSize:vh(3), alignItems:'center'}}>Não há itens no carrinho</Text>
            }
            {console.log(props.cartItems)}
        </View>

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
        margin: vh(5),
        padding: vw(4),
        fontSize: vh(4),
        flexDirection: 'column',
        flexWrap: 'wrap',       
    }
})

