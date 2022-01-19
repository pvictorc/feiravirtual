import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator} from 'react-native';
import { Image, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProductDetail from '../ProductDetail';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

function ProdutosLista(props) {

    const listProduct = props.route.params.id;
    const API_URL = 'https://mercadosocial.socialtec.net.br/api/produtos/';
    const[carregando, setCarregando] = useState(true);
    const[dados, setDados] = useState([]);
    const[originalDados, setOriginalDados] = useState([]);
    const[searchText, setSearchText] = useState('');
    const imagemProduto = `https://mercadosocial.socialtec.net.br`;

    useEffect(
        async ()=>{
            // está na api teste (npm run mock:api) pois na da url oficial não há ainda ids e categorias
            await fetch(API_URL, {method: 'GET'})
            .then( (response)=> response.json() )
            .then( (produtos) => produtos.filter((produto) => {
                return produto.categorias.includes(listProduct);
              }))
              
              .then((responseJson)=> {setOriginalDados(responseJson); setDados(responseJson);})
            .catch(()=>(alert('Erro')))
            .finally(()=>setCarregando(false))
        },[]
    )
    useEffect(
        () =>{
            if(searchText === '') {
                setDados(originalDados);

            } else {
                setDados(
                    originalDados.filter(item => {
                        if(item.nome.toLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1) {
                            return true;
                        } else {
                            return false;
                        }
                    })
                );}
        },[searchText]
    );
    return (                    
            <>
            <View style={styles.textContainer}>
                <TextInput 
                style={styles.TextInput} 
                placeholder='O que está procurando?' 
                value={searchText}
                onChangeText={(t) => setSearchText(t)}
                />
            </View>
            {                
                carregando ? <ActivityIndicator /> : (      
                        
                    <FlatList                   
                        numColumns={2}
                        data={dados}
                        keyExtractor={({id}, index) => id} 
                        renderItem={({item}) =>(
                        <ScrollView showsVerticalScrollIndicator={false}> 
                        <View >                
                            <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('Detalhes', item)}>
                                <Image style={{width: vw(50), height: vh(20)}} resizeMode='contain' source={{uri: imagemProduto+item.midia_list[0]}}/>
                                <Text  style={styles.produto}>{item.nome}</Text>     
                                <Text style={styles.produto}>{'R$' + ' ' + item.preco}</Text>     
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>props.addItemToCart(item.nome)}>
                                <Icon name='plus-circle' size={vh(3)} style={{marginLeft: vw(35)}}/>
                            </TouchableOpacity>
                        </View>   
                        </ScrollView>                                      
                        )}
                    />
                       
                )               
            }
            </>
            
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart:(item) => dispatch({
            type: 'ADD_TO_CART',
            payload: item
        })
    }
}

export default connect(null, mapDispatchToProps)(ProdutosLista);

  // estilizando categorias
  const styles = StyleSheet.create({
    catContainer:{
        justifyContent: 'center',
        flexWrap: 'wrap',

    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: vw(40),
        height: vh(20),
        marginHorizontal: vw(5),
        marginVertical: vh(5),
    },
    produto: {       
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    },
    textContainer:{
        justifyContent: 'center',
        width:vw(90),
        margin: vw(2.5),
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
