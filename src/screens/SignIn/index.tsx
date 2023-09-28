import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {RiLockPasswordLine} from 'react-icons/ri';
//Para a tela subir junto com o teclado
import {KeyboardAvoidingView, Platform} from 'react-native';
import { 
    Form,
    Screen,
    Content,
    Title,
    Logo, 
    ForgotPasswordButton,
    ForgotPasswordLabel,
    CreateAcountButton,
    CreateAcountLabel
} from './styles';
import logoImg from '../../assets/img/white-icon.png';
import {Input} from '../../components/Input';
import { Button } from '../../components/Button';


export function SignIn (){
    return (
        <Screen>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}/>
        <Content>
        <Logo source={logoImg}/>
        <Form> 

            <Title> Login </Title>
            <Input 
            placeholder= 'Digite seu email' type='primary'
            />

            <Input
            placeholder='Digite sua senha' type='primary'
            />

            <ForgotPasswordButton> 
                <ForgotPasswordLabel> Esqueceu sua senha?  </ForgotPasswordLabel>
            </ForgotPasswordButton>

            <Button
            title='Entrar'
            type='primary'
            />

            <CreateAcountButton>
                <CreateAcountLabel> Não possui conta? Criar conta</CreateAcountLabel>
            </CreateAcountButton>


        </Form>
        </Content>
        </Screen>
    );
}