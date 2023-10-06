import React from 'react';
//Para a tela subir junto com o teclado
import {KeyboardAvoidingView, Platform} from 'react-native';
import { 
    Form,
    Screen,
    Content,
    Title,
    Logo,
    Container,
    LoginButton,
    LoginLabel
} from './styles';
import logoImg from '../../../assets/img/white-icon.png';
import {Input} from '../../../components/Input';
import { Button } from '../../../components/Button';

/*import WhiteIcon from '../../../assets/img/white-icon.png';*/



export function CreateClient(){
    return(
   
        <Screen>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : undefined}/>
        
        <Content>
        
        <Logo source={logoImg}/>
            <Form>
            <Container>
            <Title> Criar conta </Title>

            <Input placeholder='Nome*' type='primary'/>

            <Input placeholder='CPF*' type='primary'/>

            <Input placeholder='Data de Nascimento*' type='primary'/>

            <Input placeholder='Número de telefone*' type='primary'/>

            <Input placeholder='Email*' type='primary'/>

            <Button title='Continuar' type='primary'/>

            <LoginButton>
                <LoginLabel> Já possui conta? Clique aqui.</LoginLabel>
            </LoginButton>

</Container>
            </Form>
            </Content>
        </Screen>
        
    );
}
