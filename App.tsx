import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import {
  Screen,
  Content,
  Logo,
  Container,
  Title,
  Form,
  CreateAcountButton,
  CreateAcountLabel,
} from "./src/screens/Client/Welcome/styles";
import logoImg from "./assets/icon.png";

import { Button } from "src/components/Button/index";



export function InitialScreen({ navigation }: { navigation: any }) {
  const handleLogin = () => {
    // Adicione a lógica de login aqui, por exemplo, navegar para a tela de login
    navigation.navigate('SignIn');
  };

  const handleProfessionalSignUp = () => {
    // Adicione a lógica para o cadastro como profissional
    navigation.navigate('SignUpProfessional');
  };

  const handleClientSignUp = () => {
    // Adicione a lógica para o cadastro como cliente
    navigation.navigate('SignUpClient');
  };

  return (
    <Screen>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <Content>
          <Logo source={logoImg} />

          <Form>
            <Container>
              <Title> Já possui conta? </Title>

              <Button title="Entrar" type="primary" onPress={handleLogin} />

              <CreateAcountLabel> Não possui conta? </CreateAcountLabel>

              <CreateAcountButton>
                <CreateAcountLabel>
                  {" "}
                  <Button title="Cadastrar como profissional" type="secondary" onPress={handleProfessionalSignUp} />
                </CreateAcountLabel>
              </CreateAcountButton>

              <CreateAcountButton>
                <CreateAcountLabel>
                  {" "}
                  <Button title="Cadastrar como cliente" type="secondary" onPress={handleClientSignUp} />
                </CreateAcountLabel>
              </CreateAcountButton>
            </Container>
          </Form>
        </Content>
      </KeyboardAvoidingView>
    </Screen>
  );
}