import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator} from 'react-native';
import { Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductDetail(props) {

    const nomeProduto = props.route.params.nome;
    const imagemProduto = `https://mercadosocial.socialtec.net.br${props.route.params.midia_list[0]}`;

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView>       
            <View style={styles.catContainer}>         
                <View style={styles.container}>
                        <Image style={{minWidth: 200, minHeight: 200}} source={{uri: imagemProduto}}/>
                        <Text  style={styles.produto}>{nomeProduto}</Text>                                    
                </View>
            </View>     
            </SafeAreaView>                                         
        </ScrollView>
    )
}

  // estilizando categorias
  const styles = StyleSheet.create({
    catContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',

    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 175,
        height: 175,
        marginHorizontal: '2%',
        marginVertical: '10%',

    },
    produto: {       
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    },
    textContainer:{
        width:'80%',
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
