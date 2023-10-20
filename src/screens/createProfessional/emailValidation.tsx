import { Button, View, StyleSheet, Text, Platform } from "react-native";
import { createUserProfessional } from "../../api/createProfessional";
import verificationEmail  from "../../utils/emailValidation/verifyValidation";

export function VerificationEmail({ route }: { route: any }) {

    async function Verification() {

        verificationEmail;

        const {
            name,
            birthDate,
            telephone,
            cpf,
            cnpj,
            fantasyName,
            state,
            city,
            cep,
            neighborhood,
            street,
            numberHome,
            complement,
            email,
            password,
            passwordConf
        } = route.params;

        console.log(
            'Nome: ' + name,
            'Data de nascimento: ' + birthDate,
            'Contato: ' + telephone,
            'CPF: ' + cpf,
            'Estado: ' + state,
            'Cidade: ' + city,
            'CEP: ' + cep,
            'Bairro: ' + neighborhood,
            'Rua: ' + street,
            'Nº da rua: ' + numberHome,
            'Complemento: ' + complement,
            'CNPJ: ' + cnpj,
            'Nome Fantansia: ' + fantasyName,
            'E-mail: ' + email,
            'Senha: ' + password,
            'Confirmação de senha: ' + passwordConf);

        createUserProfessional(
            name,
            birthDate,
            telephone,
            cpf,
            cnpj,
            fantasyName,
            state,
            city,
            cep,
            neighborhood,
            street,
            numberHome,
            complement,
            email,
            password
        );

    }


    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Text>Aperte o botão 'Verificar', após fazer a verificação do link enviado em seu e-mail pelo nosso app.</Text>
            </View>

            <Button title="VERIFICAR" onPress={Verification} />
        </View>);
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
    }
});


