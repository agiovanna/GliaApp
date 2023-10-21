import { Button, View, StyleSheet, Text, TextInput, Platform } from "react-native";
import { useState } from 'react';

export function professionalAdress({ navigation, route }: { navigation: any, route: any }) {

    const {
        name,
        birthDate,
        telephone,
        cpf
    } = route.params;

    function DataAdress() {
        navigation.navigate('business', {
            name,
            birthDate,
            telephone,
            cpf,
            state,
            city,
            cep,
            neighborhood,
            street,
            numberHome,
            complement
        });
    }

    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [cep, setCep] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [street, setStreet] = useState('');
    const [numberHome, seNumberHome] = useState('');
    const [complement, setComplement] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Text>Endereço</Text>
                <TextInput placeholder="Digite o seu estado" style={styles.input} onChangeText={setState} value={state} />
                <TextInput placeholder="Digite a cidade em que mora" style={styles.input} onChangeText={setCity} value={city} />
                <TextInput placeholder="Digite o cep" style={styles.input} onChangeText={setCep} value={cep} />
                <TextInput placeholder="Digite o bairro" style={styles.input} onChangeText={setNeighborhood} value={neighborhood} />
                <TextInput placeholder="Digite a rua" style={styles.input} onChangeText={setStreet} value={street} />
                <TextInput placeholder="Digite o número da rua" style={styles.input} onChangeText={seNumberHome} value={numberHome} />
                <TextInput placeholder="Digite o complemento (opcional)" style={styles.input} onChangeText={setComplement} value={complement} />
            </View>

            <Button title="Próximo" onPress={DataAdress} />
        </View >
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