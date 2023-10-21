import { Button, View, StyleSheet, Text, TextInput, Platform } from "react-native";
import { useState } from 'react';


export function professionalData({ navigation }: { navigation: any }) {

    function Data() {
        navigation.navigate('professionalAdress', {
            name,
            birthDate,
            telephone,
            cpf
        });
    }

    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [telephone, setTelephone] = useState('');
    const [cpf, setCpf] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro do Profissional</Text>

            <View style={styles.block}>
                <Text> Dados pessoais </Text>
                <TextInput placeholder="Digite seu nome" style={styles.input} onChangeText={setName} value={name} />
                <TextInput placeholder="Digite sua data de nascimento" style={styles.input} onChangeText={setBirthDate} value={birthDate} />
                <TextInput placeholder="Digite seu telefone celular" style={styles.input} onChangeText={setTelephone} value={telephone} />
                <TextInput placeholder="Digite seu cpf" style={styles.input} onChangeText={setCpf} value={cpf} />
            </View>

            <Button title="Próximo" onPress={Data} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginTop: Platform.select({ android: 100, ios: 120 }),
        marginVertical: 50,
        flex: 1,
        width: "100%",
        alignItems: "center",
    },

    title: {
        fontSize: 32,
        marginBottom: 40,
        fontWeight: "bold",
    },

    block: {
        width: "100%",
        alignItems: "center",
        marginBottom: 60,
    },

    input: {
        borderWidth: 2,
        borderColor: "#000",
        width: "80%",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
        fontSize: 16,
        marginVertical: 20,
    },
});