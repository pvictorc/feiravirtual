import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TextInput} from 'react-native';
import { Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';


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
        <TouchableOpacity onPress={() => props.navigation.navigate('Categorias')}>
        <View style={styles.novidades}>
            <Image style={styles.imagemHome} source={require('../../../assets/4.png')}/> 
            <Text style={styles.text}>Feira tá On!</Text>
        </View>
        </TouchableOpacity>
        
        {     
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
                    <FlatList
                        numColumns={20}
                        data={dados}
                        keyExtractor={({id}, index) => id} 
                        renderItem={({item}) =>(               
                        <>
                            {console.log(item)}               
                        <TouchableOpacity  onPress={() => props.navigation.navigate('Produtos ', item)}>
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
        height: vh(9),
        backgroundColor: '#A20D15',
    },
    logo:{
        margin: vw(2),
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
        margin: vw(1.5)
    },
    text: {
        fontSize: vw(7),
        position: 'absolute',
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        color: 'white',
        fontWeight: 'bold',
        margin: vw(2)
    },  
    TextInput: {
        backgroundColor: '#fff7f2',
        borderRadius: 10,
    },
    novidades: {
        width: '100%',
        height: vh(30),
        marginTop: vh(1)
    },
    imagemHome: {
        width: '100%',
        height: vh(30),
        paddingTop: vh(20)
    },
    products: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: vh(2),
        paddingRight: vh(1.5)
        
    },
    productItem: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: vh(4),
        fontWeight: 'bold',
        position: 'absolute',
        textShadowOffset:{
            width: 2,
            height: 0
        },
        color: 'white',
        backgroundColor: 'rgba(52, 52, 52, 0.8)'

    },
    imgProduto: {
        flex: 1, 
        minWidth: vw(50), 
        minHeight: vh(50), 
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    }

});
