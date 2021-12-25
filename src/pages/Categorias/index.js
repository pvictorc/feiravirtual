import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator} from 'react-native';
import { Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function categorias() {

    const[carregando, setCarregando] = useState(true);
    const[dados, setDados] = useState([]);

    useEffect(
        ()=>{
            fetch('https://mercadosocial.socialtec.net.br/api/categorias/', {method: 'GET'})
            .then( (response)=> response.json() )
            .then((responseJson)=> setDados(responseJson))
            .catch(()=>(alert('Erro')))
            .finally(()=>setCarregando(false))
        },[]
    )

    return (
        <ScrollView showsVerticalScrollIndicator={false}> 
            {                
                carregando ? <ActivityIndicator /> : (      
                        
                    <FlatList
                        numColumns={2}
                        data={dados}
                        keyExtractor={({id}, index) => id} 
                        renderItem={({item}) =>(
                        <View >                 
                        <TouchableOpacity style={styles.container}>
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
    }
});
