import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'



const VoltarButtonLogin = ({ onpress }) => {
    return (
        <TouchableOpacity style={styles.button}
           onPress={onpress} >
            <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

    )
}

export default VoltarButtonLogin

const styles = StyleSheet.create({

    button: {
        marginTop: 20,
        backgroundColor: '#F5F6F6',
        borderRadius: 15,
        width: 170,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        fontSize: 17
    }
})