import React, { useState } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { View, Text, Button, ScrollViewComponent} from 'react-native';
import { Formik } from 'formik';
import { StyleSheet } from 'react-native';
import { Picker } from 'react-native';
import { connect } from 'react-redux';

function Form(props) {
    const [selectedValue, setFieldValue] = useState();
      
    const initialValues = {end_logradouro: '', end_numero: '', end_complemento: '', end_bairro: '',
    end_cidade: '', end_uf: '', end_cep: '', tipo_frete: '', fone_ddd: '', fone_numero: '',
    tipo_pagamento: '', observacao: '', quantidade: ''
    }

    console.log(props.cartItems[0].id);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={formStyles.container}>
            <Formik 
            initialValues={{ initialValues }}
            onSubmit={(values) => {
                console.log(values);
                
                fetch('https://mercadosocial.socialtec.net.br/api/pedidos', {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "id_cliente": 2,
                        "end_logradouro": values.end_logradouro,
                        "end_numero": values.end_numero,
                        "end_complemento": values.end_complemento,
                        "end_bairro": values.end_bairro,
                        "end_cidade": values.end_cidade,
                        "end_uf": values.end_uf,
                        "end_cep": '60833300',
                        "tipo_frete": values.tipo_frete,
                        "fone_ddd": values.fone_ddd,
                        "fone_numero": values.fone_numero,
                        "tipo_pagamento": values.tipo_pagamento,
                        "codigo_cupom": null,
                        "observacao": values.observacao,
                        "itens": [
                          {
                            "id_produto": props.cartItems[0].id,
                            "quantidade": parseInt(values.quantidade)
                          }
                        ]
                    })
                  });        
                  alert('Pedido realizado!')   
            }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={formStyles.input}
                            placeholder='Rua'
                            onChangeText={props.handleChange('end_logradouro')}
                            value={props.values.end_logradouro}
                        />
                        <TextInput 
                            style={formStyles.input}
                            placeholder='Número da residência'
                            onChangeText={props.handleChange('end_numero')}
                            value={props.values.end_numero}
                            keyboardType='numeric'
                        />
                        <TextInput 
                            style={formStyles.input}
                            placeholder='Complemento'
                            onChangeText={props.handleChange('end_complemento')}
                            value={props.values.end_complemento}
                        />
                        <TextInput 
                            style={formStyles.input}
                            placeholder='Bairro'
                            onChangeText={props.handleChange('end_bairro')}
                            value={props.values.end_bairro}
                        />
                        <TextInput 
                            style={formStyles.input}
                            placeholder='Cidade'
                            onChangeText={props.handleChange('end_cidade')}
                            value={props.values.end_cidade}
                        />
                        <TextInput 
                            style={formStyles.input}
                            placeholder='UF'
                            onChangeText={props.handleChange('end_uf')}
                            value={props.values.end_uf}
                        />
                        <TextInput 
                            style={formStyles.input}
                            placeholder='CEP'
                            onChangeText={props.handleChange('end_cep')}
                            value={props.values.end_cep}
                        />
                        <Picker 
                            style={formStyles.input}
                            placeholder='CEP'
                            selectedValue={selectedValue}
                            onValueChange={props.handleChange('tipo_frete')}
                            value={props.values.tipo_frete}>
                                <Picker.Item label="Tipo de frete" value=''/> 
                                <Picker.Item label="Receber em domicílio" value='dom'/> 
                            </Picker>
                        
                        <TextInput 
                            style={formStyles.input}
                            placeholder='DDD'
                            onChangeText={props.handleChange('fone_ddd')}
                            value={props.values.fone_ddd}
                        />
                        
                        <TextInput 
                            style={formStyles.input}
                            placeholder='Telefone'
                            onChangeText={props.handleChange('fone_numero')}
                            value={props.values.fone_numero}
                        />

                        <Picker 
                            style={formStyles.input}
                            onValueChange={props.handleChange('tipo_pagamento')}
                            value={props.values.tipo_pagamento}>
                                <Picker.Item label="Forma de pagamento" value=''/>
                                <Picker.Item label="PIX" value='pix'/>
                                <Picker.Item label="Cartão de Crédito" value='cre'/> 
                        </Picker>

                        <TextInput 
                            style={formStyles.input}
                            placeholder='Quantidade'
                            onChangeText={props.handleChange('quantidade')}
                            value={props.values.quantidade}
                            keyboardType='numeric'
                        />
                        
                        <TextInput 
                            style={formStyles.input}
                            placeholder='Observações'
                            onChangeText={props.handleChange('observacao')}
                            value={props.values.observacao}
                        />

                        <Button title='Enviar' color='maroon' onPress={props.handleSubmit} />
                    </View>
                )} 
            </Formik>
        </View>
        </ScrollView>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems.cart
    }
}

export default connect(mapStateToProps)(Form);

const formStyles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6
    }
})




