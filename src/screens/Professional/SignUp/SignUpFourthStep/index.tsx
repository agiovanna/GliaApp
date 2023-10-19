import React from "react-native";
import {Screen, Container, Content, SubTitle, Title} from './styles';

import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import { Header } from "src/components/Header";

export function SignUpProfessional4(){
    return (
        <Screen> 
        <Content>
        <Header title="Senha"/>

        <Container>
            <Title> Por favor, crie uma senha forte:</ Title>
            <SubTitle> A senha deve conter pelo menos 8 dígitos, um número e letra  </SubTitle>

            <Input placeholder="Digite a senha"/>
            <Input placeholder="Confirme a senha"/>

            <Button type="terciary" title="Finalizar"/>
        </Container>
        </Content>
        </Screen>
    );
}