import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator} from 'react-native';
import { Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ProdutosLista() {

    // console.log(props.data)

    const API_URL = 'http://localhost:3000/api/produtos/';
    const[carregando, setCarregando] = useState(true);
    const[dados, setDados] = useState([]);
    let filtroCat = "frutas";

    // const changeState = () => {  
    //     setstate({data:`state/props of parent component 
    //     is send by onClick event to another component`}); 
    // }; 

    useEffect(
        ()=>{
            // está na api teste (npm run mock:api) pois na da url oficial não há ainda ids e categorias
            fetch(API_URL, {method: 'GET'})
            .then( (response)=> response.json() )
            .then((responseJson)=> setDados(responseJson))
            .catch(()=>(alert('Erro')))
            .finally(()=>setCarregando(false))
        },[]
    )


    // let dados2 = dados.filter( dados => dados.categorias.id ==3  );
    // console.log(dados2);

    // //filtra os dados pela categoria desejada
    // dados2 = dados.filter( dados => dados.categorias.includes(filtroCat)  );
    // console.log(dados2);

    // tag = 'marketing',
    // result = array.filter(a => a.users.some(u => u.tags.some(t => t.tag.includes(tag))));
    // const arr2 = data.filter(d => d.gender === 'female');

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
