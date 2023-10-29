import React from "react-native";
import {Screen, Container, Content, SubTitle, Title} from './styles';
import { createUserClient } from "src/api/createUser/createClient";
import verificationEmail  from "src/utils/emailValidation/verifyValidation";


import { Button } from "src/components/Button";
import { Header } from "src/components/Header";

export function SignUpClient3 ({route}: {route: any}){
    async function Verification() {

        verificationEmail;

        const {
            name,
            birthDate,
            telephone,
            email,
            password,
            passwordConf
        } = route.params;

        console.log(
            'Nome: ' + name,
            'Data de nascimento: ' + birthDate,
            'Contato: ' + telephone,
            'E-mail: ' + email,
            'Senha: ' + password,
            'Confirmação de senha: ' + passwordConf);

        createUserClient(
            name,
            birthDate,
            telephone,
            email,
            password
        );

    }

    return(
    <Screen> 
        <Content>
        <Header title="Senha"/>

        <Container>
            <Title> VERIFIQUE SEU EMAIL!</ Title>
            <SubTitle> Para continuar, verifique o link de verificação enviado para seu email. Aperte o botão "Verificar" após isso.  </SubTitle>

            <Button type="terciary" title="Verificar" onPress={Verification}/>
        </Container>
        </Content>
        </Screen>
    );
}