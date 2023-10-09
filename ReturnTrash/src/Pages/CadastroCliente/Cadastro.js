import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import VoltarButton from '../../Components/VoltarButton';

export default function Cadastro() {

    const voltar = () => {
        navigation.navigate('Inicial')
    }

    return (
        <>
            <View style={styles.container}>
        
                <Text style={styles.titleTxt}>PÁGINA DE CADASTRO DE CLIENTE</Text>

                <Text style={styles.titleTxt}>Nome:</Text>
                <Text style={styles.titleTxt}>Sobrenome:</Text>
                <Text style={styles.titleTxt}>E-mail:</Text>
                <Text style={styles.titleTxt}>Confirme o e-mail:</Text>
                <Text style={styles.titleTxt}>Senha:</Text>
                <Text style={styles.titleTxt}>CADASTRAR</Text>
                <VoltarButton onpress={voltar}/>


            </View>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#856192',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    titleTxt: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        marginTop: 20
    },

    bodyTxt: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white',
        marginTop: 100,
        alignItems: 'center'
    }

});