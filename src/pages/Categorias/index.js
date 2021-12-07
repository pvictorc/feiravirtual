import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation   } from '@react-navigation/native';
// import Detail from '../Detail';
import Produtos from '../../components/Produtos';
import { render } from 'react-dom';

const fetch = require('node-fetch');
const url = "http://localhost:3000/api/categorias";
let arrcategorias = [];

async function getCategorias() {

    const fetch = require('node-fetch');
    const url = "http://localhost:3000/api/categorias";

    const response = await fetch(url);
    const categorias = await response.json();

    // Imprime as categorias (teste)
    for (let i=0;i<categorias.length;i++){
        console.log (categorias[i].name);
        arrcategorias.push(categorias[i].name);
    }

    // console.log(categorias);
    return(categorias); // Função retorna Json
};

export default class Categorias extends React.Component {
    state = {
        // data: {'name': 'Produtos...'}
        data: {}
    }

    // navigation = useNavigation();
    
    data = getCategorias();
    
    getJsonData = () => {
        fetch(url,{method: 'GET'}).
        then( (response)=> response.json() )
        .then((responseJson) => {
            console.log(responseJson);
            this.setState({
                data: responseJson
            })
        })
        .catch((error) =>{
            console.error(error)
        });
    }
    
    componentDidMount = () => {
        this.getJsonData()
    }

    render(){
        // const categoriasArray = JSON.parse(this.state.data);

        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    {arrcategorias.map(item => {
                        return (
                            <Text>{item}</Text>
                        );
                    })} 
                </View> 
            </ScrollView>
        )
    }

    // return (
        
    //      {<ScrollView>
    //         {dataSource.map((item, key) => (
    //             // key is the index of the array
    //             // item is the single item of the array
    //             <View key={key}>
    //             <Text style={styles.itemStyle}>
    //                 {item.id}. {item.title}
    //             </Text>
    //             <View style={styles.itemSeparatorStyle} />
    //             </View>
    //         ))}
    //         </ScrollView> }
        
    //  )

    // estilizando categorias
    styles = StyleSheet.create({
        container:{
            alignItems: 'center',
            justifyContent: 'center',
            width: 175,
            height: 175,
            backgroundColor: 'red',
            marginHorizontal: '2%',
            marginVertical: '2%'
        },
        produto: {       
            justifyContent: 'center',
            alignItems: 'center' 
        }
    });
}

