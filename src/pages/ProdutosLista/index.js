import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator} from 'react-native';
import { Image, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProductDetail from '../Categorias/ProductDetail';

export default function ProdutosLista(props) {

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
        <ScrollView showsVerticalScrollIndicator={false}> 
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
                        <View >            
                            {console.log(item)}     
                            <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('Detalhes', item)}>
                                <Image style={{minWidth: 150, minHeight: 150}} source={{uri: imagemProduto+item.midia_list[0]}}/>
                                <Text  style={styles.produto}>{item.nome}</Text>     
                                <Text style={styles.produto}>{'R$' + ' ' + item.preco}</Text>     
                            </TouchableOpacity>     
                        </View>                                         
                        )}
                    />
                       
                )               
            }
            

        </ScrollView>
    )
}

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
        width: '40vw',
        height: '20vh',
        marginHorizontal: '5vw',
        marginVertical: '5vh',

    },
    produto: {       
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    },
    textContainer:{
        justifyContent: 'center',
        width:'90vw',
        margin: '2.5vw',
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
