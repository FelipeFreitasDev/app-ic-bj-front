import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert, TextInput, Button } from 'react-native';
import CadastrarButton from '../../Components/CadastrarButton';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../Components/Loading';
import VoltarButtonLogin from '../../Components/VoltarButtonLogin';
import VoltarButtonCadastro from '../../Components/VoltarButtonCadastro';
import fetch from 'node-fetch';

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [confirmarEmail, setConfirmarEmail] = useState('');
    const [password, setPassword] = useState('');

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    const handleCadastro = async () => {

        if (nome == '' || username == '' || email == '' || password == '') {
            Alert.alert('Aviso', 'Todos os campos devem estar preenchidos!');
            return;

        } else {

            if (email == !confirmarEmail) {
                Alert.alert('Os e-mails preenchidos devem ser iguais!');
                return;
            } else {

                const url = "http://localhost:5000/api/auth/register";

                const dadosUsuario = {
                    nameid: nome,
                    username: username,
                    emails: email,
                    password: password,
                };
    
                try {

                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(dadosUsuario),
                    });
    
                    if (!response.ok) {
                        Alert.alert('Erro na requisição:', response.status);
                    } else {
                        if (response.ok) {
                            const data = await response.json();
                            alert('Cadastro bem-sucedido!', data);
                            setVisible(true);
                            setTimeout(() => {
                                setVisible(false);
                                navigation.navigate('Login');
                            }, 500)
                        } else {
                            Alert.alert('Cadastro falhou!', error);
                            return;
                        }
                    }
                } catch (error) {
                    console.log('Erro na requisição de cadastro:', error);
                    Alert.alert('Erro na requisição de cadastro:', error);
                }

            }
        }
    };

    const handleVoltar = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('Inicial')  
        }, 500)
    }

    return (
        <>
            <Loading visible={visible} />
            <View style={styles.container}>
                <View style={styles.body}>

                    <TextInput
                        placeholder='Nome'
                        style={styles.input}
                        onChangeText={setNome}
                    />

                    <TextInput
                        placeholder='Username'
                        style={styles.input}
                        onChangeText={setUsername}
                    />

                    <TextInput
                        placeholder='E-mail'
                        style={styles.input}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />

                    <TextInput
                        placeholder='Confirmar E-mail:'
                        style={styles.input}
                        onChangeText={setConfirmarEmail}
                        keyboardType="email-address"
                    />

                    <TextInput
                        placeholder='Senha:'
                        style={styles.input}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <View style={styles.buttonsBox}>
                        <CadastrarButton onpress={handleCadastro} />
                        <VoltarButtonCadastro onpress={handleVoltar} />
                    </View>
                </View>

            </View>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#856192',
        padding: 20,
    },

    body: {
        marginTop: 90
    },

    input: {
        height: 70,
        borderWidth: 0.5,
        borderColor: 'white',
        color: 'white',
        marginBottom: 10,
        padding: 10,
        borderRadius: 20
    },

    buttonsBox: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
    },

    bodyTxt: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        marginTop: 10,
        marginBottom: 5,
        alignItems: 'center'
    }

});