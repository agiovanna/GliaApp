import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Form, Screen, Content, Title, Logo, Container, LoginButton, LoginLabel } from './styles';
import logoImg from '../../../assets/img/white-icon.png';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { isValidCPF } from 'src/utils/cpfValidation';

export function CreateClient() {

    const [cpf, setCPF] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);
  
    const handleSignUp = () => {
      setIsValid(isValidCPF(cpf));
    };

  return (
    <Screen>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : undefined} style={{ flex: 1 }}>
        <Content>
          <Logo source={logoImg} />
          <Form>
            <Container>
              <Title> Criar conta </Title>
              <Input placeholder='Nome*' type='primary' name='name'/>
              <Input placeholder='CPF*' type='primary' name='cpf' keyboardType='numeric' />
              <Input placeholder='Data de Nascimento*' type='primary' name='dateBirth'/>
              <Input placeholder='Número de telefone*' type='primary' name='phone' />
              <Input placeholder='Email*' type='primary' name='email' keyboardType='numeric' />
              <Button title='Continuar' type='primary' onPress={handleSignUp} />
              <LoginButton>
                <LoginLabel> Já possui conta? Clique aqui.</LoginLabel>
              </LoginButton>
            </Container>
          </Form>
        </Content>
      </KeyboardAvoidingView>
    </Screen>
  );
}
