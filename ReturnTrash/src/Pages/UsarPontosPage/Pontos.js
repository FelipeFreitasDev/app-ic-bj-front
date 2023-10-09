import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';

export default function Pontos() {

    return (
        <>
            <View style={styles.container}>
        
                <Text style={styles.txt}>PÁGINA DE TROCA DE PONTOS</Text>

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

    txt: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        marginTop: 20
    },

});