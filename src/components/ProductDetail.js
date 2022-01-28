import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator} from 'react-native';
import { Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Button } from 'react-native-web';
import { connect } from 'react-redux';

function ProductDetail(props) {

    const nomeProduto = props.route.params.nome;
    const precoProduto = props.route.params.preco;
    const imagemProduto = `https://mercadosocial.socialtec.net.br${props.route.params.midia_list[0]}`;

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView>       
            <View style={styles.catContainer}>         
                <View style={styles.container}>
                        <Image style={{width: vw(100), height: vh(30)}} resizeMode='contain' source={{uri: imagemProduto}}/>
                        <Text  style={styles.produto}>{nomeProduto}</Text>
                        <Text style={styles.produto}>Descrição do produto:</Text>
                        <Text style={styles.produto}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra ante at 
                            libero cursus, in aliquam nulla gravida. Nulla eget vulputate neque.  
                        </Text>                                  
                </View>

                <View style={{marginTop: vh(14)}}>
                    
                <Button        
                title="Adicionar ao carrinho"
                color="black"
                onPress={() => props.addItemToCart( 
                <View style={{flexDirection: 'row' }}> 
                    <Image style={{ width: vw(30), height: vh(15) }} resizeMode='contain' source={{ uri: imagemProduto}}/> 
                    <Text style={{fontSize: vh(4)}}>{nomeProduto}</Text> 
                    <Text style={{fontSize: vh(4), marginTop:vh(12)}}>R${precoProduto}</Text>
                </View>)}
                /> 
                </View>

                
            </View>     
            </SafeAreaView>                                         
        </ScrollView>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (item) => dispatch({
            type: 'ADD_TO_CART',
            payload: item
        }),
    }
}

export default connect(null, mapDispatchToProps)(ProductDetail);


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
