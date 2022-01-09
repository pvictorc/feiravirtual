import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TextInput} from 'react-native';
import { Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';


// aqui iremos incluir tudo que será visto na página home
export default function Home(props) {


    const[dados, setDados] = useState([]);
    const API_URL = "https://mercadosocial.socialtec.net.br/api/categorias/";

    useEffect(
        async ()=>{
            await fetch(API_URL, {method: 'GET'})
            .then( (response)=> response.json() )
            .then((responseJson)=> setDados(responseJson))
            .catch(()=>(console.log('Erro')))
        },[]
    );


    return (
        <>
        <View style={styles.header}>
            <View style={styles.logo}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/logo-min.png')}   
                />                     
                <View style={styles.textContainer}>
                <TextInput style={styles.TextInput}></TextInput>
                </View>  
 
            </View>
            
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 15}}>
        <View style={styles.novidades}>
            <Text style={styles.text}>Novidades!</Text>
        </View>
        
        {     
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
                    <FlatList
                        numColumns={5}
                        data={dados}
                        keyExtractor={({id}, index) => id} 
                        renderItem={({item}) =>(               
                        <>
                            {console.log(item)}               
                        <TouchableOpacity  onPress={() => props.navigation.navigate('Produtos', item)}>
                            <View style={styles.products}>
                             <Image style={styles.imgProduto} source={{uri: item.imagem}}/>
                             <Text  style={styles.productItem}>{item.nome}</Text>
                             </View>          
                         </TouchableOpacity>     
                         </>                                  
                        )}  
                    />
                       </ScrollView>   
                       
            }
        </ScrollView>
        </>
        
    );
}

    // estilizar nossos objetos
    const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '9vh',
        backgroundColor: '#dc3545',
    },
    logo:{
        margin: '2vw',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50, 
    },

    textContainer:{
        width:'80%',
        margin: '1.5vw'
    },
    text: {
        fontSize: 25
    },  
    TextInput: {
        backgroundColor: 'white',
        borderRadius: 10,
    },
    novidades: {
        backgroundColor: '#dc3545',
        width: '100%',
        height: '30vh',
        marginTop: '2vh'
    },
    products: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2vh',
        paddingRight: '1.5vh'
        
    },
    productItem: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 28,
        position: 'absolute'
    },
    imgProduto: {
        flex: 1, 
        minWidth: '50vw', 
        minHeight: '50vh', 
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    }

});
