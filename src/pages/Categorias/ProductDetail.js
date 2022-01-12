import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator} from 'react-native';
import { Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

export default function ProductDetail(props) {

    const nomeProduto = props.route.params.nome;
    const imagemProduto = `https://mercadosocial.socialtec.net.br${props.route.params.midia_list[0]}`;

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView>       
            <View style={styles.catContainer}>         
                <View style={styles.container}>
                        <Image style={{width: vw(100), height: vh(30)}} resizeMode='contain' source={{uri: imagemProduto}}/>
                        <Text  style={styles.produto}>{nomeProduto}</Text>                                    
                </View>
            </View>     
            </SafeAreaView>                                         
        </ScrollView>
    )
}

  // estilizando categorias
  const styles = StyleSheet.create({
   
    container:{
        width: vw(100),
        maxHeight: vh(50),
        marginHorizontal: vw(2),
        marginVertical: vh(5),

    },
    produto: {
        margin: vw(2),
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
    },
    textContainer:{
        width:vw(80),
        margin: 15,
        backgroundColor: 'black',
        borderRadius: 10,
    },
    TextInput: {
        backgroundColor: '#DFDBD7',
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 10,
    }
});
