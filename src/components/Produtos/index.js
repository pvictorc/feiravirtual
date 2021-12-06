import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

// criação dos botões
export default function products(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Text style={styles.produto}>Produto</Text>
        </TouchableOpacity>
    );
}

// estilizando categorias
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 175,
        height: 175,
        backgroundColor: 'red',
        marginHorizontal: '2%',
        marginVertical: '2%'
    },
    produto: {       
        justifyContent: 'center',
        alignItems: 'center' 
    }
});




