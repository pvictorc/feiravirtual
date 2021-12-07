import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation   } from '@react-navigation/native';
// import Detail from '../Detail';
import Produtos from '../../components/Produtos';

export default function Categorias() {

    const navigation = useNavigation();

    return (
       <>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', justifyContent:'space-around'}}>
                <Produtos onClick={() => alert('Clicou')}  />
                <Produtos onClick={() => alert('Clicou')} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent:'space-around'}}>
                <Produtos/>
                <Produtos/>
            </View>
            <View style={{ flexDirection: 'row', justifyContent:'space-around'}}>
                <Produtos/>
                <Produtos/>
            </View>
            <View style={{ flexDirection: 'row', justifyContent:'space-around'}}>
                <Produtos/>
                <Produtos/>
            </View>
        </ScrollView>
       </>
    )
}
