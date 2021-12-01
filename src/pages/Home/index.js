import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

// aqui iremos incluir tudo que será visto na página home

export default function Home() {
    return (
        <>
        <View style={styles.header}>
            <View style={styles.logo}>
                <Image
                    source={require('../../assets/logo-min.png')}   
                    style={styles.image}
                />                     
                <View style={styles.textContainer}>
                <TextInput style={styles.TextInput}></TextInput>
                </View>               
            </View>
        </View>
        <View style={styles.novidades}>
            <Text style={styles.text}>Novidades!</Text>
        </View>
        <View style={styles.products}>
            <ScrollView horizontal={true}>
            <View style={styles.productItem}>
                <Text>Produtos da feira</Text>
            </View>
            <View style={styles.productItem}>
                <Text>Hortifruti</Text>
            </View>
            <View style={styles.productItem}>
                <Text>Cachaças</Text>
            </View>
            </ScrollView>
        </View>
        </>
    );
}

    // estilizar nossos objetos
    const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        backgroundColor: '#dc3545',
    },
    logo:{
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50, 
        justifyContent: 'space-between',
    },

    textContainer:{
        width:'80%',
        margin: 15
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
        height: '30%',
        marginVertical: '5%'
    },
    products: {
        marginVertical: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    productItem: {
        backgroundColor: '#c3c3c3',
        paddingHorizontal: 40,
        paddingVertical: 110,
        marginHorizontal: 20,
        flex: 1,
        maxWidth: 150
        
    }

});
