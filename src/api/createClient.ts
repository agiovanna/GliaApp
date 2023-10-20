import { Alert } from 'react-native'
import { api } from "../lib/axios";


export async function createUserClient(
    name: string,
    birthDate: string,
    telephone: string,
    email: string,
    password: string,

) {
    try {
        await api.post('/createClient', {
            name,
            birthDate,
            telephone,
            email,
            password,
        });

        Alert.alert('Cadastrado!', 'Usuário cadastrado com sucesso.');

    } catch (error) {
        console.log('Houve um erro: ' + error);
        Alert.alert('Erro: ', 'Não foi possível cadastra-lo(a) no app!');
    }
}
