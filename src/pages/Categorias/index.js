import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TextInput} from 'react-native';
import { Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProductDetail from '../../components/ProductDetail';
import ProdutosLista from '../../components/ProdutosLista';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

export default function categorias(props) {


    const API_URL = "https://mercadosocial.socialtec.net.br/api/categorias/";
    const[carregando, setCarregando] = useState(true);
    const[dados, setDados] = useState([]);
    const[originalDados, setOriginalDados] = useState([]);
    const[searchText, setSearchText] = useState('');
    
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

    useEffect(
        async ()=>{
            await fetch(API_URL, {method: 'GET'})
            .then( (response)=> response.json() )
            .then((responseJson)=> {setOriginalDados(responseJson); setDados(responseJson);})
            .catch(()=>(console.log('Erro')))
            .finally(()=>setCarregando(false))
        },[]
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
                        showsVerticalScrollIndicator={false}
                        keyExtractor={({id}, index) => id} 
                        renderItem={({item}) =>(               
                        <ScrollView showsVerticalScrollIndicator={false}>   
                        <View >  
                            {console.log(item)}               
                        <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('Produtos', item)}>
                             <Image style={{minWidth: 280, minHeight: 200}} resizeMode='contain' source={{uri: item.imagem}}/>
                             <Text  style={styles.produto}>{item.nome}</Text>          
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
        height: vh(25),
        marginHorizontal: vw(5),
        marginTop: vh(5),

    },
    produto: {       
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: vh(3.5),
        marginBottom: vh(8)
    },
    textContainer:{
        justifyContent: 'center',
        width: vw(90),
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
