import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import {connect} from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

 function CarrinhoIcone(props){
    return (
            <View style={{paddingRight: vh(3)}}>            
                <Icon name="cart-outline" size={vh(4)}/>
                <View style={{position: 'absolute', marginLeft: vw(7.5), marginVertical: vh(2)}}>
                     <Text style={{fontSize:vh(2), position:'absolute'}}>{props.cartItems.length}</Text> 
                </View>
            </View>
        )

}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems.cart
    }
}

export default connect(mapStateToProps)(CarrinhoIcone);
