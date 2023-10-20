import { Button, View, StyleSheet, Text, TextInput, Platform } from "react-native";
import { useState } from 'react';

import firebaseAuth from "../../api/firebase/firebaseConfig";
import { RegisterFirebaseandSendEmail } from "../../utils/emailValidation/sendValidation";


export function clientUser({ navigation, route }: { navigation: any, route: any }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');

    const {
        name,
        birthDate,
        telephone,
        cpf
    } = route.params;

    async function RegisterandSendEmail() {
        try{
        RegisterFirebaseandSendEmail(email,password);

        navigation.navigate('emailValidation', {
            name,
            birthDate,
            telephone,
            cpf,
            email,
            password,
            passwordConf,
            firebaseAuth
        });
        }
        catch(erro){
            console.log('erro: ' +erro)
        }

    }



    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Text>Usuário</Text>
                <TextInput placeholder="Digite um email válido" style={styles.input} onChangeText={setEmail} value={email} />
                <TextInput placeholder="Digite uma senha válida" style={styles.input} onChangeText={setPassword} value={password} />
                <TextInput placeholder="Confirme a senha" style={styles.input} onChangeText={setPasswordConf} value={passwordConf} />
            </View>

            <Button title="CRIAR CONTA" onPress={RegisterandSendEmail} />
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

