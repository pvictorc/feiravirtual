import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import {  TouchableOpacity } from 'react-native';
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
    
     //data = getCategorias();
    
    getJsonData = () => {
        fetch(url,{method: 'GET'}).
        then( (response)=> response.json() )
        .then((responseJson) => {
            console.log(responseJson);
            for (let i=0;i<responseJson.length;i++){
                console.log (responseJson[i].name);
                arrcategorias.push(responseJson[i].name + ' teste');
            }
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
                <View style={styles.catContainer}>
                {arrcategorias.map(item => {
                    return (      
                          
                        <View>
                            <TouchableOpacity style={styles.container}>
                                <View style={{width: 150, justifyContent: 'space-between', minWidth: '30%', height: '30%'}}>
                                    <Text style={styles.produto}>{item}</Text>
                                </View>               
                            </TouchableOpacity> 
                        </View>
                        
                    );
                })} 
                </View>
            </ScrollView>
        )
    }

}
    // estilizando categorias
    const styles = StyleSheet.create({
        catContainer:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
        },
        container:{
            alignItems: 'center',
            justifyContent: 'center',
            width: 175,
            height: 175,
            backgroundColor: '#a77',
            marginHorizontal: '2%',
            marginVertical: '2%'
        },
        produto: {       
            justifyContent: 'center',
            alignItems: 'center'       
        }
    });


