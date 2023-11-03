import { Alert } from 'react-native'
import { api } from "../../lib/axios";


export async function createUserProfessional(
    name: string,
    birthDate: string,
    telephone: string,
    cpf: string,
    cnpj: string,
    fantasyName: string,
    state: string,
    city: string,
    cep: string,
    neighborhood: string,
    street: string,
    numberHome: string,
    complement: string,
    email: string,
    password: string,
) {
    try {
        await api.post('/createProfessional', {
            name,
            birthDate,
            telephone,
            state,
            city,
            cep,
            neighborhood,
            street,
            numberHome,
            complement,
            cpf,
            cnpj,
            fantasyName,
            email,
            password,
        });

        Alert.alert('Cadastrado!', 'Usuário cadastrado com sucesso.');

    } catch (error) {
        console.log('Houve um erro: ' + error);
        Alert.alert('Erro: ', 'Não foi possível cadastra-lo(a) no app!'); 
    }
}