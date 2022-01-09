import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


// aqui iremos incluir tudo que será visto na página home
export default function Home(props) {
    return (
        <>
        <View style={styles.header}>
            <View style={styles.logo}>
                <Image
                    source={require('../../../assets/logo-min.png')}   
                    style={styles.image}
                />                     
                <View style={styles.textContainer}>
                <TextInput style={styles.TextInput}></TextInput>
                </View>  
 
            </View>
            
        </View>

        <ScrollView showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
        <View style={styles.novidades}>
            <Text style={styles.text}>Novidades!</Text>
        </View>
        <View style={styles.products}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>      
                <View style={styles.productItem}>
                    <Text>Produtos da feira</Text>
                </View>
                <View style={styles.productItem}>
                    <Text>Hortifruti</Text>
                </View>
                <View style={styles.productItem}>
                    <Text>Cachaças</Text>
                </View>
                <View style={styles.productItem}>
                    <Text>Etc</Text>
                </View>
                <View style={styles.productItem}>
                    <Text>Recencias</Text>
                </View>
            </ScrollView>
        </View>
        </ScrollView>
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
        height: '50%',
        marginVertical: '8%'
    },
    products: {
        marginVertical: '5%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    productItem: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c3c3c3',
        paddingHorizontal: '30%',
        paddingVertical: '50%',
        marginHorizontal: '5%',
        flex: 1,
        minWidth: '30%',
    }

});
