import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { View, Text, Button} from 'react-native-web';
import { Formik } from 'formik';
import { StyleSheet } from 'react-native';

function Form() {
    
    return (
        <View style={formStyles.container}>
            <Formik 
            initialValues={{ end_logradouro: '', end_numero: '', end_complemento: '', end_bairro: '',
            end_cidade: '', end_uf: '', end_cep: '', tipo_frete: '', fone_ddd: '', fone_numero: '',
            tipo_pagamento: '', observacao: ''}}
            onSubmit={(values) => {
                console.log(values);
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
                        <Button title='Enviar' color='maroon' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
        
    );
}

export default Form;

const formStyles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6
    }
})



/*
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id_cliente": 2,
  "end_logradouro": "rua da batata",
  "end_numero": "12",
  "end_complemento": "Proximo a rotatoria",
  "end_bairro": "centro",
  "end_cidade": "fortaleza",
  "end_uf": "CE",
  "end_cep": "60830000",
  "tipo_frete": "dom",
  "fone_ddd": "85",
  "fone_numero": "9999999",
  "tipo_pagamento": "pix",
  "codigo_cupom": null,
  "observacao": "entregar na portaria",
  "itens": [
    {
      "id_produto": 1,
      "quantidade": 10
    },
    {
      "id_produto": 2,
      "quantidade": 1
    }
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://mercadosocial.socialtec.net.br/api/pedidos", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));*/