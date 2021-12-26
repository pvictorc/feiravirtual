import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator} from 'react-native';
import { Image, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-web';

export default function prod({item}) {

    const[carregando, setCarregando] = useState(true);
    const[dados, setDados] = useState([]);

    useEffect(
        ()=>{
            fetch('https://mercadosocial.socialtec.net.br/api/produtos/', {method: 'GET'})
            .then( (response)=> response.json() )
            .then((responseJson)=> setDados(responseJson))
            .catch(()=>(alert('Erro')))
            .finally(()=>setCarregando(false))
        },[]
    )
    
    return (
        

        <ScrollView showsVerticalScrollIndicator={false}> 
            {                
                carregando ? <ActivityIndicator style={{padding: '50%'}}/> : (      

                    <FlatList
                        numColumns={2}
                        data={dados}
                        keyExtractor={({id, index}) => id} 
                        renderItem={({item}) =>(                 
                        <View >  
                            {console.log(item)}               
                        <TouchableOpacity style={styles.container}>
                             <Image style={{minWidth: 150, minHeight: 150}} source={{uri: item.midia_list}}/>
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
    }
});
