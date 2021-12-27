import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TextInput} from 'react-native';
import { Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Produtos from './Produtos';

export default function categorias(props) {

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
        ()=>{
            fetch('https://mercadosocial.socialtec.net.br/api/categorias/', {method: 'GET'})
            .then( (response)=> response.json() )
            .then((responseJson)=> {setOriginalDados(responseJson); setDados(responseJson);})
            .catch(()=>(console.log('Erro')))
            .finally(()=>setCarregando(false))
        },[]
    );
    const pressHandler = (id) => {
        console.log(id);
    }

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
                            <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('Produtos', {id: item.id})}>
                                <Image style={{minWidth: 150, minHeight: 150}} source={{uri: item.imagem}}/>
                                <Text  style={styles.produto}>{item.nome}</Text>          
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',

    },
    container:{
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
