import React from "react-native";
import {Screen, Container, Content, SubTitle, Title} from './styles';
import { RegisterFirebaseandSendEmail } from "src/utils/emailValidation/sendValidation";
import { useState } from "react";
import firebaseAuth from "src/api/firebase/firebaseConfig";

import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import { Header } from "src/components/Header";

export function SignUpClient2({ navigation, route }: { navigation: any, route: any }){
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

        navigation.navigate('clientValidation', {
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
        <Screen> 
        <Content>
        <Header title="Senha"/>

        <Container>
            <Title> Por favor, digite um email válido e crie uma senha forte:</ Title>
            <SubTitle> A senha deve conter pelo menos 8 dígitos, um número e letra  </SubTitle>

            <Input placeholder="Digite seu email" type="primary" onChangeText={setEmail} value={email} />
            <Input placeholder="Digite a senha" type="primary" onChangeText={setPassword} value={password}/>

            <Input placeholder="Confirme a senha" type="primary" onChangeText={setPasswordConf} value={passwordConf}/>

            <Button type="terciary" title="Finalizar" onPress={RegisterandSendEmail}/>
        </Container>
        </Content>
        </Screen>
    );
    }