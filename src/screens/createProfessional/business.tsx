import { Button, View, StyleSheet, Text, TextInput, Platform } from "react-native";
import { useState } from 'react';


export function Business({ navigation, route }: { navigation: any, route: any }) {

    const [cnpj, setCnpj] = useState('');
    const [fantasyName, setFantasyName] = useState('');

    const {
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
    } = route.params;

    function DataBusiness() {

        navigation.navigate('user', {
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
            complement,
            cnpj,
            fantasyName,
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Text>Sobre seu negócio</Text>
                <TextInput placeholder="Digite o cnpj" style={styles.input} onChangeText={setCnpj} value={cnpj} />
                <TextInput placeholder="Digite o nome fantasia" style={styles.input} onChangeText={setFantasyName} value={fantasyName} />

            </View>

            <Button title="Próximo" onPress={DataBusiness} />
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