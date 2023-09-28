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
    Container,
    ForgotPasswordButton,
    ForgotPasswordLabel,
    CreateAcountButton,
    CreateAcountLabel
} from './styles';
import logoImg from '../../../assets/img/white-icon.png';
import {Input} from '../../../components/Input';
import { Button } from '../../../components/Button';

import {LuUser2 } from "react-icons/lu";
import {HiOutlineIdentification} from "react-icons/hi2";
import {RxCalendar} from "react-icons/rx";
import {MdOutlineMail} from "react-icons/md";
/*import WhiteIcon from '../../../assets/img/white-icon.png';*/



export function CreateProfessional(){
    return(
   
        <Screen>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : undefined}/>
        
        <Content>
        
        <Logo source={logoImg}/>
            <Form>
            <Container>
            <Title> Criar conta </Title>

            <Input placeholder='Nome*' type='primary'/>

            <Input placeholder='Nome fantasia (Opcional) ' type='primary'/>

            <Input placeholder='CPF*' type='primary'/>
            
            <Input placeholder='CNPJ (Opcional)' type='primary'/>

            <Input placeholder='Data de Nascimento*' type='primary'/>

            <Input placeholder='Número de telefone*' type='primary'/>

            <Input placeholder='Email*' type='primary'/>

            <Input placeholder='Endereço' type='primary'/>



            <Button title='Continuar' type='primary'/>

</Container>
            </Form>
            </Content>
        </Screen>
        
    );
}
