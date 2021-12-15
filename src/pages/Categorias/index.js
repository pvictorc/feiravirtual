import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import {  TouchableOpacity } from 'react-native';
import { useNavigation   } from '@react-navigation/native';
// import Detail from '../Detail';
import Produtos from '../../components/Produtos';
import { render } from 'react-dom';

const fetch = require('node-fetch');
const url = "https://mercadosocial.socialtec.net.br/api/categorias/";
let arrcategorias = [];

export default class Categorias extends React.Component {
    state = {
        data: {}
    }
    
    getJsonData = () => {
        fetch(url,{method: 'GET'}).
        then( (response)=> response.json() )
        .then((responseJson) => {
            console.log(responseJson);
            for (let i=0;i<responseJson.length;i++){
                console.log (responseJson[i]);
                arrcategorias.push(responseJson[i]);
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
        
        return (
            <ScrollView showsVerticalScrollIndicator={false}>  
                <View style={styles.catContainer}>
                {arrcategorias.map(item => {
                    return (                             
                        <View key={item.id}>
                        <TouchableOpacity style={styles.container}>
                            <Image style={{minWidth: 150, minHeight: 150}} source={{uri: item.imagem}}/>
                            <Text  style={styles.produto}>{item.nome}</Text>           
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


